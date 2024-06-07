import { NextResponse, NextRequest } from "next/server";
import { headers } from "next/headers";
import connectMongo from "@/libs/mongoose";
import crypto from "crypto";
import config from "@/config";
import User from "@/models/User";

// This is where we receive LemonSqueezy webhook events
// It used to update the user data, send emails, etc...
// By default, it'll store the user in the database
// See more: https://shipfa.st/docs/features/payments
export async function POST(req: NextRequest) {
  const secret = process.env.LEMONSQUEEZY_SIGNING_SECRET;
  if (!secret) {
    return new Response("LEMONSQUEEZY_SIGNING_SECRET is required.", {
      status: 400,
    });
  }

  await connectMongo();

  // Verify the signature
  const text = await req.text();

  const hmac = crypto.createHmac("sha256", secret);
  const digest = Buffer.from(hmac.update(text).digest("hex"), "utf8");
  const signature = Buffer.from(headers().get("x-signature"), "utf8");

  if (!crypto.timingSafeEqual(digest, signature)) {
    return new Response("Invalid signature.", {
      status: 400,
    });
  }

  // Get the payload
  const payload = JSON.parse(text);

  const eventName = payload.meta.event_name;
  const customerId = payload.data.attributes.customer_id.toString();

  try {
    switch (eventName) {
      case "order_created": {
        // ✅ Grant access to the product
        const userId = payload.meta?.custom_data?.userId;

        const email = payload.data.attributes.user_email;
        const name = payload.data.attributes.user_name;
        const variantId =
          payload.data.attributes.first_order_item.variant_id.toString();

        const plan = config.lemonsqueezy.plans.find(
          (p) => p.variantId === variantId
        );
        if (!plan) {
          throw new Error("Plan not found for variantId:", variantId);
        }

        let user;

        // Get or create the user. userId is normally pass in the checkout session (clientReferenceID) to identify the user when we get the webhook event
        if (userId) {
          user = await User.findById(userId);
        } else if (email) {
          user = await User.findOne({ email });

          if (!user) {
            user = await User.create({
              email,
              name,
            });

            await user.save();
          }
        } else {
          throw new Error("No user found");
        }

        // Update user data + Grant user access to your product. It's a boolean in the database, but could be a number of credits, etc...
        user.variantId = variantId;
        user.customerId = customerId;
        user.hasAccess = true;
        await user.save();

        // Extra: send email with user link, product page, etc...
        // try {
        //   await sendEmail(...);
        // } catch (e) {
        //   console.error("Email issue:" + e?.message);
        // }

        break;
      }
      
      case "subscription_cancelled": {
        // The customer subscription stopped
        // ❌ Revoke access to the product

        const user = await User.findOne({ customerId });

        // Revoke access to your product
        user.hasAccess = false;
        await user.save();

        break;
      }

      default:
      // Unhandled event type
    }
    
  } catch (e) {
    console.error("lemonsqueezy error: ", e.message);
  }

  return NextResponse.json({});
}

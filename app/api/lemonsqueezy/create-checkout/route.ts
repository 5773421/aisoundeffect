import { createLemonSqueezyCheckout } from "@/libs/lemonsqueezy";
import connectMongo from "@/libs/mongoose";
import { authOptions } from "@/libs/next-auth";
import User from "@/models/User";
import { getServerSession } from "next-auth/next";
import { NextRequest, NextResponse } from "next/server";

// This function is used to create a Stripe Checkout Session (one-time payment or subscription)
// It's called by the <ButtonCheckout /> component
// By default, it doesn't force users to be authenticated. But if they are, it will prefill the Checkout data with their email and/or credit card
export async function POST(req: NextRequest) {
  const body = await req.json();

  if (!body.variantId) {
    return NextResponse.json(
      { error: "Variant ID is required" },
      { status: 400 }
    );
  } else if (!body.redirectUrl) {
    return NextResponse.json(
      { error: "Redirect URL is required" },
      { status: 400 }
    );
  }

  try {
    const session = await getServerSession(authOptions);

    await connectMongo();

    const user = await User.findById(session?.user?.id);

    const { variantId, redirectUrl } = body;

    const checkoutURL = await createLemonSqueezyCheckout({
      variantId,
      redirectUrl,
      // If user is logged in, this will automatically prefill Checkout data like email and/or credit card for faster checkout
      user,
      // If you send coupons from the frontend, you can pass it here
      // discountCode: body.discountCode,
    });

    return NextResponse.json({ url: checkoutURL });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: e?.message }, { status: 500 });
  }
}

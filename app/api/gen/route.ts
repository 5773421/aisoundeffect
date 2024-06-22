import { createLemonSqueezyCheckout } from "@/libs/lemonsqueezy";
import connectMongo from "@/libs/mongoose";
import { authOptions } from "@/libs/next-auth";
import User from "@/models/User";
import { getServerSession } from "next-auth/next";
import { NextRequest, NextResponse } from "next/server";
import * as fal from "@fal-ai/serverless-client";

// This function is used to create a Stripe Checkout Session (one-time payment or subscription)
// It's called by the <ButtonCheckout /> component
// By default, it doesn't force users to be authenticated. But if they are, it will prefill the Checkout data with their email and/or credit card
export async function POST(req: NextRequest) {
  const body = await req.json();

  if (!body.prompt) {
    return NextResponse.json(
      { error: "prompt is required" },
      { status: 400 }
    );
  }

  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Please Login in" },
        { status: 401 }
      );
    }
    await connectMongo();
    const user = await User.findById(session?.user?.id);
    console.log('user', user);
    // user.variantId = variantId;
    //     user.customerId = customerId;
    //     user.hasAccess = true;
    //     await user.save();

    const { prompt, start, total, steps } = body;
    const result: any = {};
    // const result: any = await fal.subscribe("fal-ai/stable-audio", {
    //   input: {
    //     "prompt": prompt,
    //     "seconds_start": start,
    //     "seconds_total": total,
    //     "steps": steps,
    //   },
    //   logs: false,
    // });
    // console.log('result', result);

    // return NextResponse.json(result?.audio_file);
    return NextResponse.json({});
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: e?.message }, { status: 500 });
  }
}

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
      { error: "Prompt is required" },
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
    const lastM = new Date(new Date().setMonth(new Date().getMonth() - 1));
    const creditArr = user.credits.filter((item: any) => (item.ctime > lastM) && item.credit);
    const credits = creditArr.reduce((pre: number, item: any) => {
        return pre + item.credit;
    }, 0);
    if (!credits) {
      return NextResponse.json(
        { error: "Credits are not enough!" },
        { status: 400 }
      );
    }

    const { prompt, start, total, steps } = body;
    const result: any = await fal.subscribe("fal-ai/stable-audio", {
      input: {
        "prompt": prompt,
        "seconds_start": start,
        "seconds_total": total,
        "steps": steps,
      },
      logs: false,
    });
    if (result?.audio_file) {
      creditArr[0].credit = creditArr[0].credit - 1;
      user.credits = [...creditArr];
      await user.save();
    }

    return NextResponse.json(result?.audio_file);
    // return NextResponse.json({});
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: e?.message }, { status: 500 });
  }
}

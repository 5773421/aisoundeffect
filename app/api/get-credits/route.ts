import connectMongo from "@/libs/mongoose";
import { authOptions } from "@/libs/next-auth";
import User from "@/models/User";
import { getServerSession } from "next-auth/next";
import { NextRequest, NextResponse } from "next/server";

// This function is used to create a Stripe Checkout Session (one-time payment or subscription)
// It's called by the <ButtonCheckout /> component
// By default, it doesn't force users to be authenticated. But if they are, it will prefill the Checkout data with their email and/or credit card
export async function GET(req: NextRequest) {

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

    return NextResponse.json({data: credits});
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: e?.message }, { status: 500 });
  }
}

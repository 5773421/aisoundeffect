import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/libs/next-auth";
import connectMongo from "@/libs/mongoose";
import User from "@/models/User";
import { createCustomerPortal } from "@/libs/lemonsqueezy";

export async function POST() {
  const session = await getServerSession(authOptions);

  if (session) {
    try {
      await connectMongo();

      const { id } = session.user;

      const user = await User.findById(id);

      if (!user?.customerId) {
        return NextResponse.json(
          {
            error:
              "You don't have a billing account yet. Make a purchase first.",
          },
          { status: 400 }
        );
      }

      const url = await createCustomerPortal({
        customerId: user.customerId,
      });

      return NextResponse.json({
        url,
      });
    } catch (e) {
      console.error(e);
      return NextResponse.json({ error: e?.message }, { status: 500 });
    }
  } else {
  // Not Signed in
  return NextResponse.json({ error: "Not signed in" }, { status: 401 });
  }
}

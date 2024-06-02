import NextAuth from "node:next-auth";
import { authOptions } from "@/libs/next-auth";

const handler = NextAuth(authOptions);
export const runtime = 'edge';

export { handler as GET, handler as POST };

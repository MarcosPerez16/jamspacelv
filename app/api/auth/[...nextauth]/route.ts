import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

//error checks in case ID or SECRET is missing at runtime as ! just silences Typescript at compile time
if (!process.env.GOOGLE_CLIENT_ID) throw new Error("Missing GOOGLE_CLIENT_ID");

if (!process.env.GOOGLE_CLIENT_SECRET)
  throw new Error("Missing GOOGLE_CLIENT_SECRET");

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
});

export { handler as GET, handler as POST };

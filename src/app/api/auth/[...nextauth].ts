//nextauth configuration

import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth, { AuthOptions } from "next-auth";
import prisma from "@/libs/prismadb";
// import GithubProvider from "next-auth/providers/github";
// import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID as string,
    //   clientSecret: process.env.GITHUB_SECRET as string,
    // }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_ID as string,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    // }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
      
      },
      async authorize(credentials:any) {
        console.log(credentials,"credentials")
        
        // if (!credentials || !credentials.email || !credentials.password) {
        //   throw new Error("Invalid Credentials");
        // }

        // const user = await prisma.user.findUnique({
        //   where: {
        //     email: credentials.email,
        //   },
        // });

        // if (!user || !user.hashedPassword) {
        //   throw new Error("Invalid Credentials");
        // }

        // const isCorrectPassword = await bcrypt.compare(
        //   credentials.password,
        //   user.hashedPassword
        // );

        // console.log(">>>>>user", user);

        // if (!isCorrectPassword) {
        //   throw new Error("Invalid Credentials");
        // }

        return credentials;
      },
    }),
  ],
  pages: {
signIn: "/",
  },
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
// pages/api/auth/[...nextauth].tsx

import NextAuth from 'next-auth';
import GoogleProvider from "next-auth/providers/google";
import prisma from 'lib/prisma';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    })
  ],

  callbacks: {
    async signIn({ account, profile }) {
      if (account?.provider === "google") {
        const googleProfile = profile as { email_verified: boolean, email: string };

        const googleAuth = googleProfile.email_verified && googleProfile.email.endsWith("@gmail.com")
        if (googleAuth) {
          saveToDataBase(profile).then(() => {
            console.log('User saved to database');
            return true;
          });

          return googleAuth;
        }
        
      }
      return true // Do different verification for other providers that don't have `email_verified`
    },
  },
});

async function saveToDataBase(profile: any) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: profile.email,
      },
    });

    if (!user) {
      await prisma.user.create({
        data: {
          email: profile.email,
          name: profile.name,
          family_name: profile.family_name,
          given_name: profile.given_name,
          locale: profile.locale,
          picture: profile.picture,
          accountType: 'Google',
          email_verified: profile.email_verified
        },
      });
    }
  } catch (error) {
    console.log(error);
  }
}

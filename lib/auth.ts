import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

// Password-based access - each password unlocks specific projects
const accessCodes = [
  {
    id: "au-vodka",
    name: "AU Vodka",
    password: "auvodka2024", // Change this!
  },
  {
    id: "restaurant-tycoon",
    name: "Restaurant Tycoon",
    password: "tycoon2024", // Change this!
  },
  {
    id: "timeless-treatments",
    name: "Timeless Treatments",
    password: "timeless2024", // Change this!
  },
  {
    id: "candelabra-concerts",
    name: "Candelabra Concerts",
    password: "candelabra2024", // Change this!
  },
  {
    id: "admin",
    name: "IV Strategies Admin",
    password: "masteradmin2025", // Change this! Admin sees all projects
  },
]

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.password) {
          return null
        }

        // Find the access code that matches the password
        const access = accessCodes.find(
          (a) => a.password === credentials.password
        )

        if (access) {
          return {
            id: access.id,
            name: access.name,
            email: `${access.id}@ivstrategies.com`, // Dummy email for NextAuth
          }
        }

        return null
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string
      }
      return session
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
}

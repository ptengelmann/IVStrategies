import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

// Client credentials - you can change these passwords before presenting
const clients = [
  {
    id: "au-vodka",
    name: "AU Vodka",
    email: "client@auvodka.com",
    password: "auvodka2024", // Change this!
  },
  {
    id: "restaurant-tycoon",
    name: "Restaurant Tycoon",
    email: "client@restauranttycoon.com",
    password: "tycoon2024", // Change this!
  },
  {
    id: "timeless-treatments",
    name: "Timeless Treatments",
    email: "client@timeless-treatments.co.uk",
    password: "timeless2024", // Change this!
  },
  {
    id: "admin",
    name: "IV Strategies Admin",
    email: "admin@ivstrategies.com",
    password: "admin2024", // Change this! Admin sees all projects
  },
]

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        const client = clients.find(
          (c) => c.email === credentials.email && c.password === credentials.password
        )

        if (client) {
          return {
            id: client.id,
            name: client.name,
            email: client.email,
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

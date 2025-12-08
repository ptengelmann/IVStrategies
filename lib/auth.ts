import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

// Password-based access - each password unlocks specific projects
// Passwords are stored in environment variables for security
const accessCodes = [
  {
    id: "au-vodka",
    name: "AU Vodka",
    password: process.env.PASSWORD_AU_VODKA,
  },
  {
    id: "restaurant-tycoon",
    name: "Restaurant Tycoon",
    password: process.env.PASSWORD_RESTAURANT_TYCOON,
  },
  {
    id: "timeless-treatments",
    name: "Timeless Treatments",
    password: process.env.PASSWORD_TIMELESS_TREATMENTS,
  },
  {
    id: "candelabra-concerts",
    name: "Candelabra Concerts",
    password: process.env.PASSWORD_CANDELABRA_CONCERTS,
  },
  {
    id: "admin",
    name: "IV Strategies Admin",
    password: process.env.PASSWORD_ADMIN,
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

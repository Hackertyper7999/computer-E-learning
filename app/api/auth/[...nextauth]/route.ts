import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook"
import CredentialsProvider from "next-auth/providers/credentials"
import { userService } from "@/lib/db"
import { mockUserService } from "@/lib/mock-db"

// Use the appropriate service based on environment
const authService = process.env.USE_MOCK_DB === "true" ? mockUserService : userService

// Configure NextAuth
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID || "",
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET || "",
    }),
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

        try {
          const result = await authService.loginUser({
            email: credentials.email,
            password: credentials.password,
          })

          if (result.success && result.user) {
            return {
              id: String(result.user.id),
              email: result.user.email,
              name: `${result.user.firstName} ${result.user.lastName}`,
            }
          }
        } catch (error) {
          console.error("Authentication error:", error)
        }

        return null
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      // Initial sign in
      if (account && user) {
        // If it's an OAuth sign in, create or update the user in our database
        if (account.provider === "google" || account.provider === "facebook") {
          try {
            // Check if user exists
            const existingUser = await authService.findUserByEmail(user.email as string)

            if (!existingUser) {
              // Create new user from OAuth data
              const names = (user.name || "").split(" ")
              const firstName = names[0] || ""
              const lastName = names.slice(1).join(" ") || ""

              const newUser = await authService.createOAuthUser({
                email: user.email as string,
                firstName,
                lastName,
                provider: account.provider,
                providerAccountId: account.providerAccountId,
              })

              if (newUser.success && newUser.user) {
                token.id = String(newUser.user.id)
              }
            } else {
              token.id = String(existingUser.id)
            }
          } catch (error) {
            console.error("Error handling OAuth sign in:", error)
          }
        }

        return {
          ...token,
          id: user.id,
        }
      }
      return token
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string
      }
      return session
    },
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET || "your-secret-key-change-in-production",
})

export { handler as GET, handler as POST }

import NextAuth, { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "@lib/prismadb"

const handler = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: "Credentials",

            credentials: {
              email: { label: "email", type: "email", },
              password: { label: "password", type: "password" }
            },
            async authorize(credentials, req) {

              if (!credentials?.email || !credentials?.password) {
                throw new Error('Invalid credentials');
              }

              const res = await fetch("http://localhost:3000/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: credentials?.email,
                    password: credentials?.password
                })     
              })

              const user = await res.json()
        
              if (user) {
                return user
              } else {
                return null
              }
            }
          })
    ],

    session: {
      strategy: "jwt"
    },

    pages: {
      signIn: "/auth/login"
    }
});

export {handler as GET, handler as POST}
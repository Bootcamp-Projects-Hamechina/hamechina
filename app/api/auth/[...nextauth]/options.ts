import type { NextAuthOptions } from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import { connectDB } from '@/lib/connectDB'
import prisma from '@/prisma'
import bcrypt from "bcrypt"

export const options: NextAuthOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            authorization: {
                params: {
                  prompt: "consent",
                  access_type: "offline",
                  response_type: "code"
                }
            }
          }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email:",
                    type: "text",
                    placeholder: "your-email"
                },
                password: {
                    label: "Password:",
                    type: "password",
                    placeholder: "your-password"
                }
            },
            async authorize(credentials) {
                // Docs: https://next-auth.js.org/configuration/providers/credentials
                if (!credentials || !credentials.email || !credentials.password) return null
                try {
                    await connectDB()
                    const user = await prisma.user.findFirst({where: { email: credentials.email}})
                  
                    if (!user?.hashPassword) return null

                    const isPasswordCorrect = await bcrypt.compare(credentials.password, user.hashPassword)
                    if (isPasswordCorrect) {
                        return user
                    } else {
                        return null
                    }
                } catch (error) {
                    console.log("🚀 ~ file: options.ts:44 ~ authorize ~ error:", error)
                    return null
                } finally {
                    prisma.$disconnect
                }
               
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    // aaaaaaaaaaaaaaaaaaa
    // Here we can add our own costume pages:
    // pages: {
    //     signIn: "/signIn",
    // },
}
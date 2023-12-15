import { connectDB } from "@/lib/connectDB";
import prisma from "@/prisma";
import { NextResponse } from "next/server"
import bcrypt from "bcrypt"

export const POST = async (req: Request) => {
    try {
        const {name, email, password} = await req.json()
        if(!name || !email || !password) return NextResponse.json("Invalid data", {
            status: 422
        });
        const hashPassword = await bcrypt.hash(password, 10)
        await connectDB()
        const user = await prisma.user.create({data: {email, name, hashPassword}})
        return NextResponse.json({user}, { status: 201 })
    } catch (error) {
        console.log("🚀 ~ file: route.ts:17 ~ Post ~ error:", error)
        return NextResponse.json({message: "Unable to add new user to db, Server Error"}, { status: 500 })
    } finally {
        await prisma.$disconnect
    }
}
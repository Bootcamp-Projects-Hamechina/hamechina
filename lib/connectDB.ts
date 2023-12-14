import prisma from "@/prisma"

export const connectDB = async () => {
    try {
        await prisma.$connect
    } catch (error) {
        throw new Error("Unable to connect to database")
    }
}
import prisma from "@/prisma"

export const connectDB = async () => {
    try {
        prisma.$connect
    } catch (error) {
        throw new Error("Unable to connect to database")
    }
}
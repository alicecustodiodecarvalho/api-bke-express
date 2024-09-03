import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()


export const create = async (user) => {
    const result = await prisma.user.create({
        data: user
    })
    return result
}
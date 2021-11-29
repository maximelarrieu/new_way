const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

exports.findAll = async () => {
    await prisma.$connect()

    const users = await prisma.user.findMany({
        include: {
            posts: true
        }
    })

    return users
}

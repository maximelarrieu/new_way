const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

exports.findOne = async () => {
    await prisma.$connect()

    const post = await prisma.post.findUnique({
        where: {
            id: '61a4a01314b4180820126e1e'
        }
    })

    return post
}

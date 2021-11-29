const Koa = require('koa')
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()
const app = new Koa()
const PORT = 3001

require('./services/user.service')(app)
require('./services/post.service')(app)

app.use(async ctx => {
  ctx.body = 'Hello World'
});

app.listen(PORT)
console.log(`The server is listening on port : ${PORT}`)
const Router = require('koa-router')
const controller = require('../controllers/user.controller')

const router = new Router()

module.exports = app => {
    router.get('/users', async ctx => {
        const users = await controller.findAll()
        ctx.body = {
            success: "true",
            users: users
        }
    })

    app
       .use(router.routes())
       .use(router.allowedMethods());
}


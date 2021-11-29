const Router = require('koa-router')
const controller = require('../controllers/post.controller')

const router = new Router()

module.exports = app => {
    router.get('/post/:id', async ctx => {
        const post = await controller.findOne()
        ctx.body = {
            success: "true",
            post: post
        }
    })

    app
       .use(router.routes())
       .use(router.allowedMethods());
}


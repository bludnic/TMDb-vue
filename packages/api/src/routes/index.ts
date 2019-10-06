import Router from 'koa-router'

const router = new Router()

router.get('/test', ctx => {
  ctx.body = 'Hello World'
})

export default router

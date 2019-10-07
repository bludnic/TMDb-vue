import { Context } from 'koa'

export default async (ctx: Context, next: Function) => {
  try {
    await next()
  } catch (err) {
    ctx.status = err.status || 500
    ctx.body = { error: err.message }
    ctx.app.emit('error', err, ctx)
  }
}

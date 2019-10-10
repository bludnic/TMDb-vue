import * as fs from 'fs'
import * as path from 'path'
import Router from 'koa-router'
import util from 'util'
import { Context } from 'koa'

const router = new Router()
const readFile = util.promisify(fs.readFile)

router.get('*', async (ctx: Context) => {
  ctx.set('Content-Type', 'text/html')

  ctx.body = await readFile(path.resolve(__dirname, '../../../web/dist/index.html'))
})

export default router

import * as path from 'path'
import util from 'util'
import Router from 'koa-router'
import * as fs from 'fs'

const router = new Router()
const readFile = util.promisify(fs.readFile)

router.get('*', async ctx => {
  ctx.set('Content-Type', 'text/html')

  ctx.body = await readFile(path.resolve(__dirname, '../../../web/dist/index.html'))
})

export default router

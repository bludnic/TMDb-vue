import 'dotenv/config'
import * as path from 'path'
import Koa from 'koa'
import serve from 'koa-static'

import router from './routes'
import staticMiddleware from './middlewares/static'

const PORT = Number(process.env.PORT) || 4000
const HOST = process.env.HOST || '127.0.0.1'
const app = new Koa()

app.use(router.routes())
app.use(serve(path.resolve(__dirname, '../../web/dist')))
app.use(staticMiddleware.routes())

// @ts-ignore
app.listen(PORT, HOST, () => {
  console.log(`App listen on http://${HOST}:${PORT}`)
})

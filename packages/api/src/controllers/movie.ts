import { Context } from 'koa'

import tmdbClient from '../services/tmdbClient'

const movie = {
  async getAll (ctx: Context) {
    const res = await tmdbClient.getMovies(ctx.query.page, ctx.query.genre)

    ctx.body = res
  }
}

export default movie

import { Context } from 'koa'

import tmdbClient from '../services/tmdbClient'

const movie = {
  async getAll (ctx: Context) {
    ctx.body = await tmdbClient.getGenres()
  }
}

export default movie

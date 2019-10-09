import { Context } from 'koa'

import tmdbClient from '../services/tmdbClient'

const movie = {
  async getAll (ctx: Context) {
    const res = await tmdbClient.getMovies(ctx.query.page, ctx.query.genre)

    ctx.body = res
  },

  async getPopular (ctx: Context) {
    const res = await tmdbClient.getPopular(ctx.query.page)

    ctx.body = res
  },

  async getById (ctx: Context) {
    const res = await tmdbClient.getById(ctx.params.id)

    ctx.body = res
  },

  async getVideos (ctx: Context) {
    const res = await tmdbClient.getVideos(ctx.params.id)

    ctx.body = res
  }
}

export default movie

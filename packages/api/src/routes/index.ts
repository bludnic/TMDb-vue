import Router from 'koa-router'
import validate from '../util/validate'

import movie from '../controllers/movie'
import genre from '../controllers/genre'
import validations from '../validations/movie'

const router = new Router()

router.get('/test', ctx => {
  ctx.body = 'Hello World'
})

router.get('/movie', validate(validations.getAll), movie.getAll)
router.get('/movie/popular', validate(validations.getPopular), movie.getPopular)
router.get('/movie/:id', validate(validations.getById), movie.getById)
router.get('/movie/:id/videos', validate(validations.getVideos), movie.getVideos)
router.get('/genre', genre.getAll)

export default router

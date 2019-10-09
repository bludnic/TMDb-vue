import joi from 'joi'

export default {
  getAll: {
    query: {
      page: joi.number(),
      genre: joi.string().regex(/^([0-9]+,)*[0-9]+$/)
    }
  },
  getPopular: {
    query: {
      page: joi.number()
    }
  },
  getById: {
    params: {
      id: joi.number()
    }
  },
  getVideos: {
    params: {
      id: joi.number()
    }
  }
}

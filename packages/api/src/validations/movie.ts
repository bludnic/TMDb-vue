import joi from 'joi'

export default {
  getAll: {
    query: {
      page: joi.number(),
      genre: joi.string().regex(/^([0-9]+,)*[0-9]+$/)
    }
  }
}

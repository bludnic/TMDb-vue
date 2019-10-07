import { Context } from 'koa'
import joi from 'joi'

import { KeyValue } from '../models'

function validateObject (
  object: KeyValue = {},
  label: string,
  schema?: KeyValue,
  options?: KeyValue
) {
  if (schema) {
    const { error } = joi.validate(object, schema, options)

    if (error) {
      throw new Error(`Invalid ${label} - ${error.message}`)
    }
  }
}

export default (validationObject: KeyValue) => {
  return (ctx: Context, next: Function) => {
    try {
      // Validate each request data object in the Koa context object
      validateObject(ctx.headers, 'Headers', validationObject.headers, { allowUnknown: true })
      validateObject(ctx.params, 'URL Parameters', validationObject.params)
      validateObject(ctx.query, 'URL Query', validationObject.query)

      if (ctx.request.body) {
        validateObject(ctx.request.body, 'Request Body', validationObject.body)
      }

      return next()
    } catch (err) {
      ctx.throw(400, err.message)
    }
  }
}

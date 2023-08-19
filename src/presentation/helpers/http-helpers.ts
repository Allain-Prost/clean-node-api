import { ServerError } from '../erros/server-error'
import type { HttResponse } from '../protocols/http'

export const badRequest = (error: Error): HttResponse => ({
  statusCode: 400,
  body: error
})

export const serverError = (): HttResponse => ({
  statusCode: 500,
  body: new ServerError()
})

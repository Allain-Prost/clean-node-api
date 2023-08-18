import type { HttResponse } from '../protocols/http'

export const badRequest = (error: Error): HttResponse => ({
  statusCode: 400,
  body: error
})

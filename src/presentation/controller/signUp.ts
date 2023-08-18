import { MissingParamError } from '../erros/missing-param-error'
import type { HttResponse, HttpRequest } from '../protocols/http'

export default class SignUpController {
  handle (httpResquest: HttpRequest): HttResponse {
    if (!httpResquest.body.name) {
      return {
        statusCode: 400,
        body: new MissingParamError('name')
      }
    }
    if (!httpResquest.body.email) {
      return {
        statusCode: 400,
        body: new MissingParamError('email')
      }
    }
    return {
      statusCode: 200,
      body: 'Success'
    }
  }
}

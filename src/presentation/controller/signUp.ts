import { MissingParamError } from '../erros/missing-param-error'
import { badRequest } from '../helpers/http-helpers'
import type { HttResponse, HttpRequest } from '../protocols/http'

export default class SignUpController {
  handle (httpResquest: HttpRequest): HttResponse {
    if (!httpResquest.body.name) {
      // Como devemos ler: retorne um badRequest caso esteja faltando um paramentro chamado name
      return badRequest(new MissingParamError('name'))
    }
    if (!httpResquest.body.email) {
      return badRequest(new MissingParamError('email'))
    }
    return {
      statusCode: 200,
      body: 'Success'
    }
  }
}

import { MissingParamError } from '../erros/missing-param-error'
import { badRequest } from '../helpers/http-helpers'
import type { Controller } from '../protocols/controller'
import type { HttResponse, HttpRequest } from '../protocols/http'

export default class SignUpController implements Controller {
  handle (httpResquest: HttpRequest): HttResponse {
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
    for (const field of requiredFields) {
      if (!httpResquest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }
    return {
      statusCode: 200,
      body: 'Success'
    }
  }
}

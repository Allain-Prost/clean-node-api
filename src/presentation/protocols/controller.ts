import type { HttResponse, HttpRequest } from './http'

export interface Controller {
  handle: (httpResquest: HttpRequest) => HttResponse
}

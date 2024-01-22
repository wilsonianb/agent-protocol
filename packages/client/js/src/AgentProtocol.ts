/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest'
import type { OpenAPIConfig } from './core/OpenAPI'
import { FetchHttpRequest } from './core/FetchHttpRequest'

import { AgentService } from './services/AgentService'

type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest

export class AgentProtocol {
  public readonly agent: AgentService

  public readonly request: BaseHttpRequest

  constructor(
    config?: Partial<OpenAPIConfig>,
    HttpRequest: HttpRequestConstructor = FetchHttpRequest
  ) {
    this.request = new HttpRequest({
      BASE: config?.BASE ?? 'http://0.0.0.0:8000',
      VERSION: config?.VERSION ?? '1',
      WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
      CREDENTIALS: config?.CREDENTIALS ?? 'include',
      TOKEN: config?.TOKEN,
      USERNAME: config?.USERNAME,
      PASSWORD: config?.PASSWORD,
      HEADERS: config?.HEADERS,
      ENCODE_PATH: config?.ENCODE_PATH,
    })

    this.agent = new AgentService(this.request)
  }
}

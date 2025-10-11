// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { LlamacloudProd } from '../client';

export abstract class APIResource {
  protected _client: LlamacloudProd;

  constructor(client: LlamacloudProd) {
    this._client = client;
  }
}

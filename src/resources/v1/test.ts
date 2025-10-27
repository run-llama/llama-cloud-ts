// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { Stream } from '../../core/streaming';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Test extends APIResource {
  /**
   * Testing streaming endpoint.
   */
  stream(options?: RequestOptions): APIPromise<Stream<TestStreamResponse>> {
    return this._client.get('/api/v1/test/stream', {
      ...options,
      headers: buildHeaders([{ Accept: 'text/event-stream' }, options?.headers]),
      stream: true,
    }) as APIPromise<Stream<TestStreamResponse>>;
  }
}

/**
 * Server-Sent Events stream
 */
export type TestStreamResponse = string;

export declare namespace Test {
  export { type TestStreamResponse as TestStreamResponse };
}

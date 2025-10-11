// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Raw extends APIResource {
  /**
   * Get a job by id
   */
  getRawJson(jobID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(path`/api/v1/parsing/job/${jobID}/result/raw/json`, options);
  }

  /**
   * Get a job by id
   */
  getRawMarkdown(jobID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(path`/api/v1/parsing/job/${jobID}/result/raw/markdown`, options);
  }

  /**
   * Get a job by id
   */
  getRawPdf(jobID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(path`/api/v1/parsing/job/${jobID}/result/raw/pdf`, options);
  }

  /**
   * Get a job by id
   */
  getRawStructured(jobID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(path`/api/v1/parsing/job/${jobID}/result/raw/structured`, options);
  }

  /**
   * Get a job by id
   */
  getRawText(jobID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(path`/api/v1/parsing/job/${jobID}/result/raw/text`, options);
  }

  /**
   * Get a job by id
   */
  getRawXlsx(jobID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(path`/api/v1/parsing/job/${jobID}/result/raw/xlsx`, options);
  }
}

export type RawGetRawJsonResponse = unknown;

export type RawGetRawMarkdownResponse = unknown;

export type RawGetRawPdfResponse = unknown;

export type RawGetRawStructuredResponse = unknown;

export type RawGetRawTextResponse = unknown;

export type RawGetRawXlsxResponse = unknown;

export declare namespace Raw {
  export {
    type RawGetRawJsonResponse as RawGetRawJsonResponse,
    type RawGetRawMarkdownResponse as RawGetRawMarkdownResponse,
    type RawGetRawPdfResponse as RawGetRawPdfResponse,
    type RawGetRawStructuredResponse as RawGetRawStructuredResponse,
    type RawGetRawTextResponse as RawGetRawTextResponse,
    type RawGetRawXlsxResponse as RawGetRawXlsxResponse,
  };
}

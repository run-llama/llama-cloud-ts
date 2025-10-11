// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Raw extends APIResource {
  /**
   * Get a job by id
   */
  getJson(jobID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(path`/api/parsing/job/${jobID}/result/raw/json`, options);
  }

  /**
   * Get a job by id
   */
  getMarkdown(jobID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(path`/api/parsing/job/${jobID}/result/raw/markdown`, options);
  }

  /**
   * Get a job by id
   */
  getPdf(jobID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(path`/api/parsing/job/${jobID}/result/raw/pdf`, options);
  }

  /**
   * Get a job by id
   */
  getStructured(jobID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(path`/api/parsing/job/${jobID}/result/raw/structured`, options);
  }

  /**
   * Get a job by id
   */
  getText(jobID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(path`/api/parsing/job/${jobID}/result/raw/text`, options);
  }

  /**
   * Get a job by id
   */
  getXlsx(jobID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(path`/api/parsing/job/${jobID}/result/raw/xlsx`, options);
  }
}

export type RawGetJsonResponse = unknown;

export type RawGetMarkdownResponse = unknown;

export type RawGetPdfResponse = unknown;

export type RawGetStructuredResponse = unknown;

export type RawGetTextResponse = unknown;

export type RawGetXlsxResponse = unknown;

export declare namespace Raw {
  export {
    type RawGetJsonResponse as RawGetJsonResponse,
    type RawGetMarkdownResponse as RawGetMarkdownResponse,
    type RawGetPdfResponse as RawGetPdfResponse,
    type RawGetStructuredResponse as RawGetStructuredResponse,
    type RawGetTextResponse as RawGetTextResponse,
    type RawGetXlsxResponse as RawGetXlsxResponse,
  };
}

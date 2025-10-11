// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as RawAPI from './raw';
import {
  Raw,
  RawGetJsonResponse,
  RawGetMarkdownResponse,
  RawGetPdfResponse,
  RawGetStructuredResponse,
  RawGetTextResponse,
  RawGetXlsxResponse,
} from './raw';
import * as ResultResultAPI from '../../../v1/parsing/job/result/result';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Result extends APIResource {
  raw: RawAPI.Raw = new RawAPI.Raw(this._client);

  /**
   * Get a job by id
   */
  getImage(name: string, params: ResultGetImageParams, options?: RequestOptions): APIPromise<Response> {
    const { job_id } = params;
    return this._client.get(path`/api/parsing/job/${job_id}/result/image/${name}`, {
      ...options,
      headers: buildHeaders([{ Accept: 'image/jpeg' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Get a job by id
   *
   * Note: The 'credits_used' and 'job_credits_usage' fields in the response metadata
   * are deprecated and will be removed in a future release.
   */
  getJson(
    jobID: string,
    query: ResultGetJsonParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ResultResultAPI.ParsingJobJsonResult> {
    return this._client.get(path`/api/parsing/job/${jobID}/result/json`, { query, ...options });
  }

  /**
   * Get a job by id
   *
   * Note: The 'credits_used' and 'job_credits_usage' fields in the response metadata
   * are deprecated and will be removed in a future release.
   */
  getMarkdown(
    jobID: string,
    query: ResultGetMarkdownParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ResultResultAPI.ParsingJobMarkdownResult> {
    return this._client.get(path`/api/parsing/job/${jobID}/result/markdown`, { query, ...options });
  }

  /**
   * Get a job by id
   */
  getPdf(jobID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(path`/api/parsing/job/${jobID}/result/pdf`, options);
  }

  /**
   * Get a job by id
   *
   * Note: The 'credits_used' and 'job_credits_usage' fields in the response metadata
   * are deprecated and will be removed in a future release.
   */
  getStructured(
    jobID: string,
    query: ResultGetStructuredParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ResultResultAPI.ParsingJobStructuredResult> {
    return this._client.get(path`/api/parsing/job/${jobID}/result/structured`, { query, ...options });
  }

  /**
   * Get a job by id
   *
   * Note: The 'credits_used' and 'job_credits_usage' fields in the response metadata
   * are deprecated and will be removed in a future release.
   */
  getText(
    jobID: string,
    query: ResultGetTextParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ResultResultAPI.ParsingJobTextResult> {
    return this._client.get(path`/api/parsing/job/${jobID}/result/text`, { query, ...options });
  }

  /**
   * Get a job by id
   */
  getXlsx(jobID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(path`/api/parsing/job/${jobID}/result/xlsx`, options);
  }
}

export type ResultGetPdfResponse = unknown;

export type ResultGetXlsxResponse = unknown;

export interface ResultGetImageParams {
  job_id: string;
}

export interface ResultGetJsonParams {
  organization_id?: string | null;
}

export interface ResultGetMarkdownParams {
  organization_id?: string | null;
}

export interface ResultGetStructuredParams {
  organization_id?: string | null;
}

export interface ResultGetTextParams {
  organization_id?: string | null;
}

Result.Raw = Raw;

export declare namespace Result {
  export {
    type ResultGetPdfResponse as ResultGetPdfResponse,
    type ResultGetXlsxResponse as ResultGetXlsxResponse,
    type ResultGetImageParams as ResultGetImageParams,
    type ResultGetJsonParams as ResultGetJsonParams,
    type ResultGetMarkdownParams as ResultGetMarkdownParams,
    type ResultGetStructuredParams as ResultGetStructuredParams,
    type ResultGetTextParams as ResultGetTextParams,
  };

  export {
    Raw as Raw,
    type RawGetJsonResponse as RawGetJsonResponse,
    type RawGetMarkdownResponse as RawGetMarkdownResponse,
    type RawGetPdfResponse as RawGetPdfResponse,
    type RawGetStructuredResponse as RawGetStructuredResponse,
    type RawGetTextResponse as RawGetTextResponse,
    type RawGetXlsxResponse as RawGetXlsxResponse,
  };
}

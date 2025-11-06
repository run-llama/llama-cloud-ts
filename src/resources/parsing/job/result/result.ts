// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as RawAPI from './raw';
import {
  Raw,
  RawGetRawJsonResponse,
  RawGetRawMarkdownResponse,
  RawGetRawPdfResponse,
  RawGetRawStructuredResponse,
  RawGetRawTextResponse,
  RawGetRawXlsxResponse,
} from './raw';
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
    return this._client.get(path`/api/v1/parsing/job/${job_id}/result/image/${name}`, {
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
  ): APIPromise<ParsingJobJsonResult> {
    return this._client.get(path`/api/v1/parsing/job/${jobID}/result/json`, { query, ...options });
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
  ): APIPromise<ParsingJobMarkdownResult> {
    return this._client.get(path`/api/v1/parsing/job/${jobID}/result/markdown`, { query, ...options });
  }

  /**
   * Get a job by id
   */
  getPdf(jobID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(path`/api/v1/parsing/job/${jobID}/result/pdf`, options);
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
  ): APIPromise<ParsingJobStructuredResult> {
    return this._client.get(path`/api/v1/parsing/job/${jobID}/result/structured`, { query, ...options });
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
  ): APIPromise<ParsingJobTextResult> {
    return this._client.get(path`/api/v1/parsing/job/${jobID}/result/text`, { query, ...options });
  }

  /**
   * Get a job by id
   */
  getXlsx(jobID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(path`/api/v1/parsing/job/${jobID}/result/xlsx`, options);
  }
}

export interface ParsingJobJsonResult {
  /**
   * Parsing job metadata , including usage
   */
  job_metadata: unknown;

  /**
   * The json result of the parsing job
   */
  pages: unknown;
}

export interface ParsingJobMarkdownResult {
  /**
   * Parsing job metadata , including usage
   */
  job_metadata: unknown;

  /**
   * The markdown result of the parsing job
   */
  markdown: string;
}

export interface ParsingJobStructuredResult {
  /**
   * Parsing job metadata , including usage
   */
  job_metadata: unknown;

  /**
   * The json result of the structured parsing job
   */
  structured: unknown;
}

export interface ParsingJobTextResult {
  /**
   * Parsing job metadata , including usage
   */
  job_metadata: unknown;

  /**
   * The text result of the parsing job
   */
  text: string;
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
    type ParsingJobJsonResult as ParsingJobJsonResult,
    type ParsingJobMarkdownResult as ParsingJobMarkdownResult,
    type ParsingJobStructuredResult as ParsingJobStructuredResult,
    type ParsingJobTextResult as ParsingJobTextResult,
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
    type RawGetRawJsonResponse as RawGetRawJsonResponse,
    type RawGetRawMarkdownResponse as RawGetRawMarkdownResponse,
    type RawGetRawPdfResponse as RawGetRawPdfResponse,
    type RawGetRawStructuredResponse as RawGetRawStructuredResponse,
    type RawGetRawTextResponse as RawGetRawTextResponse,
    type RawGetRawXlsxResponse as RawGetRawXlsxResponse,
  };
}

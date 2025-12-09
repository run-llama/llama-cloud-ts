// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Result extends APIResource {
  /**
   * Get a job by id
   */
  getImage(name: string, params: ResultGetImageParams, options?: RequestOptions): APIPromise<Response> {
    const { job_id, ...query } = params;
    return this._client.get(path`/api/v1/parsing/job/${job_id}/result/image/${name}`, {
      query,
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
  getPdf(
    jobID: string,
    query: ResultGetPdfParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.get(path`/api/v1/parsing/job/${jobID}/result/pdf`, { query, ...options });
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
  getXlsx(
    jobID: string,
    query: ResultGetXlsxParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.get(path`/api/v1/parsing/job/${jobID}/result/xlsx`, { query, ...options });
  }
}

/**
 * Response schema for parsing job JSON result.
 */
export interface ParsingJobJsonResult {
  /**
   * Parsing job metadata, including usage
   */
  job_metadata: unknown;

  /**
   * The json result of the parsing job
   */
  pages: unknown;
}

/**
 * Response schema for parsing job markdown result.
 */
export interface ParsingJobMarkdownResult {
  /**
   * Parsing job metadata, including usage
   */
  job_metadata: unknown;

  /**
   * The markdown result of the parsing job
   */
  markdown: string;
}

/**
 * Response schema for parsing job structured result.
 */
export interface ParsingJobStructuredResult {
  /**
   * Parsing job metadata, including usage
   */
  job_metadata: unknown;

  /**
   * The json result of the structured parsing job
   */
  structured: unknown;
}

/**
 * Response schema for parsing job text result.
 */
export interface ParsingJobTextResult {
  /**
   * Parsing job metadata, including usage
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
  /**
   * Path param:
   */
  job_id: string;

  /**
   * Query param:
   */
  organization_id?: string | null;

  /**
   * Query param:
   */
  project_id?: string | null;
}

export interface ResultGetJsonParams {
  organization_id?: string | null;

  project_id?: string | null;
}

export interface ResultGetMarkdownParams {
  organization_id?: string | null;

  project_id?: string | null;
}

export interface ResultGetPdfParams {
  organization_id?: string | null;

  project_id?: string | null;
}

export interface ResultGetStructuredParams {
  organization_id?: string | null;

  project_id?: string | null;
}

export interface ResultGetTextParams {
  organization_id?: string | null;

  project_id?: string | null;
}

export interface ResultGetXlsxParams {
  organization_id?: string | null;

  project_id?: string | null;
}

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
    type ResultGetPdfParams as ResultGetPdfParams,
    type ResultGetStructuredParams as ResultGetStructuredParams,
    type ResultGetTextParams as ResultGetTextParams,
    type ResultGetXlsxParams as ResultGetXlsxParams,
  };
}

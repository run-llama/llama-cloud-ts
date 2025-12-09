// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as FilesAPI from '../../files';
import * as ParsingAPI from '../parsing';
import * as ResultAPI from './result';
import {
  ParsingJobJsonResult,
  ParsingJobMarkdownResult,
  ParsingJobStructuredResult,
  ParsingJobTextResult,
  Result,
  ResultGetImageParams,
  ResultGetJsonParams,
  ResultGetMarkdownParams,
  ResultGetPdfParams,
  ResultGetPdfResponse,
  ResultGetStructuredParams,
  ResultGetTextParams,
  ResultGetXlsxParams,
  ResultGetXlsxResponse,
} from './result';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Job extends APIResource {
  result: ResultAPI.Result = new ResultAPI.Result(this._client);

  /**
   * Generate a presigned URL for a job
   */
  generatePresignedURL(
    filename: string,
    params: JobGeneratePresignedURLParams,
    options?: RequestOptions,
  ): APIPromise<FilesAPI.PresignedURL> {
    const { job_id } = params;
    return this._client.get(path`/api/v1/parsing/job/${job_id}/read/${filename}`, options);
  }

  /**
   * Get a job by id
   */
  get(
    jobID: string,
    query: JobGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ParsingAPI.ParsingJob> {
    return this._client.get(path`/api/v1/parsing/job/${jobID}`, { query, ...options });
  }

  /**
   * Get detailed parsing job information including status, parameters, and
   * telemetry.
   *
   * Returns comprehensive job details with:
   *
   * - Job status and error information
   * - Job parameters (with sensitive API keys removed)
   * - Job metadata (telemetry, performance metrics)
   * - Session logs (errors, warnings, page-level details)
   */
  getDetails(
    jobID: string,
    query: JobGetDetailsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.get(path`/api/v1/parsing/job/${jobID}/details`, { query, ...options });
  }
}

export type JobGetDetailsResponse = unknown;

export interface JobGeneratePresignedURLParams {
  job_id: string;
}

export interface JobGetParams {
  organization_id?: string | null;

  project_id?: string | null;
}

export interface JobGetDetailsParams {
  organization_id?: string | null;

  project_id?: string | null;
}

Job.Result = Result;

export declare namespace Job {
  export {
    type JobGetDetailsResponse as JobGetDetailsResponse,
    type JobGeneratePresignedURLParams as JobGeneratePresignedURLParams,
    type JobGetParams as JobGetParams,
    type JobGetDetailsParams as JobGetDetailsParams,
  };

  export {
    Result as Result,
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

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as FilesAPI from '../../files/files';
import * as ParsingAPI from '../parsing';
import * as ResultAPI from './result/result';
import {
  ParsingJobJsonResult,
  ParsingJobMarkdownResult,
  ParsingJobStructuredResult,
  ParsingJobTextResult,
  Result,
  ResultGetImageParams,
  ResultGetJsonParams,
  ResultGetMarkdownParams,
  ResultGetPdfResponse,
  ResultGetStructuredParams,
  ResultGetTextParams,
  ResultGetXlsxResponse,
} from './result/result';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Job extends APIResource {
  result: ResultAPI.Result = new ResultAPI.Result(this._client);

  /**
   * Get a job by id
   */
  retrieve(jobID: string, options?: RequestOptions): APIPromise<ParsingAPI.ParsingJob> {
    return this._client.get(path`/api/v1/parsing/job/${jobID}`, options);
  }

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
  getDetails(jobID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(path`/api/v1/parsing/job/${jobID}/details`, options);
  }

  /**
   * Get a job by id
   */
  getParameters(jobID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(path`/api/v1/parsing/job/${jobID}/parameters`, options);
  }
}

export type JobGetDetailsResponse = unknown;

export type JobGetParametersResponse = unknown;

export interface JobGeneratePresignedURLParams {
  job_id: string;
}

Job.Result = Result;

export declare namespace Job {
  export {
    type JobGetDetailsResponse as JobGetDetailsResponse,
    type JobGetParametersResponse as JobGetParametersResponse,
    type JobGeneratePresignedURLParams as JobGeneratePresignedURLParams,
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
    type ResultGetStructuredParams as ResultGetStructuredParams,
    type ResultGetTextParams as ResultGetTextParams,
  };
}

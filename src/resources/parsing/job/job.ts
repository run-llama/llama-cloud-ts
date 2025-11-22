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
  ResultGetPdfResponse,
  ResultGetStructuredParams,
  ResultGetTextParams,
  ResultGetXlsxResponse,
} from './result';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';
import { pollUntilComplete, PollingOptions } from '../../../core/polling';

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
  get(jobID: string, options?: RequestOptions): APIPromise<ParsingAPI.ParsingJob> {
    return this._client.get(path`/api/v1/parsing/job/${jobID}`, options);
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

  /**
   * Wait for a parsing job to complete by polling until it reaches a terminal state.
   *
   * This method polls the job status at regular intervals until the job completes
   * successfully or fails. It uses configurable backoff strategies to optimize
   * polling behavior.
   *
   * @param jobID - The ID of the parsing job to wait for
   * @param options - Polling configuration options
   * @returns The completed ParsingJob
   * @throws {PollingTimeoutError} If the job doesn't complete within the timeout period
   * @throws {PollingError} If the job fails or is cancelled
   *
   * @example
   * ```typescript
   * import { LlamaCloud } from 'llama-cloud';
   *
   * const client = new LlamaCloud({ apiKey: '...' });
   *
   * // Upload a file for parsing
   * const job = await client.parsing.uploadFile({ file: myFile });
   *
   * // Wait for it to complete
   * const completedJob = await client.parsing.job.waitForCompletion(
   *   job.id,
   *   { verbose: true }
   * );
   *
   * // Get the result
   * const result = await client.parsing.job.result.getJson(job.id);
   * ```
   */
  async waitForCompletion(
    jobID: string,
    options?: PollingOptions & RequestOptions,
  ): Promise<ParsingAPI.ParsingJob> {
    const { pollingInterval, maxInterval, timeout, backoff, verbose, ...requestOptions } = options || {};

    const getStatus = async (): Promise<ParsingAPI.ParsingJob> => {
      return await this.get(jobID, requestOptions);
    };

    const isComplete = (job: ParsingAPI.ParsingJob): boolean => {
      return job.status === 'SUCCESS' || job.status === 'PARTIAL_SUCCESS';
    };

    const isError = (job: ParsingAPI.ParsingJob): boolean => {
      return job.status === 'ERROR' || job.status === 'CANCELLED';
    };

    const getErrorMessage = (job: ParsingAPI.ParsingJob): string => {
      const errorParts = [`Job ${jobID} failed with status: ${job.status}`];
      if (job.error_message) {
        errorParts.push(`Error: ${job.error_message}`);
      }
      return errorParts.join(' | ');
    };

    return await pollUntilComplete(getStatus, isComplete, isError, getErrorMessage, {
      pollingInterval,
      maxInterval,
      timeout,
      backoff,
      verbose,
    });
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

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as RunsAPI from './runs';
import * as FilesAPI from '../files/files';
import * as ParsingAPI from '../parsing/parsing';
import * as ExtractionAgentsAPI from './extraction-agents/extraction-agents';
import { APIPromise } from '../../../core/api-promise';
import { type Uploadable } from '../../../core/uploads';
import { RequestOptions } from '../../../internal/request-options';
import { multipartFormRequestOptions } from '../../../internal/uploads';
import { path } from '../../../internal/utils/path';

export class Jobs extends APIResource {
  /**
   * Run Job
   */
  create(params: JobCreateParams, options?: RequestOptions): APIPromise<ExtractJob> {
    const { from_ui, ...body } = params;
    return this._client.post('/api/v1/extraction/jobs', { query: { from_ui }, body, ...options });
  }

  /**
   * Get Job
   */
  retrieve(jobID: string, options?: RequestOptions): APIPromise<ExtractJob> {
    return this._client.get(path`/api/v1/extraction/jobs/${jobID}`, options);
  }

  /**
   * List Jobs
   */
  list(query: JobListParams, options?: RequestOptions): APIPromise<JobListResponse> {
    return this._client.get('/api/v1/extraction/jobs', { query, ...options });
  }

  /**
   * Run Batch Jobs
   */
  batch(params: JobBatchParams, options?: RequestOptions): APIPromise<JobBatchResponse> {
    const { from_ui, ...body } = params;
    return this._client.post('/api/v1/extraction/jobs/batch', { query: { from_ui }, body, ...options });
  }

  /**
   * Run Job On File
   */
  file(params: JobFileParams, options?: RequestOptions): APIPromise<ExtractJob> {
    const { from_ui, ...body } = params;
    return this._client.post(
      '/api/v1/extraction/jobs/file',
      multipartFormRequestOptions({ query: { from_ui }, body, ...options }, this._client),
    );
  }

  /**
   * Get Job Result
   */
  retrieveResult(
    jobID: string,
    query: JobRetrieveResultParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<JobRetrieveResultResponse> {
    return this._client.get(path`/api/v1/extraction/jobs/${jobID}/result`, { query, ...options });
  }
}

export interface ExtractJob {
  /**
   * The id of the extraction job
   */
  id: string;

  /**
   * The agent that the job was run on.
   */
  extraction_agent: ExtractionAgentsAPI.ExtractAgent;

  /**
   * The file that the extract was extracted from
   */
  file: FilesAPI.File;

  /**
   * The status of the extraction job
   */
  status: ParsingAPI.StatusEnum;

  /**
   * The error that occurred during extraction
   */
  error?: string | null;
}

/**
 * Allows the user to configure webhook options for notifications and callbacks.
 */
export interface WebhookConfiguration {
  /**
   * List of event names to subscribe to
   */
  webhook_events?: Array<
    | 'extract.pending'
    | 'extract.success'
    | 'extract.error'
    | 'extract.partial_success'
    | 'extract.cancelled'
    | 'parse.pending'
    | 'parse.success'
    | 'parse.error'
    | 'parse.partial_success'
    | 'parse.cancelled'
    | 'unmapped_event'
  > | null;

  /**
   * Custom HTTP headers to include with webhook requests.
   */
  webhook_headers?: { [key: string]: string } | null;

  /**
   * The output format to use for the webhook. Defaults to string if none supplied.
   * Currently supported values: string, json
   */
  webhook_output_format?: string | null;

  /**
   * The URL to send webhook notifications to.
   */
  webhook_url?: string | null;
}

export type JobListResponse = Array<ExtractJob>;

export type JobBatchResponse = Array<ExtractJob>;

/**
 * Schema for an extraction resultset.
 */
export interface JobRetrieveResultResponse {
  /**
   * The data extracted from the file
   */
  data:
    | { [key: string]: { [key: string]: unknown } | Array<unknown> | string | number | boolean | null }
    | Array<{ [key: string]: { [key: string]: unknown } | Array<unknown> | string | number | boolean | null }>
    | null;

  /**
   * The id of the extraction agent
   */
  extraction_agent_id: string;

  /**
   * The metadata extracted from the file
   */
  extraction_metadata: {
    [key: string]: { [key: string]: unknown } | Array<unknown> | string | number | boolean | null;
  };

  /**
   * The id of the extraction run
   */
  run_id: string;
}

export interface JobCreateParams {
  /**
   * Body param: The id of the extraction agent
   */
  extraction_agent_id: string;

  /**
   * Body param: The id of the file
   */
  file_id: string;

  /**
   * Query param:
   */
  from_ui?: boolean;

  /**
   * Body param: Additional parameters for the extraction agent.
   */
  config_override?: RunsAPI.ExtractConfig | null;

  /**
   * Body param: The data schema to override the extraction agent's data schema with
   */
  data_schema_override?:
    | { [key: string]: { [key: string]: unknown } | Array<unknown> | string | number | boolean | null }
    | string
    | null;

  /**
   * Body param: The priority for the request. This field may be ignored or
   * overwritten depending on the organization tier.
   */
  priority?: 'low' | 'medium' | 'high' | 'critical' | null;

  /**
   * Body param: The outbound webhook configurations
   */
  webhook_configurations?: Array<WebhookConfiguration> | null;
}

export interface JobListParams {
  extraction_agent_id: string;
}

export interface JobBatchParams {
  /**
   * Body param: The id of the extraction agent
   */
  extraction_agent_id: string;

  /**
   * Body param: The ids of the files
   */
  file_ids: Array<string>;

  /**
   * Query param:
   */
  from_ui?: boolean;

  /**
   * Body param: Additional parameters for the extraction agent.
   */
  config_override?: RunsAPI.ExtractConfig | null;

  /**
   * Body param: The data schema to override the extraction agent's data schema with
   */
  data_schema_override?:
    | { [key: string]: { [key: string]: unknown } | Array<unknown> | string | number | boolean | null }
    | string
    | null;

  /**
   * Body param: The outbound webhook configurations
   */
  webhook_configurations?: Array<WebhookConfiguration> | null;
}

export interface JobFileParams {
  /**
   * Body param: The id of the extraction agent
   */
  extraction_agent_id: string;

  /**
   * Body param: The file to run the job on
   */
  file: Uploadable;

  /**
   * Query param:
   */
  from_ui?: boolean;

  /**
   * Body param: The config to override the extraction agent's config with as a JSON
   * string
   */
  config_override?: string | null;

  /**
   * Body param: The data schema to override the extraction agent's data schema with
   * as a JSON string
   */
  data_schema_override?: string | null;
}

export interface JobRetrieveResultParams {
  organization_id?: string | null;

  project_id?: string | null;
}

export declare namespace Jobs {
  export {
    type ExtractJob as ExtractJob,
    type WebhookConfiguration as WebhookConfiguration,
    type JobListResponse as JobListResponse,
    type JobBatchResponse as JobBatchResponse,
    type JobRetrieveResultResponse as JobRetrieveResultResponse,
    type JobCreateParams as JobCreateParams,
    type JobListParams as JobListParams,
    type JobBatchParams as JobBatchParams,
    type JobFileParams as JobFileParams,
    type JobRetrieveResultParams as JobRetrieveResultParams,
  };
}

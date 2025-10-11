// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as JobsAPI from './jobs';
import {
  ExtractJob,
  JobBatchParams,
  JobBatchResponse,
  JobCreateParams,
  JobFileParams,
  JobListParams,
  JobListResponse,
  JobRetrieveResultParams,
  JobRetrieveResultResponse,
  Jobs,
  WebhookConfiguration,
} from './jobs';
import * as RunsAPI from './runs';
import {
  ExtractConfig,
  ExtractRun,
  RunDeleteParams,
  RunDeleteResponse,
  RunListParams,
  RunListResponse,
  RunRetrieveLatestFromUiParams,
  RunRetrieveParams,
  Runs,
} from './runs';
import * as ExtractionAgentsAPI from './extraction-agents/extraction-agents';
import {
  ExtractAgent,
  ExtractionAgentDeleteResponse,
  ExtractionAgentExtractionAgentsParams,
  ExtractionAgentRetrieveDefaultParams,
  ExtractionAgentRetrieveExtractionAgentsParams,
  ExtractionAgentRetrieveExtractionAgentsResponse,
  ExtractionAgentUpdateParams,
  ExtractionAgents,
} from './extraction-agents/extraction-agents';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Extraction extends APIResource {
  jobs: JobsAPI.Jobs = new JobsAPI.Jobs(this._client);
  runs: RunsAPI.Runs = new RunsAPI.Runs(this._client);
  extractionAgents: ExtractionAgentsAPI.ExtractionAgents = new ExtractionAgentsAPI.ExtractionAgents(
    this._client,
  );

  /**
   * Stateless extraction endpoint that uses a default extraction agent in the user's
   * default project. Requires data_schema, config, and either file_id, text, or
   * base64 encoded file data.
   */
  run(params: ExtractionRunParams, options?: RequestOptions): APIPromise<JobsAPI.ExtractJob> {
    const { organization_id, project_id, ...body } = params;
    return this._client.post('/api/v1/extraction/run', {
      query: { organization_id, project_id },
      body,
      ...options,
    });
  }
}

export interface ExtractionRunParams {
  /**
   * Body param: The configuration parameters for the extraction
   */
  config: RunsAPI.ExtractConfig;

  /**
   * Body param: The schema of the data to extract
   */
  data_schema:
    | { [key: string]: { [key: string]: unknown } | Array<unknown> | string | number | boolean | null }
    | string;

  /**
   * Query param:
   */
  organization_id?: string | null;

  /**
   * Query param:
   */
  project_id?: string | null;

  /**
   * Body param: Schema for file data with base64 content and MIME type.
   */
  file?: ExtractionRunParams.File | null;

  /**
   * Body param: The ID of the file to extract from
   */
  file_id?: string | null;

  /**
   * Body param: The text content to extract from
   */
  text?: string | null;

  /**
   * Body param: The outbound webhook configurations
   */
  webhook_configurations?: Array<JobsAPI.WebhookConfiguration> | null;
}

export namespace ExtractionRunParams {
  /**
   * Schema for file data with base64 content and MIME type.
   */
  export interface File {
    /**
     * The file content as base64-encoded string
     */
    data: string;

    /**
     * The MIME type of the file (e.g., 'application/pdf', 'text/plain')
     */
    mime_type: string;
  }
}

Extraction.Jobs = Jobs;
Extraction.Runs = Runs;
Extraction.ExtractionAgents = ExtractionAgents;

export declare namespace Extraction {
  export { type ExtractionRunParams as ExtractionRunParams };

  export {
    Jobs as Jobs,
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

  export {
    Runs as Runs,
    type ExtractConfig as ExtractConfig,
    type ExtractRun as ExtractRun,
    type RunListResponse as RunListResponse,
    type RunDeleteResponse as RunDeleteResponse,
    type RunRetrieveParams as RunRetrieveParams,
    type RunListParams as RunListParams,
    type RunDeleteParams as RunDeleteParams,
    type RunRetrieveLatestFromUiParams as RunRetrieveLatestFromUiParams,
  };

  export {
    ExtractionAgents as ExtractionAgents,
    type ExtractAgent as ExtractAgent,
    type ExtractionAgentDeleteResponse as ExtractionAgentDeleteResponse,
    type ExtractionAgentRetrieveExtractionAgentsResponse as ExtractionAgentRetrieveExtractionAgentsResponse,
    type ExtractionAgentUpdateParams as ExtractionAgentUpdateParams,
    type ExtractionAgentExtractionAgentsParams as ExtractionAgentExtractionAgentsParams,
    type ExtractionAgentRetrieveDefaultParams as ExtractionAgentRetrieveDefaultParams,
    type ExtractionAgentRetrieveExtractionAgentsParams as ExtractionAgentRetrieveExtractionAgentsParams,
  };
}

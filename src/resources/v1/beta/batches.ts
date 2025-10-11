// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as PipelinesAPI from '../pipelines/pipelines';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Batches extends APIResource {
  /**
   * Create Batch
   */
  create(params: BatchCreateParams, options?: RequestOptions): APIPromise<Batch> {
    const { organization_id, query_project_id, ...body } = params;
    return this._client.post('/api/v1/beta/batches', {
      query: { organization_id, project_id: query_project_id },
      body,
      ...options,
    });
  }

  /**
   * Get Batch
   */
  retrieve(
    batchID: string,
    query: BatchRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BatchRetrieveResponse> {
    return this._client.get(path`/api/v1/beta/batches/${batchID}`, { query, ...options });
  }

  /**
   * List Batches
   */
  list(
    query: BatchListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BatchListResponse> {
    return this._client.get('/api/v1/beta/batches', { query, ...options });
  }
}

export interface Batch {
  /**
   * Unique identifier for the batch
   */
  id: string;

  /**
   * The time frame within which the batch should be processed
   */
  completion_window: number;

  /**
   * The ID of the input file for the batch.
   */
  input_id: string;

  /**
   * The type of input file. Currently only 'datasource' is supported.
   */
  input_type: string;

  /**
   * The ID of the organization to which the batch belongs
   */
  organization_id: string;

  /**
   * The ID of the pipeline to which the batch belongs
   */
  pipeline_id: string;

  /**
   * The ID of the project to which the batch belongs
   */
  project_id: string;

  /**
   * The current status of the batch
   */
  status: string;

  /**
   * The tool to be used for all requests in the batch.
   */
  tool: string;

  /**
   * The ID of the user who created the batch
   */
  user_id: string;

  /**
   * The Unix timestamp (in seconds) for when the batch was created
   */
  created_at?: string | null;

  /**
   * A developer-provided ID for the batch. This ID will be returned in the response.
   */
  external_id?: string | null;

  /**
   * The ID of the output file for the batch.
   */
  output_id?: string | null;

  /**
   * The type of output file. Currently only 'datasource' is supported.
   */
  output_type?: string | null;

  /**
   * Settings that can be configured for how to use LlamaParse to parse files within
   * a LlamaCloud pipeline.
   */
  tool_data?: PipelinesAPI.LlamaParseParameters | null;

  /**
   * The Unix timestamp (in seconds) for when the batch was last updated
   */
  updated_at?: string | null;
}

export interface BatchRetrieveResponse {
  batch: Batch;

  batch_items: Array<BatchRetrieveResponse.BatchItem>;

  ingestion_status: PipelinesAPI.ManagedIngestionStatusResponse;
}

export namespace BatchRetrieveResponse {
  export interface BatchItem {
    /**
     * Unique identifier for the batch item
     */
    id: string;

    /**
     * The ID of the batch to which the item belongs
     */
    batch_id: string;

    /**
     * The input file associated with the batch item
     */
    input_file: string;

    /**
     * The current status of the batch item
     */
    status: string;

    /**
     * The Unix timestamp (in seconds) for when the batch item was created
     */
    created_at?: string | null;

    /**
     * The output file associated with the batch item
     */
    output_file?: string | null;

    /**
     * The Unix timestamp (in seconds) for when the batch item status was last updated
     */
    status_updated_at?: string | null;

    /**
     * Worker Task for that item
     */
    task?: BatchItem.Task | null;

    /**
     * The Unix timestamp (in seconds) for when the batch item was last updated
     */
    updated_at?: string | null;
  }

  export namespace BatchItem {
    /**
     * Worker Task for that item
     */
    export interface Task {
      /**
       * The date and time when the file was parsed.
       */
      created_at: string;

      /**
       * The path to the data file.
       */
      data_path: string;

      /**
       * The path to the input file.
       */
      input_path: string;

      /**
       * The status of the parse task.
       */
      status: string;

      /**
       * The date and time when the file parse ended.
       */
      ended_at?: string | null;

      /**
       * The date and time when the file parse started.
       */
      started_at?: string | null;
    }
  }
}

export interface BatchListResponse {
  /**
   * List of batches
   */
  data: Array<Batch>;

  /**
   * Pagination limit
   */
  limit: number;

  /**
   * Pagination offset
   */
  offset: number;

  /**
   * Total number of batches
   */
  total_count: number;
}

export interface BatchCreateParams {
  /**
   * Body param: A developer-provided ID for the batch. This ID will be returned in
   * the response.
   */
  external_id: string;

  /**
   * Body param: The ID of the input file for the batch.
   */
  input_id: string;

  /**
   * Body param: The type of input file. Currently only 'datasource' is supported.
   */
  input_type: string;

  /**
   * Body param: The ID of the project to which the batch belongs
   */
  body_project_id: string;

  /**
   * Body param: The tool to be used for all requests in the batch.
   */
  tool: string;

  /**
   * Query param:
   */
  organization_id?: string | null;

  /**
   * Query param:
   */
  query_project_id?: string | null;

  /**
   * Body param: The time frame within which the batch should be processed. Currently
   * only 24h is supported.
   */
  completion_window?: number;

  /**
   * Body param: The ID of the output file for the batch.
   */
  output_id?: string | null;

  /**
   * Body param: The type of output file. Currently only 'datasource' is supported.
   */
  output_type?: string | null;

  /**
   * Body param: Settings that can be configured for how to use LlamaParse to parse
   * files within a LlamaCloud pipeline.
   */
  tool_data?: PipelinesAPI.LlamaParseParameters | null;
}

export interface BatchRetrieveParams {
  organization_id?: string | null;
}

export interface BatchListParams {
  limit?: number;

  offset?: number;

  organization_id?: string | null;

  project_id?: string | null;
}

export declare namespace Batches {
  export {
    type Batch as Batch,
    type BatchRetrieveResponse as BatchRetrieveResponse,
    type BatchListResponse as BatchListResponse,
    type BatchCreateParams as BatchCreateParams,
    type BatchRetrieveParams as BatchRetrieveParams,
    type BatchListParams as BatchListParams,
  };
}

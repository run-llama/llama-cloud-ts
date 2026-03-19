// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { PagePromise, PaginatedCursor, type PaginatedCursorParams } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Classify extends APIResource {
  /**
   * Create a classify job.
   */
  create(params: ClassifyCreateParams, options?: RequestOptions): APIPromise<ClassifyCreateResponse> {
    const { organization_id, project_id, ...body } = params;
    return this._client.post('/api/v2/classify', {
      query: { organization_id, project_id },
      body,
      ...options,
    });
  }

  /**
   * List classify jobs.
   */
  list(
    query: ClassifyListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ClassifyListResponsesPaginatedCursor, ClassifyListResponse> {
    return this._client.getAPIList('/api/v2/classify', PaginatedCursor<ClassifyListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Retrieve classify job by ID.
   */
  get(
    jobID: string,
    query: ClassifyGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ClassifyGetResponse> {
    return this._client.get(path`/api/v2/classify/${jobID}`, { query, ...options });
  }
}

export type ClassifyListResponsesPaginatedCursor = PaginatedCursor<ClassifyListResponse>;

/**
 * Configuration for classification.
 */
export interface ClassifyConfiguration {
  /**
   * Classification rules to apply (at least one required)
   */
  rules: Array<ClassifyConfiguration.Rule>;

  /**
   * Classification execution mode
   */
  mode?: 'FAST';

  /**
   * Parsing configuration for classify jobs.
   */
  parsing_configuration?: ClassifyConfiguration.ParsingConfiguration | null;
}

export namespace ClassifyConfiguration {
  /**
   * A rule for classifying documents.
   */
  export interface Rule {
    /**
     * Natural language description of what to classify
     */
    description: string;

    /**
     * Document type to assign when rule matches
     */
    type: string;
  }

  /**
   * Parsing configuration for classify jobs.
   */
  export interface ParsingConfiguration {
    /**
     * Language of the document
     */
    lang?: string;

    /**
     * Maximum number of pages to process
     */
    max_pages?: number | null;

    /**
     * Comma-separated list of page numbers or ranges to process (1-based, e.g.,
     * '1,3,5-7,9' or '1-3,8-10')
     */
    target_pages?: string | null;
  }
}

/**
 * Request to create a classify job.
 */
export interface ClassifyCreateRequest {
  /**
   * Configuration for classification.
   */
  configuration?: ClassifyConfiguration | null;

  /**
   * Product configuration ID for reusable presets
   */
  configuration_id?: string | null;

  /**
   * File ID to classify
   */
  file_id?: string | null;

  /**
   * Parse job ID to classify
   */
  parse_job_id?: string | null;

  /**
   * Idempotency key scoped to the project
   */
  transaction_id?: string | null;
}

/**
 * Result of classifying a document.
 */
export interface ClassifyResult {
  /**
   * Confidence score (0.0-1.0)
   */
  confidence: number;

  /**
   * Explanation of classification decision
   */
  reasoning: string;

  /**
   * Document type that matches, or None
   */
  type: string | null;
}

/**
 * Response for a classify job.
 */
export interface ClassifyCreateResponse {
  /**
   * Unique identifier
   */
  id: string;

  /**
   * Classification configuration
   */
  configuration: ClassifyConfiguration;

  /**
   * Type of document input
   */
  document_input_type: 'url' | 'file_id' | 'parse_job_id';

  /**
   * Document identifier
   */
  document_input_value: string;

  /**
   * Project ID
   */
  project_id: string;

  /**
   * Job status
   */
  status: 'PENDING' | 'RUNNING' | 'COMPLETED' | 'FAILED';

  /**
   * User ID
   */
  user_id: string;

  /**
   * Product configuration ID
   */
  configuration_id?: string | null;

  /**
   * Creation datetime
   */
  created_at?: string | null;

  /**
   * Error message if job failed
   */
  error_message?: string | null;

  /**
   * Associated parse job ID
   */
  parse_job_id?: string | null;

  /**
   * Result of classifying a document.
   */
  result?: ClassifyResult | null;

  /**
   * Idempotency key
   */
  transaction_id?: string | null;

  /**
   * Update datetime
   */
  updated_at?: string | null;
}

/**
 * Response for a classify job.
 */
export interface ClassifyListResponse {
  /**
   * Unique identifier
   */
  id: string;

  /**
   * Classification configuration
   */
  configuration: ClassifyConfiguration;

  /**
   * Type of document input
   */
  document_input_type: 'url' | 'file_id' | 'parse_job_id';

  /**
   * Document identifier
   */
  document_input_value: string;

  /**
   * Project ID
   */
  project_id: string;

  /**
   * Job status
   */
  status: 'PENDING' | 'RUNNING' | 'COMPLETED' | 'FAILED';

  /**
   * User ID
   */
  user_id: string;

  /**
   * Product configuration ID
   */
  configuration_id?: string | null;

  /**
   * Creation datetime
   */
  created_at?: string | null;

  /**
   * Error message if job failed
   */
  error_message?: string | null;

  /**
   * Associated parse job ID
   */
  parse_job_id?: string | null;

  /**
   * Result of classifying a document.
   */
  result?: ClassifyResult | null;

  /**
   * Idempotency key
   */
  transaction_id?: string | null;

  /**
   * Update datetime
   */
  updated_at?: string | null;
}

/**
 * Response for a classify job.
 */
export interface ClassifyGetResponse {
  /**
   * Unique identifier
   */
  id: string;

  /**
   * Classification configuration
   */
  configuration: ClassifyConfiguration;

  /**
   * Type of document input
   */
  document_input_type: 'url' | 'file_id' | 'parse_job_id';

  /**
   * Document identifier
   */
  document_input_value: string;

  /**
   * Project ID
   */
  project_id: string;

  /**
   * Job status
   */
  status: 'PENDING' | 'RUNNING' | 'COMPLETED' | 'FAILED';

  /**
   * User ID
   */
  user_id: string;

  /**
   * Product configuration ID
   */
  configuration_id?: string | null;

  /**
   * Creation datetime
   */
  created_at?: string | null;

  /**
   * Error message if job failed
   */
  error_message?: string | null;

  /**
   * Associated parse job ID
   */
  parse_job_id?: string | null;

  /**
   * Result of classifying a document.
   */
  result?: ClassifyResult | null;

  /**
   * Idempotency key
   */
  transaction_id?: string | null;

  /**
   * Update datetime
   */
  updated_at?: string | null;
}

export interface ClassifyCreateParams {
  /**
   * Query param
   */
  organization_id?: string | null;

  /**
   * Query param
   */
  project_id?: string | null;

  /**
   * Body param: Configuration for classification.
   */
  configuration?: ClassifyConfiguration | null;

  /**
   * Body param: Product configuration ID for reusable presets
   */
  configuration_id?: string | null;

  /**
   * Body param: File ID to classify
   */
  file_id?: string | null;

  /**
   * Body param: Parse job ID to classify
   */
  parse_job_id?: string | null;

  /**
   * Body param: Idempotency key scoped to the project
   */
  transaction_id?: string | null;
}

export interface ClassifyListParams extends PaginatedCursorParams {
  /**
   * Filter by configuration ID
   */
  configuration_id?: string | null;

  /**
   * Include jobs created at or after this timestamp (inclusive)
   */
  created_at_on_or_after?: string | null;

  /**
   * Include jobs created at or before this timestamp (inclusive)
   */
  created_at_on_or_before?: string | null;

  /**
   * Filter by specific job IDs
   */
  job_ids?: Array<string> | null;

  organization_id?: string | null;

  project_id?: string | null;

  /**
   * Filter by job status
   */
  status?: 'PENDING' | 'RUNNING' | 'COMPLETED' | 'FAILED' | null;
}

export interface ClassifyGetParams {
  organization_id?: string | null;

  project_id?: string | null;
}

export declare namespace Classify {
  export {
    type ClassifyConfiguration as ClassifyConfiguration,
    type ClassifyCreateRequest as ClassifyCreateRequest,
    type ClassifyResult as ClassifyResult,
    type ClassifyCreateResponse as ClassifyCreateResponse,
    type ClassifyListResponse as ClassifyListResponse,
    type ClassifyGetResponse as ClassifyGetResponse,
    type ClassifyListResponsesPaginatedCursor as ClassifyListResponsesPaginatedCursor,
    type ClassifyCreateParams as ClassifyCreateParams,
    type ClassifyListParams as ClassifyListParams,
    type ClassifyGetParams as ClassifyGetParams,
  };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ParsingAPI from '../parsing/parsing';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Jobs extends APIResource {
  /**
   * Create a classify job. Experimental: This endpoint is not yet ready for
   * production use and is subject to change at any time.
   */
  create(params: JobCreateParams, options?: RequestOptions): APIPromise<ClassifyJob> {
    const { organization_id, project_id, ...body } = params;
    return this._client.post('/api/v1/classifier/jobs', {
      query: { organization_id, project_id },
      body,
      ...options,
    });
  }

  /**
   * Get a classify job. Experimental: This endpoint is not yet ready for production
   * use and is subject to change at any time.
   */
  retrieve(
    classifyJobID: string,
    query: JobRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ClassifyJob> {
    return this._client.get(path`/api/v1/classifier/jobs/${classifyJobID}`, { query, ...options });
  }

  /**
   * List classify jobs. Experimental: This endpoint is not yet ready for production
   * use and is subject to change at any time.
   */
  list(query: JobListParams | null | undefined = {}, options?: RequestOptions): APIPromise<JobListResponse> {
    return this._client.get('/api/v1/classifier/jobs', { query, ...options });
  }

  /**
   * Get the results of a classify job. Experimental: This endpoint is not yet ready
   * for production use and is subject to change at any time.
   */
  getResults(
    classifyJobID: string,
    query: JobGetResultsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<JobGetResultsResponse> {
    return this._client.get(path`/api/v1/classifier/jobs/${classifyJobID}/results`, { query, ...options });
  }
}

/**
 * A rule for classifying documents - v0 simplified version.
 *
 * This represents a single classification rule that will be applied to documents.
 * All rules are content-based and use natural language descriptions.
 */
export interface ClassifierRule {
  /**
   * Natural language description of what to classify. Be specific about the content
   * characteristics that identify this document type.
   */
  description: string;

  /**
   * The document type to assign when this rule matches (e.g., 'invoice', 'receipt',
   * 'contract')
   */
  type: string;
}

/**
 * A classify job.
 */
export interface ClassifyJob {
  /**
   * Unique identifier
   */
  id: string;

  /**
   * The ID of the project
   */
  project_id: string;

  /**
   * The rules to classify the files
   */
  rules: Array<ClassifierRule>;

  /**
   * The status of the classify job
   */
  status: ParsingAPI.StatusEnum;

  /**
   * The ID of the user
   */
  user_id: string;

  /**
   * Creation datetime
   */
  created_at?: string | null;

  effective_at?: string;

  /**
   * Error message for the latest job attempt, if any.
   */
  error_message?: string | null;

  /**
   * The job record ID associated with this status, if any.
   */
  job_record_id?: string | null;

  /**
   * The configuration for the parsing job
   */
  parsing_configuration?: ClassifyParsingConfiguration;

  /**
   * Update datetime
   */
  updated_at?: string | null;
}

/**
 * Parsing configuration for a classify job.
 */
export interface ClassifyParsingConfiguration {
  /**
   * The language to parse the files in
   */
  lang?: ParsingAPI.ParserLanguages;

  /**
   * The maximum number of pages to parse
   */
  max_pages?: number | null;

  /**
   * The pages to target for parsing (0-indexed, so first page is at 0)
   */
  target_pages?: Array<number> | null;
}

export interface JobListResponse {
  /**
   * The list of items.
   */
  items: Array<ClassifyJob>;

  /**
   * A token, which can be sent as page_token to retrieve the next page. If this
   * field is omitted, there are no subsequent pages.
   */
  next_page_token?: string | null;

  /**
   * The total number of items available. This is only populated when specifically
   * requested. The value may be an estimate and can be used for display purposes
   * only.
   */
  total_size?: number | null;
}

/**
 * Response model for the classify endpoint following AIP-132 pagination standard.
 */
export interface JobGetResultsResponse {
  /**
   * The list of items.
   */
  items: Array<JobGetResultsResponse.Item>;

  /**
   * A token, which can be sent as page_token to retrieve the next page. If this
   * field is omitted, there are no subsequent pages.
   */
  next_page_token?: string | null;

  /**
   * The total number of items available. This is only populated when specifically
   * requested. The value may be an estimate and can be used for display purposes
   * only.
   */
  total_size?: number | null;
}

export namespace JobGetResultsResponse {
  /**
   * A file classification.
   */
  export interface Item {
    /**
     * Unique identifier
     */
    id: string;

    /**
     * The ID of the classify job
     */
    classify_job_id: string;

    /**
     * The ID of the classified file
     */
    file_id: string;

    /**
     * Creation datetime
     */
    created_at?: string | null;

    /**
     * Result of classifying a single file.
     */
    result?: Item.Result | null;

    /**
     * Update datetime
     */
    updated_at?: string | null;
  }

  export namespace Item {
    /**
     * Result of classifying a single file.
     */
    export interface Result {
      /**
       * Confidence score of the classification (0.0-1.0)
       */
      confidence: number;

      /**
       * Step-by-step explanation of why this classification was chosen and the
       * confidence score assigned
       */
      reasoning: string;

      /**
       * The document type that best matches, or null if no match.
       */
      type: string | null;
    }
  }
}

export interface JobCreateParams {
  /**
   * Body param: The IDs of the files to classify
   */
  file_ids: Array<string>;

  /**
   * Body param: The rules to classify the files
   */
  rules: Array<ClassifierRule>;

  /**
   * Query param:
   */
  organization_id?: string | null;

  /**
   * Query param:
   */
  project_id?: string | null;

  /**
   * Body param: The configuration for the parsing job
   */
  parsing_configuration?: ClassifyParsingConfiguration;
}

export interface JobRetrieveParams {
  organization_id?: string | null;

  project_id?: string | null;
}

export interface JobListParams {
  organization_id?: string | null;

  page_size?: number | null;

  page_token?: string | null;

  project_id?: string | null;
}

export interface JobGetResultsParams {
  organization_id?: string | null;

  project_id?: string | null;
}

export declare namespace Jobs {
  export {
    type ClassifierRule as ClassifierRule,
    type ClassifyJob as ClassifyJob,
    type ClassifyParsingConfiguration as ClassifyParsingConfiguration,
    type JobListResponse as JobListResponse,
    type JobGetResultsResponse as JobGetResultsResponse,
    type JobCreateParams as JobCreateParams,
    type JobRetrieveParams as JobRetrieveParams,
    type JobListParams as JobListParams,
    type JobGetResultsParams as JobGetResultsParams,
  };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { PagePromise, PaginatedClassifyJobs, type PaginatedClassifyJobsParams } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Split extends APIResource {
  /**
   * Create a document split job. Experimental: This endpoint is not yet ready for
   * production use and is subject to change at any time.
   */
  create(params: SplitCreateParams, options?: RequestOptions): APIPromise<SplitCreateResponse> {
    const { organization_id, project_id, ...body } = params;
    return this._client.post('/api/v1/beta/split/jobs', {
      query: { organization_id, project_id },
      body,
      ...options,
    });
  }

  /**
   * List document split jobs. Experimental: This endpoint is not yet ready for
   * production use and is subject to change at any time.
   */
  list(
    query: SplitListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SplitListResponsesPaginatedClassifyJobs, SplitListResponse> {
    return this._client.getAPIList('/api/v1/beta/split/jobs', PaginatedClassifyJobs<SplitListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Get a document split job.
   *
   * Experimental: This endpoint is not yet ready for production use and is subject
   * to change at any time.
   */
  get(
    splitJobID: string,
    query: SplitGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SplitGetResponse> {
    return this._client.get(path`/api/v1/beta/split/jobs/${splitJobID}`, { query, ...options });
  }
}

export type SplitListResponsesPaginatedClassifyJobs = PaginatedClassifyJobs<SplitListResponse>;

/**
 * Category definition for document splitting.
 */
export interface SplitCategory {
  /**
   * Name of the category.
   */
  name: string;

  /**
   * Optional description of what content belongs in this category.
   */
  description?: string | null;
}

/**
 * Document input specification.
 */
export interface SplitDocumentInput {
  /**
   * Type of document input. Valid values are: file_id
   */
  type: string;

  /**
   * Document identifier.
   */
  value: string;
}

/**
 * Result of a completed split job.
 */
export interface SplitResultResponse {
  /**
   * List of document segments.
   */
  segments: Array<SplitSegmentResponse>;
}

/**
 * A segment of the split document.
 */
export interface SplitSegmentResponse {
  /**
   * Category name this split belongs to.
   */
  category: string;

  /**
   * Categorical confidence level. Valid values are: high, medium, low.
   */
  confidence_category: string;

  /**
   * 1-indexed page numbers in this split.
   */
  pages: Array<number>;
}

/**
 * A document split job.
 */
export interface SplitCreateResponse {
  /**
   * Unique identifier for the split job.
   */
  id: string;

  /**
   * Categories used for splitting.
   */
  categories: Array<SplitCategory>;

  /**
   * Document that was split.
   */
  document_input: SplitDocumentInput;

  /**
   * Project ID this job belongs to.
   */
  project_id: string;

  /**
   * Current status of the job. Valid values are: pending, processing, completed,
   * failed.
   */
  status: string;

  /**
   * User ID who created this job.
   */
  user_id: string;

  /**
   * Creation datetime
   */
  created_at?: string | null;

  /**
   * Error message if the job failed.
   */
  error_message?: string | null;

  /**
   * Result of a completed split job.
   */
  result?: SplitResultResponse | null;

  /**
   * Update datetime
   */
  updated_at?: string | null;
}

/**
 * A document split job.
 */
export interface SplitListResponse {
  /**
   * Unique identifier for the split job.
   */
  id: string;

  /**
   * Categories used for splitting.
   */
  categories: Array<SplitCategory>;

  /**
   * Document that was split.
   */
  document_input: SplitDocumentInput;

  /**
   * Project ID this job belongs to.
   */
  project_id: string;

  /**
   * Current status of the job. Valid values are: pending, processing, completed,
   * failed.
   */
  status: string;

  /**
   * User ID who created this job.
   */
  user_id: string;

  /**
   * Creation datetime
   */
  created_at?: string | null;

  /**
   * Error message if the job failed.
   */
  error_message?: string | null;

  /**
   * Result of a completed split job.
   */
  result?: SplitResultResponse | null;

  /**
   * Update datetime
   */
  updated_at?: string | null;
}

/**
 * A document split job.
 */
export interface SplitGetResponse {
  /**
   * Unique identifier for the split job.
   */
  id: string;

  /**
   * Categories used for splitting.
   */
  categories: Array<SplitCategory>;

  /**
   * Document that was split.
   */
  document_input: SplitDocumentInput;

  /**
   * Project ID this job belongs to.
   */
  project_id: string;

  /**
   * Current status of the job. Valid values are: pending, processing, completed,
   * failed.
   */
  status: string;

  /**
   * User ID who created this job.
   */
  user_id: string;

  /**
   * Creation datetime
   */
  created_at?: string | null;

  /**
   * Error message if the job failed.
   */
  error_message?: string | null;

  /**
   * Result of a completed split job.
   */
  result?: SplitResultResponse | null;

  /**
   * Update datetime
   */
  updated_at?: string | null;
}

export interface SplitCreateParams {
  /**
   * Body param: Categories to split the document into.
   */
  categories: Array<SplitCategory>;

  /**
   * Body param: Document to be split.
   */
  document_input: SplitDocumentInput;

  /**
   * Query param:
   */
  organization_id?: string | null;

  /**
   * Query param:
   */
  project_id?: string | null;

  /**
   * Body param: Strategy for splitting the document.
   */
  splitting_strategy?: SplitCreateParams.SplittingStrategy;
}

export namespace SplitCreateParams {
  /**
   * Strategy for splitting the document.
   */
  export interface SplittingStrategy {
    /**
     * Whether to allow pages that don't match any category to be grouped as
     * 'uncategorized'. If False, all pages must be assigned to a defined category.
     */
    allow_uncategorized?: boolean;
  }
}

export interface SplitListParams extends PaginatedClassifyJobsParams {
  organization_id?: string | null;

  project_id?: string | null;
}

export interface SplitGetParams {
  organization_id?: string | null;

  project_id?: string | null;
}

export declare namespace Split {
  export {
    type SplitCategory as SplitCategory,
    type SplitDocumentInput as SplitDocumentInput,
    type SplitResultResponse as SplitResultResponse,
    type SplitSegmentResponse as SplitSegmentResponse,
    type SplitCreateResponse as SplitCreateResponse,
    type SplitListResponse as SplitListResponse,
    type SplitGetResponse as SplitGetResponse,
    type SplitListResponsesPaginatedClassifyJobs as SplitListResponsesPaginatedClassifyJobs,
    type SplitCreateParams as SplitCreateParams,
    type SplitListParams as SplitListParams,
    type SplitGetParams as SplitGetParams,
  };
}

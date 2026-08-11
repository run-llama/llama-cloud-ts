// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { PagePromise, PaginatedCursor, type PaginatedCursorParams } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';

export class JobDataPoints extends APIResource {
  /**
   * Returns paginated job data points for the current project.
   */
  list(
    query: JobDataPointListParams,
    options?: RequestOptions,
  ): PagePromise<JobDataPointsPaginatedCursor, JobDataPoint> {
    return this._client.getAPIList('/api/v1/job-data-points', PaginatedCursor<JobDataPoint>, {
      query,
      ...options,
    });
  }
}

export type JobDataPointsPaginatedCursor = PaginatedCursor<JobDataPoint>;

/**
 * A job data point.
 */
export interface JobDataPoint {
  /**
   * Job ID.
   */
  id: string;

  /**
   * Created timestamp.
   */
  created_at: string;

  /**
   * Custom tag.
   */
  custom_tag: string;

  /**
   * Project ID.
   */
  project_id: string;

  /**
   * Job status.
   */
  status: string;

  /**
   * Updated timestamp.
   */
  updated_at: string;

  /**
   * Error message, if any.
   */
  error_message?: string | null;

  /**
   * Job state transition timestamps.
   */
  state_transitions?: JobDataPoint.StateTransitions;
}

export namespace JobDataPoint {
  /**
   * Job state transition timestamps.
   */
  export interface StateTransitions {
    cancelled_at?: string | null;

    completed_at?: string | null;

    failed_at?: string | null;

    pending_at?: string | null;

    running_at?: string | null;

    throttled_at?: string | null;
  }
}

export interface JobDataPointListParams extends PaginatedCursorParams {
  /**
   * Job type to query.
   */
  job_type: 'classify' | 'extract' | 'parse';

  /**
   * Include items created at or after this timestamp (inclusive)
   */
  created_at_on_or_after?: string | null;

  /**
   * Include items created at or before this timestamp (inclusive)
   */
  created_at_on_or_before?: string | null;

  /**
   * Hours of history to include.
   */
  hours?: number;

  organization_id?: string | null;

  project_id?: string | null;

  /**
   * Filter by status.
   */
  status?: Array<string> | null;
}

export declare namespace JobDataPoints {
  export {
    type JobDataPoint as JobDataPoint,
    type JobDataPointsPaginatedCursor as JobDataPointsPaginatedCursor,
    type JobDataPointListParams as JobDataPointListParams,
  };
}

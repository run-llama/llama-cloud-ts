// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { PagePromise, PaginatedCursor, type PaginatedCursorParams } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Batches extends APIResource {
  /**
   * Create a batch over a source directory and start processing asynchronously.
   *
   * @example
   * ```ts
   * const batch = await client.batches.create({
   *   config: {
   *     job: {
   *       configuration_id: 'cfg-PARSE_AGENTIC',
   *       type: 'parse_v2',
   *     },
   *   },
   *   source_directory_id:
   *     'dir-aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee',
   * });
   * ```
   */
  create(params: BatchCreateParams, options?: RequestOptions): APIPromise<BatchCreateResponse> {
    const { organization_id, project_id, ...body } = params;
    return this._client.post('/api/v2/batches', { query: { organization_id, project_id }, body, ...options });
  }

  /**
   * List batches for the current project.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const batchListResponse of client.batches.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: BatchListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<BatchListResponsesPaginatedCursor, BatchListResponse> {
    return this._client.getAPIList('/api/v2/batches', PaginatedCursor<BatchListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Get a batch by ID.
   *
   * @example
   * ```ts
   * const batch = await client.batches.get('batch_id');
   * ```
   */
  get(
    batchID: string,
    query: BatchGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BatchGetResponse> {
    return this._client.get(path`/api/v2/batches/${batchID}`, { query, ...options });
  }
}

export type BatchListResponsesPaginatedCursor = PaginatedCursor<BatchListResponse>;

/**
 * A top-level batch.
 *
 * Example: { "id": "bat-aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee", "project_id":
 * "prj-aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee", "source_directory_id":
 * "dir-aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee", "config": { "job": { "type":
 * "parse_v2", "configuration_id": "cfg-PARSE_AGENTIC" } }, "status": "COMPLETED",
 * "results": [ { "source_directory_file_id":
 * "dfl-aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee", "job_reference": { "type":
 * "parse_v2", "id": "pjb-aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee" }, "error_message":
 * null } ] }
 *
 * Batch-level `FAILED` means the orchestration failed and cannot provide a
 * reliable per-file result set. `results` is only populated when explicitly
 * requested with `expand=results` and may be `null` while a batch is still
 * running.
 */
export interface BatchCreateResponse {
  /**
   * Unique identifier
   */
  id: string;

  /**
   * Batch configuration snapshot.
   */
  config: BatchCreateResponse.Config;

  /**
   * Project this batch belongs to.
   */
  project_id: string;

  /**
   * Directory being processed.
   */
  source_directory_id: string;

  /**
   * Current batch status.
   */
  status: 'CANCELLED' | 'COMPLETED' | 'FAILED' | 'PENDING' | 'RUNNING' | 'THROTTLED';

  /**
   * Creation datetime
   */
  created_at?: string | null;

  /**
   * Expanded per-file result mappings. Null unless requested with expand=results, or
   * while the batch is still running.
   */
  results?: Array<BatchCreateResponse.Result> | null;

  /**
   * Update datetime
   */
  updated_at?: string | null;
}

export namespace BatchCreateResponse {
  /**
   * Batch configuration snapshot.
   */
  export interface Config {
    /**
     * Job to create for each file in the source directory.
     */
    job: Config.Job;
  }

  export namespace Config {
    /**
     * Job to create for each file in the source directory.
     */
    export interface Job {
      /**
       * Product configuration ID or built-in preset ID matching the job type.
       */
      configuration_id: string;

      /**
       * Product job type to run for each source directory file.
       */
      type: 'parse_v2' | 'extract_v2';
    }
  }

  /**
   * Result projection for one source directory file in a batch.
   *
   * Example: { "source_directory_file_id":
   * "dfl-aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee", "job_reference": { "type":
   * "parse_v2", "id": "pjb-aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee" }, "error_message":
   * null }
   *
   * This is a projection of directory-sync state, not a separate child resource that
   * callers need to create. The source directory file ID is the stable correlation
   * key. Underlying job progress and failures should be resolved through the
   * referenced product job endpoint.
   */
  export interface Result {
    /**
     * Source directory file processed by this batch.
     */
    source_directory_file_id: string;

    /**
     * Batch-level mapping error if the system could not create or associate a job for
     * this source file.
     */
    error_message?: string | null;

    /**
     * Reference to a job produced by a batch.
     *
     * Example: { "type": "parse_v2", "id": "pjb-aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee"
     * }
     */
    job_reference?: Result.JobReference | null;
  }

  export namespace Result {
    /**
     * Reference to a job produced by a batch.
     *
     * Example: { "type": "parse_v2", "id": "pjb-aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee"
     * }
     */
    export interface JobReference {
      /**
       * Job ID, such as a parse job ID.
       */
      id: string;

      /**
       * Type of job produced for the file.
       */
      type: 'parse_v2' | 'extract_v2';
    }
  }
}

/**
 * A top-level batch.
 *
 * Example: { "id": "bat-aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee", "project_id":
 * "prj-aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee", "source_directory_id":
 * "dir-aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee", "config": { "job": { "type":
 * "parse_v2", "configuration_id": "cfg-PARSE_AGENTIC" } }, "status": "COMPLETED",
 * "results": [ { "source_directory_file_id":
 * "dfl-aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee", "job_reference": { "type":
 * "parse_v2", "id": "pjb-aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee" }, "error_message":
 * null } ] }
 *
 * Batch-level `FAILED` means the orchestration failed and cannot provide a
 * reliable per-file result set. `results` is only populated when explicitly
 * requested with `expand=results` and may be `null` while a batch is still
 * running.
 */
export interface BatchListResponse {
  /**
   * Unique identifier
   */
  id: string;

  /**
   * Batch configuration snapshot.
   */
  config: BatchListResponse.Config;

  /**
   * Project this batch belongs to.
   */
  project_id: string;

  /**
   * Directory being processed.
   */
  source_directory_id: string;

  /**
   * Current batch status.
   */
  status: 'CANCELLED' | 'COMPLETED' | 'FAILED' | 'PENDING' | 'RUNNING' | 'THROTTLED';

  /**
   * Creation datetime
   */
  created_at?: string | null;

  /**
   * Expanded per-file result mappings. Null unless requested with expand=results, or
   * while the batch is still running.
   */
  results?: Array<BatchListResponse.Result> | null;

  /**
   * Update datetime
   */
  updated_at?: string | null;
}

export namespace BatchListResponse {
  /**
   * Batch configuration snapshot.
   */
  export interface Config {
    /**
     * Job to create for each file in the source directory.
     */
    job: Config.Job;
  }

  export namespace Config {
    /**
     * Job to create for each file in the source directory.
     */
    export interface Job {
      /**
       * Product configuration ID or built-in preset ID matching the job type.
       */
      configuration_id: string;

      /**
       * Product job type to run for each source directory file.
       */
      type: 'parse_v2' | 'extract_v2';
    }
  }

  /**
   * Result projection for one source directory file in a batch.
   *
   * Example: { "source_directory_file_id":
   * "dfl-aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee", "job_reference": { "type":
   * "parse_v2", "id": "pjb-aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee" }, "error_message":
   * null }
   *
   * This is a projection of directory-sync state, not a separate child resource that
   * callers need to create. The source directory file ID is the stable correlation
   * key. Underlying job progress and failures should be resolved through the
   * referenced product job endpoint.
   */
  export interface Result {
    /**
     * Source directory file processed by this batch.
     */
    source_directory_file_id: string;

    /**
     * Batch-level mapping error if the system could not create or associate a job for
     * this source file.
     */
    error_message?: string | null;

    /**
     * Reference to a job produced by a batch.
     *
     * Example: { "type": "parse_v2", "id": "pjb-aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee"
     * }
     */
    job_reference?: Result.JobReference | null;
  }

  export namespace Result {
    /**
     * Reference to a job produced by a batch.
     *
     * Example: { "type": "parse_v2", "id": "pjb-aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee"
     * }
     */
    export interface JobReference {
      /**
       * Job ID, such as a parse job ID.
       */
      id: string;

      /**
       * Type of job produced for the file.
       */
      type: 'parse_v2' | 'extract_v2';
    }
  }
}

/**
 * A top-level batch.
 *
 * Example: { "id": "bat-aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee", "project_id":
 * "prj-aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee", "source_directory_id":
 * "dir-aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee", "config": { "job": { "type":
 * "parse_v2", "configuration_id": "cfg-PARSE_AGENTIC" } }, "status": "COMPLETED",
 * "results": [ { "source_directory_file_id":
 * "dfl-aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee", "job_reference": { "type":
 * "parse_v2", "id": "pjb-aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee" }, "error_message":
 * null } ] }
 *
 * Batch-level `FAILED` means the orchestration failed and cannot provide a
 * reliable per-file result set. `results` is only populated when explicitly
 * requested with `expand=results` and may be `null` while a batch is still
 * running.
 */
export interface BatchGetResponse {
  /**
   * Unique identifier
   */
  id: string;

  /**
   * Batch configuration snapshot.
   */
  config: BatchGetResponse.Config;

  /**
   * Project this batch belongs to.
   */
  project_id: string;

  /**
   * Directory being processed.
   */
  source_directory_id: string;

  /**
   * Current batch status.
   */
  status: 'CANCELLED' | 'COMPLETED' | 'FAILED' | 'PENDING' | 'RUNNING' | 'THROTTLED';

  /**
   * Creation datetime
   */
  created_at?: string | null;

  /**
   * Expanded per-file result mappings. Null unless requested with expand=results, or
   * while the batch is still running.
   */
  results?: Array<BatchGetResponse.Result> | null;

  /**
   * Update datetime
   */
  updated_at?: string | null;
}

export namespace BatchGetResponse {
  /**
   * Batch configuration snapshot.
   */
  export interface Config {
    /**
     * Job to create for each file in the source directory.
     */
    job: Config.Job;
  }

  export namespace Config {
    /**
     * Job to create for each file in the source directory.
     */
    export interface Job {
      /**
       * Product configuration ID or built-in preset ID matching the job type.
       */
      configuration_id: string;

      /**
       * Product job type to run for each source directory file.
       */
      type: 'parse_v2' | 'extract_v2';
    }
  }

  /**
   * Result projection for one source directory file in a batch.
   *
   * Example: { "source_directory_file_id":
   * "dfl-aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee", "job_reference": { "type":
   * "parse_v2", "id": "pjb-aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee" }, "error_message":
   * null }
   *
   * This is a projection of directory-sync state, not a separate child resource that
   * callers need to create. The source directory file ID is the stable correlation
   * key. Underlying job progress and failures should be resolved through the
   * referenced product job endpoint.
   */
  export interface Result {
    /**
     * Source directory file processed by this batch.
     */
    source_directory_file_id: string;

    /**
     * Batch-level mapping error if the system could not create or associate a job for
     * this source file.
     */
    error_message?: string | null;

    /**
     * Reference to a job produced by a batch.
     *
     * Example: { "type": "parse_v2", "id": "pjb-aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee"
     * }
     */
    job_reference?: Result.JobReference | null;
  }

  export namespace Result {
    /**
     * Reference to a job produced by a batch.
     *
     * Example: { "type": "parse_v2", "id": "pjb-aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee"
     * }
     */
    export interface JobReference {
      /**
       * Job ID, such as a parse job ID.
       */
      id: string;

      /**
       * Type of job produced for the file.
       */
      type: 'parse_v2' | 'extract_v2';
    }
  }
}

export interface BatchCreateParams {
  /**
   * Body param: Batch configuration snapshot to apply to this source directory.
   */
  config: BatchCreateParams.Config;

  /**
   * Body param: Directory whose files should be processed.
   */
  source_directory_id: string;

  /**
   * Query param
   */
  organization_id?: string | null;

  /**
   * Query param
   */
  project_id?: string | null;
}

export namespace BatchCreateParams {
  /**
   * Batch configuration snapshot to apply to this source directory.
   */
  export interface Config {
    /**
     * Job to create for each file in the source directory.
     */
    job: Config.Job;
  }

  export namespace Config {
    /**
     * Job to create for each file in the source directory.
     */
    export interface Job {
      /**
       * Product configuration ID or built-in preset ID matching the job type.
       */
      configuration_id: string;

      /**
       * Product job type to run for each source directory file.
       */
      type: 'parse_v2' | 'extract_v2';
    }
  }
}

export interface BatchListParams extends PaginatedCursorParams {
  created_at_on_or_after?: string | null;

  created_at_on_or_before?: string | null;

  organization_id?: string | null;

  project_id?: string | null;

  source_directory_id?: string | null;

  status?: 'CANCELLED' | 'COMPLETED' | 'FAILED' | 'PENDING' | 'RUNNING' | 'THROTTLED' | null;
}

export interface BatchGetParams {
  /**
   * Fields to expand. Supported value: results.
   */
  expand?: Array<string> | null;

  organization_id?: string | null;

  project_id?: string | null;
}

export declare namespace Batches {
  export {
    type BatchCreateResponse as BatchCreateResponse,
    type BatchListResponse as BatchListResponse,
    type BatchGetResponse as BatchGetResponse,
    type BatchListResponsesPaginatedCursor as BatchListResponsesPaginatedCursor,
    type BatchCreateParams as BatchCreateParams,
    type BatchListParams as BatchListParams,
    type BatchGetParams as BatchGetParams,
  };
}

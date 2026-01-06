// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as FilesAPI from '../files';
import { APIPromise } from '../../core/api-promise';
import { type Uploadable } from '../../core/uploads';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { multipartFormRequestOptions } from '../../internal/uploads';
import { path } from '../../internal/utils/path';

export class Files extends APIResource {
  /**
   * Upload a file using multipart/form-data.
   */
  create(params: FileCreateParams, options?: RequestOptions): APIPromise<FileCreateResponse> {
    const { organization_id, project_id, ...body } = params;
    return this._client.post(
      '/api/v1/beta/files',
      multipartFormRequestOptions({ query: { organization_id, project_id }, body, ...options }, this._client),
    );
  }

  /**
   * Delete a single file from the project.
   *
   * Args: file_id: The ID of the file to delete project: Validated project from
   * dependency db: Database session
   *
   * Returns: None (204 No Content on success)
   */
  delete(
    fileID: string,
    params: FileDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { organization_id, project_id } = params ?? {};
    return this._client.delete(path`/api/v1/beta/files/${fileID}`, {
      query: { organization_id, project_id },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Returns a presigned url to read the file content.
   */
  get(
    fileID: string,
    query: FileGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FilesAPI.PresignedURL> {
    return this._client.get(path`/api/v1/beta/files/${fileID}/content`, { query, ...options });
  }

  /**
   * Query files with flexible filtering and pagination.
   *
   * Args: request: The query request with filters and pagination project: Validated
   * project from dependency db: Database session
   *
   * Returns: Paginated response with files
   */
  query(params: FileQueryParams, options?: RequestOptions): APIPromise<FileQueryResponse> {
    const { organization_id, project_id, ...body } = params;
    return this._client.post('/api/v1/beta/files/query', {
      query: { organization_id, project_id },
      body,
      ...options,
    });
  }
}

/**
 * Schema for a file that is associated with a pipeline.
 */
export interface PipelineFile {
  /**
   * Unique identifier
   */
  id: string;

  /**
   * The ID of the pipeline that the file is associated with
   */
  pipeline_id: string;

  /**
   * Hashes for the configuration of the pipeline.
   */
  config_hash?: {
    [key: string]: { [key: string]: unknown } | Array<unknown> | string | number | boolean | null;
  } | null;

  /**
   * Creation datetime
   */
  created_at?: string | null;

  /**
   * Custom metadata for the file
   */
  custom_metadata?: {
    [key: string]: { [key: string]: unknown } | Array<unknown> | string | number | boolean | null;
  } | null;

  /**
   * The ID of the data source that the file belongs to
   */
  data_source_id?: string | null;

  /**
   * The ID of the file in the external system
   */
  external_file_id?: string | null;

  /**
   * The ID of the file
   */
  file_id?: string | null;

  /**
   * Size of the file in bytes
   */
  file_size?: number | null;

  /**
   * File type (e.g. pdf, docx, etc.)
   */
  file_type?: string | null;

  /**
   * The number of pages that have been indexed for this file
   */
  indexed_page_count?: number | null;

  /**
   * The last modified time of the file
   */
  last_modified_at?: string | null;

  /**
   * Name of the file
   */
  name?: string | null;

  /**
   * Permission information for the file
   */
  permission_info?: {
    [key: string]: { [key: string]: unknown } | Array<unknown> | string | number | boolean | null;
  } | null;

  /**
   * The ID of the project that the file belongs to
   */
  project_id?: string | null;

  /**
   * Resource information for the file
   */
  resource_info?: {
    [key: string]: { [key: string]: unknown } | Array<unknown> | string | number | boolean | null;
  } | null;

  /**
   * Status of the pipeline file
   */
  status?: 'NOT_STARTED' | 'IN_PROGRESS' | 'SUCCESS' | 'ERROR' | 'CANCELLED' | null;

  /**
   * The last time the status was updated
   */
  status_updated_at?: string | null;

  /**
   * Update datetime
   */
  updated_at?: string | null;
}

/**
 * Schema for a file in the v2 API.
 */
export interface FileCreateResponse {
  /**
   * Unique identifier
   */
  id: string;

  name: string;

  /**
   * The ID of the project that the file belongs to
   */
  project_id: string;

  /**
   * The expiration date for the file. Files past this date can be deleted.
   */
  expires_at?: string | null;

  /**
   * The ID of the file in the external system
   */
  external_file_id?: string | null;

  /**
   * File type (e.g. pdf, docx, etc.)
   */
  file_type?: string | null;

  /**
   * The last modified time of the file
   */
  last_modified_at?: string | null;

  /**
   * The intended purpose of the file (e.g., 'user_data', 'parse', 'extract',
   * 'split', 'classify')
   */
  purpose?: string | null;
}

/**
 * Response schema for paginated file queries in V2 API.
 */
export interface FileQueryResponse {
  /**
   * The list of items.
   */
  items: Array<FileQueryResponse.Item>;

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

export namespace FileQueryResponse {
  /**
   * Schema for a file in the v2 API.
   */
  export interface Item {
    /**
     * Unique identifier
     */
    id: string;

    name: string;

    /**
     * The ID of the project that the file belongs to
     */
    project_id: string;

    /**
     * The expiration date for the file. Files past this date can be deleted.
     */
    expires_at?: string | null;

    /**
     * The ID of the file in the external system
     */
    external_file_id?: string | null;

    /**
     * File type (e.g. pdf, docx, etc.)
     */
    file_type?: string | null;

    /**
     * The last modified time of the file
     */
    last_modified_at?: string | null;

    /**
     * The intended purpose of the file (e.g., 'user_data', 'parse', 'extract',
     * 'split', 'classify')
     */
    purpose?: string | null;
  }
}

export interface FileCreateParams {
  /**
   * Body param: The file to upload
   */
  file: Uploadable;

  /**
   * Body param: The intended purpose of the file. Valid values: 'user_data',
   * 'parse', 'extract', 'split', 'classify'
   */
  purpose: string;

  /**
   * Query param:
   */
  organization_id?: string | null;

  /**
   * Query param:
   */
  project_id?: string | null;

  /**
   * Body param: The ID of the file in the external system
   */
  external_file_id?: string | null;
}

export interface FileDeleteParams {
  organization_id?: string | null;

  project_id?: string | null;
}

export interface FileGetParams {
  expires_at_seconds?: number | null;

  organization_id?: string | null;

  project_id?: string | null;
}

export interface FileQueryParams {
  /**
   * Query param:
   */
  organization_id?: string | null;

  /**
   * Query param:
   */
  project_id?: string | null;

  /**
   * Body param: Filter parameters for file queries.
   */
  filter?: FileQueryParams.Filter | null;

  /**
   * Body param: A comma-separated list of fields to order by, sorted in ascending
   * order. Use 'field_name desc' to specify descending order.
   */
  order_by?: string | null;

  /**
   * Body param: The maximum number of items to return. The service may return fewer
   * than this value. If unspecified, a default page size will be used. The maximum
   * value is typically 1000; values above this will be coerced to the maximum.
   */
  page_size?: number | null;

  /**
   * Body param: A page token, received from a previous list call. Provide this to
   * retrieve the subsequent page.
   */
  page_token?: string | null;
}

export namespace FileQueryParams {
  /**
   * Filter parameters for file queries.
   */
  export interface Filter {
    /**
     * Filter by data source ID
     */
    data_source_id?: string | null;

    /**
     * Filter by external file ID
     */
    external_file_id?: string | null;

    /**
     * Filter by specific file IDs
     */
    file_ids?: Array<string> | null;

    /**
     * Filter by file name
     */
    file_name?: string | null;

    /**
     * Filter only manually uploaded files (data_source_id is null)
     */
    only_manually_uploaded?: boolean | null;

    /**
     * Filter by project ID
     */
    project_id?: string | null;
  }
}

export declare namespace Files {
  export {
    type PipelineFile as PipelineFile,
    type FileCreateResponse as FileCreateResponse,
    type FileQueryResponse as FileQueryResponse,
    type FileCreateParams as FileCreateParams,
    type FileDeleteParams as FileDeleteParams,
    type FileGetParams as FileGetParams,
    type FileQueryParams as FileQueryParams,
  };
}

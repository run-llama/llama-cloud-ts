// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Files extends APIResource {
  /**
   * Get a file by its directory_file_id within the specified directory. If you're
   * trying to get a file by its unique_id, use the list endpoint with a filter
   * instead.
   */
  retrieve(
    directoryFileID: string,
    params: FileRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<FileRetrieveResponse> {
    const { directory_id, ...query } = params;
    return this._client.get(path`/api/v1/beta/directories/${directory_id}/files/${directoryFileID}`, {
      query,
      ...options,
    });
  }

  /**
   * Update file metadata within the specified directory.
   *
   * Note: This endpoint uses directory_file_id (the internal ID). If you're trying
   * to update a file by its unique_id, use the list endpoint with a filter to find
   * the directory_file_id first.
   */
  update(
    directoryFileID: string,
    params: FileUpdateParams,
    options?: RequestOptions,
  ): APIPromise<FileUpdateResponse> {
    const { directory_id, organization_id, project_id, ...body } = params;
    return this._client.patch(path`/api/v1/beta/directories/${directory_id}/files/${directoryFileID}`, {
      query: { organization_id, project_id },
      body,
      ...options,
    });
  }

  /**
   * List all files within the specified directory with optional filtering and
   * pagination.
   */
  list(
    directoryID: string,
    query: FileListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FileListResponse> {
    return this._client.get(path`/api/v1/beta/directories/${directoryID}/files`, { query, ...options });
  }

  /**
   * Delete a file from the specified directory.
   *
   * Note: This endpoint uses directory_file_id (the internal ID). If you're trying
   * to delete a file by its unique_id, use the list endpoint with a filter to find
   * the directory_file_id first.
   */
  delete(directoryFileID: string, params: FileDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { directory_id, organization_id, project_id } = params;
    return this._client.delete(path`/api/v1/beta/directories/${directory_id}/files/${directoryFileID}`, {
      query: { organization_id, project_id },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Create a new file within the specified directory.
   *
   * The directory must exist and belong to the project passed in. The file_id must
   * be provided and exist in the project.
   */
  add(directoryID: string, params: FileAddParams, options?: RequestOptions): APIPromise<FileAddResponse> {
    const { organization_id, project_id, ...body } = params;
    return this._client.post(path`/api/v1/beta/directories/${directoryID}/files`, {
      query: { organization_id, project_id },
      body,
      ...options,
    });
  }
}

/**
 * API response schema for a directory file.
 */
export interface FileRetrieveResponse {
  /**
   * Unique identifier for the directory file.
   */
  id: string;

  /**
   * Directory the file belongs to.
   */
  directory_id: string;

  /**
   * Display name for the file.
   */
  display_name: string;

  /**
   * Project the directory file belongs to.
   */
  project_id: string;

  /**
   * Unique identifier for the file in the directory
   */
  unique_id: string;

  /**
   * Creation datetime
   */
  created_at?: string | null;

  /**
   * Optional data source credential associated with the file.
   */
  data_source_id?: string | null;

  /**
   * Soft delete marker when the file is removed upstream or by user action.
   */
  deleted_at?: string | null;

  /**
   * File ID for the storage location.
   */
  file_id?: string | null;

  /**
   * Update datetime
   */
  updated_at?: string | null;
}

/**
 * API response schema for a directory file.
 */
export interface FileUpdateResponse {
  /**
   * Unique identifier for the directory file.
   */
  id: string;

  /**
   * Directory the file belongs to.
   */
  directory_id: string;

  /**
   * Display name for the file.
   */
  display_name: string;

  /**
   * Project the directory file belongs to.
   */
  project_id: string;

  /**
   * Unique identifier for the file in the directory
   */
  unique_id: string;

  /**
   * Creation datetime
   */
  created_at?: string | null;

  /**
   * Optional data source credential associated with the file.
   */
  data_source_id?: string | null;

  /**
   * Soft delete marker when the file is removed upstream or by user action.
   */
  deleted_at?: string | null;

  /**
   * File ID for the storage location.
   */
  file_id?: string | null;

  /**
   * Update datetime
   */
  updated_at?: string | null;
}

/**
 * API query response schema for directory files.
 */
export interface FileListResponse {
  /**
   * The list of items.
   */
  items: Array<FileListResponse.Item>;

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

export namespace FileListResponse {
  /**
   * API response schema for a directory file.
   */
  export interface Item {
    /**
     * Unique identifier for the directory file.
     */
    id: string;

    /**
     * Directory the file belongs to.
     */
    directory_id: string;

    /**
     * Display name for the file.
     */
    display_name: string;

    /**
     * Project the directory file belongs to.
     */
    project_id: string;

    /**
     * Unique identifier for the file in the directory
     */
    unique_id: string;

    /**
     * Creation datetime
     */
    created_at?: string | null;

    /**
     * Optional data source credential associated with the file.
     */
    data_source_id?: string | null;

    /**
     * Soft delete marker when the file is removed upstream or by user action.
     */
    deleted_at?: string | null;

    /**
     * File ID for the storage location.
     */
    file_id?: string | null;

    /**
     * Update datetime
     */
    updated_at?: string | null;
  }
}

/**
 * API response schema for a directory file.
 */
export interface FileAddResponse {
  /**
   * Unique identifier for the directory file.
   */
  id: string;

  /**
   * Directory the file belongs to.
   */
  directory_id: string;

  /**
   * Display name for the file.
   */
  display_name: string;

  /**
   * Project the directory file belongs to.
   */
  project_id: string;

  /**
   * Unique identifier for the file in the directory
   */
  unique_id: string;

  /**
   * Creation datetime
   */
  created_at?: string | null;

  /**
   * Optional data source credential associated with the file.
   */
  data_source_id?: string | null;

  /**
   * Soft delete marker when the file is removed upstream or by user action.
   */
  deleted_at?: string | null;

  /**
   * File ID for the storage location.
   */
  file_id?: string | null;

  /**
   * Update datetime
   */
  updated_at?: string | null;
}

export interface FileRetrieveParams {
  /**
   * Path param:
   */
  directory_id: string;

  /**
   * Query param:
   */
  organization_id?: string | null;

  /**
   * Query param:
   */
  project_id?: string | null;
}

export interface FileUpdateParams {
  /**
   * Path param:
   */
  directory_id: string;

  /**
   * Query param:
   */
  organization_id?: string | null;

  /**
   * Query param:
   */
  project_id?: string | null;

  /**
   * Body param: Updated display name.
   */
  display_name?: string | null;

  /**
   * Body param: Updated unique identifier.
   */
  unique_id?: string | null;
}

export interface FileListParams {
  display_name?: string | null;

  display_name_contains?: string | null;

  file_id?: string | null;

  include_deleted?: boolean;

  organization_id?: string | null;

  page_size?: number | null;

  page_token?: string | null;

  project_id?: string | null;

  unique_id?: string | null;
}

export interface FileDeleteParams {
  /**
   * Path param:
   */
  directory_id: string;

  /**
   * Query param:
   */
  organization_id?: string | null;

  /**
   * Query param:
   */
  project_id?: string | null;
}

export interface FileAddParams {
  /**
   * Body param: File ID for the storage location (required).
   */
  file_id: string;

  /**
   * Query param:
   */
  organization_id?: string | null;

  /**
   * Query param:
   */
  project_id?: string | null;

  /**
   * Body param: Display name for the file. If not provided, will use the file's
   * name.
   */
  display_name?: string | null;

  /**
   * Body param: Unique identifier for the file in the directory. If not provided,
   * will use the file's external_file_id or name.
   */
  unique_id?: string | null;
}

export declare namespace Files {
  export {
    type FileRetrieveResponse as FileRetrieveResponse,
    type FileUpdateResponse as FileUpdateResponse,
    type FileListResponse as FileListResponse,
    type FileAddResponse as FileAddResponse,
    type FileRetrieveParams as FileRetrieveParams,
    type FileUpdateParams as FileUpdateParams,
    type FileListParams as FileListParams,
    type FileDeleteParams as FileDeleteParams,
    type FileAddParams as FileAddParams,
  };
}

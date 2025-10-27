// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as FilesAPI from './files';
import {
  FileAddParams,
  FileAddResponse,
  FileDeleteParams,
  FileListParams,
  FileListResponse,
  FileRetrieveParams,
  FileRetrieveResponse,
  FileUpdateParams,
  FileUpdateResponse,
  Files,
} from './files';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Directories extends APIResource {
  files: FilesAPI.Files = new FilesAPI.Files(this._client);

  /**
   * Create a new directory within the specified project.
   *
   * If data_source_id is provided, validates that the data source exists and belongs
   * to the same project.
   */
  create(params: DirectoryCreateParams, options?: RequestOptions): APIPromise<DirectoryCreateResponse> {
    const { organization_id, project_id, ...body } = params;
    return this._client.post('/api/v1/beta/directories', {
      query: { organization_id, project_id },
      body,
      ...options,
    });
  }

  /**
   * Retrieve a directory by its identifier.
   */
  retrieve(directoryID: string, options?: RequestOptions): APIPromise<DirectoryRetrieveResponse> {
    return this._client.get(path`/api/v1/beta/directories/${directoryID}`, options);
  }

  /**
   * Update directory metadata.
   */
  update(
    directoryID: string,
    body: DirectoryUpdateParams,
    options?: RequestOptions,
  ): APIPromise<DirectoryUpdateResponse> {
    return this._client.patch(path`/api/v1/beta/directories/${directoryID}`, { body, ...options });
  }

  /**
   * List Directories
   */
  list(
    query: DirectoryListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DirectoryListResponse> {
    return this._client.get('/api/v1/beta/directories', { query, ...options });
  }

  /**
   * Permanently delete a directory.
   */
  delete(directoryID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/api/v1/beta/directories/${directoryID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * API response schema for a directory.
 */
export interface DirectoryCreateResponse {
  /**
   * Unique identifier for the directory.
   */
  id: string;

  /**
   * Human-readable name for the directory.
   */
  name: string;

  /**
   * Project the directory belongs to.
   */
  project_id: string;

  /**
   * Creation datetime
   */
  created_at?: string | null;

  /**
   * Optional data source id the directory syncs from. Null if just manual uploads.
   */
  data_source_id?: string | null;

  /**
   * Optional timestamp of when the directory was deleted. Null if not deleted.
   */
  deleted_at?: string | null;

  /**
   * Optional description shown to users.
   */
  description?: string | null;

  /**
   * Update datetime
   */
  updated_at?: string | null;
}

/**
 * API response schema for a directory.
 */
export interface DirectoryRetrieveResponse {
  /**
   * Unique identifier for the directory.
   */
  id: string;

  /**
   * Human-readable name for the directory.
   */
  name: string;

  /**
   * Project the directory belongs to.
   */
  project_id: string;

  /**
   * Creation datetime
   */
  created_at?: string | null;

  /**
   * Optional data source id the directory syncs from. Null if just manual uploads.
   */
  data_source_id?: string | null;

  /**
   * Optional timestamp of when the directory was deleted. Null if not deleted.
   */
  deleted_at?: string | null;

  /**
   * Optional description shown to users.
   */
  description?: string | null;

  /**
   * Update datetime
   */
  updated_at?: string | null;
}

/**
 * API response schema for a directory.
 */
export interface DirectoryUpdateResponse {
  /**
   * Unique identifier for the directory.
   */
  id: string;

  /**
   * Human-readable name for the directory.
   */
  name: string;

  /**
   * Project the directory belongs to.
   */
  project_id: string;

  /**
   * Creation datetime
   */
  created_at?: string | null;

  /**
   * Optional data source id the directory syncs from. Null if just manual uploads.
   */
  data_source_id?: string | null;

  /**
   * Optional timestamp of when the directory was deleted. Null if not deleted.
   */
  deleted_at?: string | null;

  /**
   * Optional description shown to users.
   */
  description?: string | null;

  /**
   * Update datetime
   */
  updated_at?: string | null;
}

/**
 * API query response schema for directories.
 */
export interface DirectoryListResponse {
  /**
   * The list of items.
   */
  items: Array<DirectoryListResponse.Item>;

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

export namespace DirectoryListResponse {
  /**
   * API response schema for a directory.
   */
  export interface Item {
    /**
     * Unique identifier for the directory.
     */
    id: string;

    /**
     * Human-readable name for the directory.
     */
    name: string;

    /**
     * Project the directory belongs to.
     */
    project_id: string;

    /**
     * Creation datetime
     */
    created_at?: string | null;

    /**
     * Optional data source id the directory syncs from. Null if just manual uploads.
     */
    data_source_id?: string | null;

    /**
     * Optional timestamp of when the directory was deleted. Null if not deleted.
     */
    deleted_at?: string | null;

    /**
     * Optional description shown to users.
     */
    description?: string | null;

    /**
     * Update datetime
     */
    updated_at?: string | null;
  }
}

export interface DirectoryCreateParams {
  /**
   * Body param: Human-readable name for the directory.
   */
  name: string;

  /**
   * Query param:
   */
  organization_id?: string | null;

  /**
   * Query param:
   */
  project_id?: string | null;

  /**
   * Body param: Optional data source id the directory syncs from.
   */
  data_source_id?: string | null;

  /**
   * Body param: Optional description shown to users.
   */
  description?: string | null;
}

export interface DirectoryUpdateParams {
  /**
   * Updated description for the directory.
   */
  description?: string | null;

  /**
   * Updated name for the directory.
   */
  name?: string | null;
}

export interface DirectoryListParams {
  data_source_id?: string | null;

  include_deleted?: boolean;

  name?: string | null;

  organization_id?: string | null;

  page_size?: number | null;

  page_token?: string | null;

  project_id?: string | null;
}

Directories.Files = Files;

export declare namespace Directories {
  export {
    type DirectoryCreateResponse as DirectoryCreateResponse,
    type DirectoryRetrieveResponse as DirectoryRetrieveResponse,
    type DirectoryUpdateResponse as DirectoryUpdateResponse,
    type DirectoryListResponse as DirectoryListResponse,
    type DirectoryCreateParams as DirectoryCreateParams,
    type DirectoryUpdateParams as DirectoryUpdateParams,
    type DirectoryListParams as DirectoryListParams,
  };

  export {
    Files as Files,
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

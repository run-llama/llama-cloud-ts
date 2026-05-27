// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as FilesAPI from './files';
import {
  FileAddParams,
  FileAddResponse,
  FileDeleteParams,
  FileGetParams,
  FileGetResponse,
  FileListParams,
  FileListResponse,
  FileListResponsesPaginatedCursor,
  FileUpdateParams,
  FileUpdateResponse,
  FileUploadParams,
  FileUploadResponse,
  Files,
} from './files';
import { APIPromise } from '../../../core/api-promise';
import { PagePromise, PaginatedCursor, type PaginatedCursorParams } from '../../../core/pagination';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Directories extends APIResource {
  files: FilesAPI.Files = new FilesAPI.Files(this._client);

  /**
   * Create a new directory within the specified project.
   *
   * @example
   * ```ts
   * const directory = await client.beta.directories.create({
   *   name: 'x',
   * });
   * ```
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
   * Update directory metadata.
   *
   * @example
   * ```ts
   * const directory = await client.beta.directories.update(
   *   'directory_id',
   * );
   * ```
   */
  update(
    directoryID: string,
    params: DirectoryUpdateParams,
    options?: RequestOptions,
  ): APIPromise<DirectoryUpdateResponse> {
    const { organization_id, project_id, ...body } = params;
    return this._client.patch(path`/api/v1/beta/directories/${directoryID}`, {
      query: { organization_id, project_id },
      body,
      ...options,
    });
  }

  /**
   * List Directories
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const directoryListResponse of client.beta.directories.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: DirectoryListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<DirectoryListResponsesPaginatedCursor, DirectoryListResponse> {
    return this._client.getAPIList('/api/v1/beta/directories', PaginatedCursor<DirectoryListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Permanently delete a directory.
   *
   * @example
   * ```ts
   * await client.beta.directories.delete('directory_id');
   * ```
   */
  delete(
    directoryID: string,
    params: DirectoryDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { organization_id, project_id } = params ?? {};
    return this._client.delete(path`/api/v1/beta/directories/${directoryID}`, {
      query: { organization_id, project_id },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a directory by its identifier.
   *
   * @example
   * ```ts
   * const directory = await client.beta.directories.get(
   *   'directory_id',
   * );
   * ```
   */
  get(
    directoryID: string,
    query: DirectoryGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DirectoryGetResponse> {
    return this._client.get(path`/api/v1/beta/directories/${directoryID}`, { query, ...options });
  }
}

export type DirectoryListResponsesPaginatedCursor = PaginatedCursor<DirectoryListResponse>;

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
   * Optional timestamp of when the directory was deleted. Null if not deleted.
   */
  deleted_at?: string | null;

  /**
   * Optional description shown to users.
   */
  description?: string | null;

  /**
   * When this directory expires and is eligible for cleanup.
   */
  expires_at?: string | null;

  /**
   * Reserved system-managed metadata.
   */
  system_metadata?: { [key: string]: unknown } | null;

  /**
   * Directory type: 'user', 'index', 'ephemeral', or 'system_ephemeral'.
   */
  type?: 'user' | 'index' | 'ephemeral' | 'system_ephemeral' | null;

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
   * Optional timestamp of when the directory was deleted. Null if not deleted.
   */
  deleted_at?: string | null;

  /**
   * Optional description shown to users.
   */
  description?: string | null;

  /**
   * When this directory expires and is eligible for cleanup.
   */
  expires_at?: string | null;

  /**
   * Reserved system-managed metadata.
   */
  system_metadata?: { [key: string]: unknown } | null;

  /**
   * Directory type: 'user', 'index', 'ephemeral', or 'system_ephemeral'.
   */
  type?: 'user' | 'index' | 'ephemeral' | 'system_ephemeral' | null;

  /**
   * Update datetime
   */
  updated_at?: string | null;
}

/**
 * API response schema for a directory.
 */
export interface DirectoryListResponse {
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
   * Optional timestamp of when the directory was deleted. Null if not deleted.
   */
  deleted_at?: string | null;

  /**
   * Optional description shown to users.
   */
  description?: string | null;

  /**
   * When this directory expires and is eligible for cleanup.
   */
  expires_at?: string | null;

  /**
   * Reserved system-managed metadata.
   */
  system_metadata?: { [key: string]: unknown } | null;

  /**
   * Directory type: 'user', 'index', 'ephemeral', or 'system_ephemeral'.
   */
  type?: 'user' | 'index' | 'ephemeral' | 'system_ephemeral' | null;

  /**
   * Update datetime
   */
  updated_at?: string | null;
}

/**
 * API response schema for a directory.
 */
export interface DirectoryGetResponse {
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
   * Optional timestamp of when the directory was deleted. Null if not deleted.
   */
  deleted_at?: string | null;

  /**
   * Optional description shown to users.
   */
  description?: string | null;

  /**
   * When this directory expires and is eligible for cleanup.
   */
  expires_at?: string | null;

  /**
   * Reserved system-managed metadata.
   */
  system_metadata?: { [key: string]: unknown } | null;

  /**
   * Directory type: 'user', 'index', 'ephemeral', or 'system_ephemeral'.
   */
  type?: 'user' | 'index' | 'ephemeral' | 'system_ephemeral' | null;

  /**
   * Update datetime
   */
  updated_at?: string | null;
}

export interface DirectoryCreateParams {
  /**
   * Body param: Human-readable name for the directory.
   */
  name: string;

  /**
   * Query param
   */
  organization_id?: string | null;

  /**
   * Query param
   */
  project_id?: string | null;

  /**
   * Body param: Optional description shown to users.
   */
  description?: string | null;

  /**
   * Body param: When this directory expires. Required for ephemeral directories.
   */
  expires_at?: string | null;

  /**
   * Body param: Reserved system-managed metadata.
   */
  system_metadata?: { [key: string]: unknown } | null;

  /**
   * Body param: Directory type. Use 'ephemeral' for batch processing with automatic
   * cleanup.
   */
  type?: 'user' | 'ephemeral';
}

export interface DirectoryUpdateParams {
  /**
   * Query param
   */
  organization_id?: string | null;

  /**
   * Query param
   */
  project_id?: string | null;

  /**
   * Body param: Updated description for the directory.
   */
  description?: string | null;

  /**
   * Body param: Updated name for the directory.
   */
  name?: string | null;
}

export interface DirectoryListParams extends PaginatedCursorParams {
  include_deleted?: boolean;

  name?: string | null;

  organization_id?: string | null;

  project_id?: string | null;

  type?: 'user' | 'index' | 'ephemeral' | null;
}

export interface DirectoryDeleteParams {
  organization_id?: string | null;

  project_id?: string | null;
}

export interface DirectoryGetParams {
  organization_id?: string | null;

  project_id?: string | null;
}

Directories.Files = Files;

export declare namespace Directories {
  export {
    type DirectoryCreateResponse as DirectoryCreateResponse,
    type DirectoryUpdateResponse as DirectoryUpdateResponse,
    type DirectoryListResponse as DirectoryListResponse,
    type DirectoryGetResponse as DirectoryGetResponse,
    type DirectoryListResponsesPaginatedCursor as DirectoryListResponsesPaginatedCursor,
    type DirectoryCreateParams as DirectoryCreateParams,
    type DirectoryUpdateParams as DirectoryUpdateParams,
    type DirectoryListParams as DirectoryListParams,
    type DirectoryDeleteParams as DirectoryDeleteParams,
    type DirectoryGetParams as DirectoryGetParams,
  };

  export {
    Files as Files,
    type FileUpdateResponse as FileUpdateResponse,
    type FileListResponse as FileListResponse,
    type FileAddResponse as FileAddResponse,
    type FileGetResponse as FileGetResponse,
    type FileUploadResponse as FileUploadResponse,
    type FileListResponsesPaginatedCursor as FileListResponsesPaginatedCursor,
    type FileUpdateParams as FileUpdateParams,
    type FileListParams as FileListParams,
    type FileDeleteParams as FileDeleteParams,
    type FileAddParams as FileAddParams,
    type FileGetParams as FileGetParams,
    type FileUploadParams as FileUploadParams,
  };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as FilesAPI from './files';
import {
  FileAddParams,
  FileAddResponse,
  FileDeleteParams,
  FileListParams,
  FileListResponse,
  FileListResponsesPaginatedClassifyJobs,
  FileRetrieveParams,
  FileRetrieveResponse,
  FileUpdateParams,
  FileUpdateResponse,
  Files,
} from './files';
import { APIPromise } from '../../../core/api-promise';
import {
  PagePromise,
  PaginatedClassifyJobs,
  type PaginatedClassifyJobsParams,
} from '../../../core/pagination';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

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
  retrieve(
    directoryID: string,
    query: DirectoryRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DirectoryRetrieveResponse> {
    return this._client.get(path`/api/v1/beta/directories/${directoryID}`, { query, ...options });
  }

  /**
   * Update directory metadata.
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
   */
  list(
    query: DirectoryListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<DirectoryListResponsesPaginatedClassifyJobs, DirectoryListResponse> {
    return this._client.getAPIList('/api/v1/beta/directories', PaginatedClassifyJobs<DirectoryListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Permanently delete a directory.
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
}

export type DirectoryListResponsesPaginatedClassifyJobs = PaginatedClassifyJobs<DirectoryListResponse>;

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

export interface DirectoryRetrieveParams {
  organization_id?: string | null;

  project_id?: string | null;
}

export interface DirectoryUpdateParams {
  /**
   * Query param:
   */
  organization_id?: string | null;

  /**
   * Query param:
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

export interface DirectoryListParams extends PaginatedClassifyJobsParams {
  data_source_id?: string | null;

  include_deleted?: boolean;

  name?: string | null;

  organization_id?: string | null;

  project_id?: string | null;
}

export interface DirectoryDeleteParams {
  organization_id?: string | null;

  project_id?: string | null;
}

Directories.Files = Files;

export declare namespace Directories {
  export {
    type DirectoryCreateResponse as DirectoryCreateResponse,
    type DirectoryRetrieveResponse as DirectoryRetrieveResponse,
    type DirectoryUpdateResponse as DirectoryUpdateResponse,
    type DirectoryListResponse as DirectoryListResponse,
    type DirectoryListResponsesPaginatedClassifyJobs as DirectoryListResponsesPaginatedClassifyJobs,
    type DirectoryCreateParams as DirectoryCreateParams,
    type DirectoryRetrieveParams as DirectoryRetrieveParams,
    type DirectoryUpdateParams as DirectoryUpdateParams,
    type DirectoryListParams as DirectoryListParams,
    type DirectoryDeleteParams as DirectoryDeleteParams,
  };

  export {
    Files as Files,
    type FileRetrieveResponse as FileRetrieveResponse,
    type FileUpdateResponse as FileUpdateResponse,
    type FileListResponse as FileListResponse,
    type FileAddResponse as FileAddResponse,
    type FileListResponsesPaginatedClassifyJobs as FileListResponsesPaginatedClassifyJobs,
    type FileRetrieveParams as FileRetrieveParams,
    type FileUpdateParams as FileUpdateParams,
    type FileListParams as FileListParams,
    type FileDeleteParams as FileDeleteParams,
    type FileAddParams as FileAddParams,
  };
}

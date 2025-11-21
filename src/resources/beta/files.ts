// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as FilesFilesAPI from '../files/files';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Files extends APIResource {
  /**
   * Create a new file in the project.
   *
   * Args: file_create: File creation data project: Validated project from dependency
   * db: Database session
   *
   * Returns: The created file
   */
  create(params: FileCreateParams, options?: RequestOptions): APIPromise<FilesFilesAPI.File> {
    const { organization_id, project_id, ...body } = params;
    return this._client.post('/api/v1/beta/files', {
      query: { organization_id, project_id },
      body,
      ...options,
    });
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

  /**
   * Upsert a file (create or update if exists) in the project.
   *
   * Args: file_create: File creation/update data project: Validated project from
   * dependency db: Database session
   *
   * Returns: The upserted file
   */
  upsert(params: FileUpsertParams, options?: RequestOptions): APIPromise<FilesFilesAPI.File> {
    const { organization_id, project_id, ...body } = params;
    return this._client.put('/api/v1/beta/files', {
      query: { organization_id, project_id },
      body,
      ...options,
    });
  }
}

/**
 * Response schema for paginated file queries.
 */
export interface FileQueryResponse {
  /**
   * The list of items.
   */
  items: Array<FilesFilesAPI.File>;

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

export interface FileCreateParams {
  /**
   * Body param: Name that will be used for created file. If possible, always include
   * the file extension in the name.
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
   * Body param: The ID of the data source that the file belongs to
   */
  data_source_id?: string | null;

  /**
   * Body param: The ID of the file in the external system
   */
  external_file_id?: string | null;

  /**
   * Body param: Size of the file in bytes
   */
  file_size?: number | null;

  /**
   * Body param: The last modified time of the file
   */
  last_modified_at?: string | null;

  /**
   * Body param: Permission information for the file
   */
  permission_info?: {
    [key: string]: { [key: string]: unknown } | Array<unknown> | string | number | boolean | null;
  } | null;

  /**
   * Body param: Resource information for the file
   */
  resource_info?: {
    [key: string]: { [key: string]: unknown } | Array<unknown> | string | number | boolean | null;
  } | null;
}

export interface FileDeleteParams {
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

export interface FileUpsertParams {
  /**
   * Body param: Name that will be used for created file. If possible, always include
   * the file extension in the name.
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
   * Body param: The ID of the data source that the file belongs to
   */
  data_source_id?: string | null;

  /**
   * Body param: The ID of the file in the external system
   */
  external_file_id?: string | null;

  /**
   * Body param: Size of the file in bytes
   */
  file_size?: number | null;

  /**
   * Body param: The last modified time of the file
   */
  last_modified_at?: string | null;

  /**
   * Body param: Permission information for the file
   */
  permission_info?: {
    [key: string]: { [key: string]: unknown } | Array<unknown> | string | number | boolean | null;
  } | null;

  /**
   * Body param: Resource information for the file
   */
  resource_info?: {
    [key: string]: { [key: string]: unknown } | Array<unknown> | string | number | boolean | null;
  } | null;
}

export declare namespace Files {
  export {
    type FileQueryResponse as FileQueryResponse,
    type FileCreateParams as FileCreateParams,
    type FileDeleteParams as FileDeleteParams,
    type FileQueryParams as FileQueryParams,
    type FileUpsertParams as FileUpsertParams,
  };
}

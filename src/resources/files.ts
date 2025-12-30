// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { type Uploadable } from '../core/uploads';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { multipartFormRequestOptions } from '../internal/uploads';
import { path } from '../internal/utils/path';

export class Files extends APIResource {
  /**
   * Delete the file from S3.
   */
  delete(
    id: string,
    params: FileDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { organization_id, project_id } = params ?? {};
    return this._client.delete(path`/api/v1/files/${id}`, {
      query: { organization_id, project_id },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Create a presigned url for uploading a file.
   *
   * The presigned url is valid for a limited time period, after which it will
   * expire. Be careful on accidental exposure of the presigned url, as it may allow
   * unauthorized access to the file before the expiration.
   */
  generatePresignedURL(
    params: FileGeneratePresignedURLParams,
    options?: RequestOptions,
  ): APIPromise<FileGeneratePresignedURLResponse> {
    const { expires_at_seconds, organization_id, project_id, ...body } = params;
    return this._client.put('/api/v1/files', {
      query: { expires_at_seconds, organization_id, project_id },
      body,
      ...options,
    });
  }

  /**
   * Read File metadata objects.
   */
  get(id: string, query: FileGetParams | null | undefined = {}, options?: RequestOptions): APIPromise<File> {
    return this._client.get(path`/api/v1/files/${id}`, { query, ...options });
  }

  /**
   * Get a specific figure from a page of a file.
   */
  getPageFigure(
    figureName: string,
    params: FileGetPageFigureParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { id, page_index, ...query } = params;
    return this._client.get(path`/api/v1/files/${id}/page-figures/${page_index}/${figureName}`, {
      query,
      ...options,
    });
  }

  /**
   * Get screenshot of a page from a file.
   */
  getPageScreenshot(
    pageIndex: number,
    params: FileGetPageScreenshotParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { id, ...query } = params;
    return this._client.get(path`/api/v1/files/${id}/page_screenshots/${pageIndex}`, { query, ...options });
  }

  /**
   * List metadata for all figures from all pages of a file.
   */
  listPageFigures(
    id: string,
    query: FileListPageFiguresParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FileListPageFiguresResponse> {
    return this._client.get(path`/api/v1/files/${id}/page-figures`, { query, ...options });
  }

  /**
   * List metadata for all screenshots of pages from a file.
   */
  listPageScreenshots(
    id: string,
    query: FileListPageScreenshotsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FileListPageScreenshotsResponse> {
    return this._client.get(path`/api/v1/files/${id}/page_screenshots`, { query, ...options });
  }

  /**
   * Returns a presigned url to read the file content.
   */
  readContent(
    id: string,
    query: FileReadContentParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PresignedURL> {
    return this._client.get(path`/api/v1/files/${id}/content`, { query, ...options });
  }

  /**
   * Upload a file to S3.
   */
  upload(params: FileUploadParams, options?: RequestOptions): APIPromise<File> {
    const { external_file_id, organization_id, project_id, storage_type, ...body } = params;
    return this._client.post(
      '/api/v1/files',
      multipartFormRequestOptions(
        { query: { external_file_id, organization_id, project_id, storage_type }, body, ...options },
        this._client,
      ),
    );
  }

  /**
   * Upload a file to the project from a URL.
   *
   * If name is ommitted in the request payload, the file name will be extracted from
   * the response Content-Disposition header if available or otherwise it will be
   * derived from the URL path.
   *
   * If providing the name in the request payload, always suffix the file extension
   * in the name if available.
   */
  uploadFromURL(params: FileUploadFromURLParams, options?: RequestOptions): APIPromise<File> {
    const { organization_id, project_id, ...body } = params;
    return this._client.put('/api/v1/files/upload_from_url', {
      query: { organization_id, project_id },
      body,
      ...options,
    });
  }
}

/**
 * Schema for a file.
 */
export interface File {
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
   * Creation datetime
   */
  created_at?: string | null;

  /**
   * The ID of the data source that the file belongs to
   */
  data_source_id?: string | null;

  /**
   * The expiration date for the file. Files past this date can be deleted.
   */
  expires_at?: string | null;

  /**
   * The ID of the file in the external system
   */
  external_file_id?: string | null;

  /**
   * Size of the file in bytes
   */
  file_size?: number | null;

  /**
   * File type (e.g. pdf, docx, etc.)
   */
  file_type?: string | null;

  /**
   * The last modified time of the file
   */
  last_modified_at?: string | null;

  /**
   * Permission information for the file
   */
  permission_info?: {
    [key: string]: { [key: string]: unknown } | Array<unknown> | string | number | boolean | null;
  } | null;

  /**
   * The intended purpose of the file (e.g., 'user_data', 'parse', 'extract',
   * 'split', 'classify')
   */
  purpose?: string | null;

  /**
   * Resource information for the file
   */
  resource_info?: {
    [key: string]: { [key: string]: unknown } | Array<unknown> | string | number | boolean | null;
  } | null;

  /**
   * Update datetime
   */
  updated_at?: string | null;
}

/**
 * Schema for creating a file.
 */
export interface FileCreate {
  /**
   * Name that will be used for created file. If possible, always include the file
   * extension in the name.
   */
  name: string;

  /**
   * The ID of the data source that the file belongs to
   */
  data_source_id?: string | null;

  /**
   * The ID of the file in the external system
   */
  external_file_id?: string | null;

  /**
   * Size of the file in bytes
   */
  file_size?: number | null;

  /**
   * The last modified time of the file
   */
  last_modified_at?: string | null;

  /**
   * Permission information for the file
   */
  permission_info?: {
    [key: string]: { [key: string]: unknown } | Array<unknown> | string | number | boolean | null;
  } | null;

  /**
   * Resource information for the file
   */
  resource_info?: {
    [key: string]: { [key: string]: unknown } | Array<unknown> | string | number | boolean | null;
  } | null;

  /**
   * Storage type for the file. Valid values: 'Ephemeral', 'Permanent' (no
   * expiration). If not specified, defaults to permanent storage.
   */
  storage_type?: 'ephemeral' | 'permanent' | (string & {});
}

/**
 * Schema for a presigned URL.
 */
export interface PresignedURL {
  /**
   * The time at which the presigned URL expires
   */
  expires_at: string;

  /**
   * A presigned URL for IO operations against a private file
   */
  url: string;

  /**
   * Form fields for a presigned POST request
   */
  form_fields?: { [key: string]: string } | null;
}

/**
 * Schema for a presigned URL with a file ID.
 */
export interface FileGeneratePresignedURLResponse {
  /**
   * The time at which the presigned URL expires
   */
  expires_at: string;

  /**
   * The ID of the file associated with the presigned URL
   */
  file_id: string;

  /**
   * A presigned URL for IO operations against a private file
   */
  url: string;

  /**
   * Form fields for a presigned POST request
   */
  form_fields?: { [key: string]: string } | null;
}

export type FileGetPageFigureResponse = unknown;

export type FileGetPageScreenshotResponse = unknown;

export type FileListPageFiguresResponse = Array<FileListPageFiguresResponse.FileListPageFiguresResponseItem>;

export namespace FileListPageFiguresResponse {
  export interface FileListPageFiguresResponseItem {
    /**
     * The confidence of the figure
     */
    confidence: number;

    /**
     * The name of the figure
     */
    figure_name: string;

    /**
     * The size of the figure in bytes
     */
    figure_size: number;

    /**
     * The ID of the file that the figure was taken from
     */
    file_id: string;

    /**
     * The index of the page for which the figure is taken (0-indexed)
     */
    page_index: number;

    /**
     * Whether the figure is likely to be noise
     */
    is_likely_noise?: boolean;

    /**
     * Metadata for the figure
     */
    metadata?: { [key: string]: unknown } | null;
  }
}

export type FileListPageScreenshotsResponse =
  Array<FileListPageScreenshotsResponse.FileListPageScreenshotsResponseItem>;

export namespace FileListPageScreenshotsResponse {
  export interface FileListPageScreenshotsResponseItem {
    /**
     * The ID of the file that the page screenshot was taken from
     */
    file_id: string;

    /**
     * The size of the image in bytes
     */
    image_size: number;

    /**
     * The index of the page for which the screenshot is taken (0-indexed)
     */
    page_index: number;

    /**
     * Metadata for the screenshot
     */
    metadata?: { [key: string]: unknown } | null;
  }
}

export interface FileDeleteParams {
  organization_id?: string | null;

  project_id?: string | null;
}

export interface FileGeneratePresignedURLParams {
  /**
   * Body param: Name that will be used for created file. If possible, always include
   * the file extension in the name.
   */
  name: string;

  /**
   * Query param:
   */
  expires_at_seconds?: number | null;

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

  /**
   * Body param: Storage type for the file. Valid values: 'Ephemeral', 'Permanent'
   * (no expiration). If not specified, defaults to permanent storage.
   */
  storage_type?: 'ephemeral' | 'permanent' | (string & {});
}

export interface FileGetParams {
  organization_id?: string | null;

  project_id?: string | null;
}

export interface FileGetPageFigureParams {
  /**
   * Path param:
   */
  id: string;

  /**
   * Path param:
   */
  page_index: number;

  /**
   * Query param:
   */
  organization_id?: string | null;

  /**
   * Query param:
   */
  project_id?: string | null;
}

export interface FileGetPageScreenshotParams {
  /**
   * Path param:
   */
  id: string;

  /**
   * Query param:
   */
  organization_id?: string | null;

  /**
   * Query param:
   */
  project_id?: string | null;
}

export interface FileListPageFiguresParams {
  organization_id?: string | null;

  project_id?: string | null;
}

export interface FileListPageScreenshotsParams {
  organization_id?: string | null;

  project_id?: string | null;
}

export interface FileReadContentParams {
  expires_at_seconds?: number | null;

  organization_id?: string | null;

  project_id?: string | null;
}

export interface FileUploadParams {
  /**
   * Body param:
   */
  upload_file: Uploadable;

  /**
   * Query param:
   */
  external_file_id?: string | null;

  /**
   * Query param:
   */
  organization_id?: string | null;

  /**
   * Query param:
   */
  project_id?: string | null;

  /**
   * Query param:
   */
  storage_type?: string | null;
}

export interface FileUploadFromURLParams {
  /**
   * Body param: URL of the file to download
   */
  url: string;

  /**
   * Query param:
   */
  organization_id?: string | null;

  /**
   * Query param:
   */
  project_id?: string | null;

  /**
   * Body param: Whether to follow redirects when downloading the file
   */
  follow_redirects?: boolean;

  /**
   * Body param: Name that will be used for created file. If possible, always include
   * the file extension in the name.
   */
  name?: string | null;

  /**
   * Body param: URL of the proxy server to use for downloading the file
   */
  proxy_url?: string | null;

  /**
   * Body param: Headers to include in the request when downloading the file
   */
  request_headers?: { [key: string]: string } | null;

  /**
   * Body param: Resource information for the file
   */
  resource_info?: {
    [key: string]: { [key: string]: unknown } | Array<unknown> | string | number | boolean | null;
  } | null;

  /**
   * Body param: Storage type for the file. Valid values: 'Ephemeral', 'Permanent'
   * (no expiration). If not specified, defaults to permanent storage.
   */
  storage_type?: 'ephemeral' | 'permanent' | (string & {});

  /**
   * Body param: Whether to verify the SSL certificate when downloading the file
   */
  verify_ssl?: boolean;
}

export declare namespace Files {
  export {
    type File as File,
    type FileCreate as FileCreate,
    type PresignedURL as PresignedURL,
    type FileGeneratePresignedURLResponse as FileGeneratePresignedURLResponse,
    type FileGetPageFigureResponse as FileGetPageFigureResponse,
    type FileGetPageScreenshotResponse as FileGetPageScreenshotResponse,
    type FileListPageFiguresResponse as FileListPageFiguresResponse,
    type FileListPageScreenshotsResponse as FileListPageScreenshotsResponse,
    type FileDeleteParams as FileDeleteParams,
    type FileGeneratePresignedURLParams as FileGeneratePresignedURLParams,
    type FileGetParams as FileGetParams,
    type FileGetPageFigureParams as FileGetPageFigureParams,
    type FileGetPageScreenshotParams as FileGetPageScreenshotParams,
    type FileListPageFiguresParams as FileListPageFiguresParams,
    type FileListPageScreenshotsParams as FileListPageScreenshotsParams,
    type FileReadContentParams as FileReadContentParams,
    type FileUploadParams as FileUploadParams,
    type FileUploadFromURLParams as FileUploadFromURLParams,
  };
}

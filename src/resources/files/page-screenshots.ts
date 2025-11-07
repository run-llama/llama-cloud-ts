// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as FilesAPI from './files';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class PageScreenshots extends APIResource {
  /**
   * List metadata for all screenshots of pages from a file.
   */
  list(
    id: string,
    query: PageScreenshotListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PageScreenshotListResponse> {
    return this._client.get(path`/api/v1/files/${id}/page_screenshots`, { query, ...options });
  }

  /**
   * Returns a presigned url to read a page screenshot.
   *
   * The presigned url is valid for a limited time period, after which it will
   * expire. Be careful on accidental exposure of the presigned url, as it may allow
   * unauthorized access to the file before the expiration.
   */
  generatePresignedURL(
    pageIndex: number,
    params: PageScreenshotGeneratePresignedURLParams,
    options?: RequestOptions,
  ): APIPromise<FilesAPI.PresignedURL> {
    const { id, organization_id, project_id } = params;
    return this._client.post(path`/api/v1/files/${id}/page_screenshots/${pageIndex}/presigned_url`, {
      query: { organization_id, project_id },
      ...options,
    });
  }

  /**
   * Get screenshot of a page from a file.
   */
  get(pageIndex: number, params: PageScreenshotGetParams, options?: RequestOptions): APIPromise<unknown> {
    const { id, ...query } = params;
    return this._client.get(path`/api/v1/files/${id}/page_screenshots/${pageIndex}`, { query, ...options });
  }
}

export interface PageScreenshotMetadata {
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

export type PageScreenshotListResponse = Array<PageScreenshotMetadata>;

export type PageScreenshotGetResponse = unknown;

export interface PageScreenshotListParams {
  organization_id?: string | null;

  project_id?: string | null;
}

export interface PageScreenshotGeneratePresignedURLParams {
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

export interface PageScreenshotGetParams {
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

export declare namespace PageScreenshots {
  export {
    type PageScreenshotMetadata as PageScreenshotMetadata,
    type PageScreenshotListResponse as PageScreenshotListResponse,
    type PageScreenshotGetResponse as PageScreenshotGetResponse,
    type PageScreenshotListParams as PageScreenshotListParams,
    type PageScreenshotGeneratePresignedURLParams as PageScreenshotGeneratePresignedURLParams,
    type PageScreenshotGetParams as PageScreenshotGetParams,
  };
}

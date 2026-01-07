// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Images extends APIResource {
  /**
   * Get a specific figure from a page of a file.
   */
  getPageFigure(
    figureName: string,
    params: ImageGetPageFigureParams,
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
    params: ImageGetPageScreenshotParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { id, ...query } = params;
    return this._client.get(path`/api/v1/files/${id}/page_screenshots/${pageIndex}`, { query, ...options });
  }
}

export type ImageGetPageFigureResponse = unknown;

export type ImageGetPageScreenshotResponse = unknown;

export interface ImageGetPageFigureParams {
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

export interface ImageGetPageScreenshotParams {
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

export declare namespace Images {
  export {
    type ImageGetPageFigureResponse as ImageGetPageFigureResponse,
    type ImageGetPageScreenshotResponse as ImageGetPageScreenshotResponse,
    type ImageGetPageFigureParams as ImageGetPageFigureParams,
    type ImageGetPageScreenshotParams as ImageGetPageScreenshotParams,
  };
}

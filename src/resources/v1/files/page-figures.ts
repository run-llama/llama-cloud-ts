// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as FilesAPI from './files';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class PageFigures extends APIResource {
  /**
   * Get a specific figure from a page of a file.
   */
  retrieve(
    figureName: string,
    params: PageFigureRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { id, page_index, ...query } = params;
    return this._client.get(path`/api/v1/files/${id}/page-figures/${page_index}/${figureName}`, {
      query,
      ...options,
    });
  }

  /**
   * List metadata for all figures from all pages of a file.
   */
  list(
    id: string,
    query: PageFigureListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PageFigureListResponse> {
    return this._client.get(path`/api/v1/files/${id}/page-figures`, { query, ...options });
  }

  /**
   * Returns a presigned url to read a page figure.
   *
   * The presigned url is valid for a limited time period, after which it will
   * expire. Be careful on accidental exposure of the presigned url, as it may allow
   * unauthorized access to the file before the expiration.
   */
  generatePresignedURL(
    figureName: string,
    params: PageFigureGeneratePresignedURLParams,
    options?: RequestOptions,
  ): APIPromise<FilesAPI.PresignedURL> {
    const { id, page_index, organization_id, project_id } = params;
    return this._client.post(
      path`/api/v1/files/${id}/page-figures/${page_index}/${figureName}/presigned_url`,
      { query: { organization_id, project_id }, ...options },
    );
  }
}

export interface PageFigureMetadata {
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

export type PageFigureRetrieveResponse = unknown;

export type PageFigureListResponse = Array<PageFigureMetadata>;

export interface PageFigureRetrieveParams {
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

export interface PageFigureListParams {
  organization_id?: string | null;

  project_id?: string | null;
}

export interface PageFigureGeneratePresignedURLParams {
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

export declare namespace PageFigures {
  export {
    type PageFigureMetadata as PageFigureMetadata,
    type PageFigureRetrieveResponse as PageFigureRetrieveResponse,
    type PageFigureListResponse as PageFigureListResponse,
    type PageFigureRetrieveParams as PageFigureRetrieveParams,
    type PageFigureListParams as PageFigureListParams,
    type PageFigureGeneratePresignedURLParams as PageFigureGeneratePresignedURLParams,
  };
}

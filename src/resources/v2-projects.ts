// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { PagePromise, PaginatedCursor, type PaginatedCursorParams } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class V2Projects extends APIResource {
  /**
   * List projects in an organization. Requires `organization_id` or a project-scoped
   * API key.
   */
  list(
    query: V2ProjectListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<V2ProjectListResponsesPaginatedCursor, V2ProjectListResponse> {
    return this._client.getAPIList('/api/v2/projects', PaginatedCursor<V2ProjectListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Get a project by ID.
   */
  get(
    projectID: string,
    query: V2ProjectGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<V2ProjectGetResponse> {
    return this._client.get(path`/api/v2/projects/${projectID}`, { query, ...options });
  }
}

export type V2ProjectListResponsesPaginatedCursor = PaginatedCursor<V2ProjectListResponse>;

/**
 * API response schema for a project.
 */
export interface V2ProjectListResponse {
  /**
   * The project's unique identifier.
   */
  id: string;

  /**
   * The project's display name.
   */
  name: string;

  /**
   * The organization the project belongs to.
   */
  organization_id: string;

  /**
   * Creation datetime
   */
  created_at?: string | null;

  /**
   * Whether this project is the default project for its organization.
   */
  is_default?: boolean;

  /**
   * Update datetime
   */
  updated_at?: string | null;
}

/**
 * API response schema for a project.
 */
export interface V2ProjectGetResponse {
  /**
   * The project's unique identifier.
   */
  id: string;

  /**
   * The project's display name.
   */
  name: string;

  /**
   * The organization the project belongs to.
   */
  organization_id: string;

  /**
   * Creation datetime
   */
  created_at?: string | null;

  /**
   * Whether this project is the default project for its organization.
   */
  is_default?: boolean;

  /**
   * Update datetime
   */
  updated_at?: string | null;
}

export interface V2ProjectListParams extends PaginatedCursorParams {
  name?: string | null;

  organization_id?: string | null;
}

export interface V2ProjectGetParams {
  organization_id?: string | null;
}

export declare namespace V2Projects {
  export {
    type V2ProjectListResponse as V2ProjectListResponse,
    type V2ProjectGetResponse as V2ProjectGetResponse,
    type V2ProjectListResponsesPaginatedCursor as V2ProjectListResponsesPaginatedCursor,
    type V2ProjectListParams as V2ProjectListParams,
    type V2ProjectGetParams as V2ProjectGetParams,
  };
}

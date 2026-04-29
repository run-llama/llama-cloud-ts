// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { PagePromise, PaginatedCursorPost, type PaginatedCursorPostParams } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class AgentData extends APIResource {
  /**
   * Create new agent data.
   *
   * @example
   * ```ts
   * const agentData = await client.beta.agentData.create({
   *   data: { foo: 'bar' },
   *   deployment_name: 'deployment_name',
   * });
   * ```
   */
  create(params: AgentDataCreateParams, options?: RequestOptions): APIPromise<AgentData> {
    const { organization_id, project_id, ...body } = params
    return this._client.post('/api/v1/beta/agent-data', { query: { organization_id, project_id }, body, ...options });
  }

  /**
   * @deprecated Use {@link create} instead. `agentData` is kept as a
   * backwards-compatible alias for SDK versions that exposed the create
   * endpoint under this name.
   */
  agentData(params: AgentDataCreateParams, options?: RequestOptions): APIPromise<AgentData> {
    return this.create(params, options);
  }

  /**
   * Update agent data by ID (overwrites).
   *
   * @example
   * ```ts
   * const agentData = await client.beta.agentData.update(
   *   'item_id',
   *   { data: { foo: 'bar' } },
   * );
   * ```
   */
  update(itemID: string, params: AgentDataUpdateParams, options?: RequestOptions): APIPromise<AgentData> {
    const { organization_id, project_id, ...body } = params
    return this._client.put(path`/api/v1/beta/agent-data/${itemID}`, { query: { organization_id, project_id }, body, ...options });
  }

  /**
   * Delete agent data by ID.
   *
   * @example
   * ```ts
   * const agentData = await client.beta.agentData.delete(
   *   'item_id',
   * );
   * ```
   */
  delete(itemID: string, params: AgentDataDeleteParams | null | undefined = {}, options?: RequestOptions): APIPromise<AgentDataDeleteResponse> {
    const { organization_id, project_id } = params ?? {}
    return this._client.delete(path`/api/v1/beta/agent-data/${itemID}`, { query: { organization_id, project_id }, ...options });
  }

  /**
   * Aggregate agent data with grouping and optional counting/first item retrieval.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const agentDataAggregateResponse of client.beta.agentData.aggregate(
   *   { deployment_name: 'deployment_name' },
   * )) {
   *   // ...
   * }
   * ```
   */
  aggregate(params: AgentDataAggregateParams, options?: RequestOptions): PagePromise<AgentDataAggregateResponsesPaginatedCursorPost, AgentDataAggregateResponse> {
    const { organization_id, project_id, ...body } = params
    return this._client.getAPIList('/api/v1/beta/agent-data/:aggregate', PaginatedCursorPost<AgentDataAggregateResponse>, { query: { organization_id, project_id }, body, method: 'post', ...options });
  }

  /**
   * Bulk delete agent data by query (deployment_name, collection, optional filters).
   *
   * @example
   * ```ts
   * const response = await client.beta.agentData.deleteByQuery({
   *   deployment_name: 'deployment_name',
   * });
   * ```
   */
  deleteByQuery(params: AgentDataDeleteByQueryParams, options?: RequestOptions): APIPromise<AgentDataDeleteByQueryResponse> {
    const { organization_id, project_id, ...body } = params
    return this._client.post('/api/v1/beta/agent-data/:delete', { query: { organization_id, project_id }, body, ...options });
  }

  /**
   * Get agent data by ID.
   *
   * @example
   * ```ts
   * const agentData = await client.beta.agentData.get(
   *   'item_id',
   * );
   * ```
   */
  get(itemID: string, query: AgentDataGetParams | null | undefined = {}, options?: RequestOptions): APIPromise<AgentData> {
    return this._client.get(path`/api/v1/beta/agent-data/${itemID}`, { query, ...options });
  }

  /**
   * Search agent data with filtering, sorting, and pagination.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const agentData of client.beta.agentData.search({
   *   deployment_name: 'deployment_name',
   * })) {
   *   // ...
   * }
   * ```
   */
  search(params: AgentDataSearchParams, options?: RequestOptions): PagePromise<AgentDataPaginatedCursorPost, AgentData> {
    const { organization_id, project_id, ...body } = params
    return this._client.getAPIList('/api/v1/beta/agent-data/:search', PaginatedCursorPost<AgentData>, { query: { organization_id, project_id }, body, method: 'post', ...options });
  }
}

export type AgentDataAggregateResponsesPaginatedCursorPost = PaginatedCursorPost<AgentDataAggregateResponse>

export type AgentDataPaginatedCursorPost = PaginatedCursorPost<AgentData>

/**
 * API Result for a single agent data item
 */
export interface AgentData {
  data: { [key: string]: unknown };

  deployment_name: string;

  id?: string | null;

  collection?: string;

  created_at?: string | null;

  project_id?: string | null;

  updated_at?: string | null;
}

export type AgentDataDeleteResponse = { [key: string]: string }

/**
 * API Result for a single group in the aggregate response
 */
export interface AgentDataAggregateResponse {
  group_key: { [key: string]: unknown };

  count?: number | null;

  first_item?: { [key: string]: unknown } | null;
}

/**
 * API response for bulk delete operation
 */
export interface AgentDataDeleteByQueryResponse {
  deleted_count: number;
}

export interface AgentDataCreateParams {
  /**
   * Body param
   */
  data: { [key: string]: unknown };

  /**
   * Body param
   */
  deployment_name: string;

  /**
   * Query param
   */
  organization_id?: string | null;

  /**
   * Query param
   */
  project_id?: string | null;

  /**
   * Body param
   */
  collection?: string;
}

export interface AgentDataUpdateParams {
  /**
   * Body param
   */
  data: { [key: string]: unknown };

  /**
   * Query param
   */
  organization_id?: string | null;

  /**
   * Query param
   */
  project_id?: string | null;
}

export interface AgentDataDeleteParams {
  organization_id?: string | null;

  project_id?: string | null;
}

export interface AgentDataAggregateParams extends PaginatedCursorPostParams {
  /**
   * Body param: The agent deployment's name to aggregate data for
   */
  deployment_name: string;

  /**
   * Query param
   */
  organization_id?: string | null;

  /**
   * Query param
   */
  project_id?: string | null;

  /**
   * Body param: The logical agent data collection to aggregate data for
   */
  collection?: string;

  /**
   * Body param: Whether to count the number of items in each group
   */
  count?: boolean | null;

  /**
   * Body param: A filter object or expression that filters resources listed in the
   * response.
   */
  filter?: { [key: string]: AgentDataAggregateParams.Filter } | null;

  /**
   * Body param: Whether to return the first item in each group (Sorted by
   * created_at)
   */
  first?: boolean | null;

  /**
   * Body param: The fields to group by. If empty, the entire dataset is grouped on.
   * e.g. if left out, can be used for simple count operations
   */
  group_by?: Array<string> | null;

  /**
   * Body param: The offset to start from. If not provided, the first page is
   * returned
   */
  offset?: number | null;

  /**
   * Body param: A comma-separated list of fields to order by, sorted in ascending
   * order. Use 'field_name desc' to specify descending order.
   */
  order_by?: string | null;
}

export namespace AgentDataAggregateParams {
  /**
   * API request model for a filter comparison operation.
   */
  export interface Filter {
    eq?: number | string | (string & {}) | null;

    excludes?: Array<number | string | (string & {}) | null>;

    gt?: number | string | (string & {}) | null;

    gte?: number | string | (string & {}) | null;

    includes?: Array<number | string | (string & {}) | null>;

    lt?: number | string | (string & {}) | null;

    lte?: number | string | (string & {}) | null;

    ne?: number | string | (string & {}) | null;
  }
}

export interface AgentDataDeleteByQueryParams {
  /**
   * Body param: The agent deployment's name to delete data for
   */
  deployment_name: string;

  /**
   * Query param
   */
  organization_id?: string | null;

  /**
   * Query param
   */
  project_id?: string | null;

  /**
   * Body param: The logical agent data collection to delete from
   */
  collection?: string;

  /**
   * Body param: Optional filters to select which items to delete
   */
  filter?: { [key: string]: AgentDataDeleteByQueryParams.Filter } | null;
}

export namespace AgentDataDeleteByQueryParams {
  /**
   * API request model for a filter comparison operation.
   */
  export interface Filter {
    eq?: number | string | (string & {}) | null;

    excludes?: Array<number | string | (string & {}) | null>;

    gt?: number | string | (string & {}) | null;

    gte?: number | string | (string & {}) | null;

    includes?: Array<number | string | (string & {}) | null>;

    lt?: number | string | (string & {}) | null;

    lte?: number | string | (string & {}) | null;

    ne?: number | string | (string & {}) | null;
  }
}

export interface AgentDataGetParams {
  organization_id?: string | null;

  project_id?: string | null;
}

export interface AgentDataSearchParams extends PaginatedCursorPostParams {
  /**
   * Body param: The agent deployment's name to search within
   */
  deployment_name: string;

  /**
   * Query param
   */
  organization_id?: string | null;

  /**
   * Query param
   */
  project_id?: string | null;

  /**
   * Body param: The logical agent data collection to search within
   */
  collection?: string;

  /**
   * Body param: A filter object or expression that filters resources listed in the
   * response.
   */
  filter?: { [key: string]: AgentDataSearchParams.Filter } | null;

  /**
   * Body param: Whether to include the total number of items in the response
   */
  include_total?: boolean;

  /**
   * Body param: The offset to start from. If not provided, the first page is
   * returned
   */
  offset?: number | null;

  /**
   * Body param: A comma-separated list of fields to order by, sorted in ascending
   * order. Use 'field_name desc' to specify descending order.
   */
  order_by?: string | null;
}

export namespace AgentDataSearchParams {
  /**
   * API request model for a filter comparison operation.
   */
  export interface Filter {
    eq?: number | string | (string & {}) | null;

    excludes?: Array<number | string | (string & {}) | null>;

    gt?: number | string | (string & {}) | null;

    gte?: number | string | (string & {}) | null;

    includes?: Array<number | string | (string & {}) | null>;

    lt?: number | string | (string & {}) | null;

    lte?: number | string | (string & {}) | null;

    ne?: number | string | (string & {}) | null;
  }
}

export declare namespace AgentData {
  export {
    type AgentData as AgentData,
    type AgentDataDeleteResponse as AgentDataDeleteResponse,
    type AgentDataAggregateResponse as AgentDataAggregateResponse,
    type AgentDataDeleteByQueryResponse as AgentDataDeleteByQueryResponse,
    type AgentDataAggregateResponsesPaginatedCursorPost as AgentDataAggregateResponsesPaginatedCursorPost,
    type AgentDataPaginatedCursorPost as AgentDataPaginatedCursorPost,
    type AgentDataCreateParams as AgentDataCreateParams,
    type AgentDataUpdateParams as AgentDataUpdateParams,
    type AgentDataDeleteParams as AgentDataDeleteParams,
    type AgentDataAggregateParams as AgentDataAggregateParams,
    type AgentDataDeleteByQueryParams as AgentDataDeleteByQueryParams,
    type AgentDataGetParams as AgentDataGetParams,
    type AgentDataSearchParams as AgentDataSearchParams
  };
}

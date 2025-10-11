// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class AgentData extends APIResource {
  /**
   * Get agent data by ID.
   */
  retrieve(
    itemID: string,
    query: AgentDataRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AgentData> {
    return this._client.get(path`/api/v1/beta/agent-data/${itemID}`, { query, ...options });
  }

  /**
   * Update agent data by ID (overwrites).
   */
  update(itemID: string, params: AgentDataUpdateParams, options?: RequestOptions): APIPromise<AgentData> {
    const { organization_id, project_id, ...body } = params;
    return this._client.put(path`/api/v1/beta/agent-data/${itemID}`, {
      query: { organization_id, project_id },
      body,
      ...options,
    });
  }

  /**
   * Bulk delete agent data by query (deployment_name, collection, optional filters).
   */
  delete(params: AgentDataDeleteParams, options?: RequestOptions): APIPromise<AgentDataDeleteResponse> {
    const { organization_id, project_id, ...body } = params;
    return this._client.post('/api/v1/beta/agent-data/:delete', {
      query: { organization_id, project_id },
      body,
      ...options,
    });
  }

  /**
   * Create new agent data.
   */
  agentData(params: AgentDataAgentDataParams, options?: RequestOptions): APIPromise<AgentData> {
    const { organization_id, project_id, ...body } = params;
    return this._client.post('/api/v1/beta/agent-data', {
      query: { organization_id, project_id },
      body,
      ...options,
    });
  }

  /**
   * Aggregate agent data with grouping and optional counting/first item retrieval.
   */
  aggregate(
    params: AgentDataAggregateParams,
    options?: RequestOptions,
  ): APIPromise<AgentDataAggregateResponse> {
    const { organization_id, project_id, ...body } = params;
    return this._client.post('/api/v1/beta/agent-data/:aggregate', {
      query: { organization_id, project_id },
      body,
      ...options,
    });
  }

  /**
   * Search agent data with filtering, sorting, and pagination.
   */
  search(params: AgentDataSearchParams, options?: RequestOptions): APIPromise<AgentDataSearchResponse> {
    const { organization_id, project_id, ...body } = params;
    return this._client.post('/api/v1/beta/agent-data/:search', {
      query: { organization_id, project_id },
      body,
      ...options,
    });
  }
}

/**
 * API Result for a single agent data item
 */
export interface AgentData {
  data: { [key: string]: unknown };

  deployment_name: string;

  id?: string | null;

  collection?: string;

  created_at?: string | null;

  updated_at?: string | null;
}

/**
 * API response for bulk delete operation
 */
export interface AgentDataDeleteResponse {
  deleted_count: number;
}

export interface AgentDataAggregateResponse {
  /**
   * The list of items.
   */
  items: Array<AgentDataAggregateResponse.Item>;

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

export namespace AgentDataAggregateResponse {
  /**
   * API Result for a single group in the aggregate response
   */
  export interface Item {
    group_key: { [key: string]: unknown };

    count?: number | null;

    first_item?: { [key: string]: unknown } | null;
  }
}

export interface AgentDataSearchResponse {
  /**
   * The list of items.
   */
  items: Array<AgentData>;

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

export interface AgentDataRetrieveParams {
  organization_id?: string | null;

  project_id?: string | null;
}

export interface AgentDataUpdateParams {
  /**
   * Body param:
   */
  data: { [key: string]: unknown };

  /**
   * Query param:
   */
  organization_id?: string | null;

  /**
   * Query param:
   */
  project_id?: string | null;
}

export interface AgentDataDeleteParams {
  /**
   * Body param: The agent deployment's name to delete data for
   */
  deployment_name: string;

  /**
   * Query param:
   */
  organization_id?: string | null;

  /**
   * Query param:
   */
  project_id?: string | null;

  /**
   * Body param: The logical agent data collection to delete from
   */
  collection?: string;

  /**
   * Body param: Optional filters to select which items to delete
   */
  filter?: { [key: string]: AgentDataDeleteParams.Filter } | null;
}

export namespace AgentDataDeleteParams {
  /**
   * API request model for a filter comparison operation.
   */
  export interface Filter {
    eq?: number | string | (string & {}) | null;

    gt?: number | string | (string & {}) | null;

    gte?: number | string | (string & {}) | null;

    includes?: Array<number | string | (string & {}) | null>;

    lt?: number | string | (string & {}) | null;

    lte?: number | string | (string & {}) | null;
  }
}

export interface AgentDataAgentDataParams {
  /**
   * Body param:
   */
  data: { [key: string]: unknown };

  /**
   * Body param:
   */
  deployment_name: string;

  /**
   * Query param:
   */
  organization_id?: string | null;

  /**
   * Query param:
   */
  project_id?: string | null;

  /**
   * Body param:
   */
  collection?: string;
}

export interface AgentDataAggregateParams {
  /**
   * Body param: The agent deployment's name to aggregate data for
   */
  deployment_name: string;

  /**
   * Query param:
   */
  organization_id?: string | null;

  /**
   * Query param:
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

export namespace AgentDataAggregateParams {
  /**
   * API request model for a filter comparison operation.
   */
  export interface Filter {
    eq?: number | string | (string & {}) | null;

    gt?: number | string | (string & {}) | null;

    gte?: number | string | (string & {}) | null;

    includes?: Array<number | string | (string & {}) | null>;

    lt?: number | string | (string & {}) | null;

    lte?: number | string | (string & {}) | null;
  }
}

export interface AgentDataSearchParams {
  /**
   * Body param: The agent deployment's name to search within
   */
  deployment_name: string;

  /**
   * Query param:
   */
  organization_id?: string | null;

  /**
   * Query param:
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

export namespace AgentDataSearchParams {
  /**
   * API request model for a filter comparison operation.
   */
  export interface Filter {
    eq?: number | string | (string & {}) | null;

    gt?: number | string | (string & {}) | null;

    gte?: number | string | (string & {}) | null;

    includes?: Array<number | string | (string & {}) | null>;

    lt?: number | string | (string & {}) | null;

    lte?: number | string | (string & {}) | null;
  }
}

export declare namespace AgentData {
  export {
    type AgentData as AgentData,
    type AgentDataDeleteResponse as AgentDataDeleteResponse,
    type AgentDataAggregateResponse as AgentDataAggregateResponse,
    type AgentDataSearchResponse as AgentDataSearchResponse,
    type AgentDataRetrieveParams as AgentDataRetrieveParams,
    type AgentDataUpdateParams as AgentDataUpdateParams,
    type AgentDataDeleteParams as AgentDataDeleteParams,
    type AgentDataAgentDataParams as AgentDataAgentDataParams,
    type AgentDataAggregateParams as AgentDataAggregateParams,
    type AgentDataSearchParams as AgentDataSearchParams,
  };
}

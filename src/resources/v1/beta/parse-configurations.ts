// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as PipelinesAPI from '../pipelines/pipelines';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class ParseConfigurations extends APIResource {
  /**
   * Get a parse configuration by ID.
   *
   * Args: config_id: The ID of the parse configuration project: Validated project
   * from dependency user: Current user db: Database session
   *
   * Returns: The parse configuration
   */
  retrieve(
    configID: string,
    query: ParseConfigurationRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ParseConfiguration> {
    return this._client.get(path`/api/v1/beta/parse-configurations/${configID}`, { query, ...options });
  }

  /**
   * Update a parse configuration.
   *
   * Args: config_id: The ID of the parse configuration to update config_update:
   * Update data project: Validated project from dependency user: Current user db:
   * Database session
   *
   * Returns: The updated parse configuration
   */
  update(
    configID: string,
    params: ParseConfigurationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ParseConfiguration> {
    const { organization_id, project_id, ...body } = params;
    return this._client.put(path`/api/v1/beta/parse-configurations/${configID}`, {
      query: { organization_id, project_id },
      body,
      ...options,
    });
  }

  /**
   * Delete a parse configuration.
   *
   * Args: config_id: The ID of the parse configuration to delete project: Validated
   * project from dependency user: Current user db: Database session
   */
  delete(
    configID: string,
    params: ParseConfigurationDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { organization_id, project_id } = params ?? {};
    return this._client.delete(path`/api/v1/beta/parse-configurations/${configID}`, {
      query: { organization_id, project_id },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Create a new parse configuration.
   *
   * Args: config_create: Parse configuration creation data project: Validated
   * project from dependency user: Current user db: Database session
   *
   * Returns: The created parse configuration
   */
  parseConfigurations(
    params: ParseConfigurationParseConfigurationsParams,
    options?: RequestOptions,
  ): APIPromise<ParseConfiguration> {
    const { organization_id, project_id, ...body } = params;
    return this._client.post('/api/v1/beta/parse-configurations', {
      query: { organization_id, project_id },
      body,
      ...options,
    });
  }

  /**
   * Query parse configurations with filtering and pagination.
   *
   * Args: query_request: Query request with filters and pagination project:
   * Validated project from dependency user: Current user db: Database session
   *
   * Returns: Paginated response with parse configurations
   */
  query(
    params: ParseConfigurationQueryParams,
    options?: RequestOptions,
  ): APIPromise<ParseConfigurationQueryResponse> {
    const { organization_id, project_id, ...body } = params;
    return this._client.post('/api/v1/beta/parse-configurations/query', {
      query: { organization_id, project_id },
      body,
      ...options,
    });
  }

  /**
   * Get the latest parse configuration for the current project.
   *
   * Args: project: Validated project from dependency user: Current user db: Database
   * session creator: Optional creator filter
   *
   * Returns: The latest parse configuration or None if not found
   */
  retrieveLatest(
    query: ParseConfigurationRetrieveLatestParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ParseConfiguration | null> {
    return this._client.get('/api/v1/beta/parse-configurations/latest', { query, ...options });
  }

  /**
   * List parse configurations for the current project.
   *
   * Args: project: Validated project from dependency user: Current user db: Database
   * session page_size: Number of items per page page_token: Token for pagination
   * name: Filter by configuration name creator: Filter by creator version: Filter by
   * version
   *
   * Returns: Paginated response with parse configurations
   */
  retrieveParseConfigurations(
    query: ParseConfigurationRetrieveParseConfigurationsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ParseConfigurationQueryResponse> {
    return this._client.get('/api/v1/beta/parse-configurations', { query, ...options });
  }

  /**
   * Create or update a parse configuration by name.
   *
   * Args: config_create: Parse configuration creation data project: Validated
   * project from dependency user: Current user db: Database session
   *
   * Returns: The created or updated parse configuration
   */
  updateParseConfigurations(
    params: ParseConfigurationUpdateParseConfigurationsParams,
    options?: RequestOptions,
  ): APIPromise<ParseConfiguration> {
    const { organization_id, project_id, ...body } = params;
    return this._client.put('/api/v1/beta/parse-configurations', {
      query: { organization_id, project_id },
      body,
      ...options,
    });
  }
}

/**
 * Parse configuration schema.
 */
export interface ParseConfiguration {
  /**
   * Unique identifier for the parse configuration
   */
  id: string;

  /**
   * Creation timestamp
   */
  created_at: string;

  /**
   * Name of the parse configuration
   */
  name: string;

  /**
   * LlamaParseParameters configuration
   */
  parameters: PipelinesAPI.LlamaParseParameters;

  /**
   * ID of the source
   */
  source_id: string;

  /**
   * Type of the source (e.g., 'project')
   */
  source_type: string;

  /**
   * Last update timestamp
   */
  updated_at: string;

  /**
   * Version of the configuration
   */
  version: string;

  /**
   * Creator of the configuration
   */
  creator?: string | null;
}

/**
 * Schema for creating a new parse configuration (API boundary).
 */
export interface ParseConfigurationCreate {
  /**
   * Name of the parse configuration
   */
  name: string;

  /**
   * LlamaParseParameters configuration
   */
  parameters: PipelinesAPI.LlamaParseParameters;

  /**
   * Version of the configuration
   */
  version: string;

  /**
   * Creator of the configuration
   */
  creator?: string | null;

  /**
   * ID of the source
   */
  source_id?: string | null;

  /**
   * Type of the source (e.g., 'project')
   */
  source_type?: string | null;
}

/**
 * Response schema for paginated parse configuration queries.
 */
export interface ParseConfigurationQueryResponse {
  /**
   * The list of items.
   */
  items: Array<ParseConfiguration>;

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

export interface ParseConfigurationRetrieveParams {
  organization_id?: string | null;

  project_id?: string | null;
}

export interface ParseConfigurationUpdateParams {
  /**
   * Query param:
   */
  organization_id?: string | null;

  /**
   * Query param:
   */
  project_id?: string | null;

  /**
   * Body param: Settings that can be configured for how to use LlamaParse to parse
   * files within a LlamaCloud pipeline.
   */
  parameters?: PipelinesAPI.LlamaParseParameters | null;
}

export interface ParseConfigurationDeleteParams {
  organization_id?: string | null;

  project_id?: string | null;
}

export interface ParseConfigurationParseConfigurationsParams {
  /**
   * Body param: Name of the parse configuration
   */
  name: string;

  /**
   * Body param: LlamaParseParameters configuration
   */
  parameters: PipelinesAPI.LlamaParseParameters;

  /**
   * Body param: Version of the configuration
   */
  version: string;

  /**
   * Query param:
   */
  organization_id?: string | null;

  /**
   * Query param:
   */
  project_id?: string | null;

  /**
   * Body param: Creator of the configuration
   */
  creator?: string | null;

  /**
   * Body param: ID of the source
   */
  source_id?: string | null;

  /**
   * Body param: Type of the source (e.g., 'project')
   */
  source_type?: string | null;
}

export interface ParseConfigurationQueryParams {
  /**
   * Query param:
   */
  organization_id?: string | null;

  /**
   * Query param:
   */
  project_id?: string | null;

  /**
   * Body param: Filter parameters for parse configuration queries.
   */
  filter?: ParseConfigurationQueryParams.Filter | null;

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

export namespace ParseConfigurationQueryParams {
  /**
   * Filter parameters for parse configuration queries.
   */
  export interface Filter {
    /**
     * Filter by creator
     */
    creator?: string | null;

    /**
     * Filter by name
     */
    name?: string | null;

    /**
     * Filter by specific parse configuration IDs
     */
    parse_config_ids?: Array<string> | null;

    /**
     * Filter by source ID
     */
    source_id?: string | null;

    /**
     * Filter by source type
     */
    source_type?: string | null;

    /**
     * Filter by version
     */
    version?: string | null;
  }
}

export interface ParseConfigurationRetrieveLatestParams {
  creator?: string | null;

  organization_id?: string | null;

  project_id?: string | null;
}

export interface ParseConfigurationRetrieveParseConfigurationsParams {
  creator?: string | null;

  name?: string | null;

  organization_id?: string | null;

  page_size?: number | null;

  page_token?: string | null;

  project_id?: string | null;

  version?: string | null;
}

export interface ParseConfigurationUpdateParseConfigurationsParams {
  /**
   * Body param: Name of the parse configuration
   */
  name: string;

  /**
   * Body param: LlamaParseParameters configuration
   */
  parameters: PipelinesAPI.LlamaParseParameters;

  /**
   * Body param: Version of the configuration
   */
  version: string;

  /**
   * Query param:
   */
  organization_id?: string | null;

  /**
   * Query param:
   */
  project_id?: string | null;

  /**
   * Body param: Creator of the configuration
   */
  creator?: string | null;

  /**
   * Body param: ID of the source
   */
  source_id?: string | null;

  /**
   * Body param: Type of the source (e.g., 'project')
   */
  source_type?: string | null;
}

export declare namespace ParseConfigurations {
  export {
    type ParseConfiguration as ParseConfiguration,
    type ParseConfigurationCreate as ParseConfigurationCreate,
    type ParseConfigurationQueryResponse as ParseConfigurationQueryResponse,
    type ParseConfigurationRetrieveParams as ParseConfigurationRetrieveParams,
    type ParseConfigurationUpdateParams as ParseConfigurationUpdateParams,
    type ParseConfigurationDeleteParams as ParseConfigurationDeleteParams,
    type ParseConfigurationParseConfigurationsParams as ParseConfigurationParseConfigurationsParams,
    type ParseConfigurationQueryParams as ParseConfigurationQueryParams,
    type ParseConfigurationRetrieveLatestParams as ParseConfigurationRetrieveLatestParams,
    type ParseConfigurationRetrieveParseConfigurationsParams as ParseConfigurationRetrieveParseConfigurationsParams,
    type ParseConfigurationUpdateParseConfigurationsParams as ParseConfigurationUpdateParseConfigurationsParams,
  };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as APIKeysAPI from '../api-keys';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class APIKeys extends APIResource {
  /**
   * Get an API key by ID.
   *
   * Args: api_key_id: The ID of the API key user: Current user db: Database session
   *
   * Returns: The API key
   */
  retrieve(apiKeyID: string, options?: RequestOptions): APIPromise<APIKeysAPI.APIKey> {
    return this._client.get(path`/api/v1/beta/api-keys/${apiKeyID}`, options);
  }

  /**
   * Delete an API key.
   *
   * If the API key belongs to a project, validates user has admin permissions for
   * that project. If the API key has no project, validates it belongs to the current
   * user.
   *
   * Args: api_key_id: The ID of the API key to delete user: Current user db:
   * Database session
   */
  delete(apiKeyID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/api/v1/beta/api-keys/${apiKeyID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Create a new API key.
   *
   * If project_id is specified, validates user has admin permissions for that
   * project.
   *
   * Args: api_key_create: API key creation data user: Current user db: Database
   * session
   *
   * Returns: The created API key with the secret key visible in redacted_api_key
   * field
   */
  apiKeys(body: APIKeyAPIKeysParams, options?: RequestOptions): APIPromise<APIKeysAPI.APIKey> {
    return this._client.post('/api/v1/beta/api-keys', { body, ...options });
  }

  /**
   * List API keys.
   *
   * If project_id is provided, validates user has access to that project. If
   * project_id is not provided, scopes results to the current user.
   *
   * Args: user: Current user db: Database session page_size: Number of items per
   * page page_token: Token for pagination name: Filter by API key name project_id:
   * Filter by project ID key_type: Filter by key type
   *
   * Returns: Paginated response with API keys
   */
  retrieveAPIKeys(
    query: APIKeyRetrieveAPIKeysParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<APIKeyRetrieveAPIKeysResponse> {
    return this._client.get('/api/v1/beta/api-keys', { query, ...options });
  }
}

/**
 * Response schema for paginated API key queries.
 */
export interface APIKeyRetrieveAPIKeysResponse {
  /**
   * The list of items.
   */
  items: Array<APIKeysAPI.APIKey>;

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

export interface APIKeyAPIKeysParams {
  key_type?: APIKeysAPI.APIKeyType;

  name?: string | null;

  /**
   * The project ID to associate with the API key.
   */
  project_id?: string | null;
}

export interface APIKeyRetrieveAPIKeysParams {
  key_type?: APIKeysAPI.APIKeyType | null;

  name?: string | null;

  page_size?: number | null;

  page_token?: string | null;

  project_id?: string | null;
}

export declare namespace APIKeys {
  export {
    type APIKeyRetrieveAPIKeysResponse as APIKeyRetrieveAPIKeysResponse,
    type APIKeyAPIKeysParams as APIKeyAPIKeysParams,
    type APIKeyRetrieveAPIKeysParams as APIKeyRetrieveAPIKeysParams,
  };
}

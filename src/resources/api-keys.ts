// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class APIKeys extends APIResource {
  /**
   * Generate a new API Key.
   */
  create(body: APIKeyCreateParams, options?: RequestOptions): APIPromise<APIKey> {
    return this._client.post('/api/v1/api-keys', { body, ...options });
  }

  /**
   * List API Keys for a user, filtered by type.
   */
  list(
    query: APIKeyListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<APIKeyListResponse> {
    return this._client.get('/api/v1/api-keys', { query, ...options });
  }

  /**
   * Delete an API Key by ID.
   */
  delete(apiKeyID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/api/v1/api-keys/${apiKeyID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * Schema for an API Key.
 */
export interface APIKey {
  /**
   * Unique identifier
   */
  id: string;

  redacted_api_key: string;

  user_id: string;

  /**
   * Creation datetime
   */
  created_at?: string | null;

  key_type?: APIKeyType;

  name?: string | null;

  project_id?: string | null;

  /**
   * Update datetime
   */
  updated_at?: string | null;
}

/**
 * Schema for creating an API key.
 */
export interface APIKeyCreate {
  key_type?: APIKeyType;

  name?: string | null;

  /**
   * The project ID to associate with the API key.
   */
  project_id?: string | null;
}

export type APIKeyType = 'user' | 'agent';

export type APIKeyListResponse = Array<APIKey>;

export interface APIKeyCreateParams {
  key_type?: APIKeyType;

  name?: string | null;

  /**
   * The project ID to associate with the API key.
   */
  project_id?: string | null;
}

export interface APIKeyListParams {
  key_type?: APIKeyType;

  project_id?: string | null;
}

export declare namespace APIKeys {
  export {
    type APIKey as APIKey,
    type APIKeyCreate as APIKeyCreate,
    type APIKeyType as APIKeyType,
    type APIKeyListResponse as APIKeyListResponse,
    type APIKeyCreateParams as APIKeyCreateParams,
    type APIKeyListParams as APIKeyListParams,
  };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class APIKeys extends APIResource {}

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

export declare namespace APIKeys {
  export { type APIKey as APIKey, type APIKeyCreate as APIKeyCreate, type APIKeyType as APIKeyType };
}

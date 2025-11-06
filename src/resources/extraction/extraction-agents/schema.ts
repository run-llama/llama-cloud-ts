// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Schema extends APIResource {
  /**
   * Generates an extraction agent's schema definition from a file and/or natural
   * language prompt.
   */
  generate(params: SchemaGenerateParams, options?: RequestOptions): APIPromise<SchemaGenerateResponse> {
    const { organization_id, project_id, ...body } = params;
    return this._client.post('/api/v1/extraction/extraction-agents/schema/generate', {
      query: { organization_id, project_id },
      body,
      ...options,
    });
  }

  /**
   * Validates an extraction agent's schema definition. Returns the normalized and
   * validated schema if valid, otherwise raises an HTTP 400.
   */
  validation(body: SchemaValidationParams, options?: RequestOptions): APIPromise<SchemaValidationResponse> {
    return this._client.post('/api/v1/extraction/extraction-agents/schema/validation', { body, ...options });
  }
}

/**
 * Response schema for schema generation.
 */
export interface SchemaGenerateResponse {
  /**
   * The generated JSON schema
   */
  data_schema: {
    [key: string]: { [key: string]: unknown } | Array<unknown> | string | number | boolean | null;
  };
}

export interface SchemaValidationResponse {
  data_schema: {
    [key: string]: { [key: string]: unknown } | Array<unknown> | string | number | boolean | null;
  };
}

export interface SchemaGenerateParams {
  /**
   * Query param:
   */
  organization_id?: string | null;

  /**
   * Query param:
   */
  project_id?: string | null;

  /**
   * Body param: Optional file ID to analyze for schema generation
   */
  file_id?: string | null;

  /**
   * Body param: Natural language description of the data structure to extract
   */
  prompt?: string | null;
}

export interface SchemaValidationParams {
  data_schema:
    | { [key: string]: { [key: string]: unknown } | Array<unknown> | string | number | boolean | null }
    | string;
}

export declare namespace Schema {
  export {
    type SchemaGenerateResponse as SchemaGenerateResponse,
    type SchemaValidationResponse as SchemaValidationResponse,
    type SchemaGenerateParams as SchemaGenerateParams,
    type SchemaValidationParams as SchemaValidationParams,
  };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ValidateIntegrationsAPI from './validate-integrations';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class EmbeddingModelConfigs extends APIResource {
  /**
   * Create a new embedding model configuration within a specified project.
   */
  create(
    params: EmbeddingModelConfigCreateParams,
    options?: RequestOptions,
  ): APIPromise<EmbeddingModelConfig> {
    const { organization_id, project_id, ...body } = params;
    return this._client.post('/api/v1/embedding-model-configs', {
      query: { organization_id, project_id },
      body,
      ...options,
    });
  }

  /**
   * Update an embedding model config by ID.
   */
  update(
    embeddingModelConfigID: string,
    params: EmbeddingModelConfigUpdateParams,
    options?: RequestOptions,
  ): APIPromise<EmbeddingModelConfig> {
    const { organization_id, project_id, ...body } = params;
    return this._client.put(path`/api/v1/embedding-model-configs/${embeddingModelConfigID}`, {
      query: { organization_id, project_id },
      body,
      ...options,
    });
  }

  /**
   * List Embedding Model Configs
   */
  list(
    query: EmbeddingModelConfigListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EmbeddingModelConfigListResponse> {
    return this._client.get('/api/v1/embedding-model-configs', { query, ...options });
  }

  /**
   * Delete an embedding model config by ID.
   */
  delete(
    embeddingModelConfigID: string,
    params: EmbeddingModelConfigDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { organization_id, project_id } = params ?? {};
    return this._client.delete(path`/api/v1/embedding-model-configs/${embeddingModelConfigID}`, {
      query: { organization_id, project_id },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Upserts an embedding model config. Updates if an embedding model config with the
   * same name and project_id already exists. Otherwise, creates a new embedding
   * model config.
   */
  upsert(
    params: EmbeddingModelConfigUpsertParams,
    options?: RequestOptions,
  ): APIPromise<EmbeddingModelConfig> {
    const { organization_id, project_id, ...body } = params;
    return this._client.put('/api/v1/embedding-model-configs', {
      query: { organization_id, project_id },
      body,
      ...options,
    });
  }
}

/**
 * Schema for an embedding model config.
 */
export interface EmbeddingModelConfig {
  /**
   * Unique identifier
   */
  id: string;

  /**
   * The embedding configuration for the embedding model config.
   */
  embedding_config:
    | ValidateIntegrationsAPI.AzureOpenAIEmbeddingConfig
    | ValidateIntegrationsAPI.CohereEmbeddingConfig
    | ValidateIntegrationsAPI.GeminiEmbeddingConfig
    | ValidateIntegrationsAPI.HuggingFaceInferenceAPIEmbeddingConfig
    | ValidateIntegrationsAPI.OpenAIEmbeddingConfig
    | ValidateIntegrationsAPI.VertexAIEmbeddingConfig
    | ValidateIntegrationsAPI.BedrockEmbeddingConfig;

  /**
   * The name of the embedding model config.
   */
  name: string;

  project_id: string;

  /**
   * Creation datetime
   */
  created_at?: string | null;

  /**
   * Update datetime
   */
  updated_at?: string | null;
}

export interface EmbeddingModelConfigUpdate {
  /**
   * The embedding configuration for the embedding model config.
   */
  embedding_config?:
    | ValidateIntegrationsAPI.AzureOpenAIEmbeddingConfig
    | ValidateIntegrationsAPI.CohereEmbeddingConfig
    | ValidateIntegrationsAPI.GeminiEmbeddingConfig
    | ValidateIntegrationsAPI.HuggingFaceInferenceAPIEmbeddingConfig
    | ValidateIntegrationsAPI.OpenAIEmbeddingConfig
    | ValidateIntegrationsAPI.VertexAIEmbeddingConfig
    | ValidateIntegrationsAPI.BedrockEmbeddingConfig
    | null;

  /**
   * The name of the embedding model config.
   */
  name?: string | null;
}

export type EmbeddingModelConfigListResponse = Array<EmbeddingModelConfig>;

export interface EmbeddingModelConfigCreateParams {
  /**
   * Body param: The embedding configuration for the embedding model config.
   */
  embedding_config:
    | ValidateIntegrationsAPI.AzureOpenAIEmbeddingConfig
    | ValidateIntegrationsAPI.CohereEmbeddingConfig
    | ValidateIntegrationsAPI.GeminiEmbeddingConfig
    | ValidateIntegrationsAPI.HuggingFaceInferenceAPIEmbeddingConfig
    | ValidateIntegrationsAPI.OpenAIEmbeddingConfig
    | ValidateIntegrationsAPI.VertexAIEmbeddingConfig
    | ValidateIntegrationsAPI.BedrockEmbeddingConfig;

  /**
   * Body param: The name of the embedding model config.
   */
  name: string;

  /**
   * Query param:
   */
  organization_id?: string | null;

  /**
   * Query param:
   */
  project_id?: string | null;
}

export interface EmbeddingModelConfigUpdateParams {
  /**
   * Query param:
   */
  organization_id?: string | null;

  /**
   * Query param:
   */
  project_id?: string | null;

  /**
   * Body param: The embedding configuration for the embedding model config.
   */
  embedding_config?:
    | ValidateIntegrationsAPI.AzureOpenAIEmbeddingConfig
    | ValidateIntegrationsAPI.CohereEmbeddingConfig
    | ValidateIntegrationsAPI.GeminiEmbeddingConfig
    | ValidateIntegrationsAPI.HuggingFaceInferenceAPIEmbeddingConfig
    | ValidateIntegrationsAPI.OpenAIEmbeddingConfig
    | ValidateIntegrationsAPI.VertexAIEmbeddingConfig
    | ValidateIntegrationsAPI.BedrockEmbeddingConfig
    | null;

  /**
   * Body param: The name of the embedding model config.
   */
  name?: string | null;
}

export interface EmbeddingModelConfigListParams {
  organization_id?: string | null;

  project_id?: string | null;
}

export interface EmbeddingModelConfigDeleteParams {
  organization_id?: string | null;

  project_id?: string | null;
}

export interface EmbeddingModelConfigUpsertParams {
  /**
   * Query param:
   */
  organization_id?: string | null;

  /**
   * Query param:
   */
  project_id?: string | null;

  /**
   * Body param: The embedding configuration for the embedding model config.
   */
  embedding_config?:
    | ValidateIntegrationsAPI.AzureOpenAIEmbeddingConfig
    | ValidateIntegrationsAPI.CohereEmbeddingConfig
    | ValidateIntegrationsAPI.GeminiEmbeddingConfig
    | ValidateIntegrationsAPI.HuggingFaceInferenceAPIEmbeddingConfig
    | ValidateIntegrationsAPI.OpenAIEmbeddingConfig
    | ValidateIntegrationsAPI.VertexAIEmbeddingConfig
    | ValidateIntegrationsAPI.BedrockEmbeddingConfig
    | null;

  /**
   * Body param: The name of the embedding model config.
   */
  name?: string | null;
}

export declare namespace EmbeddingModelConfigs {
  export {
    type EmbeddingModelConfig as EmbeddingModelConfig,
    type EmbeddingModelConfigUpdate as EmbeddingModelConfigUpdate,
    type EmbeddingModelConfigListResponse as EmbeddingModelConfigListResponse,
    type EmbeddingModelConfigCreateParams as EmbeddingModelConfigCreateParams,
    type EmbeddingModelConfigUpdateParams as EmbeddingModelConfigUpdateParams,
    type EmbeddingModelConfigListParams as EmbeddingModelConfigListParams,
    type EmbeddingModelConfigDeleteParams as EmbeddingModelConfigDeleteParams,
    type EmbeddingModelConfigUpsertParams as EmbeddingModelConfigUpsertParams,
  };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
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
    | EmbeddingModelConfig.AzureOpenAIEmbeddingConfig
    | EmbeddingModelConfig.CohereEmbeddingConfig
    | EmbeddingModelConfig.GeminiEmbeddingConfig
    | EmbeddingModelConfig.HuggingFaceInferenceAPIEmbeddingConfig
    | EmbeddingModelConfig.OpenAIEmbeddingConfig
    | EmbeddingModelConfig.VertexAIEmbeddingConfig
    | EmbeddingModelConfig.BedrockEmbeddingConfig;

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

export namespace EmbeddingModelConfig {
  export interface AzureOpenAIEmbeddingConfig {
    /**
     * Configuration for the Azure OpenAI embedding model.
     */
    component?: AzureOpenAIEmbeddingConfig.Component;

    /**
     * Type of the embedding model.
     */
    type?: 'AZURE_EMBEDDING';
  }

  export namespace AzureOpenAIEmbeddingConfig {
    /**
     * Configuration for the Azure OpenAI embedding model.
     */
    export interface Component {
      /**
       * Additional kwargs for the OpenAI API.
       */
      additional_kwargs?: { [key: string]: unknown };

      /**
       * The base URL for Azure deployment.
       */
      api_base?: string;

      /**
       * The OpenAI API key.
       */
      api_key?: string | null;

      /**
       * The version for Azure OpenAI API.
       */
      api_version?: string;

      /**
       * The Azure deployment to use.
       */
      azure_deployment?: string | null;

      /**
       * The Azure endpoint to use.
       */
      azure_endpoint?: string | null;

      class_name?: string;

      /**
       * The default headers for API requests.
       */
      default_headers?: { [key: string]: string } | null;

      /**
       * The number of dimensions on the output embedding vectors. Works only with v3
       * embedding models.
       */
      dimensions?: number | null;

      /**
       * The batch size for embedding calls.
       */
      embed_batch_size?: number;

      /**
       * Maximum number of retries.
       */
      max_retries?: number;

      /**
       * The name of the OpenAI embedding model.
       */
      model_name?: string;

      /**
       * The number of workers to use for async embedding calls.
       */
      num_workers?: number | null;

      /**
       * Reuse the OpenAI client between requests. When doing anything with large volumes
       * of async API calls, setting this to false can improve stability.
       */
      reuse_client?: boolean;

      /**
       * Timeout for each request.
       */
      timeout?: number;
    }
  }

  export interface CohereEmbeddingConfig {
    /**
     * Configuration for the Cohere embedding model.
     */
    component?: CohereEmbeddingConfig.Component;

    /**
     * Type of the embedding model.
     */
    type?: 'COHERE_EMBEDDING';
  }

  export namespace CohereEmbeddingConfig {
    /**
     * Configuration for the Cohere embedding model.
     */
    export interface Component {
      /**
       * The Cohere API key.
       */
      api_key: string | null;

      class_name?: string;

      /**
       * The batch size for embedding calls.
       */
      embed_batch_size?: number;

      /**
       * Embedding type. If not provided float embedding_type is used when needed.
       */
      embedding_type?: string;

      /**
       * Model Input type. If not provided, search_document and search_query are used
       * when needed.
       */
      input_type?: string | null;

      /**
       * The modelId of the Cohere model to use.
       */
      model_name?: string;

      /**
       * The number of workers to use for async embedding calls.
       */
      num_workers?: number | null;

      /**
       * Truncation type - START/ END/ NONE
       */
      truncate?: string;
    }
  }

  export interface GeminiEmbeddingConfig {
    /**
     * Configuration for the Gemini embedding model.
     */
    component?: GeminiEmbeddingConfig.Component;

    /**
     * Type of the embedding model.
     */
    type?: 'GEMINI_EMBEDDING';
  }

  export namespace GeminiEmbeddingConfig {
    /**
     * Configuration for the Gemini embedding model.
     */
    export interface Component {
      /**
       * API base to access the model. Defaults to None.
       */
      api_base?: string | null;

      /**
       * API key to access the model. Defaults to None.
       */
      api_key?: string | null;

      class_name?: string;

      /**
       * The batch size for embedding calls.
       */
      embed_batch_size?: number;

      /**
       * The modelId of the Gemini model to use.
       */
      model_name?: string;

      /**
       * The number of workers to use for async embedding calls.
       */
      num_workers?: number | null;

      /**
       * The task for embedding model.
       */
      task_type?: string | null;

      /**
       * Title is only applicable for retrieval_document tasks, and is used to represent
       * a document title. For other tasks, title is invalid.
       */
      title?: string | null;

      /**
       * Transport to access the model. Defaults to None.
       */
      transport?: string | null;
    }
  }

  export interface HuggingFaceInferenceAPIEmbeddingConfig {
    /**
     * Configuration for the HuggingFace Inference API embedding model.
     */
    component?: HuggingFaceInferenceAPIEmbeddingConfig.Component;

    /**
     * Type of the embedding model.
     */
    type?: 'HUGGINGFACE_API_EMBEDDING';
  }

  export namespace HuggingFaceInferenceAPIEmbeddingConfig {
    /**
     * Configuration for the HuggingFace Inference API embedding model.
     */
    export interface Component {
      /**
       * Hugging Face token. Will default to the locally saved token. Pass token=False if
       * you don’t want to send your token to the server.
       */
      token?: string | boolean | null;

      class_name?: string;

      /**
       * Additional cookies to send to the server.
       */
      cookies?: { [key: string]: string } | null;

      /**
       * The batch size for embedding calls.
       */
      embed_batch_size?: number;

      /**
       * Additional headers to send to the server. By default only the authorization and
       * user-agent headers are sent. Values in this dictionary will override the default
       * values.
       */
      headers?: { [key: string]: string } | null;

      /**
       * Hugging Face model name. If None, the task will be used.
       */
      model_name?: string | null;

      /**
       * The number of workers to use for async embedding calls.
       */
      num_workers?: number | null;

      /**
       * Enum of possible pooling choices with pooling behaviors.
       */
      pooling?: 'cls' | 'mean' | 'last' | null;

      /**
       * Instruction to prepend during query embedding.
       */
      query_instruction?: string | null;

      /**
       * Optional task to pick Hugging Face's recommended model, used when model_name is
       * left as default of None.
       */
      task?: string | null;

      /**
       * Instruction to prepend during text embedding.
       */
      text_instruction?: string | null;

      /**
       * The maximum number of seconds to wait for a response from the server. Loading a
       * new model in Inference API can take up to several minutes. Defaults to None,
       * meaning it will loop until the server is available.
       */
      timeout?: number | null;
    }
  }

  export interface OpenAIEmbeddingConfig {
    /**
     * Configuration for the OpenAI embedding model.
     */
    component?: OpenAIEmbeddingConfig.Component;

    /**
     * Type of the embedding model.
     */
    type?: 'OPENAI_EMBEDDING';
  }

  export namespace OpenAIEmbeddingConfig {
    /**
     * Configuration for the OpenAI embedding model.
     */
    export interface Component {
      /**
       * Additional kwargs for the OpenAI API.
       */
      additional_kwargs?: { [key: string]: unknown };

      /**
       * The base URL for OpenAI API.
       */
      api_base?: string | null;

      /**
       * The OpenAI API key.
       */
      api_key?: string | null;

      /**
       * The version for OpenAI API.
       */
      api_version?: string | null;

      class_name?: string;

      /**
       * The default headers for API requests.
       */
      default_headers?: { [key: string]: string } | null;

      /**
       * The number of dimensions on the output embedding vectors. Works only with v3
       * embedding models.
       */
      dimensions?: number | null;

      /**
       * The batch size for embedding calls.
       */
      embed_batch_size?: number;

      /**
       * Maximum number of retries.
       */
      max_retries?: number;

      /**
       * The name of the OpenAI embedding model.
       */
      model_name?: string;

      /**
       * The number of workers to use for async embedding calls.
       */
      num_workers?: number | null;

      /**
       * Reuse the OpenAI client between requests. When doing anything with large volumes
       * of async API calls, setting this to false can improve stability.
       */
      reuse_client?: boolean;

      /**
       * Timeout for each request.
       */
      timeout?: number;
    }
  }

  export interface VertexAIEmbeddingConfig {
    /**
     * Configuration for the VertexAI embedding model.
     */
    component?: VertexAIEmbeddingConfig.Component;

    /**
     * Type of the embedding model.
     */
    type?: 'VERTEXAI_EMBEDDING';
  }

  export namespace VertexAIEmbeddingConfig {
    /**
     * Configuration for the VertexAI embedding model.
     */
    export interface Component {
      /**
       * The client email for the VertexAI credentials.
       */
      client_email: string | null;

      /**
       * The default location to use when making API calls.
       */
      location: string;

      /**
       * The private key for the VertexAI credentials.
       */
      private_key: string | null;

      /**
       * The private key ID for the VertexAI credentials.
       */
      private_key_id: string | null;

      /**
       * The default GCP project to use when making Vertex API calls.
       */
      project: string;

      /**
       * The token URI for the VertexAI credentials.
       */
      token_uri: string | null;

      /**
       * Additional kwargs for the Vertex.
       */
      additional_kwargs?: { [key: string]: unknown };

      class_name?: string;

      /**
       * The batch size for embedding calls.
       */
      embed_batch_size?: number;

      /**
       * The embedding mode to use.
       */
      embed_mode?: 'default' | 'classification' | 'clustering' | 'similarity' | 'retrieval';

      /**
       * The modelId of the VertexAI model to use.
       */
      model_name?: string;

      /**
       * The number of workers to use for async embedding calls.
       */
      num_workers?: number | null;
    }
  }

  export interface BedrockEmbeddingConfig {
    /**
     * Configuration for the Bedrock embedding model.
     */
    component?: BedrockEmbeddingConfig.Component;

    /**
     * Type of the embedding model.
     */
    type?: 'BEDROCK_EMBEDDING';
  }

  export namespace BedrockEmbeddingConfig {
    /**
     * Configuration for the Bedrock embedding model.
     */
    export interface Component {
      /**
       * Additional kwargs for the bedrock client.
       */
      additional_kwargs?: { [key: string]: unknown };

      /**
       * AWS Access Key ID to use
       */
      aws_access_key_id?: string | null;

      /**
       * AWS Secret Access Key to use
       */
      aws_secret_access_key?: string | null;

      /**
       * AWS Session Token to use
       */
      aws_session_token?: string | null;

      class_name?: string;

      /**
       * The batch size for embedding calls.
       */
      embed_batch_size?: number;

      /**
       * The maximum number of API retries.
       */
      max_retries?: number;

      /**
       * The modelId of the Bedrock model to use.
       */
      model_name?: string;

      /**
       * The number of workers to use for async embedding calls.
       */
      num_workers?: number | null;

      /**
       * The name of aws profile to use. If not given, then the default profile is used.
       */
      profile_name?: string | null;

      /**
       * AWS region name to use. Uses region configured in AWS CLI if not passed
       */
      region_name?: string | null;

      /**
       * The timeout for the Bedrock API request in seconds. It will be used for both
       * connect and read timeouts.
       */
      timeout?: number;
    }
  }
}

export interface EmbeddingModelConfigUpdate {
  /**
   * The embedding configuration for the embedding model config.
   */
  embedding_config?:
    | EmbeddingModelConfigUpdate.AzureOpenAIEmbeddingConfig
    | EmbeddingModelConfigUpdate.CohereEmbeddingConfig
    | EmbeddingModelConfigUpdate.GeminiEmbeddingConfig
    | EmbeddingModelConfigUpdate.HuggingFaceInferenceAPIEmbeddingConfig
    | EmbeddingModelConfigUpdate.OpenAIEmbeddingConfig
    | EmbeddingModelConfigUpdate.VertexAIEmbeddingConfig
    | EmbeddingModelConfigUpdate.BedrockEmbeddingConfig
    | null;

  /**
   * The name of the embedding model config.
   */
  name?: string | null;
}

export namespace EmbeddingModelConfigUpdate {
  export interface AzureOpenAIEmbeddingConfig {
    /**
     * Configuration for the Azure OpenAI embedding model.
     */
    component?: AzureOpenAIEmbeddingConfig.Component;

    /**
     * Type of the embedding model.
     */
    type?: 'AZURE_EMBEDDING';
  }

  export namespace AzureOpenAIEmbeddingConfig {
    /**
     * Configuration for the Azure OpenAI embedding model.
     */
    export interface Component {
      /**
       * Additional kwargs for the OpenAI API.
       */
      additional_kwargs?: { [key: string]: unknown };

      /**
       * The base URL for Azure deployment.
       */
      api_base?: string;

      /**
       * The OpenAI API key.
       */
      api_key?: string | null;

      /**
       * The version for Azure OpenAI API.
       */
      api_version?: string;

      /**
       * The Azure deployment to use.
       */
      azure_deployment?: string | null;

      /**
       * The Azure endpoint to use.
       */
      azure_endpoint?: string | null;

      class_name?: string;

      /**
       * The default headers for API requests.
       */
      default_headers?: { [key: string]: string } | null;

      /**
       * The number of dimensions on the output embedding vectors. Works only with v3
       * embedding models.
       */
      dimensions?: number | null;

      /**
       * The batch size for embedding calls.
       */
      embed_batch_size?: number;

      /**
       * Maximum number of retries.
       */
      max_retries?: number;

      /**
       * The name of the OpenAI embedding model.
       */
      model_name?: string;

      /**
       * The number of workers to use for async embedding calls.
       */
      num_workers?: number | null;

      /**
       * Reuse the OpenAI client between requests. When doing anything with large volumes
       * of async API calls, setting this to false can improve stability.
       */
      reuse_client?: boolean;

      /**
       * Timeout for each request.
       */
      timeout?: number;
    }
  }

  export interface CohereEmbeddingConfig {
    /**
     * Configuration for the Cohere embedding model.
     */
    component?: CohereEmbeddingConfig.Component;

    /**
     * Type of the embedding model.
     */
    type?: 'COHERE_EMBEDDING';
  }

  export namespace CohereEmbeddingConfig {
    /**
     * Configuration for the Cohere embedding model.
     */
    export interface Component {
      /**
       * The Cohere API key.
       */
      api_key: string | null;

      class_name?: string;

      /**
       * The batch size for embedding calls.
       */
      embed_batch_size?: number;

      /**
       * Embedding type. If not provided float embedding_type is used when needed.
       */
      embedding_type?: string;

      /**
       * Model Input type. If not provided, search_document and search_query are used
       * when needed.
       */
      input_type?: string | null;

      /**
       * The modelId of the Cohere model to use.
       */
      model_name?: string;

      /**
       * The number of workers to use for async embedding calls.
       */
      num_workers?: number | null;

      /**
       * Truncation type - START/ END/ NONE
       */
      truncate?: string;
    }
  }

  export interface GeminiEmbeddingConfig {
    /**
     * Configuration for the Gemini embedding model.
     */
    component?: GeminiEmbeddingConfig.Component;

    /**
     * Type of the embedding model.
     */
    type?: 'GEMINI_EMBEDDING';
  }

  export namespace GeminiEmbeddingConfig {
    /**
     * Configuration for the Gemini embedding model.
     */
    export interface Component {
      /**
       * API base to access the model. Defaults to None.
       */
      api_base?: string | null;

      /**
       * API key to access the model. Defaults to None.
       */
      api_key?: string | null;

      class_name?: string;

      /**
       * The batch size for embedding calls.
       */
      embed_batch_size?: number;

      /**
       * The modelId of the Gemini model to use.
       */
      model_name?: string;

      /**
       * The number of workers to use for async embedding calls.
       */
      num_workers?: number | null;

      /**
       * The task for embedding model.
       */
      task_type?: string | null;

      /**
       * Title is only applicable for retrieval_document tasks, and is used to represent
       * a document title. For other tasks, title is invalid.
       */
      title?: string | null;

      /**
       * Transport to access the model. Defaults to None.
       */
      transport?: string | null;
    }
  }

  export interface HuggingFaceInferenceAPIEmbeddingConfig {
    /**
     * Configuration for the HuggingFace Inference API embedding model.
     */
    component?: HuggingFaceInferenceAPIEmbeddingConfig.Component;

    /**
     * Type of the embedding model.
     */
    type?: 'HUGGINGFACE_API_EMBEDDING';
  }

  export namespace HuggingFaceInferenceAPIEmbeddingConfig {
    /**
     * Configuration for the HuggingFace Inference API embedding model.
     */
    export interface Component {
      /**
       * Hugging Face token. Will default to the locally saved token. Pass token=False if
       * you don’t want to send your token to the server.
       */
      token?: string | boolean | null;

      class_name?: string;

      /**
       * Additional cookies to send to the server.
       */
      cookies?: { [key: string]: string } | null;

      /**
       * The batch size for embedding calls.
       */
      embed_batch_size?: number;

      /**
       * Additional headers to send to the server. By default only the authorization and
       * user-agent headers are sent. Values in this dictionary will override the default
       * values.
       */
      headers?: { [key: string]: string } | null;

      /**
       * Hugging Face model name. If None, the task will be used.
       */
      model_name?: string | null;

      /**
       * The number of workers to use for async embedding calls.
       */
      num_workers?: number | null;

      /**
       * Enum of possible pooling choices with pooling behaviors.
       */
      pooling?: 'cls' | 'mean' | 'last' | null;

      /**
       * Instruction to prepend during query embedding.
       */
      query_instruction?: string | null;

      /**
       * Optional task to pick Hugging Face's recommended model, used when model_name is
       * left as default of None.
       */
      task?: string | null;

      /**
       * Instruction to prepend during text embedding.
       */
      text_instruction?: string | null;

      /**
       * The maximum number of seconds to wait for a response from the server. Loading a
       * new model in Inference API can take up to several minutes. Defaults to None,
       * meaning it will loop until the server is available.
       */
      timeout?: number | null;
    }
  }

  export interface OpenAIEmbeddingConfig {
    /**
     * Configuration for the OpenAI embedding model.
     */
    component?: OpenAIEmbeddingConfig.Component;

    /**
     * Type of the embedding model.
     */
    type?: 'OPENAI_EMBEDDING';
  }

  export namespace OpenAIEmbeddingConfig {
    /**
     * Configuration for the OpenAI embedding model.
     */
    export interface Component {
      /**
       * Additional kwargs for the OpenAI API.
       */
      additional_kwargs?: { [key: string]: unknown };

      /**
       * The base URL for OpenAI API.
       */
      api_base?: string | null;

      /**
       * The OpenAI API key.
       */
      api_key?: string | null;

      /**
       * The version for OpenAI API.
       */
      api_version?: string | null;

      class_name?: string;

      /**
       * The default headers for API requests.
       */
      default_headers?: { [key: string]: string } | null;

      /**
       * The number of dimensions on the output embedding vectors. Works only with v3
       * embedding models.
       */
      dimensions?: number | null;

      /**
       * The batch size for embedding calls.
       */
      embed_batch_size?: number;

      /**
       * Maximum number of retries.
       */
      max_retries?: number;

      /**
       * The name of the OpenAI embedding model.
       */
      model_name?: string;

      /**
       * The number of workers to use for async embedding calls.
       */
      num_workers?: number | null;

      /**
       * Reuse the OpenAI client between requests. When doing anything with large volumes
       * of async API calls, setting this to false can improve stability.
       */
      reuse_client?: boolean;

      /**
       * Timeout for each request.
       */
      timeout?: number;
    }
  }

  export interface VertexAIEmbeddingConfig {
    /**
     * Configuration for the VertexAI embedding model.
     */
    component?: VertexAIEmbeddingConfig.Component;

    /**
     * Type of the embedding model.
     */
    type?: 'VERTEXAI_EMBEDDING';
  }

  export namespace VertexAIEmbeddingConfig {
    /**
     * Configuration for the VertexAI embedding model.
     */
    export interface Component {
      /**
       * The client email for the VertexAI credentials.
       */
      client_email: string | null;

      /**
       * The default location to use when making API calls.
       */
      location: string;

      /**
       * The private key for the VertexAI credentials.
       */
      private_key: string | null;

      /**
       * The private key ID for the VertexAI credentials.
       */
      private_key_id: string | null;

      /**
       * The default GCP project to use when making Vertex API calls.
       */
      project: string;

      /**
       * The token URI for the VertexAI credentials.
       */
      token_uri: string | null;

      /**
       * Additional kwargs for the Vertex.
       */
      additional_kwargs?: { [key: string]: unknown };

      class_name?: string;

      /**
       * The batch size for embedding calls.
       */
      embed_batch_size?: number;

      /**
       * The embedding mode to use.
       */
      embed_mode?: 'default' | 'classification' | 'clustering' | 'similarity' | 'retrieval';

      /**
       * The modelId of the VertexAI model to use.
       */
      model_name?: string;

      /**
       * The number of workers to use for async embedding calls.
       */
      num_workers?: number | null;
    }
  }

  export interface BedrockEmbeddingConfig {
    /**
     * Configuration for the Bedrock embedding model.
     */
    component?: BedrockEmbeddingConfig.Component;

    /**
     * Type of the embedding model.
     */
    type?: 'BEDROCK_EMBEDDING';
  }

  export namespace BedrockEmbeddingConfig {
    /**
     * Configuration for the Bedrock embedding model.
     */
    export interface Component {
      /**
       * Additional kwargs for the bedrock client.
       */
      additional_kwargs?: { [key: string]: unknown };

      /**
       * AWS Access Key ID to use
       */
      aws_access_key_id?: string | null;

      /**
       * AWS Secret Access Key to use
       */
      aws_secret_access_key?: string | null;

      /**
       * AWS Session Token to use
       */
      aws_session_token?: string | null;

      class_name?: string;

      /**
       * The batch size for embedding calls.
       */
      embed_batch_size?: number;

      /**
       * The maximum number of API retries.
       */
      max_retries?: number;

      /**
       * The modelId of the Bedrock model to use.
       */
      model_name?: string;

      /**
       * The number of workers to use for async embedding calls.
       */
      num_workers?: number | null;

      /**
       * The name of aws profile to use. If not given, then the default profile is used.
       */
      profile_name?: string | null;

      /**
       * AWS region name to use. Uses region configured in AWS CLI if not passed
       */
      region_name?: string | null;

      /**
       * The timeout for the Bedrock API request in seconds. It will be used for both
       * connect and read timeouts.
       */
      timeout?: number;
    }
  }
}

export type EmbeddingModelConfigListResponse = Array<EmbeddingModelConfig>;

export interface EmbeddingModelConfigCreateParams {
  /**
   * Body param: The embedding configuration for the embedding model config.
   */
  embedding_config:
    | EmbeddingModelConfigCreateParams.AzureOpenAIEmbeddingConfig
    | EmbeddingModelConfigCreateParams.CohereEmbeddingConfig
    | EmbeddingModelConfigCreateParams.GeminiEmbeddingConfig
    | EmbeddingModelConfigCreateParams.HuggingFaceInferenceAPIEmbeddingConfig
    | EmbeddingModelConfigCreateParams.OpenAIEmbeddingConfig
    | EmbeddingModelConfigCreateParams.VertexAIEmbeddingConfig
    | EmbeddingModelConfigCreateParams.BedrockEmbeddingConfig;

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

export namespace EmbeddingModelConfigCreateParams {
  export interface AzureOpenAIEmbeddingConfig {
    /**
     * Configuration for the Azure OpenAI embedding model.
     */
    component?: AzureOpenAIEmbeddingConfig.Component;

    /**
     * Type of the embedding model.
     */
    type?: 'AZURE_EMBEDDING';
  }

  export namespace AzureOpenAIEmbeddingConfig {
    /**
     * Configuration for the Azure OpenAI embedding model.
     */
    export interface Component {
      /**
       * Additional kwargs for the OpenAI API.
       */
      additional_kwargs?: { [key: string]: unknown };

      /**
       * The base URL for Azure deployment.
       */
      api_base?: string;

      /**
       * The OpenAI API key.
       */
      api_key?: string | null;

      /**
       * The version for Azure OpenAI API.
       */
      api_version?: string;

      /**
       * The Azure deployment to use.
       */
      azure_deployment?: string | null;

      /**
       * The Azure endpoint to use.
       */
      azure_endpoint?: string | null;

      class_name?: string;

      /**
       * The default headers for API requests.
       */
      default_headers?: { [key: string]: string } | null;

      /**
       * The number of dimensions on the output embedding vectors. Works only with v3
       * embedding models.
       */
      dimensions?: number | null;

      /**
       * The batch size for embedding calls.
       */
      embed_batch_size?: number;

      /**
       * Maximum number of retries.
       */
      max_retries?: number;

      /**
       * The name of the OpenAI embedding model.
       */
      model_name?: string;

      /**
       * The number of workers to use for async embedding calls.
       */
      num_workers?: number | null;

      /**
       * Reuse the OpenAI client between requests. When doing anything with large volumes
       * of async API calls, setting this to false can improve stability.
       */
      reuse_client?: boolean;

      /**
       * Timeout for each request.
       */
      timeout?: number;
    }
  }

  export interface CohereEmbeddingConfig {
    /**
     * Configuration for the Cohere embedding model.
     */
    component?: CohereEmbeddingConfig.Component;

    /**
     * Type of the embedding model.
     */
    type?: 'COHERE_EMBEDDING';
  }

  export namespace CohereEmbeddingConfig {
    /**
     * Configuration for the Cohere embedding model.
     */
    export interface Component {
      /**
       * The Cohere API key.
       */
      api_key: string | null;

      class_name?: string;

      /**
       * The batch size for embedding calls.
       */
      embed_batch_size?: number;

      /**
       * Embedding type. If not provided float embedding_type is used when needed.
       */
      embedding_type?: string;

      /**
       * Model Input type. If not provided, search_document and search_query are used
       * when needed.
       */
      input_type?: string | null;

      /**
       * The modelId of the Cohere model to use.
       */
      model_name?: string;

      /**
       * The number of workers to use for async embedding calls.
       */
      num_workers?: number | null;

      /**
       * Truncation type - START/ END/ NONE
       */
      truncate?: string;
    }
  }

  export interface GeminiEmbeddingConfig {
    /**
     * Configuration for the Gemini embedding model.
     */
    component?: GeminiEmbeddingConfig.Component;

    /**
     * Type of the embedding model.
     */
    type?: 'GEMINI_EMBEDDING';
  }

  export namespace GeminiEmbeddingConfig {
    /**
     * Configuration for the Gemini embedding model.
     */
    export interface Component {
      /**
       * API base to access the model. Defaults to None.
       */
      api_base?: string | null;

      /**
       * API key to access the model. Defaults to None.
       */
      api_key?: string | null;

      class_name?: string;

      /**
       * The batch size for embedding calls.
       */
      embed_batch_size?: number;

      /**
       * The modelId of the Gemini model to use.
       */
      model_name?: string;

      /**
       * The number of workers to use for async embedding calls.
       */
      num_workers?: number | null;

      /**
       * The task for embedding model.
       */
      task_type?: string | null;

      /**
       * Title is only applicable for retrieval_document tasks, and is used to represent
       * a document title. For other tasks, title is invalid.
       */
      title?: string | null;

      /**
       * Transport to access the model. Defaults to None.
       */
      transport?: string | null;
    }
  }

  export interface HuggingFaceInferenceAPIEmbeddingConfig {
    /**
     * Configuration for the HuggingFace Inference API embedding model.
     */
    component?: HuggingFaceInferenceAPIEmbeddingConfig.Component;

    /**
     * Type of the embedding model.
     */
    type?: 'HUGGINGFACE_API_EMBEDDING';
  }

  export namespace HuggingFaceInferenceAPIEmbeddingConfig {
    /**
     * Configuration for the HuggingFace Inference API embedding model.
     */
    export interface Component {
      /**
       * Hugging Face token. Will default to the locally saved token. Pass token=False if
       * you don’t want to send your token to the server.
       */
      token?: string | boolean | null;

      class_name?: string;

      /**
       * Additional cookies to send to the server.
       */
      cookies?: { [key: string]: string } | null;

      /**
       * The batch size for embedding calls.
       */
      embed_batch_size?: number;

      /**
       * Additional headers to send to the server. By default only the authorization and
       * user-agent headers are sent. Values in this dictionary will override the default
       * values.
       */
      headers?: { [key: string]: string } | null;

      /**
       * Hugging Face model name. If None, the task will be used.
       */
      model_name?: string | null;

      /**
       * The number of workers to use for async embedding calls.
       */
      num_workers?: number | null;

      /**
       * Enum of possible pooling choices with pooling behaviors.
       */
      pooling?: 'cls' | 'mean' | 'last' | null;

      /**
       * Instruction to prepend during query embedding.
       */
      query_instruction?: string | null;

      /**
       * Optional task to pick Hugging Face's recommended model, used when model_name is
       * left as default of None.
       */
      task?: string | null;

      /**
       * Instruction to prepend during text embedding.
       */
      text_instruction?: string | null;

      /**
       * The maximum number of seconds to wait for a response from the server. Loading a
       * new model in Inference API can take up to several minutes. Defaults to None,
       * meaning it will loop until the server is available.
       */
      timeout?: number | null;
    }
  }

  export interface OpenAIEmbeddingConfig {
    /**
     * Configuration for the OpenAI embedding model.
     */
    component?: OpenAIEmbeddingConfig.Component;

    /**
     * Type of the embedding model.
     */
    type?: 'OPENAI_EMBEDDING';
  }

  export namespace OpenAIEmbeddingConfig {
    /**
     * Configuration for the OpenAI embedding model.
     */
    export interface Component {
      /**
       * Additional kwargs for the OpenAI API.
       */
      additional_kwargs?: { [key: string]: unknown };

      /**
       * The base URL for OpenAI API.
       */
      api_base?: string | null;

      /**
       * The OpenAI API key.
       */
      api_key?: string | null;

      /**
       * The version for OpenAI API.
       */
      api_version?: string | null;

      class_name?: string;

      /**
       * The default headers for API requests.
       */
      default_headers?: { [key: string]: string } | null;

      /**
       * The number of dimensions on the output embedding vectors. Works only with v3
       * embedding models.
       */
      dimensions?: number | null;

      /**
       * The batch size for embedding calls.
       */
      embed_batch_size?: number;

      /**
       * Maximum number of retries.
       */
      max_retries?: number;

      /**
       * The name of the OpenAI embedding model.
       */
      model_name?: string;

      /**
       * The number of workers to use for async embedding calls.
       */
      num_workers?: number | null;

      /**
       * Reuse the OpenAI client between requests. When doing anything with large volumes
       * of async API calls, setting this to false can improve stability.
       */
      reuse_client?: boolean;

      /**
       * Timeout for each request.
       */
      timeout?: number;
    }
  }

  export interface VertexAIEmbeddingConfig {
    /**
     * Configuration for the VertexAI embedding model.
     */
    component?: VertexAIEmbeddingConfig.Component;

    /**
     * Type of the embedding model.
     */
    type?: 'VERTEXAI_EMBEDDING';
  }

  export namespace VertexAIEmbeddingConfig {
    /**
     * Configuration for the VertexAI embedding model.
     */
    export interface Component {
      /**
       * The client email for the VertexAI credentials.
       */
      client_email: string | null;

      /**
       * The default location to use when making API calls.
       */
      location: string;

      /**
       * The private key for the VertexAI credentials.
       */
      private_key: string | null;

      /**
       * The private key ID for the VertexAI credentials.
       */
      private_key_id: string | null;

      /**
       * The default GCP project to use when making Vertex API calls.
       */
      project: string;

      /**
       * The token URI for the VertexAI credentials.
       */
      token_uri: string | null;

      /**
       * Additional kwargs for the Vertex.
       */
      additional_kwargs?: { [key: string]: unknown };

      class_name?: string;

      /**
       * The batch size for embedding calls.
       */
      embed_batch_size?: number;

      /**
       * The embedding mode to use.
       */
      embed_mode?: 'default' | 'classification' | 'clustering' | 'similarity' | 'retrieval';

      /**
       * The modelId of the VertexAI model to use.
       */
      model_name?: string;

      /**
       * The number of workers to use for async embedding calls.
       */
      num_workers?: number | null;
    }
  }

  export interface BedrockEmbeddingConfig {
    /**
     * Configuration for the Bedrock embedding model.
     */
    component?: BedrockEmbeddingConfig.Component;

    /**
     * Type of the embedding model.
     */
    type?: 'BEDROCK_EMBEDDING';
  }

  export namespace BedrockEmbeddingConfig {
    /**
     * Configuration for the Bedrock embedding model.
     */
    export interface Component {
      /**
       * Additional kwargs for the bedrock client.
       */
      additional_kwargs?: { [key: string]: unknown };

      /**
       * AWS Access Key ID to use
       */
      aws_access_key_id?: string | null;

      /**
       * AWS Secret Access Key to use
       */
      aws_secret_access_key?: string | null;

      /**
       * AWS Session Token to use
       */
      aws_session_token?: string | null;

      class_name?: string;

      /**
       * The batch size for embedding calls.
       */
      embed_batch_size?: number;

      /**
       * The maximum number of API retries.
       */
      max_retries?: number;

      /**
       * The modelId of the Bedrock model to use.
       */
      model_name?: string;

      /**
       * The number of workers to use for async embedding calls.
       */
      num_workers?: number | null;

      /**
       * The name of aws profile to use. If not given, then the default profile is used.
       */
      profile_name?: string | null;

      /**
       * AWS region name to use. Uses region configured in AWS CLI if not passed
       */
      region_name?: string | null;

      /**
       * The timeout for the Bedrock API request in seconds. It will be used for both
       * connect and read timeouts.
       */
      timeout?: number;
    }
  }
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
    | EmbeddingModelConfigUpdateParams.AzureOpenAIEmbeddingConfig
    | EmbeddingModelConfigUpdateParams.CohereEmbeddingConfig
    | EmbeddingModelConfigUpdateParams.GeminiEmbeddingConfig
    | EmbeddingModelConfigUpdateParams.HuggingFaceInferenceAPIEmbeddingConfig
    | EmbeddingModelConfigUpdateParams.OpenAIEmbeddingConfig
    | EmbeddingModelConfigUpdateParams.VertexAIEmbeddingConfig
    | EmbeddingModelConfigUpdateParams.BedrockEmbeddingConfig
    | null;

  /**
   * Body param: The name of the embedding model config.
   */
  name?: string | null;
}

export namespace EmbeddingModelConfigUpdateParams {
  export interface AzureOpenAIEmbeddingConfig {
    /**
     * Configuration for the Azure OpenAI embedding model.
     */
    component?: AzureOpenAIEmbeddingConfig.Component;

    /**
     * Type of the embedding model.
     */
    type?: 'AZURE_EMBEDDING';
  }

  export namespace AzureOpenAIEmbeddingConfig {
    /**
     * Configuration for the Azure OpenAI embedding model.
     */
    export interface Component {
      /**
       * Additional kwargs for the OpenAI API.
       */
      additional_kwargs?: { [key: string]: unknown };

      /**
       * The base URL for Azure deployment.
       */
      api_base?: string;

      /**
       * The OpenAI API key.
       */
      api_key?: string | null;

      /**
       * The version for Azure OpenAI API.
       */
      api_version?: string;

      /**
       * The Azure deployment to use.
       */
      azure_deployment?: string | null;

      /**
       * The Azure endpoint to use.
       */
      azure_endpoint?: string | null;

      class_name?: string;

      /**
       * The default headers for API requests.
       */
      default_headers?: { [key: string]: string } | null;

      /**
       * The number of dimensions on the output embedding vectors. Works only with v3
       * embedding models.
       */
      dimensions?: number | null;

      /**
       * The batch size for embedding calls.
       */
      embed_batch_size?: number;

      /**
       * Maximum number of retries.
       */
      max_retries?: number;

      /**
       * The name of the OpenAI embedding model.
       */
      model_name?: string;

      /**
       * The number of workers to use for async embedding calls.
       */
      num_workers?: number | null;

      /**
       * Reuse the OpenAI client between requests. When doing anything with large volumes
       * of async API calls, setting this to false can improve stability.
       */
      reuse_client?: boolean;

      /**
       * Timeout for each request.
       */
      timeout?: number;
    }
  }

  export interface CohereEmbeddingConfig {
    /**
     * Configuration for the Cohere embedding model.
     */
    component?: CohereEmbeddingConfig.Component;

    /**
     * Type of the embedding model.
     */
    type?: 'COHERE_EMBEDDING';
  }

  export namespace CohereEmbeddingConfig {
    /**
     * Configuration for the Cohere embedding model.
     */
    export interface Component {
      /**
       * The Cohere API key.
       */
      api_key: string | null;

      class_name?: string;

      /**
       * The batch size for embedding calls.
       */
      embed_batch_size?: number;

      /**
       * Embedding type. If not provided float embedding_type is used when needed.
       */
      embedding_type?: string;

      /**
       * Model Input type. If not provided, search_document and search_query are used
       * when needed.
       */
      input_type?: string | null;

      /**
       * The modelId of the Cohere model to use.
       */
      model_name?: string;

      /**
       * The number of workers to use for async embedding calls.
       */
      num_workers?: number | null;

      /**
       * Truncation type - START/ END/ NONE
       */
      truncate?: string;
    }
  }

  export interface GeminiEmbeddingConfig {
    /**
     * Configuration for the Gemini embedding model.
     */
    component?: GeminiEmbeddingConfig.Component;

    /**
     * Type of the embedding model.
     */
    type?: 'GEMINI_EMBEDDING';
  }

  export namespace GeminiEmbeddingConfig {
    /**
     * Configuration for the Gemini embedding model.
     */
    export interface Component {
      /**
       * API base to access the model. Defaults to None.
       */
      api_base?: string | null;

      /**
       * API key to access the model. Defaults to None.
       */
      api_key?: string | null;

      class_name?: string;

      /**
       * The batch size for embedding calls.
       */
      embed_batch_size?: number;

      /**
       * The modelId of the Gemini model to use.
       */
      model_name?: string;

      /**
       * The number of workers to use for async embedding calls.
       */
      num_workers?: number | null;

      /**
       * The task for embedding model.
       */
      task_type?: string | null;

      /**
       * Title is only applicable for retrieval_document tasks, and is used to represent
       * a document title. For other tasks, title is invalid.
       */
      title?: string | null;

      /**
       * Transport to access the model. Defaults to None.
       */
      transport?: string | null;
    }
  }

  export interface HuggingFaceInferenceAPIEmbeddingConfig {
    /**
     * Configuration for the HuggingFace Inference API embedding model.
     */
    component?: HuggingFaceInferenceAPIEmbeddingConfig.Component;

    /**
     * Type of the embedding model.
     */
    type?: 'HUGGINGFACE_API_EMBEDDING';
  }

  export namespace HuggingFaceInferenceAPIEmbeddingConfig {
    /**
     * Configuration for the HuggingFace Inference API embedding model.
     */
    export interface Component {
      /**
       * Hugging Face token. Will default to the locally saved token. Pass token=False if
       * you don’t want to send your token to the server.
       */
      token?: string | boolean | null;

      class_name?: string;

      /**
       * Additional cookies to send to the server.
       */
      cookies?: { [key: string]: string } | null;

      /**
       * The batch size for embedding calls.
       */
      embed_batch_size?: number;

      /**
       * Additional headers to send to the server. By default only the authorization and
       * user-agent headers are sent. Values in this dictionary will override the default
       * values.
       */
      headers?: { [key: string]: string } | null;

      /**
       * Hugging Face model name. If None, the task will be used.
       */
      model_name?: string | null;

      /**
       * The number of workers to use for async embedding calls.
       */
      num_workers?: number | null;

      /**
       * Enum of possible pooling choices with pooling behaviors.
       */
      pooling?: 'cls' | 'mean' | 'last' | null;

      /**
       * Instruction to prepend during query embedding.
       */
      query_instruction?: string | null;

      /**
       * Optional task to pick Hugging Face's recommended model, used when model_name is
       * left as default of None.
       */
      task?: string | null;

      /**
       * Instruction to prepend during text embedding.
       */
      text_instruction?: string | null;

      /**
       * The maximum number of seconds to wait for a response from the server. Loading a
       * new model in Inference API can take up to several minutes. Defaults to None,
       * meaning it will loop until the server is available.
       */
      timeout?: number | null;
    }
  }

  export interface OpenAIEmbeddingConfig {
    /**
     * Configuration for the OpenAI embedding model.
     */
    component?: OpenAIEmbeddingConfig.Component;

    /**
     * Type of the embedding model.
     */
    type?: 'OPENAI_EMBEDDING';
  }

  export namespace OpenAIEmbeddingConfig {
    /**
     * Configuration for the OpenAI embedding model.
     */
    export interface Component {
      /**
       * Additional kwargs for the OpenAI API.
       */
      additional_kwargs?: { [key: string]: unknown };

      /**
       * The base URL for OpenAI API.
       */
      api_base?: string | null;

      /**
       * The OpenAI API key.
       */
      api_key?: string | null;

      /**
       * The version for OpenAI API.
       */
      api_version?: string | null;

      class_name?: string;

      /**
       * The default headers for API requests.
       */
      default_headers?: { [key: string]: string } | null;

      /**
       * The number of dimensions on the output embedding vectors. Works only with v3
       * embedding models.
       */
      dimensions?: number | null;

      /**
       * The batch size for embedding calls.
       */
      embed_batch_size?: number;

      /**
       * Maximum number of retries.
       */
      max_retries?: number;

      /**
       * The name of the OpenAI embedding model.
       */
      model_name?: string;

      /**
       * The number of workers to use for async embedding calls.
       */
      num_workers?: number | null;

      /**
       * Reuse the OpenAI client between requests. When doing anything with large volumes
       * of async API calls, setting this to false can improve stability.
       */
      reuse_client?: boolean;

      /**
       * Timeout for each request.
       */
      timeout?: number;
    }
  }

  export interface VertexAIEmbeddingConfig {
    /**
     * Configuration for the VertexAI embedding model.
     */
    component?: VertexAIEmbeddingConfig.Component;

    /**
     * Type of the embedding model.
     */
    type?: 'VERTEXAI_EMBEDDING';
  }

  export namespace VertexAIEmbeddingConfig {
    /**
     * Configuration for the VertexAI embedding model.
     */
    export interface Component {
      /**
       * The client email for the VertexAI credentials.
       */
      client_email: string | null;

      /**
       * The default location to use when making API calls.
       */
      location: string;

      /**
       * The private key for the VertexAI credentials.
       */
      private_key: string | null;

      /**
       * The private key ID for the VertexAI credentials.
       */
      private_key_id: string | null;

      /**
       * The default GCP project to use when making Vertex API calls.
       */
      project: string;

      /**
       * The token URI for the VertexAI credentials.
       */
      token_uri: string | null;

      /**
       * Additional kwargs for the Vertex.
       */
      additional_kwargs?: { [key: string]: unknown };

      class_name?: string;

      /**
       * The batch size for embedding calls.
       */
      embed_batch_size?: number;

      /**
       * The embedding mode to use.
       */
      embed_mode?: 'default' | 'classification' | 'clustering' | 'similarity' | 'retrieval';

      /**
       * The modelId of the VertexAI model to use.
       */
      model_name?: string;

      /**
       * The number of workers to use for async embedding calls.
       */
      num_workers?: number | null;
    }
  }

  export interface BedrockEmbeddingConfig {
    /**
     * Configuration for the Bedrock embedding model.
     */
    component?: BedrockEmbeddingConfig.Component;

    /**
     * Type of the embedding model.
     */
    type?: 'BEDROCK_EMBEDDING';
  }

  export namespace BedrockEmbeddingConfig {
    /**
     * Configuration for the Bedrock embedding model.
     */
    export interface Component {
      /**
       * Additional kwargs for the bedrock client.
       */
      additional_kwargs?: { [key: string]: unknown };

      /**
       * AWS Access Key ID to use
       */
      aws_access_key_id?: string | null;

      /**
       * AWS Secret Access Key to use
       */
      aws_secret_access_key?: string | null;

      /**
       * AWS Session Token to use
       */
      aws_session_token?: string | null;

      class_name?: string;

      /**
       * The batch size for embedding calls.
       */
      embed_batch_size?: number;

      /**
       * The maximum number of API retries.
       */
      max_retries?: number;

      /**
       * The modelId of the Bedrock model to use.
       */
      model_name?: string;

      /**
       * The number of workers to use for async embedding calls.
       */
      num_workers?: number | null;

      /**
       * The name of aws profile to use. If not given, then the default profile is used.
       */
      profile_name?: string | null;

      /**
       * AWS region name to use. Uses region configured in AWS CLI if not passed
       */
      region_name?: string | null;

      /**
       * The timeout for the Bedrock API request in seconds. It will be used for both
       * connect and read timeouts.
       */
      timeout?: number;
    }
  }
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
    | EmbeddingModelConfigUpsertParams.AzureOpenAIEmbeddingConfig
    | EmbeddingModelConfigUpsertParams.CohereEmbeddingConfig
    | EmbeddingModelConfigUpsertParams.GeminiEmbeddingConfig
    | EmbeddingModelConfigUpsertParams.HuggingFaceInferenceAPIEmbeddingConfig
    | EmbeddingModelConfigUpsertParams.OpenAIEmbeddingConfig
    | EmbeddingModelConfigUpsertParams.VertexAIEmbeddingConfig
    | EmbeddingModelConfigUpsertParams.BedrockEmbeddingConfig
    | null;

  /**
   * Body param: The name of the embedding model config.
   */
  name?: string | null;
}

export namespace EmbeddingModelConfigUpsertParams {
  export interface AzureOpenAIEmbeddingConfig {
    /**
     * Configuration for the Azure OpenAI embedding model.
     */
    component?: AzureOpenAIEmbeddingConfig.Component;

    /**
     * Type of the embedding model.
     */
    type?: 'AZURE_EMBEDDING';
  }

  export namespace AzureOpenAIEmbeddingConfig {
    /**
     * Configuration for the Azure OpenAI embedding model.
     */
    export interface Component {
      /**
       * Additional kwargs for the OpenAI API.
       */
      additional_kwargs?: { [key: string]: unknown };

      /**
       * The base URL for Azure deployment.
       */
      api_base?: string;

      /**
       * The OpenAI API key.
       */
      api_key?: string | null;

      /**
       * The version for Azure OpenAI API.
       */
      api_version?: string;

      /**
       * The Azure deployment to use.
       */
      azure_deployment?: string | null;

      /**
       * The Azure endpoint to use.
       */
      azure_endpoint?: string | null;

      class_name?: string;

      /**
       * The default headers for API requests.
       */
      default_headers?: { [key: string]: string } | null;

      /**
       * The number of dimensions on the output embedding vectors. Works only with v3
       * embedding models.
       */
      dimensions?: number | null;

      /**
       * The batch size for embedding calls.
       */
      embed_batch_size?: number;

      /**
       * Maximum number of retries.
       */
      max_retries?: number;

      /**
       * The name of the OpenAI embedding model.
       */
      model_name?: string;

      /**
       * The number of workers to use for async embedding calls.
       */
      num_workers?: number | null;

      /**
       * Reuse the OpenAI client between requests. When doing anything with large volumes
       * of async API calls, setting this to false can improve stability.
       */
      reuse_client?: boolean;

      /**
       * Timeout for each request.
       */
      timeout?: number;
    }
  }

  export interface CohereEmbeddingConfig {
    /**
     * Configuration for the Cohere embedding model.
     */
    component?: CohereEmbeddingConfig.Component;

    /**
     * Type of the embedding model.
     */
    type?: 'COHERE_EMBEDDING';
  }

  export namespace CohereEmbeddingConfig {
    /**
     * Configuration for the Cohere embedding model.
     */
    export interface Component {
      /**
       * The Cohere API key.
       */
      api_key: string | null;

      class_name?: string;

      /**
       * The batch size for embedding calls.
       */
      embed_batch_size?: number;

      /**
       * Embedding type. If not provided float embedding_type is used when needed.
       */
      embedding_type?: string;

      /**
       * Model Input type. If not provided, search_document and search_query are used
       * when needed.
       */
      input_type?: string | null;

      /**
       * The modelId of the Cohere model to use.
       */
      model_name?: string;

      /**
       * The number of workers to use for async embedding calls.
       */
      num_workers?: number | null;

      /**
       * Truncation type - START/ END/ NONE
       */
      truncate?: string;
    }
  }

  export interface GeminiEmbeddingConfig {
    /**
     * Configuration for the Gemini embedding model.
     */
    component?: GeminiEmbeddingConfig.Component;

    /**
     * Type of the embedding model.
     */
    type?: 'GEMINI_EMBEDDING';
  }

  export namespace GeminiEmbeddingConfig {
    /**
     * Configuration for the Gemini embedding model.
     */
    export interface Component {
      /**
       * API base to access the model. Defaults to None.
       */
      api_base?: string | null;

      /**
       * API key to access the model. Defaults to None.
       */
      api_key?: string | null;

      class_name?: string;

      /**
       * The batch size for embedding calls.
       */
      embed_batch_size?: number;

      /**
       * The modelId of the Gemini model to use.
       */
      model_name?: string;

      /**
       * The number of workers to use for async embedding calls.
       */
      num_workers?: number | null;

      /**
       * The task for embedding model.
       */
      task_type?: string | null;

      /**
       * Title is only applicable for retrieval_document tasks, and is used to represent
       * a document title. For other tasks, title is invalid.
       */
      title?: string | null;

      /**
       * Transport to access the model. Defaults to None.
       */
      transport?: string | null;
    }
  }

  export interface HuggingFaceInferenceAPIEmbeddingConfig {
    /**
     * Configuration for the HuggingFace Inference API embedding model.
     */
    component?: HuggingFaceInferenceAPIEmbeddingConfig.Component;

    /**
     * Type of the embedding model.
     */
    type?: 'HUGGINGFACE_API_EMBEDDING';
  }

  export namespace HuggingFaceInferenceAPIEmbeddingConfig {
    /**
     * Configuration for the HuggingFace Inference API embedding model.
     */
    export interface Component {
      /**
       * Hugging Face token. Will default to the locally saved token. Pass token=False if
       * you don’t want to send your token to the server.
       */
      token?: string | boolean | null;

      class_name?: string;

      /**
       * Additional cookies to send to the server.
       */
      cookies?: { [key: string]: string } | null;

      /**
       * The batch size for embedding calls.
       */
      embed_batch_size?: number;

      /**
       * Additional headers to send to the server. By default only the authorization and
       * user-agent headers are sent. Values in this dictionary will override the default
       * values.
       */
      headers?: { [key: string]: string } | null;

      /**
       * Hugging Face model name. If None, the task will be used.
       */
      model_name?: string | null;

      /**
       * The number of workers to use for async embedding calls.
       */
      num_workers?: number | null;

      /**
       * Enum of possible pooling choices with pooling behaviors.
       */
      pooling?: 'cls' | 'mean' | 'last' | null;

      /**
       * Instruction to prepend during query embedding.
       */
      query_instruction?: string | null;

      /**
       * Optional task to pick Hugging Face's recommended model, used when model_name is
       * left as default of None.
       */
      task?: string | null;

      /**
       * Instruction to prepend during text embedding.
       */
      text_instruction?: string | null;

      /**
       * The maximum number of seconds to wait for a response from the server. Loading a
       * new model in Inference API can take up to several minutes. Defaults to None,
       * meaning it will loop until the server is available.
       */
      timeout?: number | null;
    }
  }

  export interface OpenAIEmbeddingConfig {
    /**
     * Configuration for the OpenAI embedding model.
     */
    component?: OpenAIEmbeddingConfig.Component;

    /**
     * Type of the embedding model.
     */
    type?: 'OPENAI_EMBEDDING';
  }

  export namespace OpenAIEmbeddingConfig {
    /**
     * Configuration for the OpenAI embedding model.
     */
    export interface Component {
      /**
       * Additional kwargs for the OpenAI API.
       */
      additional_kwargs?: { [key: string]: unknown };

      /**
       * The base URL for OpenAI API.
       */
      api_base?: string | null;

      /**
       * The OpenAI API key.
       */
      api_key?: string | null;

      /**
       * The version for OpenAI API.
       */
      api_version?: string | null;

      class_name?: string;

      /**
       * The default headers for API requests.
       */
      default_headers?: { [key: string]: string } | null;

      /**
       * The number of dimensions on the output embedding vectors. Works only with v3
       * embedding models.
       */
      dimensions?: number | null;

      /**
       * The batch size for embedding calls.
       */
      embed_batch_size?: number;

      /**
       * Maximum number of retries.
       */
      max_retries?: number;

      /**
       * The name of the OpenAI embedding model.
       */
      model_name?: string;

      /**
       * The number of workers to use for async embedding calls.
       */
      num_workers?: number | null;

      /**
       * Reuse the OpenAI client between requests. When doing anything with large volumes
       * of async API calls, setting this to false can improve stability.
       */
      reuse_client?: boolean;

      /**
       * Timeout for each request.
       */
      timeout?: number;
    }
  }

  export interface VertexAIEmbeddingConfig {
    /**
     * Configuration for the VertexAI embedding model.
     */
    component?: VertexAIEmbeddingConfig.Component;

    /**
     * Type of the embedding model.
     */
    type?: 'VERTEXAI_EMBEDDING';
  }

  export namespace VertexAIEmbeddingConfig {
    /**
     * Configuration for the VertexAI embedding model.
     */
    export interface Component {
      /**
       * The client email for the VertexAI credentials.
       */
      client_email: string | null;

      /**
       * The default location to use when making API calls.
       */
      location: string;

      /**
       * The private key for the VertexAI credentials.
       */
      private_key: string | null;

      /**
       * The private key ID for the VertexAI credentials.
       */
      private_key_id: string | null;

      /**
       * The default GCP project to use when making Vertex API calls.
       */
      project: string;

      /**
       * The token URI for the VertexAI credentials.
       */
      token_uri: string | null;

      /**
       * Additional kwargs for the Vertex.
       */
      additional_kwargs?: { [key: string]: unknown };

      class_name?: string;

      /**
       * The batch size for embedding calls.
       */
      embed_batch_size?: number;

      /**
       * The embedding mode to use.
       */
      embed_mode?: 'default' | 'classification' | 'clustering' | 'similarity' | 'retrieval';

      /**
       * The modelId of the VertexAI model to use.
       */
      model_name?: string;

      /**
       * The number of workers to use for async embedding calls.
       */
      num_workers?: number | null;
    }
  }

  export interface BedrockEmbeddingConfig {
    /**
     * Configuration for the Bedrock embedding model.
     */
    component?: BedrockEmbeddingConfig.Component;

    /**
     * Type of the embedding model.
     */
    type?: 'BEDROCK_EMBEDDING';
  }

  export namespace BedrockEmbeddingConfig {
    /**
     * Configuration for the Bedrock embedding model.
     */
    export interface Component {
      /**
       * Additional kwargs for the bedrock client.
       */
      additional_kwargs?: { [key: string]: unknown };

      /**
       * AWS Access Key ID to use
       */
      aws_access_key_id?: string | null;

      /**
       * AWS Secret Access Key to use
       */
      aws_secret_access_key?: string | null;

      /**
       * AWS Session Token to use
       */
      aws_session_token?: string | null;

      class_name?: string;

      /**
       * The batch size for embedding calls.
       */
      embed_batch_size?: number;

      /**
       * The maximum number of API retries.
       */
      max_retries?: number;

      /**
       * The modelId of the Bedrock model to use.
       */
      model_name?: string;

      /**
       * The number of workers to use for async embedding calls.
       */
      num_workers?: number | null;

      /**
       * The name of aws profile to use. If not given, then the default profile is used.
       */
      profile_name?: string | null;

      /**
       * AWS region name to use. Uses region configured in AWS CLI if not passed
       */
      region_name?: string | null;

      /**
       * The timeout for the Bedrock API request in seconds. It will be used for both
       * connect and read timeouts.
       */
      timeout?: number;
    }
  }
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

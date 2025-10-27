// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as PipelinesAPI from './pipelines';
import * as DataSinksAPI from '../data-sinks';
import * as EmbeddingModelConfigsAPI from '../embedding-model-configs';
import * as ValidateIntegrationsAPI from '../validate-integrations';
import * as JobsAPI from '../extraction/jobs';
import * as PageFiguresAPI from '../files/page-figures';
import * as PageScreenshotsAPI from '../files/page-screenshots';
import * as ParsingAPI from '../parsing/parsing';
import * as DataSourcesAPI from './data-sources';
import {
  DataSourceRetrieveDataSourcesResponse,
  DataSourceRetrieveStatusParams,
  DataSourceSyncParams,
  DataSourceUpdateDataSourcesParams,
  DataSourceUpdateDataSourcesResponse,
  DataSourceUpdateParams,
  DataSources,
  PipelineDataSource,
} from './data-sources';
import * as DocumentsAPI from './documents';
import {
  CloudDocument,
  CloudDocumentCreate,
  DocumentCreateParams,
  DocumentCreateResponse,
  DocumentDeleteParams,
  DocumentForceSyncAllParams,
  DocumentForceSyncAllResponse,
  DocumentListParams,
  DocumentListResponse,
  DocumentRetrieveChunksParams,
  DocumentRetrieveChunksResponse,
  DocumentRetrievePaginatedParams,
  DocumentRetrievePaginatedResponse,
  DocumentRetrieveParams,
  DocumentRetrieveStatusParams,
  DocumentSyncParams,
  DocumentSyncResponse,
  Documents,
  TextNode,
} from './documents';
import * as FilesAPI from './files';
import {
  FileCreateParams,
  FileCreateResponse,
  FileDeleteParams,
  FileListParams,
  FileListResponse,
  FileRetrieveStatusCountsParams,
  FileRetrieveStatusCountsResponse,
  FileRetrieveStatusParams,
  FileUpdateParams,
  Files,
  PipelineFile,
} from './files';
import * as MetadataAPI from './metadata';
import { Metadata, MetadataCreateParams, MetadataCreateResponse } from './metadata';
import * as SyncAPI from './sync';
import { Sync } from './sync';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Pipelines extends APIResource {
  sync: SyncAPI.Sync = new SyncAPI.Sync(this._client);
  dataSources: DataSourcesAPI.DataSources = new DataSourcesAPI.DataSources(this._client);
  files: FilesAPI.Files = new FilesAPI.Files(this._client);
  metadata: MetadataAPI.Metadata = new MetadataAPI.Metadata(this._client);
  documents: DocumentsAPI.Documents = new DocumentsAPI.Documents(this._client);

  /**
   * Upsert a pipeline for a project. Updates if a pipeline with the same name and
   * project_id already exists. Otherwise, creates a new pipeline.
   */
  create(params: PipelineCreateParams, options?: RequestOptions): APIPromise<Pipeline> {
    const { organization_id, project_id, ...body } = params;
    return this._client.put('/api/v1/pipelines', {
      query: { organization_id, project_id },
      body,
      ...options,
    });
  }

  /**
   * Get retrieval results for a managed pipeline and a query
   */
  retrieve(
    pipelineID: string,
    params: PipelineRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<PipelineRetrieveResponse> {
    const { organization_id, project_id, ...body } = params;
    return this._client.post(path`/api/v1/pipelines/${pipelineID}/retrieve`, {
      query: { organization_id, project_id },
      body,
      ...options,
    });
  }

  /**
   * Update an existing pipeline for a project.
   */
  update(pipelineID: string, body: PipelineUpdateParams, options?: RequestOptions): APIPromise<Pipeline> {
    return this._client.put(path`/api/v1/pipelines/${pipelineID}`, { body, ...options });
  }

  /**
   * Search for pipelines by various parameters.
   */
  list(
    query: PipelineListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PipelineListResponse> {
    return this._client.get('/api/v1/pipelines', { query, ...options });
  }

  /**
   * Delete a pipeline by ID.
   */
  delete(pipelineID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/api/v1/pipelines/${pipelineID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Make a retrieval query + chat completion for a managed pipeline.
   */
  chat(pipelineID: string, body: PipelineChatParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post(path`/api/v1/pipelines/${pipelineID}/chat`, { body, ...options });
  }

  /**
   * Copy a pipeline by ID.
   */
  copy(pipelineID: string, options?: RequestOptions): APIPromise<Pipeline> {
    return this._client.post(path`/api/v1/pipelines/${pipelineID}/copy`, options);
  }

  /**
   * Force Delete Pipeline
   */
  forceDelete(pipelineID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/api/v1/pipelines/${pipelineID}/force-delete`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get files for a pipeline.
   *
   * Args: pipeline_id: ID of the pipeline data_source_id: Optional filter by data
   * source ID only_manually_uploaded: Filter for only manually uploaded files
   * file_name_contains: Optional filter by file name (substring match) limit: Limit
   * number of results offset: Offset for pagination order_by: Field to order by
   *
   * @deprecated
   */
  retrieveFiles2(
    pipelineID: string,
    query: PipelineRetrieveFiles2Params | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PipelineRetrieveFiles2Response> {
    return this._client.get(path`/api/v1/pipelines/${pipelineID}/files2`, { query, ...options });
  }

  /**
   * Get a playground session for a user and pipeline.
   */
  retrievePlaygroundSession(
    pipelineID: string,
    options?: RequestOptions,
  ): APIPromise<PipelineRetrievePlaygroundSessionResponse> {
    return this._client.get(path`/api/v1/pipelines/${pipelineID}/playground-session`, options);
  }

  /**
   * Get the status of a pipeline by ID.
   */
  retrieveStatus(
    pipelineID: string,
    query: PipelineRetrieveStatusParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ManagedIngestionStatusResponse> {
    return this._client.get(path`/api/v1/pipelines/${pipelineID}/status`, { query, ...options });
  }
}

export interface AdvancedModeTransformConfig {
  /**
   * Configuration for the chunking.
   */
  chunking_config?:
    | AdvancedModeTransformConfig.NoneChunkingConfig
    | AdvancedModeTransformConfig.CharacterChunkingConfig
    | AdvancedModeTransformConfig.TokenChunkingConfig
    | AdvancedModeTransformConfig.SentenceChunkingConfig
    | AdvancedModeTransformConfig.SemanticChunkingConfig;

  mode?: 'advanced';

  /**
   * Configuration for the segmentation.
   */
  segmentation_config?:
    | AdvancedModeTransformConfig.NoneSegmentationConfig
    | AdvancedModeTransformConfig.PageSegmentationConfig
    | AdvancedModeTransformConfig.ElementSegmentationConfig;
}

export namespace AdvancedModeTransformConfig {
  export interface NoneChunkingConfig {
    mode?: 'none';
  }

  export interface CharacterChunkingConfig {
    chunk_overlap?: number;

    chunk_size?: number;

    mode?: 'character';
  }

  export interface TokenChunkingConfig {
    chunk_overlap?: number;

    chunk_size?: number;

    mode?: 'token';

    separator?: string;
  }

  export interface SentenceChunkingConfig {
    chunk_overlap?: number;

    chunk_size?: number;

    mode?: 'sentence';

    paragraph_separator?: string;

    separator?: string;
  }

  export interface SemanticChunkingConfig {
    breakpoint_percentile_threshold?: number;

    buffer_size?: number;

    mode?: 'semantic';
  }

  export interface NoneSegmentationConfig {
    mode?: 'none';
  }

  export interface PageSegmentationConfig {
    mode?: 'page';

    page_separator?: string;
  }

  export interface ElementSegmentationConfig {
    mode?: 'element';
  }
}

export interface AutoTransformConfig {
  /**
   * Chunk overlap for the transformation.
   */
  chunk_overlap?: number;

  /**
   * Chunk size for the transformation.
   */
  chunk_size?: number;

  mode?: 'auto';
}

/**
 * Settings that can be configured for how to use LlamaParse to parse files within
 * a LlamaCloud pipeline.
 */
export interface LlamaParseParameters {
  adaptive_long_table?: boolean | null;

  aggressive_table_extraction?: boolean | null;

  annotate_links?: boolean | null;

  auto_mode?: boolean | null;

  auto_mode_configuration_json?: string | null;

  auto_mode_trigger_on_image_in_page?: boolean | null;

  auto_mode_trigger_on_regexp_in_page?: string | null;

  auto_mode_trigger_on_table_in_page?: boolean | null;

  auto_mode_trigger_on_text_in_page?: string | null;

  azure_openai_api_version?: string | null;

  azure_openai_deployment_name?: string | null;

  azure_openai_endpoint?: string | null;

  azure_openai_key?: string | null;

  bbox_bottom?: number | null;

  bbox_left?: number | null;

  bbox_right?: number | null;

  bbox_top?: number | null;

  bounding_box?: string | null;

  compact_markdown_table?: boolean | null;

  complemental_formatting_instruction?: string | null;

  content_guideline_instruction?: string | null;

  continuous_mode?: boolean | null;

  disable_image_extraction?: boolean | null;

  disable_ocr?: boolean | null;

  disable_reconstruction?: boolean | null;

  do_not_cache?: boolean | null;

  do_not_unroll_columns?: boolean | null;

  extract_charts?: boolean | null;

  extract_layout?: boolean | null;

  fast_mode?: boolean | null;

  formatting_instruction?: string | null;

  gpt4o_api_key?: string | null;

  gpt4o_mode?: boolean | null;

  guess_xlsx_sheet_name?: boolean | null;

  hide_footers?: boolean | null;

  hide_headers?: boolean | null;

  high_res_ocr?: boolean | null;

  html_make_all_elements_visible?: boolean | null;

  html_remove_fixed_elements?: boolean | null;

  html_remove_navigation_elements?: boolean | null;

  http_proxy?: string | null;

  ignore_document_elements_for_layout_detection?: boolean | null;

  inline_images_in_markdown?: boolean | null;

  input_s3_path?: string | null;

  input_s3_region?: string | null;

  input_url?: string | null;

  internal_is_screenshot_job?: boolean | null;

  invalidate_cache?: boolean | null;

  is_formatting_instruction?: boolean | null;

  job_timeout_extra_time_per_page_in_seconds?: number | null;

  job_timeout_in_seconds?: number | null;

  keep_page_separator_when_merging_tables?: boolean | null;

  languages?: Array<ParsingAPI.ParserLanguages>;

  layout_aware?: boolean | null;

  markdown_table_multiline_header_separator?: string | null;

  max_pages?: number | null;

  max_pages_enforced?: number | null;

  merge_tables_across_pages_in_markdown?: boolean | null;

  model?: string | null;

  outlined_table_extraction?: boolean | null;

  output_pdf_of_document?: boolean | null;

  output_s3_path_prefix?: string | null;

  output_s3_region?: string | null;

  output_tables_as_HTML?: boolean | null;

  page_error_tolerance?: number | null;

  page_footer_prefix?: string | null;

  page_footer_suffix?: string | null;

  page_header_prefix?: string | null;

  page_header_suffix?: string | null;

  page_prefix?: string | null;

  page_separator?: string | null;

  page_suffix?: string | null;

  /**
   * Enum for representing the mode of parsing to be used
   */
  parse_mode?: ParsingAPI.ParsingMode | null;

  parsing_instruction?: string | null;

  precise_bounding_box?: boolean | null;

  premium_mode?: boolean | null;

  preserve_layout_alignment_across_pages?: boolean | null;

  preserve_very_small_text?: boolean | null;

  preset?: string | null;

  /**
   * The priority for the request. This field may be ignored or overwritten depending
   * on the organization tier.
   */
  priority?: 'low' | 'medium' | 'high' | 'critical' | null;

  project_id?: string | null;

  remove_hidden_text?: boolean | null;

  /**
   * Enum for representing the different available page error handling modes
   */
  replace_failed_page_mode?: ParsingAPI.FailPageMode | null;

  replace_failed_page_with_error_message_prefix?: string | null;

  replace_failed_page_with_error_message_suffix?: string | null;

  save_images?: boolean | null;

  skip_diagonal_text?: boolean | null;

  specialized_chart_parsing_agentic?: boolean | null;

  specialized_chart_parsing_efficient?: boolean | null;

  specialized_chart_parsing_plus?: boolean | null;

  specialized_image_parsing?: boolean | null;

  spreadsheet_extract_sub_tables?: boolean | null;

  spreadsheet_force_formula_computation?: boolean | null;

  strict_mode_buggy_font?: boolean | null;

  strict_mode_image_extraction?: boolean | null;

  strict_mode_image_ocr?: boolean | null;

  strict_mode_reconstruction?: boolean | null;

  structured_output?: boolean | null;

  structured_output_json_schema?: string | null;

  structured_output_json_schema_name?: string | null;

  system_prompt?: string | null;

  system_prompt_append?: string | null;

  take_screenshot?: boolean | null;

  target_pages?: string | null;

  use_vendor_multimodal_model?: boolean | null;

  user_prompt?: string | null;

  vendor_multimodal_api_key?: string | null;

  vendor_multimodal_model_name?: string | null;

  /**
   * The outbound webhook configurations
   */
  webhook_configurations?: Array<JobsAPI.WebhookConfiguration> | null;

  webhook_url?: string | null;
}

export interface LlmParameters {
  class_name?: string;

  /**
   * The name of the model to use for LLM completions.
   */
  model_name?:
    | 'GPT_4O'
    | 'GPT_4O_MINI'
    | 'GPT_4_1'
    | 'GPT_4_1_NANO'
    | 'GPT_4_1_MINI'
    | 'AZURE_OPENAI_GPT_4O'
    | 'AZURE_OPENAI_GPT_4O_MINI'
    | 'AZURE_OPENAI_GPT_4_1'
    | 'AZURE_OPENAI_GPT_4_1_MINI'
    | 'AZURE_OPENAI_GPT_4_1_NANO'
    | 'CLAUDE_3_5_SONNET'
    | 'BEDROCK_CLAUDE_3_5_SONNET_V1'
    | 'BEDROCK_CLAUDE_3_5_SONNET_V2'
    | 'VERTEX_AI_CLAUDE_3_5_SONNET_V2';

  /**
   * The system prompt to use for the completion.
   */
  system_prompt?: string | null;

  /**
   * The temperature value for the model.
   */
  temperature?: number | null;

  /**
   * Whether to use chain of thought reasoning.
   */
  use_chain_of_thought_reasoning?: boolean | null;

  /**
   * Whether to show citations in the response.
   */
  use_citation?: boolean | null;
}

export interface ManagedIngestionStatusResponse {
  /**
   * Status of the ingestion.
   */
  status: 'NOT_STARTED' | 'IN_PROGRESS' | 'SUCCESS' | 'ERROR' | 'PARTIAL_SUCCESS' | 'CANCELLED';

  /**
   * Date of the deployment.
   */
  deployment_date?: string | null;

  /**
   * When the status is effective
   */
  effective_at?: string | null;

  /**
   * List of errors that occurred during ingestion.
   */
  error?: Array<ManagedIngestionStatusResponse.Error> | null;

  /**
   * ID of the latest job.
   */
  job_id?: string | null;
}

export namespace ManagedIngestionStatusResponse {
  export interface Error {
    /**
     * ID of the job that failed.
     */
    job_id: string;

    /**
     * List of errors that occurred during ingestion.
     */
    message: string;

    /**
     * Name of the job that failed.
     */
    step:
      | 'MANAGED_INGESTION'
      | 'DATA_SOURCE'
      | 'FILE_UPDATER'
      | 'PARSE'
      | 'TRANSFORM'
      | 'INGESTION'
      | 'METADATA_UPDATE';
  }
}

/**
 * Message role.
 */
export type MessageRole =
  | 'system'
  | 'developer'
  | 'user'
  | 'assistant'
  | 'function'
  | 'tool'
  | 'chatbot'
  | 'model';

/**
 * Metadata filters for vector stores.
 */
export interface MetadataFilters {
  filters: Array<MetadataFilters.MetadataFilter | MetadataFilters>;

  /**
   * Vector store filter conditions to combine different filters.
   */
  condition?: 'and' | 'or' | 'not' | null;
}

export namespace MetadataFilters {
  /**
   * Comprehensive metadata filter for vector stores to support more operators.
   *
   * Value uses Strict types, as int, float and str are compatible types and were all
   * converted to string before.
   *
   * See: https://docs.pydantic.dev/latest/usage/types/#strict-types
   */
  export interface MetadataFilter {
    key: string;

    value: number | string | Array<string> | Array<number> | Array<number> | null;

    /**
     * Vector store filter operator.
     */
    operator?:
      | '=='
      | '>'
      | '<'
      | '!='
      | '>='
      | '<='
      | 'in'
      | 'nin'
      | 'any'
      | 'all'
      | 'text_match'
      | 'text_match_insensitive'
      | 'contains'
      | 'is_empty';
  }
}

/**
 * Page figure metadata with score
 */
export interface PageFigureNodeWithScore {
  node: PageFiguresAPI.PageFigureMetadata;

  /**
   * The score of the figure node
   */
  score: number;

  class_name?: string;
}

/**
 * Page screenshot metadata with score
 */
export interface PageScreenshotNodeWithScore {
  node: PageScreenshotsAPI.PageScreenshotMetadata;

  /**
   * The score of the screenshot node
   */
  score: number;

  class_name?: string;
}

/**
 * Schema for a pipeline.
 */
export interface Pipeline {
  /**
   * Unique identifier
   */
  id: string;

  embedding_config:
    | Pipeline.ManagedOpenAIEmbeddingConfig
    | ValidateIntegrationsAPI.AzureOpenAIEmbeddingConfig
    | ValidateIntegrationsAPI.CohereEmbeddingConfig
    | ValidateIntegrationsAPI.GeminiEmbeddingConfig
    | ValidateIntegrationsAPI.HuggingFaceInferenceAPIEmbeddingConfig
    | ValidateIntegrationsAPI.OpenAIEmbeddingConfig
    | ValidateIntegrationsAPI.VertexAIEmbeddingConfig
    | ValidateIntegrationsAPI.BedrockEmbeddingConfig;

  name: string;

  project_id: string;

  /**
   * Hashes for the configuration of a pipeline.
   */
  config_hash?: Pipeline.ConfigHash | null;

  /**
   * Creation datetime
   */
  created_at?: string | null;

  /**
   * Schema for a data sink.
   */
  data_sink?: DataSinksAPI.DataSink | null;

  /**
   * Schema for an embedding model config.
   */
  embedding_model_config?: EmbeddingModelConfigsAPI.EmbeddingModelConfig | null;

  /**
   * The ID of the EmbeddingModelConfig this pipeline is using.
   */
  embedding_model_config_id?: string | null;

  /**
   * Settings that can be configured for how to use LlamaParse to parse files within
   * a LlamaCloud pipeline.
   */
  llama_parse_parameters?: LlamaParseParameters | null;

  /**
   * The ID of the ManagedPipeline this playground pipeline is linked to.
   */
  managed_pipeline_id?: string | null;

  /**
   * Metadata configuration for the pipeline.
   */
  metadata_config?: PipelineMetadataConfig | null;

  /**
   * Type of pipeline. Either PLAYGROUND or MANAGED.
   */
  pipeline_type?: PipelineType;

  /**
   * Preset retrieval parameters for the pipeline.
   */
  preset_retrieval_parameters?: PresetRetrievalParams;

  /**
   * Configuration for sparse embedding models used in hybrid search.
   *
   * This allows users to choose between Splade and BM25 models for sparse retrieval
   * in managed data sinks.
   */
  sparse_model_config?: SparseModelConfig | null;

  /**
   * Status of the pipeline.
   */
  status?: 'CREATED' | 'DELETING' | null;

  /**
   * Configuration for the transformation.
   */
  transform_config?: AutoTransformConfig | AdvancedModeTransformConfig;

  /**
   * Update datetime
   */
  updated_at?: string | null;
}

export namespace Pipeline {
  export interface ManagedOpenAIEmbeddingConfig {
    /**
     * Configuration for the Managed OpenAI embedding model.
     */
    component?: ManagedOpenAIEmbeddingConfig.Component;

    /**
     * Type of the embedding model.
     */
    type?: 'MANAGED_OPENAI_EMBEDDING';
  }

  export namespace ManagedOpenAIEmbeddingConfig {
    /**
     * Configuration for the Managed OpenAI embedding model.
     */
    export interface Component {
      class_name?: string;

      /**
       * The batch size for embedding calls.
       */
      embed_batch_size?: number;

      /**
       * The name of the OpenAI embedding model.
       */
      model_name?: 'openai-text-embedding-3-small';

      /**
       * The number of workers to use for async embedding calls.
       */
      num_workers?: number | null;
    }
  }

  /**
   * Hashes for the configuration of a pipeline.
   */
  export interface ConfigHash {
    /**
     * Hash of the embedding config.
     */
    embedding_config_hash?: string | null;

    /**
     * Hash of the llama parse parameters.
     */
    parsing_config_hash?: string | null;

    /**
     * Hash of the transform config.
     */
    transform_config_hash?: string | null;
  }
}

/**
 * Schema for creating a pipeline.
 */
export interface PipelineCreate {
  name: string;

  /**
   * Schema for creating a data sink.
   */
  data_sink?: ValidateIntegrationsAPI.DataSinkCreate | null;

  /**
   * Data sink ID. When provided instead of data_sink, the data sink will be looked
   * up by ID.
   */
  data_sink_id?: string | null;

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
   * Embedding model config ID. When provided instead of embedding_config, the
   * embedding model config will be looked up by ID.
   */
  embedding_model_config_id?: string | null;

  /**
   * Settings that can be configured for how to use LlamaParse to parse files within
   * a LlamaCloud pipeline.
   */
  llama_parse_parameters?: LlamaParseParameters;

  /**
   * The ID of the ManagedPipeline this playground pipeline is linked to.
   */
  managed_pipeline_id?: string | null;

  /**
   * Metadata configuration for the pipeline.
   */
  metadata_config?: PipelineMetadataConfig | null;

  /**
   * Type of pipeline. Either PLAYGROUND or MANAGED.
   */
  pipeline_type?: PipelineType;

  /**
   * Preset retrieval parameters for the pipeline.
   */
  preset_retrieval_parameters?: PresetRetrievalParams;

  /**
   * Configuration for sparse embedding models used in hybrid search.
   *
   * This allows users to choose between Splade and BM25 models for sparse retrieval
   * in managed data sinks.
   */
  sparse_model_config?: SparseModelConfig | null;

  /**
   * Status of the pipeline deployment.
   */
  status?: string | null;

  /**
   * Configuration for the transformation.
   */
  transform_config?: AutoTransformConfig | AdvancedModeTransformConfig | null;
}

export interface PipelineMetadataConfig {
  /**
   * List of metadata keys to exclude from embeddings
   */
  excluded_embed_metadata_keys?: Array<string>;

  /**
   * List of metadata keys to exclude from LLM during retrieval
   */
  excluded_llm_metadata_keys?: Array<string>;
}

/**
 * Enum for representing the type of a pipeline
 */
export type PipelineType = 'PLAYGROUND' | 'MANAGED';

/**
 * Schema for the search params for an retrieval execution that can be preset for a
 * pipeline.
 */
export interface PresetRetrievalParams {
  /**
   * Alpha value for hybrid retrieval to determine the weights between dense and
   * sparse retrieval. 0 is sparse retrieval and 1 is dense retrieval.
   */
  alpha?: number | null;

  class_name?: string;

  /**
   * Minimum similarity score wrt query for retrieval
   */
  dense_similarity_cutoff?: number | null;

  /**
   * Number of nodes for dense retrieval.
   */
  dense_similarity_top_k?: number | null;

  /**
   * Enable reranking for retrieval
   */
  enable_reranking?: boolean | null;

  /**
   * Number of files to retrieve (only for retrieval mode files_via_metadata and
   * files_via_content).
   */
  files_top_k?: number | null;

  /**
   * Number of reranked nodes for returning.
   */
  rerank_top_n?: number | null;

  /**
   * The retrieval mode for the query.
   */
  retrieval_mode?: RetrievalMode;

  /**
   * @deprecated Whether to retrieve image nodes.
   */
  retrieve_image_nodes?: boolean;

  /**
   * Whether to retrieve page figure nodes.
   */
  retrieve_page_figure_nodes?: boolean;

  /**
   * Whether to retrieve page screenshot nodes.
   */
  retrieve_page_screenshot_nodes?: boolean;

  /**
   * Metadata filters for vector stores.
   */
  search_filters?: MetadataFilters | null;

  /**
   * JSON Schema that will be used to infer search_filters. Omit or leave as null to
   * skip inference.
   */
  search_filters_inference_schema?: {
    [key: string]: { [key: string]: unknown } | Array<unknown> | string | number | boolean | null;
  } | null;

  /**
   * Number of nodes for sparse retrieval.
   */
  sparse_similarity_top_k?: number | null;
}

export type RetrievalMode = 'chunks' | 'files_via_metadata' | 'files_via_content' | 'auto_routed';

/**
 * Configuration for sparse embedding models used in hybrid search.
 *
 * This allows users to choose between Splade and BM25 models for sparse retrieval
 * in managed data sinks.
 */
export interface SparseModelConfig {
  class_name?: string;

  /**
   * The sparse model type to use. 'bm25' uses Qdrant's FastEmbed BM25 model (default
   * for new pipelines), 'splade' uses HuggingFace Splade model, 'auto' selects based
   * on deployment mode (BYOC uses term frequency, Cloud uses Splade).
   */
  model_type?: 'splade' | 'bm25' | 'auto';
}

/**
 * Schema for the result of an retrieval execution.
 */
export interface PipelineRetrieveResponse {
  /**
   * The ID of the pipeline that the query was retrieved against.
   */
  pipeline_id: string;

  /**
   * The nodes retrieved by the pipeline for the given query.
   */
  retrieval_nodes: Array<PipelineRetrieveResponse.RetrievalNode>;

  class_name?: string;

  /**
   * @deprecated The image nodes retrieved by the pipeline for the given query.
   * Deprecated - will soon be replaced with 'page_screenshot_nodes'.
   */
  image_nodes?: Array<PageScreenshotNodeWithScore>;

  /**
   * Metadata filters for vector stores.
   */
  inferred_search_filters?: MetadataFilters | null;

  /**
   * Metadata associated with the retrieval execution
   */
  metadata?: { [key: string]: string };

  /**
   * The page figure nodes retrieved by the pipeline for the given query.
   */
  page_figure_nodes?: Array<PageFigureNodeWithScore>;

  /**
   * The end-to-end latency for retrieval and reranking.
   */
  retrieval_latency?: { [key: string]: number };
}

export namespace PipelineRetrieveResponse {
  /**
   * Same as NodeWithScore but type for node is a TextNode instead of BaseNode.
   * FastAPI doesn't accept abstract classes like BaseNode.
   */
  export interface RetrievalNode {
    /**
     * Provided for backward compatibility.
     *
     * Note: we keep the field with the typo "seperator" to maintain backward
     * compatibility for serialized objects.
     */
    node: DocumentsAPI.TextNode;

    class_name?: string;

    score?: number | null;
  }
}

export type PipelineListResponse = Array<Pipeline>;

export type PipelineChatResponse = unknown;

export interface PipelineRetrieveFiles2Response {
  /**
   * The files to list
   */
  files: Array<FilesAPI.PipelineFile>;

  /**
   * The limit of the files
   */
  limit: number;

  /**
   * The offset of the files
   */
  offset: number;

  /**
   * The total number of files
   */
  total_count: number;
}

/**
 * A playground session for a user.
 */
export interface PipelineRetrievePlaygroundSessionResponse {
  /**
   * Unique identifier
   */
  id: string;

  llm_params_id: string;

  pipeline_id: string;

  retrieval_params_id: string;

  user_id: string;

  /**
   * Chat message history for this session.
   */
  chat_messages?: Array<PipelineRetrievePlaygroundSessionResponse.ChatMessage>;

  /**
   * Creation datetime
   */
  created_at?: string | null;

  /**
   * LLM parameters last used in this session.
   */
  llm_params?: LlmParameters;

  /**
   * Preset retrieval parameters last used in this session.
   */
  retrieval_params?: PresetRetrievalParams;

  /**
   * Update datetime
   */
  updated_at?: string | null;
}

export namespace PipelineRetrievePlaygroundSessionResponse {
  export interface ChatMessage {
    id: string;

    /**
     * The index of the message in the chat.
     */
    index: number;

    /**
     * The role of the message.
     */
    role: PipelinesAPI.MessageRole;

    /**
     * Additional arguments passed to the model
     */
    additional_kwargs?: { [key: string]: string };

    /**
     * Retrieval annotations for the message.
     */
    annotations?: Array<ChatMessage.Annotation>;

    class_name?: string;

    /**
     * Text content of the generation
     */
    content?: string | null;
  }

  export namespace ChatMessage {
    export interface Annotation {
      data: string;

      type: string;

      class_name?: string;
    }
  }
}

export interface PipelineCreateParams {
  /**
   * Body param:
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

  /**
   * Body param: Schema for creating a data sink.
   */
  data_sink?: ValidateIntegrationsAPI.DataSinkCreate | null;

  /**
   * Body param: Data sink ID. When provided instead of data_sink, the data sink will
   * be looked up by ID.
   */
  data_sink_id?: string | null;

  /**
   * Body param:
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
   * Body param: Embedding model config ID. When provided instead of
   * embedding_config, the embedding model config will be looked up by ID.
   */
  embedding_model_config_id?: string | null;

  /**
   * Body param: Settings that can be configured for how to use LlamaParse to parse
   * files within a LlamaCloud pipeline.
   */
  llama_parse_parameters?: LlamaParseParameters;

  /**
   * Body param: The ID of the ManagedPipeline this playground pipeline is linked to.
   */
  managed_pipeline_id?: string | null;

  /**
   * Body param: Metadata configuration for the pipeline.
   */
  metadata_config?: PipelineMetadataConfig | null;

  /**
   * Body param: Type of pipeline. Either PLAYGROUND or MANAGED.
   */
  pipeline_type?: PipelineType;

  /**
   * Body param: Preset retrieval parameters for the pipeline.
   */
  preset_retrieval_parameters?: PresetRetrievalParams;

  /**
   * Body param: Configuration for sparse embedding models used in hybrid search.
   *
   * This allows users to choose between Splade and BM25 models for sparse retrieval
   * in managed data sinks.
   */
  sparse_model_config?: SparseModelConfig | null;

  /**
   * Body param: Status of the pipeline deployment.
   */
  status?: string | null;

  /**
   * Body param: Configuration for the transformation.
   */
  transform_config?: AutoTransformConfig | AdvancedModeTransformConfig | null;
}

export interface PipelineRetrieveParams {
  /**
   * Body param: The query to retrieve against.
   */
  query: string;

  /**
   * Query param:
   */
  organization_id?: string | null;

  /**
   * Query param:
   */
  project_id?: string | null;

  /**
   * Body param: Alpha value for hybrid retrieval to determine the weights between
   * dense and sparse retrieval. 0 is sparse retrieval and 1 is dense retrieval.
   */
  alpha?: number | null;

  /**
   * Body param:
   */
  class_name?: string;

  /**
   * Body param: Minimum similarity score wrt query for retrieval
   */
  dense_similarity_cutoff?: number | null;

  /**
   * Body param: Number of nodes for dense retrieval.
   */
  dense_similarity_top_k?: number | null;

  /**
   * Body param: Enable reranking for retrieval
   */
  enable_reranking?: boolean | null;

  /**
   * Body param: Number of files to retrieve (only for retrieval mode
   * files_via_metadata and files_via_content).
   */
  files_top_k?: number | null;

  /**
   * Body param: Number of reranked nodes for returning.
   */
  rerank_top_n?: number | null;

  /**
   * Body param: The retrieval mode for the query.
   */
  retrieval_mode?: RetrievalMode;

  /**
   * @deprecated Body param: Whether to retrieve image nodes.
   */
  retrieve_image_nodes?: boolean;

  /**
   * Body param: Whether to retrieve page figure nodes.
   */
  retrieve_page_figure_nodes?: boolean;

  /**
   * Body param: Whether to retrieve page screenshot nodes.
   */
  retrieve_page_screenshot_nodes?: boolean;

  /**
   * Body param: Metadata filters for vector stores.
   */
  search_filters?: MetadataFilters | null;

  /**
   * Body param: JSON Schema that will be used to infer search_filters. Omit or leave
   * as null to skip inference.
   */
  search_filters_inference_schema?: {
    [key: string]: { [key: string]: unknown } | Array<unknown> | string | number | boolean | null;
  } | null;

  /**
   * Body param: Number of nodes for sparse retrieval.
   */
  sparse_similarity_top_k?: number | null;
}

export interface PipelineUpdateParams {
  /**
   * Schema for creating a data sink.
   */
  data_sink?: ValidateIntegrationsAPI.DataSinkCreate | null;

  /**
   * Data sink ID. When provided instead of data_sink, the data sink will be looked
   * up by ID.
   */
  data_sink_id?: string | null;

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
   * Embedding model config ID. When provided instead of embedding_config, the
   * embedding model config will be looked up by ID.
   */
  embedding_model_config_id?: string | null;

  /**
   * Settings that can be configured for how to use LlamaParse to parse files within
   * a LlamaCloud pipeline.
   */
  llama_parse_parameters?: LlamaParseParameters | null;

  /**
   * The ID of the ManagedPipeline this playground pipeline is linked to.
   */
  managed_pipeline_id?: string | null;

  /**
   * Metadata configuration for the pipeline.
   */
  metadata_config?: PipelineMetadataConfig | null;

  name?: string | null;

  /**
   * Schema for the search params for an retrieval execution that can be preset for a
   * pipeline.
   */
  preset_retrieval_parameters?: PresetRetrievalParams | null;

  /**
   * Configuration for sparse embedding models used in hybrid search.
   *
   * This allows users to choose between Splade and BM25 models for sparse retrieval
   * in managed data sinks.
   */
  sparse_model_config?: SparseModelConfig | null;

  /**
   * Status of the pipeline deployment.
   */
  status?: string | null;

  /**
   * Configuration for the transformation.
   */
  transform_config?: AutoTransformConfig | AdvancedModeTransformConfig | null;
}

export interface PipelineListParams {
  organization_id?: string | null;

  pipeline_name?: string | null;

  /**
   * Enum for representing the type of a pipeline
   */
  pipeline_type?: PipelineType | null;

  project_id?: string | null;

  project_name?: string | null;
}

export interface PipelineChatParams {
  class_name?: string;

  data?: PipelineChatParams.Data;

  messages?: Array<PipelineChatParams.Message>;
}

export namespace PipelineChatParams {
  export interface Data {
    class_name?: string;

    llm_parameters?: PipelinesAPI.LlmParameters | null;

    /**
     * Schema for the search params for an retrieval execution that can be preset for a
     * pipeline.
     */
    retrieval_parameters?: PipelinesAPI.PresetRetrievalParams;
  }

  /**
   * This is distinct from a ChatMessage because this schema is enforced by the AI
   * Chat library used in the frontend
   */
  export interface Message {
    content: string;

    /**
     * Message role.
     */
    role: PipelinesAPI.MessageRole;

    /**
     * ID of the message, if any. a UUID.
     */
    id?: string;

    class_name?: string;

    /**
     * Additional data to be stored with the message.
     */
    data?: { [key: string]: unknown } | null;
  }
}

export interface PipelineRetrieveFiles2Params {
  data_source_id?: string | null;

  file_name_contains?: string | null;

  limit?: number | null;

  offset?: number | null;

  only_manually_uploaded?: boolean;

  order_by?: string | null;
}

export interface PipelineRetrieveStatusParams {
  full_details?: boolean | null;
}

Pipelines.Sync = Sync;
Pipelines.DataSources = DataSources;
Pipelines.Files = Files;
Pipelines.Metadata = Metadata;
Pipelines.Documents = Documents;

export declare namespace Pipelines {
  export {
    type AdvancedModeTransformConfig as AdvancedModeTransformConfig,
    type AutoTransformConfig as AutoTransformConfig,
    type LlamaParseParameters as LlamaParseParameters,
    type LlmParameters as LlmParameters,
    type ManagedIngestionStatusResponse as ManagedIngestionStatusResponse,
    type MessageRole as MessageRole,
    type MetadataFilters as MetadataFilters,
    type PageFigureNodeWithScore as PageFigureNodeWithScore,
    type PageScreenshotNodeWithScore as PageScreenshotNodeWithScore,
    type Pipeline as Pipeline,
    type PipelineCreate as PipelineCreate,
    type PipelineMetadataConfig as PipelineMetadataConfig,
    type PipelineType as PipelineType,
    type PresetRetrievalParams as PresetRetrievalParams,
    type RetrievalMode as RetrievalMode,
    type SparseModelConfig as SparseModelConfig,
    type PipelineRetrieveResponse as PipelineRetrieveResponse,
    type PipelineListResponse as PipelineListResponse,
    type PipelineChatResponse as PipelineChatResponse,
    type PipelineRetrieveFiles2Response as PipelineRetrieveFiles2Response,
    type PipelineRetrievePlaygroundSessionResponse as PipelineRetrievePlaygroundSessionResponse,
    type PipelineCreateParams as PipelineCreateParams,
    type PipelineRetrieveParams as PipelineRetrieveParams,
    type PipelineUpdateParams as PipelineUpdateParams,
    type PipelineListParams as PipelineListParams,
    type PipelineChatParams as PipelineChatParams,
    type PipelineRetrieveFiles2Params as PipelineRetrieveFiles2Params,
    type PipelineRetrieveStatusParams as PipelineRetrieveStatusParams,
  };

  export { Sync as Sync };

  export {
    DataSources as DataSources,
    type PipelineDataSource as PipelineDataSource,
    type DataSourceRetrieveDataSourcesResponse as DataSourceRetrieveDataSourcesResponse,
    type DataSourceUpdateDataSourcesResponse as DataSourceUpdateDataSourcesResponse,
    type DataSourceUpdateParams as DataSourceUpdateParams,
    type DataSourceRetrieveStatusParams as DataSourceRetrieveStatusParams,
    type DataSourceSyncParams as DataSourceSyncParams,
    type DataSourceUpdateDataSourcesParams as DataSourceUpdateDataSourcesParams,
  };

  export {
    Files as Files,
    type PipelineFile as PipelineFile,
    type FileCreateResponse as FileCreateResponse,
    type FileListResponse as FileListResponse,
    type FileRetrieveStatusCountsResponse as FileRetrieveStatusCountsResponse,
    type FileCreateParams as FileCreateParams,
    type FileUpdateParams as FileUpdateParams,
    type FileListParams as FileListParams,
    type FileDeleteParams as FileDeleteParams,
    type FileRetrieveStatusParams as FileRetrieveStatusParams,
    type FileRetrieveStatusCountsParams as FileRetrieveStatusCountsParams,
  };

  export {
    Metadata as Metadata,
    type MetadataCreateResponse as MetadataCreateResponse,
    type MetadataCreateParams as MetadataCreateParams,
  };

  export {
    Documents as Documents,
    type CloudDocument as CloudDocument,
    type CloudDocumentCreate as CloudDocumentCreate,
    type TextNode as TextNode,
    type DocumentCreateResponse as DocumentCreateResponse,
    type DocumentListResponse as DocumentListResponse,
    type DocumentForceSyncAllResponse as DocumentForceSyncAllResponse,
    type DocumentRetrieveChunksResponse as DocumentRetrieveChunksResponse,
    type DocumentRetrievePaginatedResponse as DocumentRetrievePaginatedResponse,
    type DocumentSyncResponse as DocumentSyncResponse,
    type DocumentCreateParams as DocumentCreateParams,
    type DocumentRetrieveParams as DocumentRetrieveParams,
    type DocumentListParams as DocumentListParams,
    type DocumentDeleteParams as DocumentDeleteParams,
    type DocumentForceSyncAllParams as DocumentForceSyncAllParams,
    type DocumentRetrieveChunksParams as DocumentRetrieveChunksParams,
    type DocumentRetrievePaginatedParams as DocumentRetrievePaginatedParams,
    type DocumentRetrieveStatusParams as DocumentRetrieveStatusParams,
    type DocumentSyncParams as DocumentSyncParams,
  };
}

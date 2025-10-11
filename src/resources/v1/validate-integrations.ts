// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class ValidateIntegrations extends APIResource {
  /**
   * Validate a data sink connection.
   */
  validateDataSinkConnection(
    body: ValidateIntegrationValidateDataSinkConnectionParams,
    options?: RequestOptions,
  ): APIPromise<BaseConnectionValidation> {
    return this._client.post('/api/v1/validate-integrations/validate-data-sink-connection', {
      body,
      ...options,
    });
  }

  /**
   * Validate a data source connection.
   */
  validateDataSourceConnection(
    params: ValidateIntegrationValidateDataSourceConnectionParams,
    options?: RequestOptions,
  ): APIPromise<BaseConnectionValidation> {
    const { existing_data_source_id, ...body } = params;
    return this._client.post('/api/v1/validate-integrations/validate-data-source-connection', {
      query: { existing_data_source_id },
      body,
      ...options,
    });
  }

  /**
   * Validate an embedding connection.
   *
   * Args: embedding_config: The embedding configuration to validate. pipeline_id: If
   * provided, the embedding connection will be validated for the pipeline. user: The
   * user to validate the embedding connection for. db: The database session.
   *
   * Returns: A BaseConnectionValidation object indicating the result of the
   * validation.
   */
  validateEmbeddingConnection(
    params: ValidateIntegrationValidateEmbeddingConnectionParams,
    options?: RequestOptions,
  ): APIPromise<BaseConnectionValidation> {
    const { pipeline_id, ...body } = params;
    return this._client.post('/api/v1/validate-integrations/validate-embedding-connection', {
      query: { pipeline_id },
      body,
      ...options,
    });
  }
}

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

/**
 * Base response model for connection validation.
 */
export interface BaseConnectionValidation {
  message: string;

  success: boolean;
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

/**
 * Cloud AstraDB Vector Store.
 *
 * This class is used to store the configuration for an AstraDB vector store, so
 * that it can be created and used in LlamaCloud.
 *
 * Args: token (str): The Astra DB Application Token to use. api_endpoint (str):
 * The Astra DB JSON API endpoint for your database. collection_name (str):
 * Collection name to use. If not existing, it will be created. embedding_dimension
 * (int): Length of the embedding vectors in use. keyspace (optional[str]): The
 * keyspace to use. If not provided, 'default_keyspace'
 */
export interface CloudAstraDBVectorStore {
  /**
   * The Astra DB JSON API endpoint for your database
   */
  api_endpoint: string;

  /**
   * Collection name to use. If not existing, it will be created
   */
  collection_name: string;

  /**
   * Length of the embedding vectors in use
   */
  embedding_dimension: number;

  class_name?: string;

  /**
   * The keyspace to use. If not provided, 'default_keyspace'
   */
  keyspace?: string | null;

  supports_nested_metadata_filters?: true;
}

export interface CloudAzStorageBlobDataSource {
  /**
   * The Azure Storage Blob account URL to use for authentication.
   */
  account_url: string;

  /**
   * The name of the Azure Storage Blob container to read from.
   */
  container_name: string;

  /**
   * The Azure Storage Blob account name to use for authentication.
   */
  account_name?: string | null;

  /**
   * The blob name to read from.
   */
  blob?: string | null;

  class_name?: string;

  /**
   * The Azure AD client ID to use for authentication.
   */
  client_id?: string | null;

  /**
   * The prefix of the Azure Storage Blob objects to read from.
   */
  prefix?: string | null;

  supports_access_control?: boolean;

  /**
   * The Azure AD tenant ID to use for authentication.
   */
  tenant_id?: string | null;
}

/**
 * Cloud Azure AI Search Vector Store.
 */
export interface CloudAzureAISearchVectorStore {
  search_service_endpoint: string;

  class_name?: string;

  client_id?: string | null;

  embedding_dimension?: number | null;

  filterable_metadata_field_keys?: { [key: string]: unknown } | null;

  index_name?: string | null;

  search_service_api_version?: string | null;

  supports_nested_metadata_filters?: true;

  tenant_id?: string | null;
}

export interface CloudBoxDataSource {
  /**
   * The type of authentication to use (Developer Token or CCG)
   */
  authentication_mechanism: 'developer_token' | 'ccg';

  class_name?: string;

  /**
   * Box API key used for identifying the application the user is authenticating with
   */
  client_id?: string | null;

  /**
   * Box Enterprise ID, if provided authenticates as service.
   */
  enterprise_id?: string | null;

  /**
   * The ID of the Box folder to read from.
   */
  folder_id?: string | null;

  supports_access_control?: boolean;

  /**
   * Box User ID, if provided authenticates as user.
   */
  user_id?: string | null;
}

export interface CloudConfluenceDataSource {
  /**
   * Type of Authentication for connecting to Confluence APIs.
   */
  authentication_mechanism: string;

  /**
   * The server URL of the Confluence instance.
   */
  server_url: string;

  class_name?: string;

  /**
   * The CQL query to use for fetching pages.
   */
  cql?: string | null;

  /**
   * Configuration for handling failures during processing. Key-value object
   * controlling failure handling behaviors.
   *
   * Example: { "skip_list_failures": true }
   *
   * Currently supports:
   *
   * - skip_list_failures: Skip failed batches/lists and continue processing
   */
  failure_handling?: CloudConfluenceDataSource.FailureHandling;

  /**
   * Whether to index restricted pages.
   */
  index_restricted_pages?: boolean;

  /**
   * Whether to keep the markdown format.
   */
  keep_markdown_format?: boolean;

  /**
   * The label to use for fetching pages.
   */
  label?: string | null;

  /**
   * The page IDs of the Confluence to read from.
   */
  page_ids?: string | null;

  /**
   * The space key to read from.
   */
  space_key?: string | null;

  supports_access_control?: boolean;

  /**
   * The username to use for authentication.
   */
  user_name?: string | null;
}

export namespace CloudConfluenceDataSource {
  /**
   * Configuration for handling failures during processing. Key-value object
   * controlling failure handling behaviors.
   *
   * Example: { "skip_list_failures": true }
   *
   * Currently supports:
   *
   * - skip_list_failures: Skip failed batches/lists and continue processing
   */
  export interface FailureHandling {
    /**
     * Whether to skip failed batches/lists and continue processing
     */
    skip_list_failures?: boolean;
  }
}

/**
 * Cloud Jira Data Source integrating JiraReader.
 */
export interface CloudJiraDataSource {
  /**
   * Type of Authentication for connecting to Jira APIs.
   */
  authentication_mechanism: string;

  /**
   * JQL (Jira Query Language) query to search.
   */
  query: string;

  class_name?: string;

  /**
   * The cloud ID, used in case of OAuth2.
   */
  cloud_id?: string | null;

  /**
   * The email address to use for authentication.
   */
  email?: string | null;

  /**
   * The server url for Jira Cloud.
   */
  server_url?: string | null;

  supports_access_control?: boolean;
}

/**
 * Cloud Jira Data Source integrating JiraReaderV2.
 */
export interface CloudJiraDataSourceV2 {
  /**
   * Type of Authentication for connecting to Jira APIs.
   */
  authentication_mechanism: string;

  /**
   * JQL (Jira Query Language) query to search.
   */
  query: string;

  /**
   * The server url for Jira Cloud.
   */
  server_url: string;

  /**
   * Jira REST API version to use (2 or 3). 3 supports Atlassian Document Format
   * (ADF).
   */
  api_version?: '2' | '3';

  class_name?: string;

  /**
   * The cloud ID, used in case of OAuth2.
   */
  cloud_id?: string | null;

  /**
   * The email address to use for authentication.
   */
  email?: string | null;

  /**
   * Fields to expand in the response.
   */
  expand?: string | null;

  /**
   * List of fields to retrieve from Jira. If None, retrieves all fields.
   */
  fields?: Array<string> | null;

  /**
   * Whether to fetch project role permissions and issue-level security
   */
  get_permissions?: boolean;

  /**
   * Rate limit for Jira API requests per minute.
   */
  requests_per_minute?: number | null;

  supports_access_control?: boolean;
}

/**
 * Cloud Milvus Vector Store.
 */
export interface CloudMilvusVectorStore {
  uri: string;

  class_name?: string;

  collection_name?: string | null;

  embedding_dimension?: number | null;

  supports_nested_metadata_filters?: boolean;
}

/**
 * Cloud MongoDB Atlas Vector Store.
 *
 * This class is used to store the configuration for a MongoDB Atlas vector store,
 * so that it can be created and used in LlamaCloud.
 *
 * Args: mongodb_uri (str): URI for connecting to MongoDB Atlas db_name (str): name
 * of the MongoDB database collection_name (str): name of the MongoDB collection
 * vector_index_name (str): name of the MongoDB Atlas vector index
 * fulltext_index_name (str): name of the MongoDB Atlas full-text index
 */
export interface CloudMongoDBAtlasVectorSearch {
  collection_name: string;

  db_name: string;

  class_name?: string;

  embedding_dimension?: number | null;

  fulltext_index_name?: string | null;

  supports_nested_metadata_filters?: boolean;

  vector_index_name?: string | null;
}

export interface CloudNotionPageDataSource {
  class_name?: string;

  /**
   * The Notion Database Id to read content from.
   */
  database_ids?: string | null;

  /**
   * The Page ID's of the Notion to read from.
   */
  page_ids?: string | null;

  supports_access_control?: boolean;
}

export interface CloudOneDriveDataSource {
  /**
   * The client ID to use for authentication.
   */
  client_id: string;

  /**
   * The tenant ID to use for authentication.
   */
  tenant_id: string;

  /**
   * The user principal name to use for authentication.
   */
  user_principal_name: string;

  class_name?: string;

  /**
   * The ID of the OneDrive folder to read from.
   */
  folder_id?: string | null;

  /**
   * The path of the OneDrive folder to read from.
   */
  folder_path?: string | null;

  /**
   * The list of required file extensions.
   */
  required_exts?: Array<string> | null;

  supports_access_control?: true;
}

/**
 * Cloud Pinecone Vector Store.
 *
 * This class is used to store the configuration for a Pinecone vector store, so
 * that it can be created and used in LlamaCloud.
 *
 * Args: api_key (str): API key for authenticating with Pinecone index_name (str):
 * name of the Pinecone index namespace (optional[str]): namespace to use in the
 * Pinecone index insert_kwargs (optional[dict]): additional kwargs to pass during
 * insertion
 */
export interface CloudPineconeVectorStore {
  index_name: string;

  class_name?: string;

  insert_kwargs?: { [key: string]: unknown } | null;

  namespace?: string | null;

  supports_nested_metadata_filters?: true;
}

export interface CloudPostgresVectorStore {
  database: string;

  embed_dim: number;

  host: string;

  port: number;

  schema_name: string;

  table_name: string;

  user: string;

  class_name?: string;

  /**
   * HNSW settings for PGVector.
   */
  hnsw_settings?: CloudPostgresVectorStore.HnswSettings | null;

  hybrid_search?: boolean | null;

  perform_setup?: boolean;

  supports_nested_metadata_filters?: boolean;
}

export namespace CloudPostgresVectorStore {
  /**
   * HNSW settings for PGVector.
   */
  export interface HnswSettings {
    /**
     * The distance method to use.
     */
    distance_method?: 'l2' | 'ip' | 'cosine' | 'l1' | 'hamming' | 'jaccard';

    /**
     * The number of edges to use during the construction phase.
     */
    ef_construction?: number;

    /**
     * The number of edges to use during the search phase.
     */
    ef_search?: number;

    /**
     * The number of bi-directional links created for each new element.
     */
    m?: number;

    /**
     * The type of vector to use.
     */
    vector_type?: 'vector' | 'half_vec' | 'bit' | 'sparse_vec';
  }
}

/**
 * Cloud Qdrant Vector Store.
 *
 * This class is used to store the configuration for a Qdrant vector store, so that
 * it can be created and used in LlamaCloud.
 *
 * Args: collection_name (str): name of the Qdrant collection url (str): url of the
 * Qdrant instance api_key (str): API key for authenticating with Qdrant
 * max_retries (int): maximum number of retries in case of a failure. Defaults to 3
 * client_kwargs (dict): additional kwargs to pass to the Qdrant client
 */
export interface CloudQdrantVectorStore {
  collection_name: string;

  url: string;

  class_name?: string;

  client_kwargs?: { [key: string]: unknown };

  max_retries?: number;

  supports_nested_metadata_filters?: true;
}

export interface CloudS3DataSource {
  /**
   * The name of the S3 bucket to read from.
   */
  bucket: string;

  /**
   * The AWS access ID to use for authentication.
   */
  aws_access_id?: string | null;

  class_name?: string;

  /**
   * The prefix of the S3 objects to read from.
   */
  prefix?: string | null;

  /**
   * The regex pattern to filter S3 objects. Must be a valid regex pattern.
   */
  regex_pattern?: string | null;

  /**
   * The S3 endpoint URL to use for authentication.
   */
  s3_endpoint_url?: string | null;

  supports_access_control?: boolean;
}

export interface CloudSharepointDataSource {
  /**
   * The client ID to use for authentication.
   */
  client_id: string;

  /**
   * The tenant ID to use for authentication.
   */
  tenant_id: string;

  class_name?: string;

  /**
   * The name of the Sharepoint drive to read from.
   */
  drive_name?: string | null;

  /**
   * The ID of the Sharepoint folder to read from.
   */
  folder_id?: string | null;

  /**
   * The path of the Sharepoint folder to read from.
   */
  folder_path?: string | null;

  /**
   * Whether to get permissions for the sharepoint site.
   */
  get_permissions?: boolean | null;

  /**
   * The list of required file extensions.
   */
  required_exts?: Array<string> | null;

  /**
   * The ID of the SharePoint site to download from.
   */
  site_id?: string | null;

  /**
   * The name of the SharePoint site to download from.
   */
  site_name?: string | null;

  supports_access_control?: true;
}

export interface CloudSlackDataSource {
  /**
   * Slack Channel.
   */
  channel_ids?: string | null;

  /**
   * Slack Channel name pattern.
   */
  channel_patterns?: string | null;

  class_name?: string;

  /**
   * Earliest date.
   */
  earliest_date?: string | null;

  /**
   * Earliest date timestamp.
   */
  earliest_date_timestamp?: number | null;

  /**
   * Latest date.
   */
  latest_date?: string | null;

  /**
   * Latest date timestamp.
   */
  latest_date_timestamp?: number | null;

  supports_access_control?: boolean;
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

export type ConfigurableDataSinkNames =
  | 'PINECONE'
  | 'POSTGRES'
  | 'QDRANT'
  | 'AZUREAI_SEARCH'
  | 'MONGODB_ATLAS'
  | 'MILVUS'
  | 'ASTRA_DB';

export type ConfigurableDataSourceNames =
  | 'S3'
  | 'AZURE_STORAGE_BLOB'
  | 'GOOGLE_DRIVE'
  | 'MICROSOFT_ONEDRIVE'
  | 'MICROSOFT_SHAREPOINT'
  | 'SLACK'
  | 'NOTION_PAGE'
  | 'CONFLUENCE'
  | 'JIRA'
  | 'JIRA_V2'
  | 'BOX';

/**
 * Schema for creating a data sink.
 */
export interface DataSinkCreate {
  /**
   * Component that implements the data sink
   */
  component:
    | { [key: string]: unknown }
    | CloudPineconeVectorStore
    | CloudPostgresVectorStore
    | CloudQdrantVectorStore
    | CloudAzureAISearchVectorStore
    | CloudMongoDBAtlasVectorSearch
    | CloudMilvusVectorStore
    | CloudAstraDBVectorStore;

  /**
   * The name of the data sink.
   */
  name: string;

  sink_type: ConfigurableDataSinkNames;
}

/**
 * Schema for creating a data source.
 */
export interface DataSourceCreate {
  /**
   * Component that implements the data source
   */
  component:
    | { [key: string]: unknown }
    | CloudS3DataSource
    | CloudAzStorageBlobDataSource
    | CloudOneDriveDataSource
    | CloudSharepointDataSource
    | CloudSlackDataSource
    | CloudNotionPageDataSource
    | CloudConfluenceDataSource
    | CloudJiraDataSource
    | CloudJiraDataSourceV2
    | CloudBoxDataSource;

  /**
   * The name of the data source.
   */
  name: string;

  source_type: ConfigurableDataSourceNames;

  /**
   * Custom metadata that will be present on all data loaded from the data source
   */
  custom_metadata?: {
    [key: string]: { [key: string]: unknown } | Array<unknown> | string | number | boolean | null;
  } | null;
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

export interface ValidateIntegrationValidateDataSinkConnectionParams {
  /**
   * Component that implements the data sink
   */
  component:
    | { [key: string]: unknown }
    | CloudPineconeVectorStore
    | CloudPostgresVectorStore
    | CloudQdrantVectorStore
    | CloudAzureAISearchVectorStore
    | CloudMongoDBAtlasVectorSearch
    | CloudMilvusVectorStore
    | CloudAstraDBVectorStore;

  /**
   * The name of the data sink.
   */
  name: string;

  sink_type: ConfigurableDataSinkNames;
}

export interface ValidateIntegrationValidateDataSourceConnectionParams {
  /**
   * Body param: Component that implements the data source
   */
  component:
    | { [key: string]: unknown }
    | CloudS3DataSource
    | CloudAzStorageBlobDataSource
    | CloudOneDriveDataSource
    | CloudSharepointDataSource
    | CloudSlackDataSource
    | CloudNotionPageDataSource
    | CloudConfluenceDataSource
    | CloudJiraDataSource
    | CloudJiraDataSourceV2
    | CloudBoxDataSource;

  /**
   * Body param: The name of the data source.
   */
  name: string;

  /**
   * Body param:
   */
  source_type: ConfigurableDataSourceNames;

  /**
   * Query param:
   */
  existing_data_source_id?: string | null;

  /**
   * Body param: Custom metadata that will be present on all data loaded from the
   * data source
   */
  custom_metadata?: {
    [key: string]: { [key: string]: unknown } | Array<unknown> | string | number | boolean | null;
  } | null;
}

export type ValidateIntegrationValidateEmbeddingConnectionParams =
  | ValidateIntegrationValidateEmbeddingConnectionParams.AzureOpenAIEmbeddingConfig
  | ValidateIntegrationValidateEmbeddingConnectionParams.CohereEmbeddingConfig
  | ValidateIntegrationValidateEmbeddingConnectionParams.GeminiEmbeddingConfig
  | ValidateIntegrationValidateEmbeddingConnectionParams.HuggingFaceInferenceAPIEmbeddingConfig
  | ValidateIntegrationValidateEmbeddingConnectionParams.OpenAIEmbeddingConfig
  | ValidateIntegrationValidateEmbeddingConnectionParams.VertexAIEmbeddingConfig
  | ValidateIntegrationValidateEmbeddingConnectionParams.BedrockEmbeddingConfig;

export declare namespace ValidateIntegrationValidateEmbeddingConnectionParams {
  export interface AzureOpenAIEmbeddingConfig {
    /**
     * Query param:
     */
    pipeline_id?: string | null;

    /**
     * Body param: Configuration for the Azure OpenAI embedding model.
     */
    component?: AzureOpenAIEmbeddingConfig.Component;

    /**
     * Body param: Type of the embedding model.
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
     * Query param:
     */
    pipeline_id?: string | null;

    /**
     * Body param: Configuration for the Cohere embedding model.
     */
    component?: CohereEmbeddingConfig.Component;

    /**
     * Body param: Type of the embedding model.
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
     * Query param:
     */
    pipeline_id?: string | null;

    /**
     * Body param: Configuration for the Gemini embedding model.
     */
    component?: GeminiEmbeddingConfig.Component;

    /**
     * Body param: Type of the embedding model.
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
     * Query param:
     */
    pipeline_id?: string | null;

    /**
     * Body param: Configuration for the HuggingFace Inference API embedding model.
     */
    component?: HuggingFaceInferenceAPIEmbeddingConfig.Component;

    /**
     * Body param: Type of the embedding model.
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
     * Query param:
     */
    pipeline_id?: string | null;

    /**
     * Body param: Configuration for the OpenAI embedding model.
     */
    component?: OpenAIEmbeddingConfig.Component;

    /**
     * Body param: Type of the embedding model.
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
     * Query param:
     */
    pipeline_id?: string | null;

    /**
     * Body param: Configuration for the VertexAI embedding model.
     */
    component?: VertexAIEmbeddingConfig.Component;

    /**
     * Body param: Type of the embedding model.
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
     * Query param:
     */
    pipeline_id?: string | null;

    /**
     * Body param: Configuration for the Bedrock embedding model.
     */
    component?: BedrockEmbeddingConfig.Component;

    /**
     * Body param: Type of the embedding model.
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

export declare namespace ValidateIntegrations {
  export {
    type AzureOpenAIEmbeddingConfig as AzureOpenAIEmbeddingConfig,
    type BaseConnectionValidation as BaseConnectionValidation,
    type BedrockEmbeddingConfig as BedrockEmbeddingConfig,
    type CloudAstraDBVectorStore as CloudAstraDBVectorStore,
    type CloudAzStorageBlobDataSource as CloudAzStorageBlobDataSource,
    type CloudAzureAISearchVectorStore as CloudAzureAISearchVectorStore,
    type CloudBoxDataSource as CloudBoxDataSource,
    type CloudConfluenceDataSource as CloudConfluenceDataSource,
    type CloudJiraDataSource as CloudJiraDataSource,
    type CloudJiraDataSourceV2 as CloudJiraDataSourceV2,
    type CloudMilvusVectorStore as CloudMilvusVectorStore,
    type CloudMongoDBAtlasVectorSearch as CloudMongoDBAtlasVectorSearch,
    type CloudNotionPageDataSource as CloudNotionPageDataSource,
    type CloudOneDriveDataSource as CloudOneDriveDataSource,
    type CloudPineconeVectorStore as CloudPineconeVectorStore,
    type CloudPostgresVectorStore as CloudPostgresVectorStore,
    type CloudQdrantVectorStore as CloudQdrantVectorStore,
    type CloudS3DataSource as CloudS3DataSource,
    type CloudSharepointDataSource as CloudSharepointDataSource,
    type CloudSlackDataSource as CloudSlackDataSource,
    type CohereEmbeddingConfig as CohereEmbeddingConfig,
    type ConfigurableDataSinkNames as ConfigurableDataSinkNames,
    type ConfigurableDataSourceNames as ConfigurableDataSourceNames,
    type DataSinkCreate as DataSinkCreate,
    type DataSourceCreate as DataSourceCreate,
    type GeminiEmbeddingConfig as GeminiEmbeddingConfig,
    type HuggingFaceInferenceAPIEmbeddingConfig as HuggingFaceInferenceAPIEmbeddingConfig,
    type OpenAIEmbeddingConfig as OpenAIEmbeddingConfig,
    type VertexAIEmbeddingConfig as VertexAIEmbeddingConfig,
    type ValidateIntegrationValidateDataSinkConnectionParams as ValidateIntegrationValidateDataSinkConnectionParams,
    type ValidateIntegrationValidateDataSourceConnectionParams as ValidateIntegrationValidateDataSourceConnectionParams,
    type ValidateIntegrationValidateEmbeddingConnectionParams as ValidateIntegrationValidateEmbeddingConnectionParams,
  };
}

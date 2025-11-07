// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class DataSinks extends APIResource {
  /**
   * Create a new data sink.
   */
  create(params: DataSinkCreateParams, options?: RequestOptions): APIPromise<DataSink> {
    const { organization_id, project_id, ...body } = params;
    return this._client.post('/api/v1/data-sinks', {
      query: { organization_id, project_id },
      body,
      ...options,
    });
  }

  /**
   * Update a data sink by ID.
   */
  update(dataSinkID: string, body: DataSinkUpdateParams, options?: RequestOptions): APIPromise<DataSink> {
    return this._client.put(path`/api/v1/data-sinks/${dataSinkID}`, { body, ...options });
  }

  /**
   * List data sinks for a given project.
   */
  list(
    query: DataSinkListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DataSinkListResponse> {
    return this._client.get('/api/v1/data-sinks', { query, ...options });
  }

  /**
   * Delete a data sink by ID.
   */
  delete(dataSinkID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/api/v1/data-sinks/${dataSinkID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get a data sink by ID.
   */
  get(dataSinkID: string, options?: RequestOptions): APIPromise<DataSink> {
    return this._client.get(path`/api/v1/data-sinks/${dataSinkID}`, options);
  }

  /**
   * Upserts a data sink. Updates if a data sink with the same name and project_id
   * already exists. Otherwise, creates a new data sink.
   */
  upsert(params: DataSinkUpsertParams, options?: RequestOptions): APIPromise<DataSink> {
    const { organization_id, project_id, ...body } = params;
    return this._client.put('/api/v1/data-sinks', {
      query: { organization_id, project_id },
      body,
      ...options,
    });
  }
}

/**
 * Schema for a data sink.
 */
export interface DataSink {
  /**
   * Unique identifier
   */
  id: string;

  /**
   * Component that implements the data sink
   */
  component:
    | { [key: string]: unknown }
    | DataSink.CloudPineconeVectorStore
    | DataSink.CloudPostgresVectorStore
    | DataSink.CloudQdrantVectorStore
    | DataSink.CloudAzureAISearchVectorStore
    | DataSink.CloudMongoDBAtlasVectorSearch
    | DataSink.CloudMilvusVectorStore
    | DataSink.CloudAstraDBVectorStore;

  /**
   * The name of the data sink.
   */
  name: string;

  project_id: string;

  sink_type: 'PINECONE' | 'POSTGRES' | 'QDRANT' | 'AZUREAI_SEARCH' | 'MONGODB_ATLAS' | 'MILVUS' | 'ASTRA_DB';

  /**
   * Creation datetime
   */
  created_at?: string | null;

  /**
   * Update datetime
   */
  updated_at?: string | null;
}

export namespace DataSink {
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
}

export type DataSinkListResponse = Array<DataSink>;

export interface DataSinkCreateParams {
  /**
   * Body param: Component that implements the data sink
   */
  component:
    | { [key: string]: unknown }
    | DataSinkCreateParams.CloudPineconeVectorStore
    | DataSinkCreateParams.CloudPostgresVectorStore
    | DataSinkCreateParams.CloudQdrantVectorStore
    | DataSinkCreateParams.CloudAzureAISearchVectorStore
    | DataSinkCreateParams.CloudMongoDBAtlasVectorSearch
    | DataSinkCreateParams.CloudMilvusVectorStore
    | DataSinkCreateParams.CloudAstraDBVectorStore;

  /**
   * Body param: The name of the data sink.
   */
  name: string;

  /**
   * Body param:
   */
  sink_type: 'PINECONE' | 'POSTGRES' | 'QDRANT' | 'AZUREAI_SEARCH' | 'MONGODB_ATLAS' | 'MILVUS' | 'ASTRA_DB';

  /**
   * Query param:
   */
  organization_id?: string | null;

  /**
   * Query param:
   */
  project_id?: string | null;
}

export namespace DataSinkCreateParams {
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
    /**
     * The API key for authenticating with Pinecone
     */
    api_key: string;

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

    password: string;

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
    api_key: string;

    collection_name: string;

    url: string;

    class_name?: string;

    client_kwargs?: { [key: string]: unknown };

    max_retries?: number;

    supports_nested_metadata_filters?: true;
  }

  /**
   * Cloud Azure AI Search Vector Store.
   */
  export interface CloudAzureAISearchVectorStore {
    search_service_api_key: string;

    search_service_endpoint: string;

    class_name?: string;

    client_id?: string | null;

    client_secret?: string | null;

    embedding_dimension?: number | null;

    filterable_metadata_field_keys?: { [key: string]: unknown } | null;

    index_name?: string | null;

    search_service_api_version?: string | null;

    supports_nested_metadata_filters?: true;

    tenant_id?: string | null;
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

    mongodb_uri: string;

    class_name?: string;

    embedding_dimension?: number | null;

    fulltext_index_name?: string | null;

    supports_nested_metadata_filters?: boolean;

    vector_index_name?: string | null;
  }

  /**
   * Cloud Milvus Vector Store.
   */
  export interface CloudMilvusVectorStore {
    uri: string;

    token?: string | null;

    class_name?: string;

    collection_name?: string | null;

    embedding_dimension?: number | null;

    supports_nested_metadata_filters?: boolean;
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
     * The Astra DB Application Token to use
     */
    token: string;

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
}

export interface DataSinkUpdateParams {
  sink_type: 'PINECONE' | 'POSTGRES' | 'QDRANT' | 'AZUREAI_SEARCH' | 'MONGODB_ATLAS' | 'MILVUS' | 'ASTRA_DB';

  /**
   * Component that implements the data sink
   */
  component?:
    | { [key: string]: unknown }
    | DataSinkUpdateParams.CloudPineconeVectorStore
    | DataSinkUpdateParams.CloudPostgresVectorStore
    | DataSinkUpdateParams.CloudQdrantVectorStore
    | DataSinkUpdateParams.CloudAzureAISearchVectorStore
    | DataSinkUpdateParams.CloudMongoDBAtlasVectorSearch
    | DataSinkUpdateParams.CloudMilvusVectorStore
    | DataSinkUpdateParams.CloudAstraDBVectorStore
    | null;

  /**
   * The name of the data sink.
   */
  name?: string | null;
}

export namespace DataSinkUpdateParams {
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
    /**
     * The API key for authenticating with Pinecone
     */
    api_key: string;

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

    password: string;

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
    api_key: string;

    collection_name: string;

    url: string;

    class_name?: string;

    client_kwargs?: { [key: string]: unknown };

    max_retries?: number;

    supports_nested_metadata_filters?: true;
  }

  /**
   * Cloud Azure AI Search Vector Store.
   */
  export interface CloudAzureAISearchVectorStore {
    search_service_api_key: string;

    search_service_endpoint: string;

    class_name?: string;

    client_id?: string | null;

    client_secret?: string | null;

    embedding_dimension?: number | null;

    filterable_metadata_field_keys?: { [key: string]: unknown } | null;

    index_name?: string | null;

    search_service_api_version?: string | null;

    supports_nested_metadata_filters?: true;

    tenant_id?: string | null;
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

    mongodb_uri: string;

    class_name?: string;

    embedding_dimension?: number | null;

    fulltext_index_name?: string | null;

    supports_nested_metadata_filters?: boolean;

    vector_index_name?: string | null;
  }

  /**
   * Cloud Milvus Vector Store.
   */
  export interface CloudMilvusVectorStore {
    uri: string;

    token?: string | null;

    class_name?: string;

    collection_name?: string | null;

    embedding_dimension?: number | null;

    supports_nested_metadata_filters?: boolean;
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
     * The Astra DB Application Token to use
     */
    token: string;

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
}

export interface DataSinkListParams {
  organization_id?: string | null;

  project_id?: string | null;
}

export interface DataSinkUpsertParams {
  /**
   * Body param: Component that implements the data sink
   */
  component:
    | { [key: string]: unknown }
    | DataSinkUpsertParams.CloudPineconeVectorStore
    | DataSinkUpsertParams.CloudPostgresVectorStore
    | DataSinkUpsertParams.CloudQdrantVectorStore
    | DataSinkUpsertParams.CloudAzureAISearchVectorStore
    | DataSinkUpsertParams.CloudMongoDBAtlasVectorSearch
    | DataSinkUpsertParams.CloudMilvusVectorStore
    | DataSinkUpsertParams.CloudAstraDBVectorStore;

  /**
   * Body param: The name of the data sink.
   */
  name: string;

  /**
   * Body param:
   */
  sink_type: 'PINECONE' | 'POSTGRES' | 'QDRANT' | 'AZUREAI_SEARCH' | 'MONGODB_ATLAS' | 'MILVUS' | 'ASTRA_DB';

  /**
   * Query param:
   */
  organization_id?: string | null;

  /**
   * Query param:
   */
  project_id?: string | null;
}

export namespace DataSinkUpsertParams {
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
    /**
     * The API key for authenticating with Pinecone
     */
    api_key: string;

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

    password: string;

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
    api_key: string;

    collection_name: string;

    url: string;

    class_name?: string;

    client_kwargs?: { [key: string]: unknown };

    max_retries?: number;

    supports_nested_metadata_filters?: true;
  }

  /**
   * Cloud Azure AI Search Vector Store.
   */
  export interface CloudAzureAISearchVectorStore {
    search_service_api_key: string;

    search_service_endpoint: string;

    class_name?: string;

    client_id?: string | null;

    client_secret?: string | null;

    embedding_dimension?: number | null;

    filterable_metadata_field_keys?: { [key: string]: unknown } | null;

    index_name?: string | null;

    search_service_api_version?: string | null;

    supports_nested_metadata_filters?: true;

    tenant_id?: string | null;
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

    mongodb_uri: string;

    class_name?: string;

    embedding_dimension?: number | null;

    fulltext_index_name?: string | null;

    supports_nested_metadata_filters?: boolean;

    vector_index_name?: string | null;
  }

  /**
   * Cloud Milvus Vector Store.
   */
  export interface CloudMilvusVectorStore {
    uri: string;

    token?: string | null;

    class_name?: string;

    collection_name?: string | null;

    embedding_dimension?: number | null;

    supports_nested_metadata_filters?: boolean;
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
     * The Astra DB Application Token to use
     */
    token: string;

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
}

export declare namespace DataSinks {
  export {
    type DataSink as DataSink,
    type DataSinkListResponse as DataSinkListResponse,
    type DataSinkCreateParams as DataSinkCreateParams,
    type DataSinkUpdateParams as DataSinkUpdateParams,
    type DataSinkListParams as DataSinkListParams,
    type DataSinkUpsertParams as DataSinkUpsertParams,
  };
}

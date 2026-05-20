// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Retrieval extends APIResource {
  /**
   * Retrieve relevant chunks via hybrid search (vector + full-text), with filtering
   * on built-in or user-defined metadata.
   *
   * @example
   * ```ts
   * const retrieval = await client.beta.retrieval.retrieve({
   *   index_id: 'idx-abc123',
   *   query: 'What are the key findings?',
   * });
   * ```
   */
  retrieve(params: RetrievalRetrieveParams, options?: RequestOptions): APIPromise<RetrievalRetrieveResponse> {
    const { organization_id, project_id, ...body } = params;
    return this._client.post('/api/v1/retrieval/retrieve', {
      query: { organization_id, project_id },
      body,
      ...options,
    });
  }

  /**
   * Grep within a file's parsed content using a regex pattern.
   *
   * @example
   * ```ts
   * const response = await client.beta.retrieval.grep({
   *   file_id: 'file_id',
   *   index_id: 'idx-abc123',
   *   pattern: 'revenue|profit',
   * });
   * ```
   */
  grep(params: RetrievalGrepParams, options?: RequestOptions): APIPromise<RetrievalGrepResponse> {
    const { organization_id, project_id, ...body } = params;
    return this._client.post('/api/v1/retrieval/files/grep', {
      query: { organization_id, project_id },
      body,
      ...options,
    });
  }

  /**
   * Read the parsed text content of a specific file.
   *
   * @example
   * ```ts
   * const response = await client.beta.retrieval.read({
   *   file_id: 'file_id',
   *   index_id: 'idx-abc123',
   * });
   * ```
   */
  read(params: RetrievalReadParams, options?: RequestOptions): APIPromise<RetrievalReadResponse> {
    const { organization_id, project_id, ...body } = params;
    return this._client.post('/api/v1/retrieval/files/read', {
      query: { organization_id, project_id },
      body,
      ...options,
    });
  }
}

/**
 * Response containing retrieval results.
 */
export interface RetrievalRetrieveResponse {
  /**
   * Ordered list of retrieved chunks.
   */
  results: Array<RetrievalRetrieveResponse.Result>;
}

export namespace RetrievalRetrieveResponse {
  /**
   * A single retrieval result.
   */
  export interface Result {
    /**
     * Text content of the retrieved chunk.
     */
    content: string;

    /**
     * User-defined metadata associated with the chunk.
     */
    metadata?: { [key: string]: string | number | boolean | Array<string> | null } | null;

    /**
     * Relevance score from the reranker, if reranking was applied.
     */
    rerank_score?: number | null;

    /**
     * Hybrid search relevance score.
     */
    score?: number | null;

    /**
     * Built-in fields stored for every exported chunk.
     */
    static_fields?: Result.StaticFields;
  }

  export namespace Result {
    /**
     * Built-in fields stored for every exported chunk.
     */
    export interface StaticFields {
      /**
       * Attachments associated with the chunk
       */
      attachments?: Array<StaticFields.Attachment>;

      /**
       * End character offset of the chunk.
       */
      chunk_end_char?: number | null;

      /**
       * Index of the chunk within the file.
       */
      chunk_index?: number | null;

      /**
       * Start character offset of the chunk.
       */
      chunk_start_char?: number | null;

      /**
       * Token count of the chunk.
       */
      chunk_token_count?: number | null;

      /**
       * Last page number covered by this chunk.
       */
      page_range_end?: number | null;

      /**
       * First page number covered by this chunk.
       */
      page_range_start?: number | null;

      /**
       * ID of the parsed file.
       */
      parsed_directory_file_id?: string | null;
    }

    export namespace StaticFields {
      /**
       * Reference to a file attachment, retrievable via
       * `GET /api/v1/beta/attachments/{attachment_name}?source_id=...`.
       */
      export interface Attachment {
        /**
         * Attachment-relative path, e.g. 'screenshots/page_7.jpg'.
         */
        attachment_name: string;

        /**
         * File ID to pass as source_id when fetching the attachment.
         */
        source_id: string;

        /**
         * Attachment kind, e.g. 'screenshot', 'items'.
         */
        type: string;
      }
    }
  }
}

/**
 * Paginated grep results for a file.
 */
export interface RetrievalGrepResponse {
  /**
   * The list of items.
   */
  items: Array<RetrievalGrepResponse.Item>;

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

export namespace RetrievalGrepResponse {
  /**
   * A single grep match within a file.
   */
  export interface Item {
    /**
     * Matched text content.
     */
    content: string;

    /**
     * End character offset of the match.
     */
    end_char: number;

    /**
     * Start character offset of the match.
     */
    start_char: number;
  }
}

/**
 * File read result.
 */
export interface RetrievalReadResponse {
  /**
   * Parsed text content of the file.
   */
  content: string;
}

export interface RetrievalRetrieveParams {
  /**
   * Body param: ID of the index to retrieve against.
   */
  index_id: string;

  /**
   * Body param: Natural-language query to retrieve relevant chunks.
   */
  query: string;

  /**
   * Query param
   */
  organization_id?: string | null;

  /**
   * Query param
   */
  project_id?: string | null;

  /**
   * Body param: Filters on user-defined metadata fields.
   */
  custom_filters?: {
    [key: string]:
      | RetrievalRetrieveParams.FilterTypeUnionStrIntBoolFloat
      | Array<RetrievalRetrieveParams.UnionMember1>
      | null;
  } | null;

  /**
   * Body param: Weight of the full-text search pipeline (0-1).
   */
  full_text_pipeline_weight?: number | null;

  /**
   * Body param: Number of candidates for approximate nearest neighbor search.
   */
  num_candidates?: number | null;

  /**
   * Body param: Reranking configuration applied after hybrid search. Enabled by
   * default.
   */
  rerank?: RetrievalRetrieveParams.Rerank;

  /**
   * Body param: Minimum score threshold for returned results.
   */
  score_threshold?: number | null;

  /**
   * Body param: Filters on built-in document fields (page range, chunk index, etc.).
   */
  static_filters?: RetrievalRetrieveParams.StaticFilters | null;

  /**
   * Body param: Maximum number of results to return.
   */
  top_k?: number | null;

  /**
   * Body param: Weight of the vector search pipeline (0-1).
   */
  vector_pipeline_weight?: number | null;
}

export namespace RetrievalRetrieveParams {
  export interface FilterTypeUnionStrIntBoolFloat {
    operator: 'eq' | 'ne' | 'gt' | 'lt' | 'gte' | 'lte' | 'in' | 'nin';

    value: string | boolean | number | Array<string | boolean | number>;
  }

  export interface UnionMember1 {
    operator: 'eq' | 'ne' | 'gt' | 'lt' | 'gte' | 'lte' | 'in' | 'nin';

    value: number | Array<number>;
  }

  /**
   * Reranking configuration applied after hybrid search. Enabled by default.
   */
  export interface Rerank {
    /**
     * Set to false to disable reranking.
     */
    enabled?: boolean;

    /**
     * Number of results to return after reranking.
     */
    top_n?: number | null;
  }

  /**
   * Filters on built-in document fields (page range, chunk index, etc.).
   */
  export interface StaticFilters {
    parsed_directory_file_id?: StaticFilters.ParsedDirectoryFileID | null;
  }

  export namespace StaticFilters {
    export interface ParsedDirectoryFileID {
      operator: 'eq' | 'ne' | 'gt' | 'lt' | 'gte' | 'lte' | 'in' | 'nin';

      value: string | Array<string>;
    }
  }
}

export interface RetrievalGrepParams {
  /**
   * Body param: ID of the file to grep.
   */
  file_id: string;

  /**
   * Body param: ID of the index the file belongs to.
   */
  index_id: string;

  /**
   * Body param: Regex pattern to search for.
   */
  pattern: string;

  /**
   * Query param
   */
  organization_id?: string | null;

  /**
   * Query param
   */
  project_id?: string | null;

  /**
   * Body param: Number of characters of context to include before and after the
   * matched pattern in the content field of the response
   */
  context_chars?: number | null;

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

export interface RetrievalReadParams {
  /**
   * Body param: ID of the file to read.
   */
  file_id: string;

  /**
   * Body param: ID of the index the file belongs to.
   */
  index_id: string;

  /**
   * Query param
   */
  organization_id?: string | null;

  /**
   * Query param
   */
  project_id?: string | null;

  /**
   * Body param: Maximum number of characters to read from the offset.
   */
  max_length?: number | null;

  /**
   * Body param: Starting character offset.
   */
  offset?: number;
}

export declare namespace Retrieval {
  export {
    type RetrievalRetrieveResponse as RetrievalRetrieveResponse,
    type RetrievalGrepResponse as RetrievalGrepResponse,
    type RetrievalReadResponse as RetrievalReadResponse,
    type RetrievalRetrieveParams as RetrievalRetrieveParams,
    type RetrievalGrepParams as RetrievalGrepParams,
    type RetrievalReadParams as RetrievalReadParams,
  };
}

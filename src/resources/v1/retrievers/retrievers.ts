// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as PipelinesAPI from '../pipelines/pipelines';
import * as RetrieveAPI from './retrieve';
import { CompositeRetrievalMode, CompositeRetrievalResult, ReRankConfig, Retrieve } from './retrieve';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Retrievers extends APIResource {
  retrieve: RetrieveAPI.Retrieve = new RetrieveAPI.Retrieve(this._client);

  /**
   * Create a new Retriever.
   */
  create(params: RetrieverCreateParams, options?: RequestOptions): APIPromise<Retriever> {
    const { organization_id, project_id, ...body } = params;
    return this._client.post('/api/v1/retrievers', {
      query: { organization_id, project_id },
      body,
      ...options,
    });
  }

  /**
   * Update an existing Retriever.
   */
  update(retrieverID: string, body: RetrieverUpdateParams, options?: RequestOptions): APIPromise<Retriever> {
    return this._client.put(path`/api/v1/retrievers/${retrieverID}`, { body, ...options });
  }

  /**
   * List Retrievers for a project.
   */
  list(
    query: RetrieverListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RetrieverListResponse> {
    return this._client.get('/api/v1/retrievers', { query, ...options });
  }

  /**
   * Delete a Retriever by ID.
   */
  delete(retrieverID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/api/v1/retrievers/${retrieverID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve data using specified pipelines without creating a persistent retriever.
   */
  retrieveDirect(
    params: RetrieverRetrieveDirectParams,
    options?: RequestOptions,
  ): APIPromise<RetrieveAPI.CompositeRetrievalResult> {
    const { organization_id, project_id, ...body } = params;
    return this._client.post('/api/v1/retrievers/retrieve', {
      query: { organization_id, project_id },
      body,
      ...options,
    });
  }

  /**
   * Upsert a new Retriever.
   */
  upsert(params: RetrieverUpsertParams, options?: RequestOptions): APIPromise<Retriever> {
    const { organization_id, project_id, ...body } = params;
    return this._client.put('/api/v1/retrievers', {
      query: { organization_id, project_id },
      body,
      ...options,
    });
  }
}

/**
 * An entity that retrieves context nodes from several sub RetrieverTools.
 */
export interface Retriever {
  /**
   * Unique identifier
   */
  id: string;

  /**
   * A name for the retriever tool. Will default to the pipeline name if not
   * provided.
   */
  name: string;

  /**
   * The ID of the project this retriever resides in.
   */
  project_id: string;

  /**
   * Creation datetime
   */
  created_at?: string | null;

  /**
   * The pipelines this retriever uses.
   */
  pipelines?: Array<RetrieverPipeline>;

  /**
   * Update datetime
   */
  updated_at?: string | null;
}

export interface RetrieverCreate {
  /**
   * A name for the retriever tool. Will default to the pipeline name if not
   * provided.
   */
  name: string;

  /**
   * The pipelines this retriever uses.
   */
  pipelines?: Array<RetrieverPipeline>;
}

export interface RetrieverPipeline {
  /**
   * A description of the retriever tool.
   */
  description: string | null;

  /**
   * A name for the retriever tool. Will default to the pipeline name if not
   * provided.
   */
  name: string | null;

  /**
   * The ID of the pipeline this tool uses.
   */
  pipeline_id: string;

  /**
   * Parameters for retrieval configuration.
   */
  preset_retrieval_parameters?: PipelinesAPI.PresetRetrievalParams;
}

export type RetrieverListResponse = Array<Retriever>;

export interface RetrieverCreateParams {
  /**
   * Body param: A name for the retriever tool. Will default to the pipeline name if
   * not provided.
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
   * Body param: The pipelines this retriever uses.
   */
  pipelines?: Array<RetrieverPipeline>;
}

export interface RetrieverUpdateParams {
  /**
   * The pipelines this retriever uses.
   */
  pipelines: Array<RetrieverPipeline> | null;

  /**
   * A name for the retriever.
   */
  name?: string | null;
}

export interface RetrieverListParams {
  name?: string | null;

  organization_id?: string | null;

  project_id?: string | null;
}

export interface RetrieverRetrieveDirectParams {
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
   * Body param: The mode of composite retrieval.
   */
  mode?: RetrieveAPI.CompositeRetrievalMode;

  /**
   * Body param: The pipelines to use for retrieval.
   */
  pipelines?: Array<RetrieverPipeline>;

  /**
   * Body param: The rerank configuration for composite retrieval.
   */
  rerank_config?: RetrieveAPI.ReRankConfig;

  /**
   * @deprecated Body param: (use rerank_config.top_n instead) The number of nodes to
   * retrieve after reranking over retrieved nodes from all retrieval tools.
   */
  rerank_top_n?: number | null;
}

export interface RetrieverUpsertParams {
  /**
   * Body param: A name for the retriever tool. Will default to the pipeline name if
   * not provided.
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
   * Body param: The pipelines this retriever uses.
   */
  pipelines?: Array<RetrieverPipeline>;
}

Retrievers.Retrieve = Retrieve;

export declare namespace Retrievers {
  export {
    type Retriever as Retriever,
    type RetrieverCreate as RetrieverCreate,
    type RetrieverPipeline as RetrieverPipeline,
    type RetrieverListResponse as RetrieverListResponse,
    type RetrieverCreateParams as RetrieverCreateParams,
    type RetrieverUpdateParams as RetrieverUpdateParams,
    type RetrieverListParams as RetrieverListParams,
    type RetrieverRetrieveDirectParams as RetrieverRetrieveDirectParams,
    type RetrieverUpsertParams as RetrieverUpsertParams,
  };

  export {
    Retrieve as Retrieve,
    type CompositeRetrievalMode as CompositeRetrievalMode,
    type CompositeRetrievalResult as CompositeRetrievalResult,
    type ReRankConfig as ReRankConfig,
  };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as PipelinesAPI from '../pipelines/pipelines';

export class Retrieve extends APIResource {}

/**
 * Enum for the mode of composite retrieval.
 */
export type CompositeRetrievalMode = 'routing' | 'full';

export interface CompositeRetrievalResult {
  /**
   * @deprecated The image nodes retrieved by the pipeline for the given query.
   * Deprecated - will soon be replaced with 'page_screenshot_nodes'.
   */
  image_nodes?: Array<PipelinesAPI.PageScreenshotNodeWithScore>;

  /**
   * The retrieved nodes from the composite retrieval.
   */
  nodes?: Array<CompositeRetrievalResult.Node>;

  /**
   * The page figure nodes retrieved by the pipeline for the given query.
   */
  page_figure_nodes?: Array<PipelinesAPI.PageFigureNodeWithScore>;
}

export namespace CompositeRetrievalResult {
  export interface Node {
    node: Node.Node;

    class_name?: string;

    score?: number | null;
  }

  export namespace Node {
    export interface Node {
      /**
       * The ID of the retrieved node.
       */
      id: string;

      /**
       * The end character index of the retrieved node in the document
       */
      end_char_idx: number | null;

      /**
       * The ID of the pipeline this node was retrieved from.
       */
      pipeline_id: string;

      /**
       * The ID of the retriever this node was retrieved from.
       */
      retriever_id: string;

      /**
       * The name of the retrieval pipeline this node was retrieved from.
       */
      retriever_pipeline_name: string;

      /**
       * The start character index of the retrieved node in the document
       */
      start_char_idx: number | null;

      /**
       * The text of the retrieved node.
       */
      text: string;

      /**
       * Metadata associated with the retrieved node.
       */
      metadata?: { [key: string]: unknown };
    }
  }
}

export interface ReRankConfig {
  /**
   * The number of nodes to retrieve after reranking over retrieved nodes from all
   * retrieval tools.
   */
  top_n?: number;

  /**
   * The type of reranker to use.
   */
  type?: 'system_default' | 'llm' | 'cohere' | 'bedrock' | 'score' | 'disabled';
}

export declare namespace Retrieve {
  export {
    type CompositeRetrievalMode as CompositeRetrievalMode,
    type CompositeRetrievalResult as CompositeRetrievalResult,
    type ReRankConfig as ReRankConfig,
  };
}

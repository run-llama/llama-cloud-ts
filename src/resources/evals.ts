// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Evals extends APIResource {
  /**
   * List supported models.
   */
  listSupportedModels(options?: RequestOptions): APIPromise<EvalListSupportedModelsResponse> {
    return this._client.get('/api/v1/evals/models', options);
  }
}

export type EvalListSupportedModelsResponse =
  Array<EvalListSupportedModelsResponse.EvalListSupportedModelsResponseItem>;

export namespace EvalListSupportedModelsResponse {
  /**
   * Response Schema for a supported eval LLM model.
   */
  export interface EvalListSupportedModelsResponseItem {
    /**
     * The details of the supported LLM model.
     */
    details: EvalListSupportedModelsResponseItem.Details;

    /**
     * The name of the supported LLM model.
     */
    name: string;

    /**
     * Whether the LLM model is enabled for use in LlamaCloud.
     */
    enabled?: boolean;
  }

  export namespace EvalListSupportedModelsResponseItem {
    /**
     * The details of the supported LLM model.
     */
    export interface Details {
      /**
       * The description of the LLM model.
       */
      description: string;

      /**
       * Whether the model supports multi-modal image input
       */
      multi_modal: boolean;

      /**
       * The name of the LLM model.
       */
      name: string;

      model_name?: string;
    }
  }
}

export declare namespace Evals {
  export { type EvalListSupportedModelsResponse as EvalListSupportedModelsResponse };
}

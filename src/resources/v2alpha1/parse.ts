// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ParsingAPI from '../v1/parsing/parsing';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Parse extends APIResource {
  /**
   * Upload File V2
   */
  uploadFile(
    params: ParseUploadFileParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ParsingAPI.ParsingJob> {
    const { organization_id, project_id } = params ?? {};
    return this._client.post('/api/v2alpha1/parse/upload', {
      query: { organization_id, project_id },
      ...options,
    });
  }
}

export interface ParseUploadFileParams {
  organization_id?: string | null;

  project_id?: string | null;
}

export declare namespace Parse {
  export { type ParseUploadFileParams as ParseUploadFileParams };
}

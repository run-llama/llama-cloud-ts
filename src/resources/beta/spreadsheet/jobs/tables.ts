// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as FilesAPI from '../../../files/files';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Tables extends APIResource {
  /**
   * Generate a presigned URL to download a specific extracted table. Experimental:
   * This endpoint is not yet ready for production use and is subject to change at
   * any time.
   */
  retrieve(
    tableType: 'table' | 'cell_metadata',
    params: TableRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<FilesAPI.PresignedURL> {
    const { spreadsheet_job_id, table_id, ...query } = params;
    return this._client.get(
      path`/api/v1/beta/spreadsheet/jobs/${spreadsheet_job_id}/tables/${table_id}/result/${tableType}`,
      { query, ...options },
    );
  }
}

export interface TableRetrieveParams {
  /**
   * Path param:
   */
  spreadsheet_job_id: string;

  /**
   * Path param:
   */
  table_id: string;

  /**
   * Query param:
   */
  expires_at_seconds?: number | null;

  /**
   * Query param:
   */
  organization_id?: string | null;

  /**
   * Query param:
   */
  project_id?: string | null;
}

export declare namespace Tables {
  export { type TableRetrieveParams as TableRetrieveParams };
}

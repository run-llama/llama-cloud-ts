// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as FilesAPI from '../../../files/files';
import * as ParsingAPI from '../../../parsing/parsing';
import * as TablesAPI from './tables';
import { TableRetrieveParams, Tables } from './tables';
import { APIPromise } from '../../../../core/api-promise';
import {
  PagePromise,
  PaginatedClassifyJobs,
  type PaginatedClassifyJobsParams,
} from '../../../../core/pagination';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Jobs extends APIResource {
  tables: TablesAPI.Tables = new TablesAPI.Tables(this._client);

  /**
   * Create a spreadsheet parsing job. Experimental: This endpoint is not yet ready
   * for production use and is subject to change at any time.
   */
  create(params: JobCreateParams, options?: RequestOptions): APIPromise<SpreadsheetJob> {
    const { organization_id, project_id, ...body } = params;
    return this._client.post('/api/v1/beta/spreadsheet/jobs', {
      query: { organization_id, project_id },
      body,
      ...options,
    });
  }

  /**
   * Get a spreadsheet parsing job.
   *
   * When include_results=True (default), the response will include extracted tables
   * and results if the job is complete, eliminating the need for a separate /results
   * call.
   *
   * Experimental: This endpoint is not yet ready for production use and is subject
   * to change at any time.
   */
  retrieve(
    spreadsheetJobID: string,
    query: JobRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SpreadsheetJob> {
    return this._client.get(path`/api/v1/beta/spreadsheet/jobs/${spreadsheetJobID}`, { query, ...options });
  }

  /**
   * List spreadsheet parsing jobs. Experimental: This endpoint is not yet ready for
   * production use and is subject to change at any time.
   */
  list(
    query: JobListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SpreadsheetJobsPaginatedClassifyJobs, SpreadsheetJob> {
    return this._client.getAPIList('/api/v1/beta/spreadsheet/jobs', PaginatedClassifyJobs<SpreadsheetJob>, {
      query,
      ...options,
    });
  }
}

export type SpreadsheetJobsPaginatedClassifyJobs = PaginatedClassifyJobs<SpreadsheetJob>;

/**
 * A spreadsheet parsing job
 */
export interface SpreadsheetJob {
  /**
   * The ID of the job
   */
  id: string;

  /**
   * Configuration for the parsing job
   */
  config: SpreadsheetParsingConfig;

  /**
   * When the job was created
   */
  created_at: string;

  /**
   * The file to process
   */
  file: FilesAPI.File;

  /**
   * The ID of the project
   */
  project_id: string;

  /**
   * The status of the parsing job
   */
  status: ParsingAPI.StatusEnum;

  /**
   * When the job was last updated
   */
  updated_at: string;

  /**
   * The ID of the user
   */
  user_id: string;

  /**
   * Any errors encountered
   */
  errors?: Array<string>;

  /**
   * Whether the job completed successfully
   */
  success?: boolean | null;

  /**
   * All extracted tables (populated when job is complete)
   */
  tables?: Array<SpreadsheetJob.Table>;

  /**
   * Metadata for each processed worksheet (populated when job is complete)
   */
  worksheet_metadata?: Array<SpreadsheetJob.WorksheetMetadata>;
}

export namespace SpreadsheetJob {
  /**
   * A summary of a single extracted table from a spreadsheet
   */
  export interface Table {
    /**
     * Worksheet name where table was found
     */
    sheet_name: string;

    /**
     * Location of the table in the spreadsheet
     */
    table_location: string;

    /**
     * JSON metadata with detailed table information
     */
    metadata_json?: string | null;

    /**
     * Unique identifier for this table within the file
     */
    table_id?: string;
  }

  /**
   * Metadata about a worksheet in a spreadsheet
   */
  export interface WorksheetMetadata {
    /**
     * Name of the worksheet
     */
    sheet_name: string;

    /**
     * Generated description of the worksheet
     */
    description?: string | null;

    /**
     * Generated title for the worksheet
     */
    title?: string | null;
  }
}

/**
 * Configuration for spreadsheet parsing and table extraction
 */
export interface SpreadsheetParsingConfig {
  /**
   * A1 notation of the range to extract a single table from. If None, the entire
   * sheet is used.
   */
  extraction_range?: string | null;

  /**
   * Whether to generate additional metadata (title, description) for each extracted
   * table.
   */
  generate_additional_metadata?: boolean;

  /**
   * Whether to include hidden cells when extracting tables from the spreadsheet.
   */
  include_hidden_cells?: boolean;

  /**
   * The names of the sheets to extract tables from. If empty, the default sheet is
   * extracted.
   */
  sheet_names?: Array<string> | null;

  /**
   * Enables experimental processing. Accuracy may be impacted.
   */
  use_experimental_processing?: boolean;
}

export interface JobCreateParams {
  /**
   * Body param: The ID of the file to parse
   */
  file_id: string;

  /**
   * Query param:
   */
  organization_id?: string | null;

  /**
   * Query param:
   */
  project_id?: string | null;

  /**
   * Body param: Configuration for the parsing job
   */
  config?: SpreadsheetParsingConfig;
}

export interface JobRetrieveParams {
  include_results?: boolean;

  organization_id?: string | null;

  project_id?: string | null;
}

export interface JobListParams extends PaginatedClassifyJobsParams {
  include_results?: boolean;

  organization_id?: string | null;

  project_id?: string | null;
}

Jobs.Tables = Tables;

export declare namespace Jobs {
  export {
    type SpreadsheetJob as SpreadsheetJob,
    type SpreadsheetParsingConfig as SpreadsheetParsingConfig,
    type SpreadsheetJobsPaginatedClassifyJobs as SpreadsheetJobsPaginatedClassifyJobs,
    type JobCreateParams as JobCreateParams,
    type JobRetrieveParams as JobRetrieveParams,
    type JobListParams as JobListParams,
  };

  export { Tables as Tables, type TableRetrieveParams as TableRetrieveParams };
}

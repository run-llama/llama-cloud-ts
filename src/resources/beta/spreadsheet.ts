// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as FilesAPI from '../files/files';
import * as ParsingAPI from '../parsing/parsing';
import { APIPromise } from '../../core/api-promise';
import { PagePromise, PaginatedClassifyJobs, type PaginatedClassifyJobsParams } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Spreadsheet extends APIResource {
  /**
   * Create a spreadsheet parsing job. Experimental: This endpoint is not yet ready
   * for production use and is subject to change at any time.
   */
  create(params: SpreadsheetCreateParams, options?: RequestOptions): APIPromise<SpreadsheetJob> {
    const { organization_id, project_id, ...body } = params;
    return this._client.post('/api/v1/beta/spreadsheet/jobs', {
      query: { organization_id, project_id },
      body,
      ...options,
    });
  }

  /**
   * List spreadsheet parsing jobs. Experimental: This endpoint is not yet ready for
   * production use and is subject to change at any time.
   */
  list(
    query: SpreadsheetListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SpreadsheetJobsPaginatedClassifyJobs, SpreadsheetJob> {
    return this._client.getAPIList('/api/v1/beta/spreadsheet/jobs', PaginatedClassifyJobs<SpreadsheetJob>, {
      query,
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
  get(
    spreadsheetJobID: string,
    query: SpreadsheetGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SpreadsheetJob> {
    return this._client.get(path`/api/v1/beta/spreadsheet/jobs/${spreadsheetJobID}`, { query, ...options });
  }

  /**
   * Generate a presigned URL to download a specific extracted table. Experimental:
   * This endpoint is not yet ready for production use and is subject to change at
   * any time.
   */
  getResultTable(
    tableType: 'table' | 'cell_metadata',
    params: SpreadsheetGetResultTableParams,
    options?: RequestOptions,
  ): APIPromise<FilesAPI.PresignedURL> {
    const { spreadsheet_job_id, table_id, ...query } = params;
    return this._client.get(
      path`/api/v1/beta/spreadsheet/jobs/${spreadsheet_job_id}/tables/${table_id}/result/${tableType}`,
      { query, ...options },
    );
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

export interface SpreadsheetCreateParams {
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

export interface SpreadsheetListParams extends PaginatedClassifyJobsParams {
  include_results?: boolean;

  organization_id?: string | null;

  project_id?: string | null;
}

export interface SpreadsheetGetParams {
  include_results?: boolean;

  organization_id?: string | null;

  project_id?: string | null;
}

export interface SpreadsheetGetResultTableParams {
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

export declare namespace Spreadsheet {
  export {
    type SpreadsheetJob as SpreadsheetJob,
    type SpreadsheetParsingConfig as SpreadsheetParsingConfig,
    type SpreadsheetJobsPaginatedClassifyJobs as SpreadsheetJobsPaginatedClassifyJobs,
    type SpreadsheetCreateParams as SpreadsheetCreateParams,
    type SpreadsheetListParams as SpreadsheetListParams,
    type SpreadsheetGetParams as SpreadsheetGetParams,
    type SpreadsheetGetResultTableParams as SpreadsheetGetResultTableParams,
  };
}

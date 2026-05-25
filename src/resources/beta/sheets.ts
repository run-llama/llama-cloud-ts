// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as FilesAPI from '../files';
import * as ParsingAPI from '../parsing';
import { APIPromise } from '../../core/api-promise';
import { PagePromise, PaginatedCursor, type PaginatedCursorParams } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Sheets extends APIResource {
  /**
   * Create a spreadsheet parsing job. Experimental: not production-ready and subject
   * to change.
   *
   * @example
   * ```ts
   * const sheetsJob = await client.beta.sheets.create({
   *   file_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * });
   * ```
   */
  create(params: SheetCreateParams, options?: RequestOptions): APIPromise<SheetsJob> {
    const { organization_id, project_id, ...body } = params;
    return this._client.post('/api/v1/beta/sheets/jobs', {
      query: { organization_id, project_id },
      body,
      ...options,
    });
  }

  /**
   * List spreadsheet parsing jobs. Experimental: not production-ready and subject to
   * change.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const sheetsJob of client.beta.sheets.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: SheetListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SheetsJobsPaginatedCursor, SheetsJob> {
    return this._client.getAPIList('/api/v1/beta/sheets/jobs', PaginatedCursor<SheetsJob>, {
      query,
      ...options,
    });
  }

  /**
   * Delete a spreadsheet parsing job and its associated data. Experimental: not
   * production-ready and subject to change.
   *
   * @example
   * ```ts
   * const response = await client.beta.sheets.deleteJob(
   *   'spreadsheet_job_id',
   * );
   * ```
   */
  deleteJob(
    spreadsheetJobID: string,
    params: SheetDeleteJobParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { organization_id, project_id } = params ?? {};
    return this._client.delete(path`/api/v1/beta/sheets/jobs/${spreadsheetJobID}`, {
      query: { organization_id, project_id },
      ...options,
    });
  }

  /**
   * Get a spreadsheet parsing job. When `include_results=True` (default), embeds
   * extracted regions and results if complete, skipping the separate `/results`
   * call. Experimental: not production-ready and subject to change.
   *
   * @example
   * ```ts
   * const sheetsJob = await client.beta.sheets.get(
   *   'spreadsheet_job_id',
   * );
   * ```
   */
  get(
    spreadsheetJobID: string,
    query: SheetGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SheetsJob> {
    return this._client.get(path`/api/v1/beta/sheets/jobs/${spreadsheetJobID}`, { query, ...options });
  }

  /**
   * Generate a presigned URL to download a specific extracted region. Experimental:
   * not production-ready and subject to change.
   *
   * @example
   * ```ts
   * const presignedURL =
   *   await client.beta.sheets.getResultTable('table', {
   *     spreadsheet_job_id: 'spreadsheet_job_id',
   *     region_id: 'region_id',
   *   });
   * ```
   */
  getResultTable(
    regionType: 'table' | 'extra' | 'cell_metadata',
    params: SheetGetResultTableParams,
    options?: RequestOptions,
  ): APIPromise<FilesAPI.PresignedURL> {
    const { spreadsheet_job_id, region_id, ...query } = params;
    return this._client.get(
      path`/api/v1/beta/sheets/jobs/${spreadsheet_job_id}/regions/${region_id}/result/${regionType}`,
      { query, ...options },
    );
  }
}

export type SheetsJobsPaginatedCursor = PaginatedCursor<SheetsJob>;

/**
 * A spreadsheet parsing job
 */
export interface SheetsJob {
  /**
   * The ID of the job
   */
  id: string;

  /**
   * Configuration for the parsing job
   */
  config: SheetsParsingConfig;

  /**
   * When the job was created
   */
  created_at: string;

  /**
   * The ID of the input file
   */
  file_id: string | null;

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
   * @deprecated Schema for a file.
   */
  file?: FilesAPI.File | null;

  /**
   * All extracted regions (populated when job is complete)
   */
  regions?: Array<SheetsJob.Region>;

  /**
   * Whether the job completed successfully
   */
  success?: boolean | null;

  /**
   * Metadata for each processed worksheet (populated when job is complete)
   */
  worksheet_metadata?: Array<SheetsJob.WorksheetMetadata>;
}

export namespace SheetsJob {
  /**
   * A summary of a single extracted region from a spreadsheet
   */
  export interface Region {
    /**
     * Location of the region in the spreadsheet
     */
    location: string;

    /**
     * Type of the extracted region
     */
    region_type: string;

    /**
     * Worksheet name where region was found
     */
    sheet_name: string;

    /**
     * Generated description for the region
     */
    description?: string | null;

    /**
     * Unique identifier for this region within the file
     */
    region_id?: string;

    /**
     * Generated title for the region
     */
    title?: string | null;
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
 * Configuration for spreadsheet parsing and region extraction
 */
export interface SheetsParsingConfig {
  /**
   * A1 notation of the range to extract a single region from. If None, the entire
   * sheet is used.
   */
  extraction_range?: string | null;

  /**
   * Return a flattened dataframe when a detected table is recognized as
   * hierarchical.
   */
  flatten_hierarchical_tables?: boolean;

  /**
   * Whether to generate additional metadata (title, description) for each extracted
   * region.
   */
  generate_additional_metadata?: boolean;

  /**
   * Whether to include hidden cells when extracting regions from the spreadsheet.
   */
  include_hidden_cells?: boolean;

  /**
   * The names of the sheets to extract regions from. If empty, all sheets will be
   * processed.
   */
  sheet_names?: Array<string> | null;

  /**
   * Optional specialization mode for domain-specific extraction. Supported values:
   * 'financial-standard', 'financial-enhanced', 'financial-precise'. Default None
   * uses the general-purpose pipeline.
   */
  specialization?: string | null;

  /**
   * Influences how likely similar-looking regions are merged into a single table.
   * Useful for spreadsheets that either have sparse tables (strong merging) or many
   * distinct tables close together (weak merging).
   */
  table_merge_sensitivity?: 'strong' | 'weak';

  /**
   * Enables experimental processing. Accuracy may be impacted.
   */
  use_experimental_processing?: boolean;
}

export type SheetDeleteJobResponse = unknown;

export interface SheetCreateParams {
  /**
   * Body param: The ID of the file to parse
   */
  file_id: string;

  /**
   * Query param
   */
  organization_id?: string | null;

  /**
   * Query param
   */
  project_id?: string | null;

  /**
   * Body param: Configuration for the parsing job
   */
  config?: SheetsParsingConfig;
}

export interface SheetListParams extends PaginatedCursorParams {
  /**
   * Include items created at or after this timestamp (inclusive)
   */
  created_at_on_or_after?: string | null;

  /**
   * Include items created at or before this timestamp (inclusive)
   */
  created_at_on_or_before?: string | null;

  include_results?: boolean;

  /**
   * Filter by specific job IDs
   */
  job_ids?: Array<string> | null;

  organization_id?: string | null;

  project_id?: string | null;

  /**
   * Filter by job status
   */
  status?: ParsingAPI.StatusEnum | null;
}

export interface SheetDeleteJobParams {
  organization_id?: string | null;

  project_id?: string | null;
}

export interface SheetGetParams {
  include_results?: boolean;

  organization_id?: string | null;

  project_id?: string | null;
}

export interface SheetGetResultTableParams {
  /**
   * Path param
   */
  spreadsheet_job_id: string;

  /**
   * Path param
   */
  region_id: string;

  /**
   * Query param
   */
  expires_at_seconds?: number | null;

  /**
   * Query param
   */
  organization_id?: string | null;

  /**
   * Query param
   */
  project_id?: string | null;
}

export declare namespace Sheets {
  export {
    type SheetsJob as SheetsJob,
    type SheetsParsingConfig as SheetsParsingConfig,
    type SheetDeleteJobResponse as SheetDeleteJobResponse,
    type SheetsJobsPaginatedCursor as SheetsJobsPaginatedCursor,
    type SheetCreateParams as SheetCreateParams,
    type SheetListParams as SheetListParams,
    type SheetDeleteJobParams as SheetDeleteJobParams,
    type SheetGetParams as SheetGetParams,
    type SheetGetResultTableParams as SheetGetResultTableParams,
  };
}

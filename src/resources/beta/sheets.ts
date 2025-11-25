// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as FilesAPI from '../files';
import * as ParsingAPI from '../parsing/parsing';
import { APIPromise } from '../../core/api-promise';
import { PagePromise, PaginatedClassifyJobs, type PaginatedClassifyJobsParams } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Sheets extends APIResource {
  /**
   * Create a spreadsheet parsing job. Experimental: This endpoint is not yet ready
   * for production use and is subject to change at any time.
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
   * List spreadsheet parsing jobs. Experimental: This endpoint is not yet ready for
   * production use and is subject to change at any time.
   */
  list(
    query: SheetListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SheetsJobsPaginatedClassifyJobs, SheetsJob> {
    return this._client.getAPIList('/api/v1/beta/sheets/jobs', PaginatedClassifyJobs<SheetsJob>, {
      query,
      ...options,
    });
  }

  /**
   * Delete a spreadsheet parsing job and its associated data. Experimental: This
   * endpoint is not yet ready for production use and is subject to change at any
   * time.
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
   * Get a spreadsheet parsing job.
   *
   * When include_results=True (default), the response will include extracted regions
   * and results if the job is complete, eliminating the need for a separate /results
   * call.
   *
   * Experimental: This endpoint is not yet ready for production use and is subject
   * to change at any time.
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
   * This endpoint is not yet ready for production use and is subject to change at
   * any time.
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

export type SheetsJobsPaginatedClassifyJobs = PaginatedClassifyJobs<SheetsJob>;

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
  config?: SheetsParsingConfig;
}

export interface SheetListParams extends PaginatedClassifyJobsParams {
  include_results?: boolean;

  organization_id?: string | null;

  project_id?: string | null;
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
   * Path param:
   */
  spreadsheet_job_id: string;

  /**
   * Path param:
   */
  region_id: string;

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

export declare namespace Sheets {
  export {
    type SheetsJob as SheetsJob,
    type SheetsParsingConfig as SheetsParsingConfig,
    type SheetDeleteJobResponse as SheetDeleteJobResponse,
    type SheetsJobsPaginatedClassifyJobs as SheetsJobsPaginatedClassifyJobs,
    type SheetCreateParams as SheetCreateParams,
    type SheetListParams as SheetListParams,
    type SheetDeleteJobParams as SheetDeleteJobParams,
    type SheetGetParams as SheetGetParams,
    type SheetGetResultTableParams as SheetGetResultTableParams,
  };
}

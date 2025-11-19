// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as FilesAPI from '../files/files';
import * as ParsingAPI from '../parsing/parsing';

export class Spreadsheet extends APIResource {}

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
   * All extracted regions (populated when job is complete)
   */
  regions?: Array<SpreadsheetJob.Region>;

  /**
   * Whether the job completed successfully
   */
  success?: boolean | null;

  /**
   * Metadata for each processed worksheet (populated when job is complete)
   */
  worksheet_metadata?: Array<SpreadsheetJob.WorksheetMetadata>;
}

export namespace SpreadsheetJob {
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
export interface SpreadsheetParsingConfig {
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

export declare namespace Spreadsheet {
  export { type SpreadsheetJob as SpreadsheetJob, type SpreadsheetParsingConfig as SpreadsheetParsingConfig };
}

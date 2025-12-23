// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ParsingAPI from './parsing';
import { APIPromise } from '../core/api-promise';
import { PagePromise, PaginatedClassifyJobs, type PaginatedClassifyJobsParams } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Parsing extends APIResource {
  /**
   * Parse a file by file ID or URL.
   */
  create(params: ParsingCreateParams, options?: RequestOptions): APIPromise<ParsingCreateResponse> {
    const { organization_id, project_id, ...body } = params;
    return this._client.post('/api/v2alpha1/parse', {
      query: { organization_id, project_id },
      body,
      ...options,
    });
  }

  /**
   * List parse jobs for the current project with optional status filtering and
   * pagination.
   */
  list(
    query: ParsingListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ParsingListResponsesPaginatedClassifyJobs, ParsingListResponse> {
    return this._client.getAPIList('/api/v2alpha1/parse', PaginatedClassifyJobs<ParsingListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Retrieve parse job with optional expanded result data (text, markdown, items).
   */
  get(
    jobID: string,
    query: ParsingGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ParsingGetResponse> {
    return this._client.get(path`/api/v2alpha1/parse/${jobID}`, { query, ...options });
  }

  /**
   * Upload and parse a file using multipart/form-data.
   */
  uploadFile(
    params: ParsingUploadFileParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ParsingUploadFileResponse> {
    const { organization_id, project_id } = params ?? {};
    return this._client.post('/api/v2alpha1/parse/upload', {
      query: { organization_id, project_id },
      ...options,
    });
  }
}

export type ParsingListResponsesPaginatedClassifyJobs = PaginatedClassifyJobs<ParsingListResponse>;

/**
 * Enum for representing the different available page error handling modes.
 */
export type FailPageMode = 'raw_text' | 'blank_page' | 'error_message';

/**
 * Enum for supported file extensions.
 */
export type LlamaParseSupportedFileExtensions =
  | '.pdf'
  | '.doc'
  | '.docx'
  | '.docm'
  | '.dot'
  | '.dotx'
  | '.dotm'
  | '.rtf'
  | '.wps'
  | '.wpd'
  | '.sxw'
  | '.stw'
  | '.sxg'
  | '.pages'
  | '.mw'
  | '.mcw'
  | '.uot'
  | '.uof'
  | '.uos'
  | '.uop'
  | '.ppt'
  | '.pptx'
  | '.pot'
  | '.pptm'
  | '.potx'
  | '.potm'
  | '.key'
  | '.odp'
  | '.odg'
  | '.otp'
  | '.fopd'
  | '.sxi'
  | '.sti'
  | '.epub'
  | '.jpg'
  | '.jpeg'
  | '.png'
  | '.gif'
  | '.bmp'
  | '.svg'
  | '.tiff'
  | '.webp'
  | '.html'
  | '.htm'
  | '.xls'
  | '.xlsx'
  | '.xlsm'
  | '.xlsb'
  | '.xlw'
  | '.csv'
  | '.dif'
  | '.sylk'
  | '.slk'
  | '.prn'
  | '.numbers'
  | '.et'
  | '.ods'
  | '.fods'
  | '.uos1'
  | '.uos2'
  | '.dbf'
  | '.wk1'
  | '.wk2'
  | '.wk3'
  | '.wk4'
  | '.wks'
  | '.wq1'
  | '.wq2'
  | '.wb1'
  | '.wb2'
  | '.wb3'
  | '.qpw'
  | '.xlr'
  | '.eth'
  | '.tsv';

/**
 * Response schema for a parsing job.
 */
export interface ParsingJob {
  id: string;

  /**
   * Enum for representing the status of a job
   */
  status: StatusEnum;

  error_code?: string | null;

  error_message?: string | null;
}

/**
 * Enum for representing the languages supported by the parser.
 */
export type ParsingLanguages =
  | 'af'
  | 'az'
  | 'bs'
  | 'cs'
  | 'cy'
  | 'da'
  | 'de'
  | 'en'
  | 'es'
  | 'et'
  | 'fr'
  | 'ga'
  | 'hr'
  | 'hu'
  | 'id'
  | 'is'
  | 'it'
  | 'ku'
  | 'la'
  | 'lt'
  | 'lv'
  | 'mi'
  | 'ms'
  | 'mt'
  | 'nl'
  | 'no'
  | 'oc'
  | 'pi'
  | 'pl'
  | 'pt'
  | 'ro'
  | 'rs_latin'
  | 'sk'
  | 'sl'
  | 'sq'
  | 'sv'
  | 'sw'
  | 'tl'
  | 'tr'
  | 'uz'
  | 'vi'
  | 'ar'
  | 'fa'
  | 'ug'
  | 'ur'
  | 'bn'
  | 'as'
  | 'mni'
  | 'ru'
  | 'rs_cyrillic'
  | 'be'
  | 'bg'
  | 'uk'
  | 'mn'
  | 'abq'
  | 'ady'
  | 'kbd'
  | 'ava'
  | 'dar'
  | 'inh'
  | 'che'
  | 'lbe'
  | 'lez'
  | 'tab'
  | 'tjk'
  | 'hi'
  | 'mr'
  | 'ne'
  | 'bh'
  | 'mai'
  | 'ang'
  | 'bho'
  | 'mah'
  | 'sck'
  | 'new'
  | 'gom'
  | 'sa'
  | 'bgc'
  | 'th'
  | 'ch_sim'
  | 'ch_tra'
  | 'ja'
  | 'ko'
  | 'ta'
  | 'te'
  | 'kn';

/**
 * Enum for representing the mode of parsing to be used.
 */
export type ParsingMode =
  | 'parse_page_without_llm'
  | 'parse_page_with_llm'
  | 'parse_page_with_lvm'
  | 'parse_page_with_agent'
  | 'parse_page_with_layout_agent'
  | 'parse_document_with_llm'
  | 'parse_document_with_lvm'
  | 'parse_document_with_agent';

/**
 * Enum for representing the status of a job
 */
export type StatusEnum = 'PENDING' | 'SUCCESS' | 'ERROR' | 'PARTIAL_SUCCESS' | 'CANCELLED';

/**
 * Response schema for a parse job.
 */
export interface ParsingCreateResponse {
  /**
   * Unique identifier for the parse job
   */
  id: string;

  /**
   * Job-specific parameters as JSON
   */
  parameters: { [key: string]: unknown };

  /**
   * Project this job belongs to
   */
  project_id: string;

  /**
   * Current status of the job (e.g., pending, running, completed, failed, cancelled)
   */
  status: 'pending' | 'running' | 'completed' | 'failed' | 'cancelled';

  /**
   * Creation datetime
   */
  created_at?: string | null;

  /**
   * Error message if job failed
   */
  error_message?: string | null;

  /**
   * Update datetime
   */
  updated_at?: string | null;
}

/**
 * Response schema for a parse job.
 */
export interface ParsingListResponse {
  /**
   * Unique identifier for the parse job
   */
  id: string;

  /**
   * Job-specific parameters as JSON
   */
  parameters: { [key: string]: unknown };

  /**
   * Project this job belongs to
   */
  project_id: string;

  /**
   * Current status of the job (e.g., pending, running, completed, failed, cancelled)
   */
  status: 'pending' | 'running' | 'completed' | 'failed' | 'cancelled';

  /**
   * Creation datetime
   */
  created_at?: string | null;

  /**
   * Error message if job failed
   */
  error_message?: string | null;

  /**
   * Update datetime
   */
  updated_at?: string | null;
}

/**
 * Combined parse result response with job status and optional result data.
 *
 * The job field is always present with status information. Other fields are only
 * included if requested via the corresponding flags in ParseResultRequest.
 */
export interface ParsingGetResponse {
  /**
   * Parse job status and metadata (always included)
   */
  job: ParsingGetResponse.Job;

  /**
   * Structured JSON result (if requested)
   */
  items?: ParsingGetResponse.Items | null;

  /**
   * Markdown result (if requested)
   */
  markdown?: ParsingGetResponse.Markdown | null;

  /**
   * Plain text result (if requested)
   */
  text?: ParsingGetResponse.Text | null;
}

export namespace ParsingGetResponse {
  /**
   * Parse job status and metadata (always included)
   */
  export interface Job {
    /**
     * Unique identifier for the parse job
     */
    id: string;

    /**
     * Job-specific parameters as JSON
     */
    parameters: { [key: string]: unknown };

    /**
     * Project this job belongs to
     */
    project_id: string;

    /**
     * Current status of the job (e.g., pending, running, completed, failed, cancelled)
     */
    status: 'pending' | 'running' | 'completed' | 'failed' | 'cancelled';

    /**
     * Creation datetime
     */
    created_at?: string | null;

    /**
     * Error message if job failed
     */
    error_message?: string | null;

    /**
     * Update datetime
     */
    updated_at?: string | null;
  }

  /**
   * Structured JSON result (if requested)
   */
  export interface Items {
    /**
     * List of structured pages or failed page entries
     */
    pages: Array<Items.StructuredResultPage | Items.FailedStructuredPage>;
  }

  export namespace Items {
    export interface StructuredResultPage {
      /**
       * List of structured items on the page
       */
      items: Array<
        | StructuredResultPage.TextItem
        | StructuredResultPage.HeadingItem
        | StructuredResultPage.ListItem
        | StructuredResultPage.CodeItem
        | StructuredResultPage.TableItem
        | StructuredResultPage.ImageItem
      >;

      /**
       * Page number of the document
       */
      page_number: number;

      /**
       * Success indicator
       */
      success?: true;
    }

    export namespace StructuredResultPage {
      export interface TextItem {
        /**
         * Text content
         */
        value: string;

        /**
         * Bounding box coordinates [x1, y1, x2, y2]
         */
        bBox?: Array<unknown> | null;

        /**
         * Text item type
         */
        type?: 'text';
      }

      export interface HeadingItem {
        /**
         * Heading level (1-6)
         */
        level: number;

        /**
         * Heading text content
         */
        value: string;

        /**
         * Bounding box coordinates [x1, y1, x2, y2]
         */
        bBox?: Array<unknown> | null;

        /**
         * Heading item type
         */
        type?: 'heading';
      }

      export interface ListItem {
        /**
         * List of nested text or list items
         */
        items: Array<ListItem.TextItem | unknown>;

        /**
         * Whether the list is ordered or unordered
         */
        ordered: boolean;

        /**
         * Bounding box coordinates [x1, y1, x2, y2]
         */
        bBox?: Array<unknown> | null;

        /**
         * List item type
         */
        type?: 'list';
      }

      export namespace ListItem {
        export interface TextItem {
          /**
           * Text content
           */
          value: string;

          /**
           * Bounding box coordinates [x1, y1, x2, y2]
           */
          bBox?: Array<unknown> | null;

          /**
           * Text item type
           */
          type?: 'text';
        }
      }

      export interface CodeItem {
        /**
         * Code content
         */
        value: string;

        /**
         * Bounding box coordinates [x1, y1, x2, y2]
         */
        bBox?: Array<unknown> | null;

        /**
         * Programming language identifier
         */
        language?: string | null;

        /**
         * Code block item type
         */
        type?: 'code';
      }

      export interface TableItem {
        /**
         * CSV representation of the table
         */
        csv: string;

        /**
         * HTML representation of the table
         */
        html: string;

        /**
         * Markdown representation of the table
         */
        md: string;

        /**
         * Table data as array of string arrays
         */
        rows: Array<Array<string>>;

        /**
         * Bounding box coordinates [x1, y1, x2, y2]
         */
        bBox?: Array<unknown> | null;

        /**
         * Table item type
         */
        type?: 'table';
      }

      export interface ImageItem {
        /**
         * Image filename or identifier
         */
        name: string;

        /**
         * Bounding box coordinates [x1, y1, x2, y2]
         */
        bBox?: Array<unknown> | null;

        /**
         * Image item type
         */
        type?: 'image';
      }
    }

    export interface FailedStructuredPage {
      /**
       * Error message describing the failure
       */
      error: string;

      /**
       * Page number of the document
       */
      page_number: number;

      /**
       * Failure indicator
       */
      success?: boolean;
    }
  }

  /**
   * Markdown result (if requested)
   */
  export interface Markdown {
    /**
     * List of markdown pages or failed page entries
     */
    pages: Array<Markdown.MarkdownResultPage | Markdown.FailedMarkdownPage>;
  }

  export namespace Markdown {
    export interface MarkdownResultPage {
      /**
       * Markdown content of the page
       */
      markdown: string;

      /**
       * Page number of the document
       */
      page_number: number;

      /**
       * Success indicator
       */
      success?: true;
    }

    export interface FailedMarkdownPage {
      /**
       * Error message describing the failure
       */
      error: string;

      /**
       * Page number of the document
       */
      page_number: number;

      /**
       * Failure indicator
       */
      success?: boolean;
    }
  }

  /**
   * Plain text result (if requested)
   */
  export interface Text {
    /**
     * List of text pages
     */
    pages: Array<Text.Page>;
  }

  export namespace Text {
    export interface Page {
      /**
       * Page number of the document
       */
      page_number: number;

      /**
       * Plain text content of the page
       */
      text: string;
    }
  }
}

/**
 * Response schema for a parse job.
 */
export interface ParsingUploadFileResponse {
  /**
   * Unique identifier for the parse job
   */
  id: string;

  /**
   * Job-specific parameters as JSON
   */
  parameters: { [key: string]: unknown };

  /**
   * Project this job belongs to
   */
  project_id: string;

  /**
   * Current status of the job (e.g., pending, running, completed, failed, cancelled)
   */
  status: 'pending' | 'running' | 'completed' | 'failed' | 'cancelled';

  /**
   * Creation datetime
   */
  created_at?: string | null;

  /**
   * Error message if job failed
   */
  error_message?: string | null;

  /**
   * Update datetime
   */
  updated_at?: string | null;
}

export interface ParsingCreateParams {
  /**
   * Body param: The parsing tier to use
   */
  tier: 'fast' | 'cost_effective' | 'agentic' | 'agentic_plus';

  /**
   * Query param:
   */
  organization_id?: string | null;

  /**
   * Query param:
   */
  project_id?: string | null;

  /**
   * Body param: Options for agentic tier parsing (with AI agents).
   */
  agentic_options?: ParsingCreateParams.AgenticOptions | null;

  /**
   * Body param: Name of the client making the parsing request
   */
  client_name?: string | null;

  /**
   * Body param: Document crop box boundaries
   */
  crop_box?: ParsingCreateParams.CropBox;

  /**
   * Body param: Whether to disable caching for this parsing job
   */
  disable_cache?: boolean | null;

  /**
   * Body param: Options for fast tier parsing (without AI).
   */
  fast_options?: unknown | null;

  /**
   * Body param: ID of an existing file in the project to parse
   */
  file_id?: string | null;

  /**
   * Body param: HTTP proxy URL for network requests (only used with source_url)
   */
  http_proxy?: string | null;

  /**
   * Body param: Input format-specific parsing options
   */
  input_options?: ParsingCreateParams.InputOptions;

  /**
   * Body param: Output format and styling options
   */
  output_options?: ParsingCreateParams.OutputOptions;

  /**
   * Body param: Page range selection options
   */
  page_ranges?: ParsingCreateParams.PageRanges;

  /**
   * Body param: Job processing control and failure handling
   */
  processing_control?: ParsingCreateParams.ProcessingControl;

  /**
   * Body param: Processing options shared across all tiers
   */
  processing_options?: ParsingCreateParams.ProcessingOptions;

  /**
   * Body param: Source URL to fetch document from
   */
  source_url?: string | null;

  /**
   * Body param: Version of the tier configuration
   */
  version?: '2025-12-18' | '2025-12-11' | 'latest' | (string & {});

  /**
   * Body param: List of webhook configurations for notifications
   */
  webhook_configurations?: Array<ParsingCreateParams.WebhookConfiguration>;
}

export namespace ParsingCreateParams {
  /**
   * Options for agentic tier parsing (with AI agents).
   */
  export interface AgenticOptions {
    /**
     * Custom prompt for AI-powered parsing
     */
    custom_prompt?: string | null;
  }

  /**
   * Document crop box boundaries
   */
  export interface CropBox {
    /**
     * Bottom boundary of crop box as ratio (0-1)
     */
    bottom?: number | null;

    /**
     * Left boundary of crop box as ratio (0-1)
     */
    left?: number | null;

    /**
     * Right boundary of crop box as ratio (0-1)
     */
    right?: number | null;

    /**
     * Top boundary of crop box as ratio (0-1)
     */
    top?: number | null;
  }

  /**
   * Input format-specific parsing options
   */
  export interface InputOptions {
    /**
     * HTML-specific parsing options
     */
    html?: InputOptions.HTML;

    /**
     * PDF-specific parsing options
     */
    pdf?: unknown;

    /**
     * Presentation-specific parsing options
     */
    presentation?: InputOptions.Presentation;

    /**
     * Spreadsheet-specific parsing options
     */
    spreadsheet?: InputOptions.Spreadsheet;
  }

  export namespace InputOptions {
    /**
     * HTML-specific parsing options
     */
    export interface HTML {
      /**
       * Make all HTML elements visible during parsing
       */
      make_all_elements_visible?: boolean | null;

      /**
       * Remove fixed position elements from HTML
       */
      remove_fixed_elements?: boolean | null;

      /**
       * Remove navigation elements from HTML
       */
      remove_navigation_elements?: boolean | null;
    }

    /**
     * Presentation-specific parsing options
     */
    export interface Presentation {
      /**
       * Extract out of bounds content in presentation slides
       */
      out_of_bounds_content?: boolean | null;

      /**
       * Skip extraction of embedded data for charts in presentation slides
       */
      skip_embedded_data?: boolean | null;
    }

    /**
     * Spreadsheet-specific parsing options
     */
    export interface Spreadsheet {
      /**
       * Detect and extract sub-tables within spreadsheet cells
       */
      detect_sub_tables_in_sheets?: boolean | null;

      /**
       * Force re-computation of spreadsheet cells containing formulas
       */
      force_formula_computation_in_sheets?: boolean | null;
    }
  }

  /**
   * Output format and styling options
   */
  export interface OutputOptions {
    /**
     * Embedded image extraction options
     */
    embedded_images?: OutputOptions.EmbeddedImages;

    /**
     * PDF export options
     */
    export_pdf?: OutputOptions.ExportPdf;

    /**
     * Extract printed page numbers from the document
     */
    extract_printed_page_number?: boolean | null;

    /**
     * Markdown output formatting options
     */
    markdown?: OutputOptions.Markdown;

    /**
     * Screenshot generation options
     */
    screenshots?: OutputOptions.Screenshots;

    /**
     * Spatial text output options
     */
    spatial_text?: OutputOptions.SpatialText;

    /**
     * Table export as spreadsheet options
     */
    tables_as_spreadsheet?: OutputOptions.TablesAsSpreadsheet;
  }

  export namespace OutputOptions {
    /**
     * Embedded image extraction options
     */
    export interface EmbeddedImages {
      /**
       * Whether this option is enabled
       */
      enable?: boolean | null;
    }

    /**
     * PDF export options
     */
    export interface ExportPdf {
      /**
       * Whether this option is enabled
       */
      enable?: boolean | null;
    }

    /**
     * Markdown output formatting options
     */
    export interface Markdown {
      /**
       * Add annotations to links in markdown output
       */
      annotate_links?: boolean | null;

      /**
       * Page formatting options for markdown
       */
      pages?: Markdown.Pages;

      /**
       * Table formatting options for markdown
       */
      tables?: Markdown.Tables;
    }

    export namespace Markdown {
      /**
       * Page formatting options for markdown
       */
      export interface Pages {
        /**
         * Merge tables that span across pages in markdown output
         */
        merge_tables_across_pages_in_markdown?: boolean | null;
      }

      /**
       * Table formatting options for markdown
       */
      export interface Tables {
        /**
         * Use compact formatting for markdown tables
         */
        compact_markdown_tables?: boolean | null;

        /**
         * Separator for multiline content in markdown tables
         */
        markdown_table_multiline_separator?: string | null;

        /**
         * Output tables in markdown format
         */
        output_tables_as_markdown?: boolean | null;
      }
    }

    /**
     * Screenshot generation options
     */
    export interface Screenshots {
      /**
       * Whether this option is enabled
       */
      enable?: boolean | null;
    }

    /**
     * Spatial text output options
     */
    export interface SpatialText {
      /**
       * Keep column structure intact without unrolling
       */
      do_not_unroll_columns?: boolean | null;

      /**
       * Page formatting options for spatial text
       */
      pages?: SpatialText.Pages | null;

      /**
       * Preserve text alignment across page boundaries
       */
      preserve_layout_alignment_across_pages?: boolean | null;

      /**
       * Include very small text in spatial output
       */
      preserve_very_small_text?: boolean | null;
    }

    export namespace SpatialText {
      /**
       * Page formatting options for spatial text
       */
      export interface Pages {
        /**
         * Merge tables that span across pages in markdown output
         */
        merge_tables_across_pages_in_markdown?: boolean | null;
      }
    }

    /**
     * Table export as spreadsheet options
     */
    export interface TablesAsSpreadsheet {
      /**
       * Whether this option is enabled
       */
      enable?: boolean | null;

      /**
       * Automatically guess sheet names when exporting tables
       */
      guess_sheet_name?: boolean;
    }
  }

  /**
   * Page range selection options
   */
  export interface PageRanges {
    /**
     * Maximum number of pages to process
     */
    max_pages?: number | null;

    /**
     * Specific pages to process (e.g., '1,3,5-10')
     */
    target_pages?: string | null;
  }

  /**
   * Job processing control and failure handling
   */
  export interface ProcessingControl {
    /**
     * Conditions that determine job failure
     */
    job_failure_conditions?: ProcessingControl.JobFailureConditions;

    /**
     * Timeout configuration for parsing jobs
     */
    timeouts?: ProcessingControl.Timeouts;
  }

  export namespace ProcessingControl {
    /**
     * Conditions that determine job failure
     */
    export interface JobFailureConditions {
      /**
       * Maximum ratio of pages allowed to fail (0-1)
       */
      allowed_page_failure_ratio?: number | null;

      /**
       * Fail job if buggy fonts are detected
       */
      fail_on_buggy_font?: boolean | null;

      /**
       * Fail job if image extraction encounters errors
       */
      fail_on_image_extraction_error?: boolean | null;

      /**
       * Fail job if image OCR encounters errors
       */
      fail_on_image_ocr_error?: boolean | null;

      /**
       * Fail job if markdown reconstruction encounters errors
       */
      fail_on_markdown_reconstruction_error?: boolean | null;
    }

    /**
     * Timeout configuration for parsing jobs
     */
    export interface Timeouts {
      /**
       * Base timeout in seconds (max 30 minutes)
       */
      base_in_seconds?: number | null;

      /**
       * Additional timeout per page in seconds (max 5 minutes)
       */
      extra_time_per_page_in_seconds?: number | null;
    }
  }

  /**
   * Processing options shared across all tiers
   */
  export interface ProcessingOptions {
    /**
     * Whether to use aggressive table extraction
     */
    aggressive_table_extraction?: boolean | null;

    /**
     * Options for ignoring specific text types
     */
    ignore?: ProcessingOptions.Ignore;

    /**
     * OCR configuration parameters
     */
    ocr_parameters?: ProcessingOptions.OcrParameters;
  }

  export namespace ProcessingOptions {
    /**
     * Options for ignoring specific text types
     */
    export interface Ignore {
      /**
       * Whether to ignore diagonal text in the document
       */
      ignore_diagonal_text?: boolean | null;

      /**
       * Whether to ignore hidden text in the document
       */
      ignore_hidden_text?: boolean | null;

      /**
       * Whether to ignore text that appears within images
       */
      ignore_text_in_image?: boolean | null;
    }

    /**
     * OCR configuration parameters
     */
    export interface OcrParameters {
      /**
       * List of languages to use for OCR processing
       */
      languages?: Array<ParsingAPI.ParsingLanguages> | null;
    }
  }

  export interface WebhookConfiguration {
    /**
     * List of events that trigger webhook notifications
     */
    webhook_events?: Array<string> | null;

    /**
     * Custom headers to include in webhook requests
     */
    webhook_headers?: { [key: string]: unknown } | null;

    /**
     * Webhook URL for receiving parsing notifications
     */
    webhook_url?: string | null;
  }
}

export interface ParsingListParams extends PaginatedClassifyJobsParams {
  organization_id?: string | null;

  project_id?: string | null;

  /**
   * Filter by job status (pending, running, completed, failed, cancelled)
   */
  status?: 'pending' | 'running' | 'completed' | 'failed' | 'cancelled' | null;
}

export interface ParsingGetParams {
  /**
   * List of fields to include in response. Supported values: text, markdown, items.
   * Example: ?expand=text&expand=markdown
   */
  expand?: Array<string>;

  organization_id?: string | null;

  project_id?: string | null;
}

export interface ParsingUploadFileParams {
  organization_id?: string | null;

  project_id?: string | null;
}

export declare namespace Parsing {
  export {
    type FailPageMode as FailPageMode,
    type LlamaParseSupportedFileExtensions as LlamaParseSupportedFileExtensions,
    type ParsingJob as ParsingJob,
    type ParsingLanguages as ParsingLanguages,
    type ParsingMode as ParsingMode,
    type StatusEnum as StatusEnum,
    type ParsingCreateResponse as ParsingCreateResponse,
    type ParsingListResponse as ParsingListResponse,
    type ParsingGetResponse as ParsingGetResponse,
    type ParsingUploadFileResponse as ParsingUploadFileResponse,
    type ParsingListResponsesPaginatedClassifyJobs as ParsingListResponsesPaginatedClassifyJobs,
    type ParsingCreateParams as ParsingCreateParams,
    type ParsingListParams as ParsingListParams,
    type ParsingGetParams as ParsingGetParams,
    type ParsingUploadFileParams as ParsingUploadFileParams,
  };
}

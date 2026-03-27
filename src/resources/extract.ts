// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ExtractAPI from './extract';
import * as ParsingAPI from './parsing';
import * as SplitAPI from './beta/split';
import { APIPromise } from '../core/api-promise';
import { PagePromise, PaginatedCursor, type PaginatedCursorParams } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';
import { pollUntilComplete, PollingOptions, DEFAULT_TIMEOUT } from '../core/polling';

export class Extract extends APIResource {
  /**
   * Create an extraction job.
   *
   * Extracts structured data from a document using either a saved configuration or
   * an inline JSON Schema.
   *
   * ## Input
   *
   * Provide exactly one of:
   *
   * - `configuration_id` — reference a saved extraction config
   * - `configuration` — inline configuration with a `data_schema`
   *
   * ## Document input
   *
   * Set `document_input_value` to a file ID (`dfl-...`) or a completed parse job ID
   * (`pjb-...`).
   *
   * The job runs asynchronously. Poll `GET /extract/{job_id}` or register a webhook
   * to monitor completion.
   *
   * @example
   * ```ts
   * const extractV2Job = await client.extract.create({
   *   document_input_value:
   *     'dfl-aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee',
   * });
   * ```
   */
  create(params: ExtractCreateParams, options?: RequestOptions): APIPromise<ExtractV2Job> {
    const { organization_id, project_id, ...body } = params;
    return this._client.post('/api/v2/extract', { query: { organization_id, project_id }, body, ...options });
  }

  /**
   * List extraction jobs with optional filtering and pagination.
   *
   * Filter by `configuration_id`, `status`, `document_input_value`, or creation date
   * range. Results are returned newest-first. Use `expand=configuration` to include
   * the full configuration used, and `expand=extract_metadata` for per-field
   * metadata.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const extractV2Job of client.extract.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: ExtractListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ExtractV2JobsPaginatedCursor, ExtractV2Job> {
    return this._client.getAPIList('/api/v2/extract', PaginatedCursor<ExtractV2Job>, { query, ...options });
  }

  /**
   * Delete an extraction job and its results.
   *
   * @example
   * ```ts
   * const extract = await client.extract.delete('job_id');
   * ```
   */
  delete(
    jobID: string,
    params: ExtractDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { organization_id, project_id } = params ?? {};
    return this._client.delete(path`/api/v2/extract/${jobID}`, {
      query: { organization_id, project_id },
      ...options,
    });
  }

  /**
   * Generate a JSON schema and return a product configuration request.
   *
   * @example
   * ```ts
   * const response = await client.extract.generateSchema();
   * ```
   */
  generateSchema(
    params: ExtractGenerateSchemaParams,
    options?: RequestOptions,
  ): APIPromise<ExtractGenerateSchemaResponse> {
    const { organization_id, project_id, ...body } = params;
    return this._client.post('/api/v2/extract/schema/generate', {
      query: { organization_id, project_id },
      body,
      ...options,
    });
  }

  /**
   * Get a single extraction job by ID.
   *
   * Returns the job status and results when complete. Use `expand=configuration` to
   * include the full configuration used, and `expand=extract_metadata` for per-field
   * metadata.
   *
   * @example
   * ```ts
   * const extractV2Job = await client.extract.get('job_id');
   * ```
   */
  get(
    jobID: string,
    query: ExtractGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ExtractV2Job> {
    return this._client.get(path`/api/v2/extract/${jobID}`, { query, ...options });
  }

  /**
   * Validate a JSON schema for extraction.
   *
   * @example
   * ```ts
   * const extractV2SchemaValidateResponse =
   *   await client.extract.validateSchema({
   *     data_schema: { foo: { foo: 'bar' } },
   *   });
   * ```
   */
  validateSchema(
    body: ExtractValidateSchemaParams,
    options?: RequestOptions,
  ): APIPromise<ExtractV2SchemaValidateResponse> {
    return this._client.post('/api/v2/extract/schema/validation', { body, ...options });
  }

  /**
   * Wait for an extraction job to complete by polling until it reaches a terminal state.
   *
   * @param jobID - The ID of the extraction job to wait for
   * @param query - Optional query parameters (organization_id, project_id)
   * @param options - Polling configuration and request options
   * @returns The completed extraction job
   * @throws {PollingTimeoutError} If the job doesn't complete within the timeout period
   * @throws {PollingError} If the job fails or is cancelled
   *
   * @example
   * ```typescript
   * const job = await client.extract.create({ type: 'file_id', value: 'file-abc123' });
   *
   * const completed = await client.extract.waitForCompletion(job.id, undefined, { verbose: true });
   * console.log(completed.extract_result);
   * ```
   */
  async waitForCompletion(
    jobID: string,
    query?: ExtractGetParams,
    options?: PollingOptions & RequestOptions,
  ): Promise<ExtractV2Job> {
    const { pollingInterval, maxInterval, timeout, backoff, verbose, ...requestOptions } = options || {};

    const getStatus = async (): Promise<ExtractV2Job> => {
      return await this.get(jobID, query, requestOptions);
    };

    const isComplete = (job: ExtractV2Job): boolean => {
      return job.status === 'COMPLETED';
    };

    const isError = (job: ExtractV2Job): boolean => {
      return job.status === 'FAILED' || job.status === 'CANCELLED';
    };

    const getErrorMessage = (job: ExtractV2Job): string => {
      const errorParts = [`Job ${jobID} failed with status: ${job.status}`];
      if (job.error_message) {
        errorParts.push(`Error: ${job.error_message}`);
      }
      return errorParts.join(' | ');
    };

    return await pollUntilComplete(getStatus, isComplete, isError, getErrorMessage, {
      pollingInterval,
      maxInterval,
      timeout: timeout || DEFAULT_TIMEOUT,
      backoff,
      verbose,
    });
  }

  /**
   * Create an extraction job, wait for it to complete, and return the result.
   *
   * This is a convenience method that combines create() and waitForCompletion()
   * into a single call for the most common end-to-end workflow.
   *
   * @param params - Extract job creation parameters
   * @param options - Polling configuration and request options
   * @returns The completed extraction job with extract_result populated
   * @throws {PollingTimeoutError} If the job doesn't complete within the timeout period
   * @throws {PollingError} If the job fails or is cancelled
   *
   * @example
   * ```typescript
   * import { LlamaCloud } from 'llama-cloud';
   *
   * const client = new LlamaCloud({ apiKey: '...' });
   *
   * const result = await client.extract.run({
   *   type: 'file_id',
   *   value: 'file-abc123',
   *   config: { extract_options: { data_schema: { ... } } },
   * }, { verbose: true });
   *
   * console.log(result.extract_result);
   * ```
   */
  async run(params: ExtractCreateParams, options?: PollingOptions & RequestOptions): Promise<ExtractV2Job> {
    const { pollingInterval, maxInterval, timeout, backoff, verbose, ...requestOptions } = options || {};

    const job = await this.create(params, requestOptions);

    const getQuery: ExtractGetParams = {};
    if (params.organization_id !== undefined) {
      getQuery.organization_id = params.organization_id;
    }
    if (params.project_id !== undefined) {
      getQuery.project_id = params.project_id;
    }

    return await this.waitForCompletion(job.id, getQuery, {
      pollingInterval,
      maxInterval,
      timeout: timeout || DEFAULT_TIMEOUT,
      backoff,
      verbose,
      ...requestOptions,
    });
  }
}

export type ExtractV2JobsPaginatedCursor = PaginatedCursor<ExtractV2Job>;

/**
 * Extract configuration combining parse and extract settings.
 */
export interface ExtractConfiguration {
  /**
   * JSON Schema defining the fields to extract. Validate with the /schema/validate
   * endpoint first.
   */
  data_schema: {
    [key: string]: { [key: string]: unknown } | Array<unknown> | string | number | boolean | null;
  };

  /**
   * Include citations in results
   */
  cite_sources?: boolean;

  /**
   * Include confidence scores in results
   */
  confidence_scores?: boolean;

  /**
   * Extract algorithm version. Use 'latest' or a date string.
   */
  extract_version?: string;

  /**
   * Granularity of extraction: per_doc returns one object per document, per_page
   * returns one object per page, per_table_row returns one object per table row
   */
  extraction_target?: 'per_doc' | 'per_page' | 'per_table_row';

  /**
   * ISO 639-1 language code for the document
   */
  lang?: string;

  /**
   * Maximum number of pages to process. Omit for no limit.
   */
  max_pages?: number | null;

  /**
   * Saved parse configuration ID to control how the document is parsed before
   * extraction
   */
  parse_config_id?: string | null;

  /**
   * Parse tier to use before extraction (fast, cost_effective, or agentic)
   */
  parse_tier?: string | null;

  /**
   * Custom system prompt to guide extraction behavior
   */
  system_prompt?: string | null;

  /**
   * Comma-separated page numbers or ranges to process (1-based). Omit to process all
   * pages.
   */
  target_pages?: string | null;

  /**
   * Extract tier: cost_effective (5 credits/page) or agentic (15 credits/page)
   */
  tier?: 'cost_effective' | 'agentic';
}

/**
 * Extraction metadata.
 */
export interface ExtractJobMetadata {
  /**
   * Metadata for extracted fields including document, page, and row level info.
   */
  field_metadata?: ExtractedFieldMetadata | null;

  /**
   * Reference to the ParseJob ID used for parsing
   */
  parse_job_id?: string | null;

  /**
   * Parse tier used for parsing the document
   */
  parse_tier?: string | null;
}

/**
 * Extraction usage metrics.
 */
export interface ExtractJobUsage {
  /**
   * Number of document tokens
   */
  num_document_tokens?: number | null;

  /**
   * Number of output tokens
   */
  num_output_tokens?: number | null;

  /**
   * Number of pages extracted
   */
  num_pages_extracted?: number | null;
}

/**
 * An extraction job.
 */
export interface ExtractV2Job {
  /**
   * Unique job identifier (job_id)
   */
  id: string;

  /**
   * Creation timestamp
   */
  created_at: string;

  /**
   * File ID or parse job ID that was extracted
   */
  document_input_value: string;

  /**
   * Project this job belongs to
   */
  project_id: string;

  /**
   * Current job status.
   *
   * - `PENDING` — queued, not yet started
   * - `RUNNING` — actively processing
   * - `COMPLETED` — finished successfully
   * - `FAILED` — terminated with an error
   * - `CANCELLED` — cancelled by user
   */
  status: string;

  /**
   * Last update timestamp
   */
  updated_at: string;

  /**
   * Extract configuration combining parse and extract settings.
   */
  configuration?: ExtractConfiguration | null;

  /**
   * Saved extract configuration ID used for this job, if any
   */
  configuration_id?: string | null;

  /**
   * Error details when status is FAILED
   */
  error_message?: string | null;

  /**
   * Extraction metadata.
   */
  extract_metadata?: ExtractJobMetadata | null;

  /**
   * Extracted data conforming to the data_schema. Returns a single object for
   * per_doc, or an array for per_page / per_table_row.
   */
  extract_result?:
    | { [key: string]: { [key: string]: unknown } | Array<unknown> | string | number | boolean | null }
    | Array<{ [key: string]: { [key: string]: unknown } | Array<unknown> | string | number | boolean | null }>
    | null;

  /**
   * Job-level metadata.
   */
  metadata?: ExtractV2Job.Metadata | null;
}

export namespace ExtractV2Job {
  /**
   * Job-level metadata.
   */
  export interface Metadata {
    /**
     * Extraction usage metrics.
     */
    usage?: ExtractAPI.ExtractJobUsage | null;

    [k: string]: unknown;
  }
}

/**
 * Request to create an extraction job. Provide configuration_id or inline
 * configuration.
 */
export interface ExtractV2JobCreate {
  /**
   * File ID or Parse Job ID to extract from
   */
  document_input_value: string;

  /**
   * Extract configuration combining parse and extract settings.
   */
  configuration?: ExtractConfiguration | null;

  /**
   * Saved extract configuration ID (mutually exclusive with configuration)
   */
  configuration_id?: string | null;

  /**
   * Outbound webhook endpoints to notify on job status changes
   */
  webhook_configurations?: Array<ExtractV2JobCreate.WebhookConfiguration> | null;
}

export namespace ExtractV2JobCreate {
  /**
   * Configuration for a single outbound webhook endpoint.
   */
  export interface WebhookConfiguration {
    /**
     * Events to subscribe to (e.g. 'parse.success', 'extract.error'). If null, all
     * events are delivered.
     */
    webhook_events?: Array<
      | 'extract.pending'
      | 'extract.success'
      | 'extract.error'
      | 'extract.partial_success'
      | 'extract.cancelled'
      | 'parse.pending'
      | 'parse.running'
      | 'parse.success'
      | 'parse.error'
      | 'parse.partial_success'
      | 'parse.cancelled'
      | 'classify.pending'
      | 'classify.success'
      | 'classify.error'
      | 'classify.partial_success'
      | 'classify.cancelled'
      | 'unmapped_event'
    > | null;

    /**
     * Custom HTTP headers sent with each webhook request (e.g. auth tokens)
     */
    webhook_headers?: { [key: string]: string } | null;

    /**
     * Response format sent to the webhook: 'string' (default) or 'json'
     */
    webhook_output_format?: string | null;

    /**
     * URL to receive webhook POST notifications
     */
    webhook_url?: string | null;
  }
}

/**
 * Paginated list of extraction jobs.
 */
export interface ExtractV2JobQueryResponse {
  /**
   * The list of items.
   */
  items: Array<ExtractV2Job>;

  /**
   * A token, which can be sent as page_token to retrieve the next page. If this
   * field is omitted, there are no subsequent pages.
   */
  next_page_token?: string | null;

  /**
   * The total number of items available. This is only populated when specifically
   * requested. The value may be an estimate and can be used for display purposes
   * only.
   */
  total_size?: number | null;
}

/**
 * Request schema for generating an extraction schema.
 */
export interface ExtractV2SchemaGenerateRequest {
  /**
   * Optional schema to validate, refine, or extend
   */
  data_schema?: {
    [key: string]: { [key: string]: unknown } | Array<unknown> | string | number | boolean | null;
  } | null;

  /**
   * Optional file ID to analyze for schema generation
   */
  file_id?: string | null;

  /**
   * Name for the generated configuration (auto-generated if omitted)
   */
  name?: string | null;

  /**
   * Natural language description of the data structure to extract
   */
  prompt?: string | null;
}

/**
 * Request schema for validating an extraction schema.
 */
export interface ExtractV2SchemaValidateRequest {
  /**
   * JSON Schema to validate for use with extract jobs
   */
  data_schema: {
    [key: string]: { [key: string]: unknown } | Array<unknown> | string | number | boolean | null;
  };
}

/**
 * Response schema for schema validation.
 */
export interface ExtractV2SchemaValidateResponse {
  /**
   * Validated JSON Schema, ready for use in extract jobs
   */
  data_schema: {
    [key: string]: { [key: string]: unknown } | Array<unknown> | string | number | boolean | null;
  };
}

/**
 * Metadata for extracted fields including document, page, and row level info.
 */
export interface ExtractedFieldMetadata {
  /**
   * Document-level metadata (citations, confidence) keyed by field name
   */
  document_metadata?: {
    [key: string]: { [key: string]: unknown } | Array<unknown> | string | number | boolean | null;
  } | null;

  /**
   * Per-page metadata when extraction_target is per_page
   */
  page_metadata?: Array<{
    [key: string]: { [key: string]: unknown } | Array<unknown> | string | number | boolean | null;
  }> | null;

  /**
   * Per-row metadata when extraction_target is per_table_row
   */
  row_metadata?: Array<{
    [key: string]: { [key: string]: unknown } | Array<unknown> | string | number | boolean | null;
  }> | null;
}

export type ExtractDeleteResponse = unknown;

/**
 * Request body for creating a product configuration.
 */
export interface ExtractGenerateSchemaResponse {
  /**
   * Human-readable name for this configuration.
   */
  name: string;

  /**
   * Product-specific configuration parameters.
   */
  parameters:
    | ExtractGenerateSchemaResponse.SplitV1Parameters
    | ExtractGenerateSchemaResponse.ExtractV2Parameters
    | ExtractGenerateSchemaResponse.ClassifyV2Parameters
    | ExtractGenerateSchemaResponse.ParseV2Parameters
    | ExtractGenerateSchemaResponse.UntypedParameters;
}

export namespace ExtractGenerateSchemaResponse {
  /**
   * Typed parameters for a _split v1_ product configuration.
   */
  export interface SplitV1Parameters {
    /**
     * Categories to split documents into.
     */
    categories: Array<SplitAPI.SplitCategory>;

    /**
     * Product type.
     */
    product_type: 'split_v1';

    /**
     * Strategy for splitting documents.
     */
    splitting_strategy?: SplitV1Parameters.SplittingStrategy;
  }

  export namespace SplitV1Parameters {
    /**
     * Strategy for splitting documents.
     */
    export interface SplittingStrategy {
      /**
       * Controls handling of pages that don't match any category. 'include': pages can
       * be grouped as 'uncategorized' and included in results. 'forbid': all pages must
       * be assigned to a defined category. 'omit': pages can be classified as
       * 'uncategorized' but are excluded from results.
       */
      allow_uncategorized?: 'include' | 'forbid' | 'omit';
    }
  }

  /**
   * Typed parameters for an _extract v2_ product configuration.
   */
  export interface ExtractV2Parameters {
    /**
     * JSON Schema defining the fields to extract. Validate with the /schema/validate
     * endpoint first.
     */
    data_schema: {
      [key: string]: { [key: string]: unknown } | Array<unknown> | string | number | boolean | null;
    };

    /**
     * Product type.
     */
    product_type: 'extract_v2';

    /**
     * Include citations in results
     */
    cite_sources?: boolean;

    /**
     * Include confidence scores in results
     */
    confidence_scores?: boolean;

    /**
     * Extract algorithm version. Use 'latest' or a date string.
     */
    extract_version?: string;

    /**
     * Granularity of extraction: per_doc returns one object per document, per_page
     * returns one object per page, per_table_row returns one object per table row
     */
    extraction_target?: 'per_doc' | 'per_page' | 'per_table_row';

    /**
     * ISO 639-1 language code for the document
     */
    lang?: string;

    /**
     * Maximum number of pages to process. Omit for no limit.
     */
    max_pages?: number | null;

    /**
     * Saved parse configuration ID to control how the document is parsed before
     * extraction
     */
    parse_config_id?: string | null;

    /**
     * Parse tier to use before extraction (fast, cost_effective, or agentic)
     */
    parse_tier?: string | null;

    /**
     * Custom system prompt to guide extraction behavior
     */
    system_prompt?: string | null;

    /**
     * Comma-separated page numbers or ranges to process (1-based). Omit to process all
     * pages.
     */
    target_pages?: string | null;

    /**
     * Extract tier: cost_effective (5 credits/page) or agentic (15 credits/page)
     */
    tier?: 'cost_effective' | 'agentic';
  }

  /**
   * Typed parameters for a _classify v2_ product configuration.
   */
  export interface ClassifyV2Parameters {
    /**
     * Product type.
     */
    product_type: 'classify_v2';

    /**
     * Classify rules to evaluate against the document (at least one required)
     */
    rules: Array<ClassifyV2Parameters.Rule>;

    /**
     * Classify execution mode
     */
    mode?: 'FAST';

    /**
     * Parsing configuration for classify jobs.
     */
    parsing_configuration?: ClassifyV2Parameters.ParsingConfiguration | null;
  }

  export namespace ClassifyV2Parameters {
    /**
     * A rule for classifying documents.
     */
    export interface Rule {
      /**
       * Natural language criteria for matching this rule
       */
      description: string;

      /**
       * Document type to assign when rule matches
       */
      type: string;
    }

    /**
     * Parsing configuration for classify jobs.
     */
    export interface ParsingConfiguration {
      /**
       * ISO 639-1 language code for the document
       */
      lang?: string;

      /**
       * Maximum number of pages to process. Omit for no limit.
       */
      max_pages?: number | null;

      /**
       * Comma-separated page numbers or ranges to process (1-based). Omit to process all
       * pages.
       */
      target_pages?: string | null;
    }
  }

  /**
   * Configuration for LlamaParse v2 document parsing.
   *
   * Includes tier selection, processing options, output formatting, page targeting,
   * and webhook delivery. Refer to the LlamaParse documentation for details on each
   * field.
   */
  export interface ParseV2Parameters {
    /**
     * Product type.
     */
    product_type: 'parse_v2';

    /**
     * Parsing tier: 'fast' (rule-based, cheapest), 'cost_effective' (balanced),
     * 'agentic' (AI-powered with custom prompts), or 'agentic_plus' (premium AI with
     * highest accuracy)
     */
    tier: 'fast' | 'cost_effective' | 'agentic' | 'agentic_plus';

    /**
     * Tier version. Use 'latest' for the current stable version, or specify a specific
     * version (e.g., '1.0', '2.0') for reproducible results
     */
    version:
      | '2025-12-11'
      | '2025-12-18'
      | '2025-12-31'
      | '2026-01-08'
      | '2026-01-09'
      | '2026-01-16'
      | '2026-01-21'
      | '2026-01-22'
      | '2026-01-24'
      | '2026-01-29'
      | '2026-01-30'
      | '2026-02-03'
      | '2026-02-18'
      | '2026-02-20'
      | '2026-02-24'
      | '2026-02-26'
      | '2026-03-02'
      | '2026-03-03'
      | '2026-03-04'
      | '2026-03-05'
      | '2026-03-09'
      | '2026-03-10'
      | '2026-03-11'
      | '2026-03-12'
      | '2026-03-17'
      | '2026-03-19'
      | '2026-03-20'
      | '2026-03-22'
      | '2026-03-23'
      | '2026-03-24'
      | '2026-03-25'
      | 'latest'
      | (string & {});

    /**
     * Options for AI-powered parsing tiers (cost_effective, agentic, agentic_plus).
     *
     * These options customize how the AI processes and interprets document content.
     * Only applicable when using non-fast tiers.
     */
    agentic_options?: ParseV2Parameters.AgenticOptions | null;

    /**
     * Identifier for the client/application making the request. Used for analytics and
     * debugging. Example: 'my-app-v2'
     */
    client_name?: string | null;

    /**
     * Crop boundaries to process only a portion of each page. Values are ratios 0-1
     * from page edges
     */
    crop_box?: ParseV2Parameters.CropBox;

    /**
     * Bypass result caching and force re-parsing. Use when document content may have
     * changed or you need fresh results
     */
    disable_cache?: boolean | null;

    /**
     * Options for fast tier parsing (rule-based, no AI).
     *
     * Fast tier uses deterministic algorithms for text extraction without AI
     * enhancement. It's the fastest and most cost-effective option, best suited for
     * simple documents with standard layouts. Currently has no configurable options
     * but reserved for future expansion.
     */
    fast_options?: unknown | null;

    /**
     * Format-specific options (HTML, PDF, spreadsheet, presentation). Applied based on
     * detected input file type
     */
    input_options?: ParseV2Parameters.InputOptions;

    /**
     * Output formatting options for markdown, text, and extracted images
     */
    output_options?: ParseV2Parameters.OutputOptions;

    /**
     * Page selection: limit total pages or specify exact pages to process
     */
    page_ranges?: ParseV2Parameters.PageRanges;

    /**
     * Job execution controls including timeouts and failure thresholds
     */
    processing_control?: ParseV2Parameters.ProcessingControl;

    /**
     * Document processing options including OCR, table extraction, and chart parsing
     */
    processing_options?: ParseV2Parameters.ProcessingOptions;

    /**
     * Webhook endpoints for job status notifications. Multiple webhooks can be
     * configured for different events or services
     */
    webhook_configurations?: Array<ParseV2Parameters.WebhookConfiguration>;
  }

  export namespace ParseV2Parameters {
    /**
     * Options for AI-powered parsing tiers (cost_effective, agentic, agentic_plus).
     *
     * These options customize how the AI processes and interprets document content.
     * Only applicable when using non-fast tiers.
     */
    export interface AgenticOptions {
      /**
       * Custom instructions for the AI parser. Use to guide extraction behavior, specify
       * output formatting, or provide domain-specific context. Example: 'Extract
       * financial tables with currency symbols. Format dates as YYYY-MM-DD.'
       */
      custom_prompt?: string | null;
    }

    /**
     * Crop boundaries to process only a portion of each page. Values are ratios 0-1
     * from page edges
     */
    export interface CropBox {
      /**
       * Bottom boundary as ratio (0-1). 0=top edge, 1=bottom edge. Content below this
       * line is excluded
       */
      bottom?: number | null;

      /**
       * Left boundary as ratio (0-1). 0=left edge, 1=right edge. Content left of this
       * line is excluded
       */
      left?: number | null;

      /**
       * Right boundary as ratio (0-1). 0=left edge, 1=right edge. Content right of this
       * line is excluded
       */
      right?: number | null;

      /**
       * Top boundary as ratio (0-1). 0=top edge, 1=bottom edge. Content above this line
       * is excluded
       */
      top?: number | null;
    }

    /**
     * Format-specific options (HTML, PDF, spreadsheet, presentation). Applied based on
     * detected input file type
     */
    export interface InputOptions {
      /**
       * HTML/web page parsing options (applies to .html, .htm files)
       */
      html?: InputOptions.HTML;

      /**
       * PDF-specific parsing options (applies to .pdf files)
       */
      pdf?: unknown;

      /**
       * Presentation parsing options (applies to .pptx, .ppt, .odp, .key files)
       */
      presentation?: InputOptions.Presentation;

      /**
       * Spreadsheet parsing options (applies to .xlsx, .xls, .csv, .ods files)
       */
      spreadsheet?: InputOptions.Spreadsheet;
    }

    export namespace InputOptions {
      /**
       * HTML/web page parsing options (applies to .html, .htm files)
       */
      export interface HTML {
        /**
         * Force all HTML elements to be visible by overriding CSS display/visibility
         * properties. Useful for parsing pages with hidden content or collapsed sections
         */
        make_all_elements_visible?: boolean | null;

        /**
         * Remove fixed-position elements (headers, footers, floating buttons) that appear
         * on every page render
         */
        remove_fixed_elements?: boolean | null;

        /**
         * Remove navigation elements (nav bars, sidebars, menus) to focus on main content
         */
        remove_navigation_elements?: boolean | null;
      }

      /**
       * Presentation parsing options (applies to .pptx, .ppt, .odp, .key files)
       */
      export interface Presentation {
        /**
         * Extract content positioned outside the visible slide area. Some presentations
         * have hidden notes or content that extends beyond slide boundaries
         */
        out_of_bounds_content?: boolean | null;

        /**
         * Skip extraction of embedded chart data tables. When true, only the visual
         * representation of charts is captured, not the underlying data
         */
        skip_embedded_data?: boolean | null;
      }

      /**
       * Spreadsheet parsing options (applies to .xlsx, .xls, .csv, .ods files)
       */
      export interface Spreadsheet {
        /**
         * Detect and extract multiple tables within a single sheet. Useful when
         * spreadsheets contain several data regions separated by blank rows/columns
         */
        detect_sub_tables_in_sheets?: boolean | null;

        /**
         * Compute formula results instead of extracting formula text. Use when you need
         * calculated values rather than formula definitions
         */
        force_formula_computation_in_sheets?: boolean | null;

        /**
         * Parse hidden sheets in addition to visible ones. By default, hidden sheets are
         * skipped
         */
        include_hidden_sheets?: boolean | null;
      }
    }

    /**
     * Output formatting options for markdown, text, and extracted images
     */
    export interface OutputOptions {
      /**
       * Extract the printed page number as it appears in the document (e.g., 'Page 5 of
       * 10', 'v', 'A-3'). Useful for referencing original page numbers
       */
      extract_printed_page_number?: boolean | null;

      /**
       * Image categories to extract and save. Options: 'screenshot' (full page renders
       * useful for visual QA), 'embedded' (images found within the document), 'layout'
       * (cropped regions from layout detection like figures and diagrams). Empty list
       * saves no images
       */
      images_to_save?: Array<'screenshot' | 'embedded' | 'layout'>;

      /**
       * Markdown formatting options including table styles and link annotations
       */
      markdown?: OutputOptions.Markdown;

      /**
       * Spatial text output options for preserving document layout structure
       */
      spatial_text?: OutputOptions.SpatialText;

      /**
       * Options for exporting tables as XLSX spreadsheets
       */
      tables_as_spreadsheet?: OutputOptions.TablesAsSpreadsheet;
    }

    export namespace OutputOptions {
      /**
       * Markdown formatting options including table styles and link annotations
       */
      export interface Markdown {
        /**
         * Add link annotations to markdown output in the format [text](url). When false,
         * only the link text is included
         */
        annotate_links?: boolean | null;

        /**
         * Embed images directly in markdown as base64 data URIs instead of extracting them
         * as separate files. Useful for self-contained markdown output
         */
        inline_images?: boolean | null;

        /**
         * Table formatting options including markdown vs HTML format and merging behavior
         */
        tables?: Markdown.Tables;
      }

      export namespace Markdown {
        /**
         * Table formatting options including markdown vs HTML format and merging behavior
         */
        export interface Tables {
          /**
           * Remove extra whitespace padding in markdown table cells for more compact output
           */
          compact_markdown_tables?: boolean | null;

          /**
           * Separator string for multiline cell content in markdown tables. Example: ' ' to
           * preserve line breaks, ' ' to join with spaces
           */
          markdown_table_multiline_separator?: string | null;

          /**
           * Automatically merge tables that span multiple pages into a single table. The
           * merged table appears on the first page with merged_from_pages metadata
           */
          merge_continued_tables?: boolean | null;

          /**
           * Output tables as markdown pipe tables instead of HTML <table> tags. Markdown
           * tables are simpler but cannot represent complex structures like merged cells
           */
          output_tables_as_markdown?: boolean | null;
        }
      }

      /**
       * Spatial text output options for preserving document layout structure
       */
      export interface SpatialText {
        /**
         * Keep multi-column layouts intact instead of linearizing columns into sequential
         * text. Automatically enabled for non-fast tiers
         */
        do_not_unroll_columns?: boolean | null;

        /**
         * Maintain consistent text column alignment across page boundaries. Automatically
         * enabled for document-level parsing modes
         */
        preserve_layout_alignment_across_pages?: boolean | null;

        /**
         * Include text below the normal size threshold. Useful for footnotes, watermarks,
         * or fine print that might otherwise be filtered out
         */
        preserve_very_small_text?: boolean | null;
      }

      /**
       * Options for exporting tables as XLSX spreadsheets
       */
      export interface TablesAsSpreadsheet {
        /**
         * Whether this option is enabled
         */
        enable?: boolean | null;

        /**
         * Automatically generate descriptive sheet names from table context (headers,
         * surrounding text) instead of using generic names like 'Table_1'
         */
        guess_sheet_name?: boolean;
      }
    }

    /**
     * Page selection: limit total pages or specify exact pages to process
     */
    export interface PageRanges {
      /**
       * Maximum number of pages to process. Pages are processed in order starting from
       * page 1. If both max_pages and target_pages are set, target_pages takes
       * precedence
       */
      max_pages?: number | null;

      /**
       * Comma-separated list of specific pages to process using 1-based indexing.
       * Supports individual pages and ranges. Examples: '1,3,5' (pages 1, 3, 5), '1-5'
       * (pages 1 through 5 inclusive), '1,3,5-8,10' (pages 1, 3, 5-8, and 10). Pages are
       * sorted and deduplicated automatically. Duplicate pages cause an error
       */
      target_pages?: string | null;
    }

    /**
     * Job execution controls including timeouts and failure thresholds
     */
    export interface ProcessingControl {
      /**
       * Quality thresholds that determine when a job should fail vs complete with
       * partial results
       */
      job_failure_conditions?: ProcessingControl.JobFailureConditions;

      /**
       * Timeout settings for job execution. Increase for large or complex documents
       */
      timeouts?: ProcessingControl.Timeouts;
    }

    export namespace ProcessingControl {
      /**
       * Quality thresholds that determine when a job should fail vs complete with
       * partial results
       */
      export interface JobFailureConditions {
        /**
         * Maximum ratio of pages allowed to fail before the job fails (0-1). Example: 0.1
         * means job fails if more than 10% of pages fail. Default is 0.05 (5%)
         */
        allowed_page_failure_ratio?: number | null;

        /**
         * Fail the job if a problematic font is detected that may cause incorrect text
         * extraction. Buggy fonts can produce garbled or missing characters
         */
        fail_on_buggy_font?: boolean | null;

        /**
         * Fail the entire job if any embedded image cannot be extracted. By default, image
         * extraction errors are logged but don't fail the job
         */
        fail_on_image_extraction_error?: boolean | null;

        /**
         * Fail the entire job if OCR fails on any image. By default, OCR errors result in
         * empty text for that image
         */
        fail_on_image_ocr_error?: boolean | null;

        /**
         * Fail the entire job if markdown cannot be reconstructed for any page. By
         * default, failed pages use fallback text extraction
         */
        fail_on_markdown_reconstruction_error?: boolean | null;
      }

      /**
       * Timeout settings for job execution. Increase for large or complex documents
       */
      export interface Timeouts {
        /**
         * Base timeout for the job in seconds (max 1800 = 30 minutes). This is the minimum
         * time allowed regardless of document size
         */
        base_in_seconds?: number | null;

        /**
         * Additional timeout per page in seconds (max 300 = 5 minutes). Total timeout =
         * base + (this value × page count)
         */
        extra_time_per_page_in_seconds?: number | null;
      }
    }

    /**
     * Document processing options including OCR, table extraction, and chart parsing
     */
    export interface ProcessingOptions {
      /**
       * Use aggressive heuristics to detect table boundaries, even without visible
       * borders. Useful for documents with borderless or complex tables
       */
      aggressive_table_extraction?: boolean | null;

      /**
       * Conditional processing rules that apply different parsing options based on page
       * content, document structure, or filename patterns. Each entry defines trigger
       * conditions and the parsing configuration to apply when triggered
       */
      auto_mode_configuration?: Array<ProcessingOptions.AutoModeConfiguration> | null;

      /**
       * Cost optimizer configuration for reducing parsing costs on simpler pages.
       *
       * When enabled, the parser analyzes each page and routes simpler pages to faster,
       * cheaper processing while preserving quality for complex pages. Only works with
       * 'agentic' or 'agentic_plus' tiers.
       */
      cost_optimizer?: ProcessingOptions.CostOptimizer | null;

      /**
       * Disable automatic heuristics including outlined table extraction and adaptive
       * long table handling. Use when heuristics produce incorrect results
       */
      disable_heuristics?: boolean | null;

      /**
       * Options for ignoring specific text types (diagonal, hidden, text in images)
       */
      ignore?: ProcessingOptions.Ignore;

      /**
       * OCR configuration including language detection settings
       */
      ocr_parameters?: ProcessingOptions.OcrParameters;

      /**
       * Enable AI-powered chart analysis. Modes: 'efficient' (fast, lower cost),
       * 'agentic' (balanced), 'agentic_plus' (highest accuracy). Automatically enables
       * extract_layout and precise_bounding_box when set
       */
      specialized_chart_parsing?: 'agentic_plus' | 'agentic' | 'efficient' | null;
    }

    export namespace ProcessingOptions {
      /**
       * A single auto mode rule with trigger conditions and parsing configuration.
       *
       * Auto mode allows conditional parsing where different configurations are applied
       * based on page content, structure, or filename. When triggers match, the
       * parsing_conf overrides default settings for that page.
       */
      export interface AutoModeConfiguration {
        /**
         * Parsing configuration to apply when trigger conditions are met
         */
        parsing_conf: AutoModeConfiguration.ParsingConf;

        /**
         * Single glob pattern to match against filename
         */
        filename_match_glob?: string | null;

        /**
         * List of glob patterns to match against filename
         */
        filename_match_glob_list?: Array<string> | null;

        /**
         * Regex pattern to match against filename
         */
        filename_regexp?: string | null;

        /**
         * Regex mode flags (e.g., 'i' for case-insensitive)
         */
        filename_regexp_mode?: string | null;

        /**
         * Trigger if page contains a full-page image (scanned page detection)
         */
        full_page_image_in_page?: boolean | null;

        /**
         * Threshold for full page image detection (0.0-1.0, default 0.8)
         */
        full_page_image_in_page_threshold?: number | string | null;

        /**
         * Trigger if page contains non-screenshot images
         */
        image_in_page?: boolean | null;

        /**
         * Trigger if page contains this layout element type
         */
        layout_element_in_page?: string | null;

        /**
         * Confidence threshold for layout element detection
         */
        layout_element_in_page_confidence_threshold?: number | string | null;

        /**
         * Trigger if page has more than N charts
         */
        page_contains_at_least_n_charts?: number | string | null;

        /**
         * Trigger if page has more than N images
         */
        page_contains_at_least_n_images?: number | string | null;

        /**
         * Trigger if page has more than N layout elements
         */
        page_contains_at_least_n_layout_elements?: number | string | null;

        /**
         * Trigger if page has more than N lines
         */
        page_contains_at_least_n_lines?: number | string | null;

        /**
         * Trigger if page has more than N links
         */
        page_contains_at_least_n_links?: number | string | null;

        /**
         * Trigger if page has more than N numeric words
         */
        page_contains_at_least_n_numbers?: number | string | null;

        /**
         * Trigger if page has more than N% numeric words
         */
        page_contains_at_least_n_percent_numbers?: number | string | null;

        /**
         * Trigger if page has more than N tables
         */
        page_contains_at_least_n_tables?: number | string | null;

        /**
         * Trigger if page has more than N words
         */
        page_contains_at_least_n_words?: number | string | null;

        /**
         * Trigger if page has fewer than N charts
         */
        page_contains_at_most_n_charts?: number | string | null;

        /**
         * Trigger if page has fewer than N images
         */
        page_contains_at_most_n_images?: number | string | null;

        /**
         * Trigger if page has fewer than N layout elements
         */
        page_contains_at_most_n_layout_elements?: number | string | null;

        /**
         * Trigger if page has fewer than N lines
         */
        page_contains_at_most_n_lines?: number | string | null;

        /**
         * Trigger if page has fewer than N links
         */
        page_contains_at_most_n_links?: number | string | null;

        /**
         * Trigger if page has fewer than N numeric words
         */
        page_contains_at_most_n_numbers?: number | string | null;

        /**
         * Trigger if page has fewer than N% numeric words
         */
        page_contains_at_most_n_percent_numbers?: number | string | null;

        /**
         * Trigger if page has fewer than N tables
         */
        page_contains_at_most_n_tables?: number | string | null;

        /**
         * Trigger if page has fewer than N words
         */
        page_contains_at_most_n_words?: number | string | null;

        /**
         * Trigger if page has more than N characters
         */
        page_longer_than_n_chars?: number | string | null;

        /**
         * Trigger on pages with markdown extraction errors
         */
        page_md_error?: boolean | null;

        /**
         * Trigger if page has fewer than N characters
         */
        page_shorter_than_n_chars?: number | string | null;

        /**
         * Regex pattern to match in page content
         */
        regexp_in_page?: string | null;

        /**
         * Regex mode flags for regexp_in_page
         */
        regexp_in_page_mode?: string | null;

        /**
         * Trigger if page contains a table
         */
        table_in_page?: boolean | null;

        /**
         * Trigger if page text/markdown contains this string
         */
        text_in_page?: string | null;

        /**
         * How to combine multiple trigger conditions: 'and' (all conditions must match,
         * this is the default) or 'or' (any single condition can trigger)
         */
        trigger_mode?: string | null;
      }

      export namespace AutoModeConfiguration {
        /**
         * Parsing configuration to apply when trigger conditions are met
         */
        export interface ParsingConf {
          /**
           * Whether to use adaptive long table handling
           */
          adaptive_long_table?: boolean | null;

          /**
           * Whether to use aggressive table extraction
           */
          aggressive_table_extraction?: boolean | null;

          /**
           * Crop box options for auto mode parsing configuration.
           */
          crop_box?: ParsingConf.CropBox | null;

          /**
           * Custom AI instructions for matched pages. Overrides the base custom_prompt
           */
          custom_prompt?: string | null;

          /**
           * Whether to extract layout information
           */
          extract_layout?: boolean | null;

          /**
           * Whether to use high resolution OCR
           */
          high_res_ocr?: boolean | null;

          /**
           * Ignore options for auto mode parsing configuration.
           */
          ignore?: ParsingConf.Ignore | null;

          /**
           * Primary language of the document
           */
          language?: string | null;

          /**
           * Whether to use outlined table extraction
           */
          outlined_table_extraction?: boolean | null;

          /**
           * Presentation-specific options for auto mode parsing configuration.
           */
          presentation?: ParsingConf.Presentation | null;

          /**
           * Spatial text options for auto mode parsing configuration.
           */
          spatial_text?: ParsingConf.SpatialText | null;

          /**
           * Enable specialized chart parsing with the specified mode
           */
          specialized_chart_parsing?: 'agentic_plus' | 'agentic' | 'efficient' | null;

          /**
           * Override the parsing tier for matched pages. Must be paired with version
           */
          tier?: 'fast' | 'cost_effective' | 'agentic' | 'agentic_plus' | null;

          /**
           * Tier version when overriding tier. Required when tier is specified
           */
          version?:
            | '2025-12-11'
            | '2025-12-18'
            | '2025-12-31'
            | '2026-01-08'
            | '2026-01-09'
            | '2026-01-16'
            | '2026-01-21'
            | '2026-01-22'
            | '2026-01-24'
            | '2026-01-29'
            | '2026-01-30'
            | '2026-02-03'
            | '2026-02-18'
            | '2026-02-20'
            | '2026-02-24'
            | '2026-02-26'
            | '2026-03-02'
            | '2026-03-03'
            | '2026-03-04'
            | '2026-03-05'
            | '2026-03-09'
            | '2026-03-10'
            | '2026-03-11'
            | '2026-03-12'
            | '2026-03-17'
            | '2026-03-19'
            | '2026-03-20'
            | '2026-03-22'
            | '2026-03-23'
            | '2026-03-24'
            | '2026-03-25'
            | 'latest'
            | (string & {})
            | null;
        }

        export namespace ParsingConf {
          /**
           * Crop box options for auto mode parsing configuration.
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
           * Ignore options for auto mode parsing configuration.
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
          }

          /**
           * Presentation-specific options for auto mode parsing configuration.
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
           * Spatial text options for auto mode parsing configuration.
           */
          export interface SpatialText {
            /**
             * Keep column structure intact without unrolling
             */
            do_not_unroll_columns?: boolean | null;

            /**
             * Preserve text alignment across page boundaries
             */
            preserve_layout_alignment_across_pages?: boolean | null;

            /**
             * Include very small text in spatial output
             */
            preserve_very_small_text?: boolean | null;
          }
        }
      }

      /**
       * Cost optimizer configuration for reducing parsing costs on simpler pages.
       *
       * When enabled, the parser analyzes each page and routes simpler pages to faster,
       * cheaper processing while preserving quality for complex pages. Only works with
       * 'agentic' or 'agentic_plus' tiers.
       */
      export interface CostOptimizer {
        /**
         * Enable cost-optimized parsing. Routes simpler pages to faster processing while
         * complex pages use full AI analysis. May reduce speed on some documents.
         * IMPORTANT: Only available with 'agentic' or 'agentic_plus' tiers
         */
        enable?: boolean | null;
      }

      /**
       * Options for ignoring specific text types (diagonal, hidden, text in images)
       */
      export interface Ignore {
        /**
         * Skip text rotated at an angle (not horizontal/vertical). Useful for ignoring
         * watermarks or decorative angled text
         */
        ignore_diagonal_text?: boolean | null;

        /**
         * Skip text marked as hidden in the document structure. Some PDFs contain
         * invisible text layers used for accessibility or search indexing
         */
        ignore_hidden_text?: boolean | null;

        /**
         * Skip OCR text extraction from embedded images. Use when images contain
         * irrelevant text (watermarks, logos) that shouldn't be in the output
         */
        ignore_text_in_image?: boolean | null;
      }

      /**
       * OCR configuration including language detection settings
       */
      export interface OcrParameters {
        /**
         * Languages to use for OCR text recognition. Specify multiple languages if
         * document contains mixed-language content. Order matters - put primary language
         * first. Example: ['en', 'es'] for English with Spanish
         */
        languages?: Array<ParsingAPI.ParsingLanguages> | null;
      }
    }

    /**
     * Webhook configuration for receiving parsing job notifications.
     *
     * Webhooks are called when specified events occur during job processing. Configure
     * multiple webhook configurations to send to different endpoints.
     */
    export interface WebhookConfiguration {
      /**
       * Events that trigger this webhook. Options: 'parse.success' (job completed),
       * 'parse.failure' (job failed), 'parse.partial' (some pages failed). If not
       * specified, webhook fires for all events
       */
      webhook_events?: Array<string> | null;

      /**
       * Custom HTTP headers to include in webhook requests. Use for authentication
       * tokens or custom routing. Example: {'Authorization': 'Bearer xyz'}
       */
      webhook_headers?: { [key: string]: unknown } | null;

      /**
       * HTTPS URL to receive webhook POST requests. Must be publicly accessible
       */
      webhook_url?: string | null;
    }
  }

  /**
   * Catch-all for configurations without a dedicated typed schema.
   *
   * Accepts arbitrary JSON fields alongside `product_type`.
   */
  export interface UntypedParameters {
    /**
     * Product type.
     */
    product_type: 'unknown';

    [k: string]: unknown;
  }
}

export interface ExtractCreateParams {
  /**
   * Body param: File ID or Parse Job ID to extract from
   */
  document_input_value: string;

  /**
   * Query param
   */
  organization_id?: string | null;

  /**
   * Query param
   */
  project_id?: string | null;

  /**
   * Body param: Extract configuration combining parse and extract settings.
   */
  configuration?: ExtractConfiguration | null;

  /**
   * Body param: Saved extract configuration ID (mutually exclusive with
   * configuration)
   */
  configuration_id?: string | null;

  /**
   * Body param: Outbound webhook endpoints to notify on job status changes
   */
  webhook_configurations?: Array<ExtractCreateParams.WebhookConfiguration> | null;
}

export namespace ExtractCreateParams {
  /**
   * Configuration for a single outbound webhook endpoint.
   */
  export interface WebhookConfiguration {
    /**
     * Events to subscribe to (e.g. 'parse.success', 'extract.error'). If null, all
     * events are delivered.
     */
    webhook_events?: Array<
      | 'extract.pending'
      | 'extract.success'
      | 'extract.error'
      | 'extract.partial_success'
      | 'extract.cancelled'
      | 'parse.pending'
      | 'parse.running'
      | 'parse.success'
      | 'parse.error'
      | 'parse.partial_success'
      | 'parse.cancelled'
      | 'classify.pending'
      | 'classify.success'
      | 'classify.error'
      | 'classify.partial_success'
      | 'classify.cancelled'
      | 'unmapped_event'
    > | null;

    /**
     * Custom HTTP headers sent with each webhook request (e.g. auth tokens)
     */
    webhook_headers?: { [key: string]: string } | null;

    /**
     * Response format sent to the webhook: 'string' (default) or 'json'
     */
    webhook_output_format?: string | null;

    /**
     * URL to receive webhook POST notifications
     */
    webhook_url?: string | null;
  }
}

export interface ExtractListParams extends PaginatedCursorParams {
  /**
   * Filter by configuration ID
   */
  configuration_id?: string | null;

  /**
   * Include jobs created at or after this timestamp (inclusive)
   */
  created_at_on_or_after?: string | null;

  /**
   * Include jobs created at or before this timestamp (inclusive)
   */
  created_at_on_or_before?: string | null;

  /**
   * Filter by document input type (file_id or parse_job_id)
   */
  document_input_type?: string | null;

  /**
   * Filter by document input value
   */
  document_input_value?: string | null;

  /**
   * Additional fields to include: configuration, extract_metadata
   */
  expand?: Array<string>;

  /**
   * Filter by specific job IDs
   */
  job_ids?: Array<string> | null;

  organization_id?: string | null;

  project_id?: string | null;

  /**
   * Filter by status
   */
  status?: 'PENDING' | 'THROTTLED' | 'RUNNING' | 'COMPLETED' | 'FAILED' | 'CANCELLED' | null;
}

export interface ExtractDeleteParams {
  organization_id?: string | null;

  project_id?: string | null;
}

export interface ExtractGenerateSchemaParams {
  /**
   * Query param
   */
  organization_id?: string | null;

  /**
   * Query param
   */
  project_id?: string | null;

  /**
   * Body param: Optional schema to validate, refine, or extend
   */
  data_schema?: {
    [key: string]: { [key: string]: unknown } | Array<unknown> | string | number | boolean | null;
  } | null;

  /**
   * Body param: Optional file ID to analyze for schema generation
   */
  file_id?: string | null;

  /**
   * Body param: Name for the generated configuration (auto-generated if omitted)
   */
  name?: string | null;

  /**
   * Body param: Natural language description of the data structure to extract
   */
  prompt?: string | null;
}

export interface ExtractGetParams {
  /**
   * Additional fields to include: configuration, extract_metadata
   */
  expand?: Array<string>;

  organization_id?: string | null;

  project_id?: string | null;
}

export interface ExtractValidateSchemaParams {
  /**
   * JSON Schema to validate for use with extract jobs
   */
  data_schema: {
    [key: string]: { [key: string]: unknown } | Array<unknown> | string | number | boolean | null;
  };
}

export declare namespace Extract {
  export {
    type ExtractConfiguration as ExtractConfiguration,
    type ExtractJobMetadata as ExtractJobMetadata,
    type ExtractJobUsage as ExtractJobUsage,
    type ExtractV2Job as ExtractV2Job,
    type ExtractV2JobCreate as ExtractV2JobCreate,
    type ExtractV2JobQueryResponse as ExtractV2JobQueryResponse,
    type ExtractV2SchemaGenerateRequest as ExtractV2SchemaGenerateRequest,
    type ExtractV2SchemaValidateRequest as ExtractV2SchemaValidateRequest,
    type ExtractV2SchemaValidateResponse as ExtractV2SchemaValidateResponse,
    type ExtractedFieldMetadata as ExtractedFieldMetadata,
    type ExtractDeleteResponse as ExtractDeleteResponse,
    type ExtractGenerateSchemaResponse as ExtractGenerateSchemaResponse,
    type ExtractV2JobsPaginatedCursor as ExtractV2JobsPaginatedCursor,
    type ExtractCreateParams as ExtractCreateParams,
    type ExtractListParams as ExtractListParams,
    type ExtractDeleteParams as ExtractDeleteParams,
    type ExtractGenerateSchemaParams as ExtractGenerateSchemaParams,
    type ExtractGetParams as ExtractGetParams,
    type ExtractValidateSchemaParams as ExtractValidateSchemaParams,
  };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ExtractAPI from './extract';
import * as ConfigurationsAPI from './configurations';
import { APIPromise } from '../core/api-promise';
import { PagePromise, PaginatedCursor, type PaginatedCursorParams } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

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
   * Set `file_input` to a file ID (`dfl-...`) or a completed parse job ID
   * (`pjb-...`).
   *
   * The job runs asynchronously. Poll `GET /extract/{job_id}` or register a webhook
   * to monitor completion.
   *
   * @example
   * ```ts
   * const extractV2Job = await client.extract.create({
   *   file_input: 'dfl-aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee',
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
   * Filter by `configuration_id`, `status`, `file_input`, or creation date range.
   * Results are returned newest-first. Use `expand=configuration` to include the
   * full configuration used, and `expand=extract_metadata` for per-field metadata.
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
   * const configurationCreate =
   *   await client.extract.generateSchema();
   * ```
   */
  generateSchema(
    params: ExtractGenerateSchemaParams,
    options?: RequestOptions,
  ): APIPromise<ConfigurationsAPI.ConfigurationCreate> {
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
   *     data_schema: {
   *       properties: {
   *         vendor_name: 'bar',
   *         invoice_number: 'bar',
   *         total_amount: 'bar',
   *         line_items: 'bar',
   *       },
   *       required: [
   *         'vendor_name',
   *         'invoice_number',
   *         'total_amount',
   *       ],
   *       type: 'object',
   *     },
   *   });
   * ```
   */
  validateSchema(
    body: ExtractValidateSchemaParams,
    options?: RequestOptions,
  ): APIPromise<ExtractV2SchemaValidateResponse> {
    return this._client.post('/api/v2/extract/schema/validation', { body, ...options });
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
   * Extract algorithm version. Use 'latest' for the default pipeline or a date
   * string (e.g. '2026-01-08') to pin to a specific release.
   */
  extract_version?: string;

  /**
   * Granularity of extraction: per_doc returns one object per document, per_page
   * returns one object per page, per_table_row returns one object per table row
   */
  extraction_target?: 'per_doc' | 'per_page' | 'per_table_row';

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
   * Parse tier to use before extraction. Defaults to the extract tier if not
   * specified.
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
  file_input: string;

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
   * File ID or parse job ID to extract from
   */
  file_input: string;

  /**
   * Extract configuration combining parse and extract settings.
   */
  configuration?: ExtractConfiguration | null;

  /**
   * Saved configuration ID
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
   * Per-field metadata keyed by field name from your schema. Scalar fields (e.g.
   * `vendor`) map to a FieldMetadataEntry with citation and confidence. Array fields
   * (e.g. `items`) map to a list where each element contains per-sub-field
   * FieldMetadataEntry objects, indexed by array position. Nested objects contain
   * sub-field entries recursively.
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

export interface ExtractCreateParams {
  /**
   * Body param: File ID or parse job ID to extract from
   */
  file_input: string;

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
   * Body param: Saved configuration ID
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
   * Include items created at or after this timestamp (inclusive)
   */
  created_at_on_or_after?: string | null;

  /**
   * Include items created at or before this timestamp (inclusive)
   */
  created_at_on_or_before?: string | null;

  /**
   * Filter by document input type (file_id or parse_job_id)
   */
  document_input_type?: string | null;

  /**
   * @deprecated Deprecated: use file_input instead
   */
  document_input_value?: string | null;

  /**
   * Additional fields to include: configuration, extract_metadata
   */
  expand?: Array<string>;

  /**
   * Filter by file input value
   */
  file_input?: string | null;

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
    type ExtractV2JobsPaginatedCursor as ExtractV2JobsPaginatedCursor,
    type ExtractCreateParams as ExtractCreateParams,
    type ExtractListParams as ExtractListParams,
    type ExtractDeleteParams as ExtractDeleteParams,
    type ExtractGenerateSchemaParams as ExtractGenerateSchemaParams,
    type ExtractGetParams as ExtractGetParams,
    type ExtractValidateSchemaParams as ExtractValidateSchemaParams,
  };
}

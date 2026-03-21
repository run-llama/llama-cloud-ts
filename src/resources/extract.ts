// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ExtractAPI from './extract';
import * as SplitAPI from './beta/split';
import * as JobsAPI from './extraction/jobs';
import { APIPromise } from '../core/api-promise';
import { PagePromise, PaginatedCursor, type PaginatedCursorParams } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Extract extends APIResource {
  /**
   * Create a new extraction job.
   *
   * Provide exactly one of configuration_id (saved configuration) or inline config.
   *
   * @example
   * ```ts
   * const extractV2Job = await client.extract.create({
   *   document_input_value: 'document_input_value',
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
   * Delete an extraction job.
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
}

export type ExtractV2JobsPaginatedCursor = PaginatedCursor<ExtractV2Job>;

/**
 * Extraction configuration combining parse and extract settings.
 */
export interface ExtractConfiguration {
  /**
   * Extract-specific configuration options including the data schema
   */
  extract_options: ExtractOptions;

  /**
   * Parse config ID used for extraction
   */
  parse_config_id?: string | null;

  /**
   * Parse tier to use for extraction (e.g. fast, cost_effective, agentic).
   */
  parse_tier?: string | null;
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

  /**
   * Extraction usage metrics.
   */
  usage?: ExtractJobUsage | null;
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
 * Extract-specific configuration options.
 */
export interface ExtractOptions {
  /**
   * JSON schema for structured extraction
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
   * Extraction algorithm version to use (e.g., '2026-01-08', 'latest')
   */
  extract_version?: string;

  /**
   * Extraction scope: per_doc, per_page, or per_table_row
   */
  extraction_target?: 'per_doc' | 'per_page' | 'per_table_row';

  /**
   * Language of the document
   */
  lang?: string;

  /**
   * Maximum number of pages to process
   */
  max_pages?: number | null;

  /**
   * Custom system prompt for extraction
   */
  system_prompt?: string | null;

  /**
   * Comma-separated list of page numbers or ranges to process (1-based, e.g.,
   * '1,3,5-7,9' or '1-3,8-10')
   */
  target_pages?: string | null;

  /**
   * Extraction tier: cost_effective (5 credits/page) or agentic (15 credits/page)
   */
  tier?: 'cost_effective' | 'agentic';
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
   * File ID or Parse Job ID used for this job
   */
  document_input_value: string;

  /**
   * Job configuration parameters (includes parse_config_id, extract_options)
   */
  parameters: {
    [key: string]: { [key: string]: unknown } | Array<unknown> | string | number | boolean | null;
  };

  /**
   * Project this job belongs to
   */
  project_id: string;

  /**
   * Current status: PENDING, THROTTLED, RUNNING, COMPLETED, FAILED, CANCELLED
   */
  status: string;

  /**
   * Last update timestamp
   */
  updated_at: string;

  /**
   * Extract configuration ID (ProductConfiguration) used for this job (if any)
   */
  configuration_id?: string | null;

  /**
   * Error message if failed
   */
  error_message?: string | null;

  /**
   * Extraction metadata.
   */
  extract_metadata?: ExtractJobMetadata | null;

  /**
   * Extracted data (object or array depending on extraction_target)
   */
  extract_result?:
    | { [key: string]: { [key: string]: unknown } | Array<unknown> | string | number | boolean | null }
    | Array<{ [key: string]: { [key: string]: unknown } | Array<unknown> | string | number | boolean | null }>
    | null;
}

/**
 * Request to create an extraction job. Provide configuration_id or inline config.
 */
export interface ExtractV2JobCreate {
  /**
   * File ID or Parse Job ID to extract from
   */
  document_input_value: string;

  /**
   * Extraction configuration combining parse and extract settings.
   */
  config?: ExtractConfiguration | null;

  /**
   * Saved extract configuration ID (mutually exclusive with config)
   */
  configuration_id?: string | null;

  /**
   * The outbound webhook configurations
   */
  webhook_configurations?: Array<JobsAPI.WebhookConfiguration> | null;
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
   * JSON schema to validate
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
   * Validated JSON schema
   */
  data_schema: {
    [key: string]: { [key: string]: unknown } | Array<unknown> | string | number | boolean | null;
  };
}

/**
 * Metadata for extracted fields including document, page, and row level info.
 */
export interface ExtractedFieldMetadata {
  document_metadata?: {
    [key: string]: { [key: string]: unknown } | Array<unknown> | string | number | boolean | null;
  } | null;

  page_metadata?: Array<{
    [key: string]: { [key: string]: unknown } | Array<unknown> | string | number | boolean | null;
  }> | null;

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
    | ExtractGenerateSchemaResponse.ParseV2Parameters;
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
     * Extract-specific configuration options including the data schema
     */
    extract_options: ExtractAPI.ExtractOptions;

    /**
     * Product type.
     */
    product_type: 'extract_v2';

    /**
     * Parse config ID used for extraction
     */
    parse_config_id?: string | null;

    /**
     * Parse tier to use for extraction (e.g. fast, cost_effective, agentic).
     */
    parse_tier?: string | null;
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
     * Classification rules to apply (at least one required)
     */
    rules: Array<ClassifyV2Parameters.Rule>;

    /**
     * Classification execution mode
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
       * Natural language description of what to classify
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
       * Language of the document
       */
      lang?: string;

      /**
       * Maximum number of pages to process
       */
      max_pages?: number | null;

      /**
       * Comma-separated list of page numbers or ranges to process (1-based, e.g.,
       * '1,3,5-7,9' or '1-3,8-10')
       */
      target_pages?: string | null;
    }
  }

  /**
   * Typed parameters for a _parse v2_ product configuration.
   *
   * Parse configs have a flexible parameter set (tier, version, plus various parsing
   * options), so extra fields are permitted.
   */
  export interface ParseV2Parameters {
    /**
     * Product type.
     */
    product_type: 'parse_v2';

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
   * Body param: Extraction configuration combining parse and extract settings.
   */
  config?: ExtractConfiguration | null;

  /**
   * Body param: Saved extract configuration ID (mutually exclusive with config)
   */
  configuration_id?: string | null;

  /**
   * Body param: The outbound webhook configurations
   */
  webhook_configurations?: Array<JobsAPI.WebhookConfiguration> | null;
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
   * Additional fields to include: extract_metadata
   */
  expand?: Array<string>;

  organization_id?: string | null;

  project_id?: string | null;
}

export interface ExtractValidateSchemaParams {
  /**
   * JSON schema to validate
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
    type ExtractOptions as ExtractOptions,
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

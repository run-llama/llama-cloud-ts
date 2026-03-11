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
   */
  create(params: ExtractCreateParams, options?: RequestOptions): APIPromise<ExtractV2Job> {
    const { organization_id, project_id, ...body } = params;
    return this._client.post('/api/v2/extract', { query: { organization_id, project_id }, body, ...options });
  }

  /**
   * List extraction jobs with optional filtering and pagination.
   */
  list(
    query: ExtractListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ExtractV2JobsPaginatedCursor, ExtractV2Job> {
    return this._client.getAPIList('/api/v2/extract', PaginatedCursor<ExtractV2Job>, { query, ...options });
  }

  /**
   * Delete an extraction job.
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
   * JSON schema used for extraction
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
   * Custom system prompt for extraction
   */
  system_prompt?: string | null;

  /**
   * Extraction tier: cost_effective (10 credits) or agentic (20 credits)
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
   * Current status of the job
   */
  status: 'PENDING' | 'THROTTLED' | 'RUNNING' | 'COMPLETED' | 'FAILED' | 'CANCELLED';

  /**
   * Type of document input.
   */
  type: 'url' | 'file_id' | 'parse_job_id';

  /**
   * Last update timestamp
   */
  updated_at: string;

  /**
   * Document identifier (URL, file ID, or parse job ID).
   */
  value: string;

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
   * Type of document input.
   */
  type: 'url' | 'file_id' | 'parse_job_id';

  /**
   * Document identifier (URL, file ID, or parse job ID).
   */
  value: string;

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
  data_schema?:
    | { [key: string]: { [key: string]: unknown } | Array<unknown> | string | number | boolean | null }
    | string
    | null;

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
   * Schema to validate
   */
  data_schema:
    | { [key: string]: { [key: string]: unknown } | Array<unknown> | string | number | boolean | null }
    | string;
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
   * Body param: Type of document input.
   */
  type: 'url' | 'file_id' | 'parse_job_id';

  /**
   * Body param: Document identifier (URL, file ID, or parse job ID).
   */
  value: string;

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
  data_schema?:
    | { [key: string]: { [key: string]: unknown } | Array<unknown> | string | number | boolean | null }
    | string
    | null;

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
  organization_id?: string | null;

  project_id?: string | null;
}

export interface ExtractValidateSchemaParams {
  /**
   * Schema to validate
   */
  data_schema:
    | { [key: string]: { [key: string]: unknown } | Array<unknown> | string | number | boolean | null }
    | string;
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

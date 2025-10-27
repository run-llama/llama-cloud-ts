// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as JobAPI from './job/job';
import {
  Job,
  JobGeneratePresignedURLParams,
  JobGetDetailsResponse,
  JobGetParametersResponse,
} from './job/job';
import * as ParsingParsingAPI from '../v1/parsing/parsing';
import { APIPromise } from '../../core/api-promise';
import { type Uploadable } from '../../core/uploads';
import { RequestOptions } from '../../internal/request-options';
import { multipartFormRequestOptions } from '../../internal/uploads';

export class Parsing extends APIResource {
  job: JobAPI.Job = new JobAPI.Job(this._client);

  /**
   * Get parsing history for user
   *
   * This endpoint is deprecated. Use
   * /api/v1/jobs/?job_name=parsing&project_id=YOUR_PROJECT_ID instead.
   *
   * @deprecated
   */
  getParsingHistory(options?: RequestOptions): APIPromise<ParsingGetParsingHistoryResponse> {
    return this._client.get('/api/parsing/history', options);
  }

  /**
   * Get a list of supported file extensions
   */
  getSupportedFileExtensions(
    options?: RequestOptions,
  ): APIPromise<ParsingGetSupportedFileExtensionsResponse> {
    return this._client.get('/api/parsing/supported_file_extensions', options);
  }

  /**
   * Screenshot
   */
  screenshot(
    params: ParsingScreenshotParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ParsingParsingAPI.ParsingJob> {
    const { organization_id, project_id, ...body } = params ?? {};
    return this._client.post(
      '/api/parsing/screenshot',
      multipartFormRequestOptions({ query: { organization_id, project_id }, body, ...options }, this._client),
    );
  }

  /**
   * Upload File
   */
  uploadFile(
    params: ParsingUploadFileParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ParsingParsingAPI.ParsingJob> {
    const { organization_id, project_id, ...body } = params ?? {};
    return this._client.post(
      '/api/parsing/upload',
      multipartFormRequestOptions({ query: { organization_id, project_id }, body, ...options }, this._client),
    );
  }
}

export type ParsingGetParsingHistoryResponse = Array<ParsingParsingAPI.ParsingHistoryItem>;

export type ParsingGetSupportedFileExtensionsResponse =
  Array<ParsingParsingAPI.LlamaParseSupportedFileExtensions>;

export interface ParsingScreenshotParams {
  /**
   * Query param:
   */
  organization_id?: string | null;

  /**
   * Query param:
   */
  project_id?: string | null;

  /**
   * Body param:
   */
  do_not_cache?: boolean;

  /**
   * Body param:
   */
  file?: Uploadable | null;

  /**
   * Body param:
   */
  http_proxy?: string;

  /**
   * Body param:
   */
  input_s3_path?: string;

  /**
   * Body param:
   */
  input_s3_region?: string;

  /**
   * Body param:
   */
  input_url?: string;

  /**
   * Body param:
   */
  invalidate_cache?: boolean;

  /**
   * Body param:
   */
  job_timeout_extra_time_per_page_in_seconds?: number;

  /**
   * Body param:
   */
  job_timeout_in_seconds?: number;

  /**
   * Body param:
   */
  max_pages?: number | null;

  /**
   * Body param:
   */
  output_s3_path_prefix?: string;

  /**
   * Body param:
   */
  output_s3_region?: string;

  /**
   * Body param:
   */
  target_pages?: string;

  /**
   * Body param:
   */
  webhook_configurations?: string;

  /**
   * Body param:
   */
  webhook_url?: string;
}

export interface ParsingUploadFileParams {
  /**
   * Query param:
   */
  organization_id?: string | null;

  /**
   * Query param:
   */
  project_id?: string | null;

  /**
   * Body param:
   */
  adaptive_long_table?: boolean;

  /**
   * Body param:
   */
  aggressive_table_extraction?: boolean;

  /**
   * Body param:
   */
  annotate_links?: boolean;

  /**
   * Body param:
   */
  auto_mode?: boolean;

  /**
   * Body param:
   */
  auto_mode_configuration_json?: string;

  /**
   * Body param:
   */
  auto_mode_trigger_on_image_in_page?: boolean;

  /**
   * Body param:
   */
  auto_mode_trigger_on_regexp_in_page?: string;

  /**
   * Body param:
   */
  auto_mode_trigger_on_table_in_page?: boolean;

  /**
   * Body param:
   */
  auto_mode_trigger_on_text_in_page?: string;

  /**
   * Body param:
   */
  azure_openai_api_version?: string;

  /**
   * Body param:
   */
  azure_openai_deployment_name?: string;

  /**
   * Body param:
   */
  azure_openai_endpoint?: string;

  /**
   * Body param:
   */
  azure_openai_key?: string;

  /**
   * Body param:
   */
  bbox_bottom?: number;

  /**
   * Body param:
   */
  bbox_left?: number;

  /**
   * Body param:
   */
  bbox_right?: number;

  /**
   * Body param:
   */
  bbox_top?: number;

  /**
   * Body param:
   */
  bounding_box?: string;

  /**
   * Body param:
   */
  compact_markdown_table?: boolean;

  /**
   * Body param:
   */
  complemental_formatting_instruction?: string;

  /**
   * Body param:
   */
  content_guideline_instruction?: string;

  /**
   * Body param:
   */
  continuous_mode?: boolean;

  /**
   * Body param:
   */
  disable_image_extraction?: boolean;

  /**
   * Body param:
   */
  disable_ocr?: boolean;

  /**
   * Body param:
   */
  disable_reconstruction?: boolean;

  /**
   * Body param:
   */
  do_not_cache?: boolean;

  /**
   * Body param:
   */
  do_not_unroll_columns?: boolean;

  /**
   * Body param:
   */
  extract_charts?: boolean;

  /**
   * Body param:
   */
  extract_layout?: boolean;

  /**
   * Body param:
   */
  fast_mode?: boolean;

  /**
   * Body param:
   */
  file?: Uploadable | null;

  /**
   * Body param:
   */
  formatting_instruction?: string;

  /**
   * Body param:
   */
  gpt4o_api_key?: string;

  /**
   * Body param:
   */
  gpt4o_mode?: boolean;

  /**
   * Body param:
   */
  guess_xlsx_sheet_name?: boolean;

  /**
   * Body param:
   */
  hide_footers?: boolean;

  /**
   * Body param:
   */
  hide_headers?: boolean;

  /**
   * Body param:
   */
  high_res_ocr?: boolean;

  /**
   * Body param:
   */
  html_make_all_elements_visible?: boolean;

  /**
   * Body param:
   */
  html_remove_fixed_elements?: boolean;

  /**
   * Body param:
   */
  html_remove_navigation_elements?: boolean;

  /**
   * Body param:
   */
  http_proxy?: string;

  /**
   * Body param:
   */
  ignore_document_elements_for_layout_detection?: boolean;

  /**
   * Body param:
   */
  inline_images_in_markdown?: boolean;

  /**
   * Body param:
   */
  input_s3_path?: string;

  /**
   * Body param:
   */
  input_s3_region?: string;

  /**
   * Body param:
   */
  input_url?: string;

  /**
   * Body param:
   */
  invalidate_cache?: boolean;

  /**
   * Body param:
   */
  is_formatting_instruction?: boolean;

  /**
   * Body param:
   */
  job_timeout_extra_time_per_page_in_seconds?: number;

  /**
   * Body param:
   */
  job_timeout_in_seconds?: number;

  /**
   * Body param:
   */
  keep_page_separator_when_merging_tables?: boolean;

  /**
   * Body param:
   */
  language?: Array<ParsingParsingAPI.ParserLanguages>;

  /**
   * Body param:
   */
  layout_aware?: boolean;

  /**
   * Body param:
   */
  markdown_table_multiline_header_separator?: string;

  /**
   * Body param:
   */
  max_pages?: number | null;

  /**
   * Body param:
   */
  merge_tables_across_pages_in_markdown?: boolean;

  /**
   * Body param:
   */
  model?: string;

  /**
   * Body param:
   */
  outlined_table_extraction?: boolean;

  /**
   * Body param:
   */
  output_pdf_of_document?: boolean;

  /**
   * Body param:
   */
  output_s3_path_prefix?: string;

  /**
   * Body param:
   */
  output_s3_region?: string;

  /**
   * Body param:
   */
  output_tables_as_HTML?: boolean;

  /**
   * Body param:
   */
  page_error_tolerance?: number;

  /**
   * Body param:
   */
  page_footer_prefix?: string;

  /**
   * Body param:
   */
  page_footer_suffix?: string;

  /**
   * Body param:
   */
  page_header_prefix?: string;

  /**
   * Body param:
   */
  page_header_suffix?: string;

  /**
   * Body param:
   */
  page_prefix?: string;

  /**
   * Body param:
   */
  page_separator?: string;

  /**
   * Body param:
   */
  page_suffix?: string;

  /**
   * Body param: Enum for representing the mode of parsing to be used
   */
  parse_mode?: ParsingParsingAPI.ParsingMode | null;

  /**
   * Body param:
   */
  parsing_instruction?: string;

  /**
   * Body param:
   */
  precise_bounding_box?: boolean;

  /**
   * Body param:
   */
  premium_mode?: boolean;

  /**
   * Body param:
   */
  preserve_layout_alignment_across_pages?: boolean;

  /**
   * Body param:
   */
  preserve_very_small_text?: boolean;

  /**
   * Body param:
   */
  preset?: string;

  /**
   * Body param:
   */
  remove_hidden_text?: boolean;

  /**
   * Body param: Enum for representing the different available page error handling
   * modes
   */
  replace_failed_page_mode?: ParsingParsingAPI.FailPageMode | null;

  /**
   * Body param:
   */
  replace_failed_page_with_error_message_prefix?: string;

  /**
   * Body param:
   */
  replace_failed_page_with_error_message_suffix?: string;

  /**
   * Body param:
   */
  save_images?: boolean;

  /**
   * Body param:
   */
  skip_diagonal_text?: boolean;

  /**
   * Body param:
   */
  specialized_chart_parsing_agentic?: boolean;

  /**
   * Body param:
   */
  specialized_chart_parsing_efficient?: boolean;

  /**
   * Body param:
   */
  specialized_chart_parsing_plus?: boolean;

  /**
   * Body param:
   */
  specialized_image_parsing?: boolean;

  /**
   * Body param:
   */
  spreadsheet_extract_sub_tables?: boolean;

  /**
   * Body param:
   */
  spreadsheet_force_formula_computation?: boolean;

  /**
   * Body param:
   */
  strict_mode_buggy_font?: boolean;

  /**
   * Body param:
   */
  strict_mode_image_extraction?: boolean;

  /**
   * Body param:
   */
  strict_mode_image_ocr?: boolean;

  /**
   * Body param:
   */
  strict_mode_reconstruction?: boolean;

  /**
   * Body param:
   */
  structured_output?: boolean;

  /**
   * Body param:
   */
  structured_output_json_schema?: string;

  /**
   * Body param:
   */
  structured_output_json_schema_name?: string;

  /**
   * Body param:
   */
  system_prompt?: string;

  /**
   * Body param:
   */
  system_prompt_append?: string;

  /**
   * Body param:
   */
  take_screenshot?: boolean;

  /**
   * Body param:
   */
  target_pages?: string;

  /**
   * Body param:
   */
  use_vendor_multimodal_model?: boolean;

  /**
   * Body param:
   */
  user_prompt?: string;

  /**
   * Body param:
   */
  vendor_multimodal_api_key?: string;

  /**
   * Body param:
   */
  vendor_multimodal_model_name?: string;

  /**
   * Body param:
   */
  webhook_configurations?: string;

  /**
   * Body param:
   */
  webhook_url?: string;
}

Parsing.Job = Job;

export declare namespace Parsing {
  export {
    type ParsingGetParsingHistoryResponse as ParsingGetParsingHistoryResponse,
    type ParsingGetSupportedFileExtensionsResponse as ParsingGetSupportedFileExtensionsResponse,
    type ParsingScreenshotParams as ParsingScreenshotParams,
    type ParsingUploadFileParams as ParsingUploadFileParams,
  };

  export {
    Job as Job,
    type JobGetDetailsResponse as JobGetDetailsResponse,
    type JobGetParametersResponse as JobGetParametersResponse,
    type JobGeneratePresignedURLParams as JobGeneratePresignedURLParams,
  };
}

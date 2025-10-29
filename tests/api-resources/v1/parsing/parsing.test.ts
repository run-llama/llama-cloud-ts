// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import LlamacloudProd, { toFile } from 'llamacloud-prod';

const client = new LlamacloudProd({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource parsing', () => {
  // Prism tests are disabled
  test.skip('createScreenshot', async () => {
    const responsePromise = client.v1.parsing.createScreenshot();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('createScreenshot: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.parsing.createScreenshot(
        {
          organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          do_not_cache: true,
          file: await toFile(Buffer.from('# my file contents'), 'README.md'),
          http_proxy: 'http_proxy',
          input_s3_path: 'input_s3_path',
          input_s3_region: 'input_s3_region',
          input_url: 'input_url',
          invalidate_cache: true,
          job_timeout_extra_time_per_page_in_seconds: 0,
          job_timeout_in_seconds: 0,
          max_pages: 0,
          output_s3_path_prefix: 'output_s3_path_prefix',
          output_s3_region: 'output_s3_region',
          target_pages: 'target_pages',
          webhook_configurations: 'webhook_configurations',
          webhook_url: 'webhook_url',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(LlamacloudProd.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('getParsingHistory', async () => {
    const responsePromise = client.v1.parsing.getParsingHistory();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getSupportedFileExtensions', async () => {
    const responsePromise = client.v1.parsing.getSupportedFileExtensions();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('uploadFile', async () => {
    const responsePromise = client.v1.parsing.uploadFile();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('uploadFile: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.parsing.uploadFile(
        {
          organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          adaptive_long_table: true,
          aggressive_table_extraction: true,
          annotate_links: true,
          auto_mode: true,
          auto_mode_configuration_json: 'auto_mode_configuration_json',
          auto_mode_trigger_on_image_in_page: true,
          auto_mode_trigger_on_regexp_in_page: 'auto_mode_trigger_on_regexp_in_page',
          auto_mode_trigger_on_table_in_page: true,
          auto_mode_trigger_on_text_in_page: 'auto_mode_trigger_on_text_in_page',
          azure_openai_api_version: 'azure_openai_api_version',
          azure_openai_deployment_name: 'azure_openai_deployment_name',
          azure_openai_endpoint: 'azure_openai_endpoint',
          azure_openai_key: 'azure_openai_key',
          bbox_bottom: 0,
          bbox_left: 0,
          bbox_right: 0,
          bbox_top: 0,
          bounding_box: 'bounding_box',
          compact_markdown_table: true,
          complemental_formatting_instruction: 'complemental_formatting_instruction',
          content_guideline_instruction: 'content_guideline_instruction',
          continuous_mode: true,
          disable_image_extraction: true,
          disable_ocr: true,
          disable_reconstruction: true,
          do_not_cache: true,
          do_not_unroll_columns: true,
          extract_charts: true,
          extract_layout: true,
          fast_mode: true,
          file: await toFile(Buffer.from('# my file contents'), 'README.md'),
          formatting_instruction: 'formatting_instruction',
          gpt4o_api_key: 'gpt4o_api_key',
          gpt4o_mode: true,
          guess_xlsx_sheet_name: true,
          hide_footers: true,
          hide_headers: true,
          high_res_ocr: true,
          html_make_all_elements_visible: true,
          html_remove_fixed_elements: true,
          html_remove_navigation_elements: true,
          http_proxy: 'http_proxy',
          ignore_document_elements_for_layout_detection: true,
          inline_images_in_markdown: true,
          input_s3_path: 'input_s3_path',
          input_s3_region: 'input_s3_region',
          input_url: 'input_url',
          invalidate_cache: true,
          is_formatting_instruction: true,
          job_timeout_extra_time_per_page_in_seconds: 0,
          job_timeout_in_seconds: 0,
          keep_page_separator_when_merging_tables: true,
          language: ['af'],
          layout_aware: true,
          markdown_table_multiline_header_separator: 'markdown_table_multiline_header_separator',
          max_pages: 0,
          merge_tables_across_pages_in_markdown: true,
          model: 'model',
          outlined_table_extraction: true,
          output_pdf_of_document: true,
          output_s3_path_prefix: 'output_s3_path_prefix',
          output_s3_region: 'output_s3_region',
          output_tables_as_HTML: true,
          page_error_tolerance: 0,
          page_footer_prefix: 'page_footer_prefix',
          page_footer_suffix: 'page_footer_suffix',
          page_header_prefix: 'page_header_prefix',
          page_header_suffix: 'page_header_suffix',
          page_prefix: 'page_prefix',
          page_separator: 'page_separator',
          page_suffix: 'page_suffix',
          parse_mode: 'parse_page_without_llm',
          parsing_instruction: 'parsing_instruction',
          precise_bounding_box: true,
          premium_mode: true,
          presentation_out_of_bounds_content: true,
          preserve_layout_alignment_across_pages: true,
          preserve_very_small_text: true,
          preset: 'preset',
          remove_hidden_text: true,
          replace_failed_page_mode: 'raw_text',
          replace_failed_page_with_error_message_prefix: 'replace_failed_page_with_error_message_prefix',
          replace_failed_page_with_error_message_suffix: 'replace_failed_page_with_error_message_suffix',
          save_images: true,
          skip_diagonal_text: true,
          specialized_chart_parsing_agentic: true,
          specialized_chart_parsing_efficient: true,
          specialized_chart_parsing_plus: true,
          specialized_image_parsing: true,
          spreadsheet_extract_sub_tables: true,
          spreadsheet_force_formula_computation: true,
          strict_mode_buggy_font: true,
          strict_mode_image_extraction: true,
          strict_mode_image_ocr: true,
          strict_mode_reconstruction: true,
          structured_output: true,
          structured_output_json_schema: 'structured_output_json_schema',
          structured_output_json_schema_name: 'structured_output_json_schema_name',
          system_prompt: 'system_prompt',
          system_prompt_append: 'system_prompt_append',
          take_screenshot: true,
          target_pages: 'target_pages',
          use_vendor_multimodal_model: true,
          user_prompt: 'user_prompt',
          vendor_multimodal_api_key: 'vendor_multimodal_api_key',
          vendor_multimodal_model_name: 'vendor_multimodal_model_name',
          webhook_configurations: 'webhook_configurations',
          webhook_url: 'webhook_url',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(LlamacloudProd.NotFoundError);
  });
});

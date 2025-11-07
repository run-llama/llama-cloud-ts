// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import LlamaCloud from 'llama-cloud';

const client = new LlamaCloud({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource parseConfigurations', () => {
  // Prism tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.beta.parseConfigurations.update('config_id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.beta.parseConfigurations.delete('config_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('delete: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.beta.parseConfigurations.delete(
        'config_id',
        {
          organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(LlamaCloud.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('get', async () => {
    const responsePromise = client.beta.parseConfigurations.get('config_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('get: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.beta.parseConfigurations.get(
        'config_id',
        {
          organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(LlamaCloud.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('getLatest', async () => {
    const responsePromise = client.beta.parseConfigurations.getLatest();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getLatest: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.beta.parseConfigurations.getLatest(
        {
          creator: 'creator',
          organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(LlamaCloud.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('getParseConfigurations', async () => {
    const responsePromise = client.beta.parseConfigurations.getParseConfigurations();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getParseConfigurations: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.beta.parseConfigurations.getParseConfigurations(
        {
          creator: 'creator',
          name: 'name',
          organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          page_size: 0,
          page_token: 'page_token',
          project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          version: 'version',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(LlamaCloud.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('parseConfigurations: only required params', async () => {
    const responsePromise = client.beta.parseConfigurations.parseConfigurations({
      name: 'name',
      parameters: {},
      version: 'version',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('parseConfigurations: required and optional params', async () => {
    const response = await client.beta.parseConfigurations.parseConfigurations({
      name: 'name',
      parameters: {
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
        internal_is_screenshot_job: true,
        invalidate_cache: true,
        is_formatting_instruction: true,
        job_timeout_extra_time_per_page_in_seconds: 0,
        job_timeout_in_seconds: 0,
        keep_page_separator_when_merging_tables: true,
        languages: ['af'],
        layout_aware: true,
        markdown_table_multiline_header_separator: 'markdown_table_multiline_header_separator',
        max_pages: 0,
        max_pages_enforced: 0,
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
        priority: 'low',
        project_id: 'project_id',
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
        webhook_configurations: [
          {
            webhook_events: ['extract.pending'],
            webhook_headers: { foo: 'string' },
            webhook_output_format: 'webhook_output_format',
            webhook_url: 'webhook_url',
          },
        ],
        webhook_url: 'webhook_url',
      },
      version: 'version',
      organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      creator: 'creator',
      source_id: 'source_id',
      source_type: 'source_type',
    });
  });

  // Prism tests are disabled
  test.skip('query', async () => {
    const responsePromise = client.beta.parseConfigurations.query({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('updateParseConfigurations: only required params', async () => {
    const responsePromise = client.beta.parseConfigurations.updateParseConfigurations({
      name: 'name',
      parameters: {},
      version: 'version',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('updateParseConfigurations: required and optional params', async () => {
    const response = await client.beta.parseConfigurations.updateParseConfigurations({
      name: 'name',
      parameters: {
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
        internal_is_screenshot_job: true,
        invalidate_cache: true,
        is_formatting_instruction: true,
        job_timeout_extra_time_per_page_in_seconds: 0,
        job_timeout_in_seconds: 0,
        keep_page_separator_when_merging_tables: true,
        languages: ['af'],
        layout_aware: true,
        markdown_table_multiline_header_separator: 'markdown_table_multiline_header_separator',
        max_pages: 0,
        max_pages_enforced: 0,
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
        priority: 'low',
        project_id: 'project_id',
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
        webhook_configurations: [
          {
            webhook_events: ['extract.pending'],
            webhook_headers: { foo: 'string' },
            webhook_output_format: 'webhook_output_format',
            webhook_url: 'webhook_url',
          },
        ],
        webhook_url: 'webhook_url',
      },
      version: 'version',
      organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      creator: 'creator',
      source_id: 'source_id',
      source_type: 'source_type',
    });
  });
});

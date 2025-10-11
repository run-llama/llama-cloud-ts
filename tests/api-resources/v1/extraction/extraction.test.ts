// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import LlamacloudProd from 'llamacloud-prod';

const client = new LlamacloudProd({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource extraction', () => {
  // Prism tests are disabled
  test.skip('run: only required params', async () => {
    const responsePromise = client.v1.extraction.run({ config: {}, data_schema: { foo: { foo: 'bar' } } });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('run: required and optional params', async () => {
    const response = await client.v1.extraction.run({
      config: {
        chunk_mode: 'PAGE',
        cite_sources: true,
        confidence_scores: true,
        extract_model: 'openai-gpt-4-1',
        extraction_mode: 'FAST',
        extraction_target: 'PER_DOC',
        high_resolution_mode: true,
        invalidate_cache: true,
        multimodal_fast_mode: true,
        num_pages_context: 1,
        page_range: 'page_range',
        parse_model: 'openai-gpt-4o',
        priority: 'low',
        system_prompt: 'system_prompt',
        use_reasoning: true,
      },
      data_schema: { foo: { foo: 'bar' } },
      organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      file: { data: 'data', mime_type: 'mime_type' },
      file_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      text: 'text',
      webhook_configurations: [
        {
          webhook_events: ['extract.pending'],
          webhook_headers: { foo: 'string' },
          webhook_output_format: 'webhook_output_format',
          webhook_url: 'webhook_url',
        },
      ],
    });
  });
});

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import LlamaCloud, { toFile } from 'llama-cloud';

const client = new LlamaCloud({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource jobs', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.extraction.jobs.create({
      extraction_agent_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      file_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
  test.skip('create: required and optional params', async () => {
    const response = await client.extraction.jobs.create({
      extraction_agent_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      file_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      from_ui: true,
      config_override: {
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
      data_schema_override: { foo: { foo: 'bar' } },
      priority: 'low',
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

  // Prism tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.extraction.jobs.list({
      extraction_agent_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
  test.skip('list: required and optional params', async () => {
    const response = await client.extraction.jobs.list({
      extraction_agent_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // Prism tests are disabled
  test.skip('batch: only required params', async () => {
    const responsePromise = client.extraction.jobs.batch({
      extraction_agent_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      file_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
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
  test.skip('batch: required and optional params', async () => {
    const response = await client.extraction.jobs.batch({
      extraction_agent_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      file_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      from_ui: true,
      config_override: {
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
      data_schema_override: { foo: { foo: 'bar' } },
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

  // Prism tests are disabled
  test.skip('file: only required params', async () => {
    const responsePromise = client.extraction.jobs.file({
      extraction_agent_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
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
  test.skip('file: required and optional params', async () => {
    const response = await client.extraction.jobs.file({
      extraction_agent_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
      from_ui: true,
      config_override: 'config_override',
      data_schema_override: 'data_schema_override',
    });
  });

  // Prism tests are disabled
  test.skip('get', async () => {
    const responsePromise = client.extraction.jobs.get('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getResult', async () => {
    const responsePromise = client.extraction.jobs.getResult('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getResult: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.extraction.jobs.getResult(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        {
          organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(LlamaCloud.NotFoundError);
  });
});

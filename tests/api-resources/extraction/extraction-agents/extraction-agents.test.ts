// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import LlamaCloud from '@llamaindex/llama-cloud';

const client = new LlamaCloud({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource extractionAgents', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.extraction.extractionAgents.create({
      config: {},
      data_schema: { foo: { foo: 'bar' } },
      name: 'x',
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
    const response = await client.extraction.extractionAgents.create({
      config: {
        chunk_mode: 'PAGE',
        citation_bbox: true,
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
      name: 'x',
      organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.extraction.extractionAgents.update(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        config: {},
        data_schema: { foo: { foo: 'bar' } },
      },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.extraction.extractionAgents.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      config: {
        chunk_mode: 'PAGE',
        citation_bbox: true,
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
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.extraction.extractionAgents.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.extraction.extractionAgents.list(
        {
          include_default: true,
          organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(LlamaCloud.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.extraction.extractionAgents.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('get', async () => {
    const responsePromise = client.extraction.extractionAgents.get('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});

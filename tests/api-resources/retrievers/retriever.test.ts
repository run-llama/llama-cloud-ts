// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import LlamaCloud from 'llama-cloud';

const client = new LlamaCloud({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource retriever', () => {
  // Prism tests are disabled
  test.skip('search: only required params', async () => {
    const responsePromise = client.retrievers.retriever.search('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      query: 'x',
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
  test.skip('search: required and optional params', async () => {
    const response = await client.retrievers.retriever.search('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      query: 'x',
      organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      mode: 'routing',
      rerank_config: { top_n: 1, type: 'system_default' },
      rerank_top_n: 0,
    });
  });
});

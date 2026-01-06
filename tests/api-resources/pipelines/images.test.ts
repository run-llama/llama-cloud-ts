// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import LlamaCloud from '@llamaindex/llama-cloud';

const client = new LlamaCloud({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource images', () => {
  // Prism tests are disabled
  test.skip('getPageFigure: only required params', async () => {
    const responsePromise = client.pipelines.images.getPageFigure('figure_name', {
      id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      page_index: 0,
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
  test.skip('getPageFigure: required and optional params', async () => {
    const response = await client.pipelines.images.getPageFigure('figure_name', {
      id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      page_index: 0,
      organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // Prism tests are disabled
  test.skip('getPageScreenshot: only required params', async () => {
    const responsePromise = client.pipelines.images.getPageScreenshot(0, {
      id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
  test.skip('getPageScreenshot: required and optional params', async () => {
    const response = await client.pipelines.images.getPageScreenshot(0, {
      id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });
});

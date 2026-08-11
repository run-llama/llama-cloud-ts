// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import LlamaCloud from '@llamaindex/llama-cloud';

const client = new LlamaCloud({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource jobDataPoints', () => {
  // Mock server tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.jobDataPoints.list({ job_type: 'parse' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: required and optional params', async () => {
    const response = await client.jobDataPoints.list({
      job_type: 'parse',
      created_at_on_or_after: '2019-12-27T18:11:19.117Z',
      created_at_on_or_before: '2019-12-27T18:11:19.117Z',
      hours: 24,
      organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      page_size: 100,
      page_token: 'page_token',
      project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      status: ['completed', 'failed'],
    });
  });
});

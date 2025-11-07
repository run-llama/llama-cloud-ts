// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import LlamaCloud from 'llama-cloud';

const client = new LlamaCloud({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource files', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.pipelines.files.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      body: [{ file_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' }],
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
    const response = await client.pipelines.files.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      body: [{ file_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', custom_metadata: { foo: { foo: 'bar' } } }],
    });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.pipelines.files.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      pipeline_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
  test.skip('update: required and optional params', async () => {
    const response = await client.pipelines.files.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      pipeline_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      custom_metadata: { foo: { foo: 'bar' } },
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.pipelines.files.list('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
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
      client.pipelines.files.list(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { data_source_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', only_manually_uploaded: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(LlamaCloud.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.pipelines.files.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      pipeline_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
  test.skip('delete: required and optional params', async () => {
    const response = await client.pipelines.files.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      pipeline_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // Prism tests are disabled
  test.skip('getStatus: only required params', async () => {
    const responsePromise = client.pipelines.files.getStatus('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      pipeline_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
  test.skip('getStatus: required and optional params', async () => {
    const response = await client.pipelines.files.getStatus('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      pipeline_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // Prism tests are disabled
  test.skip('getStatusCounts', async () => {
    const responsePromise = client.pipelines.files.getStatusCounts('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getStatusCounts: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.pipelines.files.getStatusCounts(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { data_source_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', only_manually_uploaded: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(LlamaCloud.NotFoundError);
  });
});

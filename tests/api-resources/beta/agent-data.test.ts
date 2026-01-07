// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import LlamaCloud from '@llamaindex/llama-cloud';

const client = new LlamaCloud({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource agentData', () => {
  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.beta.agentData.update('item_id', { data: { foo: 'bar' } });
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
    const response = await client.beta.agentData.update('item_id', {
      data: { foo: 'bar' },
      organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.beta.agentData.delete('item_id');
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
      client.beta.agentData.delete(
        'item_id',
        {
          organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(LlamaCloud.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('agentData: only required params', async () => {
    const responsePromise = client.beta.agentData.agentData({
      data: { foo: 'bar' },
      deployment_name: 'deployment_name',
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
  test.skip('agentData: required and optional params', async () => {
    const response = await client.beta.agentData.agentData({
      data: { foo: 'bar' },
      deployment_name: 'deployment_name',
      organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      collection: 'collection',
    });
  });

  // Prism tests are disabled
  test.skip('aggregate: only required params', async () => {
    const responsePromise = client.beta.agentData.aggregate({ deployment_name: 'deployment_name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('aggregate: required and optional params', async () => {
    const response = await client.beta.agentData.aggregate({
      deployment_name: 'deployment_name',
      organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      collection: 'collection',
      count: true,
      filter: {
        foo: {
          eq: 0,
          gt: 0,
          gte: 0,
          includes: [0],
          lt: 0,
          lte: 0,
        },
      },
      first: true,
      group_by: ['string'],
      offset: 0,
      order_by: 'order_by',
      page_size: 0,
      page_token: 'page_token',
    });
  });

  // Prism tests are disabled
  test.skip('deleteByQuery: only required params', async () => {
    const responsePromise = client.beta.agentData.deleteByQuery({ deployment_name: 'deployment_name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('deleteByQuery: required and optional params', async () => {
    const response = await client.beta.agentData.deleteByQuery({
      deployment_name: 'deployment_name',
      organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      collection: 'collection',
      filter: {
        foo: {
          eq: 0,
          gt: 0,
          gte: 0,
          includes: [0],
          lt: 0,
          lte: 0,
        },
      },
    });
  });

  // Prism tests are disabled
  test.skip('get', async () => {
    const responsePromise = client.beta.agentData.get('item_id');
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
      client.beta.agentData.get(
        'item_id',
        {
          organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(LlamaCloud.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('search: only required params', async () => {
    const responsePromise = client.beta.agentData.search({ deployment_name: 'deployment_name' });
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
    const response = await client.beta.agentData.search({
      deployment_name: 'deployment_name',
      organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      collection: 'collection',
      filter: {
        foo: {
          eq: 0,
          gt: 0,
          gte: 0,
          includes: [0],
          lt: 0,
          lte: 0,
        },
      },
      include_total: true,
      offset: 0,
      order_by: 'order_by',
      page_size: 0,
      page_token: 'page_token',
    });
  });
});

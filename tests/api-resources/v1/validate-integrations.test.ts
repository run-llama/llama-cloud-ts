// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import LlamacloudProd from 'llamacloud-prod';

const client = new LlamacloudProd({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource validateIntegrations', () => {
  // Prism tests are disabled
  test.skip('validateDataSinkConnection: only required params', async () => {
    const responsePromise = client.v1.validateIntegrations.validateDataSinkConnection({
      component: { foo: 'bar' },
      name: 'name',
      sink_type: 'PINECONE',
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
  test.skip('validateDataSinkConnection: required and optional params', async () => {
    const response = await client.v1.validateIntegrations.validateDataSinkConnection({
      component: { foo: 'bar' },
      name: 'name',
      sink_type: 'PINECONE',
    });
  });

  // Prism tests are disabled
  test.skip('validateDataSourceConnection: only required params', async () => {
    const responsePromise = client.v1.validateIntegrations.validateDataSourceConnection({
      component: { foo: 'bar' },
      name: 'name',
      source_type: 'S3',
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
  test.skip('validateDataSourceConnection: required and optional params', async () => {
    const response = await client.v1.validateIntegrations.validateDataSourceConnection({
      component: { foo: 'bar' },
      name: 'name',
      source_type: 'S3',
      existing_data_source_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      custom_metadata: { foo: { foo: 'bar' } },
    });
  });

  // Prism tests are disabled
  test.skip('validateEmbeddingConnection', async () => {
    const responsePromise = client.v1.validateIntegrations.validateEmbeddingConnection({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});

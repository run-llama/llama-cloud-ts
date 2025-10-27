// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import LlamacloudProd from 'llamacloud-prod';

const client = new LlamacloudProd({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource billing', () => {
  // Prism tests are disabled
  test.skip('createCustomerPortalSession: only required params', async () => {
    const responsePromise = client.v1.billing.createCustomerPortalSession({
      organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      return_url: 'https://example.com',
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
  test.skip('createCustomerPortalSession: required and optional params', async () => {
    const response = await client.v1.billing.createCustomerPortalSession({
      organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      return_url: 'https://example.com',
    });
  });

  // Prism tests are disabled
  test.skip('createIntentAndCustomerSession: only required params', async () => {
    const responsePromise = client.v1.billing.createIntentAndCustomerSession({
      organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      plan_name: 'free',
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
  test.skip('createIntentAndCustomerSession: required and optional params', async () => {
    const response = await client.v1.billing.createIntentAndCustomerSession({
      organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      plan_name: 'free',
    });
  });

  // Prism tests are disabled
  test.skip('downgradePlan: only required params', async () => {
    const responsePromise = client.v1.billing.downgradePlan({
      organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
  test.skip('downgradePlan: required and optional params', async () => {
    const response = await client.v1.billing.downgradePlan({
      organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });
});

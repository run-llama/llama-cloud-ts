// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import LlamaCloud from 'llama-cloud';

const client = new LlamaCloud({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource roles', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.organizations.users.roles.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      body_organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      role_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      user_id: 'user_id',
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
    const response = await client.organizations.users.roles.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      body_organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      role_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      user_id: 'user_id',
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.organizations.users.roles.list('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
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
      client.organizations.users.roles.list(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(LlamaCloud.NotFoundError);
  });
});

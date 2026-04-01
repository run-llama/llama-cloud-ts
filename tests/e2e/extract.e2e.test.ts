/**
 * End-to-end tests for the Extract V2 resource.
 *
 * These tests hit the real LlamaCloud API and require:
 *   - LLAMA_CLOUD_API_KEY env var to be set
 *
 * Run with:
 *   LLAMA_CLOUD_API_KEY=... npx jest tests/e2e/extract.e2e.test.ts
 */

import fs from 'fs';
import path from 'path';
import LlamaCloud, { toFile } from '@llamaindex/llama-cloud';

const apiKey = process.env['LLAMA_CLOUD_API_KEY'];

const TEST_PDF = path.resolve(__dirname, 'TOS.pdf');

const SIMPLE_SCHEMA = {
  type: 'object',
  properties: {
    title: { type: 'string', description: 'The title or heading of the document' },
  },
};

const describeE2E = apiKey ? describe : describe.skip;

describeE2E('Extract V2 E2E', () => {
  let client: LlamaCloud;
  let fileId: string;

  // 5 minute timeout for e2e tests
  jest.setTimeout(300_000);

  beforeAll(async () => {
    client = new LlamaCloud({ apiKey: apiKey! });

    // Upload test file once for all tests
    const fileBuffer = fs.readFileSync(TEST_PDF);
    const uploaded = await client.files.create({
      file: await toFile(fileBuffer, 'TOS.pdf'),
      purpose: 'extract',
    });
    fileId = uploaded.id;
  });

  test('create and get', async () => {
    const job = await client.extract.create({
      file_input: fileId,
      configuration: { data_schema: SIMPLE_SCHEMA, extraction_target: 'per_doc' },
    });

    expect(job.id).toBeTruthy();
    expect(['PENDING', 'RUNNING', 'COMPLETED']).toContain(job.status);

    const fetched = await client.extract.get(job.id);
    expect(fetched.id).toBe(job.id);
  });

  test('waitForCompletion', async () => {
    const job = await client.extract.create({
      file_input: fileId,
      configuration: { data_schema: SIMPLE_SCHEMA, extraction_target: 'per_doc' },
    });

    const completed = await client.extract.waitForCompletion(job.id, undefined, {
      pollingInterval: 2,
      verbose: true,
    });

    expect(completed.status).toBe('COMPLETED');
    expect(completed.extract_result).not.toBeNull();
  });

  test('run (end-to-end convenience method)', async () => {
    const result = await client.extract.run(
      {
        file_input: fileId,
        configuration: { data_schema: SIMPLE_SCHEMA, extraction_target: 'per_doc' },
      },
      {
        pollingInterval: 2,
        verbose: true,
      },
    );

    expect(result.id).toBeTruthy();
    expect(result.status).toBe('COMPLETED');
    expect(result.extract_result).not.toBeNull();
  });

  test('list jobs', async () => {
    const page = await client.extract.list();
    const jobs: any[] = [];
    for await (const job of page) {
      jobs.push(job);
      if (jobs.length >= 3) break;
    }
    expect(jobs.length).toBeGreaterThan(0);
    expect(jobs[0]!.id).toBeTruthy();
  });
});

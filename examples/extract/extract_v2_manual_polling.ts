/**
 * Extract V2 — manual polling with create() + waitForCompletion().
 *
 * Demonstrates finer-grained control over the extraction workflow:
 * create the job, optionally inspect it, then poll for completion
 * with custom backoff settings.
 */
import LlamaCloud, { toFile } from '@llamaindex/llama-cloud';
import fs from 'fs';

// Define the schema for the extraction
const modelsSchema = {
  type: 'object',
  properties: {
    model_names: {
      type: 'array',
      items: { type: 'string' },
      description: 'List of models mentioned.',
    },
  },
};

async function main() {
  const client = new LlamaCloud();

  // Upload a file for extraction
  const fileObj = await client.files.create({
    file: await toFile(fs.readFileSync('../example_files/attention_is_all_you_need.pdf'), 'attention_is_all_you_need.pdf'),
    purpose: 'extract',
  });

  // Step 1: Create the extraction job
  const job = await client.extract.create({
    type: 'file_id',
    value: fileObj.id,
    config: { extract_options: { data_schema: modelsSchema } },
  });
  console.log(`Created job ${job.id} with status: ${job.status}`);

  // Step 2: Optionally inspect the job before waiting
  const fetched = await client.extract.get(job.id);
  console.log(`Current status: ${fetched.status}`);

  // Step 3: Wait for completion with custom polling settings
  const completed = await client.extract.waitForCompletion(job.id, undefined, {
    pollingInterval: 2,
    backoff: 'linear',
    verbose: true,
  });

  console.log('Status:', completed.status);
  console.log('Result:', completed.extract_result);

  // Step 4: List recent extract jobs
  const page = await client.extract.list();
  for await (const j of page) {
    console.log(`  Job ${j.id}: ${j.status}`);
    break; // just show the first one
  }
}

main();

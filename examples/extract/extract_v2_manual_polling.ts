import LlamaCloud from '@llamaindex/llama-cloud';
import fs from 'fs';

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
    file: fs.createReadStream('../example_files/attention_is_all_you_need.pdf'),
    purpose: 'extract',
  });

  // Create the extraction job
  const job = await client.extract.create({
    type: 'file_id',
    value: fileObj.id,
    config: { extract_options: { data_schema: modelsSchema } },
  });
  console.log(`Created job ${job.id} with status: ${job.status}`);

  // Wait for completion with custom polling settings
  const completed = await client.extract.waitForCompletion(job.id, undefined, {
    pollingInterval: 2,
    verbose: true,
  });

  console.log('Status:', completed.status);
  console.log('Result:', completed.extract_result);
}

main();

/**
 * Extract V2 — end-to-end convenience method.
 *
 * Upload a file and extract structured data in a single call using
 * client.extract.run(), which handles job creation, polling, and
 * returning the completed result.
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

  // Run extraction end-to-end (creates job, polls until complete)
  const result = await client.extract.run(
    {
      type: 'file_id',
      value: fileObj.id,
      config: { extract_options: { data_schema: modelsSchema } },
    },
    { verbose: true },
  );

  console.log('Status:', result.status);
  console.log('Result:', result.extract_result);
}

main();

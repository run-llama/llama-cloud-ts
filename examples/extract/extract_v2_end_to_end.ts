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

async function extractDocument() {
  const client = new LlamaCloud();

  // Upload a file for extraction
  const fileObj = await client.files.create({
    file: fs.createReadStream('../example_files/attention_is_all_you_need.pdf'),
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

(async () => {
  await extractDocument();
})();

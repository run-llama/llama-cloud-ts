import LlamaCloud from '@llamaindex/llama-cloud';
import fs from 'fs';

async function parseDoc() {
  const client = new LlamaCloud();

  // Upload and wait for completion
  const result = await client.parsing.parse({
    // The file to parse
    upload_file: fs.createReadStream('../example_files/attention_is_all_you_need.pdf'),
    tier: 'agentic',
    version: 'latest',
    expand: ['text', 'markdown', 'items'],
  });

  console.log(result.markdown);
  console.log(result.text);
  console.log(result.items);
}

// Run the examples
(async () => {
  await parseDoc();
})();

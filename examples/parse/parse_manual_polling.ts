import LlamaCloud from 'llama-cloud';
import fs from 'fs';

async function main() {
  const client = new LlamaCloud();

  // Or, upload without directly waiting
  const job = await client.parsing.create({
    // The file to parse
    upload_file: fs.createReadStream('../example_files/attention_is_all_you_need.pdf'),
    tier: 'agentic',
    version: 'latest',
  });

  // Poll for completion
  let result = await client.parsing.get(job.id, { expand: ['markdown', 'text', 'items'] });
  while (result.job.status === 'PENDING' || result.job.status === 'RUNNING') {
    console.log(`Job status: ${result.job.status}. Waiting...`);
    await new Promise((resolve) => setTimeout(resolve, 3000));

    result = await client.parsing.get(job.id, { expand: ['markdown', 'text', 'items'] });
  }

  // Get the result you want
  const text = result.text;
  console.log(text);

  const markdown = result.markdown;
  console.log(markdown);

  const jsonData = result.items;
  console.log(jsonData);
}

main();

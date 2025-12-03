import LlamaCloud from 'llama-cloud';
import fs from 'fs';

async function main() {
  const client = new LlamaCloud();

  // Or, upload without directly waiting
  const job = await client.parsing.uploadFile({
    // The file to parse
    file: fs.createReadStream('../example_files/attention_is_all_you_need.pdf'),
    parse_mode: 'parse_page_with_agent',
    model: 'openai-gpt-4-1-mini',
    high_res_ocr: true,
    adaptive_long_table: true,
    outlined_table_extraction: true,
    precise_bounding_box: true,
  });

  // Poll for completion
  while (true) {
    const jobResult = await client.parsing.job.get(job.id);
    if (jobResult.status !== 'PENDING') {
      break;
    }
    console.log(`Job status: ${jobResult.status}. Waiting...`);
    await new Promise((resolve) => setTimeout(resolve, 3000));
  }

  // Get the result you want
  const text = await client.parsing.job.result.getText(job.id);
  console.log(text);

  const markdown = await client.parsing.job.result.getMarkdown(job.id);
  console.log(markdown);

  const jsonData = await client.parsing.job.result.getJson(job.id);
  console.log(Object.keys((jsonData.pages as any)[0]));
}

main();

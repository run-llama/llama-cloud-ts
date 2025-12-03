import LlamaCloud from 'llama-cloud';
import fs from 'fs';

function isPageScreenshot(name: string): boolean {
  return /^page_\d+\.(png|jpg|jpeg)$/.test(name);
}

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

  // Get the images from the json result
  const jsonData = await client.parsing.job.result.getJson(job.id);
  for (const page of jsonData.pages as any[]) {
    for (const image of page['images']) {
      // Only download page screenshots for now
      if (!isPageScreenshot(image['name'])) {
        continue;
      }

      const imageResp = await client.parsing.job.result.getImage(image['name'], { job_id: job.id });
      const buffer = Buffer.from(await imageResp.arrayBuffer());
      fs.writeFileSync(`./downloaded_${image['name']}`, buffer);
      console.log(`Downloaded image: ${image['name']}`);
    }
  }
}

main();

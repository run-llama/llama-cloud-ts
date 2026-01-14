import LlamaCloud from '@llamaindex/llama-cloud';
import fs from 'fs';

function isPageScreenshot(imageName: string): boolean {
  return /^page_(\d+)\.jpg$/.test(imageName);
}

async function parseDoc() {
  const client = new LlamaCloud();

  // Upload a file
  const fileObj = await client.files.create({
    file: fs.createReadStream('../example_files/attention_is_all_you_need.pdf'),
    purpose: 'parse',
  });

  // Trigger and wait for completion
  const result = await client.parsing.parse({
    // The file to parse
    file_id: fileObj.id,
    tier: 'agentic',
    version: 'latest',
    output_options: {
      // Enable extraction of page screenshots
      images_to_save: ['screenshot']
    },
    expand: ['images_content_metadata'],
  });

  for (const image of result.images_content_metadata?.images || []) {
    if (isPageScreenshot(image.filename)) {
      console.log(`Found page screenshot: ${image.filename}, Presigned URL: ${image.presigned_url}`);
    }
  }
}

// Run the example
(async () => {
  await parseDoc();
})();

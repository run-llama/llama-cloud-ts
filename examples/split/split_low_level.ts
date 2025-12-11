import LlamaCloud from 'llama-cloud';
import fs from 'fs';

// Sleep helper function
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Example demonstrating the low-level API for splitting documents.
 *
 * This example shows the individual steps:
 * 1. Upload a file
 * 2. Create a split job
 * 3. Poll for completion
 * 4. Get the result
 *
 * This approach gives you more control over the process, such as
 * implementing custom polling logic or handling intermediate states.
 *
 * This example also demonstrates using allow_uncategorized to capture
 * pages that don't match any defined category.
 */
async function splitDocumentLowLevel() {
  const client = new LlamaCloud();

  // Upload a file to split
  const fileObj = await client.files.upload({
    upload_file: fs.createReadStream('examples/example_files/turing+imagenet+attention.pdf'),
  });
  const fileId = fileObj.id;
  console.log(`Uploaded file with ID: ${fileId}`);

  // Define a single category - unmatched pages will be "uncategorized"
  const categories = [
    {
      name: 'research_paper',
      description:
        'A formal academic paper presenting original research, including methodology, results, and citations in a structured format',
    },
  ];

  // Create a split job with allow_uncategorized enabled
  const job = await client.beta.split.create({
    categories,
    document_input: { type: 'file_id', value: fileId },
    splitting_strategy: {
      allow_uncategorized: true,
    },
  });

  console.log(`Created split job with ID: ${job.id}`);
  console.log(`Initial status: ${job.status}`);

  // Poll for completion manually
  let completedJob = job;
  while (completedJob.status === 'pending' || completedJob.status === 'processing') {
    console.log(`Job status: ${completedJob.status}. Waiting...`);
    await sleep(2000);
    completedJob = await client.beta.split.get(job.id);
  }

  console.log(`\nSplit job completed with status: ${completedJob.status}`);

  if (completedJob.result) {
    console.log(`\nFound ${completedJob.result.segments.length} document segments:`);
    for (const segment of completedJob.result.segments) {
      console.log(`  Category: ${segment.category}`);
      console.log(`  Pages: ${segment.pages.join(', ')}`);
      console.log(`  Confidence: ${segment.confidence_category}`);
      console.log();
    }
  }

  if (completedJob.error_message) {
    console.error(`Error: ${completedJob.error_message}`);
  }
}

/**
 * Example using waitForCompletion() for cleaner polling.
 */
async function splitDocumentWithWaitForCompletion() {
  const client = new LlamaCloud();

  // Upload a file to split
  const fileObj = await client.files.upload({
    upload_file: fs.createReadStream('../example_files/turing+imagenet+attention.pdf'),
  });
  const fileId = fileObj.id;
  console.log(`Uploaded file with ID: ${fileId}`);

  // Define categories
  const categories = [
    {
      name: 'essay',
      description:
        'A philosophical or reflective piece of writing that presents personal viewpoints, arguments, or thoughts on a topic without strict formal structure',
    },
    {
      name: 'research_paper',
      description:
        'A formal academic paper presenting original research, including methodology, results, and citations in a structured format',
    },
  ];

  // Create a split job
  const job = await client.beta.split.create({
    categories,
    document_input: { type: 'file_id', value: fileId },
  });

  console.log(`Created split job with ID: ${job.id}`);

  // Use waitForCompletion for cleaner polling
  const completedJob = await client.beta.split.waitForCompletion(job.id, {
    pollingInterval: 1.0,
    maxInterval: 5.0,
    timeout: 300.0,
    backoff: 'linear',
    verbose: true,
  });

  console.log(`\nSplit job completed with status: ${completedJob.status}`);

  if (completedJob.result) {
    console.log(`\nFound ${completedJob.result.segments.length} document segments:`);
    for (const segment of completedJob.result.segments) {
      console.log(`  Category: ${segment.category}`);
      console.log(`  Pages: ${segment.pages.join(', ')}`);
      console.log(`  Confidence: ${segment.confidence_category}`);
      console.log();
    }
  }
}

// Run the examples
(async () => {
  await splitDocumentLowLevel();
  // await splitDocumentWithWaitForCompletion();
})();


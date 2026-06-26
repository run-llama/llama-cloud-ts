import LlamaCloud from '@llamaindex/llama-cloud';
import fs from 'fs';

// Run a Parse V2 batch over every file in a directory:
//   1. create an ephemeral source directory
//   2. upload files into it
//   3. create a batch that runs parse_v2 on each file
//   4. poll until the batch reaches a terminal state
//   5. expand per-file results to resolve each file's parse job reference
//
// Batch creation requires a Pro or Enterprise plan and is rate limited.
// The client reads your API key from the LLAMA_CLOUD_API_KEY environment variable.

// A built-in Parse preset. You can also pass a saved `cfg-...` configuration id,
// or an `extract_v2` configuration id with type 'extract_v2'.
const CONFIGURATION_ID = 'cfg-PARSE_AGENTIC';
const FILES = ['../example_files/attention_is_all_you_need.pdf', '../example_files/sample_spreadsheet.xlsx'];
const TERMINAL_STATUSES = new Set(['COMPLETED', 'FAILED', 'CANCELLED']);

async function runBatch() {
  const client = new LlamaCloud();

  // 1. Ephemeral directories are automatically eligible for cleanup.
  const expiresAt = new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString();
  const directory = await client.beta.directories.create({
    name: 'batch-example',
    type: 'ephemeral',
    expires_at: expiresAt,
  });
  console.log(`Created directory ${directory.id}`);

  // 2. Upload the files to process.
  for (const filePath of FILES) {
    const displayName = filePath.split('/').pop()!;
    await client.beta.directories.files.upload(directory.id, {
      upload_file: fs.createReadStream(filePath),
      display_name: displayName,
    });
    console.log(`Uploaded ${displayName}`);
  }

  // 3. Create the batch. The same product job runs on every file.
  let batch = await client.batches.create({
    source_directory_id: directory.id,
    config: {
      job: {
        type: 'parse_v2',
        configuration_id: CONFIGURATION_ID,
      },
    },
  });
  console.log(`Created batch ${batch.id} (${batch.status})`);

  // 4. Poll until the batch reaches a terminal state.
  while (!TERMINAL_STATUSES.has(batch.status)) {
    await new Promise((resolve) => setTimeout(resolve, 10_000));
    batch = await client.batches.get(batch.id);
    console.log(`Batch status: ${batch.status}`);
  }

  // Batch-level FAILED means the orchestration failed and cannot provide a
  // reliable per-file result set.
  if (batch.status === 'FAILED') {
    throw new Error('Batch orchestration failed');
  }

  // 5. Expand per-file results to resolve each file's parse job reference.
  //    Per-file failures are reported in `error_message`; successful files
  //    include a `job_reference` for the underlying parse job.
  const completed = await client.batches.get(batch.id, { expand: ['results'] });
  for (const result of completed.results ?? []) {
    if (result.error_message) {
      console.log(`${result.source_directory_file_id} failed: ${result.error_message}`);
    } else if (result.job_reference) {
      console.log(
        `${result.source_directory_file_id} -> ${result.job_reference.type} ${result.job_reference.id}`,
      );
    } else {
      console.log(`${result.source_directory_file_id} has no job reference yet`);
    }
  }
}

(async () => {
  await runBatch();
})();

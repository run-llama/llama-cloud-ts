import LlamaCloud from '@llamaindex/llama-cloud';
import fs from 'fs';

// Define the schema for the extraction
interface Models {
  model_names?: string[] | null;
}

// JSON Schema equivalent to Pydantic model
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

// Sleep helper function
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function extractStateless() {
  const client = new LlamaCloud();

  // Upload the file first
  const fileObj = await client.files.upload({
    upload_file: fs.createReadStream('../example_files/attention_is_all_you_need.pdf'),
  });
  const fileId = fileObj.id;

  // Stateless one-shot extraction
  const extractJob = await client.extraction.run({
    file_id: fileId,
    config: {
      chunk_mode: 'PAGE',
      cite_sources: true,
      extraction_target: 'PER_DOC',
      extraction_mode: 'BALANCED',
    },
    data_schema: modelsSchema,
  });

  // Poll for completion
  while (true) {
    const jobResult = await client.extraction.jobs.get(extractJob.id);
    if (jobResult.status !== 'PENDING') {
      break;
    }
    console.log(`Job status: ${jobResult.status}. Waiting...`);
    await sleep(3000);
  }

  const result = await client.extraction.jobs.getResult(extractJob.id);

  const extractedData = result.data as Models;
  console.log('Extracted model names:', extractedData.model_names);
}

async function extractWithAgent() {
  const client = new LlamaCloud();

  // Upload the file first
  const fileObj = await client.files.upload({
    upload_file: fs.createReadStream('../example_files/attention_is_all_you_need.pdf'),
  });
  const fileId = fileObj.id;

  // Create an extraction agent
  const agent = await client.extraction.extractionAgents.create({
    config: {
      chunk_mode: 'PAGE',
      cite_sources: true,
      extraction_target: 'PER_DOC',
      extraction_mode: 'BALANCED',
    },
    data_schema: modelsSchema,
    name: 'My Extraction Agent',
  });

  // Use the extraction agent
  const extractJob = await client.extraction.jobs.create({
    extraction_agent_id: agent.id,
    file_id: fileId,
  });

  // Poll for completion
  while (true) {
    const jobResult = await client.extraction.jobs.get(extractJob.id);
    if (jobResult.status !== 'PENDING') {
      break;
    }
    console.log(`Job status: ${jobResult.status}. Waiting...`);
    await sleep(3000);
  }

  const result = await client.extraction.jobs.getResult(extractJob.id);

  const extractedData = result.data as Models;
  console.log('Extracted model names with agent:', extractedData.model_names);
}

// Run the examples
(async () => {
  await extractStateless();
  // await extractWithAgent();
})();

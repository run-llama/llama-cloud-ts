# Llama Cloud TypeScript SDK

[![NPM version](<https://img.shields.io/npm/v/@llamaindex/llama-cloud.svg?label=npm%20(stable)>)](https://npmjs.org/package/@llamaindex/llama-cloud) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/@llamaindex/llama-cloud)

The official TypeScript SDK for [LlamaParse](https://cloud.llamaindex.ai) - the enterprise platform for agentic OCR and document processing.

With this SDK, create powerful workflows across many features:

- **Parse** - Agentic OCR and parsing for 130+ formats
- **Extract** - Structured data extraction with custom schemas
- **Classify** - Document categorization with natural-language rules
- **Agents** - Deploy document agents as APIs
- **Index** - Document ingestion and embedding for RAG

## Documentation

- [Get an API Key](https://cloud.llamaindex.ai)
- [Getting Started Guide](https://developers.llamaindex.ai/typescript/cloud/)
- [Full API Reference](https://developers.api.llamaindex.ai/api/typescript)

## Installation

```sh
npm install @llamaindex/llama-cloud
```

## Quick Start

```ts
import LlamaCloud from '@llamaindex/llama-cloud';

const client = new LlamaCloud({
  apiKey: process.env['LLAMA_CLOUD_API_KEY'], // This is the default and can be omitted
});

// Parse a document
const job = await client.parsing.create({
  tier: 'agentic',
  version: 'latest',
  file_id: 'your-file-id',
});

console.log(job.id);
```

## File Uploads

```ts
import fs from 'fs';
import LlamaCloud from '@llamaindex/llama-cloud';

const client = new LlamaCloud();

// Upload using a file stream
await client.files.create({
  file: fs.createReadStream('/path/to/document.pdf'),
  purpose: 'purpose',
});

// Or using a File object
await client.files.create({
  file: new File(['content'], 'document.txt'),
  purpose: 'purpose',
});
```

## MCP Server

Use the Llama Cloud MCP Server to enable AI assistants to interact with the API:

[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=%40llamaindex%2Fllama-cloud-mcp&config=eyJuYW1lIjoiQGxsYW1haW5kZXgvbGxhbWEtY2xvdWQtbWNwIiwidHJhbnNwb3J0IjoiaHR0cCIsInVybCI6Imh0dHBzOi8vbGxhbWFjbG91ZC1wcm9kLnN0bG1jcC5jb20iLCJoZWFkZXJzIjp7IngtbGxhbWEtY2xvdWQtYXBpLWtleSI6Ik15IEFQSSBLZXkifX0)
[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22%40llamaindex%2Fllama-cloud-mcp%22%2C%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fllamacloud-prod.stlmcp.com%22%2C%22headers%22%3A%7B%22x-llama-cloud-api-key%22%3A%22My%20API%20Key%22%7D%7D)

## Error Handling

When the API returns a non-success status code, an `APIError` subclass is thrown:

```ts
await client.pipelines.list({ project_id: 'my-project-id' }).catch((err) => {
  if (err instanceof LlamaCloud.APIError) {
    console.log(err.status); // 400
    console.log(err.name); // BadRequestError
  }
});
```

| Status Code | Error Type                 |
| ----------- | -------------------------- |
| 400         | `BadRequestError`          |
| 401         | `AuthenticationError`      |
| 403         | `PermissionDeniedError`    |
| 404         | `NotFoundError`            |
| 422         | `UnprocessableEntityError` |
| 429         | `RateLimitError`           |
| >=500       | `InternalServerError`      |
| N/A         | `APIConnectionError`       |

## Retries and Timeouts

The SDK automatically retries requests 2 times on connection errors, timeouts, rate limits, and 5xx errors. Requests timeout after 1 minute by default. Functions that combine multiple API calls (e.g. `client.parsing.parse()`) will have larger timeouts by default to account for the multiple requests and polling.

```ts
const client = new LlamaCloud({
  maxRetries: 0, // Disable retries (default: 2)
  timeout: 30 * 1000, // 30 second timeout (default: 1 minute)
});
```

## Pagination

List methods support auto-pagination with `for await...of`:

```ts
async function fetchAllExtractV2Jobs(params) {
  const allExtractV2Jobs = [];
  // Automatically fetches more pages as needed.
  for await (const extractV2Job of client.extract.list({ page_size: 20 })) {
    allExtractV2Jobs.push(extractV2Job);
  }
  return allExtractV2Jobs;
}
```

Or fetch one page at a time:

```ts
let page = await client.extract.list({ page_size: 20 });
for (const extractV2Job of page.items) {
  console.log(extractV2Job);
}

while (page.hasNextPage()) {
  page = await page.getNextPage();
}
```

## Logging

Configure logging via the `LLAMA_CLOUD_LOG` environment variable or the `logLevel` option:

```ts
const client = new LlamaCloud({
  logLevel: 'debug', // 'debug' | 'info' | 'warn' | 'error' | 'off'
});
```

## Requirements

- TypeScript >= 4.9
- Node.js 20+, Deno 1.28+, Bun 1.0+, or modern browsers

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md).

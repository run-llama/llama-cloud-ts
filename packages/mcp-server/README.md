# Llama Cloud TypeScript MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Direct invocation

You can run the MCP Server directly via `npx`:

```sh
export LLAMA_CLOUD_API_KEY="My API Key"
npx -y @llamaindex/llama-cloud-mcp@latest
```

### Via MCP Client

There is a partial list of existing clients at [modelcontextprotocol.io](https://modelcontextprotocol.io/clients). If you already
have a client, consult their documentation to install the MCP server.

For clients with a configuration JSON, it might look something like this:

```json
{
  "mcpServers": {
    "llamaindex_llama_cloud_api": {
      "command": "npx",
      "args": ["-y", "@llamaindex/llama-cloud-mcp"],
      "env": {
        "LLAMA_CLOUD_API_KEY": "My API Key"
      }
    }
  }
}
```

### Cursor

If you use Cursor, you can install the MCP server by using the button below. You will need to set your environment variables
in Cursor's `mcp.json`, which can be found in Cursor Settings > Tools & MCP > New MCP Server.

[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=%40llamaindex%2Fllama-cloud-mcp&config=eyJuYW1lIjoiQGxsYW1haW5kZXgvbGxhbWEtY2xvdWQtbWNwIiwidHJhbnNwb3J0Ijoic3NlIiwidXJsIjoiaHR0cHM6Ly9sbGFtYWNsb3VkLXByb2Quc3RsbWNwLmNvbS9zc2UiLCJlbnYiOnsiTExBTUFfQ0xPVURfQVBJX0tFWSI6IlNldCB5b3VyIExMQU1BX0NMT1VEX0FQSV9LRVkgaGVyZS4ifX0)

### VS Code

If you use MCP, you can install the MCP server by clicking the link below. You will need to set your environment variables
in VS Code's `mcp.json`, which can be found via Command Palette > MCP: Open User Configuration.

[Open VS Code](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22%40llamaindex%2Fllama-cloud-mcp%22%2C%22type%22%3A%22sse%22%2C%22url%22%3A%22https%3A%2F%2Fllamacloud-prod.stlmcp.com%2Fsse%22%2C%22env%22%3A%7B%22LLAMA_CLOUD_API_KEY%22%3A%22Set%20your%20LLAMA_CLOUD_API_KEY%20here.%22%7D%7D)

### Claude Code

If you use Claude Code, you can install the MCP server by running the command below in your terminal. You will need to set your
environment variables in Claude Code's `.claude.json`, which can be found in your home directory.

```
claude mcp add llamaindex_llama_cloud_mcp_api --env LLAMA_CLOUD_API_KEY="Your LLAMA_CLOUD_API_KEY here." --transport sse https://llamacloud-prod.stlmcp.com/sse
```

## Code Mode

This MCP server is built on the "Code Mode" tool scheme. In this MCP Server,
your agent will write code against the TypeScript SDK, which will then be executed in an
isolated sandbox. To accomplish this, the server will expose two tools to your agent:

- The first tool is a docs search tool, which can be used to generically query for
  documentation about your API/SDK.

- The second tool is a code tool, where the agent can write code against the TypeScript SDK.
  The code will be executed in a sandbox environment without web or filesystem access. Then,
  anything the code returns or prints will be returned to the agent as the result of the
  tool call.

Using this scheme, agents are capable of performing very complex tasks deterministically
and repeatably.

## Running remotely

Launching the client with `--transport=http` launches the server as a remote server using Streamable HTTP transport. The `--port` setting can choose the port it will run on, and the `--socket` setting allows it to run on a Unix socket.

Authorization can be provided via the `Authorization` header using the Bearer scheme.

Additionally, authorization can be provided via the following headers:
| Header | Equivalent client option | Security scheme |
| ----------------------- | ------------------------ | --------------- |
| `x-llama-cloud-api-key` | `apiKey` | HTTPBearer |

A configuration JSON for this server might look like this, assuming the server is hosted at `http://localhost:3000`:

```json
{
  "mcpServers": {
    "llamaindex_llama_cloud_api": {
      "url": "http://localhost:3000",
      "headers": {
        "Authorization": "Bearer <auth value>"
      }
    }
  }
}
```

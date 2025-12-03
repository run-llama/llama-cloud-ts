import LlamaCloud from 'llama-cloud';
import fs from 'fs';

async function getJson() {
  const client = new LlamaCloud();

  // Upload and wait for completion
  const result = await client.parsing.parse({
    // The file to parse
    file: fs.createReadStream('../example_files/attention_is_all_you_need.pdf'),
    parse_mode: 'parse_page_with_agent',
    model: 'openai-gpt-4-1-mini',
    high_res_ocr: true,
    adaptive_long_table: true,
    outlined_table_extraction: true,
    precise_bounding_box: true,
    result_type: 'json',
  });

  // Print various formats of the parsed result
  if ('pages' in result) {
    console.log(result.pages); // JSON result
    console.log((result.pages as any)[0]['text']);
    console.log((result.pages as any)[0]['markdown']);
    console.log((result.pages as any)[0]['images'][0]);
  }
}

async function getMarkdown() {
  const client = new LlamaCloud();

  // Upload and wait for completion
  const result = await client.parsing.parse({
    // The file to parse
    file: fs.createReadStream('../example_files/attention_is_all_you_need.pdf'),
    parse_mode: 'parse_page_with_agent',
    model: 'openai-gpt-4-1-mini',
    high_res_ocr: true,
    adaptive_long_table: true,
    outlined_table_extraction: true,
    precise_bounding_box: true,
    result_type: 'markdown',
  });

  // Print various formats of the parsed result
  if ('markdown' in result) {
    console.log(result.markdown); // Markdown result
  }
}

async function getText() {
  const client = new LlamaCloud();

  // Upload and wait for completion
  const result = await client.parsing.parse({
    // The file to parse
    file: fs.createReadStream('../example_files/attention_is_all_you_need.pdf'),
    parse_mode: 'parse_page_with_agent',
    model: 'openai-gpt-4-1-mini',
    high_res_ocr: true,
    adaptive_long_table: true,
    outlined_table_extraction: true,
    precise_bounding_box: true,
    result_type: 'text',
  });

  // Print various formats of the parsed result
  if ('text' in result) {
    console.log(result.text); // text result
  }
}

// Run the examples
(async () => {
  await getJson();
  // await getMarkdown();
  // await getText();
})();

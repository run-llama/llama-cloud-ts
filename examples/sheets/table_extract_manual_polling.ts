import LlamaCloud from '@llamaindex/llama-cloud';
import fs from 'fs';

async function extractTables() {
  const client = new LlamaCloud();

  // Upload a spreadsheet
  const fileObj = await client.files.create({
    file: fs.createReadStream('../example_files/sample_spreadsheet.xlsx'),
    purpose: 'parse',
  });
  const fileId = fileObj.id;

  // Extract tables from the spreadsheet
  const job = await client.beta.sheets.create({
    file_id: fileId,
    config: {
      generate_additional_metadata: true,
    },
  });

  let result = await client.beta.sheets.get(job.id, { include_results: true });
  while (result.status === 'PENDING') {
    console.log(`Job status: ${result.status}. Waiting...`);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    result = await client.beta.sheets.get(job.id, { include_results: true });
  }

  // Print extracted regions
  console.log(result.regions);

  // Download result parquet files
  if (result.regions) {
    for (const region of result.regions) {
      if (region.region_id) {
        const parquetRegionResp = await client.beta.sheets.getResultTable(
          region.region_type as 'table' | 'extra' | 'cell_metadata',
          {
            spreadsheet_job_id: result.id,
            region_id: region.region_id,
          },
        );

        const url = parquetRegionResp.url;
        const response = await fetch(url);
        const buffer = Buffer.from(await response.arrayBuffer());
        fs.writeFileSync(`./downloaded_region_${region.region_id}.parquet`, buffer);
        console.log(`Downloaded parquet for region ${region.region_id}`);

        const parquetMetadataResp = await client.beta.sheets.getResultTable('cell_metadata', {
          spreadsheet_job_id: result.id,
          region_id: region.region_id,
        });

        const metadataUrl = parquetMetadataResp.url;
        const metadataResponse = await fetch(metadataUrl);
        const metadataBuffer = Buffer.from(await metadataResponse.arrayBuffer());
        fs.writeFileSync(`./downloaded_region_${region.region_id}_metadata.parquet`, metadataBuffer);
        console.log(`Downloaded parquet metadata for region ${region.region_id}`);
      }
    }
  }
}

extractTables();

import LlamaCloud from 'llama-cloud';

async function createIndex() {
  const client = new LlamaCloud();

  // Creating an index involves 5 main pieces
  // 1. The data sink (if blank, the default managed vector store will be used)
  // 2. The embedding configuration (if blank, the default embedding config will be used)
  // 3. The data source (if blank, no data will be connected by default, you can always add data later)
  // 4. The parsing parameters when ingesting data (if blank, the default parsing parameters will be used)
  // 5. The transform configuration when processing ingested data (if blank, the default transform configuration will be used)
  const pipeline = await client.pipelines.upsert({
    name: 'my-first-index',
    project_id: 'my-project-id',
    data_sink_id: await createDataSink(),
    embedding_config: {
      type: 'OPENAI_EMBEDDING',
      component: {
        api_key: 'sk-1234',
        model_name: 'text-embedding-3-small',
      },
    },
    llama_parse_parameters: {},
    transform_config: {
      mode: 'auto',
      chunk_overlap: 128,
      chunk_size: 1028,
    },
  });

  console.log(pipeline.id);

  // Optional: Upload data after creating the index
  const documents = await client.pipelines.documents.create(pipeline.id, {
    body: [
      {
        text: 'This is my first document to be indexed.',
        metadata: { source: 'generated' },
      },
    ],
  });
  console.log(`Uploaded ${documents.length} documents to the index.`);

  // Optional: Connect a data source after creating the index
  // const dataSourceId = await createDataSource();
  // await client.pipelines.dataSources.updateDataSources(pipeline.id, {
  //  body: [
  //    {
  //      data_source_id: dataSourceId,
  //      sync_interval: 43200.0 // Optional, scheduled sync frequency in seconds. In this case, every 12 hours.
  //    },
  //  ],
  // });
  // console.log(`Connected data source ${dataSourceId} to the index.`);

  // Optional: Wait for indexing to complete
  let statusResp = await client.pipelines.getStatus(pipeline.id, {});
  while (statusResp.status === 'NOT_STARTED' || statusResp.status === 'IN_PROGRESS') {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    statusResp = await client.pipelines.getStatus(pipeline.id, {});
  }

  console.log(`Indexing completed with status: ${statusResp.status}`);
}

async function createDataSink(): Promise<string> {
  const client = new LlamaCloud();

  // create a data sink
  const dataSink = await client.dataSinks.create({
    name: 'my-pinecone-data-sink',
    component: {
      api_key: 'my-pinecone-api-key',
      index_name: 'my-pinecone-index',
    },
    sink_type: 'PINECONE',
  });

  return dataSink.id;
}

async function createDataSource(): Promise<string> {
  const client = new LlamaCloud();

  // create a data source
  const dataSource = await client.dataSources.create({
    name: 'my-s3-data-source',
    component: {
      bucket: 'my-bucket',
      aws_access_id: 'my-access-id',
      prefix: 'documents/',
    },
    source_type: 'S3',
    project_id: 'my-project-id',
  });

  return dataSource.id;
}

// Run the example
(async () => {
  await createIndex();
})();

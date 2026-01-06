import LlamaCloud from '@llamaindex/llama-cloud';

async function retrieveFromExistingIndexPipeline() {
  const client = new LlamaCloud();

  // Retrieve directly from the index pipeline
  const results = await client.pipelines.retrieve('your-existing-pipeline-id', {
    query: 'What are the key concepts of the document?',
    dense_similarity_top_k: 20,
    sparse_similarity_top_k: 20,
    alpha: 0.5,
    enable_reranking: true,
    rerank_top_n: 5,
  });

  for (const n of results.retrieval_nodes || []) {
    console.log(`Score: ${n.score}, Text: ${n.node?.text}`);
  }

  // Create a named retrieval configuration for reuse
  // Can combine one or more pipelines in a single retriever
  const retriever = await client.retrievers.create({
    name: 'my-retriever',
    pipelines: [
      {
        name: 'my-pipeline-retriever',
        description: 'Contains information about XYZ',
        pipeline_id: 'your-existing-pipeline-id',
        preset_retrieval_parameters: {
          dense_similarity_top_k: 20,
          sparse_similarity_top_k: 20,
          alpha: 0.5,
          enable_reranking: true,
          rerank_top_n: 5,
        },
      },
    ],
  });

  // Use the retriever to search across its pipelines
  const combinedResults = await client.retrievers.retriever.search(retriever.id, {
    query: 'Summarize the main points of the document.',
    // "full" or "routing" -- decides whether to use all pipelines or route to a specific one
    mode: 'full',
    // Set the top-n of all pipelines in the retriever
    rerank_top_n: 3,
  });

  if (!combinedResults.nodes) {
    console.log('No results found.');
    return;
  }

  for (const combinedN of combinedResults.nodes) {
    console.log(`Score: ${combinedN.score}, Text: ${combinedN.node?.text}`);
  }
}

// Run the example
(async () => {
  await retrieveFromExistingIndexPipeline();
})();

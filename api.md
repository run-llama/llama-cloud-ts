# Shared

Types:

- <code><a href="./src/resources/shared.ts">CloudAstraDBVectorStore</a></code>
- <code><a href="./src/resources/shared.ts">CloudAzStorageBlobDataSource</a></code>
- <code><a href="./src/resources/shared.ts">CloudAzureAISearchVectorStore</a></code>
- <code><a href="./src/resources/shared.ts">CloudBoxDataSource</a></code>
- <code><a href="./src/resources/shared.ts">CloudConfluenceDataSource</a></code>
- <code><a href="./src/resources/shared.ts">CloudJiraDataSource</a></code>
- <code><a href="./src/resources/shared.ts">CloudJiraDataSourceV2</a></code>
- <code><a href="./src/resources/shared.ts">CloudMilvusVectorStore</a></code>
- <code><a href="./src/resources/shared.ts">CloudMongoDBAtlasVectorSearch</a></code>
- <code><a href="./src/resources/shared.ts">CloudNotionPageDataSource</a></code>
- <code><a href="./src/resources/shared.ts">CloudOneDriveDataSource</a></code>
- <code><a href="./src/resources/shared.ts">CloudPineconeVectorStore</a></code>
- <code><a href="./src/resources/shared.ts">CloudPostgresVectorStore</a></code>
- <code><a href="./src/resources/shared.ts">CloudQdrantVectorStore</a></code>
- <code><a href="./src/resources/shared.ts">CloudS3DataSource</a></code>
- <code><a href="./src/resources/shared.ts">CloudSharepointDataSource</a></code>
- <code><a href="./src/resources/shared.ts">CloudSlackDataSource</a></code>
- <code><a href="./src/resources/shared.ts">FailureHandlingConfig</a></code>
- <code><a href="./src/resources/shared.ts">PgVectorHnswSettings</a></code>

# Projects

Types:

- <code><a href="./src/resources/projects.ts">Project</a></code>
- <code><a href="./src/resources/projects.ts">ProjectListResponse</a></code>

Methods:

- <code title="get /api/v1/projects">client.projects.<a href="./src/resources/projects.ts">list</a>({ ...params }) -> ProjectListResponse</code>
- <code title="get /api/v1/projects/{project_id}">client.projects.<a href="./src/resources/projects.ts">get</a>(projectID, { ...params }) -> Project</code>

# DataSinks

Types:

- <code><a href="./src/resources/data-sinks.ts">DataSink</a></code>
- <code><a href="./src/resources/data-sinks.ts">DataSinkListResponse</a></code>

Methods:

- <code title="post /api/v1/data-sinks">client.dataSinks.<a href="./src/resources/data-sinks.ts">create</a>({ ...params }) -> DataSink</code>
- <code title="put /api/v1/data-sinks/{data_sink_id}">client.dataSinks.<a href="./src/resources/data-sinks.ts">update</a>(dataSinkID, { ...params }) -> DataSink</code>
- <code title="get /api/v1/data-sinks">client.dataSinks.<a href="./src/resources/data-sinks.ts">list</a>({ ...params }) -> DataSinkListResponse</code>
- <code title="delete /api/v1/data-sinks/{data_sink_id}">client.dataSinks.<a href="./src/resources/data-sinks.ts">delete</a>(dataSinkID) -> void</code>
- <code title="get /api/v1/data-sinks/{data_sink_id}">client.dataSinks.<a href="./src/resources/data-sinks.ts">get</a>(dataSinkID) -> DataSink</code>

# DataSources

Types:

- <code><a href="./src/resources/data-sources.ts">DataSource</a></code>
- <code><a href="./src/resources/data-sources.ts">DataSourceReaderVersionMetadata</a></code>
- <code><a href="./src/resources/data-sources.ts">DataSourceListResponse</a></code>

Methods:

- <code title="post /api/v1/data-sources">client.dataSources.<a href="./src/resources/data-sources.ts">create</a>({ ...params }) -> DataSource</code>
- <code title="put /api/v1/data-sources/{data_source_id}">client.dataSources.<a href="./src/resources/data-sources.ts">update</a>(dataSourceID, { ...params }) -> DataSource</code>
- <code title="get /api/v1/data-sources">client.dataSources.<a href="./src/resources/data-sources.ts">list</a>({ ...params }) -> DataSourceListResponse</code>
- <code title="delete /api/v1/data-sources/{data_source_id}">client.dataSources.<a href="./src/resources/data-sources.ts">delete</a>(dataSourceID) -> void</code>
- <code title="get /api/v1/data-sources/{data_source_id}">client.dataSources.<a href="./src/resources/data-sources.ts">get</a>(dataSourceID) -> DataSource</code>

# Files

Types:

- <code><a href="./src/resources/files.ts">File</a></code>
- <code><a href="./src/resources/files.ts">FileCreate</a></code>
- <code><a href="./src/resources/files.ts">PresignedURL</a></code>
- <code><a href="./src/resources/files.ts">FileCreateResponse</a></code>
- <code><a href="./src/resources/files.ts">FileQueryResponse</a></code>

Methods:

- <code title="post /api/v1/beta/files">client.files.<a href="./src/resources/files.ts">create</a>({ ...params }) -> FileCreateResponse</code>
- <code title="delete /api/v1/beta/files/{file_id}">client.files.<a href="./src/resources/files.ts">delete</a>(fileID, { ...params }) -> void</code>
- <code title="get /api/v1/beta/files/{file_id}/content">client.files.<a href="./src/resources/files.ts">get</a>(fileID, { ...params }) -> PresignedURL</code>
- <code title="post /api/v1/beta/files/query">client.files.<a href="./src/resources/files.ts">query</a>({ ...params }) -> FileQueryResponse</code>

# Pipelines

Types:

- <code><a href="./src/resources/pipelines/pipelines.ts">AdvancedModeTransformConfig</a></code>
- <code><a href="./src/resources/pipelines/pipelines.ts">AutoTransformConfig</a></code>
- <code><a href="./src/resources/pipelines/pipelines.ts">AzureOpenAIEmbedding</a></code>
- <code><a href="./src/resources/pipelines/pipelines.ts">AzureOpenAIEmbeddingConfig</a></code>
- <code><a href="./src/resources/pipelines/pipelines.ts">BedrockEmbedding</a></code>
- <code><a href="./src/resources/pipelines/pipelines.ts">BedrockEmbeddingConfig</a></code>
- <code><a href="./src/resources/pipelines/pipelines.ts">CohereEmbedding</a></code>
- <code><a href="./src/resources/pipelines/pipelines.ts">CohereEmbeddingConfig</a></code>
- <code><a href="./src/resources/pipelines/pipelines.ts">DataSinkCreate</a></code>
- <code><a href="./src/resources/pipelines/pipelines.ts">GeminiEmbedding</a></code>
- <code><a href="./src/resources/pipelines/pipelines.ts">GeminiEmbeddingConfig</a></code>
- <code><a href="./src/resources/pipelines/pipelines.ts">HuggingFaceInferenceAPIEmbedding</a></code>
- <code><a href="./src/resources/pipelines/pipelines.ts">HuggingFaceInferenceAPIEmbeddingConfig</a></code>
- <code><a href="./src/resources/pipelines/pipelines.ts">LlamaParseParameters</a></code>
- <code><a href="./src/resources/pipelines/pipelines.ts">LlmParameters</a></code>
- <code><a href="./src/resources/pipelines/pipelines.ts">ManagedIngestionStatusResponse</a></code>
- <code><a href="./src/resources/pipelines/pipelines.ts">MessageRole</a></code>
- <code><a href="./src/resources/pipelines/pipelines.ts">MetadataFilters</a></code>
- <code><a href="./src/resources/pipelines/pipelines.ts">OpenAIEmbedding</a></code>
- <code><a href="./src/resources/pipelines/pipelines.ts">OpenAIEmbeddingConfig</a></code>
- <code><a href="./src/resources/pipelines/pipelines.ts">PageFigureNodeWithScore</a></code>
- <code><a href="./src/resources/pipelines/pipelines.ts">PageScreenshotNodeWithScore</a></code>
- <code><a href="./src/resources/pipelines/pipelines.ts">Pipeline</a></code>
- <code><a href="./src/resources/pipelines/pipelines.ts">PipelineCreate</a></code>
- <code><a href="./src/resources/pipelines/pipelines.ts">PipelineMetadataConfig</a></code>
- <code><a href="./src/resources/pipelines/pipelines.ts">PipelineType</a></code>
- <code><a href="./src/resources/pipelines/pipelines.ts">PresetRetrievalParams</a></code>
- <code><a href="./src/resources/pipelines/pipelines.ts">RetrievalMode</a></code>
- <code><a href="./src/resources/pipelines/pipelines.ts">SparseModelConfig</a></code>
- <code><a href="./src/resources/pipelines/pipelines.ts">VertexAIEmbeddingConfig</a></code>
- <code><a href="./src/resources/pipelines/pipelines.ts">VertexTextEmbedding</a></code>
- <code><a href="./src/resources/pipelines/pipelines.ts">PipelineRetrieveResponse</a></code>
- <code><a href="./src/resources/pipelines/pipelines.ts">PipelineListResponse</a></code>

Methods:

- <code title="post /api/v1/pipelines">client.pipelines.<a href="./src/resources/pipelines/pipelines.ts">create</a>({ ...params }) -> Pipeline</code>
- <code title="post /api/v1/pipelines/{pipeline_id}/retrieve">client.pipelines.<a href="./src/resources/pipelines/pipelines.ts">retrieve</a>(pipelineID, { ...params }) -> PipelineRetrieveResponse</code>
- <code title="put /api/v1/pipelines/{pipeline_id}">client.pipelines.<a href="./src/resources/pipelines/pipelines.ts">update</a>(pipelineID, { ...params }) -> Pipeline</code>
- <code title="get /api/v1/pipelines">client.pipelines.<a href="./src/resources/pipelines/pipelines.ts">list</a>({ ...params }) -> PipelineListResponse</code>
- <code title="delete /api/v1/pipelines/{pipeline_id}">client.pipelines.<a href="./src/resources/pipelines/pipelines.ts">delete</a>(pipelineID) -> void</code>
- <code title="get /api/v1/pipelines/{pipeline_id}">client.pipelines.<a href="./src/resources/pipelines/pipelines.ts">get</a>(pipelineID) -> Pipeline</code>
- <code title="get /api/v1/pipelines/{pipeline_id}/status">client.pipelines.<a href="./src/resources/pipelines/pipelines.ts">getStatus</a>(pipelineID, { ...params }) -> ManagedIngestionStatusResponse</code>
- <code title="put /api/v1/pipelines">client.pipelines.<a href="./src/resources/pipelines/pipelines.ts">upsert</a>({ ...params }) -> Pipeline</code>

## Sync

Methods:

- <code title="post /api/v1/pipelines/{pipeline_id}/sync">client.pipelines.sync.<a href="./src/resources/pipelines/sync.ts">create</a>(pipelineID) -> Pipeline</code>
- <code title="post /api/v1/pipelines/{pipeline_id}/sync/cancel">client.pipelines.sync.<a href="./src/resources/pipelines/sync.ts">cancel</a>(pipelineID) -> Pipeline</code>

## DataSources

Types:

- <code><a href="./src/resources/pipelines/data-sources.ts">PipelineDataSource</a></code>
- <code><a href="./src/resources/pipelines/data-sources.ts">DataSourceGetDataSourcesResponse</a></code>
- <code><a href="./src/resources/pipelines/data-sources.ts">DataSourceUpdateDataSourcesResponse</a></code>

Methods:

- <code title="put /api/v1/pipelines/{pipeline_id}/data-sources/{data_source_id}">client.pipelines.dataSources.<a href="./src/resources/pipelines/data-sources.ts">update</a>(dataSourceID, { ...params }) -> PipelineDataSource</code>
- <code title="get /api/v1/pipelines/{pipeline_id}/data-sources">client.pipelines.dataSources.<a href="./src/resources/pipelines/data-sources.ts">getDataSources</a>(pipelineID) -> DataSourceGetDataSourcesResponse</code>
- <code title="get /api/v1/pipelines/{pipeline_id}/data-sources/{data_source_id}/status">client.pipelines.dataSources.<a href="./src/resources/pipelines/data-sources.ts">getStatus</a>(dataSourceID, { ...params }) -> ManagedIngestionStatusResponse</code>
- <code title="post /api/v1/pipelines/{pipeline_id}/data-sources/{data_source_id}/sync">client.pipelines.dataSources.<a href="./src/resources/pipelines/data-sources.ts">sync</a>(dataSourceID, { ...params }) -> Pipeline</code>
- <code title="put /api/v1/pipelines/{pipeline_id}/data-sources">client.pipelines.dataSources.<a href="./src/resources/pipelines/data-sources.ts">updateDataSources</a>(pipelineID, [ ...body ]) -> DataSourceUpdateDataSourcesResponse</code>

## Images

Types:

- <code><a href="./src/resources/pipelines/images.ts">ImageGetPageFigureResponse</a></code>
- <code><a href="./src/resources/pipelines/images.ts">ImageGetPageScreenshotResponse</a></code>
- <code><a href="./src/resources/pipelines/images.ts">ImageListPageFiguresResponse</a></code>
- <code><a href="./src/resources/pipelines/images.ts">ImageListPageScreenshotsResponse</a></code>

Methods:

- <code title="get /api/v1/files/{id}/page-figures/{page_index}/{figure_name}">client.pipelines.images.<a href="./src/resources/pipelines/images.ts">getPageFigure</a>(figureName, { ...params }) -> unknown</code>
- <code title="get /api/v1/files/{id}/page_screenshots/{page_index}">client.pipelines.images.<a href="./src/resources/pipelines/images.ts">getPageScreenshot</a>(pageIndex, { ...params }) -> unknown</code>
- <code title="get /api/v1/files/{id}/page-figures">client.pipelines.images.<a href="./src/resources/pipelines/images.ts">listPageFigures</a>(id, { ...params }) -> ImageListPageFiguresResponse</code>
- <code title="get /api/v1/files/{id}/page_screenshots">client.pipelines.images.<a href="./src/resources/pipelines/images.ts">listPageScreenshots</a>(id, { ...params }) -> ImageListPageScreenshotsResponse</code>

## Files

Types:

- <code><a href="./src/resources/pipelines/files.ts">PipelineFile</a></code>
- <code><a href="./src/resources/pipelines/files.ts">FileCreateResponse</a></code>
- <code><a href="./src/resources/pipelines/files.ts">FileGetStatusCountsResponse</a></code>

Methods:

- <code title="put /api/v1/pipelines/{pipeline_id}/files">client.pipelines.files.<a href="./src/resources/pipelines/files.ts">create</a>(pipelineID, [ ...body ]) -> FileCreateResponse</code>
- <code title="put /api/v1/pipelines/{pipeline_id}/files/{file_id}">client.pipelines.files.<a href="./src/resources/pipelines/files.ts">update</a>(fileID, { ...params }) -> PipelineFile</code>
- <code title="get /api/v1/pipelines/{pipeline_id}/files2">client.pipelines.files.<a href="./src/resources/pipelines/files.ts">list</a>(pipelineID, { ...params }) -> PipelineFilesPaginatedPipelineFiles</code>
- <code title="delete /api/v1/pipelines/{pipeline_id}/files/{file_id}">client.pipelines.files.<a href="./src/resources/pipelines/files.ts">delete</a>(fileID, { ...params }) -> void</code>
- <code title="get /api/v1/pipelines/{pipeline_id}/files/{file_id}/status">client.pipelines.files.<a href="./src/resources/pipelines/files.ts">getStatus</a>(fileID, { ...params }) -> ManagedIngestionStatusResponse</code>
- <code title="get /api/v1/pipelines/{pipeline_id}/files/status-counts">client.pipelines.files.<a href="./src/resources/pipelines/files.ts">getStatusCounts</a>(pipelineID, { ...params }) -> FileGetStatusCountsResponse</code>

## Metadata

Types:

- <code><a href="./src/resources/pipelines/metadata.ts">MetadataCreateResponse</a></code>

Methods:

- <code title="put /api/v1/pipelines/{pipeline_id}/metadata">client.pipelines.metadata.<a href="./src/resources/pipelines/metadata.ts">create</a>(pipelineID, { ...params }) -> MetadataCreateResponse</code>
- <code title="delete /api/v1/pipelines/{pipeline_id}/metadata">client.pipelines.metadata.<a href="./src/resources/pipelines/metadata.ts">deleteAll</a>(pipelineID) -> void</code>

## Documents

Types:

- <code><a href="./src/resources/pipelines/documents.ts">CloudDocument</a></code>
- <code><a href="./src/resources/pipelines/documents.ts">CloudDocumentCreate</a></code>
- <code><a href="./src/resources/pipelines/documents.ts">TextNode</a></code>
- <code><a href="./src/resources/pipelines/documents.ts">DocumentCreateResponse</a></code>
- <code><a href="./src/resources/pipelines/documents.ts">DocumentGetChunksResponse</a></code>
- <code><a href="./src/resources/pipelines/documents.ts">DocumentSyncResponse</a></code>
- <code><a href="./src/resources/pipelines/documents.ts">DocumentUpsertResponse</a></code>

Methods:

- <code title="post /api/v1/pipelines/{pipeline_id}/documents">client.pipelines.documents.<a href="./src/resources/pipelines/documents.ts">create</a>(pipelineID, [ ...body ]) -> DocumentCreateResponse</code>
- <code title="get /api/v1/pipelines/{pipeline_id}/documents/paginated">client.pipelines.documents.<a href="./src/resources/pipelines/documents.ts">list</a>(pipelineID, { ...params }) -> CloudDocumentsPaginatedCloudDocuments</code>
- <code title="delete /api/v1/pipelines/{pipeline_id}/documents/{document_id}">client.pipelines.documents.<a href="./src/resources/pipelines/documents.ts">delete</a>(documentID, { ...params }) -> void</code>
- <code title="get /api/v1/pipelines/{pipeline_id}/documents/{document_id}">client.pipelines.documents.<a href="./src/resources/pipelines/documents.ts">get</a>(documentID, { ...params }) -> CloudDocument</code>
- <code title="get /api/v1/pipelines/{pipeline_id}/documents/{document_id}/chunks">client.pipelines.documents.<a href="./src/resources/pipelines/documents.ts">getChunks</a>(documentID, { ...params }) -> DocumentGetChunksResponse</code>
- <code title="get /api/v1/pipelines/{pipeline_id}/documents/{document_id}/status">client.pipelines.documents.<a href="./src/resources/pipelines/documents.ts">getStatus</a>(documentID, { ...params }) -> ManagedIngestionStatusResponse</code>
- <code title="post /api/v1/pipelines/{pipeline_id}/documents/{document_id}/sync">client.pipelines.documents.<a href="./src/resources/pipelines/documents.ts">sync</a>(documentID, { ...params }) -> unknown</code>
- <code title="put /api/v1/pipelines/{pipeline_id}/documents">client.pipelines.documents.<a href="./src/resources/pipelines/documents.ts">upsert</a>(pipelineID, [ ...body ]) -> DocumentUpsertResponse</code>

# Retrievers

Types:

- <code><a href="./src/resources/retrievers/retrievers.ts">CompositeRetrievalMode</a></code>
- <code><a href="./src/resources/retrievers/retrievers.ts">CompositeRetrievalResult</a></code>
- <code><a href="./src/resources/retrievers/retrievers.ts">ReRankConfig</a></code>
- <code><a href="./src/resources/retrievers/retrievers.ts">Retriever</a></code>
- <code><a href="./src/resources/retrievers/retrievers.ts">RetrieverCreate</a></code>
- <code><a href="./src/resources/retrievers/retrievers.ts">RetrieverPipeline</a></code>
- <code><a href="./src/resources/retrievers/retrievers.ts">RetrieverListResponse</a></code>

Methods:

- <code title="post /api/v1/retrievers">client.retrievers.<a href="./src/resources/retrievers/retrievers.ts">create</a>({ ...params }) -> Retriever</code>
- <code title="put /api/v1/retrievers/{retriever_id}">client.retrievers.<a href="./src/resources/retrievers/retrievers.ts">update</a>(retrieverID, { ...params }) -> Retriever</code>
- <code title="get /api/v1/retrievers">client.retrievers.<a href="./src/resources/retrievers/retrievers.ts">list</a>({ ...params }) -> RetrieverListResponse</code>
- <code title="delete /api/v1/retrievers/{retriever_id}">client.retrievers.<a href="./src/resources/retrievers/retrievers.ts">delete</a>(retrieverID) -> void</code>
- <code title="get /api/v1/retrievers/{retriever_id}">client.retrievers.<a href="./src/resources/retrievers/retrievers.ts">get</a>(retrieverID, { ...params }) -> Retriever</code>
- <code title="post /api/v1/retrievers/retrieve">client.retrievers.<a href="./src/resources/retrievers/retrievers.ts">search</a>({ ...params }) -> CompositeRetrievalResult</code>
- <code title="put /api/v1/retrievers">client.retrievers.<a href="./src/resources/retrievers/retrievers.ts">upsert</a>({ ...params }) -> Retriever</code>

## Retriever

Methods:

- <code title="post /api/v1/retrievers/{retriever_id}/retrieve">client.retrievers.retriever.<a href="./src/resources/retrievers/retriever.ts">search</a>(retrieverID, { ...params }) -> CompositeRetrievalResult</code>

# Parsing

Types:

- <code><a href="./src/resources/parsing.ts">BBox</a></code>
- <code><a href="./src/resources/parsing.ts">FailPageMode</a></code>
- <code><a href="./src/resources/parsing.ts">ListItem</a></code>
- <code><a href="./src/resources/parsing.ts">LlamaParseSupportedFileExtensions</a></code>
- <code><a href="./src/resources/parsing.ts">ParsingJob</a></code>
- <code><a href="./src/resources/parsing.ts">ParsingLanguages</a></code>
- <code><a href="./src/resources/parsing.ts">ParsingMode</a></code>
- <code><a href="./src/resources/parsing.ts">StatusEnum</a></code>
- <code><a href="./src/resources/parsing.ts">ParsingCreateResponse</a></code>
- <code><a href="./src/resources/parsing.ts">ParsingListResponse</a></code>
- <code><a href="./src/resources/parsing.ts">ParsingGetResponse</a></code>

Methods:

- <code title="post /api/v2/parse">client.parsing.<a href="./src/resources/parsing.ts">create</a>({ ...params }) -> ParsingCreateResponse</code>
- <code title="get /api/v2/parse">client.parsing.<a href="./src/resources/parsing.ts">list</a>({ ...params }) -> ParsingListResponsesPaginatedClassifyJobs</code>
- <code title="get /api/v2/parse/{job_id}">client.parsing.<a href="./src/resources/parsing.ts">get</a>(jobID, { ...params }) -> ParsingGetResponse</code>

# Classifier

## Jobs

Types:

- <code><a href="./src/resources/classifier/jobs.ts">ClassifierRule</a></code>
- <code><a href="./src/resources/classifier/jobs.ts">ClassifyJob</a></code>
- <code><a href="./src/resources/classifier/jobs.ts">ClassifyParsingConfiguration</a></code>
- <code><a href="./src/resources/classifier/jobs.ts">JobGetResultsResponse</a></code>

Methods:

- <code title="post /api/v1/classifier/jobs">client.classifier.jobs.<a href="./src/resources/classifier/jobs.ts">create</a>({ ...params }) -> ClassifyJob</code>
- <code title="get /api/v1/classifier/jobs">client.classifier.jobs.<a href="./src/resources/classifier/jobs.ts">list</a>({ ...params }) -> ClassifyJobsPaginatedClassifyJobs</code>
- <code title="get /api/v1/classifier/jobs/{classify_job_id}">client.classifier.jobs.<a href="./src/resources/classifier/jobs.ts">get</a>(classifyJobID, { ...params }) -> ClassifyJob</code>
- <code title="get /api/v1/classifier/jobs/{classify_job_id}/results">client.classifier.jobs.<a href="./src/resources/classifier/jobs.ts">getResults</a>(classifyJobID, { ...params }) -> JobGetResultsResponse</code>

# Extraction

Methods:

- <code title="post /api/v1/extraction/run">client.extraction.<a href="./src/resources/extraction/extraction.ts">run</a>({ ...params }) -> ExtractJob</code>

## Jobs

Types:

- <code><a href="./src/resources/extraction/jobs.ts">ExtractJob</a></code>
- <code><a href="./src/resources/extraction/jobs.ts">WebhookConfiguration</a></code>
- <code><a href="./src/resources/extraction/jobs.ts">JobListResponse</a></code>
- <code><a href="./src/resources/extraction/jobs.ts">JobGetResultResponse</a></code>

Methods:

- <code title="post /api/v1/extraction/jobs">client.extraction.jobs.<a href="./src/resources/extraction/jobs.ts">create</a>({ ...params }) -> ExtractJob</code>
- <code title="get /api/v1/extraction/jobs">client.extraction.jobs.<a href="./src/resources/extraction/jobs.ts">list</a>({ ...params }) -> JobListResponse</code>
- <code title="post /api/v1/extraction/jobs/file">client.extraction.jobs.<a href="./src/resources/extraction/jobs.ts">file</a>({ ...params }) -> ExtractJob</code>
- <code title="get /api/v1/extraction/jobs/{job_id}">client.extraction.jobs.<a href="./src/resources/extraction/jobs.ts">get</a>(jobID) -> ExtractJob</code>
- <code title="get /api/v1/extraction/jobs/{job_id}/result">client.extraction.jobs.<a href="./src/resources/extraction/jobs.ts">getResult</a>(jobID, { ...params }) -> JobGetResultResponse</code>

## Runs

Types:

- <code><a href="./src/resources/extraction/runs.ts">ExtractConfig</a></code>
- <code><a href="./src/resources/extraction/runs.ts">ExtractRun</a></code>
- <code><a href="./src/resources/extraction/runs.ts">RunDeleteResponse</a></code>

Methods:

- <code title="get /api/v1/extraction/runs">client.extraction.runs.<a href="./src/resources/extraction/runs.ts">list</a>({ ...params }) -> ExtractRunsPaginatedExtractRuns</code>
- <code title="delete /api/v1/extraction/runs/{run_id}">client.extraction.runs.<a href="./src/resources/extraction/runs.ts">delete</a>(runID, { ...params }) -> unknown</code>
- <code title="get /api/v1/extraction/runs/{run_id}">client.extraction.runs.<a href="./src/resources/extraction/runs.ts">get</a>(runID, { ...params }) -> ExtractRun</code>
- <code title="get /api/v1/extraction/runs/by-job/{job_id}">client.extraction.runs.<a href="./src/resources/extraction/runs.ts">getByJob</a>(jobID, { ...params }) -> ExtractRun</code>

## ExtractionAgents

Types:

- <code><a href="./src/resources/extraction/extraction-agents/extraction-agents.ts">ExtractAgent</a></code>
- <code><a href="./src/resources/extraction/extraction-agents/extraction-agents.ts">ExtractionAgentListResponse</a></code>
- <code><a href="./src/resources/extraction/extraction-agents/extraction-agents.ts">ExtractionAgentDeleteResponse</a></code>

Methods:

- <code title="post /api/v1/extraction/extraction-agents">client.extraction.extractionAgents.<a href="./src/resources/extraction/extraction-agents/extraction-agents.ts">create</a>({ ...params }) -> ExtractAgent</code>
- <code title="put /api/v1/extraction/extraction-agents/{extraction_agent_id}">client.extraction.extractionAgents.<a href="./src/resources/extraction/extraction-agents/extraction-agents.ts">update</a>(extractionAgentID, { ...params }) -> ExtractAgent</code>
- <code title="get /api/v1/extraction/extraction-agents">client.extraction.extractionAgents.<a href="./src/resources/extraction/extraction-agents/extraction-agents.ts">list</a>({ ...params }) -> ExtractionAgentListResponse</code>
- <code title="delete /api/v1/extraction/extraction-agents/{extraction_agent_id}">client.extraction.extractionAgents.<a href="./src/resources/extraction/extraction-agents/extraction-agents.ts">delete</a>(extractionAgentID) -> unknown</code>
- <code title="get /api/v1/extraction/extraction-agents/{extraction_agent_id}">client.extraction.extractionAgents.<a href="./src/resources/extraction/extraction-agents/extraction-agents.ts">get</a>(extractionAgentID) -> ExtractAgent</code>

### Schema

Types:

- <code><a href="./src/resources/extraction/extraction-agents/schema.ts">SchemaGenerateSchemaResponse</a></code>
- <code><a href="./src/resources/extraction/extraction-agents/schema.ts">SchemaValidateSchemaResponse</a></code>

Methods:

- <code title="post /api/v1/extraction/extraction-agents/schema/generate">client.extraction.extractionAgents.schema.<a href="./src/resources/extraction/extraction-agents/schema.ts">generateSchema</a>({ ...params }) -> SchemaGenerateSchemaResponse</code>
- <code title="post /api/v1/extraction/extraction-agents/schema/validation">client.extraction.extractionAgents.schema.<a href="./src/resources/extraction/extraction-agents/schema.ts">validateSchema</a>({ ...params }) -> SchemaValidateSchemaResponse</code>

# Beta

## AgentData

Types:

- <code><a href="./src/resources/beta/agent-data.ts">AgentData</a></code>
- <code><a href="./src/resources/beta/agent-data.ts">AgentDataDeleteResponse</a></code>
- <code><a href="./src/resources/beta/agent-data.ts">AgentDataAggregateResponse</a></code>
- <code><a href="./src/resources/beta/agent-data.ts">AgentDataDeleteByQueryResponse</a></code>
- <code><a href="./src/resources/beta/agent-data.ts">AgentDataSearchResponse</a></code>

Methods:

- <code title="put /api/v1/beta/agent-data/{item_id}">client.beta.agentData.<a href="./src/resources/beta/agent-data.ts">update</a>(itemID, { ...params }) -> AgentData</code>
- <code title="delete /api/v1/beta/agent-data/{item_id}">client.beta.agentData.<a href="./src/resources/beta/agent-data.ts">delete</a>(itemID, { ...params }) -> AgentDataDeleteResponse</code>
- <code title="post /api/v1/beta/agent-data">client.beta.agentData.<a href="./src/resources/beta/agent-data.ts">agentData</a>({ ...params }) -> AgentData</code>
- <code title="post /api/v1/beta/agent-data/:aggregate">client.beta.agentData.<a href="./src/resources/beta/agent-data.ts">aggregate</a>({ ...params }) -> AgentDataAggregateResponse</code>
- <code title="post /api/v1/beta/agent-data/:delete">client.beta.agentData.<a href="./src/resources/beta/agent-data.ts">deleteByQuery</a>({ ...params }) -> AgentDataDeleteByQueryResponse</code>
- <code title="get /api/v1/beta/agent-data/{item_id}">client.beta.agentData.<a href="./src/resources/beta/agent-data.ts">get</a>(itemID, { ...params }) -> AgentData</code>
- <code title="post /api/v1/beta/agent-data/:search">client.beta.agentData.<a href="./src/resources/beta/agent-data.ts">search</a>({ ...params }) -> AgentDataSearchResponse</code>

## ParseConfigurations

Types:

- <code><a href="./src/resources/beta/parse-configurations.ts">ParseConfiguration</a></code>
- <code><a href="./src/resources/beta/parse-configurations.ts">ParseConfigurationCreate</a></code>
- <code><a href="./src/resources/beta/parse-configurations.ts">ParseConfigurationQueryResponse</a></code>

Methods:

- <code title="put /api/v1/beta/parse-configurations/{config_id}">client.beta.parseConfigurations.<a href="./src/resources/beta/parse-configurations.ts">update</a>(configID, { ...params }) -> ParseConfiguration</code>
- <code title="delete /api/v1/beta/parse-configurations/{config_id}">client.beta.parseConfigurations.<a href="./src/resources/beta/parse-configurations.ts">delete</a>(configID, { ...params }) -> void</code>
- <code title="get /api/v1/beta/parse-configurations/{config_id}">client.beta.parseConfigurations.<a href="./src/resources/beta/parse-configurations.ts">get</a>(configID, { ...params }) -> ParseConfiguration</code>
- <code title="get /api/v1/beta/parse-configurations">client.beta.parseConfigurations.<a href="./src/resources/beta/parse-configurations.ts">getParseConfigurations</a>({ ...params }) -> ParseConfigurationQueryResponse</code>
- <code title="post /api/v1/beta/parse-configurations">client.beta.parseConfigurations.<a href="./src/resources/beta/parse-configurations.ts">parseConfigurations</a>({ ...params }) -> ParseConfiguration</code>

## Sheets

Types:

- <code><a href="./src/resources/beta/sheets.ts">SheetsJob</a></code>
- <code><a href="./src/resources/beta/sheets.ts">SheetsParsingConfig</a></code>
- <code><a href="./src/resources/beta/sheets.ts">SheetDeleteJobResponse</a></code>

Methods:

- <code title="post /api/v1/beta/sheets/jobs">client.beta.sheets.<a href="./src/resources/beta/sheets.ts">create</a>({ ...params }) -> SheetsJob</code>
- <code title="get /api/v1/beta/sheets/jobs">client.beta.sheets.<a href="./src/resources/beta/sheets.ts">list</a>({ ...params }) -> SheetsJobsPaginatedClassifyJobs</code>
- <code title="delete /api/v1/beta/sheets/jobs/{spreadsheet_job_id}">client.beta.sheets.<a href="./src/resources/beta/sheets.ts">deleteJob</a>(spreadsheetJobID, { ...params }) -> unknown</code>
- <code title="get /api/v1/beta/sheets/jobs/{spreadsheet_job_id}">client.beta.sheets.<a href="./src/resources/beta/sheets.ts">get</a>(spreadsheetJobID, { ...params }) -> SheetsJob</code>
- <code title="get /api/v1/beta/sheets/jobs/{spreadsheet_job_id}/regions/{region_id}/result/{region_type}">client.beta.sheets.<a href="./src/resources/beta/sheets.ts">getResultTable</a>(regionType, { ...params }) -> PresignedURL</code>

## Directories

Types:

- <code><a href="./src/resources/beta/directories/directories.ts">DirectoryCreateResponse</a></code>
- <code><a href="./src/resources/beta/directories/directories.ts">DirectoryUpdateResponse</a></code>
- <code><a href="./src/resources/beta/directories/directories.ts">DirectoryListResponse</a></code>
- <code><a href="./src/resources/beta/directories/directories.ts">DirectoryGetResponse</a></code>

Methods:

- <code title="post /api/v1/beta/directories">client.beta.directories.<a href="./src/resources/beta/directories/directories.ts">create</a>({ ...params }) -> DirectoryCreateResponse</code>
- <code title="patch /api/v1/beta/directories/{directory_id}">client.beta.directories.<a href="./src/resources/beta/directories/directories.ts">update</a>(directoryID, { ...params }) -> DirectoryUpdateResponse</code>
- <code title="get /api/v1/beta/directories">client.beta.directories.<a href="./src/resources/beta/directories/directories.ts">list</a>({ ...params }) -> DirectoryListResponsesPaginatedClassifyJobs</code>
- <code title="delete /api/v1/beta/directories/{directory_id}">client.beta.directories.<a href="./src/resources/beta/directories/directories.ts">delete</a>(directoryID, { ...params }) -> void</code>
- <code title="get /api/v1/beta/directories/{directory_id}">client.beta.directories.<a href="./src/resources/beta/directories/directories.ts">get</a>(directoryID, { ...params }) -> DirectoryGetResponse</code>

### Files

Types:

- <code><a href="./src/resources/beta/directories/files.ts">FileUpdateResponse</a></code>
- <code><a href="./src/resources/beta/directories/files.ts">FileListResponse</a></code>
- <code><a href="./src/resources/beta/directories/files.ts">FileAddResponse</a></code>
- <code><a href="./src/resources/beta/directories/files.ts">FileGetResponse</a></code>
- <code><a href="./src/resources/beta/directories/files.ts">FileUploadResponse</a></code>

Methods:

- <code title="patch /api/v1/beta/directories/{directory_id}/files/{directory_file_id}">client.beta.directories.files.<a href="./src/resources/beta/directories/files.ts">update</a>(directoryFileID, { ...params }) -> FileUpdateResponse</code>
- <code title="get /api/v1/beta/directories/{directory_id}/files">client.beta.directories.files.<a href="./src/resources/beta/directories/files.ts">list</a>(directoryID, { ...params }) -> FileListResponsesPaginatedClassifyJobs</code>
- <code title="delete /api/v1/beta/directories/{directory_id}/files/{directory_file_id}">client.beta.directories.files.<a href="./src/resources/beta/directories/files.ts">delete</a>(directoryFileID, { ...params }) -> void</code>
- <code title="post /api/v1/beta/directories/{directory_id}/files">client.beta.directories.files.<a href="./src/resources/beta/directories/files.ts">add</a>(directoryID, { ...params }) -> FileAddResponse</code>
- <code title="get /api/v1/beta/directories/{directory_id}/files/{directory_file_id}">client.beta.directories.files.<a href="./src/resources/beta/directories/files.ts">get</a>(directoryFileID, { ...params }) -> FileGetResponse</code>
- <code title="post /api/v1/beta/directories/{directory_id}/files/upload">client.beta.directories.files.<a href="./src/resources/beta/directories/files.ts">upload</a>(directoryID, { ...params }) -> FileUploadResponse</code>

## Batch

Types:

- <code><a href="./src/resources/beta/batch/batch.ts">BatchCreateResponse</a></code>
- <code><a href="./src/resources/beta/batch/batch.ts">BatchListResponse</a></code>
- <code><a href="./src/resources/beta/batch/batch.ts">BatchCancelResponse</a></code>
- <code><a href="./src/resources/beta/batch/batch.ts">BatchGetStatusResponse</a></code>

Methods:

- <code title="post /api/v1/beta/batch-processing">client.beta.batch.<a href="./src/resources/beta/batch/batch.ts">create</a>({ ...params }) -> BatchCreateResponse</code>
- <code title="get /api/v1/beta/batch-processing">client.beta.batch.<a href="./src/resources/beta/batch/batch.ts">list</a>({ ...params }) -> BatchListResponsesPaginatedBatchItems</code>
- <code title="post /api/v1/beta/batch-processing/{job_id}/cancel">client.beta.batch.<a href="./src/resources/beta/batch/batch.ts">cancel</a>(jobID, { ...params }) -> BatchCancelResponse</code>
- <code title="get /api/v1/beta/batch-processing/{job_id}">client.beta.batch.<a href="./src/resources/beta/batch/batch.ts">getStatus</a>(jobID, { ...params }) -> BatchGetStatusResponse</code>

### JobItems

Types:

- <code><a href="./src/resources/beta/batch/job-items.ts">JobItemListResponse</a></code>
- <code><a href="./src/resources/beta/batch/job-items.ts">JobItemGetProcessingResultsResponse</a></code>

Methods:

- <code title="get /api/v1/beta/batch-processing/{job_id}/items">client.beta.batch.jobItems.<a href="./src/resources/beta/batch/job-items.ts">list</a>(jobID, { ...params }) -> JobItemListResponsesPaginatedBatchItems</code>
- <code title="get /api/v1/beta/batch-processing/items/{item_id}/processing-results">client.beta.batch.jobItems.<a href="./src/resources/beta/batch/job-items.ts">getProcessingResults</a>(itemID, { ...params }) -> JobItemGetProcessingResultsResponse</code>

## Split

Types:

- <code><a href="./src/resources/beta/split.ts">SplitCategory</a></code>
- <code><a href="./src/resources/beta/split.ts">SplitDocumentInput</a></code>
- <code><a href="./src/resources/beta/split.ts">SplitResultResponse</a></code>
- <code><a href="./src/resources/beta/split.ts">SplitSegmentResponse</a></code>
- <code><a href="./src/resources/beta/split.ts">SplitCreateResponse</a></code>
- <code><a href="./src/resources/beta/split.ts">SplitListResponse</a></code>
- <code><a href="./src/resources/beta/split.ts">SplitGetResponse</a></code>

Methods:

- <code title="post /api/v1/beta/split/jobs">client.beta.split.<a href="./src/resources/beta/split.ts">create</a>({ ...params }) -> SplitCreateResponse</code>
- <code title="get /api/v1/beta/split/jobs">client.beta.split.<a href="./src/resources/beta/split.ts">list</a>({ ...params }) -> SplitListResponsesPaginatedClassifyJobs</code>
- <code title="get /api/v1/beta/split/jobs/{split_job_id}">client.beta.split.<a href="./src/resources/beta/split.ts">get</a>(splitJobID, { ...params }) -> SplitGetResponse</code>

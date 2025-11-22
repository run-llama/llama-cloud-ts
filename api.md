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

# Organizations

Types:

- <code><a href="./src/resources/organizations.ts">Organization</a></code>
- <code><a href="./src/resources/organizations.ts">OrganizationListResponse</a></code>

Methods:

- <code title="get /api/v1/organizations">client.organizations.<a href="./src/resources/organizations.ts">list</a>() -> OrganizationListResponse</code>

# Files

Types:

- <code><a href="./src/resources/files.ts">File</a></code>
- <code><a href="./src/resources/files.ts">FileCreate</a></code>
- <code><a href="./src/resources/files.ts">PresignedURL</a></code>
- <code><a href="./src/resources/files.ts">FileGeneratePresignedURLResponse</a></code>

Methods:

- <code title="delete /api/v1/files/{id}">client.files.<a href="./src/resources/files.ts">delete</a>(id, { ...params }) -> void</code>
- <code title="put /api/v1/files">client.files.<a href="./src/resources/files.ts">generatePresignedURL</a>({ ...params }) -> FileGeneratePresignedURLResponse</code>
- <code title="get /api/v1/files/{id}">client.files.<a href="./src/resources/files.ts">get</a>(id, { ...params }) -> File</code>
- <code title="get /api/v1/files/{id}/content">client.files.<a href="./src/resources/files.ts">readContent</a>(id, { ...params }) -> PresignedURL</code>
- <code title="post /api/v1/files">client.files.<a href="./src/resources/files.ts">upload</a>({ ...params }) -> File</code>
- <code title="put /api/v1/files/upload_from_url">client.files.<a href="./src/resources/files.ts">uploadFromURL</a>({ ...params }) -> File</code>

# Pipelines

Types:

- <code><a href="./src/resources/pipelines/pipelines.ts">AdvancedModeTransformConfig</a></code>
- <code><a href="./src/resources/pipelines/pipelines.ts">AutoTransformConfig</a></code>
- <code><a href="./src/resources/pipelines/pipelines.ts">LlamaParseParameters</a></code>
- <code><a href="./src/resources/pipelines/pipelines.ts">LlmParameters</a></code>
- <code><a href="./src/resources/pipelines/pipelines.ts">ManagedIngestionStatusResponse</a></code>
- <code><a href="./src/resources/pipelines/pipelines.ts">MessageRole</a></code>
- <code><a href="./src/resources/pipelines/pipelines.ts">MetadataFilters</a></code>
- <code><a href="./src/resources/pipelines/pipelines.ts">PageFigureNodeWithScore</a></code>
- <code><a href="./src/resources/pipelines/pipelines.ts">PageScreenshotNodeWithScore</a></code>
- <code><a href="./src/resources/pipelines/pipelines.ts">Pipeline</a></code>
- <code><a href="./src/resources/pipelines/pipelines.ts">PipelineCreate</a></code>
- <code><a href="./src/resources/pipelines/pipelines.ts">PipelineMetadataConfig</a></code>
- <code><a href="./src/resources/pipelines/pipelines.ts">PipelineType</a></code>
- <code><a href="./src/resources/pipelines/pipelines.ts">PresetRetrievalParams</a></code>
- <code><a href="./src/resources/pipelines/pipelines.ts">RetrievalMode</a></code>
- <code><a href="./src/resources/pipelines/pipelines.ts">SparseModelConfig</a></code>
- <code><a href="./src/resources/pipelines/pipelines.ts">PipelineListResponse</a></code>

Methods:

- <code title="post /api/v1/pipelines">client.pipelines.<a href="./src/resources/pipelines/pipelines.ts">create</a>({ ...params }) -> Pipeline</code>
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
- <code title="put /api/v1/pipelines/{pipeline_id}/data-sources">client.pipelines.dataSources.<a href="./src/resources/pipelines/data-sources.ts">updateDataSources</a>(pipelineID, [ ...body ]) -> DataSourceUpdateDataSourcesResponse</code>

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
- <code><a href="./src/resources/pipelines/documents.ts">DocumentListResponse</a></code>
- <code><a href="./src/resources/pipelines/documents.ts">DocumentGetChunksResponse</a></code>
- <code><a href="./src/resources/pipelines/documents.ts">DocumentGetPaginatedResponse</a></code>
- <code><a href="./src/resources/pipelines/documents.ts">DocumentSyncResponse</a></code>
- <code><a href="./src/resources/pipelines/documents.ts">DocumentUpsertBatchResponse</a></code>

Methods:

- <code title="post /api/v1/pipelines/{pipeline_id}/documents">client.pipelines.documents.<a href="./src/resources/pipelines/documents.ts">create</a>(pipelineID, [ ...body ]) -> DocumentCreateResponse</code>
- <code title="get /api/v1/pipelines/{pipeline_id}/documents">client.pipelines.documents.<a href="./src/resources/pipelines/documents.ts">list</a>(pipelineID, { ...params }) -> DocumentListResponse</code>
- <code title="delete /api/v1/pipelines/{pipeline_id}/documents/{document_id}">client.pipelines.documents.<a href="./src/resources/pipelines/documents.ts">delete</a>(documentID, { ...params }) -> void</code>
- <code title="get /api/v1/pipelines/{pipeline_id}/documents/{document_id}">client.pipelines.documents.<a href="./src/resources/pipelines/documents.ts">get</a>(documentID, { ...params }) -> CloudDocument</code>
- <code title="get /api/v1/pipelines/{pipeline_id}/documents/{document_id}/chunks">client.pipelines.documents.<a href="./src/resources/pipelines/documents.ts">getChunks</a>(documentID, { ...params }) -> DocumentGetChunksResponse</code>
- <code title="get /api/v1/pipelines/{pipeline_id}/documents/paginated">client.pipelines.documents.<a href="./src/resources/pipelines/documents.ts">getPaginated</a>(pipelineID, { ...params }) -> DocumentGetPaginatedResponse</code>
- <code title="get /api/v1/pipelines/{pipeline_id}/documents/{document_id}/status">client.pipelines.documents.<a href="./src/resources/pipelines/documents.ts">getStatus</a>(documentID, { ...params }) -> ManagedIngestionStatusResponse</code>
- <code title="post /api/v1/pipelines/{pipeline_id}/documents/{document_id}/sync">client.pipelines.documents.<a href="./src/resources/pipelines/documents.ts">sync</a>(documentID, { ...params }) -> unknown</code>
- <code title="put /api/v1/pipelines/{pipeline_id}/documents">client.pipelines.documents.<a href="./src/resources/pipelines/documents.ts">upsertBatch</a>(pipelineID, [ ...body ]) -> DocumentUpsertBatchResponse</code>

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

- <code><a href="./src/resources/parsing/parsing.ts">FailPageMode</a></code>
- <code><a href="./src/resources/parsing/parsing.ts">LlamaParseSupportedFileExtensions</a></code>
- <code><a href="./src/resources/parsing/parsing.ts">ParserLanguages</a></code>
- <code><a href="./src/resources/parsing/parsing.ts">ParsingJob</a></code>
- <code><a href="./src/resources/parsing/parsing.ts">ParsingMode</a></code>
- <code><a href="./src/resources/parsing/parsing.ts">StatusEnum</a></code>
- <code><a href="./src/resources/parsing/parsing.ts">ParsingGetSupportedFileExtensionsResponse</a></code>

Methods:

- <code title="post /api/v1/parsing/screenshot">client.parsing.<a href="./src/resources/parsing/parsing.ts">createScreenshot</a>({ ...params }) -> ParsingJob</code>
- <code title="get /api/v1/parsing/supported_file_extensions">client.parsing.<a href="./src/resources/parsing/parsing.ts">getSupportedFileExtensions</a>() -> ParsingGetSupportedFileExtensionsResponse</code>
- <code title="post /api/v1/parsing/upload">client.parsing.<a href="./src/resources/parsing/parsing.ts">uploadFile</a>({ ...params }) -> ParsingJob</code>

## Job

Types:

- <code><a href="./src/resources/parsing/job/job.ts">JobGetDetailsResponse</a></code>
- <code><a href="./src/resources/parsing/job/job.ts">JobGetParametersResponse</a></code>

Methods:

- <code title="get /api/v1/parsing/job/{job_id}/read/{filename}">client.parsing.job.<a href="./src/resources/parsing/job/job.ts">generatePresignedURL</a>(filename, { ...params }) -> PresignedURL</code>
- <code title="get /api/v1/parsing/job/{job_id}">client.parsing.job.<a href="./src/resources/parsing/job/job.ts">get</a>(jobID) -> ParsingJob</code>
- <code title="get /api/v1/parsing/job/{job_id}/details">client.parsing.job.<a href="./src/resources/parsing/job/job.ts">getDetails</a>(jobID) -> unknown</code>
- <code title="get /api/v1/parsing/job/{job_id}/parameters">client.parsing.job.<a href="./src/resources/parsing/job/job.ts">getParameters</a>(jobID) -> unknown</code>

### Result

Types:

- <code><a href="./src/resources/parsing/job/result.ts">ParsingJobJsonResult</a></code>
- <code><a href="./src/resources/parsing/job/result.ts">ParsingJobMarkdownResult</a></code>
- <code><a href="./src/resources/parsing/job/result.ts">ParsingJobStructuredResult</a></code>
- <code><a href="./src/resources/parsing/job/result.ts">ParsingJobTextResult</a></code>
- <code><a href="./src/resources/parsing/job/result.ts">ResultGetPdfResponse</a></code>
- <code><a href="./src/resources/parsing/job/result.ts">ResultGetXlsxResponse</a></code>

Methods:

- <code title="get /api/v1/parsing/job/{job_id}/result/image/{name}">client.parsing.job.result.<a href="./src/resources/parsing/job/result.ts">getImage</a>(name, { ...params }) -> Response</code>
- <code title="get /api/v1/parsing/job/{job_id}/result/json">client.parsing.job.result.<a href="./src/resources/parsing/job/result.ts">getJson</a>(jobID, { ...params }) -> ParsingJobJsonResult</code>
- <code title="get /api/v1/parsing/job/{job_id}/result/markdown">client.parsing.job.result.<a href="./src/resources/parsing/job/result.ts">getMarkdown</a>(jobID, { ...params }) -> ParsingJobMarkdownResult</code>
- <code title="get /api/v1/parsing/job/{job_id}/result/pdf">client.parsing.job.result.<a href="./src/resources/parsing/job/result.ts">getPdf</a>(jobID) -> unknown</code>
- <code title="get /api/v1/parsing/job/{job_id}/result/structured">client.parsing.job.result.<a href="./src/resources/parsing/job/result.ts">getStructured</a>(jobID, { ...params }) -> ParsingJobStructuredResult</code>
- <code title="get /api/v1/parsing/job/{job_id}/result/text">client.parsing.job.result.<a href="./src/resources/parsing/job/result.ts">getText</a>(jobID, { ...params }) -> ParsingJobTextResult</code>
- <code title="get /api/v1/parsing/job/{job_id}/result/xlsx">client.parsing.job.result.<a href="./src/resources/parsing/job/result.ts">getXlsx</a>(jobID) -> unknown</code>

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
- <code><a href="./src/resources/extraction/jobs.ts">JobBatchResponse</a></code>
- <code><a href="./src/resources/extraction/jobs.ts">JobGetResultResponse</a></code>

Methods:

- <code title="post /api/v1/extraction/jobs">client.extraction.jobs.<a href="./src/resources/extraction/jobs.ts">create</a>({ ...params }) -> ExtractJob</code>
- <code title="get /api/v1/extraction/jobs">client.extraction.jobs.<a href="./src/resources/extraction/jobs.ts">list</a>({ ...params }) -> JobListResponse</code>
- <code title="post /api/v1/extraction/jobs/batch">client.extraction.jobs.<a href="./src/resources/extraction/jobs.ts">batch</a>({ ...params }) -> JobBatchResponse</code>
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
- <code title="get /api/v1/extraction/runs/latest-from-ui">client.extraction.runs.<a href="./src/resources/extraction/runs.ts">getLatestFromUi</a>({ ...params }) -> ExtractRun | null</code>

## ExtractionAgents

Types:

- <code><a href="./src/resources/extraction/extraction-agents.ts">ExtractAgent</a></code>
- <code><a href="./src/resources/extraction/extraction-agents.ts">ExtractionAgentDeleteResponse</a></code>
- <code><a href="./src/resources/extraction/extraction-agents.ts">ExtractionAgentGetExtractionAgentsResponse</a></code>

Methods:

- <code title="put /api/v1/extraction/extraction-agents/{extraction_agent_id}">client.extraction.extractionAgents.<a href="./src/resources/extraction/extraction-agents.ts">update</a>(extractionAgentID, { ...params }) -> ExtractAgent</code>
- <code title="delete /api/v1/extraction/extraction-agents/{extraction_agent_id}">client.extraction.extractionAgents.<a href="./src/resources/extraction/extraction-agents.ts">delete</a>(extractionAgentID) -> unknown</code>
- <code title="post /api/v1/extraction/extraction-agents">client.extraction.extractionAgents.<a href="./src/resources/extraction/extraction-agents.ts">extractionAgents</a>({ ...params }) -> ExtractAgent</code>
- <code title="get /api/v1/extraction/extraction-agents/{extraction_agent_id}">client.extraction.extractionAgents.<a href="./src/resources/extraction/extraction-agents.ts">get</a>(extractionAgentID) -> ExtractAgent</code>
- <code title="get /api/v1/extraction/extraction-agents">client.extraction.extractionAgents.<a href="./src/resources/extraction/extraction-agents.ts">getExtractionAgents</a>({ ...params }) -> ExtractionAgentGetExtractionAgentsResponse</code>

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

## Files

Types:

- <code><a href="./src/resources/beta/files.ts">FileQueryResponse</a></code>

Methods:

- <code title="post /api/v1/beta/files">client.beta.files.<a href="./src/resources/beta/files.ts">create</a>({ ...params }) -> File</code>
- <code title="delete /api/v1/beta/files/{file_id}">client.beta.files.<a href="./src/resources/beta/files.ts">delete</a>(fileID, { ...params }) -> void</code>
- <code title="post /api/v1/beta/files/query">client.beta.files.<a href="./src/resources/beta/files.ts">query</a>({ ...params }) -> FileQueryResponse</code>
- <code title="put /api/v1/beta/files">client.beta.files.<a href="./src/resources/beta/files.ts">upsert</a>({ ...params }) -> File</code>

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

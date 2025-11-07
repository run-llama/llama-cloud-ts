# Projects

Types:

- <code><a href="./src/resources/projects.ts">AgentDeploymentList</a></code>
- <code><a href="./src/resources/projects.ts">Project</a></code>
- <code><a href="./src/resources/projects.ts">ProjectCreate</a></code>
- <code><a href="./src/resources/projects.ts">ProjectListResponse</a></code>

Methods:

- <code title="post /api/v1/projects">client.projects.<a href="./src/resources/projects.ts">create</a>({ ...params }) -> Project</code>
- <code title="put /api/v1/projects/{project_id}">client.projects.<a href="./src/resources/projects.ts">update</a>(projectID, { ...params }) -> Project</code>
- <code title="get /api/v1/projects">client.projects.<a href="./src/resources/projects.ts">list</a>({ ...params }) -> ProjectListResponse</code>
- <code title="delete /api/v1/projects/{project_id}">client.projects.<a href="./src/resources/projects.ts">delete</a>(projectID, { ...params }) -> void</code>
- <code title="get /api/v1/projects/{project_id}">client.projects.<a href="./src/resources/projects.ts">get</a>(projectID, { ...params }) -> Project</code>
- <code title="get /api/v1/projects/current">client.projects.<a href="./src/resources/projects.ts">getCurrent</a>({ ...params }) -> Project</code>
- <code title="get /api/v1/projects/{project_id}/usage">client.projects.<a href="./src/resources/projects.ts">getUsage</a>(projectID, { ...params }) -> UsageAndPlan</code>
- <code title="get /api/v1/projects/{project_id}/agents">client.projects.<a href="./src/resources/projects.ts">listAgents</a>(projectID) -> AgentDeploymentList</code>
- <code title="post /api/v1/projects/{project_id}/agents:sync">client.projects.<a href="./src/resources/projects.ts">syncAgents</a>(projectID) -> AgentDeploymentList</code>
- <code title="put /api/v1/projects">client.projects.<a href="./src/resources/projects.ts">upsert</a>({ ...params }) -> Project</code>

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
- <code title="put /api/v1/data-sinks">client.dataSinks.<a href="./src/resources/data-sinks.ts">upsert</a>({ ...params }) -> DataSink</code>

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
- <code title="put /api/v1/data-sources">client.dataSources.<a href="./src/resources/data-sources.ts">upsert</a>({ ...params }) -> DataSource</code>

# EmbeddingModelConfigs

Types:

- <code><a href="./src/resources/embedding-model-configs.ts">EmbeddingModelConfig</a></code>
- <code><a href="./src/resources/embedding-model-configs.ts">EmbeddingModelConfigUpdate</a></code>
- <code><a href="./src/resources/embedding-model-configs.ts">EmbeddingModelConfigListResponse</a></code>

Methods:

- <code title="post /api/v1/embedding-model-configs">client.embeddingModelConfigs.<a href="./src/resources/embedding-model-configs.ts">create</a>({ ...params }) -> EmbeddingModelConfig</code>
- <code title="put /api/v1/embedding-model-configs/{embedding_model_config_id}">client.embeddingModelConfigs.<a href="./src/resources/embedding-model-configs.ts">update</a>(embeddingModelConfigID, { ...params }) -> EmbeddingModelConfig</code>
- <code title="get /api/v1/embedding-model-configs">client.embeddingModelConfigs.<a href="./src/resources/embedding-model-configs.ts">list</a>({ ...params }) -> EmbeddingModelConfigListResponse</code>
- <code title="delete /api/v1/embedding-model-configs/{embedding_model_config_id}">client.embeddingModelConfigs.<a href="./src/resources/embedding-model-configs.ts">delete</a>(embeddingModelConfigID, { ...params }) -> void</code>
- <code title="put /api/v1/embedding-model-configs">client.embeddingModelConfigs.<a href="./src/resources/embedding-model-configs.ts">upsert</a>({ ...params }) -> EmbeddingModelConfig</code>

# Organizations

Types:

- <code><a href="./src/resources/organizations/organizations.ts">Organization</a></code>
- <code><a href="./src/resources/organizations/organizations.ts">OrganizationCreate</a></code>
- <code><a href="./src/resources/organizations/organizations.ts">Role</a></code>
- <code><a href="./src/resources/organizations/organizations.ts">UsageAndPlan</a></code>
- <code><a href="./src/resources/organizations/organizations.ts">OrganizationListResponse</a></code>
- <code><a href="./src/resources/organizations/organizations.ts">OrganizationGetRolesResponse</a></code>

Methods:

- <code title="post /api/v1/organizations">client.organizations.<a href="./src/resources/organizations/organizations.ts">create</a>({ ...params }) -> Organization</code>
- <code title="put /api/v1/organizations/{organization_id}">client.organizations.<a href="./src/resources/organizations/organizations.ts">update</a>(organizationID, { ...params }) -> Organization</code>
- <code title="get /api/v1/organizations">client.organizations.<a href="./src/resources/organizations/organizations.ts">list</a>() -> OrganizationListResponse</code>
- <code title="delete /api/v1/organizations/{organization_id}">client.organizations.<a href="./src/resources/organizations/organizations.ts">delete</a>(organizationID) -> void</code>
- <code title="get /api/v1/organizations/{organization_id}">client.organizations.<a href="./src/resources/organizations/organizations.ts">get</a>(organizationID) -> Organization</code>
- <code title="get /api/v1/organizations/{organization_id}/roles">client.organizations.<a href="./src/resources/organizations/organizations.ts">getRoles</a>(organizationID) -> OrganizationGetRolesResponse</code>
- <code title="get /api/v1/organizations/{organization_id}/usage">client.organizations.<a href="./src/resources/organizations/organizations.ts">getUsage</a>(organizationID, { ...params }) -> UsageAndPlan</code>

## Default

Methods:

- <code title="get /api/v1/organizations/default">client.organizations.default.<a href="./src/resources/organizations/default.ts">list</a>() -> Organization</code>

## Users

Types:

- <code><a href="./src/resources/organizations/users/users.ts">UserOrganization</a></code>
- <code><a href="./src/resources/organizations/users/users.ts">UserCreateResponse</a></code>
- <code><a href="./src/resources/organizations/users/users.ts">UserListResponse</a></code>

Methods:

- <code title="put /api/v1/organizations/{organization_id}/users">client.organizations.users.<a href="./src/resources/organizations/users/users.ts">create</a>(organizationID, [ ...body ]) -> UserCreateResponse</code>
- <code title="get /api/v1/organizations/{organization_id}/users">client.organizations.users.<a href="./src/resources/organizations/users/users.ts">list</a>(organizationID) -> UserListResponse</code>
- <code title="delete /api/v1/organizations/{organization_id}/users/{member_user_id}">client.organizations.users.<a href="./src/resources/organizations/users/users.ts">delete</a>(memberUserID, [ ...body ]) -> void</code>

### Roles

Types:

- <code><a href="./src/resources/organizations/users/roles.ts">UserOrganizationRole</a></code>

Methods:

- <code title="put /api/v1/organizations/{organization_id}/users/roles">client.organizations.users.roles.<a href="./src/resources/organizations/users/roles.ts">create</a>(organizationID, { ...params }) -> UserOrganizationRole</code>
- <code title="get /api/v1/organizations/{organization_id}/users/roles">client.organizations.users.roles.<a href="./src/resources/organizations/users/roles.ts">list</a>(organizationID, { ...params }) -> UserOrganizationRole | null</code>

### Projects

Types:

- <code><a href="./src/resources/organizations/users/projects.ts">ProjectCreateResponse</a></code>
- <code><a href="./src/resources/organizations/users/projects.ts">ProjectListResponse</a></code>
- <code><a href="./src/resources/organizations/users/projects.ts">ProjectDeleteResponse</a></code>

Methods:

- <code title="put /api/v1/organizations/{organization_id}/users/{user_id}/projects">client.organizations.users.projects.<a href="./src/resources/organizations/users/projects.ts">create</a>(userID, { ...params }) -> unknown</code>
- <code title="get /api/v1/organizations/{organization_id}/users/{user_id}/projects">client.organizations.users.projects.<a href="./src/resources/organizations/users/projects.ts">list</a>(userID, { ...params }) -> ProjectListResponse</code>
- <code title="delete /api/v1/organizations/{organization_id}/users/{user_id}/projects/{project_id}">client.organizations.users.projects.<a href="./src/resources/organizations/users/projects.ts">delete</a>(projectID, { ...params }) -> unknown</code>

# Files

Types:

- <code><a href="./src/resources/files/files.ts">File</a></code>
- <code><a href="./src/resources/files/files.ts">FileCreate</a></code>
- <code><a href="./src/resources/files/files.ts">PresignedURL</a></code>
- <code><a href="./src/resources/files/files.ts">FileGeneratePresignedURLResponse</a></code>

Methods:

- <code title="delete /api/v1/files/{id}">client.files.<a href="./src/resources/files/files.ts">delete</a>(id, { ...params }) -> void</code>
- <code title="put /api/v1/files">client.files.<a href="./src/resources/files/files.ts">generatePresignedURL</a>({ ...params }) -> FileGeneratePresignedURLResponse</code>
- <code title="get /api/v1/files/{id}">client.files.<a href="./src/resources/files/files.ts">get</a>(id, { ...params }) -> File</code>
- <code title="get /api/v1/files/{id}/content">client.files.<a href="./src/resources/files/files.ts">readContent</a>(id, { ...params }) -> PresignedURL</code>
- <code title="post /api/v1/files">client.files.<a href="./src/resources/files/files.ts">upload</a>({ ...params }) -> File</code>
- <code title="put /api/v1/files/upload_from_url">client.files.<a href="./src/resources/files/files.ts">uploadFromURL</a>({ ...params }) -> File</code>

## PageScreenshots

Types:

- <code><a href="./src/resources/files/page-screenshots.ts">PageScreenshotMetadata</a></code>
- <code><a href="./src/resources/files/page-screenshots.ts">PageScreenshotListResponse</a></code>
- <code><a href="./src/resources/files/page-screenshots.ts">PageScreenshotGetResponse</a></code>

Methods:

- <code title="get /api/v1/files/{id}/page_screenshots">client.files.pageScreenshots.<a href="./src/resources/files/page-screenshots.ts">list</a>(id, { ...params }) -> PageScreenshotListResponse</code>
- <code title="post /api/v1/files/{id}/page_screenshots/{page_index}/presigned_url">client.files.pageScreenshots.<a href="./src/resources/files/page-screenshots.ts">generatePresignedURL</a>(pageIndex, { ...params }) -> PresignedURL</code>
- <code title="get /api/v1/files/{id}/page_screenshots/{page_index}">client.files.pageScreenshots.<a href="./src/resources/files/page-screenshots.ts">get</a>(pageIndex, { ...params }) -> unknown</code>

## PageFigures

Types:

- <code><a href="./src/resources/files/page-figures.ts">PageFigureMetadata</a></code>
- <code><a href="./src/resources/files/page-figures.ts">PageFigureListResponse</a></code>
- <code><a href="./src/resources/files/page-figures.ts">PageFigureGetResponse</a></code>

Methods:

- <code title="get /api/v1/files/{id}/page-figures">client.files.pageFigures.<a href="./src/resources/files/page-figures.ts">list</a>(id, { ...params }) -> PageFigureListResponse</code>
- <code title="post /api/v1/files/{id}/page-figures/{page_index}/{figure_name}/presigned_url">client.files.pageFigures.<a href="./src/resources/files/page-figures.ts">generatePresignedURL</a>(figureName, { ...params }) -> PresignedURL</code>
- <code title="get /api/v1/files/{id}/page-figures/{page_index}/{figure_name}">client.files.pageFigures.<a href="./src/resources/files/page-figures.ts">get</a>(figureName, { ...params }) -> unknown</code>

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
- <code><a href="./src/resources/pipelines/pipelines.ts">PipelineChatResponse</a></code>
- <code><a href="./src/resources/pipelines/pipelines.ts">PipelineGetFiles2Response</a></code>
- <code><a href="./src/resources/pipelines/pipelines.ts">PipelineGetPlaygroundSessionResponse</a></code>

Methods:

- <code title="post /api/v1/pipelines">client.pipelines.<a href="./src/resources/pipelines/pipelines.ts">create</a>({ ...params }) -> Pipeline</code>
- <code title="put /api/v1/pipelines/{pipeline_id}">client.pipelines.<a href="./src/resources/pipelines/pipelines.ts">update</a>(pipelineID, { ...params }) -> Pipeline</code>
- <code title="get /api/v1/pipelines">client.pipelines.<a href="./src/resources/pipelines/pipelines.ts">list</a>({ ...params }) -> PipelineListResponse</code>
- <code title="delete /api/v1/pipelines/{pipeline_id}">client.pipelines.<a href="./src/resources/pipelines/pipelines.ts">delete</a>(pipelineID) -> void</code>
- <code title="post /api/v1/pipelines/{pipeline_id}/chat">client.pipelines.<a href="./src/resources/pipelines/pipelines.ts">chat</a>(pipelineID, { ...params }) -> unknown</code>
- <code title="post /api/v1/pipelines/{pipeline_id}/copy">client.pipelines.<a href="./src/resources/pipelines/pipelines.ts">copy</a>(pipelineID) -> Pipeline</code>
- <code title="post /api/v1/pipelines/{pipeline_id}/force-delete">client.pipelines.<a href="./src/resources/pipelines/pipelines.ts">forceDelete</a>(pipelineID) -> void</code>
- <code title="get /api/v1/pipelines/{pipeline_id}">client.pipelines.<a href="./src/resources/pipelines/pipelines.ts">get</a>(pipelineID) -> Pipeline</code>
- <code title="get /api/v1/pipelines/{pipeline_id}/files2">client.pipelines.<a href="./src/resources/pipelines/pipelines.ts">getFiles2</a>(pipelineID, { ...params }) -> PipelineGetFiles2Response</code>
- <code title="get /api/v1/pipelines/{pipeline_id}/playground-session">client.pipelines.<a href="./src/resources/pipelines/pipelines.ts">getPlaygroundSession</a>(pipelineID) -> PipelineGetPlaygroundSessionResponse</code>
- <code title="get /api/v1/pipelines/{pipeline_id}/status">client.pipelines.<a href="./src/resources/pipelines/pipelines.ts">getStatus</a>(pipelineID, { ...params }) -> ManagedIngestionStatusResponse</code>

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

## Files

Types:

- <code><a href="./src/resources/pipelines/files.ts">PipelineFile</a></code>
- <code><a href="./src/resources/pipelines/files.ts">FileCreateResponse</a></code>
- <code><a href="./src/resources/pipelines/files.ts">FileListResponse</a></code>
- <code><a href="./src/resources/pipelines/files.ts">FileGetStatusCountsResponse</a></code>

Methods:

- <code title="put /api/v1/pipelines/{pipeline_id}/files">client.pipelines.files.<a href="./src/resources/pipelines/files.ts">create</a>(pipelineID, [ ...body ]) -> FileCreateResponse</code>
- <code title="put /api/v1/pipelines/{pipeline_id}/files/{file_id}">client.pipelines.files.<a href="./src/resources/pipelines/files.ts">update</a>(fileID, { ...params }) -> PipelineFile</code>
- <code title="get /api/v1/pipelines/{pipeline_id}/files">client.pipelines.files.<a href="./src/resources/pipelines/files.ts">list</a>(pipelineID, { ...params }) -> FileListResponse</code>
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
- <code><a href="./src/resources/pipelines/documents.ts">DocumentForceSyncAllResponse</a></code>
- <code><a href="./src/resources/pipelines/documents.ts">DocumentGetChunksResponse</a></code>
- <code><a href="./src/resources/pipelines/documents.ts">DocumentGetPaginatedResponse</a></code>
- <code><a href="./src/resources/pipelines/documents.ts">DocumentSyncResponse</a></code>

Methods:

- <code title="post /api/v1/pipelines/{pipeline_id}/documents">client.pipelines.documents.<a href="./src/resources/pipelines/documents.ts">create</a>(pipelineID, [ ...body ]) -> DocumentCreateResponse</code>
- <code title="get /api/v1/pipelines/{pipeline_id}/documents">client.pipelines.documents.<a href="./src/resources/pipelines/documents.ts">list</a>(pipelineID, { ...params }) -> DocumentListResponse</code>
- <code title="delete /api/v1/pipelines/{pipeline_id}/documents/{document_id}">client.pipelines.documents.<a href="./src/resources/pipelines/documents.ts">delete</a>(documentID, { ...params }) -> void</code>
- <code title="post /api/v1/pipelines/{pipeline_id}/documents/force-sync-all">client.pipelines.documents.<a href="./src/resources/pipelines/documents.ts">forceSyncAll</a>(pipelineID, { ...params }) -> unknown</code>
- <code title="get /api/v1/pipelines/{pipeline_id}/documents/{document_id}">client.pipelines.documents.<a href="./src/resources/pipelines/documents.ts">get</a>(documentID, { ...params }) -> CloudDocument</code>
- <code title="get /api/v1/pipelines/{pipeline_id}/documents/{document_id}/chunks">client.pipelines.documents.<a href="./src/resources/pipelines/documents.ts">getChunks</a>(documentID, { ...params }) -> DocumentGetChunksResponse</code>
- <code title="get /api/v1/pipelines/{pipeline_id}/documents/paginated">client.pipelines.documents.<a href="./src/resources/pipelines/documents.ts">getPaginated</a>(pipelineID, { ...params }) -> DocumentGetPaginatedResponse</code>
- <code title="get /api/v1/pipelines/{pipeline_id}/documents/{document_id}/status">client.pipelines.documents.<a href="./src/resources/pipelines/documents.ts">getStatus</a>(documentID, { ...params }) -> ManagedIngestionStatusResponse</code>
- <code title="post /api/v1/pipelines/{pipeline_id}/documents/{document_id}/sync">client.pipelines.documents.<a href="./src/resources/pipelines/documents.ts">sync</a>(documentID, { ...params }) -> unknown</code>

# Retrievers

Types:

- <code><a href="./src/resources/retrievers.ts">CompositeRetrievalMode</a></code>
- <code><a href="./src/resources/retrievers.ts">CompositeRetrievalResult</a></code>
- <code><a href="./src/resources/retrievers.ts">ReRankConfig</a></code>
- <code><a href="./src/resources/retrievers.ts">Retriever</a></code>
- <code><a href="./src/resources/retrievers.ts">RetrieverCreate</a></code>
- <code><a href="./src/resources/retrievers.ts">RetrieverPipeline</a></code>
- <code><a href="./src/resources/retrievers.ts">RetrieverListResponse</a></code>

Methods:

- <code title="post /api/v1/retrievers">client.retrievers.<a href="./src/resources/retrievers.ts">create</a>({ ...params }) -> Retriever</code>
- <code title="post /api/v1/retrievers/retrieve">client.retrievers.<a href="./src/resources/retrievers.ts">retrieve</a>({ ...params }) -> CompositeRetrievalResult</code>
- <code title="put /api/v1/retrievers/{retriever_id}">client.retrievers.<a href="./src/resources/retrievers.ts">update</a>(retrieverID, { ...params }) -> Retriever</code>
- <code title="get /api/v1/retrievers">client.retrievers.<a href="./src/resources/retrievers.ts">list</a>({ ...params }) -> RetrieverListResponse</code>
- <code title="delete /api/v1/retrievers/{retriever_id}">client.retrievers.<a href="./src/resources/retrievers.ts">delete</a>(retrieverID) -> void</code>
- <code title="get /api/v1/retrievers/{retriever_id}">client.retrievers.<a href="./src/resources/retrievers.ts">get</a>(retrieverID, { ...params }) -> Retriever</code>
- <code title="put /api/v1/retrievers">client.retrievers.<a href="./src/resources/retrievers.ts">upsert</a>({ ...params }) -> Retriever</code>

# Evals

Types:

- <code><a href="./src/resources/evals.ts">EvalListSupportedModelsResponse</a></code>

Methods:

- <code title="get /api/v1/evals/models">client.evals.<a href="./src/resources/evals.ts">listSupportedModels</a>() -> EvalListSupportedModelsResponse</code>

# Parsing

Types:

- <code><a href="./src/resources/parsing/parsing.ts">FailPageMode</a></code>
- <code><a href="./src/resources/parsing/parsing.ts">LlamaParseSupportedFileExtensions</a></code>
- <code><a href="./src/resources/parsing/parsing.ts">ParserLanguages</a></code>
- <code><a href="./src/resources/parsing/parsing.ts">ParsingHistoryItem</a></code>
- <code><a href="./src/resources/parsing/parsing.ts">ParsingJob</a></code>
- <code><a href="./src/resources/parsing/parsing.ts">ParsingMode</a></code>
- <code><a href="./src/resources/parsing/parsing.ts">StatusEnum</a></code>
- <code><a href="./src/resources/parsing/parsing.ts">ParsingGetParsingHistoryResponse</a></code>
- <code><a href="./src/resources/parsing/parsing.ts">ParsingGetSupportedFileExtensionsResponse</a></code>

Methods:

- <code title="post /api/v1/parsing/screenshot">client.parsing.<a href="./src/resources/parsing/parsing.ts">createScreenshot</a>({ ...params }) -> ParsingJob</code>
- <code title="get /api/v1/parsing/history">client.parsing.<a href="./src/resources/parsing/parsing.ts">getParsingHistory</a>() -> ParsingGetParsingHistoryResponse</code>
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

- <code><a href="./src/resources/parsing/job/result/result.ts">ParsingJobJsonResult</a></code>
- <code><a href="./src/resources/parsing/job/result/result.ts">ParsingJobMarkdownResult</a></code>
- <code><a href="./src/resources/parsing/job/result/result.ts">ParsingJobStructuredResult</a></code>
- <code><a href="./src/resources/parsing/job/result/result.ts">ParsingJobTextResult</a></code>
- <code><a href="./src/resources/parsing/job/result/result.ts">ResultGetPdfResponse</a></code>
- <code><a href="./src/resources/parsing/job/result/result.ts">ResultGetXlsxResponse</a></code>

Methods:

- <code title="get /api/v1/parsing/job/{job_id}/result/image/{name}">client.parsing.job.result.<a href="./src/resources/parsing/job/result/result.ts">getImage</a>(name, { ...params }) -> Response</code>
- <code title="get /api/v1/parsing/job/{job_id}/result/json">client.parsing.job.result.<a href="./src/resources/parsing/job/result/result.ts">getJson</a>(jobID, { ...params }) -> ParsingJobJsonResult</code>
- <code title="get /api/v1/parsing/job/{job_id}/result/markdown">client.parsing.job.result.<a href="./src/resources/parsing/job/result/result.ts">getMarkdown</a>(jobID, { ...params }) -> ParsingJobMarkdownResult</code>
- <code title="get /api/v1/parsing/job/{job_id}/result/pdf">client.parsing.job.result.<a href="./src/resources/parsing/job/result/result.ts">getPdf</a>(jobID) -> unknown</code>
- <code title="get /api/v1/parsing/job/{job_id}/result/structured">client.parsing.job.result.<a href="./src/resources/parsing/job/result/result.ts">getStructured</a>(jobID, { ...params }) -> ParsingJobStructuredResult</code>
- <code title="get /api/v1/parsing/job/{job_id}/result/text">client.parsing.job.result.<a href="./src/resources/parsing/job/result/result.ts">getText</a>(jobID, { ...params }) -> ParsingJobTextResult</code>
- <code title="get /api/v1/parsing/job/{job_id}/result/xlsx">client.parsing.job.result.<a href="./src/resources/parsing/job/result/result.ts">getXlsx</a>(jobID) -> unknown</code>

#### Raw

Types:

- <code><a href="./src/resources/parsing/job/result/raw.ts">RawGetRawJsonResponse</a></code>
- <code><a href="./src/resources/parsing/job/result/raw.ts">RawGetRawMarkdownResponse</a></code>
- <code><a href="./src/resources/parsing/job/result/raw.ts">RawGetRawPdfResponse</a></code>
- <code><a href="./src/resources/parsing/job/result/raw.ts">RawGetRawStructuredResponse</a></code>
- <code><a href="./src/resources/parsing/job/result/raw.ts">RawGetRawTextResponse</a></code>
- <code><a href="./src/resources/parsing/job/result/raw.ts">RawGetRawXlsxResponse</a></code>

Methods:

- <code title="get /api/v1/parsing/job/{job_id}/result/raw/json">client.parsing.job.result.raw.<a href="./src/resources/parsing/job/result/raw.ts">getRawJson</a>(jobID) -> unknown</code>
- <code title="get /api/v1/parsing/job/{job_id}/result/raw/markdown">client.parsing.job.result.raw.<a href="./src/resources/parsing/job/result/raw.ts">getRawMarkdown</a>(jobID) -> unknown</code>
- <code title="get /api/v1/parsing/job/{job_id}/result/raw/pdf">client.parsing.job.result.raw.<a href="./src/resources/parsing/job/result/raw.ts">getRawPdf</a>(jobID) -> unknown</code>
- <code title="get /api/v1/parsing/job/{job_id}/result/raw/structured">client.parsing.job.result.raw.<a href="./src/resources/parsing/job/result/raw.ts">getRawStructured</a>(jobID) -> unknown</code>
- <code title="get /api/v1/parsing/job/{job_id}/result/raw/text">client.parsing.job.result.raw.<a href="./src/resources/parsing/job/result/raw.ts">getRawText</a>(jobID) -> unknown</code>
- <code title="get /api/v1/parsing/job/{job_id}/result/raw/xlsx">client.parsing.job.result.raw.<a href="./src/resources/parsing/job/result/raw.ts">getRawXlsx</a>(jobID) -> unknown</code>

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

- <code><a href="./src/resources/extraction/extraction-agents/extraction-agents.ts">ExtractAgent</a></code>
- <code><a href="./src/resources/extraction/extraction-agents/extraction-agents.ts">ExtractionAgentDeleteResponse</a></code>
- <code><a href="./src/resources/extraction/extraction-agents/extraction-agents.ts">ExtractionAgentGetExtractionAgentsResponse</a></code>

Methods:

- <code title="put /api/v1/extraction/extraction-agents/{extraction_agent_id}">client.extraction.extractionAgents.<a href="./src/resources/extraction/extraction-agents/extraction-agents.ts">update</a>(extractionAgentID, { ...params }) -> ExtractAgent</code>
- <code title="delete /api/v1/extraction/extraction-agents/{extraction_agent_id}">client.extraction.extractionAgents.<a href="./src/resources/extraction/extraction-agents/extraction-agents.ts">delete</a>(extractionAgentID) -> unknown</code>
- <code title="post /api/v1/extraction/extraction-agents">client.extraction.extractionAgents.<a href="./src/resources/extraction/extraction-agents/extraction-agents.ts">extractionAgents</a>({ ...params }) -> ExtractAgent</code>
- <code title="get /api/v1/extraction/extraction-agents/{extraction_agent_id}">client.extraction.extractionAgents.<a href="./src/resources/extraction/extraction-agents/extraction-agents.ts">get</a>(extractionAgentID) -> ExtractAgent</code>
- <code title="get /api/v1/extraction/extraction-agents/by-name/{name}">client.extraction.extractionAgents.<a href="./src/resources/extraction/extraction-agents/extraction-agents.ts">getByName</a>(name, { ...params }) -> ExtractAgent</code>
- <code title="get /api/v1/extraction/extraction-agents/default">client.extraction.extractionAgents.<a href="./src/resources/extraction/extraction-agents/extraction-agents.ts">getDefault</a>({ ...params }) -> ExtractAgent</code>
- <code title="get /api/v1/extraction/extraction-agents">client.extraction.extractionAgents.<a href="./src/resources/extraction/extraction-agents/extraction-agents.ts">getExtractionAgents</a>({ ...params }) -> ExtractionAgentGetExtractionAgentsResponse</code>

### Schema

Types:

- <code><a href="./src/resources/extraction/extraction-agents/schema.ts">SchemaGenerateResponse</a></code>
- <code><a href="./src/resources/extraction/extraction-agents/schema.ts">SchemaValidationResponse</a></code>

Methods:

- <code title="post /api/v1/extraction/extraction-agents/schema/generate">client.extraction.extractionAgents.schema.<a href="./src/resources/extraction/extraction-agents/schema.ts">generate</a>({ ...params }) -> SchemaGenerateResponse</code>
- <code title="post /api/v1/extraction/extraction-agents/schema/validation">client.extraction.extractionAgents.schema.<a href="./src/resources/extraction/extraction-agents/schema.ts">validation</a>({ ...params }) -> SchemaValidationResponse</code>

# Beta

## AgentData

Types:

- <code><a href="./src/resources/beta/agent-data.ts">AgentData</a></code>
- <code><a href="./src/resources/beta/agent-data.ts">AgentDataDeleteResponse</a></code>
- <code><a href="./src/resources/beta/agent-data.ts">AgentDataAggregateResponse</a></code>
- <code><a href="./src/resources/beta/agent-data.ts">AgentDataSearchResponse</a></code>

Methods:

- <code title="put /api/v1/beta/agent-data/{item_id}">client.beta.agentData.<a href="./src/resources/beta/agent-data.ts">update</a>(itemID, { ...params }) -> AgentData</code>
- <code title="delete /api/v1/beta/agent-data/{item_id}">client.beta.agentData.<a href="./src/resources/beta/agent-data.ts">delete</a>(itemID, { ...params }) -> AgentDataDeleteResponse</code>
- <code title="post /api/v1/beta/agent-data">client.beta.agentData.<a href="./src/resources/beta/agent-data.ts">agentData</a>({ ...params }) -> AgentData</code>
- <code title="post /api/v1/beta/agent-data/:aggregate">client.beta.agentData.<a href="./src/resources/beta/agent-data.ts">aggregate</a>({ ...params }) -> AgentDataAggregateResponse</code>
- <code title="get /api/v1/beta/agent-data/{item_id}">client.beta.agentData.<a href="./src/resources/beta/agent-data.ts">get</a>(itemID, { ...params }) -> AgentData</code>
- <code title="post /api/v1/beta/agent-data/:search">client.beta.agentData.<a href="./src/resources/beta/agent-data.ts">search</a>({ ...params }) -> AgentDataSearchResponse</code>

## Files

Types:

- <code><a href="./src/resources/beta/files.ts">FileQueryResponse</a></code>

Methods:

- <code title="post /api/v1/beta/files">client.beta.files.<a href="./src/resources/beta/files.ts">create</a>({ ...params }) -> File</code>
- <code title="delete /api/v1/beta/files/{file_id}">client.beta.files.<a href="./src/resources/beta/files.ts">delete</a>(fileID, { ...params }) -> void</code>
- <code title="post /api/v1/beta/files/query">client.beta.files.<a href="./src/resources/beta/files.ts">query</a>({ ...params }) -> FileQueryResponse</code>

## ParseConfigurations

Types:

- <code><a href="./src/resources/beta/parse-configurations.ts">ParseConfiguration</a></code>
- <code><a href="./src/resources/beta/parse-configurations.ts">ParseConfigurationCreate</a></code>
- <code><a href="./src/resources/beta/parse-configurations.ts">ParseConfigurationQueryResponse</a></code>

Methods:

- <code title="put /api/v1/beta/parse-configurations/{config_id}">client.beta.parseConfigurations.<a href="./src/resources/beta/parse-configurations.ts">update</a>(configID, { ...params }) -> ParseConfiguration</code>
- <code title="delete /api/v1/beta/parse-configurations/{config_id}">client.beta.parseConfigurations.<a href="./src/resources/beta/parse-configurations.ts">delete</a>(configID, { ...params }) -> void</code>
- <code title="get /api/v1/beta/parse-configurations/{config_id}">client.beta.parseConfigurations.<a href="./src/resources/beta/parse-configurations.ts">get</a>(configID, { ...params }) -> ParseConfiguration</code>
- <code title="get /api/v1/beta/parse-configurations/latest">client.beta.parseConfigurations.<a href="./src/resources/beta/parse-configurations.ts">getLatest</a>({ ...params }) -> ParseConfiguration | null</code>
- <code title="get /api/v1/beta/parse-configurations">client.beta.parseConfigurations.<a href="./src/resources/beta/parse-configurations.ts">getParseConfigurations</a>({ ...params }) -> ParseConfigurationQueryResponse</code>
- <code title="post /api/v1/beta/parse-configurations">client.beta.parseConfigurations.<a href="./src/resources/beta/parse-configurations.ts">parseConfigurations</a>({ ...params }) -> ParseConfiguration</code>
- <code title="post /api/v1/beta/parse-configurations/query">client.beta.parseConfigurations.<a href="./src/resources/beta/parse-configurations.ts">query</a>({ ...params }) -> ParseConfigurationQueryResponse</code>
- <code title="put /api/v1/beta/parse-configurations">client.beta.parseConfigurations.<a href="./src/resources/beta/parse-configurations.ts">updateParseConfigurations</a>({ ...params }) -> ParseConfiguration</code>

## Spreadsheet

Types:

- <code><a href="./src/resources/beta/spreadsheet.ts">SpreadsheetJob</a></code>
- <code><a href="./src/resources/beta/spreadsheet.ts">SpreadsheetParsingConfig</a></code>

Methods:

- <code title="post /api/v1/beta/spreadsheet/jobs">client.beta.spreadsheet.<a href="./src/resources/beta/spreadsheet.ts">create</a>({ ...params }) -> SpreadsheetJob</code>
- <code title="get /api/v1/beta/spreadsheet/jobs">client.beta.spreadsheet.<a href="./src/resources/beta/spreadsheet.ts">list</a>({ ...params }) -> SpreadsheetJobsPaginatedClassifyJobs</code>
- <code title="get /api/v1/beta/spreadsheet/jobs/{spreadsheet_job_id}">client.beta.spreadsheet.<a href="./src/resources/beta/spreadsheet.ts">get</a>(spreadsheetJobID, { ...params }) -> SpreadsheetJob</code>
- <code title="get /api/v1/beta/spreadsheet/jobs/{spreadsheet_job_id}/tables/{table_id}/result/{table_type}">client.beta.spreadsheet.<a href="./src/resources/beta/spreadsheet.ts">getResultTable</a>(tableType, { ...params }) -> PresignedURL</code>

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

Methods:

- <code title="patch /api/v1/beta/directories/{directory_id}/files/{directory_file_id}">client.beta.directories.files.<a href="./src/resources/beta/directories/files.ts">update</a>(directoryFileID, { ...params }) -> FileUpdateResponse</code>
- <code title="get /api/v1/beta/directories/{directory_id}/files">client.beta.directories.files.<a href="./src/resources/beta/directories/files.ts">list</a>(directoryID, { ...params }) -> FileListResponsesPaginatedClassifyJobs</code>
- <code title="delete /api/v1/beta/directories/{directory_id}/files/{directory_file_id}">client.beta.directories.files.<a href="./src/resources/beta/directories/files.ts">delete</a>(directoryFileID, { ...params }) -> void</code>
- <code title="post /api/v1/beta/directories/{directory_id}/files">client.beta.directories.files.<a href="./src/resources/beta/directories/files.ts">add</a>(directoryID, { ...params }) -> FileAddResponse</code>
- <code title="get /api/v1/beta/directories/{directory_id}/files/{directory_file_id}">client.beta.directories.files.<a href="./src/resources/beta/directories/files.ts">get</a>(directoryFileID, { ...params }) -> FileGetResponse</code>

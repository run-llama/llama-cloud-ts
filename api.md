# V1

Types:

- <code><a href="./src/resources/v1/v1.ts">DeleteParams</a></code>
- <code><a href="./src/resources/v1/v1.ts">V1GetJobsResponse</a></code>

Methods:

- <code title="get /api/v1/jobs">client.v1.<a href="./src/resources/v1/v1.ts">getJobs</a>({ ...params }) -> V1GetJobsResponse</code>

## Projects

Types:

- <code><a href="./src/resources/v1/projects.ts">AgentDeploymentList</a></code>
- <code><a href="./src/resources/v1/projects.ts">Project</a></code>
- <code><a href="./src/resources/v1/projects.ts">ProjectCreate</a></code>
- <code><a href="./src/resources/v1/projects.ts">ProjectListResponse</a></code>

Methods:

- <code title="post /api/v1/projects">client.v1.projects.<a href="./src/resources/v1/projects.ts">create</a>({ ...params }) -> Project</code>
- <code title="get /api/v1/projects/{project_id}">client.v1.projects.<a href="./src/resources/v1/projects.ts">retrieve</a>(projectID, { ...params }) -> Project</code>
- <code title="put /api/v1/projects/{project_id}">client.v1.projects.<a href="./src/resources/v1/projects.ts">update</a>(projectID, { ...params }) -> Project</code>
- <code title="get /api/v1/projects">client.v1.projects.<a href="./src/resources/v1/projects.ts">list</a>({ ...params }) -> ProjectListResponse</code>
- <code title="delete /api/v1/projects/{project_id}">client.v1.projects.<a href="./src/resources/v1/projects.ts">delete</a>(projectID, { ...params }) -> void</code>
- <code title="get /api/v1/projects/current">client.v1.projects.<a href="./src/resources/v1/projects.ts">getCurrent</a>({ ...params }) -> Project</code>
- <code title="get /api/v1/projects/{project_id}/usage">client.v1.projects.<a href="./src/resources/v1/projects.ts">getUsage</a>(projectID, { ...params }) -> UsageAndPlan</code>
- <code title="get /api/v1/projects/{project_id}/agents">client.v1.projects.<a href="./src/resources/v1/projects.ts">listAgents</a>(projectID) -> AgentDeploymentList</code>
- <code title="post /api/v1/projects/{project_id}/agents:sync">client.v1.projects.<a href="./src/resources/v1/projects.ts">syncAgents</a>(projectID) -> AgentDeploymentList</code>
- <code title="put /api/v1/projects">client.v1.projects.<a href="./src/resources/v1/projects.ts">upsert</a>({ ...params }) -> Project</code>

## APIKeys

Types:

- <code><a href="./src/resources/v1/api-keys.ts">APIKey</a></code>
- <code><a href="./src/resources/v1/api-keys.ts">APIKeyCreate</a></code>
- <code><a href="./src/resources/v1/api-keys.ts">APIKeyType</a></code>
- <code><a href="./src/resources/v1/api-keys.ts">APIKeyListResponse</a></code>

Methods:

- <code title="post /api/v1/api-keys">client.v1.apiKeys.<a href="./src/resources/v1/api-keys.ts">create</a>({ ...params }) -> APIKey</code>
- <code title="get /api/v1/api-keys">client.v1.apiKeys.<a href="./src/resources/v1/api-keys.ts">list</a>({ ...params }) -> APIKeyListResponse</code>
- <code title="delete /api/v1/api-keys/{api_key_id}">client.v1.apiKeys.<a href="./src/resources/v1/api-keys.ts">delete</a>(apiKeyID) -> void</code>

## ValidateIntegrations

Types:

- <code><a href="./src/resources/v1/validate-integrations.ts">AzureOpenAIEmbeddingConfig</a></code>
- <code><a href="./src/resources/v1/validate-integrations.ts">BaseConnectionValidation</a></code>
- <code><a href="./src/resources/v1/validate-integrations.ts">BedrockEmbeddingConfig</a></code>
- <code><a href="./src/resources/v1/validate-integrations.ts">CloudAstraDBVectorStore</a></code>
- <code><a href="./src/resources/v1/validate-integrations.ts">CloudAzStorageBlobDataSource</a></code>
- <code><a href="./src/resources/v1/validate-integrations.ts">CloudAzureAISearchVectorStore</a></code>
- <code><a href="./src/resources/v1/validate-integrations.ts">CloudBoxDataSource</a></code>
- <code><a href="./src/resources/v1/validate-integrations.ts">CloudConfluenceDataSource</a></code>
- <code><a href="./src/resources/v1/validate-integrations.ts">CloudJiraDataSource</a></code>
- <code><a href="./src/resources/v1/validate-integrations.ts">CloudJiraDataSourceV2</a></code>
- <code><a href="./src/resources/v1/validate-integrations.ts">CloudMilvusVectorStore</a></code>
- <code><a href="./src/resources/v1/validate-integrations.ts">CloudMongoDBAtlasVectorSearch</a></code>
- <code><a href="./src/resources/v1/validate-integrations.ts">CloudNotionPageDataSource</a></code>
- <code><a href="./src/resources/v1/validate-integrations.ts">CloudOneDriveDataSource</a></code>
- <code><a href="./src/resources/v1/validate-integrations.ts">CloudPineconeVectorStore</a></code>
- <code><a href="./src/resources/v1/validate-integrations.ts">CloudPostgresVectorStore</a></code>
- <code><a href="./src/resources/v1/validate-integrations.ts">CloudQdrantVectorStore</a></code>
- <code><a href="./src/resources/v1/validate-integrations.ts">CloudS3DataSource</a></code>
- <code><a href="./src/resources/v1/validate-integrations.ts">CloudSharepointDataSource</a></code>
- <code><a href="./src/resources/v1/validate-integrations.ts">CloudSlackDataSource</a></code>
- <code><a href="./src/resources/v1/validate-integrations.ts">CohereEmbeddingConfig</a></code>
- <code><a href="./src/resources/v1/validate-integrations.ts">ConfigurableDataSinkNames</a></code>
- <code><a href="./src/resources/v1/validate-integrations.ts">ConfigurableDataSourceNames</a></code>
- <code><a href="./src/resources/v1/validate-integrations.ts">DataSinkCreate</a></code>
- <code><a href="./src/resources/v1/validate-integrations.ts">DataSourceCreate</a></code>
- <code><a href="./src/resources/v1/validate-integrations.ts">GeminiEmbeddingConfig</a></code>
- <code><a href="./src/resources/v1/validate-integrations.ts">HuggingFaceInferenceAPIEmbeddingConfig</a></code>
- <code><a href="./src/resources/v1/validate-integrations.ts">OpenAIEmbeddingConfig</a></code>
- <code><a href="./src/resources/v1/validate-integrations.ts">VertexAIEmbeddingConfig</a></code>

Methods:

- <code title="post /api/v1/validate-integrations/validate-data-sink-connection">client.v1.validateIntegrations.<a href="./src/resources/v1/validate-integrations.ts">validateDataSinkConnection</a>({ ...params }) -> BaseConnectionValidation</code>
- <code title="post /api/v1/validate-integrations/validate-data-source-connection">client.v1.validateIntegrations.<a href="./src/resources/v1/validate-integrations.ts">validateDataSourceConnection</a>({ ...params }) -> BaseConnectionValidation</code>
- <code title="post /api/v1/validate-integrations/validate-embedding-connection">client.v1.validateIntegrations.<a href="./src/resources/v1/validate-integrations.ts">validateEmbeddingConnection</a>({ ...params }) -> BaseConnectionValidation</code>

## DataSinks

Types:

- <code><a href="./src/resources/v1/data-sinks.ts">DataSink</a></code>
- <code><a href="./src/resources/v1/data-sinks.ts">DataSinkListResponse</a></code>

Methods:

- <code title="post /api/v1/data-sinks">client.v1.dataSinks.<a href="./src/resources/v1/data-sinks.ts">create</a>({ ...params }) -> DataSink</code>
- <code title="get /api/v1/data-sinks/{data_sink_id}">client.v1.dataSinks.<a href="./src/resources/v1/data-sinks.ts">retrieve</a>(dataSinkID) -> DataSink</code>
- <code title="put /api/v1/data-sinks/{data_sink_id}">client.v1.dataSinks.<a href="./src/resources/v1/data-sinks.ts">update</a>(dataSinkID, { ...params }) -> DataSink</code>
- <code title="get /api/v1/data-sinks">client.v1.dataSinks.<a href="./src/resources/v1/data-sinks.ts">list</a>({ ...params }) -> DataSinkListResponse</code>
- <code title="delete /api/v1/data-sinks/{data_sink_id}">client.v1.dataSinks.<a href="./src/resources/v1/data-sinks.ts">delete</a>(dataSinkID) -> void</code>
- <code title="put /api/v1/data-sinks">client.v1.dataSinks.<a href="./src/resources/v1/data-sinks.ts">upsert</a>({ ...params }) -> DataSink</code>

## DataSources

Types:

- <code><a href="./src/resources/v1/data-sources.ts">DataSource</a></code>
- <code><a href="./src/resources/v1/data-sources.ts">DataSourceReaderVersionMetadata</a></code>
- <code><a href="./src/resources/v1/data-sources.ts">DataSourceListResponse</a></code>

Methods:

- <code title="post /api/v1/data-sources">client.v1.dataSources.<a href="./src/resources/v1/data-sources.ts">create</a>({ ...params }) -> DataSource</code>
- <code title="get /api/v1/data-sources/{data_source_id}">client.v1.dataSources.<a href="./src/resources/v1/data-sources.ts">retrieve</a>(dataSourceID) -> DataSource</code>
- <code title="put /api/v1/data-sources/{data_source_id}">client.v1.dataSources.<a href="./src/resources/v1/data-sources.ts">update</a>(dataSourceID, { ...params }) -> DataSource</code>
- <code title="get /api/v1/data-sources">client.v1.dataSources.<a href="./src/resources/v1/data-sources.ts">list</a>({ ...params }) -> DataSourceListResponse</code>
- <code title="delete /api/v1/data-sources/{data_source_id}">client.v1.dataSources.<a href="./src/resources/v1/data-sources.ts">delete</a>(dataSourceID) -> void</code>
- <code title="put /api/v1/data-sources">client.v1.dataSources.<a href="./src/resources/v1/data-sources.ts">upsert</a>({ ...params }) -> DataSource</code>

## EmbeddingModelConfigs

Types:

- <code><a href="./src/resources/v1/embedding-model-configs.ts">EmbeddingModelConfig</a></code>
- <code><a href="./src/resources/v1/embedding-model-configs.ts">EmbeddingModelConfigUpdate</a></code>
- <code><a href="./src/resources/v1/embedding-model-configs.ts">EmbeddingModelConfigListResponse</a></code>

Methods:

- <code title="post /api/v1/embedding-model-configs">client.v1.embeddingModelConfigs.<a href="./src/resources/v1/embedding-model-configs.ts">create</a>({ ...params }) -> EmbeddingModelConfig</code>
- <code title="put /api/v1/embedding-model-configs/{embedding_model_config_id}">client.v1.embeddingModelConfigs.<a href="./src/resources/v1/embedding-model-configs.ts">update</a>(embeddingModelConfigID, { ...params }) -> EmbeddingModelConfig</code>
- <code title="get /api/v1/embedding-model-configs">client.v1.embeddingModelConfigs.<a href="./src/resources/v1/embedding-model-configs.ts">list</a>({ ...params }) -> EmbeddingModelConfigListResponse</code>
- <code title="delete /api/v1/embedding-model-configs/{embedding_model_config_id}">client.v1.embeddingModelConfigs.<a href="./src/resources/v1/embedding-model-configs.ts">delete</a>(embeddingModelConfigID, { ...params }) -> void</code>
- <code title="put /api/v1/embedding-model-configs">client.v1.embeddingModelConfigs.<a href="./src/resources/v1/embedding-model-configs.ts">upsert</a>({ ...params }) -> EmbeddingModelConfig</code>

## Organizations

Types:

- <code><a href="./src/resources/v1/organizations/organizations.ts">Organization</a></code>
- <code><a href="./src/resources/v1/organizations/organizations.ts">OrganizationCreate</a></code>
- <code><a href="./src/resources/v1/organizations/organizations.ts">Role</a></code>
- <code><a href="./src/resources/v1/organizations/organizations.ts">UsageAndPlan</a></code>
- <code><a href="./src/resources/v1/organizations/organizations.ts">OrganizationListResponse</a></code>
- <code><a href="./src/resources/v1/organizations/organizations.ts">OrganizationRetrieveRolesResponse</a></code>

Methods:

- <code title="put /api/v1/organizations">client.v1.organizations.<a href="./src/resources/v1/organizations/organizations.ts">create</a>({ ...params }) -> Organization</code>
- <code title="get /api/v1/organizations/{organization_id}">client.v1.organizations.<a href="./src/resources/v1/organizations/organizations.ts">retrieve</a>(organizationID) -> Organization</code>
- <code title="put /api/v1/organizations/{organization_id}">client.v1.organizations.<a href="./src/resources/v1/organizations/organizations.ts">update</a>(organizationID, { ...params }) -> Organization</code>
- <code title="get /api/v1/organizations">client.v1.organizations.<a href="./src/resources/v1/organizations/organizations.ts">list</a>() -> OrganizationListResponse</code>
- <code title="delete /api/v1/organizations/{organization_id}">client.v1.organizations.<a href="./src/resources/v1/organizations/organizations.ts">delete</a>(organizationID) -> void</code>
- <code title="get /api/v1/organizations/{organization_id}/roles">client.v1.organizations.<a href="./src/resources/v1/organizations/organizations.ts">retrieveRoles</a>(organizationID) -> OrganizationRetrieveRolesResponse</code>
- <code title="get /api/v1/organizations/{organization_id}/usage">client.v1.organizations.<a href="./src/resources/v1/organizations/organizations.ts">retrieveUsage</a>(organizationID, { ...params }) -> UsageAndPlan</code>

### Default

Methods:

- <code title="put /api/v1/organizations/default">client.v1.organizations.default.<a href="./src/resources/v1/organizations/default.ts">create</a>({ ...params }) -> Organization</code>
- <code title="get /api/v1/organizations/default">client.v1.organizations.default.<a href="./src/resources/v1/organizations/default.ts">list</a>() -> Organization</code>

### Users

Types:

- <code><a href="./src/resources/v1/organizations/users/users.ts">UserOrganization</a></code>
- <code><a href="./src/resources/v1/organizations/users/users.ts">UserCreateResponse</a></code>
- <code><a href="./src/resources/v1/organizations/users/users.ts">UserListResponse</a></code>

Methods:

- <code title="put /api/v1/organizations/{organization_id}/users">client.v1.organizations.users.<a href="./src/resources/v1/organizations/users/users.ts">create</a>(organizationID, [ ...body ]) -> UserCreateResponse</code>
- <code title="get /api/v1/organizations/{organization_id}/users">client.v1.organizations.users.<a href="./src/resources/v1/organizations/users/users.ts">list</a>(organizationID) -> UserListResponse</code>
- <code title="delete /api/v1/organizations/{organization_id}/users/{member_user_id}">client.v1.organizations.users.<a href="./src/resources/v1/organizations/users/users.ts">delete</a>(memberUserID, [ ...body ]) -> void</code>
- <code title="put /api/v1/organizations/{organization_id}/users/remove">client.v1.organizations.users.<a href="./src/resources/v1/organizations/users/users.ts">updateRemove</a>(organizationID, [ ...body ]) -> void</code>

#### Roles

Types:

- <code><a href="./src/resources/v1/organizations/users/roles.ts">UserOrganizationRole</a></code>

Methods:

- <code title="put /api/v1/organizations/{organization_id}/users/roles">client.v1.organizations.users.roles.<a href="./src/resources/v1/organizations/users/roles.ts">create</a>(organizationID, { ...params }) -> UserOrganizationRole</code>
- <code title="get /api/v1/organizations/{organization_id}/users/roles">client.v1.organizations.users.roles.<a href="./src/resources/v1/organizations/users/roles.ts">list</a>(organizationID, { ...params }) -> UserOrganizationRole | null</code>

#### Projects

Types:

- <code><a href="./src/resources/v1/organizations/users/projects.ts">ProjectCreateResponse</a></code>
- <code><a href="./src/resources/v1/organizations/users/projects.ts">ProjectListResponse</a></code>
- <code><a href="./src/resources/v1/organizations/users/projects.ts">ProjectDeleteResponse</a></code>

Methods:

- <code title="put /api/v1/organizations/{organization_id}/users/{user_id}/projects">client.v1.organizations.users.projects.<a href="./src/resources/v1/organizations/users/projects.ts">create</a>(userID, { ...params }) -> unknown</code>
- <code title="get /api/v1/organizations/{organization_id}/users/{user_id}/projects">client.v1.organizations.users.projects.<a href="./src/resources/v1/organizations/users/projects.ts">list</a>(userID, { ...params }) -> ProjectListResponse</code>
- <code title="delete /api/v1/organizations/{organization_id}/users/{user_id}/projects/{project_id}">client.v1.organizations.users.projects.<a href="./src/resources/v1/organizations/users/projects.ts">delete</a>(projectID, { ...params }) -> unknown</code>

## Files

Types:

- <code><a href="./src/resources/v1/files/files.ts">File</a></code>
- <code><a href="./src/resources/v1/files/files.ts">FileCreate</a></code>
- <code><a href="./src/resources/v1/files/files.ts">PresignedURL</a></code>
- <code><a href="./src/resources/v1/files/files.ts">FileListResponse</a></code>
- <code><a href="./src/resources/v1/files/files.ts">FileGeneratePresignedURLResponse</a></code>
- <code><a href="./src/resources/v1/files/files.ts">FileSyncResponse</a></code>

Methods:

- <code title="get /api/v1/files/{id}">client.v1.files.<a href="./src/resources/v1/files/files.ts">retrieve</a>(id, { ...params }) -> File</code>
- <code title="get /api/v1/files">client.v1.files.<a href="./src/resources/v1/files/files.ts">list</a>({ ...params }) -> FileListResponse</code>
- <code title="delete /api/v1/files/{id}">client.v1.files.<a href="./src/resources/v1/files/files.ts">delete</a>(id, { ...params }) -> void</code>
- <code title="put /api/v1/files">client.v1.files.<a href="./src/resources/v1/files/files.ts">generatePresignedURL</a>({ ...params }) -> FileGeneratePresignedURLResponse</code>
- <code title="get /api/v1/files/{id}/content">client.v1.files.<a href="./src/resources/v1/files/files.ts">readContent</a>(id, { ...params }) -> PresignedURL</code>
- <code title="put /api/v1/files/sync">client.v1.files.<a href="./src/resources/v1/files/files.ts">sync</a>({ ...params }) -> FileSyncResponse</code>
- <code title="post /api/v1/files">client.v1.files.<a href="./src/resources/v1/files/files.ts">upload</a>({ ...params }) -> File</code>
- <code title="put /api/v1/files/upload_from_url">client.v1.files.<a href="./src/resources/v1/files/files.ts">uploadFromURL</a>({ ...params }) -> File</code>

### PageScreenshots

Types:

- <code><a href="./src/resources/v1/files/page-screenshots.ts">PageScreenshotMetadata</a></code>
- <code><a href="./src/resources/v1/files/page-screenshots.ts">PageScreenshotRetrieveResponse</a></code>
- <code><a href="./src/resources/v1/files/page-screenshots.ts">PageScreenshotListResponse</a></code>

Methods:

- <code title="get /api/v1/files/{id}/page_screenshots/{page_index}">client.v1.files.pageScreenshots.<a href="./src/resources/v1/files/page-screenshots.ts">retrieve</a>(pageIndex, { ...params }) -> unknown</code>
- <code title="get /api/v1/files/{id}/page_screenshots">client.v1.files.pageScreenshots.<a href="./src/resources/v1/files/page-screenshots.ts">list</a>(id, { ...params }) -> PageScreenshotListResponse</code>
- <code title="post /api/v1/files/{id}/page_screenshots/{page_index}/presigned_url">client.v1.files.pageScreenshots.<a href="./src/resources/v1/files/page-screenshots.ts">generatePresignedURL</a>(pageIndex, { ...params }) -> PresignedURL</code>

### PageFigures

Types:

- <code><a href="./src/resources/v1/files/page-figures.ts">PageFigureMetadata</a></code>
- <code><a href="./src/resources/v1/files/page-figures.ts">PageFigureRetrieveResponse</a></code>
- <code><a href="./src/resources/v1/files/page-figures.ts">PageFigureListResponse</a></code>

Methods:

- <code title="get /api/v1/files/{id}/page-figures/{page_index}/{figure_name}">client.v1.files.pageFigures.<a href="./src/resources/v1/files/page-figures.ts">retrieve</a>(figureName, { ...params }) -> unknown</code>
- <code title="get /api/v1/files/{id}/page-figures/{page_index}">client.v1.files.pageFigures.<a href="./src/resources/v1/files/page-figures.ts">list</a>(pageIndex, { ...params }) -> PageFigureListResponse</code>
- <code title="post /api/v1/files/{id}/page-figures/{page_index}/{figure_name}/presigned_url">client.v1.files.pageFigures.<a href="./src/resources/v1/files/page-figures.ts">generatePresignedURL</a>(figureName, { ...params }) -> PresignedURL</code>

## Pipelines

Types:

- <code><a href="./src/resources/v1/pipelines/pipelines.ts">AdvancedModeTransformConfig</a></code>
- <code><a href="./src/resources/v1/pipelines/pipelines.ts">AutoTransformConfig</a></code>
- <code><a href="./src/resources/v1/pipelines/pipelines.ts">LlamaParseParameters</a></code>
- <code><a href="./src/resources/v1/pipelines/pipelines.ts">LlmParameters</a></code>
- <code><a href="./src/resources/v1/pipelines/pipelines.ts">ManagedIngestionStatusResponse</a></code>
- <code><a href="./src/resources/v1/pipelines/pipelines.ts">MessageRole</a></code>
- <code><a href="./src/resources/v1/pipelines/pipelines.ts">MetadataFilters</a></code>
- <code><a href="./src/resources/v1/pipelines/pipelines.ts">PageFigureNodeWithScore</a></code>
- <code><a href="./src/resources/v1/pipelines/pipelines.ts">PageScreenshotNodeWithScore</a></code>
- <code><a href="./src/resources/v1/pipelines/pipelines.ts">Pipeline</a></code>
- <code><a href="./src/resources/v1/pipelines/pipelines.ts">PipelineCreate</a></code>
- <code><a href="./src/resources/v1/pipelines/pipelines.ts">PipelineMetadataConfig</a></code>
- <code><a href="./src/resources/v1/pipelines/pipelines.ts">PipelineType</a></code>
- <code><a href="./src/resources/v1/pipelines/pipelines.ts">PresetRetrievalParams</a></code>
- <code><a href="./src/resources/v1/pipelines/pipelines.ts">RetrievalMode</a></code>
- <code><a href="./src/resources/v1/pipelines/pipelines.ts">SparseModelConfig</a></code>
- <code><a href="./src/resources/v1/pipelines/pipelines.ts">PipelineRetrieveResponse</a></code>
- <code><a href="./src/resources/v1/pipelines/pipelines.ts">PipelineListResponse</a></code>
- <code><a href="./src/resources/v1/pipelines/pipelines.ts">PipelineChatResponse</a></code>
- <code><a href="./src/resources/v1/pipelines/pipelines.ts">PipelineRetrieveFiles2Response</a></code>
- <code><a href="./src/resources/v1/pipelines/pipelines.ts">PipelineRetrievePlaygroundSessionResponse</a></code>

Methods:

- <code title="put /api/v1/pipelines">client.v1.pipelines.<a href="./src/resources/v1/pipelines/pipelines.ts">create</a>({ ...params }) -> Pipeline</code>
- <code title="post /api/v1/pipelines/{pipeline_id}/retrieve">client.v1.pipelines.<a href="./src/resources/v1/pipelines/pipelines.ts">retrieve</a>(pipelineID, { ...params }) -> PipelineRetrieveResponse</code>
- <code title="put /api/v1/pipelines/{pipeline_id}">client.v1.pipelines.<a href="./src/resources/v1/pipelines/pipelines.ts">update</a>(pipelineID, { ...params }) -> Pipeline</code>
- <code title="get /api/v1/pipelines">client.v1.pipelines.<a href="./src/resources/v1/pipelines/pipelines.ts">list</a>({ ...params }) -> PipelineListResponse</code>
- <code title="delete /api/v1/pipelines/{pipeline_id}">client.v1.pipelines.<a href="./src/resources/v1/pipelines/pipelines.ts">delete</a>(pipelineID) -> void</code>
- <code title="post /api/v1/pipelines/{pipeline_id}/chat">client.v1.pipelines.<a href="./src/resources/v1/pipelines/pipelines.ts">chat</a>(pipelineID, { ...params }) -> unknown</code>
- <code title="post /api/v1/pipelines/{pipeline_id}/copy">client.v1.pipelines.<a href="./src/resources/v1/pipelines/pipelines.ts">copy</a>(pipelineID) -> Pipeline</code>
- <code title="post /api/v1/pipelines/{pipeline_id}/force-delete">client.v1.pipelines.<a href="./src/resources/v1/pipelines/pipelines.ts">forceDelete</a>(pipelineID) -> void</code>
- <code title="get /api/v1/pipelines/{pipeline_id}/files2">client.v1.pipelines.<a href="./src/resources/v1/pipelines/pipelines.ts">retrieveFiles2</a>(pipelineID, { ...params }) -> PipelineRetrieveFiles2Response</code>
- <code title="get /api/v1/pipelines/{pipeline_id}/playground-session">client.v1.pipelines.<a href="./src/resources/v1/pipelines/pipelines.ts">retrievePlaygroundSession</a>(pipelineID) -> PipelineRetrievePlaygroundSessionResponse</code>
- <code title="get /api/v1/pipelines/{pipeline_id}/status">client.v1.pipelines.<a href="./src/resources/v1/pipelines/pipelines.ts">retrieveStatus</a>(pipelineID, { ...params }) -> ManagedIngestionStatusResponse</code>

### Sync

Methods:

- <code title="post /api/v1/pipelines/{pipeline_id}/sync">client.v1.pipelines.sync.<a href="./src/resources/v1/pipelines/sync.ts">create</a>(pipelineID) -> Pipeline</code>
- <code title="post /api/v1/pipelines/{pipeline_id}/sync/cancel">client.v1.pipelines.sync.<a href="./src/resources/v1/pipelines/sync.ts">cancel</a>(pipelineID) -> Pipeline</code>

### DataSources

Types:

- <code><a href="./src/resources/v1/pipelines/data-sources.ts">PipelineDataSource</a></code>
- <code><a href="./src/resources/v1/pipelines/data-sources.ts">DataSourceRetrieveDataSourcesResponse</a></code>
- <code><a href="./src/resources/v1/pipelines/data-sources.ts">DataSourceUpdateDataSourcesResponse</a></code>

Methods:

- <code title="put /api/v1/pipelines/{pipeline_id}/data-sources/{data_source_id}">client.v1.pipelines.dataSources.<a href="./src/resources/v1/pipelines/data-sources.ts">update</a>(dataSourceID, { ...params }) -> PipelineDataSource</code>
- <code title="get /api/v1/pipelines/{pipeline_id}/data-sources">client.v1.pipelines.dataSources.<a href="./src/resources/v1/pipelines/data-sources.ts">retrieveDataSources</a>(pipelineID) -> DataSourceRetrieveDataSourcesResponse</code>
- <code title="get /api/v1/pipelines/{pipeline_id}/data-sources/{data_source_id}/status">client.v1.pipelines.dataSources.<a href="./src/resources/v1/pipelines/data-sources.ts">retrieveStatus</a>(dataSourceID, { ...params }) -> ManagedIngestionStatusResponse</code>
- <code title="post /api/v1/pipelines/{pipeline_id}/data-sources/{data_source_id}/sync">client.v1.pipelines.dataSources.<a href="./src/resources/v1/pipelines/data-sources.ts">sync</a>(dataSourceID, { ...params }) -> Pipeline</code>
- <code title="put /api/v1/pipelines/{pipeline_id}/data-sources">client.v1.pipelines.dataSources.<a href="./src/resources/v1/pipelines/data-sources.ts">updateDataSources</a>(pipelineID, [ ...body ]) -> DataSourceUpdateDataSourcesResponse</code>

### Files

Types:

- <code><a href="./src/resources/v1/pipelines/files.ts">PipelineFile</a></code>
- <code><a href="./src/resources/v1/pipelines/files.ts">FileCreateResponse</a></code>
- <code><a href="./src/resources/v1/pipelines/files.ts">FileListResponse</a></code>
- <code><a href="./src/resources/v1/pipelines/files.ts">FileRetrieveStatusCountsResponse</a></code>

Methods:

- <code title="put /api/v1/pipelines/{pipeline_id}/files">client.v1.pipelines.files.<a href="./src/resources/v1/pipelines/files.ts">create</a>(pipelineID, [ ...body ]) -> FileCreateResponse</code>
- <code title="put /api/v1/pipelines/{pipeline_id}/files/{file_id}">client.v1.pipelines.files.<a href="./src/resources/v1/pipelines/files.ts">update</a>(fileID, { ...params }) -> PipelineFile</code>
- <code title="get /api/v1/pipelines/{pipeline_id}/files">client.v1.pipelines.files.<a href="./src/resources/v1/pipelines/files.ts">list</a>(pipelineID, { ...params }) -> FileListResponse</code>
- <code title="delete /api/v1/pipelines/{pipeline_id}/files/{file_id}">client.v1.pipelines.files.<a href="./src/resources/v1/pipelines/files.ts">delete</a>(fileID, { ...params }) -> void</code>
- <code title="get /api/v1/pipelines/{pipeline_id}/files/{file_id}/status">client.v1.pipelines.files.<a href="./src/resources/v1/pipelines/files.ts">retrieveStatus</a>(fileID, { ...params }) -> ManagedIngestionStatusResponse</code>
- <code title="get /api/v1/pipelines/{pipeline_id}/files/status-counts">client.v1.pipelines.files.<a href="./src/resources/v1/pipelines/files.ts">retrieveStatusCounts</a>(pipelineID, { ...params }) -> FileRetrieveStatusCountsResponse</code>

### Metadata

Types:

- <code><a href="./src/resources/v1/pipelines/metadata.ts">MetadataCreateResponse</a></code>

Methods:

- <code title="put /api/v1/pipelines/{pipeline_id}/metadata">client.v1.pipelines.metadata.<a href="./src/resources/v1/pipelines/metadata.ts">create</a>(pipelineID, { ...params }) -> MetadataCreateResponse</code>
- <code title="delete /api/v1/pipelines/{pipeline_id}/metadata">client.v1.pipelines.metadata.<a href="./src/resources/v1/pipelines/metadata.ts">deleteAll</a>(pipelineID) -> void</code>

### Documents

Types:

- <code><a href="./src/resources/v1/pipelines/documents.ts">CloudDocument</a></code>
- <code><a href="./src/resources/v1/pipelines/documents.ts">CloudDocumentCreate</a></code>
- <code><a href="./src/resources/v1/pipelines/documents.ts">TextNode</a></code>
- <code><a href="./src/resources/v1/pipelines/documents.ts">DocumentCreateResponse</a></code>
- <code><a href="./src/resources/v1/pipelines/documents.ts">DocumentListResponse</a></code>
- <code><a href="./src/resources/v1/pipelines/documents.ts">DocumentForceSyncAllResponse</a></code>
- <code><a href="./src/resources/v1/pipelines/documents.ts">DocumentRetrieveChunksResponse</a></code>
- <code><a href="./src/resources/v1/pipelines/documents.ts">DocumentRetrievePaginatedResponse</a></code>
- <code><a href="./src/resources/v1/pipelines/documents.ts">DocumentSyncResponse</a></code>

Methods:

- <code title="put /api/v1/pipelines/{pipeline_id}/documents">client.v1.pipelines.documents.<a href="./src/resources/v1/pipelines/documents.ts">create</a>(pipelineID, [ ...body ]) -> DocumentCreateResponse</code>
- <code title="get /api/v1/pipelines/{pipeline_id}/documents/{document_id}">client.v1.pipelines.documents.<a href="./src/resources/v1/pipelines/documents.ts">retrieve</a>(documentID, { ...params }) -> CloudDocument</code>
- <code title="get /api/v1/pipelines/{pipeline_id}/documents">client.v1.pipelines.documents.<a href="./src/resources/v1/pipelines/documents.ts">list</a>(pipelineID, { ...params }) -> DocumentListResponse</code>
- <code title="delete /api/v1/pipelines/{pipeline_id}/documents/{document_id}">client.v1.pipelines.documents.<a href="./src/resources/v1/pipelines/documents.ts">delete</a>(documentID, { ...params }) -> void</code>
- <code title="post /api/v1/pipelines/{pipeline_id}/documents/force-sync-all">client.v1.pipelines.documents.<a href="./src/resources/v1/pipelines/documents.ts">forceSyncAll</a>(pipelineID, { ...params }) -> unknown</code>
- <code title="get /api/v1/pipelines/{pipeline_id}/documents/{document_id}/chunks">client.v1.pipelines.documents.<a href="./src/resources/v1/pipelines/documents.ts">retrieveChunks</a>(documentID, { ...params }) -> DocumentRetrieveChunksResponse</code>
- <code title="get /api/v1/pipelines/{pipeline_id}/documents/paginated">client.v1.pipelines.documents.<a href="./src/resources/v1/pipelines/documents.ts">retrievePaginated</a>(pipelineID, { ...params }) -> DocumentRetrievePaginatedResponse</code>
- <code title="get /api/v1/pipelines/{pipeline_id}/documents/{document_id}/status">client.v1.pipelines.documents.<a href="./src/resources/v1/pipelines/documents.ts">retrieveStatus</a>(documentID, { ...params }) -> ManagedIngestionStatusResponse</code>
- <code title="post /api/v1/pipelines/{pipeline_id}/documents/{document_id}/sync">client.v1.pipelines.documents.<a href="./src/resources/v1/pipelines/documents.ts">sync</a>(documentID, { ...params }) -> unknown</code>

## Retrievers

Types:

- <code><a href="./src/resources/v1/retrievers/retrievers.ts">Retriever</a></code>
- <code><a href="./src/resources/v1/retrievers/retrievers.ts">RetrieverCreate</a></code>
- <code><a href="./src/resources/v1/retrievers/retrievers.ts">RetrieverPipeline</a></code>
- <code><a href="./src/resources/v1/retrievers/retrievers.ts">RetrieverListResponse</a></code>

Methods:

- <code title="post /api/v1/retrievers">client.v1.retrievers.<a href="./src/resources/v1/retrievers/retrievers.ts">create</a>({ ...params }) -> Retriever</code>
- <code title="put /api/v1/retrievers/{retriever_id}">client.v1.retrievers.<a href="./src/resources/v1/retrievers/retrievers.ts">update</a>(retrieverID, { ...params }) -> Retriever</code>
- <code title="get /api/v1/retrievers">client.v1.retrievers.<a href="./src/resources/v1/retrievers/retrievers.ts">list</a>({ ...params }) -> RetrieverListResponse</code>
- <code title="delete /api/v1/retrievers/{retriever_id}">client.v1.retrievers.<a href="./src/resources/v1/retrievers/retrievers.ts">delete</a>(retrieverID) -> void</code>
- <code title="post /api/v1/retrievers/retrieve">client.v1.retrievers.<a href="./src/resources/v1/retrievers/retrievers.ts">retrieveDirect</a>({ ...params }) -> CompositeRetrievalResult</code>
- <code title="put /api/v1/retrievers">client.v1.retrievers.<a href="./src/resources/v1/retrievers/retrievers.ts">upsert</a>({ ...params }) -> Retriever</code>

### Retrieve

Types:

- <code><a href="./src/resources/v1/retrievers/retrieve.ts">CompositeRetrievalMode</a></code>
- <code><a href="./src/resources/v1/retrievers/retrieve.ts">CompositeRetrievalResult</a></code>
- <code><a href="./src/resources/v1/retrievers/retrieve.ts">ReRankConfig</a></code>

## Evals

Types:

- <code><a href="./src/resources/v1/evals.ts">EvalListSupportedModelsResponse</a></code>

Methods:

- <code title="get /api/v1/evals/models">client.v1.evals.<a href="./src/resources/v1/evals.ts">listSupportedModels</a>() -> EvalListSupportedModelsResponse</code>

## Parsing

Types:

- <code><a href="./src/resources/v1/parsing/parsing.ts">FailPageMode</a></code>
- <code><a href="./src/resources/v1/parsing/parsing.ts">LlamaParseSupportedFileExtensions</a></code>
- <code><a href="./src/resources/v1/parsing/parsing.ts">ParserLanguages</a></code>
- <code><a href="./src/resources/v1/parsing/parsing.ts">ParsingHistoryItem</a></code>
- <code><a href="./src/resources/v1/parsing/parsing.ts">ParsingJob</a></code>
- <code><a href="./src/resources/v1/parsing/parsing.ts">ParsingMode</a></code>
- <code><a href="./src/resources/v1/parsing/parsing.ts">StatusEnum</a></code>
- <code><a href="./src/resources/v1/parsing/parsing.ts">ParsingGetParsingHistoryResponse</a></code>
- <code><a href="./src/resources/v1/parsing/parsing.ts">ParsingGetSupportedFileExtensionsResponse</a></code>

Methods:

- <code title="post /api/v1/parsing/screenshot">client.v1.parsing.<a href="./src/resources/v1/parsing/parsing.ts">createScreenshot</a>({ ...params }) -> ParsingJob</code>
- <code title="get /api/v1/parsing/history">client.v1.parsing.<a href="./src/resources/v1/parsing/parsing.ts">getParsingHistory</a>() -> ParsingGetParsingHistoryResponse</code>
- <code title="get /api/v1/parsing/supported_file_extensions">client.v1.parsing.<a href="./src/resources/v1/parsing/parsing.ts">getSupportedFileExtensions</a>() -> ParsingGetSupportedFileExtensionsResponse</code>
- <code title="post /api/v1/parsing/upload">client.v1.parsing.<a href="./src/resources/v1/parsing/parsing.ts">uploadFile</a>({ ...params }) -> ParsingJob</code>

### Job

Types:

- <code><a href="./src/resources/v1/parsing/job/job.ts">JobGetDetailsResponse</a></code>
- <code><a href="./src/resources/v1/parsing/job/job.ts">JobGetParametersResponse</a></code>

Methods:

- <code title="get /api/v1/parsing/job/{job_id}">client.v1.parsing.job.<a href="./src/resources/v1/parsing/job/job.ts">retrieve</a>(jobID) -> ParsingJob</code>
- <code title="get /api/v1/parsing/job/{job_id}/read/{filename}">client.v1.parsing.job.<a href="./src/resources/v1/parsing/job/job.ts">generatePresignedURL</a>(filename, { ...params }) -> PresignedURL</code>
- <code title="get /api/v1/parsing/job/{job_id}/details">client.v1.parsing.job.<a href="./src/resources/v1/parsing/job/job.ts">getDetails</a>(jobID) -> unknown</code>
- <code title="get /api/v1/parsing/job/{job_id}/parameters">client.v1.parsing.job.<a href="./src/resources/v1/parsing/job/job.ts">getParameters</a>(jobID) -> unknown</code>

#### Result

Types:

- <code><a href="./src/resources/v1/parsing/job/result/result.ts">ParsingJobJsonResult</a></code>
- <code><a href="./src/resources/v1/parsing/job/result/result.ts">ParsingJobMarkdownResult</a></code>
- <code><a href="./src/resources/v1/parsing/job/result/result.ts">ParsingJobStructuredResult</a></code>
- <code><a href="./src/resources/v1/parsing/job/result/result.ts">ParsingJobTextResult</a></code>
- <code><a href="./src/resources/v1/parsing/job/result/result.ts">ResultGetPdfResponse</a></code>
- <code><a href="./src/resources/v1/parsing/job/result/result.ts">ResultGetXlsxResponse</a></code>

Methods:

- <code title="get /api/v1/parsing/job/{job_id}/result/image/{name}">client.v1.parsing.job.result.<a href="./src/resources/v1/parsing/job/result/result.ts">getImage</a>(name, { ...params }) -> Response</code>
- <code title="get /api/v1/parsing/job/{job_id}/result/json">client.v1.parsing.job.result.<a href="./src/resources/v1/parsing/job/result/result.ts">getJson</a>(jobID, { ...params }) -> ParsingJobJsonResult</code>
- <code title="get /api/v1/parsing/job/{job_id}/result/markdown">client.v1.parsing.job.result.<a href="./src/resources/v1/parsing/job/result/result.ts">getMarkdown</a>(jobID, { ...params }) -> ParsingJobMarkdownResult</code>
- <code title="get /api/v1/parsing/job/{job_id}/result/pdf">client.v1.parsing.job.result.<a href="./src/resources/v1/parsing/job/result/result.ts">getPdf</a>(jobID) -> unknown</code>
- <code title="get /api/v1/parsing/job/{job_id}/result/structured">client.v1.parsing.job.result.<a href="./src/resources/v1/parsing/job/result/result.ts">getStructured</a>(jobID, { ...params }) -> ParsingJobStructuredResult</code>
- <code title="get /api/v1/parsing/job/{job_id}/result/text">client.v1.parsing.job.result.<a href="./src/resources/v1/parsing/job/result/result.ts">getText</a>(jobID, { ...params }) -> ParsingJobTextResult</code>
- <code title="get /api/v1/parsing/job/{job_id}/result/xlsx">client.v1.parsing.job.result.<a href="./src/resources/v1/parsing/job/result/result.ts">getXlsx</a>(jobID) -> unknown</code>

##### Raw

Types:

- <code><a href="./src/resources/v1/parsing/job/result/raw.ts">RawGetRawJsonResponse</a></code>
- <code><a href="./src/resources/v1/parsing/job/result/raw.ts">RawGetRawMarkdownResponse</a></code>
- <code><a href="./src/resources/v1/parsing/job/result/raw.ts">RawGetRawPdfResponse</a></code>
- <code><a href="./src/resources/v1/parsing/job/result/raw.ts">RawGetRawStructuredResponse</a></code>
- <code><a href="./src/resources/v1/parsing/job/result/raw.ts">RawGetRawTextResponse</a></code>
- <code><a href="./src/resources/v1/parsing/job/result/raw.ts">RawGetRawXlsxResponse</a></code>

Methods:

- <code title="get /api/v1/parsing/job/{job_id}/result/raw/json">client.v1.parsing.job.result.raw.<a href="./src/resources/v1/parsing/job/result/raw.ts">getRawJson</a>(jobID) -> unknown</code>
- <code title="get /api/v1/parsing/job/{job_id}/result/raw/markdown">client.v1.parsing.job.result.raw.<a href="./src/resources/v1/parsing/job/result/raw.ts">getRawMarkdown</a>(jobID) -> unknown</code>
- <code title="get /api/v1/parsing/job/{job_id}/result/raw/pdf">client.v1.parsing.job.result.raw.<a href="./src/resources/v1/parsing/job/result/raw.ts">getRawPdf</a>(jobID) -> unknown</code>
- <code title="get /api/v1/parsing/job/{job_id}/result/raw/structured">client.v1.parsing.job.result.raw.<a href="./src/resources/v1/parsing/job/result/raw.ts">getRawStructured</a>(jobID) -> unknown</code>
- <code title="get /api/v1/parsing/job/{job_id}/result/raw/text">client.v1.parsing.job.result.raw.<a href="./src/resources/v1/parsing/job/result/raw.ts">getRawText</a>(jobID) -> unknown</code>
- <code title="get /api/v1/parsing/job/{job_id}/result/raw/xlsx">client.v1.parsing.job.result.raw.<a href="./src/resources/v1/parsing/job/result/raw.ts">getRawXlsx</a>(jobID) -> unknown</code>

## Classifier

### Jobs

Types:

- <code><a href="./src/resources/v1/classifier/jobs.ts">ClassifierRule</a></code>
- <code><a href="./src/resources/v1/classifier/jobs.ts">ClassifyJob</a></code>
- <code><a href="./src/resources/v1/classifier/jobs.ts">ClassifyParsingConfiguration</a></code>
- <code><a href="./src/resources/v1/classifier/jobs.ts">JobListResponse</a></code>
- <code><a href="./src/resources/v1/classifier/jobs.ts">JobGetResultsResponse</a></code>

Methods:

- <code title="post /api/v1/classifier/jobs">client.v1.classifier.jobs.<a href="./src/resources/v1/classifier/jobs.ts">create</a>({ ...params }) -> ClassifyJob</code>
- <code title="get /api/v1/classifier/jobs/{classify_job_id}">client.v1.classifier.jobs.<a href="./src/resources/v1/classifier/jobs.ts">retrieve</a>(classifyJobID, { ...params }) -> ClassifyJob</code>
- <code title="get /api/v1/classifier/jobs">client.v1.classifier.jobs.<a href="./src/resources/v1/classifier/jobs.ts">list</a>({ ...params }) -> JobListResponse</code>
- <code title="get /api/v1/classifier/jobs/{classify_job_id}/results">client.v1.classifier.jobs.<a href="./src/resources/v1/classifier/jobs.ts">getResults</a>(classifyJobID, { ...params }) -> JobGetResultsResponse</code>

## Auth

Types:

- <code><a href="./src/resources/v1/auth.ts">AuthReadSelfResponse</a></code>

Methods:

- <code title="get /api/v1/auth/me">client.v1.auth.<a href="./src/resources/v1/auth.ts">readSelf</a>() -> AuthReadSelfResponse</code>

## Billing

Types:

- <code><a href="./src/resources/v1/billing/billing.ts">BillingCreateCustomerPortalSessionResponse</a></code>
- <code><a href="./src/resources/v1/billing/billing.ts">BillingCreateIntentAndCustomerSessionResponse</a></code>
- <code><a href="./src/resources/v1/billing/billing.ts">BillingDowngradePlanResponse</a></code>

Methods:

- <code title="post /api/v1/billing/customer-portal-session">client.v1.billing.<a href="./src/resources/v1/billing/billing.ts">createCustomerPortalSession</a>({ ...params }) -> string</code>
- <code title="post /api/v1/billing/create-intent-and-customer-session">client.v1.billing.<a href="./src/resources/v1/billing/billing.ts">createIntentAndCustomerSession</a>({ ...params }) -> BillingCreateIntentAndCustomerSessionResponse</code>
- <code title="post /api/v1/billing/downgrade-plan">client.v1.billing.<a href="./src/resources/v1/billing/billing.ts">downgradePlan</a>({ ...params }) -> BillingDowngradePlanResponse</code>

### Metronome

Types:

- <code><a href="./src/resources/v1/billing/metronome.ts">MetronomeGetDashboardResponse</a></code>

Methods:

- <code title="get /api/v1/billing/metronome/dashboard">client.v1.billing.metronome.<a href="./src/resources/v1/billing/metronome.ts">getDashboard</a>({ ...params }) -> MetronomeGetDashboardResponse</code>

## Extraction

Methods:

- <code title="post /api/v1/extraction/run">client.v1.extraction.<a href="./src/resources/v1/extraction/extraction.ts">run</a>({ ...params }) -> ExtractJob</code>

### Jobs

Types:

- <code><a href="./src/resources/v1/extraction/jobs.ts">ExtractJob</a></code>
- <code><a href="./src/resources/v1/extraction/jobs.ts">WebhookConfiguration</a></code>
- <code><a href="./src/resources/v1/extraction/jobs.ts">JobListResponse</a></code>
- <code><a href="./src/resources/v1/extraction/jobs.ts">JobBatchResponse</a></code>
- <code><a href="./src/resources/v1/extraction/jobs.ts">JobRetrieveResultResponse</a></code>

Methods:

- <code title="post /api/v1/extraction/jobs">client.v1.extraction.jobs.<a href="./src/resources/v1/extraction/jobs.ts">create</a>({ ...params }) -> ExtractJob</code>
- <code title="get /api/v1/extraction/jobs/{job_id}">client.v1.extraction.jobs.<a href="./src/resources/v1/extraction/jobs.ts">retrieve</a>(jobID) -> ExtractJob</code>
- <code title="get /api/v1/extraction/jobs">client.v1.extraction.jobs.<a href="./src/resources/v1/extraction/jobs.ts">list</a>({ ...params }) -> JobListResponse</code>
- <code title="post /api/v1/extraction/jobs/batch">client.v1.extraction.jobs.<a href="./src/resources/v1/extraction/jobs.ts">batch</a>({ ...params }) -> JobBatchResponse</code>
- <code title="post /api/v1/extraction/jobs/file">client.v1.extraction.jobs.<a href="./src/resources/v1/extraction/jobs.ts">file</a>({ ...params }) -> ExtractJob</code>
- <code title="get /api/v1/extraction/jobs/{job_id}/result">client.v1.extraction.jobs.<a href="./src/resources/v1/extraction/jobs.ts">retrieveResult</a>(jobID, { ...params }) -> JobRetrieveResultResponse</code>

### Runs

Types:

- <code><a href="./src/resources/v1/extraction/runs.ts">ExtractConfig</a></code>
- <code><a href="./src/resources/v1/extraction/runs.ts">ExtractRun</a></code>
- <code><a href="./src/resources/v1/extraction/runs.ts">RunListResponse</a></code>
- <code><a href="./src/resources/v1/extraction/runs.ts">RunDeleteResponse</a></code>

Methods:

- <code title="get /api/v1/extraction/runs/{run_id}">client.v1.extraction.runs.<a href="./src/resources/v1/extraction/runs.ts">retrieve</a>(runID, { ...params }) -> ExtractRun</code>
- <code title="get /api/v1/extraction/runs">client.v1.extraction.runs.<a href="./src/resources/v1/extraction/runs.ts">list</a>({ ...params }) -> RunListResponse</code>
- <code title="delete /api/v1/extraction/runs/{run_id}">client.v1.extraction.runs.<a href="./src/resources/v1/extraction/runs.ts">delete</a>(runID, { ...params }) -> unknown</code>
- <code title="get /api/v1/extraction/runs/latest-from-ui">client.v1.extraction.runs.<a href="./src/resources/v1/extraction/runs.ts">retrieveLatestFromUi</a>({ ...params }) -> ExtractRun | null</code>

### ExtractionAgents

Types:

- <code><a href="./src/resources/v1/extraction/extraction-agents/extraction-agents.ts">ExtractAgent</a></code>
- <code><a href="./src/resources/v1/extraction/extraction-agents/extraction-agents.ts">ExtractionAgentDeleteResponse</a></code>
- <code><a href="./src/resources/v1/extraction/extraction-agents/extraction-agents.ts">ExtractionAgentRetrieveExtractionAgentsResponse</a></code>

Methods:

- <code title="get /api/v1/extraction/extraction-agents/{extraction_agent_id}">client.v1.extraction.extractionAgents.<a href="./src/resources/v1/extraction/extraction-agents/extraction-agents.ts">retrieve</a>(extractionAgentID) -> ExtractAgent</code>
- <code title="put /api/v1/extraction/extraction-agents/{extraction_agent_id}">client.v1.extraction.extractionAgents.<a href="./src/resources/v1/extraction/extraction-agents/extraction-agents.ts">update</a>(extractionAgentID, { ...params }) -> ExtractAgent</code>
- <code title="delete /api/v1/extraction/extraction-agents/{extraction_agent_id}">client.v1.extraction.extractionAgents.<a href="./src/resources/v1/extraction/extraction-agents/extraction-agents.ts">delete</a>(extractionAgentID) -> unknown</code>
- <code title="post /api/v1/extraction/extraction-agents">client.v1.extraction.extractionAgents.<a href="./src/resources/v1/extraction/extraction-agents/extraction-agents.ts">extractionAgents</a>({ ...params }) -> ExtractAgent</code>
- <code title="get /api/v1/extraction/extraction-agents/default">client.v1.extraction.extractionAgents.<a href="./src/resources/v1/extraction/extraction-agents/extraction-agents.ts">retrieveDefault</a>({ ...params }) -> ExtractAgent</code>
- <code title="get /api/v1/extraction/extraction-agents">client.v1.extraction.extractionAgents.<a href="./src/resources/v1/extraction/extraction-agents/extraction-agents.ts">retrieveExtractionAgents</a>({ ...params }) -> ExtractionAgentRetrieveExtractionAgentsResponse</code>

#### Schema

Types:

- <code><a href="./src/resources/v1/extraction/extraction-agents/schema.ts">SchemaGenerateResponse</a></code>
- <code><a href="./src/resources/v1/extraction/extraction-agents/schema.ts">SchemaValidationResponse</a></code>

Methods:

- <code title="post /api/v1/extraction/extraction-agents/schema/generate">client.v1.extraction.extractionAgents.schema.<a href="./src/resources/v1/extraction/extraction-agents/schema.ts">generate</a>({ ...params }) -> SchemaGenerateResponse</code>
- <code title="post /api/v1/extraction/extraction-agents/schema/validation">client.v1.extraction.extractionAgents.schema.<a href="./src/resources/v1/extraction/extraction-agents/schema.ts">validation</a>({ ...params }) -> SchemaValidationResponse</code>

## Beta

Types:

- <code><a href="./src/resources/v1/beta/beta.ts">BetaRetrieveQuotaManagementResponse</a></code>

Methods:

- <code title="get /api/v1/beta/quota-management">client.v1.beta.<a href="./src/resources/v1/beta/beta.ts">retrieveQuotaManagement</a>({ ...params }) -> BetaRetrieveQuotaManagementResponse</code>

### APIKeys

Types:

- <code><a href="./src/resources/v1/beta/api-keys.ts">APIKeyRetrieveAPIKeysResponse</a></code>

Methods:

- <code title="get /api/v1/beta/api-keys/{api_key_id}">client.v1.beta.apiKeys.<a href="./src/resources/v1/beta/api-keys.ts">retrieve</a>(apiKeyID) -> APIKey</code>
- <code title="delete /api/v1/beta/api-keys/{api_key_id}">client.v1.beta.apiKeys.<a href="./src/resources/v1/beta/api-keys.ts">delete</a>(apiKeyID) -> void</code>
- <code title="post /api/v1/beta/api-keys">client.v1.beta.apiKeys.<a href="./src/resources/v1/beta/api-keys.ts">apiKeys</a>({ ...params }) -> APIKey</code>
- <code title="get /api/v1/beta/api-keys">client.v1.beta.apiKeys.<a href="./src/resources/v1/beta/api-keys.ts">retrieveAPIKeys</a>({ ...params }) -> APIKeyRetrieveAPIKeysResponse</code>

### Batches

Types:

- <code><a href="./src/resources/v1/beta/batches.ts">Batch</a></code>
- <code><a href="./src/resources/v1/beta/batches.ts">BatchRetrieveResponse</a></code>
- <code><a href="./src/resources/v1/beta/batches.ts">BatchListResponse</a></code>

Methods:

- <code title="post /api/v1/beta/batches">client.v1.beta.batches.<a href="./src/resources/v1/beta/batches.ts">create</a>({ ...params }) -> Batch</code>
- <code title="get /api/v1/beta/batches/{batch_id}">client.v1.beta.batches.<a href="./src/resources/v1/beta/batches.ts">retrieve</a>(batchID, { ...params }) -> BatchRetrieveResponse</code>
- <code title="get /api/v1/beta/batches">client.v1.beta.batches.<a href="./src/resources/v1/beta/batches.ts">list</a>({ ...params }) -> BatchListResponse</code>

### AgentData

Types:

- <code><a href="./src/resources/v1/beta/agent-data.ts">AgentData</a></code>
- <code><a href="./src/resources/v1/beta/agent-data.ts">AgentDataDeleteResponse</a></code>
- <code><a href="./src/resources/v1/beta/agent-data.ts">AgentDataAggregateResponse</a></code>
- <code><a href="./src/resources/v1/beta/agent-data.ts">AgentDataSearchResponse</a></code>

Methods:

- <code title="get /api/v1/beta/agent-data/{item_id}">client.v1.beta.agentData.<a href="./src/resources/v1/beta/agent-data.ts">retrieve</a>(itemID, { ...params }) -> AgentData</code>
- <code title="put /api/v1/beta/agent-data/{item_id}">client.v1.beta.agentData.<a href="./src/resources/v1/beta/agent-data.ts">update</a>(itemID, { ...params }) -> AgentData</code>
- <code title="post /api/v1/beta/agent-data/:delete">client.v1.beta.agentData.<a href="./src/resources/v1/beta/agent-data.ts">delete</a>({ ...params }) -> AgentDataDeleteResponse</code>
- <code title="post /api/v1/beta/agent-data">client.v1.beta.agentData.<a href="./src/resources/v1/beta/agent-data.ts">agentData</a>({ ...params }) -> AgentData</code>
- <code title="post /api/v1/beta/agent-data/:aggregate">client.v1.beta.agentData.<a href="./src/resources/v1/beta/agent-data.ts">aggregate</a>({ ...params }) -> AgentDataAggregateResponse</code>
- <code title="post /api/v1/beta/agent-data/:search">client.v1.beta.agentData.<a href="./src/resources/v1/beta/agent-data.ts">search</a>({ ...params }) -> AgentDataSearchResponse</code>

### Files

Types:

- <code><a href="./src/resources/v1/beta/files.ts">FileQueryResponse</a></code>

Methods:

- <code title="put /api/v1/beta/files">client.v1.beta.files.<a href="./src/resources/v1/beta/files.ts">create</a>({ ...params }) -> File</code>
- <code title="delete /api/v1/beta/files/{file_id}">client.v1.beta.files.<a href="./src/resources/v1/beta/files.ts">delete</a>(fileID, { ...params }) -> void</code>
- <code title="post /api/v1/beta/files/query">client.v1.beta.files.<a href="./src/resources/v1/beta/files.ts">query</a>({ ...params }) -> FileQueryResponse</code>

### ParseConfigurations

Types:

- <code><a href="./src/resources/v1/beta/parse-configurations.ts">ParseConfiguration</a></code>
- <code><a href="./src/resources/v1/beta/parse-configurations.ts">ParseConfigurationCreate</a></code>
- <code><a href="./src/resources/v1/beta/parse-configurations.ts">ParseConfigurationQueryResponse</a></code>

Methods:

- <code title="get /api/v1/beta/parse-configurations/{config_id}">client.v1.beta.parseConfigurations.<a href="./src/resources/v1/beta/parse-configurations.ts">retrieve</a>(configID, { ...params }) -> ParseConfiguration</code>
- <code title="put /api/v1/beta/parse-configurations/{config_id}">client.v1.beta.parseConfigurations.<a href="./src/resources/v1/beta/parse-configurations.ts">update</a>(configID, { ...params }) -> ParseConfiguration</code>
- <code title="delete /api/v1/beta/parse-configurations/{config_id}">client.v1.beta.parseConfigurations.<a href="./src/resources/v1/beta/parse-configurations.ts">delete</a>(configID, { ...params }) -> void</code>
- <code title="post /api/v1/beta/parse-configurations">client.v1.beta.parseConfigurations.<a href="./src/resources/v1/beta/parse-configurations.ts">parseConfigurations</a>({ ...params }) -> ParseConfiguration</code>
- <code title="post /api/v1/beta/parse-configurations/query">client.v1.beta.parseConfigurations.<a href="./src/resources/v1/beta/parse-configurations.ts">query</a>({ ...params }) -> ParseConfigurationQueryResponse</code>
- <code title="get /api/v1/beta/parse-configurations/latest">client.v1.beta.parseConfigurations.<a href="./src/resources/v1/beta/parse-configurations.ts">retrieveLatest</a>({ ...params }) -> ParseConfiguration | null</code>
- <code title="get /api/v1/beta/parse-configurations">client.v1.beta.parseConfigurations.<a href="./src/resources/v1/beta/parse-configurations.ts">retrieveParseConfigurations</a>({ ...params }) -> ParseConfigurationQueryResponse</code>
- <code title="put /api/v1/beta/parse-configurations">client.v1.beta.parseConfigurations.<a href="./src/resources/v1/beta/parse-configurations.ts">updateParseConfigurations</a>({ ...params }) -> ParseConfiguration</code>

### Spreadsheet

#### Jobs

Types:

- <code><a href="./src/resources/v1/beta/spreadsheet/jobs/jobs.ts">SpreadsheetJob</a></code>
- <code><a href="./src/resources/v1/beta/spreadsheet/jobs/jobs.ts">SpreadsheetParsingConfig</a></code>
- <code><a href="./src/resources/v1/beta/spreadsheet/jobs/jobs.ts">JobListResponse</a></code>

Methods:

- <code title="post /api/v1/beta/spreadsheet/jobs">client.v1.beta.spreadsheet.jobs.<a href="./src/resources/v1/beta/spreadsheet/jobs/jobs.ts">create</a>({ ...params }) -> SpreadsheetJob</code>
- <code title="get /api/v1/beta/spreadsheet/jobs/{spreadsheet_job_id}">client.v1.beta.spreadsheet.jobs.<a href="./src/resources/v1/beta/spreadsheet/jobs/jobs.ts">retrieve</a>(spreadsheetJobID, { ...params }) -> SpreadsheetJob</code>
- <code title="get /api/v1/beta/spreadsheet/jobs">client.v1.beta.spreadsheet.jobs.<a href="./src/resources/v1/beta/spreadsheet/jobs/jobs.ts">list</a>({ ...params }) -> JobListResponse</code>

##### Tables

Methods:

- <code title="get /api/v1/beta/spreadsheet/jobs/{spreadsheet_job_id}/tables/{table_id}/result/{table_type}">client.v1.beta.spreadsheet.jobs.tables.<a href="./src/resources/v1/beta/spreadsheet/jobs/tables.ts">retrieve</a>(tableType, { ...params }) -> PresignedURL</code>

# V2alpha1

## Parse

Methods:

- <code title="post /api/v2alpha1/parse/upload">client.v2alpha1.parse.<a href="./src/resources/v2alpha1/parse.ts">uploadFile</a>({ ...params }) -> ParsingJob</code>

# Parsing

Types:

- <code><a href="./src/resources/parsing/parsing.ts">ParsingGetParsingHistoryResponse</a></code>
- <code><a href="./src/resources/parsing/parsing.ts">ParsingGetSupportedFileExtensionsResponse</a></code>

Methods:

- <code title="get /api/parsing/history">client.parsing.<a href="./src/resources/parsing/parsing.ts">getParsingHistory</a>() -> ParsingGetParsingHistoryResponse</code>
- <code title="get /api/parsing/supported_file_extensions">client.parsing.<a href="./src/resources/parsing/parsing.ts">getSupportedFileExtensions</a>() -> ParsingGetSupportedFileExtensionsResponse</code>
- <code title="post /api/parsing/screenshot">client.parsing.<a href="./src/resources/parsing/parsing.ts">screenshot</a>({ ...params }) -> ParsingJob</code>
- <code title="post /api/parsing/upload">client.parsing.<a href="./src/resources/parsing/parsing.ts">uploadFile</a>({ ...params }) -> ParsingJob</code>

## Job

Types:

- <code><a href="./src/resources/parsing/job/job.ts">JobGetDetailsResponse</a></code>
- <code><a href="./src/resources/parsing/job/job.ts">JobGetParametersResponse</a></code>

Methods:

- <code title="get /api/parsing/job/{job_id}">client.parsing.job.<a href="./src/resources/parsing/job/job.ts">retrieve</a>(jobID) -> ParsingJob</code>
- <code title="get /api/parsing/job/{job_id}/read/{filename}">client.parsing.job.<a href="./src/resources/parsing/job/job.ts">generatePresignedURL</a>(filename, { ...params }) -> PresignedURL</code>
- <code title="get /api/parsing/job/{job_id}/details">client.parsing.job.<a href="./src/resources/parsing/job/job.ts">getDetails</a>(jobID) -> unknown</code>
- <code title="get /api/parsing/job/{job_id}/parameters">client.parsing.job.<a href="./src/resources/parsing/job/job.ts">getParameters</a>(jobID) -> unknown</code>

### Result

Types:

- <code><a href="./src/resources/parsing/job/result/result.ts">ResultGetPdfResponse</a></code>
- <code><a href="./src/resources/parsing/job/result/result.ts">ResultGetXlsxResponse</a></code>

Methods:

- <code title="get /api/parsing/job/{job_id}/result/image/{name}">client.parsing.job.result.<a href="./src/resources/parsing/job/result/result.ts">getImage</a>(name, { ...params }) -> Response</code>
- <code title="get /api/parsing/job/{job_id}/result/json">client.parsing.job.result.<a href="./src/resources/parsing/job/result/result.ts">getJson</a>(jobID, { ...params }) -> ParsingJobJsonResult</code>
- <code title="get /api/parsing/job/{job_id}/result/markdown">client.parsing.job.result.<a href="./src/resources/parsing/job/result/result.ts">getMarkdown</a>(jobID, { ...params }) -> ParsingJobMarkdownResult</code>
- <code title="get /api/parsing/job/{job_id}/result/pdf">client.parsing.job.result.<a href="./src/resources/parsing/job/result/result.ts">getPdf</a>(jobID) -> unknown</code>
- <code title="get /api/parsing/job/{job_id}/result/structured">client.parsing.job.result.<a href="./src/resources/parsing/job/result/result.ts">getStructured</a>(jobID, { ...params }) -> ParsingJobStructuredResult</code>
- <code title="get /api/parsing/job/{job_id}/result/text">client.parsing.job.result.<a href="./src/resources/parsing/job/result/result.ts">getText</a>(jobID, { ...params }) -> ParsingJobTextResult</code>
- <code title="get /api/parsing/job/{job_id}/result/xlsx">client.parsing.job.result.<a href="./src/resources/parsing/job/result/result.ts">getXlsx</a>(jobID) -> unknown</code>

#### Raw

Types:

- <code><a href="./src/resources/parsing/job/result/raw.ts">RawGetJsonResponse</a></code>
- <code><a href="./src/resources/parsing/job/result/raw.ts">RawGetMarkdownResponse</a></code>
- <code><a href="./src/resources/parsing/job/result/raw.ts">RawGetPdfResponse</a></code>
- <code><a href="./src/resources/parsing/job/result/raw.ts">RawGetStructuredResponse</a></code>
- <code><a href="./src/resources/parsing/job/result/raw.ts">RawGetTextResponse</a></code>
- <code><a href="./src/resources/parsing/job/result/raw.ts">RawGetXlsxResponse</a></code>

Methods:

- <code title="get /api/parsing/job/{job_id}/result/raw/json">client.parsing.job.result.raw.<a href="./src/resources/parsing/job/result/raw.ts">getJson</a>(jobID) -> unknown</code>
- <code title="get /api/parsing/job/{job_id}/result/raw/markdown">client.parsing.job.result.raw.<a href="./src/resources/parsing/job/result/raw.ts">getMarkdown</a>(jobID) -> unknown</code>
- <code title="get /api/parsing/job/{job_id}/result/raw/pdf">client.parsing.job.result.raw.<a href="./src/resources/parsing/job/result/raw.ts">getPdf</a>(jobID) -> unknown</code>
- <code title="get /api/parsing/job/{job_id}/result/raw/structured">client.parsing.job.result.raw.<a href="./src/resources/parsing/job/result/raw.ts">getStructured</a>(jobID) -> unknown</code>
- <code title="get /api/parsing/job/{job_id}/result/raw/text">client.parsing.job.result.raw.<a href="./src/resources/parsing/job/result/raw.ts">getText</a>(jobID) -> unknown</code>
- <code title="get /api/parsing/job/{job_id}/result/raw/xlsx">client.parsing.job.result.raw.<a href="./src/resources/parsing/job/result/raw.ts">getXlsx</a>(jobID) -> unknown</code>

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as V1API from './v1';
import * as APIKeysAPI from './api-keys';
import {
  APIKey,
  APIKeyCreate,
  APIKeyCreateParams,
  APIKeyListParams,
  APIKeyListResponse,
  APIKeyType,
  APIKeys,
} from './api-keys';
import * as AuthAPI from './auth';
import { Auth, AuthReadSelfResponse } from './auth';
import * as DataSinksAPI from './data-sinks';
import {
  DataSink,
  DataSinkCreateParams,
  DataSinkListParams,
  DataSinkListResponse,
  DataSinkUpdateParams,
  DataSinkUpsertParams,
  DataSinks,
} from './data-sinks';
import * as DataSourcesAPI from './data-sources';
import {
  DataSource,
  DataSourceCreateParams,
  DataSourceListParams,
  DataSourceListResponse,
  DataSourceReaderVersionMetadata,
  DataSourceUpdateParams,
  DataSourceUpsertParams,
  DataSources,
} from './data-sources';
import * as EmbeddingModelConfigsAPI from './embedding-model-configs';
import {
  EmbeddingModelConfig,
  EmbeddingModelConfigCreateParams,
  EmbeddingModelConfigDeleteParams,
  EmbeddingModelConfigListParams,
  EmbeddingModelConfigListResponse,
  EmbeddingModelConfigUpdate,
  EmbeddingModelConfigUpdateParams,
  EmbeddingModelConfigUpsertParams,
  EmbeddingModelConfigs,
} from './embedding-model-configs';
import * as EvalsAPI from './evals';
import { EvalListSupportedModelsResponse, Evals } from './evals';
import * as ProjectsAPI from './projects';
import {
  AgentDeploymentList,
  Project,
  ProjectCreate,
  ProjectCreateParams,
  ProjectDeleteParams,
  ProjectGetCurrentParams,
  ProjectGetUsageParams,
  ProjectListParams,
  ProjectListResponse,
  ProjectRetrieveParams,
  ProjectUpdateParams,
  ProjectUpsertParams,
  Projects,
} from './projects';
import * as RetrieversAPI from './retrievers';
import {
  CompositeRetrievalMode,
  CompositeRetrievalResult,
  ReRankConfig,
  Retriever,
  RetrieverCreate,
  RetrieverCreateParams,
  RetrieverListParams,
  RetrieverListResponse,
  RetrieverPipeline,
  RetrieverRetrieveDirectParams,
  RetrieverRetrieveParams,
  RetrieverUpdateParams,
  RetrieverUpsertParams,
  Retrievers,
} from './retrievers';
import * as TestAPI from './test';
import { Test, TestStreamResponse } from './test';
import * as ValidateIntegrationsAPI from './validate-integrations';
import {
  AzureOpenAIEmbeddingConfig,
  BaseConnectionValidation,
  BedrockEmbeddingConfig,
  CloudAstraDBVectorStore,
  CloudAzStorageBlobDataSource,
  CloudAzureAISearchVectorStore,
  CloudBoxDataSource,
  CloudConfluenceDataSource,
  CloudJiraDataSource,
  CloudJiraDataSourceV2,
  CloudMilvusVectorStore,
  CloudMongoDBAtlasVectorSearch,
  CloudNotionPageDataSource,
  CloudOneDriveDataSource,
  CloudPineconeVectorStore,
  CloudPostgresVectorStore,
  CloudQdrantVectorStore,
  CloudS3DataSource,
  CloudSharepointDataSource,
  CloudSlackDataSource,
  CohereEmbeddingConfig,
  ConfigurableDataSinkNames,
  ConfigurableDataSourceNames,
  DataSinkCreate,
  DataSourceCreate,
  GeminiEmbeddingConfig,
  HuggingFaceInferenceAPIEmbeddingConfig,
  OpenAIEmbeddingConfig,
  ValidateIntegrationValidateDataSinkConnectionParams,
  ValidateIntegrationValidateDataSourceConnectionParams,
  ValidateIntegrationValidateEmbeddingConnectionParams,
  ValidateIntegrations,
  VertexAIEmbeddingConfig,
} from './validate-integrations';
import * as BetaAPI from './beta/beta';
import { Beta, BetaRetrieveQuotaManagementParams, BetaRetrieveQuotaManagementResponse } from './beta/beta';
import * as BillingAPI from './billing/billing';
import {
  Billing,
  BillingCreateCustomerPortalSessionParams,
  BillingCreateCustomerPortalSessionResponse,
  BillingCreateIntentAndCustomerSessionParams,
  BillingCreateIntentAndCustomerSessionResponse,
  BillingDowngradePlanParams,
  BillingDowngradePlanResponse,
} from './billing/billing';
import * as ClassifierAPI from './classifier/classifier';
import { Classifier } from './classifier/classifier';
import * as ExtractionAPI from './extraction/extraction';
import { Extraction, ExtractionRunParams } from './extraction/extraction';
import * as JobsAPI from './extraction/jobs';
import * as FilesAPI from './files/files';
import {
  File,
  FileCreate,
  FileDeleteParams,
  FileGeneratePresignedURLParams,
  FileGeneratePresignedURLResponse,
  FileReadContentParams,
  FileRetrieveParams,
  FileUploadFromURLParams,
  FileUploadParams,
  Files,
  PresignedURL,
} from './files/files';
import * as OrganizationsAPI from './organizations/organizations';
import {
  Organization,
  OrganizationCreate,
  OrganizationCreateParams,
  OrganizationListResponse,
  OrganizationRetrieveRolesResponse,
  OrganizationRetrieveUsageParams,
  OrganizationUpdateParams,
  Organizations,
  Role,
  UsageAndPlan,
} from './organizations/organizations';
import * as ParsingAPI from './parsing/parsing';
import {
  FailPageMode,
  LlamaParseSupportedFileExtensions,
  ParserLanguages,
  Parsing,
  ParsingCreateScreenshotParams,
  ParsingGetParsingHistoryResponse,
  ParsingGetSupportedFileExtensionsResponse,
  ParsingHistoryItem,
  ParsingJob,
  ParsingMode,
  ParsingUploadFileParams,
  StatusEnum,
} from './parsing/parsing';
import * as PipelinesAPI from './pipelines/pipelines';
import {
  AdvancedModeTransformConfig,
  AutoTransformConfig,
  LlamaParseParameters,
  LlmParameters,
  ManagedIngestionStatusResponse,
  MessageRole,
  MetadataFilters,
  PageFigureNodeWithScore,
  PageScreenshotNodeWithScore,
  Pipeline,
  PipelineChatParams,
  PipelineChatResponse,
  PipelineCreate,
  PipelineCreateParams,
  PipelineListParams,
  PipelineListResponse,
  PipelineMetadataConfig,
  PipelineRetrieveFiles2Params,
  PipelineRetrieveFiles2Response,
  PipelineRetrievePlaygroundSessionResponse,
  PipelineRetrieveStatusParams,
  PipelineType,
  PipelineUpdateParams,
  Pipelines,
  PresetRetrievalParams,
  RetrievalMode,
  SparseModelConfig,
} from './pipelines/pipelines';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class V1 extends APIResource {
  projects: ProjectsAPI.Projects = new ProjectsAPI.Projects(this._client);
  apiKeys: APIKeysAPI.APIKeys = new APIKeysAPI.APIKeys(this._client);
  validateIntegrations: ValidateIntegrationsAPI.ValidateIntegrations =
    new ValidateIntegrationsAPI.ValidateIntegrations(this._client);
  dataSinks: DataSinksAPI.DataSinks = new DataSinksAPI.DataSinks(this._client);
  dataSources: DataSourcesAPI.DataSources = new DataSourcesAPI.DataSources(this._client);
  embeddingModelConfigs: EmbeddingModelConfigsAPI.EmbeddingModelConfigs =
    new EmbeddingModelConfigsAPI.EmbeddingModelConfigs(this._client);
  organizations: OrganizationsAPI.Organizations = new OrganizationsAPI.Organizations(this._client);
  files: FilesAPI.Files = new FilesAPI.Files(this._client);
  pipelines: PipelinesAPI.Pipelines = new PipelinesAPI.Pipelines(this._client);
  retrievers: RetrieversAPI.Retrievers = new RetrieversAPI.Retrievers(this._client);
  evals: EvalsAPI.Evals = new EvalsAPI.Evals(this._client);
  parsing: ParsingAPI.Parsing = new ParsingAPI.Parsing(this._client);
  classifier: ClassifierAPI.Classifier = new ClassifierAPI.Classifier(this._client);
  auth: AuthAPI.Auth = new AuthAPI.Auth(this._client);
  billing: BillingAPI.Billing = new BillingAPI.Billing(this._client);
  extraction: ExtractionAPI.Extraction = new ExtractionAPI.Extraction(this._client);
  beta: BetaAPI.Beta = new BetaAPI.Beta(this._client);
  test: TestAPI.Test = new TestAPI.Test(this._client);

  /**
   * Get jobs for a project.
   *
   * Note: The include_usage_metrics parameter is deprecated and will be removed in a
   * future version. We've moved to usage v2 and this parameter will no longer return
   * meaningful data.
   */
  getJobs(
    query: V1GetJobsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<V1GetJobsResponse> {
    return this._client.get('/api/v1/jobs', { query, ...options });
  }
}

/**
 * Schema for the parameters of a delete job.
 */
export interface DeleteParams {
  /**
   * The ID for the data sink from which to delete data.
   */
  data_sink_id?: string | null;

  /**
   * The IDs for the data sources to delete.
   */
  data_sources_ids_to_delete?: Array<string> | null;

  /**
   * The IDs for the documents to delete.
   */
  document_ids_to_delete?: Array<string> | null;

  /**
   * The collection name to delete.
   */
  embed_collection_name?: string | null;

  /**
   * The IDs for the files to delete.
   */
  files_ids_to_delete?: Array<string> | null;
}

export interface V1GetJobsResponse {
  jobs: Array<V1GetJobsResponse.Job>;

  limit: number;

  offset: number;

  total_count: number;
}

export namespace V1GetJobsResponse {
  export interface Job {
    /**
     * Schema for a job's metadata.
     */
    job_record: Job.JobRecord;

    user: Job.User;

    usage_metrics?: Job.UsageMetrics | null;
  }

  export namespace Job {
    /**
     * Schema for a job's metadata.
     */
    export interface JobRecord {
      /**
       * Creation datetime
       */
      created_at: string;

      /**
       * The name of the job.
       */
      job_name:
        | 'pipeline_managed_ingestion_job'
        | 'data_source_update_dispatcher_job'
        | 'pipeline_file_updater_job'
        | 'document_ingestion_job'
        | 'metadata_update_job'
        | 'extract_job'
        | 'parse_raw_file_job'
        | 'llama_parse_transform_job';

      /**
       * The partitions for this execution. Used for determining where to save job
       * output.
       */
      partitions: { [key: string]: string };

      /**
       * Enum for representing the status of a job
       */
      status: ParsingAPI.StatusEnum;

      /**
       * Unique identifier
       */
      id?: string;

      /**
       * The number of times this job has been attempted
       */
      attempts?: number | null;

      /**
       * The correlation ID for this job. Used for tracking the job across services.
       */
      correlation_id?: string | null;

      ended_at?: string | null;

      error_code?: string | null;

      error_message?: string | null;

      /**
       * Additional metadata for the job execution.
       */
      parameters?:
        | JobRecord.ParseJobConfig
        | JobRecord.LegacyParseJobConfig
        | JobRecord.LoadFilesJobConfig
        | JobRecord.LLamaParseTransformConfig
        | JobRecord.PipelineManagedIngestionJobParams
        | JobRecord.DataSourceUpdateDispatcherConfig
        | JobRecord.PipelineFileUpdaterConfig
        | JobRecord.DocumentIngestionJobParams
        | null;

      /**
       * The ID of the parent job execution.
       */
      parent_job_execution_id?: string | null;

      /**
       * The ID of the project this job belongs to.
       */
      project_id?: string | null;

      /**
       * The upstream request ID that created this job. Used for tracking the job across
       * services.
       */
      session_id?: string | null;

      started_at?: string | null;

      /**
       * Update datetime
       */
      updated_at?: string;

      /**
       * The ID of the user that created this job
       */
      user_id?: string | null;

      /**
       * The outbound webhook configurations
       */
      webhook_configurations?: Array<JobsAPI.WebhookConfiguration> | null;
    }

    export namespace JobRecord {
      /**
       * Configuration for llamaparse job
       */
      export interface ParseJobConfig {
        /**
         * The file key.
         */
        file_key: string;

        /**
         * The file name.
         */
        file_name: string;

        /**
         * The language.
         */
        lang: string;

        /**
         * The original file name.
         */
        original_file_name: string;

        adaptive_long_table?: boolean | null;

        aggressive_table_extraction?: boolean | null;

        annotate_links?: boolean | null;

        auto_mode?: boolean | null;

        auto_mode_configuration_json?: string | null;

        auto_mode_trigger_on_image_in_page?: boolean | null;

        auto_mode_trigger_on_regexp_in_page?: string | null;

        auto_mode_trigger_on_table_in_page?: boolean | null;

        auto_mode_trigger_on_text_in_page?: string | null;

        azure_openai_api_version?: string | null;

        azure_openai_deployment_name?: string | null;

        azure_openai_endpoint?: string | null;

        azure_openai_key?: string | null;

        bbox_bottom?: number | null;

        bbox_left?: number | null;

        bbox_right?: number | null;

        bbox_top?: number | null;

        bounding_box?: string | null;

        compact_markdown_table?: boolean | null;

        complemental_formatting_instruction?: string | null;

        content_guideline_instruction?: string | null;

        continuous_mode?: boolean | null;

        /**
         * The custom metadata to attach to the documents.
         */
        custom_metadata?: { [key: string]: unknown } | null;

        disable_image_extraction?: boolean | null;

        disable_ocr?: boolean | null;

        disable_reconstruction?: boolean | null;

        do_not_cache?: boolean | null;

        do_not_unroll_columns?: boolean | null;

        extract_charts?: boolean | null;

        extract_layout?: boolean | null;

        fast_mode?: boolean | null;

        /**
         * The file ID.
         */
        file_id?: string | null;

        formatting_instruction?: string | null;

        gpt4o_api_key?: string | null;

        gpt4o_mode?: boolean | null;

        guess_xlsx_sheet_name?: boolean | null;

        hide_footers?: boolean | null;

        hide_headers?: boolean | null;

        high_res_ocr?: boolean | null;

        html_make_all_elements_visible?: boolean | null;

        html_remove_fixed_elements?: boolean | null;

        html_remove_navigation_elements?: boolean | null;

        http_proxy?: string | null;

        ignore_document_elements_for_layout_detection?: boolean | null;

        inline_images_in_markdown?: boolean | null;

        /**
         * If specified, llamaParse will take the specified file. should be a valid s3://
         * url
         */
        input_s3_path?: string | null;

        /**
         * The region for the input S3 bucket.
         */
        input_s3_region?: string | null;

        input_url?: string | null;

        internal_is_screenshot_job?: boolean | null;

        invalidate_cache?: boolean | null;

        is_formatting_instruction?: boolean | null;

        job_timeout_extra_time_per_page_in_seconds?: number | null;

        job_timeout_in_seconds?: number | null;

        keep_page_separator_when_merging_tables?: boolean | null;

        languages?: Array<ParsingAPI.ParserLanguages>;

        layout_aware?: boolean | null;

        markdown_table_multiline_header_separator?: string | null;

        max_pages?: number | null;

        max_pages_enforced?: number | null;

        merge_tables_across_pages_in_markdown?: boolean | null;

        model?: string | null;

        outlined_table_extraction?: boolean | null;

        output_pdf_of_document?: boolean | null;

        /**
         * If specified, llamaParse will save the output to the specified path. All output
         * file will use this 'prefix' should be a valid s3:// url
         */
        output_s3_path_prefix?: string | null;

        /**
         * The region for the output S3 bucket.
         */
        output_s3_region?: string | null;

        output_tables_as_HTML?: boolean | null;

        /**
         * The output bucket.
         */
        outputBucket?: string | null;

        page_error_tolerance?: number | null;

        page_footer_prefix?: string | null;

        page_footer_suffix?: string | null;

        page_header_prefix?: string | null;

        page_header_suffix?: string | null;

        page_prefix?: string | null;

        page_separator?: string | null;

        page_suffix?: string | null;

        /**
         * Enum for representing the mode of parsing to be used
         */
        parse_mode?: ParsingAPI.ParsingMode | null;

        parsing_instruction?: string | null;

        /**
         * The pipeline ID.
         */
        pipeline_id?: string | null;

        precise_bounding_box?: boolean | null;

        premium_mode?: boolean | null;

        preserve_layout_alignment_across_pages?: boolean | null;

        preserve_very_small_text?: boolean | null;

        preset?: string | null;

        /**
         * The priority for the request. This field may be ignored or overwritten depending
         * on the organization tier.
         */
        priority?: 'low' | 'medium' | 'high' | 'critical' | null;

        project_id?: string | null;

        remove_hidden_text?: boolean | null;

        /**
         * Enum for representing the different available page error handling modes
         */
        replace_failed_page_mode?: ParsingAPI.FailPageMode | null;

        replace_failed_page_with_error_message_prefix?: string | null;

        replace_failed_page_with_error_message_suffix?: string | null;

        /**
         * The resource info about the file
         */
        resource_info?: { [key: string]: unknown } | null;

        save_images?: boolean | null;

        skip_diagonal_text?: boolean | null;

        specialized_chart_parsing_agentic?: boolean | null;

        specialized_chart_parsing_efficient?: boolean | null;

        specialized_chart_parsing_plus?: boolean | null;

        specialized_image_parsing?: boolean | null;

        spreadsheet_extract_sub_tables?: boolean | null;

        spreadsheet_force_formula_computation?: boolean | null;

        strict_mode_buggy_font?: boolean | null;

        strict_mode_image_extraction?: boolean | null;

        strict_mode_image_ocr?: boolean | null;

        strict_mode_reconstruction?: boolean | null;

        structured_output?: boolean | null;

        structured_output_json_schema?: string | null;

        structured_output_json_schema_name?: string | null;

        system_prompt?: string | null;

        system_prompt_append?: string | null;

        take_screenshot?: boolean | null;

        target_pages?: string | null;

        type?: 'parse';

        use_vendor_multimodal_model?: boolean | null;

        user_prompt?: string | null;

        vendor_multimodal_api_key?: string | null;

        vendor_multimodal_model_name?: string | null;

        /**
         * The outbound webhook configurations
         */
        webhook_configurations?: Array<JobsAPI.WebhookConfiguration> | null;

        webhook_url?: string | null;
      }

      /**
       * Configuration for llamaparse job
       */
      export interface LegacyParseJobConfig {
        /**
         * The file key.
         */
        fileKey: string;

        /**
         * The file name.
         */
        fileName: string;

        /**
         * Whether to invalidate the cache.
         */
        invalidateCache: boolean;

        /**
         * The language.
         */
        lang: string;

        /**
         * The OpenAI API key.
         */
        openAIAPIKey: string;

        /**
         * The original file name.
         */
        originalFileName: string;

        /**
         * The user ID.
         */
        userId: string;

        /**
         * Adaptive long table. LlamaParse will try to detect long table and adapt the
         * output.
         */
        adaptiveLongTable?: boolean;

        /**
         * Annotate links in markdown. LlamaParse will try to add links from document into
         * the markdown.
         */
        annotateLinks?: boolean;

        /**
         * Whether to use auto mode.
         */
        autoMode?: boolean;

        /**
         * The auto mode configuration JSON. This is a JSON string that contains the
         * configuration for the auto mode.
         */
        autoModeConfigurationJSON?: string | null;

        /**
         * Whether to trigger on image in page.
         */
        autoModeTriggerOnImageInPage?: boolean;

        /**
         * The regexp to trigger on.
         */
        autoModeTriggerOnRegexpInPage?: string | null;

        /**
         * Whether to trigger on table in page.
         */
        autoModeTriggerOnTableInPage?: boolean;

        /**
         * The text to trigger on.
         */
        autoModeTriggerOnTextInPage?: string | null;

        /**
         * Custom azure API version.
         */
        azureOpenAiApiVersion?: string | null;

        /**
         * Custom azure deployment name.
         */
        azureOpenAiDeploymentName?: string | null;

        /**
         * Custom azure endpoint.
         */
        azureOpenAiEndpoint?: string | null;

        /**
         * Custom azure API key.
         */
        azureOpenAiKey?: string | null;

        /**
         * The bottom side of the bounding box.
         */
        bboxBottom?: number | null;

        /**
         * The left side of the bounding box.
         */
        bboxLeft?: number | null;

        /**
         * The right side of the bounding box.
         */
        bboxRight?: number | null;

        /**
         * The top side of the bounding box.
         */
        bboxTop?: number | null;

        /**
         * A string describing a bounding box to use to parse the document. Contain 4 value
         * between 0 to 1 representing in clock wise order the margin top, right, bottom,
         * left of the selection bounding box in ratio of the document.
         */
        boundingBox?: string | null;

        /**
         * Compact markdown table. LlamaParse will compact the markdown table to not
         * include too many spaces.
         */
        compactMarkdownTable?: boolean;

        /**
         * A natural language instruction on how to format the result that complement
         * LlamaParse default instruction.
         */
        complementalFormattingInstruction?: string | null;

        /**
         * A natural language instruction on how to transform the content of the result
         * (not the format).
         */
        contentGuidelineInstruction?: string | null;

        /**
         * Whether to use continuousMode pipeline.
         */
        continuousMode?: boolean;

        /**
         * The custom metadata to attach to the documents.
         */
        custom_metadata?: { [key: string]: unknown } | null;

        /**
         * Disable the image extraction from the document. LlamaParse will not extract any
         * image from the document.
         */
        disableImageExtraction?: boolean;

        /**
         * Disable the OCR on the document. LlamaParse will only extract the copyable text
         * from the document
         */
        disableOcr?: boolean;

        /**
         * Whether to disable markdown reconstruction.
         */
        disableReconstruction?: boolean | null;

        /**
         * Whether to cache.
         */
        doNotCache?: boolean;

        /**
         * Whether to unroll columns.
         */
        doNotUnrollColumns?: boolean;

        /**
         * Extract charts from the document.
         */
        extractCharts?: boolean;

        /**
         * Whether to perform layout extraction.
         */
        extractLayout?: boolean | null;

        /**
         * Whether to use fast mode.
         */
        fastMode?: boolean | null;

        /**
         * The file ID.
         */
        fileId?: string | null;

        /**
         * A natural language instruction on how to format the result. Override LlamaParse
         * default instruction.
         */
        formattingInstruction?: string | null;

        /**
         * Whether the file is from LLama cloud.
         */
        fromLLamaCloud?: boolean;

        /**
         * The full file path.
         */
        fullFilePath?: string | null;

        /**
         * Whether to use GPT4o.
         */
        gpt4o?: boolean;

        /**
         * Whether to guess the XLSX sheet name when generation output xlsx.
         */
        guessXLSXSheetName?: boolean;

        /**
         * Whether to hide footers in the output.
         */
        hideFooters?: boolean;

        /**
         * Whether to hide headers in the output.
         */
        hideHeaders?: boolean;

        /**
         * Whether to use high resolution OCR (Slow).
         */
        highResOcr?: boolean | null;

        /**
         * Whether to make all elements visible.
         */
        htmlMakeAllElementsVisible?: boolean | null;

        /**
         * Whether to remove fixed elements.
         */
        htmlRemoveFixedElements?: boolean | null;

        /**
         * Whether to remove navigation elements.
         */
        htmlRemoveNavigationElements?: boolean | null;

        /**
         * The HTTP proxy.
         */
        httpProxy?: string | null;

        /**
         * If true, the job will ignore document element for layout detection, and instead
         * just rely on a visual model, only apply to layout detection.
         */
        ignoreDocumentElementsForLayoutDetection?: boolean;

        /**
         * If specified, llamaParse will take the specified file. should be a valid s3://
         * url
         */
        inputS3Path?: string | null;

        /**
         * The region for the input S3 bucket.
         */
        inputS3Region?: string | null;

        /**
         * The input URL.
         */
        inputUrl?: string | null;

        /**
         * Allow the parsing instruction to also format the output.
         */
        isFormattingInstruction?: boolean;

        /**
         * Manually set additional time per page for timeout in second for a job.
         */
        jobTimeoutExtraTimePerPageInSeconds?: number | null;

        /**
         * Manually set a timeout in second for a job. Minimum is 120
         */
        jobTimeoutInSeconds?: number | null;

        /**
         * The maximum number of pages to parse.
         */
        maxPages?: number | null;

        /**
         * Whether to merge tables across pages in markdown
         */
        mergeTablesAcrossPagesInMarkdown?: boolean | null;

        /**
         * The model to use.
         */
        model?: string | null;

        /**
         * The multimodal model to use.
         */
        multimodalModel?: string | null;

        /**
         * True if parsing happen in multimodal mode.
         */
        multimodalPipeline?: boolean | null;

        /**
         * Whether to try to extract outlined tables
         */
        outlinedTableExtraction?: boolean | null;

        /**
         * The output bucket.
         */
        outputBucket?: string | null;

        /**
         * Whether to output PDF of document
         */
        outputPDFOfDocument?: boolean | null;

        /**
         * If specified, llamaParse will save the output to the specified path. All output
         * file will use this 'prefix' should be a valid s3:// url
         */
        outputS3PathPrefix?: string | null;

        /**
         * The region for the output S3 bucket.
         */
        outputS3Region?: string | null;

        /**
         * If true, the job will output tables as HTML in the markdown output, useful for
         * merged cells.
         */
        outputTablesAsHTML?: boolean;

        /**
         * The page footer prefix.
         */
        pageFooterPrefix?: string | null;

        /**
         * The page footer suffix.
         */
        pageFooterSuffix?: string | null;

        /**
         * The page header prefix.
         */
        pageHeaderPrefix?: string | null;

        /**
         * The page header suffix.
         */
        pageHeaderSuffix?: string | null;

        /**
         * A page prefix to add before each page.
         */
        pagePrefix?: string | null;

        /**
         * The page separator.
         */
        pageSeparator?: string | null;

        /**
         * A page suffix to add after each page.
         */
        pageSuffix?: string | null;

        /**
         * The parsing mode.
         */
        parseMode?: string | null;

        /**
         * The pipeline ID.
         */
        pipelineId?: string | null;

        /**
         * Whether to use premiumMode pipeline.
         */
        premiumMode?: boolean;

        /**
         * Whether to preserve layout alignment across pages.
         */
        preserveLayoutAlignmentAcrossPages?: boolean;

        /**
         * Whether to preserve very small text lines.
         */
        preserveVerySmallText?: boolean;

        /**
         * The preset of options to be used.
         */
        preset?: string | null;

        /**
         * The project ID.
         */
        projectId?: string | null;

        /**
         * If true, hidden (nonvisible) text in the document will be removed from the
         * output.
         */
        removeHiddenText?: boolean;

        /**
         * The resource info about the file
         */
        resource_info?: { [key: string]: unknown } | null;

        /**
         * Whether to output images contained in the document
         */
        saveImages?: boolean | null;

        /**
         * Whether to skip diagonal text.
         */
        skipDiagonalText?: boolean;

        /**
         * Whether to extract subTables from spreadsheet.
         */
        spreadSheetExtractSubTables?: boolean | null;

        /**
         * Whether to force re-computation of spreadsheet cells containing formulas.
         */
        spreadSheetForceFormulaComputation?: boolean | null;

        /**
         * If true, the job will fail when we are not able to extract a glyph from the
         * document due to buggy font.
         */
        strictModeBuggyFont?: boolean;

        /**
         * If true, the job will fail when we are not able to extract an image from a
         * document.
         */
        strictModeImageExtraction?: boolean;

        /**
         * If true, the job will fail when we are not able to OCR an image from a document.
         */
        strictModeImageOCR?: boolean;

        /**
         * If true, the job will fail when we are not able to transform a page to Markdown
         * in a document.
         */
        strictModeReconstruction?: boolean;

        /**
         * Whether to use structured output.
         */
        structuredOutput?: boolean;

        /**
         * The structured output JSON schema.
         */
        structuredOutputJSONSchema?: string | null;

        /**
         * The structured output JSON schema name.
         */
        structuredOutputJSONSchemaName?: string | null;

        /**
         * The system prompt.
         */
        systemPrompt?: string | null;

        /**
         * The append to system prompt.
         */
        systemPromptAppend?: string | null;

        /**
         * Force to capture an image of each pages
         */
        takeScreenshot?: boolean;

        /**
         * A string containing a list of comma separated containing the page number to
         * extract. If not specified all pages are extracted from the document. The first
         * page is the page 0.
         */
        targetPages?: string | null;

        /**
         * The parsing instruction.
         */
        template?: string;

        type?: 'legacy_parse';

        /**
         * The user prompt.
         */
        userPrompt?: string | null;

        /**
         * The multimodal vendor API key.
         */
        vendorAPIKey?: string | null;

        /**
         * The URL that needs to be called at the end of the parsing job.
         */
        webhookUrl?: string | null;
      }

      /**
       * Schema for the parameters of a load files job.
       */
      export interface LoadFilesJobConfig {
        /**
         * The names of the files this execution should run against.
         */
        file_ids?: Array<string> | null;

        type?: 'load_files';
      }

      /**
       * Schema for the parameters of llamaparse transform job.
       */
      export interface LLamaParseTransformConfig {
        /**
         * Whether to delete the files
         */
        file_output: string;

        /**
         * The custom metadata to attach to the documents.
         */
        custom_metadata?: { [key: string]: unknown } | null;

        /**
         * The resource info about the file
         */
        resource_info?: { [key: string]: unknown } | null;

        type?: 'llama_parse_transform';
      }

      /**
       * Schema for the parameters of a managed pipeline ingestion job.
       */
      export interface PipelineManagedIngestionJobParams {
        /**
         * Schema for the parameters of a delete job.
         */
        delete_info?: V1API.DeleteParams | null;

        /**
         * Whether to delete the data sources from the pipeline
         */
        should_delete?: boolean | null;

        type?: 'pipeline_managed_ingestion';
      }

      /**
       * Schema for the parameters of a data source dispatcher job.
       */
      export interface DataSourceUpdateDispatcherConfig {
        /**
         * The custom metadata to attach to the data source.
         */
        custom_metadata?: { [key: string]: unknown } | null;

        /**
         * Schema for the parameters of a delete job.
         */
        delete_info?: V1API.DeleteParams | null;

        /**
         * Optional: limit sync to these pipeline file IDs only.
         */
        pipeline_file_ids?: Array<string> | null;

        /**
         * Whether to delete the data source from the pipeline
         */
        should_delete?: boolean | null;

        type?: 'data_source_update_dispatcher';
      }

      /**
       * Schema for the parameters of a load files job.
       */
      export interface PipelineFileUpdaterConfig {
        /**
         * The custom metadata to attach to the documents.
         */
        custom_metadata?: { [key: string]: unknown } | null;

        /**
         * Whether the data source project file has changed
         */
        data_source_project_file_changed?: boolean;

        /**
         * Schema for the parameters of a delete job.
         */
        delete_info?: V1API.DeleteParams | null;

        /**
         * Whether the file is new
         */
        is_new_file?: boolean;

        /**
         * The resource info about the file
         */
        resource_info?: { [key: string]: unknown } | null;

        /**
         * Whether to delete the files
         */
        should_delete?: boolean | null;

        /**
         * Whether to parse the files
         */
        should_parse?: boolean | null;

        type?: 'pipeline_file_updater';
      }

      /**
       * Schema for the parameters of a document ingestion job.
       */
      export interface DocumentIngestionJobParams {
        /**
         * The custom metadata to attach to the documents.
         */
        custom_metadata?: { [key: string]: unknown } | null;

        /**
         * Schema for the parameters of a delete job.
         */
        delete_info?: V1API.DeleteParams | null;

        /**
         * The IDs for the Documents this execution ran against.
         */
        document_ids?: Array<string> | null;

        /**
         * Whether the file is new
         */
        is_new_file?: boolean;

        /**
         * The number of pages in the file. Only used if used llama-parse
         */
        page_count?: number | null;

        /**
         * The ID for the File this execution ran against.
         */
        pipeline_file_id?: string | null;

        /**
         * The resource info about the file
         */
        resource_info?: { [key: string]: unknown } | null;

        /**
         * Whether to delete the documents
         */
        should_delete?: boolean | null;

        type?: 'document_ingestion';
      }
    }

    export interface User {
      /**
       * The user id from who triggered the job
       */
      id: string;

      /**
       * The name of the user
       */
      name: string;
    }

    export interface UsageMetrics {
      day: string;

      feature_usage: { [key: string]: unknown };

      job_id: string;

      source: string;
    }
  }
}

export interface V1GetJobsParams {
  job_name?: string | null;

  limit?: number;

  offset?: number;

  organization_id?: string | null;

  project_id?: string | null;

  sort?: string | null;
}

V1.Projects = Projects;
V1.APIKeys = APIKeys;
V1.ValidateIntegrations = ValidateIntegrations;
V1.DataSinks = DataSinks;
V1.DataSources = DataSources;
V1.EmbeddingModelConfigs = EmbeddingModelConfigs;
V1.Organizations = Organizations;
V1.Files = Files;
V1.Pipelines = Pipelines;
V1.Retrievers = Retrievers;
V1.Evals = Evals;
V1.Parsing = Parsing;
V1.Classifier = Classifier;
V1.Auth = Auth;
V1.Billing = Billing;
V1.Extraction = Extraction;
V1.Beta = Beta;
V1.Test = Test;

export declare namespace V1 {
  export {
    type DeleteParams as DeleteParams,
    type V1GetJobsResponse as V1GetJobsResponse,
    type V1GetJobsParams as V1GetJobsParams,
  };

  export {
    Projects as Projects,
    type AgentDeploymentList as AgentDeploymentList,
    type Project as Project,
    type ProjectCreate as ProjectCreate,
    type ProjectListResponse as ProjectListResponse,
    type ProjectCreateParams as ProjectCreateParams,
    type ProjectRetrieveParams as ProjectRetrieveParams,
    type ProjectUpdateParams as ProjectUpdateParams,
    type ProjectListParams as ProjectListParams,
    type ProjectDeleteParams as ProjectDeleteParams,
    type ProjectGetCurrentParams as ProjectGetCurrentParams,
    type ProjectGetUsageParams as ProjectGetUsageParams,
    type ProjectUpsertParams as ProjectUpsertParams,
  };

  export {
    APIKeys as APIKeys,
    type APIKey as APIKey,
    type APIKeyCreate as APIKeyCreate,
    type APIKeyType as APIKeyType,
    type APIKeyListResponse as APIKeyListResponse,
    type APIKeyCreateParams as APIKeyCreateParams,
    type APIKeyListParams as APIKeyListParams,
  };

  export {
    ValidateIntegrations as ValidateIntegrations,
    type AzureOpenAIEmbeddingConfig as AzureOpenAIEmbeddingConfig,
    type BaseConnectionValidation as BaseConnectionValidation,
    type BedrockEmbeddingConfig as BedrockEmbeddingConfig,
    type CloudAstraDBVectorStore as CloudAstraDBVectorStore,
    type CloudAzStorageBlobDataSource as CloudAzStorageBlobDataSource,
    type CloudAzureAISearchVectorStore as CloudAzureAISearchVectorStore,
    type CloudBoxDataSource as CloudBoxDataSource,
    type CloudConfluenceDataSource as CloudConfluenceDataSource,
    type CloudJiraDataSource as CloudJiraDataSource,
    type CloudJiraDataSourceV2 as CloudJiraDataSourceV2,
    type CloudMilvusVectorStore as CloudMilvusVectorStore,
    type CloudMongoDBAtlasVectorSearch as CloudMongoDBAtlasVectorSearch,
    type CloudNotionPageDataSource as CloudNotionPageDataSource,
    type CloudOneDriveDataSource as CloudOneDriveDataSource,
    type CloudPineconeVectorStore as CloudPineconeVectorStore,
    type CloudPostgresVectorStore as CloudPostgresVectorStore,
    type CloudQdrantVectorStore as CloudQdrantVectorStore,
    type CloudS3DataSource as CloudS3DataSource,
    type CloudSharepointDataSource as CloudSharepointDataSource,
    type CloudSlackDataSource as CloudSlackDataSource,
    type CohereEmbeddingConfig as CohereEmbeddingConfig,
    type ConfigurableDataSinkNames as ConfigurableDataSinkNames,
    type ConfigurableDataSourceNames as ConfigurableDataSourceNames,
    type DataSinkCreate as DataSinkCreate,
    type DataSourceCreate as DataSourceCreate,
    type GeminiEmbeddingConfig as GeminiEmbeddingConfig,
    type HuggingFaceInferenceAPIEmbeddingConfig as HuggingFaceInferenceAPIEmbeddingConfig,
    type OpenAIEmbeddingConfig as OpenAIEmbeddingConfig,
    type VertexAIEmbeddingConfig as VertexAIEmbeddingConfig,
    type ValidateIntegrationValidateDataSinkConnectionParams as ValidateIntegrationValidateDataSinkConnectionParams,
    type ValidateIntegrationValidateDataSourceConnectionParams as ValidateIntegrationValidateDataSourceConnectionParams,
    type ValidateIntegrationValidateEmbeddingConnectionParams as ValidateIntegrationValidateEmbeddingConnectionParams,
  };

  export {
    DataSinks as DataSinks,
    type DataSink as DataSink,
    type DataSinkListResponse as DataSinkListResponse,
    type DataSinkCreateParams as DataSinkCreateParams,
    type DataSinkUpdateParams as DataSinkUpdateParams,
    type DataSinkListParams as DataSinkListParams,
    type DataSinkUpsertParams as DataSinkUpsertParams,
  };

  export {
    DataSources as DataSources,
    type DataSource as DataSource,
    type DataSourceReaderVersionMetadata as DataSourceReaderVersionMetadata,
    type DataSourceListResponse as DataSourceListResponse,
    type DataSourceCreateParams as DataSourceCreateParams,
    type DataSourceUpdateParams as DataSourceUpdateParams,
    type DataSourceListParams as DataSourceListParams,
    type DataSourceUpsertParams as DataSourceUpsertParams,
  };

  export {
    EmbeddingModelConfigs as EmbeddingModelConfigs,
    type EmbeddingModelConfig as EmbeddingModelConfig,
    type EmbeddingModelConfigUpdate as EmbeddingModelConfigUpdate,
    type EmbeddingModelConfigListResponse as EmbeddingModelConfigListResponse,
    type EmbeddingModelConfigCreateParams as EmbeddingModelConfigCreateParams,
    type EmbeddingModelConfigUpdateParams as EmbeddingModelConfigUpdateParams,
    type EmbeddingModelConfigListParams as EmbeddingModelConfigListParams,
    type EmbeddingModelConfigDeleteParams as EmbeddingModelConfigDeleteParams,
    type EmbeddingModelConfigUpsertParams as EmbeddingModelConfigUpsertParams,
  };

  export {
    Organizations as Organizations,
    type Organization as Organization,
    type OrganizationCreate as OrganizationCreate,
    type Role as Role,
    type UsageAndPlan as UsageAndPlan,
    type OrganizationListResponse as OrganizationListResponse,
    type OrganizationRetrieveRolesResponse as OrganizationRetrieveRolesResponse,
    type OrganizationCreateParams as OrganizationCreateParams,
    type OrganizationUpdateParams as OrganizationUpdateParams,
    type OrganizationRetrieveUsageParams as OrganizationRetrieveUsageParams,
  };

  export {
    Files as Files,
    type File as File,
    type FileCreate as FileCreate,
    type PresignedURL as PresignedURL,
    type FileGeneratePresignedURLResponse as FileGeneratePresignedURLResponse,
    type FileRetrieveParams as FileRetrieveParams,
    type FileDeleteParams as FileDeleteParams,
    type FileGeneratePresignedURLParams as FileGeneratePresignedURLParams,
    type FileReadContentParams as FileReadContentParams,
    type FileUploadParams as FileUploadParams,
    type FileUploadFromURLParams as FileUploadFromURLParams,
  };

  export {
    Pipelines as Pipelines,
    type AdvancedModeTransformConfig as AdvancedModeTransformConfig,
    type AutoTransformConfig as AutoTransformConfig,
    type LlamaParseParameters as LlamaParseParameters,
    type LlmParameters as LlmParameters,
    type ManagedIngestionStatusResponse as ManagedIngestionStatusResponse,
    type MessageRole as MessageRole,
    type MetadataFilters as MetadataFilters,
    type PageFigureNodeWithScore as PageFigureNodeWithScore,
    type PageScreenshotNodeWithScore as PageScreenshotNodeWithScore,
    type Pipeline as Pipeline,
    type PipelineCreate as PipelineCreate,
    type PipelineMetadataConfig as PipelineMetadataConfig,
    type PipelineType as PipelineType,
    type PresetRetrievalParams as PresetRetrievalParams,
    type RetrievalMode as RetrievalMode,
    type SparseModelConfig as SparseModelConfig,
    type PipelineListResponse as PipelineListResponse,
    type PipelineChatResponse as PipelineChatResponse,
    type PipelineRetrieveFiles2Response as PipelineRetrieveFiles2Response,
    type PipelineRetrievePlaygroundSessionResponse as PipelineRetrievePlaygroundSessionResponse,
    type PipelineCreateParams as PipelineCreateParams,
    type PipelineUpdateParams as PipelineUpdateParams,
    type PipelineListParams as PipelineListParams,
    type PipelineChatParams as PipelineChatParams,
    type PipelineRetrieveFiles2Params as PipelineRetrieveFiles2Params,
    type PipelineRetrieveStatusParams as PipelineRetrieveStatusParams,
  };

  export {
    Retrievers as Retrievers,
    type CompositeRetrievalMode as CompositeRetrievalMode,
    type CompositeRetrievalResult as CompositeRetrievalResult,
    type ReRankConfig as ReRankConfig,
    type Retriever as Retriever,
    type RetrieverCreate as RetrieverCreate,
    type RetrieverPipeline as RetrieverPipeline,
    type RetrieverListResponse as RetrieverListResponse,
    type RetrieverCreateParams as RetrieverCreateParams,
    type RetrieverRetrieveParams as RetrieverRetrieveParams,
    type RetrieverUpdateParams as RetrieverUpdateParams,
    type RetrieverListParams as RetrieverListParams,
    type RetrieverRetrieveDirectParams as RetrieverRetrieveDirectParams,
    type RetrieverUpsertParams as RetrieverUpsertParams,
  };

  export { Evals as Evals, type EvalListSupportedModelsResponse as EvalListSupportedModelsResponse };

  export {
    Parsing as Parsing,
    type FailPageMode as FailPageMode,
    type LlamaParseSupportedFileExtensions as LlamaParseSupportedFileExtensions,
    type ParserLanguages as ParserLanguages,
    type ParsingHistoryItem as ParsingHistoryItem,
    type ParsingJob as ParsingJob,
    type ParsingMode as ParsingMode,
    type StatusEnum as StatusEnum,
    type ParsingGetParsingHistoryResponse as ParsingGetParsingHistoryResponse,
    type ParsingGetSupportedFileExtensionsResponse as ParsingGetSupportedFileExtensionsResponse,
    type ParsingCreateScreenshotParams as ParsingCreateScreenshotParams,
    type ParsingUploadFileParams as ParsingUploadFileParams,
  };

  export { Classifier as Classifier };

  export { Auth as Auth, type AuthReadSelfResponse as AuthReadSelfResponse };

  export {
    Billing as Billing,
    type BillingCreateCustomerPortalSessionResponse as BillingCreateCustomerPortalSessionResponse,
    type BillingCreateIntentAndCustomerSessionResponse as BillingCreateIntentAndCustomerSessionResponse,
    type BillingDowngradePlanResponse as BillingDowngradePlanResponse,
    type BillingCreateCustomerPortalSessionParams as BillingCreateCustomerPortalSessionParams,
    type BillingCreateIntentAndCustomerSessionParams as BillingCreateIntentAndCustomerSessionParams,
    type BillingDowngradePlanParams as BillingDowngradePlanParams,
  };

  export { Extraction as Extraction, type ExtractionRunParams as ExtractionRunParams };

  export {
    Beta as Beta,
    type BetaRetrieveQuotaManagementResponse as BetaRetrieveQuotaManagementResponse,
    type BetaRetrieveQuotaManagementParams as BetaRetrieveQuotaManagementParams,
  };

  export { Test as Test, type TestStreamResponse as TestStreamResponse };
}

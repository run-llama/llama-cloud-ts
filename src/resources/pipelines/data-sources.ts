// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DataSourcesAPI from '../data-sources';
import * as PipelinesAPI from './pipelines';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class DataSources extends APIResource {
  /**
   * Update the configuration of a data source in a pipeline.
   */
  update(
    dataSourceID: string,
    params: DataSourceUpdateParams,
    options?: RequestOptions,
  ): APIPromise<PipelineDataSource> {
    const { pipeline_id, ...body } = params;
    return this._client.put(path`/api/v1/pipelines/${pipeline_id}/data-sources/${dataSourceID}`, {
      body,
      ...options,
    });
  }

  /**
   * Get data sources for a pipeline.
   */
  getDataSources(pipelineID: string, options?: RequestOptions): APIPromise<DataSourceGetDataSourcesResponse> {
    return this._client.get(path`/api/v1/pipelines/${pipelineID}/data-sources`, options);
  }

  /**
   * Get the status of a data source for a pipeline.
   */
  getStatus(
    dataSourceID: string,
    params: DataSourceGetStatusParams,
    options?: RequestOptions,
  ): APIPromise<PipelinesAPI.ManagedIngestionStatusResponse> {
    const { pipeline_id } = params;
    return this._client.get(
      path`/api/v1/pipelines/${pipeline_id}/data-sources/${dataSourceID}/status`,
      options,
    );
  }

  /**
   * Add data sources to a pipeline.
   */
  updateDataSources(
    pipelineID: string,
    params: DataSourceUpdateDataSourcesParams,
    options?: RequestOptions,
  ): APIPromise<DataSourceUpdateDataSourcesResponse> {
    const { body } = params;
    return this._client.put(path`/api/v1/pipelines/${pipelineID}/data-sources`, { body: body, ...options });
  }
}

/**
 * Schema for a data source in a pipeline.
 */
export interface PipelineDataSource {
  /**
   * Unique identifier
   */
  id: string;

  /**
   * Component that implements the data source
   */
  component:
    | { [key: string]: unknown }
    | PipelineDataSource.CloudS3DataSource
    | PipelineDataSource.CloudAzStorageBlobDataSource
    | PipelineDataSource.CloudOneDriveDataSource
    | PipelineDataSource.CloudSharepointDataSource
    | PipelineDataSource.CloudSlackDataSource
    | PipelineDataSource.CloudNotionPageDataSource
    | PipelineDataSource.CloudConfluenceDataSource
    | PipelineDataSource.CloudJiraDataSource
    | PipelineDataSource.CloudJiraDataSourceV2
    | PipelineDataSource.CloudBoxDataSource;

  /**
   * The ID of the data source.
   */
  data_source_id: string;

  /**
   * The last time the data source was automatically synced.
   */
  last_synced_at: string;

  /**
   * The name of the data source.
   */
  name: string;

  /**
   * The ID of the pipeline.
   */
  pipeline_id: string;

  project_id: string;

  source_type:
    | 'S3'
    | 'AZURE_STORAGE_BLOB'
    | 'GOOGLE_DRIVE'
    | 'MICROSOFT_ONEDRIVE'
    | 'MICROSOFT_SHAREPOINT'
    | 'SLACK'
    | 'NOTION_PAGE'
    | 'CONFLUENCE'
    | 'JIRA'
    | 'JIRA_V2'
    | 'BOX';

  /**
   * Creation datetime
   */
  created_at?: string | null;

  /**
   * Custom metadata that will be present on all data loaded from the data source
   */
  custom_metadata?: {
    [key: string]: { [key: string]: unknown } | Array<unknown> | string | number | boolean | null;
  } | null;

  /**
   * The status of the data source in the pipeline.
   */
  status?: 'NOT_STARTED' | 'IN_PROGRESS' | 'SUCCESS' | 'ERROR' | 'CANCELLED' | null;

  /**
   * The last time the status was updated.
   */
  status_updated_at?: string | null;

  /**
   * The interval at which the data source should be synced.
   */
  sync_interval?: number | null;

  /**
   * The id of the user who set the sync schedule.
   */
  sync_schedule_set_by?: string | null;

  /**
   * Update datetime
   */
  updated_at?: string | null;

  /**
   * Version metadata for the data source
   */
  version_metadata?: DataSourcesAPI.DataSourceReaderVersionMetadata | null;
}

export namespace PipelineDataSource {
  export interface CloudS3DataSource {
    /**
     * The name of the S3 bucket to read from.
     */
    bucket: string;

    /**
     * The AWS access ID to use for authentication.
     */
    aws_access_id?: string | null;

    class_name?: string;

    /**
     * The prefix of the S3 objects to read from.
     */
    prefix?: string | null;

    /**
     * The regex pattern to filter S3 objects. Must be a valid regex pattern.
     */
    regex_pattern?: string | null;

    /**
     * The S3 endpoint URL to use for authentication.
     */
    s3_endpoint_url?: string | null;

    supports_access_control?: boolean;
  }

  export interface CloudAzStorageBlobDataSource {
    /**
     * The Azure Storage Blob account URL to use for authentication.
     */
    account_url: string;

    /**
     * The name of the Azure Storage Blob container to read from.
     */
    container_name: string;

    /**
     * The Azure Storage Blob account name to use for authentication.
     */
    account_name?: string | null;

    /**
     * The blob name to read from.
     */
    blob?: string | null;

    class_name?: string;

    /**
     * The Azure AD client ID to use for authentication.
     */
    client_id?: string | null;

    /**
     * The prefix of the Azure Storage Blob objects to read from.
     */
    prefix?: string | null;

    supports_access_control?: boolean;

    /**
     * The Azure AD tenant ID to use for authentication.
     */
    tenant_id?: string | null;
  }

  export interface CloudOneDriveDataSource {
    /**
     * The client ID to use for authentication.
     */
    client_id: string;

    /**
     * The tenant ID to use for authentication.
     */
    tenant_id: string;

    /**
     * The user principal name to use for authentication.
     */
    user_principal_name: string;

    class_name?: string;

    /**
     * The ID of the OneDrive folder to read from.
     */
    folder_id?: string | null;

    /**
     * The path of the OneDrive folder to read from.
     */
    folder_path?: string | null;

    /**
     * The list of required file extensions.
     */
    required_exts?: Array<string> | null;

    supports_access_control?: true;
  }

  export interface CloudSharepointDataSource {
    /**
     * The client ID to use for authentication.
     */
    client_id: string;

    /**
     * The tenant ID to use for authentication.
     */
    tenant_id: string;

    class_name?: string;

    /**
     * The name of the Sharepoint drive to read from.
     */
    drive_name?: string | null;

    /**
     * List of regex patterns for file paths to exclude. Files whose paths (including
     * filename) match any pattern will be excluded. Example: ['/temp/', '/backup/',
     * '\.git/', '\.tmp$', '^~']
     */
    exclude_path_patterns?: Array<string> | null;

    /**
     * The ID of the Sharepoint folder to read from.
     */
    folder_id?: string | null;

    /**
     * The path of the Sharepoint folder to read from.
     */
    folder_path?: string | null;

    /**
     * Whether to get permissions for the sharepoint site.
     */
    get_permissions?: boolean | null;

    /**
     * List of regex patterns for file paths to include. Full paths (including
     * filename) must match at least one pattern to be included. Example: ['/reports/',
     * '/docs/.*\.pdf$', '^Report.*\.pdf$']
     */
    include_path_patterns?: Array<string> | null;

    /**
     * The list of required file extensions.
     */
    required_exts?: Array<string> | null;

    /**
     * The ID of the SharePoint site to download from.
     */
    site_id?: string | null;

    /**
     * The name of the SharePoint site to download from.
     */
    site_name?: string | null;

    supports_access_control?: true;
  }

  export interface CloudSlackDataSource {
    /**
     * Slack Channel.
     */
    channel_ids?: string | null;

    /**
     * Slack Channel name pattern.
     */
    channel_patterns?: string | null;

    class_name?: string;

    /**
     * Earliest date.
     */
    earliest_date?: string | null;

    /**
     * Earliest date timestamp.
     */
    earliest_date_timestamp?: number | null;

    /**
     * Latest date.
     */
    latest_date?: string | null;

    /**
     * Latest date timestamp.
     */
    latest_date_timestamp?: number | null;

    supports_access_control?: boolean;
  }

  export interface CloudNotionPageDataSource {
    class_name?: string;

    /**
     * The Notion Database Id to read content from.
     */
    database_ids?: string | null;

    /**
     * The Page ID's of the Notion to read from.
     */
    page_ids?: string | null;

    supports_access_control?: boolean;
  }

  export interface CloudConfluenceDataSource {
    /**
     * Type of Authentication for connecting to Confluence APIs.
     */
    authentication_mechanism: string;

    /**
     * The server URL of the Confluence instance.
     */
    server_url: string;

    class_name?: string;

    /**
     * The CQL query to use for fetching pages.
     */
    cql?: string | null;

    /**
     * Configuration for handling failures during processing. Key-value object
     * controlling failure handling behaviors.
     *
     * Example: { "skip_list_failures": true }
     *
     * Currently supports:
     *
     * - skip_list_failures: Skip failed batches/lists and continue processing
     */
    failure_handling?: CloudConfluenceDataSource.FailureHandling;

    /**
     * Whether to index restricted pages.
     */
    index_restricted_pages?: boolean;

    /**
     * Whether to keep the markdown format.
     */
    keep_markdown_format?: boolean;

    /**
     * The label to use for fetching pages.
     */
    label?: string | null;

    /**
     * The page IDs of the Confluence to read from.
     */
    page_ids?: string | null;

    /**
     * The space key to read from.
     */
    space_key?: string | null;

    supports_access_control?: boolean;

    /**
     * The username to use for authentication.
     */
    user_name?: string | null;
  }

  export namespace CloudConfluenceDataSource {
    /**
     * Configuration for handling failures during processing. Key-value object
     * controlling failure handling behaviors.
     *
     * Example: { "skip_list_failures": true }
     *
     * Currently supports:
     *
     * - skip_list_failures: Skip failed batches/lists and continue processing
     */
    export interface FailureHandling {
      /**
       * Whether to skip failed batches/lists and continue processing
       */
      skip_list_failures?: boolean;
    }
  }

  /**
   * Cloud Jira Data Source integrating JiraReader.
   */
  export interface CloudJiraDataSource {
    /**
     * Type of Authentication for connecting to Jira APIs.
     */
    authentication_mechanism: string;

    /**
     * JQL (Jira Query Language) query to search.
     */
    query: string;

    class_name?: string;

    /**
     * The cloud ID, used in case of OAuth2.
     */
    cloud_id?: string | null;

    /**
     * The email address to use for authentication.
     */
    email?: string | null;

    /**
     * The server url for Jira Cloud.
     */
    server_url?: string | null;

    supports_access_control?: boolean;
  }

  /**
   * Cloud Jira Data Source integrating JiraReaderV2.
   */
  export interface CloudJiraDataSourceV2 {
    /**
     * Type of Authentication for connecting to Jira APIs.
     */
    authentication_mechanism: string;

    /**
     * JQL (Jira Query Language) query to search.
     */
    query: string;

    /**
     * The server url for Jira Cloud.
     */
    server_url: string;

    /**
     * Jira REST API version to use (2 or 3). 3 supports Atlassian Document Format
     * (ADF).
     */
    api_version?: '2' | '3';

    class_name?: string;

    /**
     * The cloud ID, used in case of OAuth2.
     */
    cloud_id?: string | null;

    /**
     * The email address to use for authentication.
     */
    email?: string | null;

    /**
     * Fields to expand in the response.
     */
    expand?: string | null;

    /**
     * List of fields to retrieve from Jira. If None, retrieves all fields.
     */
    fields?: Array<string> | null;

    /**
     * Whether to fetch project role permissions and issue-level security
     */
    get_permissions?: boolean;

    /**
     * Rate limit for Jira API requests per minute.
     */
    requests_per_minute?: number | null;

    supports_access_control?: boolean;
  }

  export interface CloudBoxDataSource {
    /**
     * The type of authentication to use (Developer Token or CCG)
     */
    authentication_mechanism: 'developer_token' | 'ccg';

    class_name?: string;

    /**
     * Box API key used for identifying the application the user is authenticating with
     */
    client_id?: string | null;

    /**
     * Box Enterprise ID, if provided authenticates as service.
     */
    enterprise_id?: string | null;

    /**
     * The ID of the Box folder to read from.
     */
    folder_id?: string | null;

    supports_access_control?: boolean;

    /**
     * Box User ID, if provided authenticates as user.
     */
    user_id?: string | null;
  }
}

export type DataSourceGetDataSourcesResponse = Array<PipelineDataSource>;

export type DataSourceUpdateDataSourcesResponse = Array<PipelineDataSource>;

export interface DataSourceUpdateParams {
  /**
   * Path param:
   */
  pipeline_id: string;

  /**
   * Body param: The interval at which the data source should be synced.
   */
  sync_interval?: number | null;
}

export interface DataSourceGetStatusParams {
  pipeline_id: string;
}

export interface DataSourceUpdateDataSourcesParams {
  body: Array<DataSourceUpdateDataSourcesParams.Body>;
}

export namespace DataSourceUpdateDataSourcesParams {
  /**
   * Schema for creating an association between a data source and a pipeline.
   */
  export interface Body {
    /**
     * The ID of the data source.
     */
    data_source_id: string;

    /**
     * The interval at which the data source should be synced. Valid values are: 21600,
     * 43200, 86400
     */
    sync_interval?: number | null;
  }
}

export declare namespace DataSources {
  export {
    type PipelineDataSource as PipelineDataSource,
    type DataSourceGetDataSourcesResponse as DataSourceGetDataSourcesResponse,
    type DataSourceUpdateDataSourcesResponse as DataSourceUpdateDataSourcesResponse,
    type DataSourceUpdateParams as DataSourceUpdateParams,
    type DataSourceGetStatusParams as DataSourceGetStatusParams,
    type DataSourceUpdateDataSourcesParams as DataSourceUpdateDataSourcesParams,
  };
}

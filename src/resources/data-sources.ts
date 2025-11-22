// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class DataSources extends APIResource {
  /**
   * Create a new data source.
   */
  create(params: DataSourceCreateParams, options?: RequestOptions): APIPromise<DataSource> {
    const { organization_id, project_id, ...body } = params;
    return this._client.post('/api/v1/data-sources', {
      query: { organization_id, project_id },
      body,
      ...options,
    });
  }

  /**
   * Update a data source by ID.
   */
  update(
    dataSourceID: string,
    body: DataSourceUpdateParams,
    options?: RequestOptions,
  ): APIPromise<DataSource> {
    return this._client.put(path`/api/v1/data-sources/${dataSourceID}`, { body, ...options });
  }

  /**
   * List data sources for a given project. If project_id is not provided, uses the
   * default project.
   */
  list(
    query: DataSourceListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DataSourceListResponse> {
    return this._client.get('/api/v1/data-sources', { query, ...options });
  }

  /**
   * Delete a data source by ID.
   */
  delete(dataSourceID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/api/v1/data-sources/${dataSourceID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get a data source by ID.
   */
  get(dataSourceID: string, options?: RequestOptions): APIPromise<DataSource> {
    return this._client.get(path`/api/v1/data-sources/${dataSourceID}`, options);
  }

  /**
   * Upserts a data source. Updates if a data source with the same name and
   * project_id already exists. Otherwise, creates a new data source.
   */
  upsert(params: DataSourceUpsertParams, options?: RequestOptions): APIPromise<DataSource> {
    const { organization_id, project_id, ...body } = params;
    return this._client.put('/api/v1/data-sources', {
      query: { organization_id, project_id },
      body,
      ...options,
    });
  }
}

/**
 * Schema for a data source.
 */
export interface DataSource {
  /**
   * Unique identifier
   */
  id: string;

  /**
   * Component that implements the data source
   */
  component:
    | { [key: string]: unknown }
    | DataSource.CloudS3DataSource
    | DataSource.CloudAzStorageBlobDataSource
    | DataSource.CloudOneDriveDataSource
    | DataSource.CloudSharepointDataSource
    | DataSource.CloudSlackDataSource
    | DataSource.CloudNotionPageDataSource
    | DataSource.CloudConfluenceDataSource
    | DataSource.CloudJiraDataSource
    | DataSource.CloudJiraDataSourceV2
    | DataSource.CloudBoxDataSource;

  /**
   * The name of the data source.
   */
  name: string;

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
   * Update datetime
   */
  updated_at?: string | null;

  /**
   * Version metadata for the data source
   */
  version_metadata?: DataSourceReaderVersionMetadata | null;
}

export namespace DataSource {
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

export interface DataSourceReaderVersionMetadata {
  /**
   * The version of the reader to use for this data source.
   */
  reader_version?: '1.0' | '2.0' | '2.1' | null;
}

export type DataSourceListResponse = Array<DataSource>;

export interface DataSourceCreateParams {
  /**
   * Body param: Component that implements the data source
   */
  component:
    | { [key: string]: unknown }
    | DataSourceCreateParams.CloudS3DataSource
    | DataSourceCreateParams.CloudAzStorageBlobDataSource
    | DataSourceCreateParams.CloudOneDriveDataSource
    | DataSourceCreateParams.CloudSharepointDataSource
    | DataSourceCreateParams.CloudSlackDataSource
    | DataSourceCreateParams.CloudNotionPageDataSource
    | DataSourceCreateParams.CloudConfluenceDataSource
    | DataSourceCreateParams.CloudJiraDataSource
    | DataSourceCreateParams.CloudJiraDataSourceV2
    | DataSourceCreateParams.CloudBoxDataSource;

  /**
   * Body param: The name of the data source.
   */
  name: string;

  /**
   * Body param:
   */
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
   * Query param:
   */
  organization_id?: string | null;

  /**
   * Query param:
   */
  project_id?: string | null;

  /**
   * Body param: Custom metadata that will be present on all data loaded from the
   * data source
   */
  custom_metadata?: {
    [key: string]: { [key: string]: unknown } | Array<unknown> | string | number | boolean | null;
  } | null;
}

export namespace DataSourceCreateParams {
  export interface CloudS3DataSource {
    /**
     * The name of the S3 bucket to read from.
     */
    bucket: string;

    /**
     * The AWS access ID to use for authentication.
     */
    aws_access_id?: string | null;

    /**
     * The AWS access secret to use for authentication.
     */
    aws_access_secret?: string | null;

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
     * The Azure Storage Blob account key to use for authentication.
     */
    account_key?: string | null;

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
     * The Azure AD client secret to use for authentication.
     */
    client_secret?: string | null;

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
     * The client secret to use for authentication.
     */
    client_secret: string;

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
     * The client secret to use for authentication.
     */
    client_secret: string;

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
     * Slack Bot Token.
     */
    slack_token: string;

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
    /**
     * The integration token to use for authentication.
     */
    integration_token: string;

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

    /**
     * The API token to use for authentication.
     */
    api_token?: string | null;

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

    /**
     * The API/ Access Token used for Basic, PAT and OAuth2 authentication.
     */
    api_token?: string | null;

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
     * The API Access Token used for Basic, PAT and OAuth2 authentication.
     */
    api_token?: string | null;

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
     * Box API secret used for making auth requests.
     */
    client_secret?: string | null;

    /**
     * Developer token for authentication if authentication_mechanism is
     * 'developer_token'.
     */
    developer_token?: string | null;

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

export interface DataSourceUpdateParams {
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
   * Component that implements the data source
   */
  component?:
    | { [key: string]: unknown }
    | DataSourceUpdateParams.CloudS3DataSource
    | DataSourceUpdateParams.CloudAzStorageBlobDataSource
    | DataSourceUpdateParams.CloudOneDriveDataSource
    | DataSourceUpdateParams.CloudSharepointDataSource
    | DataSourceUpdateParams.CloudSlackDataSource
    | DataSourceUpdateParams.CloudNotionPageDataSource
    | DataSourceUpdateParams.CloudConfluenceDataSource
    | DataSourceUpdateParams.CloudJiraDataSource
    | DataSourceUpdateParams.CloudJiraDataSourceV2
    | DataSourceUpdateParams.CloudBoxDataSource
    | null;

  /**
   * Custom metadata that will be present on all data loaded from the data source
   */
  custom_metadata?: {
    [key: string]: { [key: string]: unknown } | Array<unknown> | string | number | boolean | null;
  } | null;

  /**
   * The name of the data source.
   */
  name?: string | null;
}

export namespace DataSourceUpdateParams {
  export interface CloudS3DataSource {
    /**
     * The name of the S3 bucket to read from.
     */
    bucket: string;

    /**
     * The AWS access ID to use for authentication.
     */
    aws_access_id?: string | null;

    /**
     * The AWS access secret to use for authentication.
     */
    aws_access_secret?: string | null;

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
     * The Azure Storage Blob account key to use for authentication.
     */
    account_key?: string | null;

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
     * The Azure AD client secret to use for authentication.
     */
    client_secret?: string | null;

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
     * The client secret to use for authentication.
     */
    client_secret: string;

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
     * The client secret to use for authentication.
     */
    client_secret: string;

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
     * Slack Bot Token.
     */
    slack_token: string;

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
    /**
     * The integration token to use for authentication.
     */
    integration_token: string;

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

    /**
     * The API token to use for authentication.
     */
    api_token?: string | null;

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

    /**
     * The API/ Access Token used for Basic, PAT and OAuth2 authentication.
     */
    api_token?: string | null;

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
     * The API Access Token used for Basic, PAT and OAuth2 authentication.
     */
    api_token?: string | null;

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
     * Box API secret used for making auth requests.
     */
    client_secret?: string | null;

    /**
     * Developer token for authentication if authentication_mechanism is
     * 'developer_token'.
     */
    developer_token?: string | null;

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

export interface DataSourceListParams {
  organization_id?: string | null;

  project_id?: string | null;
}

export interface DataSourceUpsertParams {
  /**
   * Body param: Component that implements the data source
   */
  component:
    | { [key: string]: unknown }
    | DataSourceUpsertParams.CloudS3DataSource
    | DataSourceUpsertParams.CloudAzStorageBlobDataSource
    | DataSourceUpsertParams.CloudOneDriveDataSource
    | DataSourceUpsertParams.CloudSharepointDataSource
    | DataSourceUpsertParams.CloudSlackDataSource
    | DataSourceUpsertParams.CloudNotionPageDataSource
    | DataSourceUpsertParams.CloudConfluenceDataSource
    | DataSourceUpsertParams.CloudJiraDataSource
    | DataSourceUpsertParams.CloudJiraDataSourceV2
    | DataSourceUpsertParams.CloudBoxDataSource;

  /**
   * Body param: The name of the data source.
   */
  name: string;

  /**
   * Body param:
   */
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
   * Query param:
   */
  organization_id?: string | null;

  /**
   * Query param:
   */
  project_id?: string | null;

  /**
   * Body param: Custom metadata that will be present on all data loaded from the
   * data source
   */
  custom_metadata?: {
    [key: string]: { [key: string]: unknown } | Array<unknown> | string | number | boolean | null;
  } | null;
}

export namespace DataSourceUpsertParams {
  export interface CloudS3DataSource {
    /**
     * The name of the S3 bucket to read from.
     */
    bucket: string;

    /**
     * The AWS access ID to use for authentication.
     */
    aws_access_id?: string | null;

    /**
     * The AWS access secret to use for authentication.
     */
    aws_access_secret?: string | null;

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
     * The Azure Storage Blob account key to use for authentication.
     */
    account_key?: string | null;

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
     * The Azure AD client secret to use for authentication.
     */
    client_secret?: string | null;

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
     * The client secret to use for authentication.
     */
    client_secret: string;

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
     * The client secret to use for authentication.
     */
    client_secret: string;

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
     * Slack Bot Token.
     */
    slack_token: string;

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
    /**
     * The integration token to use for authentication.
     */
    integration_token: string;

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

    /**
     * The API token to use for authentication.
     */
    api_token?: string | null;

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

    /**
     * The API/ Access Token used for Basic, PAT and OAuth2 authentication.
     */
    api_token?: string | null;

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
     * The API Access Token used for Basic, PAT and OAuth2 authentication.
     */
    api_token?: string | null;

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
     * Box API secret used for making auth requests.
     */
    client_secret?: string | null;

    /**
     * Developer token for authentication if authentication_mechanism is
     * 'developer_token'.
     */
    developer_token?: string | null;

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

export declare namespace DataSources {
  export {
    type DataSource as DataSource,
    type DataSourceReaderVersionMetadata as DataSourceReaderVersionMetadata,
    type DataSourceListResponse as DataSourceListResponse,
    type DataSourceCreateParams as DataSourceCreateParams,
    type DataSourceUpdateParams as DataSourceUpdateParams,
    type DataSourceListParams as DataSourceListParams,
    type DataSourceUpsertParams as DataSourceUpsertParams,
  };
}

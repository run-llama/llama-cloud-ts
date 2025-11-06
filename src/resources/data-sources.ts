// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ValidateIntegrationsAPI from './validate-integrations';
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
   * Get a data source by ID.
   */
  retrieve(dataSourceID: string, options?: RequestOptions): APIPromise<DataSource> {
    return this._client.get(path`/api/v1/data-sources/${dataSourceID}`, options);
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
    | ValidateIntegrationsAPI.CloudS3DataSource
    | ValidateIntegrationsAPI.CloudAzStorageBlobDataSource
    | ValidateIntegrationsAPI.CloudOneDriveDataSource
    | ValidateIntegrationsAPI.CloudSharepointDataSource
    | ValidateIntegrationsAPI.CloudSlackDataSource
    | ValidateIntegrationsAPI.CloudNotionPageDataSource
    | ValidateIntegrationsAPI.CloudConfluenceDataSource
    | ValidateIntegrationsAPI.CloudJiraDataSource
    | ValidateIntegrationsAPI.CloudJiraDataSourceV2
    | ValidateIntegrationsAPI.CloudBoxDataSource;

  /**
   * The name of the data source.
   */
  name: string;

  project_id: string;

  source_type: ValidateIntegrationsAPI.ConfigurableDataSourceNames;

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
    | ValidateIntegrationsAPI.CloudS3DataSource
    | ValidateIntegrationsAPI.CloudAzStorageBlobDataSource
    | ValidateIntegrationsAPI.CloudOneDriveDataSource
    | ValidateIntegrationsAPI.CloudSharepointDataSource
    | ValidateIntegrationsAPI.CloudSlackDataSource
    | ValidateIntegrationsAPI.CloudNotionPageDataSource
    | ValidateIntegrationsAPI.CloudConfluenceDataSource
    | ValidateIntegrationsAPI.CloudJiraDataSource
    | ValidateIntegrationsAPI.CloudJiraDataSourceV2
    | ValidateIntegrationsAPI.CloudBoxDataSource;

  /**
   * Body param: The name of the data source.
   */
  name: string;

  /**
   * Body param:
   */
  source_type: ValidateIntegrationsAPI.ConfigurableDataSourceNames;

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

export interface DataSourceUpdateParams {
  source_type: ValidateIntegrationsAPI.ConfigurableDataSourceNames;

  /**
   * Component that implements the data source
   */
  component?:
    | { [key: string]: unknown }
    | ValidateIntegrationsAPI.CloudS3DataSource
    | ValidateIntegrationsAPI.CloudAzStorageBlobDataSource
    | ValidateIntegrationsAPI.CloudOneDriveDataSource
    | ValidateIntegrationsAPI.CloudSharepointDataSource
    | ValidateIntegrationsAPI.CloudSlackDataSource
    | ValidateIntegrationsAPI.CloudNotionPageDataSource
    | ValidateIntegrationsAPI.CloudConfluenceDataSource
    | ValidateIntegrationsAPI.CloudJiraDataSource
    | ValidateIntegrationsAPI.CloudJiraDataSourceV2
    | ValidateIntegrationsAPI.CloudBoxDataSource
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
    | ValidateIntegrationsAPI.CloudS3DataSource
    | ValidateIntegrationsAPI.CloudAzStorageBlobDataSource
    | ValidateIntegrationsAPI.CloudOneDriveDataSource
    | ValidateIntegrationsAPI.CloudSharepointDataSource
    | ValidateIntegrationsAPI.CloudSlackDataSource
    | ValidateIntegrationsAPI.CloudNotionPageDataSource
    | ValidateIntegrationsAPI.CloudConfluenceDataSource
    | ValidateIntegrationsAPI.CloudJiraDataSource
    | ValidateIntegrationsAPI.CloudJiraDataSourceV2
    | ValidateIntegrationsAPI.CloudBoxDataSource;

  /**
   * Body param: The name of the data source.
   */
  name: string;

  /**
   * Body param:
   */
  source_type: ValidateIntegrationsAPI.ConfigurableDataSourceNames;

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

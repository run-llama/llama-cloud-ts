// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AgentDataAPI from './agent-data';
import {
  AgentData,
  AgentDataAgentDataParams,
  AgentDataAggregateParams,
  AgentDataAggregateResponse,
  AgentDataDeleteParams,
  AgentDataDeleteResponse,
  AgentDataRetrieveParams,
  AgentDataSearchParams,
  AgentDataSearchResponse,
  AgentDataUpdateParams,
} from './agent-data';
import * as APIKeysAPI from './api-keys';
import {
  APIKeyAPIKeysParams,
  APIKeyRetrieveAPIKeysParams,
  APIKeyRetrieveAPIKeysResponse,
  APIKeys,
} from './api-keys';
import * as BatchesAPI from './batches';
import { Batches } from './batches';
import * as FilesAPI from './files';
import { FileCreateParams, FileDeleteParams, FileQueryParams, FileQueryResponse, Files } from './files';
import * as ParseConfigurationsAPI from './parse-configurations';
import {
  ParseConfiguration,
  ParseConfigurationCreate,
  ParseConfigurationDeleteParams,
  ParseConfigurationParseConfigurationsParams,
  ParseConfigurationQueryParams,
  ParseConfigurationQueryResponse,
  ParseConfigurationRetrieveLatestParams,
  ParseConfigurationRetrieveParams,
  ParseConfigurationRetrieveParseConfigurationsParams,
  ParseConfigurationUpdateParams,
  ParseConfigurationUpdateParseConfigurationsParams,
  ParseConfigurations,
} from './parse-configurations';
import * as DirectoriesAPI from './directories/directories';
import {
  Directories,
  DirectoryCreateParams,
  DirectoryCreateResponse,
  DirectoryListParams,
  DirectoryListResponse,
  DirectoryRetrieveResponse,
  DirectoryUpdateParams,
  DirectoryUpdateResponse,
} from './directories/directories';
import * as SpreadsheetAPI from './spreadsheet/spreadsheet';
import { Spreadsheet } from './spreadsheet/spreadsheet';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Beta extends APIResource {
  apiKeys: APIKeysAPI.APIKeys = new APIKeysAPI.APIKeys(this._client);
  batches: BatchesAPI.Batches = new BatchesAPI.Batches(this._client);
  agentData: AgentDataAPI.AgentData = new AgentDataAPI.AgentData(this._client);
  files: FilesAPI.Files = new FilesAPI.Files(this._client);
  parseConfigurations: ParseConfigurationsAPI.ParseConfigurations =
    new ParseConfigurationsAPI.ParseConfigurations(this._client);
  spreadsheet: SpreadsheetAPI.Spreadsheet = new SpreadsheetAPI.Spreadsheet(this._client);
  directories: DirectoriesAPI.Directories = new DirectoriesAPI.Directories(this._client);

  /**
   * Retrieve a paginated list of quota configurations with optional filtering.
   */
  retrieveQuotaManagement(
    query: BetaRetrieveQuotaManagementParams,
    options?: RequestOptions,
  ): APIPromise<BetaRetrieveQuotaManagementResponse> {
    return this._client.get('/api/v1/beta/quota-management', { query, ...options });
  }
}

export interface BetaRetrieveQuotaManagementResponse {
  items: Array<BetaRetrieveQuotaManagementResponse.Item>;

  page: number;

  pages: number;

  size: number;

  total: number;
}

export namespace BetaRetrieveQuotaManagementResponse {
  /**
   * Full quota configuration model.
   */
  export interface Item {
    /**
     * The configuration metadata
     */
    configuration_metadata: { [key: string]: unknown } | null;

    /**
     * The quota configuration type
     */
    configuration_type:
      | 'rate_limit_parse_concurrent_premium'
      | 'rate_limit_parse_concurrent_default'
      | 'rate_limit_concurrent_jobs_in_execution_default'
      | 'rate_limit_concurrent_jobs_in_execution_doc_ingest'
      | 'limit_embedding_character'
      | 'limit_files_per_index';

    /**
     * The quota configuration value
     */
    configuration_value: Item.ConfigurationValue;

    /**
     * The source ID, e.g. the organization ID
     */
    source_id: string;

    /**
     * The source type, e.g. 'organization'
     */
    source_type: 'organization';

    /**
     * The status of the quota, i.e. 'ACTIVE' or 'INACTIVE'
     */
    status: 'ACTIVE' | 'INACTIVE';

    /**
     * The system-generated UUID for the quota
     */
    id?: string | null;

    /**
     * The creation date of the quota configuration in the database
     */
    created_at?: string | null;

    /**
     * The end date of the quota
     */
    ended_at?: string | null;

    /**
     * The idempotency key
     */
    idempotency_key?: string | null;

    /**
     * The start date of the quota
     */
    started_at?: string;

    /**
     * The last updated date of the quota configuration in the database
     */
    updated_at?: string | null;
  }

  export namespace Item {
    /**
     * The quota configuration value
     */
    export interface ConfigurationValue {
      /**
       * The rate numerator
       */
      numerator: number;

      /**
       * The rate limit denominator
       */
      denominator?: number | null;

      /**
       * The default rate limit denominator units
       */
      denominator_units?: 'second' | 'minute' | 'hour' | 'day' | null;
    }
  }
}

export interface BetaRetrieveQuotaManagementParams {
  source_id: string;

  source_type: 'organization';

  page?: number;

  page_size?: number;
}

Beta.APIKeys = APIKeys;
Beta.Batches = Batches;
Beta.Files = Files;
Beta.ParseConfigurations = ParseConfigurations;
Beta.Spreadsheet = Spreadsheet;
Beta.Directories = Directories;

export declare namespace Beta {
  export {
    type BetaRetrieveQuotaManagementResponse as BetaRetrieveQuotaManagementResponse,
    type BetaRetrieveQuotaManagementParams as BetaRetrieveQuotaManagementParams,
  };

  export {
    APIKeys as APIKeys,
    type APIKeyRetrieveAPIKeysResponse as APIKeyRetrieveAPIKeysResponse,
    type APIKeyAPIKeysParams as APIKeyAPIKeysParams,
    type APIKeyRetrieveAPIKeysParams as APIKeyRetrieveAPIKeysParams,
  };

  export { Batches as Batches };

  export {
    type AgentData as AgentData,
    type AgentDataDeleteResponse as AgentDataDeleteResponse,
    type AgentDataAggregateResponse as AgentDataAggregateResponse,
    type AgentDataSearchResponse as AgentDataSearchResponse,
    type AgentDataRetrieveParams as AgentDataRetrieveParams,
    type AgentDataUpdateParams as AgentDataUpdateParams,
    type AgentDataDeleteParams as AgentDataDeleteParams,
    type AgentDataAgentDataParams as AgentDataAgentDataParams,
    type AgentDataAggregateParams as AgentDataAggregateParams,
    type AgentDataSearchParams as AgentDataSearchParams,
  };

  export {
    Files as Files,
    type FileQueryResponse as FileQueryResponse,
    type FileCreateParams as FileCreateParams,
    type FileDeleteParams as FileDeleteParams,
    type FileQueryParams as FileQueryParams,
  };

  export {
    ParseConfigurations as ParseConfigurations,
    type ParseConfiguration as ParseConfiguration,
    type ParseConfigurationCreate as ParseConfigurationCreate,
    type ParseConfigurationQueryResponse as ParseConfigurationQueryResponse,
    type ParseConfigurationRetrieveParams as ParseConfigurationRetrieveParams,
    type ParseConfigurationUpdateParams as ParseConfigurationUpdateParams,
    type ParseConfigurationDeleteParams as ParseConfigurationDeleteParams,
    type ParseConfigurationParseConfigurationsParams as ParseConfigurationParseConfigurationsParams,
    type ParseConfigurationQueryParams as ParseConfigurationQueryParams,
    type ParseConfigurationRetrieveLatestParams as ParseConfigurationRetrieveLatestParams,
    type ParseConfigurationRetrieveParseConfigurationsParams as ParseConfigurationRetrieveParseConfigurationsParams,
    type ParseConfigurationUpdateParseConfigurationsParams as ParseConfigurationUpdateParseConfigurationsParams,
  };

  export { Spreadsheet as Spreadsheet };

  export {
    Directories as Directories,
    type DirectoryCreateResponse as DirectoryCreateResponse,
    type DirectoryRetrieveResponse as DirectoryRetrieveResponse,
    type DirectoryUpdateResponse as DirectoryUpdateResponse,
    type DirectoryListResponse as DirectoryListResponse,
    type DirectoryCreateParams as DirectoryCreateParams,
    type DirectoryUpdateParams as DirectoryUpdateParams,
    type DirectoryListParams as DirectoryListParams,
  };
}

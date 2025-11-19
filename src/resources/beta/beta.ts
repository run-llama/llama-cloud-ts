// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentDataAPI from './agent-data';
import {
  AgentData,
  AgentDataAgentDataParams,
  AgentDataAggregateParams,
  AgentDataAggregateResponse,
  AgentDataDeleteParams,
  AgentDataDeleteResponse,
  AgentDataGetParams,
  AgentDataSearchParams,
  AgentDataSearchResponse,
  AgentDataUpdateParams,
} from './agent-data';
import * as FilesAPI from './files';
import { FileCreateParams, FileDeleteParams, FileQueryParams, FileQueryResponse, Files } from './files';
import * as ParseConfigurationsAPI from './parse-configurations';
import {
  ParseConfiguration,
  ParseConfigurationCreate,
  ParseConfigurationDeleteParams,
  ParseConfigurationGetLatestParams,
  ParseConfigurationGetParams,
  ParseConfigurationGetParseConfigurationsParams,
  ParseConfigurationParseConfigurationsParams,
  ParseConfigurationQueryParams,
  ParseConfigurationQueryResponse,
  ParseConfigurationUpdateParams,
  ParseConfigurationUpdateParseConfigurationsParams,
  ParseConfigurations,
} from './parse-configurations';
import * as SpreadsheetAPI from './spreadsheet';
import { Spreadsheet, SpreadsheetJob, SpreadsheetParsingConfig } from './spreadsheet';
import * as DirectoriesAPI from './directories/directories';
import {
  Directories,
  DirectoryCreateParams,
  DirectoryCreateResponse,
  DirectoryDeleteParams,
  DirectoryGetParams,
  DirectoryGetResponse,
  DirectoryListParams,
  DirectoryListResponse,
  DirectoryListResponsesPaginatedClassifyJobs,
  DirectoryUpdateParams,
  DirectoryUpdateResponse,
} from './directories/directories';

export class Beta extends APIResource {
  agentData: AgentDataAPI.AgentData = new AgentDataAPI.AgentData(this._client);
  files: FilesAPI.Files = new FilesAPI.Files(this._client);
  parseConfigurations: ParseConfigurationsAPI.ParseConfigurations =
    new ParseConfigurationsAPI.ParseConfigurations(this._client);
  spreadsheet: SpreadsheetAPI.Spreadsheet = new SpreadsheetAPI.Spreadsheet(this._client);
  directories: DirectoriesAPI.Directories = new DirectoriesAPI.Directories(this._client);
}

Beta.Files = Files;
Beta.ParseConfigurations = ParseConfigurations;
Beta.Spreadsheet = Spreadsheet;
Beta.Directories = Directories;

export declare namespace Beta {
  export {
    type AgentData as AgentData,
    type AgentDataDeleteResponse as AgentDataDeleteResponse,
    type AgentDataAggregateResponse as AgentDataAggregateResponse,
    type AgentDataSearchResponse as AgentDataSearchResponse,
    type AgentDataUpdateParams as AgentDataUpdateParams,
    type AgentDataDeleteParams as AgentDataDeleteParams,
    type AgentDataAgentDataParams as AgentDataAgentDataParams,
    type AgentDataAggregateParams as AgentDataAggregateParams,
    type AgentDataGetParams as AgentDataGetParams,
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
    type ParseConfigurationUpdateParams as ParseConfigurationUpdateParams,
    type ParseConfigurationDeleteParams as ParseConfigurationDeleteParams,
    type ParseConfigurationGetParams as ParseConfigurationGetParams,
    type ParseConfigurationGetLatestParams as ParseConfigurationGetLatestParams,
    type ParseConfigurationGetParseConfigurationsParams as ParseConfigurationGetParseConfigurationsParams,
    type ParseConfigurationParseConfigurationsParams as ParseConfigurationParseConfigurationsParams,
    type ParseConfigurationQueryParams as ParseConfigurationQueryParams,
    type ParseConfigurationUpdateParseConfigurationsParams as ParseConfigurationUpdateParseConfigurationsParams,
  };

  export {
    Spreadsheet as Spreadsheet,
    type SpreadsheetJob as SpreadsheetJob,
    type SpreadsheetParsingConfig as SpreadsheetParsingConfig,
  };

  export {
    Directories as Directories,
    type DirectoryCreateResponse as DirectoryCreateResponse,
    type DirectoryUpdateResponse as DirectoryUpdateResponse,
    type DirectoryListResponse as DirectoryListResponse,
    type DirectoryGetResponse as DirectoryGetResponse,
    type DirectoryListResponsesPaginatedClassifyJobs as DirectoryListResponsesPaginatedClassifyJobs,
    type DirectoryCreateParams as DirectoryCreateParams,
    type DirectoryUpdateParams as DirectoryUpdateParams,
    type DirectoryListParams as DirectoryListParams,
    type DirectoryDeleteParams as DirectoryDeleteParams,
    type DirectoryGetParams as DirectoryGetParams,
  };
}

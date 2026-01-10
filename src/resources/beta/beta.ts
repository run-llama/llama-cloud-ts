// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentDataAPI from './agent-data';
import {
  AgentData,
  AgentDataAgentDataParams,
  AgentDataAggregateParams,
  AgentDataAggregateResponse,
  AgentDataDeleteByQueryParams,
  AgentDataDeleteByQueryResponse,
  AgentDataDeleteParams,
  AgentDataDeleteResponse,
  AgentDataGetParams,
  AgentDataSearchParams,
  AgentDataSearchResponse,
  AgentDataUpdateParams,
} from './agent-data';
import * as ParseConfigurationsAPI from './parse-configurations';
import {
  ParseConfiguration,
  ParseConfigurationCreate,
  ParseConfigurationDeleteParams,
  ParseConfigurationGetParams,
  ParseConfigurationGetParseConfigurationsParams,
  ParseConfigurationParseConfigurationsParams,
  ParseConfigurationQueryResponse,
  ParseConfigurationUpdateParams,
  ParseConfigurations,
} from './parse-configurations';
import * as SheetsAPI from './sheets';
import {
  SheetCreateParams,
  SheetDeleteJobParams,
  SheetDeleteJobResponse,
  SheetGetParams,
  SheetGetResultTableParams,
  SheetListParams,
  Sheets,
  SheetsJob,
  SheetsJobsPaginatedClassifyJobs,
  SheetsParsingConfig,
} from './sheets';
import * as SplitAPI from './split';
import {
  Split,
  SplitCategory,
  SplitCreateParams,
  SplitCreateResponse,
  SplitDocumentInput,
  SplitGetParams,
  SplitGetResponse,
  SplitListParams,
  SplitListResponse,
  SplitListResponsesPaginatedClassifyJobs,
  SplitResultResponse,
  SplitSegmentResponse,
} from './split';
import * as BatchAPI from './batch/batch';
import {
  Batch,
  BatchCancelParams,
  BatchCancelResponse,
  BatchCreateParams,
  BatchCreateResponse,
  BatchGetStatusParams,
  BatchGetStatusResponse,
  BatchListParams,
  BatchListResponse,
  BatchListResponsesPaginatedBatchItems,
} from './batch/batch';
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
  parseConfigurations: ParseConfigurationsAPI.ParseConfigurations =
    new ParseConfigurationsAPI.ParseConfigurations(this._client);
  sheets: SheetsAPI.Sheets = new SheetsAPI.Sheets(this._client);
  directories: DirectoriesAPI.Directories = new DirectoriesAPI.Directories(this._client);
  batch: BatchAPI.Batch = new BatchAPI.Batch(this._client);
  split: SplitAPI.Split = new SplitAPI.Split(this._client);
}

Beta.ParseConfigurations = ParseConfigurations;
Beta.Sheets = Sheets;
Beta.Directories = Directories;
Beta.Batch = Batch;
Beta.Split = Split;

export declare namespace Beta {
  export {
    type AgentData as AgentData,
    type AgentDataDeleteResponse as AgentDataDeleteResponse,
    type AgentDataAggregateResponse as AgentDataAggregateResponse,
    type AgentDataDeleteByQueryResponse as AgentDataDeleteByQueryResponse,
    type AgentDataSearchResponse as AgentDataSearchResponse,
    type AgentDataUpdateParams as AgentDataUpdateParams,
    type AgentDataDeleteParams as AgentDataDeleteParams,
    type AgentDataAgentDataParams as AgentDataAgentDataParams,
    type AgentDataAggregateParams as AgentDataAggregateParams,
    type AgentDataDeleteByQueryParams as AgentDataDeleteByQueryParams,
    type AgentDataGetParams as AgentDataGetParams,
    type AgentDataSearchParams as AgentDataSearchParams,
  };

  export {
    ParseConfigurations as ParseConfigurations,
    type ParseConfiguration as ParseConfiguration,
    type ParseConfigurationCreate as ParseConfigurationCreate,
    type ParseConfigurationQueryResponse as ParseConfigurationQueryResponse,
    type ParseConfigurationUpdateParams as ParseConfigurationUpdateParams,
    type ParseConfigurationDeleteParams as ParseConfigurationDeleteParams,
    type ParseConfigurationGetParams as ParseConfigurationGetParams,
    type ParseConfigurationGetParseConfigurationsParams as ParseConfigurationGetParseConfigurationsParams,
    type ParseConfigurationParseConfigurationsParams as ParseConfigurationParseConfigurationsParams,
  };

  export {
    Sheets as Sheets,
    type SheetsJob as SheetsJob,
    type SheetsParsingConfig as SheetsParsingConfig,
    type SheetDeleteJobResponse as SheetDeleteJobResponse,
    type SheetsJobsPaginatedClassifyJobs as SheetsJobsPaginatedClassifyJobs,
    type SheetCreateParams as SheetCreateParams,
    type SheetListParams as SheetListParams,
    type SheetDeleteJobParams as SheetDeleteJobParams,
    type SheetGetParams as SheetGetParams,
    type SheetGetResultTableParams as SheetGetResultTableParams,
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

  export {
    Batch as Batch,
    type BatchCreateResponse as BatchCreateResponse,
    type BatchListResponse as BatchListResponse,
    type BatchCancelResponse as BatchCancelResponse,
    type BatchGetStatusResponse as BatchGetStatusResponse,
    type BatchListResponsesPaginatedBatchItems as BatchListResponsesPaginatedBatchItems,
    type BatchCreateParams as BatchCreateParams,
    type BatchListParams as BatchListParams,
    type BatchCancelParams as BatchCancelParams,
    type BatchGetStatusParams as BatchGetStatusParams,
  };

  export {
    Split as Split,
    type SplitCategory as SplitCategory,
    type SplitDocumentInput as SplitDocumentInput,
    type SplitResultResponse as SplitResultResponse,
    type SplitSegmentResponse as SplitSegmentResponse,
    type SplitCreateResponse as SplitCreateResponse,
    type SplitListResponse as SplitListResponse,
    type SplitGetResponse as SplitGetResponse,
    type SplitListResponsesPaginatedClassifyJobs as SplitListResponsesPaginatedClassifyJobs,
    type SplitCreateParams as SplitCreateParams,
    type SplitListParams as SplitListParams,
    type SplitGetParams as SplitGetParams,
  };
}

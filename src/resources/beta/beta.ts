// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentDataAPI from './agent-data';
import {
  AgentData,
  AgentDataAggregateParams,
  AgentDataAggregateResponse,
  AgentDataAggregateResponsesPaginatedCursorPost,
  AgentDataCreateParams,
  AgentDataDeleteByQueryParams,
  AgentDataDeleteByQueryResponse,
  AgentDataDeleteParams,
  AgentDataDeleteResponse,
  AgentDataGetParams,
  AgentDataPaginatedCursorPost,
  AgentDataSearchParams,
  AgentDataUpdateParams,
} from './agent-data';
import * as ChatAPI from './chat';
import {
  Chat,
  ChatCreateParams,
  ChatCreateResponse,
  ChatDeleteParams,
  ChatGetSummaryParams,
  ChatGetSummaryResponse,
  ChatListParams,
  ChatListResponse,
  ChatListResponsesPaginatedCursor,
  ChatRetrieveParams,
  ChatRetrieveResponse,
  ChatSetTitleParams,
  ChatSetTitleResponse,
  ChatStreamParams,
  ChatStreamResponse,
} from './chat';
import * as IndexesAPI from './indexes';
import {
  IndexCreateParams,
  IndexCreateResponse,
  IndexDeleteParams,
  IndexGetParams,
  IndexGetResponse,
  IndexSyncParams,
  IndexSyncResponse,
  Indexes,
} from './indexes';
import * as RetrievalAPI from './retrieval';
import {
  Retrieval,
  RetrievalGrepParams,
  RetrievalGrepResponse,
  RetrievalReadParams,
  RetrievalReadResponse,
  RetrievalRetrieveParams,
  RetrievalRetrieveResponse,
  RetrievalSearchParams,
  RetrievalSearchResponse,
} from './retrieval';
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
  SheetsJobsPaginatedCursor,
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
  SplitListResponsesPaginatedCursor,
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
  DirectoryListResponsesPaginatedCursor,
  DirectoryUpdateParams,
  DirectoryUpdateResponse,
} from './directories/directories';

export class Beta extends APIResource {
  indexes: IndexesAPI.Indexes = new IndexesAPI.Indexes(this._client);
  retrieval: RetrievalAPI.Retrieval = new RetrievalAPI.Retrieval(this._client);
  chat: ChatAPI.Chat = new ChatAPI.Chat(this._client);
  agentData: AgentDataAPI.AgentData = new AgentDataAPI.AgentData(this._client);
  sheets: SheetsAPI.Sheets = new SheetsAPI.Sheets(this._client);
  directories: DirectoriesAPI.Directories = new DirectoriesAPI.Directories(this._client);
  batch: BatchAPI.Batch = new BatchAPI.Batch(this._client);
  split: SplitAPI.Split = new SplitAPI.Split(this._client);
}

Beta.Indexes = Indexes;
Beta.Retrieval = Retrieval;
Beta.Chat = Chat;
Beta.Sheets = Sheets;
Beta.Directories = Directories;
Beta.Batch = Batch;
Beta.Split = Split;

export declare namespace Beta {
  export {
    Indexes as Indexes,
    type IndexCreateResponse as IndexCreateResponse,
    type IndexGetResponse as IndexGetResponse,
    type IndexSyncResponse as IndexSyncResponse,
    type IndexCreateParams as IndexCreateParams,
    type IndexDeleteParams as IndexDeleteParams,
    type IndexGetParams as IndexGetParams,
    type IndexSyncParams as IndexSyncParams,
  };

  export {
    Retrieval as Retrieval,
    type RetrievalRetrieveResponse as RetrievalRetrieveResponse,
    type RetrievalGrepResponse as RetrievalGrepResponse,
    type RetrievalReadResponse as RetrievalReadResponse,
    type RetrievalSearchResponse as RetrievalSearchResponse,
    type RetrievalRetrieveParams as RetrievalRetrieveParams,
    type RetrievalGrepParams as RetrievalGrepParams,
    type RetrievalReadParams as RetrievalReadParams,
    type RetrievalSearchParams as RetrievalSearchParams,
  };

  export {
    Chat as Chat,
    type ChatCreateResponse as ChatCreateResponse,
    type ChatRetrieveResponse as ChatRetrieveResponse,
    type ChatListResponse as ChatListResponse,
    type ChatGetSummaryResponse as ChatGetSummaryResponse,
    type ChatSetTitleResponse as ChatSetTitleResponse,
    type ChatStreamResponse as ChatStreamResponse,
    type ChatListResponsesPaginatedCursor as ChatListResponsesPaginatedCursor,
    type ChatCreateParams as ChatCreateParams,
    type ChatRetrieveParams as ChatRetrieveParams,
    type ChatListParams as ChatListParams,
    type ChatDeleteParams as ChatDeleteParams,
    type ChatGetSummaryParams as ChatGetSummaryParams,
    type ChatSetTitleParams as ChatSetTitleParams,
    type ChatStreamParams as ChatStreamParams,
  };

  export {
    type AgentData as AgentData,
    type AgentDataDeleteResponse as AgentDataDeleteResponse,
    type AgentDataAggregateResponse as AgentDataAggregateResponse,
    type AgentDataDeleteByQueryResponse as AgentDataDeleteByQueryResponse,
    type AgentDataAggregateResponsesPaginatedCursorPost as AgentDataAggregateResponsesPaginatedCursorPost,
    type AgentDataPaginatedCursorPost as AgentDataPaginatedCursorPost,
    type AgentDataCreateParams as AgentDataCreateParams,
    type AgentDataUpdateParams as AgentDataUpdateParams,
    type AgentDataDeleteParams as AgentDataDeleteParams,
    type AgentDataAggregateParams as AgentDataAggregateParams,
    type AgentDataDeleteByQueryParams as AgentDataDeleteByQueryParams,
    type AgentDataGetParams as AgentDataGetParams,
    type AgentDataSearchParams as AgentDataSearchParams,
  };

  export {
    Sheets as Sheets,
    type SheetsJob as SheetsJob,
    type SheetsParsingConfig as SheetsParsingConfig,
    type SheetDeleteJobResponse as SheetDeleteJobResponse,
    type SheetsJobsPaginatedCursor as SheetsJobsPaginatedCursor,
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
    type DirectoryListResponsesPaginatedCursor as DirectoryListResponsesPaginatedCursor,
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
    type SplitListResponsesPaginatedCursor as SplitListResponsesPaginatedCursor,
    type SplitCreateParams as SplitCreateParams,
    type SplitListParams as SplitListParams,
    type SplitGetParams as SplitGetParams,
  };
}

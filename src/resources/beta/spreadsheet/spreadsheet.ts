// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as JobsAPI from './jobs/jobs';
import {
  JobCreateParams,
  JobListParams,
  JobRetrieveParams,
  Jobs,
  SpreadsheetJob,
  SpreadsheetJobsPaginatedClassifyJobs,
  SpreadsheetParsingConfig,
} from './jobs/jobs';

export class Spreadsheet extends APIResource {
  jobs: JobsAPI.Jobs = new JobsAPI.Jobs(this._client);
}

Spreadsheet.Jobs = Jobs;

export declare namespace Spreadsheet {
  export {
    Jobs as Jobs,
    type SpreadsheetJob as SpreadsheetJob,
    type SpreadsheetParsingConfig as SpreadsheetParsingConfig,
    type SpreadsheetJobsPaginatedClassifyJobs as SpreadsheetJobsPaginatedClassifyJobs,
    type JobCreateParams as JobCreateParams,
    type JobRetrieveParams as JobRetrieveParams,
    type JobListParams as JobListParams,
  };
}

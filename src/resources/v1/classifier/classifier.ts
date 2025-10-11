// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as JobsAPI from './jobs';
import {
  ClassifierRule,
  ClassifyJob,
  ClassifyParsingConfiguration,
  JobCreateParams,
  JobGetResultsParams,
  JobGetResultsResponse,
  JobListParams,
  JobListResponse,
  JobRetrieveParams,
  Jobs,
} from './jobs';

export class Classifier extends APIResource {
  jobs: JobsAPI.Jobs = new JobsAPI.Jobs(this._client);
}

Classifier.Jobs = Jobs;

export declare namespace Classifier {
  export {
    Jobs as Jobs,
    type ClassifierRule as ClassifierRule,
    type ClassifyJob as ClassifyJob,
    type ClassifyParsingConfiguration as ClassifyParsingConfiguration,
    type JobListResponse as JobListResponse,
    type JobGetResultsResponse as JobGetResultsResponse,
    type JobCreateParams as JobCreateParams,
    type JobRetrieveParams as JobRetrieveParams,
    type JobListParams as JobListParams,
    type JobGetResultsParams as JobGetResultsParams,
  };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Metronome extends APIResource {
  /**
   * Get the invoices for a given organization.
   */
  getDashboard(
    query: MetronomeGetDashboardParams,
    options?: RequestOptions,
  ): APIPromise<MetronomeGetDashboardResponse> {
    return this._client.get('/api/v1/billing/metronome/dashboard', { query, ...options });
  }
}

export interface MetronomeGetDashboardResponse {
  url: string;
}

export interface MetronomeGetDashboardParams {
  organization_id: string;

  /**
   * The type of dashboard to get
   */
  dashboard_type?: 'invoices' | 'usage';
}

export declare namespace Metronome {
  export {
    type MetronomeGetDashboardResponse as MetronomeGetDashboardResponse,
    type MetronomeGetDashboardParams as MetronomeGetDashboardParams,
  };
}

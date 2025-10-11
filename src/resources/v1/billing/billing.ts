// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as MetronomeAPI from './metronome';
import { Metronome, MetronomeGetDashboardParams, MetronomeGetDashboardResponse } from './metronome';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Billing extends APIResource {
  metronome: MetronomeAPI.Metronome = new MetronomeAPI.Metronome(this._client);

  /**
   * Create a new customer portal session.
   */
  createCustomerPortalSession(
    params: BillingCreateCustomerPortalSessionParams,
    options?: RequestOptions,
  ): APIPromise<string> {
    const { organization_id, ...body } = params;
    return this._client.post('/api/v1/billing/customer-portal-session', {
      query: { organization_id },
      body,
      ...options,
    });
  }

  /**
   * Create a new setup intent and and a customer session.
   *
   * See https://docs.stripe.com/payments/existing-customers?platform=web&ui=elements
   */
  createIntentAndCustomerSession(
    params: BillingCreateIntentAndCustomerSessionParams,
    options?: RequestOptions,
  ): APIPromise<BillingCreateIntentAndCustomerSessionResponse> {
    const { plan_name, organization_id } = params;
    return this._client.post('/api/v1/billing/create-intent-and-customer-session', {
      query: { plan_name, organization_id },
      ...options,
    });
  }

  /**
   * Downgrade Plan
   */
  downgradePlan(
    params: BillingDowngradePlanParams,
    options?: RequestOptions,
  ): APIPromise<BillingDowngradePlanResponse> {
    const { organization_id } = params;
    return this._client.post('/api/v1/billing/downgrade-plan', { query: { organization_id }, ...options });
  }
}

export type BillingCreateCustomerPortalSessionResponse = string;

export interface BillingCreateIntentAndCustomerSessionResponse {
  client_secret: string;

  customer_session_client_secret: string | null;
}

export type BillingDowngradePlanResponse = { [key: string]: 'success' };

export interface BillingCreateCustomerPortalSessionParams {
  /**
   * Body param:
   */
  return_url: string;

  /**
   * Query param:
   */
  organization_id?: string | null;
}

export interface BillingCreateIntentAndCustomerSessionParams {
  plan_name:
    | 'free'
    | 'llama_parse'
    | 'enterprise'
    | 'unknown'
    | 'free_contract'
    | 'pro'
    | 'enterprise_contract'
    | 'enterprise_poc'
    | 'free_v1'
    | 'starter_v1'
    | 'pro_v1';

  organization_id?: string | null;
}

export interface BillingDowngradePlanParams {
  organization_id: string;
}

Billing.Metronome = Metronome;

export declare namespace Billing {
  export {
    type BillingCreateCustomerPortalSessionResponse as BillingCreateCustomerPortalSessionResponse,
    type BillingCreateIntentAndCustomerSessionResponse as BillingCreateIntentAndCustomerSessionResponse,
    type BillingDowngradePlanResponse as BillingDowngradePlanResponse,
    type BillingCreateCustomerPortalSessionParams as BillingCreateCustomerPortalSessionParams,
    type BillingCreateIntentAndCustomerSessionParams as BillingCreateIntentAndCustomerSessionParams,
    type BillingDowngradePlanParams as BillingDowngradePlanParams,
  };

  export {
    Metronome as Metronome,
    type MetronomeGetDashboardResponse as MetronomeGetDashboardResponse,
    type MetronomeGetDashboardParams as MetronomeGetDashboardParams,
  };
}

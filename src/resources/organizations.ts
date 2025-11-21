// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Organizations extends APIResource {
  /**
   * List organizations for a user.
   */
  list(options?: RequestOptions): APIPromise<OrganizationListResponse> {
    return this._client.get('/api/v1/organizations', options);
  }

  /**
   * Get an organization by ID.
   */
  get(organizationID: string, options?: RequestOptions): APIPromise<Organization> {
    return this._client.get(path`/api/v1/organizations/${organizationID}`, options);
  }
}

/**
 * Schema for an organization.
 */
export interface Organization {
  /**
   * Unique identifier
   */
  id: string;

  /**
   * A name for the organization.
   */
  name: string;

  /**
   * Creation datetime
   */
  created_at?: string | null;

  /**
   * Feature flags for the organization.
   */
  feature_flags?: { [key: string]: unknown } | null;

  /**
   * [Deprecated] Whether the organization is a Parse Premium customer.
   */
  parse_plan_level?: 'DEFAULT' | 'PREMIUM';

  /**
   * The Stripe customer ID for the organization.
   */
  stripe_customer_id?: string | null;

  /**
   * Update datetime
   */
  updated_at?: string | null;
}

export type OrganizationListResponse = Array<Organization>;

export declare namespace Organizations {
  export { type Organization as Organization, type OrganizationListResponse as OrganizationListResponse };
}

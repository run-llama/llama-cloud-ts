// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DefaultAPI from './default';
import { Default } from './default';
import * as UsersAPI from './users/users';
import {
  UserCreateParams,
  UserCreateResponse,
  UserDeleteParams,
  UserListResponse,
  UserOrganization,
  Users,
} from './users/users';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Organizations extends APIResource {
  default: DefaultAPI.Default = new DefaultAPI.Default(this._client);
  users: UsersAPI.Users = new UsersAPI.Users(this._client);

  /**
   * Create a new organization.
   */
  create(body: OrganizationCreateParams, options?: RequestOptions): APIPromise<Organization> {
    return this._client.post('/api/v1/organizations', { body, ...options });
  }

  /**
   * Update an existing organization.
   */
  update(
    organizationID: string,
    body: OrganizationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<Organization> {
    return this._client.put(path`/api/v1/organizations/${organizationID}`, { body, ...options });
  }

  /**
   * List organizations for a user.
   */
  list(options?: RequestOptions): APIPromise<OrganizationListResponse> {
    return this._client.get('/api/v1/organizations', options);
  }

  /**
   * Delete an organization by ID.
   */
  delete(organizationID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/api/v1/organizations/${organizationID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get an organization by ID.
   */
  get(organizationID: string, options?: RequestOptions): APIPromise<Organization> {
    return this._client.get(path`/api/v1/organizations/${organizationID}`, options);
  }

  /**
   * List all roles in an organization.
   */
  getRoles(organizationID: string, options?: RequestOptions): APIPromise<OrganizationGetRolesResponse> {
    return this._client.get(path`/api/v1/organizations/${organizationID}/roles`, options);
  }

  /**
   * Get usage for a specific organization.
   */
  getUsage(
    organizationID: string,
    query: OrganizationGetUsageParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UsageAndPlan> {
    return this._client.get(path`/api/v1/organizations/${organizationID}/usage`, { query, ...options });
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
   * Whether the organization is a Parse Premium customer.
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

/**
 * Schema for creating an organization.
 */
export interface OrganizationCreate {
  /**
   * A name for the organization.
   */
  name: string;
}

/**
 * Schema for a role.
 */
export interface Role {
  /**
   * Unique identifier
   */
  id: string;

  /**
   * A name for the role.
   */
  name: string;

  /**
   * The actual permissions of the role.
   */
  permissions: Array<Role.Permission>;

  /**
   * Creation datetime
   */
  created_at?: string | null;

  /**
   * Update datetime
   */
  updated_at?: string | null;
}

export namespace Role {
  /**
   * Schema for a permission.
   */
  export interface Permission {
    /**
     * Unique identifier
     */
    id: string;

    /**
     * Whether the permission is granted or not.
     */
    access: boolean;

    /**
     * A description for the permission.
     */
    description: string | null;

    /**
     * A name for the permission.
     */
    name: string;

    /**
     * Creation datetime
     */
    created_at?: string | null;

    /**
     * Update datetime
     */
    updated_at?: string | null;
  }
}

export interface UsageAndPlan {
  plan: UsageAndPlan.Plan;

  /**
   * Response model
   */
  usage: UsageAndPlan.Usage;
}

export namespace UsageAndPlan {
  export interface Plan {
    limits: Plan.Limits;

    metronome_plan_type: 'plan' | 'contract';

    metronome_rate_card_alias: string | null;

    name:
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

    plan_frequency: 'MONTHLY' | 'QUARTERLY' | 'ANNUAL';

    /**
     * The ID of the plan in Metronome
     */
    id?: string | null;

    /**
     * The current billing period
     */
    current_billing_period?: Plan.CurrentBillingPeriod | null;

    /**
     * The date the plan ends on
     */
    ending_before?: string | null;

    /**
     * The number of payment failures for this organization
     */
    failure_count?: number;

    /**
     * Whether the organization has a failed payment that requires support contact
     */
    is_payment_failed?: boolean;

    /**
     * The ID of the customer in Metronome
     */
    metronome_customer_id?: string | null;

    recurring_credits?: Array<Plan.RecurringCredit> | null;

    /**
     * The date the plan starts on
     */
    starting_on?: string | null;
  }

  export namespace Plan {
    export interface Limits {
      /**
       * Whether usage is allowed after credit grants are exhausted
       */
      allow_pay_as_you_go: boolean;

      max_concurrent_index_jobs: number | null;

      max_concurrent_parse_jobs_other: number | null;

      max_concurrent_parse_jobs_premium: number | null;

      max_data_sinks: number | null;

      max_data_sources: number | null;

      max_embedding_models: number | null;

      max_extraction_agents: number | null;

      max_extraction_jobs: number | null;

      max_extraction_runs: number | null;

      max_files_per_index: number | null;

      max_indexes: number | null;

      max_monthly_invoice_total_usd: number | null;

      max_organizations: number | null;

      max_pages_per_index: number | null;

      max_projects: number | null;

      max_published_agents: number | null;

      max_report_agent_sessions: number | null;

      max_users: number | null;

      mfa_enabled: boolean;

      sso_enabled: boolean;

      subscription_cost_usd: number;

      /**
       * The amount of USD cents at which a soft alert should be triggered
       */
      spending_soft_alerts_usd_cents?: Array<number> | null;
    }

    /**
     * The current billing period
     */
    export interface CurrentBillingPeriod {
      end_date: string;

      start_date: string;
    }

    export interface RecurringCredit {
      credit_amount: number;

      credit_type: RecurringCredit.CreditType;

      name: string;

      priority: number;

      /**
       * The ID of the product in Metronome used to represent the credit grant
       */
      product_id: string;

      /**
       * The fraction of the credit that will roll over to the next period, between 0 and
       * 1
       */
      rollover_fraction: number;

      /**
       * How many billing periods the credit grant will last for
       */
      periods_duration?: number;
    }

    export namespace RecurringCredit {
      export interface CreditType {
        id: string;

        name: string;
      }
    }
  }

  /**
   * Response model
   */
  export interface Usage {
    active_alerts?: Array<
      | 'plan_spend_limit_exceeded'
      | 'plan_spend_limit_soft_alert'
      | 'configured_spend_limit_exceeded'
      | 'free_credits_exhausted'
      | 'internal_spending_alert'
      | 'has_spending_alert'
    >;

    active_free_credits_usage?: Array<Usage.ActiveFreeCreditsUsage>;

    current_invoice_total_usd_cents?: number | null;

    total_extraction_agents?: number;

    total_indexed_pages?: number;

    total_indexes?: number;

    total_users?: number;
  }

  export namespace Usage {
    export interface ActiveFreeCreditsUsage {
      expires_at: string;

      grant_name: string;

      remaining_balance: number;

      starting_balance: number;
    }
  }
}

export type OrganizationListResponse = Array<Organization>;

export type OrganizationGetRolesResponse = Array<Role>;

export interface OrganizationCreateParams {
  /**
   * A name for the organization.
   */
  name: string;
}

export interface OrganizationUpdateParams {
  /**
   * A name for the organization.
   */
  name: string;

  /**
   * Feature flags for the organization.
   */
  feature_flags?: { [key: string]: unknown } | null;
}

export interface OrganizationGetUsageParams {
  get_current_invoice_total?: boolean;
}

Organizations.Default = Default;
Organizations.Users = Users;

export declare namespace Organizations {
  export {
    type Organization as Organization,
    type OrganizationCreate as OrganizationCreate,
    type Role as Role,
    type UsageAndPlan as UsageAndPlan,
    type OrganizationListResponse as OrganizationListResponse,
    type OrganizationGetRolesResponse as OrganizationGetRolesResponse,
    type OrganizationCreateParams as OrganizationCreateParams,
    type OrganizationUpdateParams as OrganizationUpdateParams,
    type OrganizationGetUsageParams as OrganizationGetUsageParams,
  };

  export { Default as Default };

  export {
    Users as Users,
    type UserOrganization as UserOrganization,
    type UserCreateResponse as UserCreateResponse,
    type UserListResponse as UserListResponse,
    type UserCreateParams as UserCreateParams,
    type UserDeleteParams as UserDeleteParams,
  };
}

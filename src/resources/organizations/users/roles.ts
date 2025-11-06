// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as OrganizationsAPI from '../organizations';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Roles extends APIResource {
  /**
   * Assign a role to a user in an organization.
   */
  create(
    organizationID: string,
    body: RoleCreateParams,
    options?: RequestOptions,
  ): APIPromise<UserOrganizationRole> {
    return this._client.put(path`/api/v1/organizations/${organizationID}/users/roles`, { body, ...options });
  }

  /**
   * Get the role of a user in an organization.
   */
  list(
    organizationID: string,
    query: RoleListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UserOrganizationRole | null> {
    return this._client.get(path`/api/v1/organizations/${organizationID}/users/roles`, { query, ...options });
  }
}

/**
 * Schema for a user's role in an organization.
 */
export interface UserOrganizationRole {
  /**
   * Unique identifier
   */
  id: string;

  /**
   * The organization's ID.
   */
  organization_id: string;

  /**
   * The role.
   */
  role: OrganizationsAPI.Role;

  /**
   * The user's ID.
   */
  user_id: string;

  /**
   * Creation datetime
   */
  created_at?: string | null;

  /**
   * The project ID scope.
   */
  project_ids?: Array<string> | null;

  /**
   * Update datetime
   */
  updated_at?: string | null;
}

export interface RoleCreateParams {
  /**
   * The organization's ID.
   */
  body_organization_id: string;

  /**
   * The role's ID.
   */
  role_id: string;

  /**
   * The user's ID.
   */
  user_id: string;
}

export interface RoleListParams {
  project_id?: string | null;
}

export declare namespace Roles {
  export {
    type UserOrganizationRole as UserOrganizationRole,
    type RoleCreateParams as RoleCreateParams,
    type RoleListParams as RoleListParams,
  };
}

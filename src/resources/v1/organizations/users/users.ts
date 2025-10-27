// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ProjectsAPI from './projects';
import {
  ProjectCreateParams,
  ProjectCreateResponse,
  ProjectDeleteParams,
  ProjectDeleteResponse,
  ProjectListParams,
  ProjectListResponse,
  Projects,
} from './projects';
import * as RolesAPI from './roles';
import { RoleCreateParams, RoleListParams, Roles, UserOrganizationRole } from './roles';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Users extends APIResource {
  roles: RolesAPI.Roles = new RolesAPI.Roles(this._client);
  projects: ProjectsAPI.Projects = new ProjectsAPI.Projects(this._client);

  /**
   * Add a user to an organization.
   */
  create(
    organizationID: string,
    params: UserCreateParams,
    options?: RequestOptions,
  ): APIPromise<UserCreateResponse> {
    const { body } = params;
    return this._client.put(path`/api/v1/organizations/${organizationID}/users`, { body: body, ...options });
  }

  /**
   * Get all users in an organization.
   */
  list(organizationID: string, options?: RequestOptions): APIPromise<UserListResponse> {
    return this._client.get(path`/api/v1/organizations/${organizationID}/users`, options);
  }

  /**
   * Remove users from an organization.
   */
  delete(memberUserID: string, params: UserDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { organization_id, body } = params;
    return this._client.delete(path`/api/v1/organizations/${organization_id}/users/${memberUserID}`, {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * Schema for a user's membership to an organization.
 */
export interface UserOrganization {
  /**
   * Unique identifier
   */
  id: string;

  /**
   * The organization's ID.
   */
  organization_id: string;

  /**
   * The roles of the user in the organization.
   */
  roles: Array<RolesAPI.UserOrganizationRole>;

  /**
   * Creation datetime
   */
  created_at?: string | null;

  /**
   * The user's email address.
   */
  email?: string | null;

  /**
   * The email address of the user who added the user to the organization.
   */
  invited_by_user_email?: string | null;

  /**
   * The user ID of the user who added the user to the organization.
   */
  invited_by_user_id?: string | null;

  /**
   * Whether the user's membership is pending account signup.
   */
  pending?: boolean;

  /**
   * Update datetime
   */
  updated_at?: string | null;

  /**
   * The user's ID.
   */
  user_id?: string | null;
}

export type UserCreateResponse = Array<UserOrganization>;

export type UserListResponse = Array<UserOrganization>;

export interface UserCreateParams {
  body: Array<UserCreateParams.Body>;
}

export namespace UserCreateParams {
  /**
   * Schema for creating a user's membership to an organization.
   */
  export interface Body {
    /**
     * The project IDs to add the user to.
     */
    project_ids: Array<string> | null;

    /**
     * The user's email address.
     */
    email?: string | null;

    /**
     * The role ID to assign to the user.
     */
    role_id?: string | null;

    /**
     * The user's ID.
     */
    user_id?: string | null;
  }
}

export interface UserDeleteParams {
  /**
   * Path param:
   */
  organization_id: string;

  /**
   * Body param:
   */
  body?: Array<string> | null;
}

Users.Roles = Roles;
Users.Projects = Projects;

export declare namespace Users {
  export {
    type UserOrganization as UserOrganization,
    type UserCreateResponse as UserCreateResponse,
    type UserListResponse as UserListResponse,
    type UserCreateParams as UserCreateParams,
    type UserDeleteParams as UserDeleteParams,
  };

  export {
    Roles as Roles,
    type UserOrganizationRole as UserOrganizationRole,
    type RoleCreateParams as RoleCreateParams,
    type RoleListParams as RoleListParams,
  };

  export {
    Projects as Projects,
    type ProjectCreateResponse as ProjectCreateResponse,
    type ProjectListResponse as ProjectListResponse,
    type ProjectDeleteResponse as ProjectDeleteResponse,
    type ProjectCreateParams as ProjectCreateParams,
    type ProjectListParams as ProjectListParams,
    type ProjectDeleteParams as ProjectDeleteParams,
  };
}

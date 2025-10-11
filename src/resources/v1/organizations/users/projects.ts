// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ProjectsAPI from '../../projects';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Projects extends APIResource {
  /**
   * Add a user to a project.
   */
  create(userID: string, params: ProjectCreateParams, options?: RequestOptions): APIPromise<unknown> {
    const { organization_id, project_id } = params;
    return this._client.put(path`/api/v1/organizations/${organization_id}/users/${userID}/projects`, {
      query: { project_id },
      ...options,
    });
  }

  /**
   * List all projects for a user in an organization.
   */
  list(userID: string, params: ProjectListParams, options?: RequestOptions): APIPromise<ProjectListResponse> {
    const { organization_id } = params;
    return this._client.get(path`/api/v1/organizations/${organization_id}/users/${userID}/projects`, options);
  }

  /**
   * Remove a user from a project.
   */
  delete(projectID: string, params: ProjectDeleteParams, options?: RequestOptions): APIPromise<unknown> {
    const { organization_id, user_id } = params;
    return this._client.delete(
      path`/api/v1/organizations/${organization_id}/users/${user_id}/projects/${projectID}`,
      options,
    );
  }
}

export type ProjectCreateResponse = unknown;

export type ProjectListResponse = Array<ProjectsAPI.Project>;

export type ProjectDeleteResponse = unknown;

export interface ProjectCreateParams {
  /**
   * Path param:
   */
  organization_id: string;

  /**
   * Query param:
   */
  project_id?: string | null;
}

export interface ProjectListParams {
  organization_id: string;
}

export interface ProjectDeleteParams {
  organization_id: string;

  user_id: string;
}

export declare namespace Projects {
  export {
    type ProjectCreateResponse as ProjectCreateResponse,
    type ProjectListResponse as ProjectListResponse,
    type ProjectDeleteResponse as ProjectDeleteResponse,
    type ProjectCreateParams as ProjectCreateParams,
    type ProjectListParams as ProjectListParams,
    type ProjectDeleteParams as ProjectDeleteParams,
  };
}

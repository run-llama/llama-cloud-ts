// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as OrganizationsAPI from './organizations/organizations';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Projects extends APIResource {
  /**
   * Create a new project.
   */
  create(params: ProjectCreateParams, options?: RequestOptions): APIPromise<Project> {
    const { organization_id, ...body } = params;
    return this._client.post('/api/v1/projects', { query: { organization_id }, body, ...options });
  }

  /**
   * Update an existing project.
   */
  update(projectID: string, params: ProjectUpdateParams, options?: RequestOptions): APIPromise<Project> {
    const { organization_id, ...body } = params;
    return this._client.put(path`/api/v1/projects/${projectID}`, {
      query: { organization_id },
      body,
      ...options,
    });
  }

  /**
   * List projects or get one by name
   */
  list(
    query: ProjectListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProjectListResponse> {
    return this._client.get('/api/v1/projects', { query, ...options });
  }

  /**
   * Delete a project by ID.
   */
  delete(
    projectID: string,
    params: ProjectDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { organization_id } = params ?? {};
    return this._client.delete(path`/api/v1/projects/${projectID}`, {
      query: { organization_id },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get a project by ID.
   */
  get(
    projectID: string,
    query: ProjectGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Project> {
    return this._client.get(path`/api/v1/projects/${projectID}`, { query, ...options });
  }

  /**
   * Get the current project.
   */
  getCurrent(
    query: ProjectGetCurrentParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Project> {
    return this._client.get('/api/v1/projects/current', { query, ...options });
  }

  /**
   * Get usage for a project
   */
  getUsage(
    projectID: string,
    query: ProjectGetUsageParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OrganizationsAPI.UsageAndPlan> {
    return this._client.get(path`/api/v1/projects/${projectID}/usage`, { query, ...options });
  }

  /**
   * List all deployments for a project.
   */
  listAgents(projectID: string, options?: RequestOptions): APIPromise<AgentDeploymentList> {
    return this._client.get(path`/api/v1/projects/${projectID}/agents`, options);
  }

  /**
   * Sync deployments for a project.
   */
  syncAgents(projectID: string, options?: RequestOptions): APIPromise<AgentDeploymentList> {
    return this._client.post(path`/api/v1/projects/${projectID}/agents:sync`, options);
  }

  /**
   * Upsert a project. Updates if a project with the same name already exists.
   * Otherwise, creates a new project.
   */
  upsert(params: ProjectUpsertParams, options?: RequestOptions): APIPromise<Project> {
    const { organization_id, ...body } = params;
    return this._client.put('/api/v1/projects', { query: { organization_id }, body, ...options });
  }
}

export interface AgentDeploymentList {
  /**
   * List of deployments
   */
  deployments: Array<AgentDeploymentList.Deployment>;
}

export namespace AgentDeploymentList {
  export interface Deployment {
    /**
     * Deployment ID. Prefixed with dpl-
     */
    id: string;

    /**
     * Base URL of the deployed app
     */
    base_url: string;

    /**
     * Timestamp when the app deployment was created
     */
    created_at: string;

    /**
     * Identifier of the deployed app
     */
    deployment_name: string;

    /**
     * Project ID
     */
    project_id: string;

    /**
     * Timestamp when the app deployment was last updated
     */
    updated_at: string;

    /**
     * API key ID
     */
    api_key_id?: string | null;

    /**
     * Thumbnail URL of the deployed app
     */
    thumbnail_url?: string | null;
  }
}

/**
 * Schema for a project.
 */
export interface Project {
  /**
   * Unique identifier
   */
  id: string;

  name: string;

  /**
   * The Organization ID the project is under.
   */
  organization_id: string;

  ad_hoc_eval_dataset_id?: string | null;

  /**
   * Creation datetime
   */
  created_at?: string | null;

  /**
   * Whether this project is the default project for the user.
   */
  is_default?: boolean;

  /**
   * Update datetime
   */
  updated_at?: string | null;
}

/**
 * Schema for creating a project.
 */
export interface ProjectCreate {
  name: string;
}

export type ProjectListResponse = Array<Project>;

export interface ProjectCreateParams {
  /**
   * Body param:
   */
  name: string;

  /**
   * Query param:
   */
  organization_id?: string | null;
}

export interface ProjectUpdateParams {
  /**
   * Body param:
   */
  name: string;

  /**
   * Query param:
   */
  organization_id?: string | null;
}

export interface ProjectListParams {
  organization_id?: string | null;

  project_name?: string | null;
}

export interface ProjectDeleteParams {
  organization_id?: string | null;
}

export interface ProjectGetParams {
  organization_id?: string | null;
}

export interface ProjectGetCurrentParams {
  organization_id?: string | null;

  project_id?: string | null;
}

export interface ProjectGetUsageParams {
  get_current_invoice_total?: boolean;

  organization_id?: string | null;
}

export interface ProjectUpsertParams {
  /**
   * Body param:
   */
  name: string;

  /**
   * Query param:
   */
  organization_id?: string | null;
}

export declare namespace Projects {
  export {
    type AgentDeploymentList as AgentDeploymentList,
    type Project as Project,
    type ProjectCreate as ProjectCreate,
    type ProjectListResponse as ProjectListResponse,
    type ProjectCreateParams as ProjectCreateParams,
    type ProjectUpdateParams as ProjectUpdateParams,
    type ProjectListParams as ProjectListParams,
    type ProjectDeleteParams as ProjectDeleteParams,
    type ProjectGetParams as ProjectGetParams,
    type ProjectGetCurrentParams as ProjectGetCurrentParams,
    type ProjectGetUsageParams as ProjectGetUsageParams,
    type ProjectUpsertParams as ProjectUpsertParams,
  };
}

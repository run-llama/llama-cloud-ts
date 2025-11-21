// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Projects extends APIResource {
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

export type ProjectListResponse = Array<Project>;

export interface ProjectListParams {
  organization_id?: string | null;

  project_name?: string | null;
}

export interface ProjectGetParams {
  organization_id?: string | null;
}

export declare namespace Projects {
  export {
    type AgentDeploymentList as AgentDeploymentList,
    type Project as Project,
    type ProjectListResponse as ProjectListResponse,
    type ProjectListParams as ProjectListParams,
    type ProjectGetParams as ProjectGetParams,
  };
}

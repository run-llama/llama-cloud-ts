// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Auth extends APIResource {
  /**
   * Read Self
   */
  readSelf(options?: RequestOptions): APIPromise<AuthReadSelfResponse> {
    return this._client.get('/api/v1/auth/me', options);
  }
}

export interface AuthReadSelfResponse {
  id: string;

  email: string;

  /**
   * The user's custom claims.
   */
  claims?: AuthReadSelfResponse.Claims;

  /**
   * The user's creation date.
   */
  created_at?: string | null;

  /**
   * The user's first name.
   */
  first_name?: string | null;

  /**
   * The last login provider.
   */
  last_login_provider?: 'oidc' | 'basic' | 'no_auth';

  /**
   * The user's last name.
   */
  last_name?: string | null;

  /**
   * The user's name.
   */
  name?: string | null;

  /**
   * The restrictions on the user.
   */
  restrict?: AuthReadSelfResponse.Restrict | null;
}

export namespace AuthReadSelfResponse {
  /**
   * The user's custom claims.
   */
  export interface Claims {
    /**
     * Whether the user is allowed to delete organizations.
     */
    allow_org_deletion?: boolean;

    /**
     * Whether the user is allowed to access the app.
     */
    allowed_app?: boolean;

    /**
     * Whether the user is allowed to access the classifier feature.
     */
    allowed_classify?: boolean;

    /**
     * Whether the user is allowed to create organizations.
     */
    allowed_org_creation?: boolean;

    /**
     * Whether the user is allowed to access llama-report generation.
     */
    allowed_report?: boolean;

    /**
     * Whether the user is allowed to access the spreadsheet feature.
     */
    allowed_spreadsheet?: boolean;

    /**
     * Whether the user is allowed to access API data sources.
     */
    api_datasource_access?: boolean;

    /**
     * Whether the user is a test user for extraction. This will include additional
     * debug metadata and access to test endpoints.
     */
    extraction_test_user?: boolean;

    /**
     * The maximum number of document ingestion jobs the user can have in execution.
     */
    max_document_ingestion_jobs_in_execution?: number;

    /**
     * The maximum number of jobs the user can have in execution per job type.
     */
    max_jobs_in_execution_per_job_type?: number;

    /**
     * The maximum number of metadata update jobs the user can have in execution.
     */
    max_metadata_update_jobs_in_execution?: number;
  }

  /**
   * The restrictions on the user.
   */
  export interface Restrict {
    /**
     * The project ID to restrict the user to.
     */
    project_id: string | null;
  }
}

export declare namespace Auth {
  export { type AuthReadSelfResponse as AuthReadSelfResponse };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as OrganizationsAPI from './organizations';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Default extends APIResource {
  /**
   * Set the default organization for the user.
   */
  create(body: DefaultCreateParams, options?: RequestOptions): APIPromise<OrganizationsAPI.Organization> {
    return this._client.put('/api/v1/organizations/default', { body, ...options });
  }

  /**
   * Get the default organization for the user.
   */
  list(options?: RequestOptions): APIPromise<OrganizationsAPI.Organization> {
    return this._client.get('/api/v1/organizations/default', options);
  }
}

export interface DefaultCreateParams {
  /**
   * The organization's ID.
   */
  organization_id: string;
}

export declare namespace Default {
  export { type DefaultCreateParams as DefaultCreateParams };
}

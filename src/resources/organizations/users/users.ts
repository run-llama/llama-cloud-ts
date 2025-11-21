// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ProjectsAPI from './projects';
import { Projects } from './projects';
import * as RolesAPI from './roles';
import { Roles } from './roles';

export class Users extends APIResource {
  roles: RolesAPI.Roles = new RolesAPI.Roles(this._client);
  projects: ProjectsAPI.Projects = new ProjectsAPI.Projects(this._client);
}

Users.Roles = Roles;
Users.Projects = Projects;

export declare namespace Users {
  export { Roles as Roles };

  export { Projects as Projects };
}

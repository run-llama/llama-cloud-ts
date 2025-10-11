// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ParseAPI from './parse';
import { Parse, ParseUploadFileParams } from './parse';

export class V2alpha1 extends APIResource {
  parse: ParseAPI.Parse = new ParseAPI.Parse(this._client);
}

V2alpha1.Parse = Parse;

export declare namespace V2alpha1 {
  export { Parse as Parse, type ParseUploadFileParams as ParseUploadFileParams };
}

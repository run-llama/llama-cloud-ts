// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as MetronomeAPI from './metronome';
import { Metronome } from './metronome';

export class Billing extends APIResource {
  metronome: MetronomeAPI.Metronome = new MetronomeAPI.Metronome(this._client);
}

Billing.Metronome = Metronome;

export declare namespace Billing {
  export { Metronome as Metronome };
}

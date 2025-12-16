// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Parsing extends APIResource {
  /**
   * Upload and parse a file using multipart/form-data.
   */
  uploadFile(
    params: ParsingUploadFileParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ParsingJob> {
    const { organization_id, project_id } = params ?? {};
    return this._client.post('/api/v2alpha1/parse/upload', {
      query: { organization_id, project_id },
      ...options,
    });
  }
}

/**
 * Enum for representing the different available page error handling modes.
 */
export type FailPageMode = 'raw_text' | 'blank_page' | 'error_message';

/**
 * Enum for supported file extensions.
 */
export type LlamaParseSupportedFileExtensions =
  | '.pdf'
  | '.doc'
  | '.docx'
  | '.docm'
  | '.dot'
  | '.dotx'
  | '.dotm'
  | '.rtf'
  | '.wps'
  | '.wpd'
  | '.sxw'
  | '.stw'
  | '.sxg'
  | '.pages'
  | '.mw'
  | '.mcw'
  | '.uot'
  | '.uof'
  | '.uos'
  | '.uop'
  | '.ppt'
  | '.pptx'
  | '.pot'
  | '.pptm'
  | '.potx'
  | '.potm'
  | '.key'
  | '.odp'
  | '.odg'
  | '.otp'
  | '.fopd'
  | '.sxi'
  | '.sti'
  | '.epub'
  | '.jpg'
  | '.jpeg'
  | '.png'
  | '.gif'
  | '.bmp'
  | '.svg'
  | '.tiff'
  | '.webp'
  | '.html'
  | '.htm'
  | '.xls'
  | '.xlsx'
  | '.xlsm'
  | '.xlsb'
  | '.xlw'
  | '.csv'
  | '.dif'
  | '.sylk'
  | '.slk'
  | '.prn'
  | '.numbers'
  | '.et'
  | '.ods'
  | '.fods'
  | '.uos1'
  | '.uos2'
  | '.dbf'
  | '.wk1'
  | '.wk2'
  | '.wk3'
  | '.wk4'
  | '.wks'
  | '.wq1'
  | '.wq2'
  | '.wb1'
  | '.wb2'
  | '.wb3'
  | '.qpw'
  | '.xlr'
  | '.eth'
  | '.tsv';

/**
 * Response schema for a parsing job.
 */
export interface ParsingJob {
  id: string;

  /**
   * Enum for representing the status of a job
   */
  status: StatusEnum;

  error_code?: string | null;

  error_message?: string | null;
}

/**
 * Enum for representing the languages supported by the parser.
 */
export type ParsingLanguages =
  | 'af'
  | 'az'
  | 'bs'
  | 'cs'
  | 'cy'
  | 'da'
  | 'de'
  | 'en'
  | 'es'
  | 'et'
  | 'fr'
  | 'ga'
  | 'hr'
  | 'hu'
  | 'id'
  | 'is'
  | 'it'
  | 'ku'
  | 'la'
  | 'lt'
  | 'lv'
  | 'mi'
  | 'ms'
  | 'mt'
  | 'nl'
  | 'no'
  | 'oc'
  | 'pi'
  | 'pl'
  | 'pt'
  | 'ro'
  | 'rs_latin'
  | 'sk'
  | 'sl'
  | 'sq'
  | 'sv'
  | 'sw'
  | 'tl'
  | 'tr'
  | 'uz'
  | 'vi'
  | 'ar'
  | 'fa'
  | 'ug'
  | 'ur'
  | 'bn'
  | 'as'
  | 'mni'
  | 'ru'
  | 'rs_cyrillic'
  | 'be'
  | 'bg'
  | 'uk'
  | 'mn'
  | 'abq'
  | 'ady'
  | 'kbd'
  | 'ava'
  | 'dar'
  | 'inh'
  | 'che'
  | 'lbe'
  | 'lez'
  | 'tab'
  | 'tjk'
  | 'hi'
  | 'mr'
  | 'ne'
  | 'bh'
  | 'mai'
  | 'ang'
  | 'bho'
  | 'mah'
  | 'sck'
  | 'new'
  | 'gom'
  | 'sa'
  | 'bgc'
  | 'th'
  | 'ch_sim'
  | 'ch_tra'
  | 'ja'
  | 'ko'
  | 'ta'
  | 'te'
  | 'kn';

/**
 * Enum for representing the mode of parsing to be used.
 */
export type ParsingMode =
  | 'parse_page_without_llm'
  | 'parse_page_with_llm'
  | 'parse_page_with_lvm'
  | 'parse_page_with_agent'
  | 'parse_page_with_layout_agent'
  | 'parse_document_with_llm'
  | 'parse_document_with_lvm'
  | 'parse_document_with_agent';

/**
 * Enum for representing the status of a job
 */
export type StatusEnum = 'PENDING' | 'SUCCESS' | 'ERROR' | 'PARTIAL_SUCCESS' | 'CANCELLED';

export interface ParsingUploadFileParams {
  organization_id?: string | null;

  project_id?: string | null;
}

export declare namespace Parsing {
  export {
    type FailPageMode as FailPageMode,
    type LlamaParseSupportedFileExtensions as LlamaParseSupportedFileExtensions,
    type ParsingJob as ParsingJob,
    type ParsingLanguages as ParsingLanguages,
    type ParsingMode as ParsingMode,
    type StatusEnum as StatusEnum,
    type ParsingUploadFileParams as ParsingUploadFileParams,
  };
}

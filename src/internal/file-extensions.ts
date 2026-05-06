import { LlamaParseSupportedFileExtensions } from '../resources/parsing';

/**
 * File extensions that don't indicate actual file content and should be replaced
 * with proper extensions or trigger magic-number detection on the backend.
 */
export const UNTRUSTWORTHY_EXTENSIONS = new Set([
  '.tmp',
  '.temp',
  '.bin',
  '.dat',
  '.bak',
  '.download',
  '.partial',
  '.part',
  '.crdownload',
]);

/**
 * Set of all supported file extensions for LlamaParse.
 */
export const SUPPORTED_EXTENSIONS: Set<string> = new Set<string>([
  '.pdf',
  '.abw',
  '.awt',
  '.cgm',
  '.cwk',
  '.doc',
  '.docm',
  '.docx',
  '.dot',
  '.dotm',
  '.dotx',
  '.fodg',
  '.fodp',
  '.fopd',
  '.fodt',
  '.fb2',
  '.hwp',
  '.lwp',
  '.mcw',
  '.mw',
  '.mwd',
  '.odf',
  '.odt',
  '.otg',
  '.ott',
  '.pages',
  '.pbd',
  '.psw',
  '.rtf',
  '.sda',
  '.sdd',
  '.sdp',
  '.sdw',
  '.sgl',
  '.std',
  '.stw',
  '.sxd',
  '.sxg',
  '.sxm',
  '.sxw',
  '.uof',
  '.uop',
  '.uot',
  '.vor',
  '.wpd',
  '.wps',
  '.wpt',
  '.wri',
  '.wn',
  '.xml',
  '.zabw',
  '.key',
  '.odp',
  '.odg',
  '.otp',
  '.pot',
  '.potm',
  '.potx',
  '.ppt',
  '.pptm',
  '.pptx',
  '.sti',
  '.sxi',
  '.vsd',
  '.vsdm',
  '.vsdx',
  '.vdx',
  '.bmp',
  '.gif',
  '.jpg',
  '.jpeg',
  '.png',
  '.svg',
  '.tif',
  '.tiff',
  '.webp',
  '.htm',
  '.html',
  '.xhtm',
  '.csv',
  '.dbf',
  '.dif',
  '.et',
  '.eth',
  '.fods',
  '.numbers',
  '.ods',
  '.ots',
  '.prn',
  '.qpw',
  '.slk',
  '.stc',
  '.sxc',
  '.sylk',
  '.tsv',
  '.uos1',
  '.uos2',
  '.uos',
  '.wb1',
  '.wb2',
  '.wb3',
  '.wk1',
  '.wk2',
  '.wk3',
  '.wk4',
  '.wks',
  '.wq1',
  '.wq2',
  '.xlr',
  '.xls',
  '.xlsb',
  '.xlsm',
  '.xlsx',
  '.xlw',
  '.azw',
  '.azw3',
  '.azw4',
  '.cb7',
  '.cbc',
  '.cbr',
  '.cbz',
  '.chm',
  '.djvu',
  '.epub',
  '.fbz',
  '.htmlz',
  '.lit',
  '.lrf',
  '.md',
  '.mobi',
  '.pdb',
  '.pml',
  '.prc',
  '.rb',
  '.snb',
  '.tcr',
  '.txtz',
  '.m4a',
  '.mp3',
  '.mp4',
  '.mpeg',
  '.mpga',
  '.wav',
  '.webm',
]);

/**
 * Common MIME type to extension mappings for inferring proper extensions.
 */
const MIME_TO_EXTENSION: Record<string, LlamaParseSupportedFileExtensions> = {
  'application/pdf': '.pdf',
  'application/msword': '.doc',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document': '.docx',
  'application/vnd.ms-powerpoint': '.ppt',
  'application/vnd.openxmlformats-officedocument.presentationml.presentation': '.pptx',
  'application/vnd.ms-excel': '.xls',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': '.xlsx',
  'text/html': '.html',
  'text/csv': '.csv',
  'text/plain': '.txt' as LlamaParseSupportedFileExtensions,
  'text/markdown': '.md',
  'image/png': '.png',
  'image/jpeg': '.jpeg',
  'image/gif': '.gif',
  'image/webp': '.webp',
  'image/bmp': '.bmp',
  'image/svg+xml': '.svg',
  'image/tiff': '.tiff',
  'application/epub+zip': '.epub',
  'application/rtf': '.rtf',
  'text/rtf': '.rtf',
};

/**
 * Gets the file extension from a filename (lowercase, including the dot).
 */
export function getFileExtension(filename: string): string {
  const lastDot = filename.lastIndexOf('.');
  if (lastDot === -1 || lastDot === filename.length - 1) {
    return '';
  }
  return filename.slice(lastDot).toLowerCase();
}

/**
 * Checks if the file extension indicates a temporary or non-content-bearing file.
 * These extensions should ideally be replaced with proper extensions for best results.
 */
export function isUntrustworthyExtension(extension: string): boolean {
  return UNTRUSTWORTHY_EXTENSIONS.has(extension.toLowerCase());
}

/**
 * Checks if the file extension is supported by LlamaParse.
 */
export function isSupportedExtension(extension: string): boolean {
  return SUPPORTED_EXTENSIONS.has(extension.toLowerCase());
}

/**
 * Suggests a proper file extension based on the MIME type.
 * Returns undefined if the MIME type is not recognized.
 */
export function suggestExtensionFromMimeType(
  mimeType: string | undefined,
): LlamaParseSupportedFileExtensions | undefined {
  if (!mimeType) return undefined;
  const normalized = mimeType.toLowerCase().split(';')[0]?.trim();
  return normalized ? MIME_TO_EXTENSION[normalized] : undefined;
}

/**
 * Creates a sanitized filename by replacing untrustworthy extensions with
 * a suggested extension based on MIME type, or returns the original filename
 * if the extension is already valid.
 *
 * @param filename - The original filename (e.g., "tmp123.tmp")
 * @param mimeType - Optional MIME type to infer the proper extension
 * @returns The sanitized filename with a proper extension
 *
 * @example
 * ```typescript
 * // Replace .tmp with inferred extension from MIME type
 * sanitizeFileName('document.tmp', 'application/pdf');
 * // Returns: 'document.pdf'
 *
 * // Keep valid extensions unchanged
 * sanitizeFileName('document.pdf');
 * // Returns: 'document.pdf'
 *
 * // Remove untrustworthy extension when no MIME type provided
 * sanitizeFileName('document.tmp');
 * // Returns: 'document' (warns about missing extension)
 * ```
 */
export function sanitizeFileName(filename: string, mimeType?: string): string {
  const extension = getFileExtension(filename);

  if (!extension) {
    return filename;
  }

  if (!isUntrustworthyExtension(extension)) {
    if (!isSupportedExtension(extension)) {
      console.warn(
        `[llama-cloud] File extension "${extension}" is not in the list of supported extensions. ` +
          `The file may be rejected. Consider using a supported extension or providing the file's actual type.`,
      );
    }
    return filename;
  }

  const suggestedExt = suggestExtensionFromMimeType(mimeType);
  const baseName = filename.slice(0, filename.length - extension.length);

  if (suggestedExt) {
    console.warn(
      `[llama-cloud] File has untrustworthy extension "${extension}". ` +
        `Replacing with "${suggestedExt}" based on MIME type "${mimeType}".`,
    );
    return baseName + suggestedExt;
  }

  console.warn(
    `[llama-cloud] File has untrustworthy extension "${extension}" (e.g., from a temp file). ` +
      `For best results, provide a filename with the actual file extension (e.g., ".pdf", ".docx"). ` +
      `You can pass a MIME type to sanitizeFileName() to automatically infer the extension.`,
  );

  return baseName;
}

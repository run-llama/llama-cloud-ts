import {
  getFileExtension,
  isUntrustworthyExtension,
  isSupportedExtension,
  suggestExtensionFromMimeType,
  sanitizeFileName,
  UNTRUSTWORTHY_EXTENSIONS,
  SUPPORTED_EXTENSIONS,
} from '@llamaindex/llama-cloud/core/uploads';

describe('getFileExtension', () => {
  it('extracts extension from filename', () => {
    expect(getFileExtension('document.pdf')).toBe('.pdf');
    expect(getFileExtension('my-file.docx')).toBe('.docx');
    expect(getFileExtension('image.PNG')).toBe('.png');
  });

  it('returns empty string when no extension', () => {
    expect(getFileExtension('filename')).toBe('');
    expect(getFileExtension('filename.')).toBe('');
  });

  it('handles multiple dots', () => {
    expect(getFileExtension('my.file.pdf')).toBe('.pdf');
    expect(getFileExtension('archive.tar.gz')).toBe('.gz');
  });
});

describe('isUntrustworthyExtension', () => {
  it('identifies temp file extensions', () => {
    expect(isUntrustworthyExtension('.tmp')).toBe(true);
    expect(isUntrustworthyExtension('.temp')).toBe(true);
    expect(isUntrustworthyExtension('.bin')).toBe(true);
    expect(isUntrustworthyExtension('.dat')).toBe(true);
    expect(isUntrustworthyExtension('.bak')).toBe(true);
    expect(isUntrustworthyExtension('.download')).toBe(true);
    expect(isUntrustworthyExtension('.partial')).toBe(true);
    expect(isUntrustworthyExtension('.part')).toBe(true);
    expect(isUntrustworthyExtension('.crdownload')).toBe(true);
  });

  it('returns false for valid extensions', () => {
    expect(isUntrustworthyExtension('.pdf')).toBe(false);
    expect(isUntrustworthyExtension('.docx')).toBe(false);
    expect(isUntrustworthyExtension('.png')).toBe(false);
  });

  it('is case insensitive', () => {
    expect(isUntrustworthyExtension('.TMP')).toBe(true);
    expect(isUntrustworthyExtension('.Tmp')).toBe(true);
  });
});

describe('isSupportedExtension', () => {
  it('recognizes supported extensions', () => {
    expect(isSupportedExtension('.pdf')).toBe(true);
    expect(isSupportedExtension('.docx')).toBe(true);
    expect(isSupportedExtension('.pptx')).toBe(true);
    expect(isSupportedExtension('.xlsx')).toBe(true);
    expect(isSupportedExtension('.png')).toBe(true);
    expect(isSupportedExtension('.jpg')).toBe(true);
    expect(isSupportedExtension('.html')).toBe(true);
    expect(isSupportedExtension('.csv')).toBe(true);
    expect(isSupportedExtension('.md')).toBe(true);
  });

  it('returns false for unsupported extensions', () => {
    expect(isSupportedExtension('.xyz')).toBe(false);
    expect(isSupportedExtension('.tmp')).toBe(false);
    expect(isSupportedExtension('.foo')).toBe(false);
  });

  it('is case insensitive', () => {
    expect(isSupportedExtension('.PDF')).toBe(true);
    expect(isSupportedExtension('.Pdf')).toBe(true);
  });
});

describe('suggestExtensionFromMimeType', () => {
  it('returns correct extension for common MIME types', () => {
    expect(suggestExtensionFromMimeType('application/pdf')).toBe('.pdf');
    expect(suggestExtensionFromMimeType('application/vnd.openxmlformats-officedocument.wordprocessingml.document')).toBe('.docx');
    expect(suggestExtensionFromMimeType('application/vnd.openxmlformats-officedocument.presentationml.presentation')).toBe('.pptx');
    expect(suggestExtensionFromMimeType('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')).toBe('.xlsx');
    expect(suggestExtensionFromMimeType('text/html')).toBe('.html');
    expect(suggestExtensionFromMimeType('text/csv')).toBe('.csv');
    expect(suggestExtensionFromMimeType('image/png')).toBe('.png');
    expect(suggestExtensionFromMimeType('image/jpeg')).toBe('.jpeg');
  });

  it('handles MIME types with charset', () => {
    expect(suggestExtensionFromMimeType('application/pdf; charset=utf-8')).toBe('.pdf');
    expect(suggestExtensionFromMimeType('text/html; charset=utf-8')).toBe('.html');
  });

  it('returns undefined for unknown MIME types', () => {
    expect(suggestExtensionFromMimeType('application/unknown')).toBe(undefined);
    expect(suggestExtensionFromMimeType('')).toBe(undefined);
    expect(suggestExtensionFromMimeType(undefined)).toBe(undefined);
  });
});

describe('sanitizeFileName', () => {
  let warnSpy: jest.SpyInstance;

  beforeEach(() => {
    warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
  });

  afterEach(() => {
    warnSpy.mockRestore();
  });

  it('replaces untrustworthy extension when MIME type provided', () => {
    expect(sanitizeFileName('document.tmp', 'application/pdf')).toBe('document.pdf');
    expect(sanitizeFileName('file.temp', 'image/png')).toBe('file.png');
    expect(sanitizeFileName('data.bin', 'text/csv')).toBe('data.csv');
  });

  it('removes untrustworthy extension when no MIME type available', () => {
    expect(sanitizeFileName('document.tmp')).toBe('document');
    expect(sanitizeFileName('file.temp')).toBe('file');
  });

  it('keeps valid extensions unchanged', () => {
    expect(sanitizeFileName('document.pdf')).toBe('document.pdf');
    expect(sanitizeFileName('image.png', 'application/pdf')).toBe('image.png');
  });

  it('handles files without extension', () => {
    expect(sanitizeFileName('document')).toBe('document');
    expect(sanitizeFileName('noext', 'application/pdf')).toBe('noext');
  });

  it('warns about untrustworthy extensions', () => {
    sanitizeFileName('document.tmp', 'application/pdf');
    expect(warnSpy).toHaveBeenCalledWith(
      expect.stringContaining('untrustworthy extension ".tmp"'),
    );
  });

  it('warns about unsupported but trustworthy extensions', () => {
    sanitizeFileName('document.xyz');
    expect(warnSpy).toHaveBeenCalledWith(
      expect.stringContaining('not in the list of supported extensions'),
    );
  });
});

describe('extension sets', () => {
  it('UNTRUSTWORTHY_EXTENSIONS contains expected values', () => {
    expect(UNTRUSTWORTHY_EXTENSIONS.size).toBeGreaterThan(0);
    expect(UNTRUSTWORTHY_EXTENSIONS.has('.tmp')).toBe(true);
  });

  it('SUPPORTED_EXTENSIONS contains expected values', () => {
    expect(SUPPORTED_EXTENSIONS.size).toBeGreaterThan(0);
    expect(SUPPORTED_EXTENSIONS.has('.pdf')).toBe(true);
    expect(SUPPORTED_EXTENSIONS.has('.docx')).toBe(true);
  });

  it('UNTRUSTWORTHY_EXTENSIONS and SUPPORTED_EXTENSIONS do not overlap', () => {
    for (const ext of UNTRUSTWORTHY_EXTENSIONS) {
      expect(SUPPORTED_EXTENSIONS.has(ext)).toBe(false);
    }
  });
});

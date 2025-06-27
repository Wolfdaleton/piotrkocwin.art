import * as exifr from 'exifr';

export async function getImageDateFromExif(imageUrl: string): Promise<string | null> {
  const response = await fetch(imageUrl);
  const blob = await response.blob();
  try {
    const exif = await exifr.parse(blob, ['DateTimeOriginal']);
    if (exif && exif.DateTimeOriginal) {
      // exif.DateTimeOriginal is a Date object
      const date = exif.DateTimeOriginal;
      // Format as YYYY-MM-DD
      return date.toISOString().slice(0, 10);
    }
    return null;
  } catch {
    return null;
  }
}
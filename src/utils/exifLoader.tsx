import * as exifr from 'exifr';

export async function getImageDateFromExif(imageUrl: string): Promise<string | null> {
  const response = await fetch(imageUrl);
  const blob = await response.blob();
  try {
    const exif = await exifr.parse(blob, ['DateTimeOriginal']);
    if (exif && exif.DateTimeOriginal) {
    
      const date = exif.DateTimeOriginal;
      return date.toISOString().slice(0, 10);
    }
    return null;
  } catch {
    return null;
  }
}
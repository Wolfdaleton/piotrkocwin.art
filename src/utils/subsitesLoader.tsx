export function loadSubsites() {
  const galleries = import.meta.glob('../subsites/*/*.{jpg,png,jpeg,gif,webp}', { eager: true, as: 'url' });
  const pdfFiles = import.meta.glob('../subsites/*/*.pdf', { eager: true, as: 'url' });
  const textFile = import.meta.glob('../subsites/*/*.txt', { eager: true, as: 'raw' });
  const subsites: { [folder: string]: { name: string, images: string[], pdfs: string[], description: string[] } } = {};
const htmlFiles = import.meta.glob('../subsites/*/*.html', {
  eager: true,
  as: 'raw',
});

  for (const path in galleries) {
    const match = path.match(/\/subsites\/([^/]+)\/([^/]+\.(jpg|png|jpeg|gif|webp))$/);
    if (match) {
      const [ , folder ] = match;
      if (!subsites[folder]) subsites[folder] = { name: folder, images: [], pdfs: [], description: [] };
      subsites[folder].images.push((galleries as any)[path]);
    }
  }

  for (const path in pdfFiles) {
    const match = path.match(/\/subsites\/([^/]+)\/([^/]+\.pdf)$/);
    if (match) {
      const [ , folder ] = match;
      if (!subsites[folder]) subsites[folder] = { name: folder, images: [], pdfs: [], description: [] };
      subsites[folder].pdfs.push((pdfFiles as any)[path]);
    }
  }


for (const path in htmlFiles) {
  const match = path.match(/\/subsites\/([^/]+)\/([^/]+\.html)$/);
  if (match) {
    const [, folder] = match;
    if (!subsites[folder]) subsites[folder] = { name: folder, images: [], pdfs: [], description: [] };
    subsites[folder].description.push((htmlFiles as any)[path]);
  }
}
  return Object.values(subsites);
}
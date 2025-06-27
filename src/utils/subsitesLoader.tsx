

export function loadSubsites() {
  const galleries = import.meta.glob('../subsites/*/*.{jpg,png,jpeg,gif,webp}', { eager: true, as: 'url' });
  const textFile = import.meta.glob('../subsites/*/*.txt', { eager: true, as: 'raw' });
  const subsites: { [folder: string]: { name: string, images: string[], description: string[]} } = {};


  for (const path in galleries) {
    const match = path.match(/\/subsites\/([^/]+)\/([^/]+\.(jpg|png|jpeg|gif|webp))$/);
    if (match) {
      const [ , folder, file ] = match;
      if (!subsites[folder]) subsites[folder] = { name: folder, images: [], description: [] };
      subsites[folder].images.push((galleries as any)[path]);
    }
  }
  for (const path in textFile) {
    const textMatch = path.match(/\/subsites\/([^/]+)\/([^/]+\.txt)$/);
    if (textMatch) {
      const [ , folder ] = textMatch;
      if (!subsites[folder]) subsites[folder] = { name: folder, images: [], description: [] };
      subsites[folder].description.push((textFile as any)[path]);

    }
  }
 
  return Object.values(subsites);
}
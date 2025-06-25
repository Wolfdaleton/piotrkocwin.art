

export function loadSubsites() {
  const galleries = import.meta.glob('../subsites/*/*.{jpg,png,jpeg,gif,webp}', { eager: true, as: 'url' });
  const subsites: { [folder: string]: { name: string, images: string[] } } = {};

  for (const path in galleries) {
    const match = path.match(/\/subsites\/([^/]+)\/([^/]+\.(jpg|png|jpeg|gif|webp))$/);
    if (match) {
      const [ , folder, file ] = match;
      if (!subsites[folder]) subsites[folder] = { name: folder, images: [] };
      subsites[folder].images.push((galleries as any)[path]);
    }
  }
  return Object.values(subsites);
}
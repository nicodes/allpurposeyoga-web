import type { ImageMetadata } from 'astro';

const modules = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/images/**/*.{jpeg,jpg,png}',
  { eager: true }
);

const byPath = new Map(
  Object.entries(modules).map(([path, mod]) => [path.replace('/src/assets', ''), mod.default])
);

export function resolveImage(src: string): ImageMetadata {
  const img = byPath.get(src);
  if (!img) throw new Error(`Unknown image: ${src}`);
  return img;
}

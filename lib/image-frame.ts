import { imageMeta } from "@/data/image-meta";

export type ImageFrame = "wide" | "portrait" | "standard";

/** Frame choice from the file's real ratio. Adding a photo needs no layout edit. */
export function imageFrame(src: string): ImageFrame {
  const meta = imageMeta[src];
  if (!meta || meta.height === 0) return "standard";
  const ratio = meta.width / meta.height;
  if (ratio >= 1.7) return "wide";
  if (ratio < 1) return "portrait";
  return "standard";
}

/** Landscape photographs span two gallery columns. Portraits stay in one. */
export function spansGalleryColumns(src: string): boolean {
  const meta = imageMeta[src];
  if (!meta || meta.height === 0) return false;
  return meta.width / meta.height >= 1.35;
}

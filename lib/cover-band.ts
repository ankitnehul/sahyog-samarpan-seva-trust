import { imageFrame } from "@/lib/image-frame";

/**
 * Cover bands may not place type across a face.
 * Portrait files crop too hard to keep a face clear of the motto.
 * The Dussehra photograph fills the frame with the children, so it stays
 * a contained document image and the band falls back to a solid surface.
 * The Diwali 2026 Balghar group photograph is framed the same way.
 */
const FACE_FILLED = new Set<string>([
  "/images/our-work/dussehra-balghar-2026.jpg",
  "/images/our-work/diwali-balghar-2026.jpg",
]);

export function allowsCoverBand(src: string | undefined): src is string {
  if (!src) return false;
  if (imageFrame(src) === "portrait") return false;
  if (FACE_FILLED.has(src)) return false;
  return true;
}

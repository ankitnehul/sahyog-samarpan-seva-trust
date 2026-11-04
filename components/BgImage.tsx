import { getImageProps } from "next/image";
import { imageMeta } from "@/data/image-meta";

export interface BgImageProps {
  /** Wide / desktop source under /public. */
  src: string;
  position?: string;
  /** Portrait or square source for narrow screens. Falls back to `src`. */
  mobileSrc?: string;
  mobilePosition?: string;
  /** The first screen's image: fetched at high priority, never lazy. */
  priority?: boolean;
  /** One slow zoom on load. Only for a source that is not upscaled. */
  zoom?: boolean;
  /** Slight scroll drift on large screens with a pointer. */
  parallax?: boolean;
}

const fallbackSize = { width: 1200, height: 900 };

/**
 * Photograph as the ground of a section, with the navy scrim over it.
 * Phones download only the mobile source; wider screens only the wide one.
 * The parent supplies the solid navy ground, so a broken file leaves a navy band.
 */
export default function BgImage({
  src,
  position,
  mobileSrc,
  mobilePosition,
  priority = false,
  zoom = false,
  parallax = false,
}: BgImageProps) {
  const make = (file: string) => {
    const meta = imageMeta[file] ?? fallbackSize;
    return getImageProps({
      src: file,
      alt: "",
      width: meta.width,
      height: meta.height,
      sizes: "100vw",
      loading: priority ? "eager" : "lazy",
      fetchPriority: priority ? "high" : "auto",
    }).props;
  };

  const wide = make(src);
  const narrow = mobileSrc ? make(mobileSrc) : wide;
  const narrowPosition = mobilePosition ?? position ?? "center";

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className={`bg-layer absolute inset-0 ${zoom ? "bg-zoom" : ""} ${parallax ? "bg-parallax" : ""}`}>
        <picture>
          {mobileSrc && <source media="(min-width: 768px)" srcSet={wide.srcSet} sizes="100vw" />}
          <img
            {...narrow}
            alt=""
            className="bg-img absolute inset-0 h-full w-full object-cover"
            style={
              {
                "--pos-narrow": narrowPosition,
                "--pos-wide": position ?? "center",
              } as React.CSSProperties
            }
          />
        </picture>
      </div>
      <div className="surface-scrim absolute inset-0" />
    </div>
  );
}

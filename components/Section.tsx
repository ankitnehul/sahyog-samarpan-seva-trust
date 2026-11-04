import type { ReactNode } from "react";
import BgImage, { type BgImageProps } from "@/components/BgImage";

interface SectionProps {
  /** paper and paper-deep read; navy contrasts; photo is navy with a photograph behind it. */
  tone?: "paper" | "paper-deep" | "navy" | "photo";
  /** Used when tone is "photo". Without it the band is solid navy. */
  bg?: BgImageProps;
  as?: "section" | "header";
  /** Fill the first screen. The band grows, never clips, when the content is taller. */
  screen?: boolean;
  /** Tighter padding for the top of a page. */
  size?: "default" | "header";
  id?: string;
  className?: string;
  children: ReactNode;
}

const surface = {
  paper: "surface-paper",
  "paper-deep": "surface-paper-deep",
  navy: "surface-ink",
  photo: "surface-ink",
} as const;

const padding = {
  default: "py-12 md:py-20",
  header: "py-10 md:py-14",
} as const;

/**
 * The one section wrapper. Replaces hand-written surface classes and wrappers.
 * Content is centred in a 7xl column with the site's side gutters.
 */
export default function Section({
  tone = "paper",
  bg,
  as: Tag = "section",
  screen = false,
  size = "default",
  id,
  className = "",
  children,
}: SectionProps) {
  const showPhoto = tone === "photo" && bg;
  return (
    <Tag
      id={id}
      className={`relative flex flex-col ${surface[tone]} ${
        screen ? "min-h-[85svh] justify-end md:min-h-[calc(100svh-var(--header-offset))]" : ""
      } ${className}`}
    >
      {showPhoto && <BgImage {...bg} />}
      <div
        className={`relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${padding[size]}`}
      >
        {children}
      </div>
    </Tag>
  );
}

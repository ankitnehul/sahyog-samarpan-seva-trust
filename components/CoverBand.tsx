"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import { allowsCoverBand } from "@/lib/cover-band";

interface CoverBandProps {
  src?: string;
  position?: string;
  priority?: boolean;
  /** Solid surface when the photograph is missing, rejected, or broken. */
  fallback: "navy" | "paper";
  /** Fill the first screen. Home opening uses this for navy as well as a photograph. */
  screen?: boolean;
  as?: "section" | "header";
  children: ReactNode;
}

/**
 * Photograph as the ground of a section, with a navy scrim.
 * A rejected or broken file renders the fallback surface instead.
 */
export default function CoverBand({
  src,
  position,
  priority = false,
  fallback,
  screen = false,
  as: Tag = "section",
  children,
}: CoverBandProps) {
  const [failed, setFailed] = useState(false);
  const showPhoto = allowsCoverBand(src) && !failed;
  const surface = showPhoto ? "surface-photo" : fallback === "paper" ? "surface-paper" : "surface-ink";
  const tall = showPhoto || screen;

  return (
    <Tag className={`relative flex flex-col ${surface} ${screen ? "band-screen" : ""}`}>
      {showPhoto && src && (
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <Image
            src={src}
            alt=""
            fill
            priority={priority}
            sizes="100vw"
            className="object-cover"
            style={position ? { objectPosition: position } : undefined}
            onError={() => setFailed(true)}
          />
          <div className="surface-scrim absolute inset-0" />
        </div>
      )}
      <div
        className={
          tall
            ? `relative z-10 flex flex-1 flex-col ${showPhoto ? "justify-end" : "justify-center"}`
            : "relative z-10"
        }
      >
        {children}
      </div>
    </Tag>
  );
}

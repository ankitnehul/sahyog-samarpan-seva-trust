"use client";

import { useState } from "react";
import Image from "next/image";
import { imageMeta } from "@/data/image-meta";

interface ContentImageProps {
  src: string;
  alt: string;
  sizes: string;
  /** Contain shows the whole photograph. Cover is only for a deliberate crop. */
  fit?: "contain" | "cover";
  position?: string;
  priority?: boolean;
  /**
   * Fixed width / height box (for example 3 / 2 for a card thumbnail).
   * Omit it and the box follows the photograph's own ratio.
   */
  ratio?: number;
  className?: string;
}

const fallback = { width: 1200, height: 900 };

/**
 * Subject image: keeps its real aspect ratio (or a fixed thumbnail ratio)
 * and stays in place if the file fails.
 */
export default function ContentImage({
  src,
  alt,
  sizes,
  fit = "contain",
  position,
  priority = false,
  ratio,
  className = "",
}: ContentImageProps) {
  const [failed, setFailed] = useState(false);
  const meta = imageMeta[src] ?? fallback;
  const boxRatio = ratio ?? meta.width / meta.height;
  const fitClass = fit === "cover" ? "object-cover" : "object-contain";

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className="flex w-full items-center justify-center bg-paper-deep px-6 py-10 text-center text-sm leading-6 text-ink-soft"
        style={{ aspectRatio: String(boxRatio) }}
      >
        Photograph unavailable
      </div>
    );
  }

  if (ratio) {
    return (
      <div
        className="relative w-full overflow-hidden bg-paper-deep"
        style={{ aspectRatio: String(ratio) }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          preload={priority}
          onError={() => setFailed(true)}
          className={`${fitClass} ${className}`}
          style={position ? { objectPosition: position } : undefined}
        />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={meta.width}
      height={meta.height}
      sizes={sizes}
      preload={priority}
      onError={() => setFailed(true)}
      className={`h-auto w-full bg-paper-deep ${fitClass} ${className}`}
      style={position ? { objectPosition: position } : undefined}
    />
  );
}

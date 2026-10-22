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
  className?: string;
}

const fallback = { width: 1200, height: 900 };

/**
 * Editorial image that keeps its real aspect ratio and stays in place if the file fails.
 */
export default function ContentImage({
  src,
  alt,
  sizes,
  fit = "contain",
  position,
  priority = false,
  className = "",
}: ContentImageProps) {
  const [failed, setFailed] = useState(false);
  const meta = imageMeta[src] ?? fallback;

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className="flex w-full items-center justify-center bg-paper-deep px-6 py-10 text-center text-sm leading-6 text-ink-soft"
        style={{ aspectRatio: `${meta.width} / ${meta.height}` }}
      >
        Photograph unavailable
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
      priority={priority}
      onError={() => setFailed(true)}
      className={`h-auto w-full bg-paper-deep ${
        fit === "cover" ? "object-cover" : "object-contain"
      } ${className}`}
      style={position ? { objectPosition: position } : undefined}
    />
  );
}

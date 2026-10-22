"use client";

import { useState } from "react";
import Image from "next/image";

interface AvatarProps {
  name: string;
  photo?: string;
  /**
   * Portrait frame is 3:4. The photograph is contained, not cropped,
   * so a square or wider source keeps the whole face visible.
   */
  position?: string;
}

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
}

export default function Avatar({ name, photo, position }: AvatarProps) {
  const [failed, setFailed] = useState(false);
  const showImage = Boolean(photo && !failed);

  return (
    <div className="relative aspect-[3/4] w-full bg-paper-deep">
      {showImage && photo ? (
        <Image
          src={photo}
          alt={name}
          fill
          sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 20rem"
          className="object-contain"
          style={position ? { objectPosition: position } : undefined}
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="flex h-full items-center justify-center" aria-label={name}>
          <span className="font-display-en text-4xl font-medium text-brand-navy">
            {getInitials(name)}
          </span>
        </div>
      )}
    </div>
  );
}

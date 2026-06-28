"use client";

import { useState } from "react";
import Image from "next/image";

interface AvatarProps {
  name: string;
  photo?: string;
  /** Passport-style portrait (3:4) vs round thumbnail. */
  variant?: "passport" | "round";
}

/** Returns up to two initials from a name, e.g. "Shubham Madke" -> "SM". */
function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
}

export default function Avatar({ name, photo, variant = "passport" }: AvatarProps) {
  // If the image fails to load (file not added yet), fall back to initials.
  const [failed, setFailed] = useState(false);
  const showImage = photo && !failed;

  const shape =
    variant === "passport"
      ? "aspect-[3/4] w-full rounded-lg"
      : "h-16 w-16 rounded-full";

  if (showImage) {
    return (
      <div className={`relative overflow-hidden bg-brand-cream ${shape}`}>
        <Image
          src={photo}
          alt={name}
          fill
          sizes="(max-width: 768px) 50vw, 200px"
          className="object-cover"
          onError={() => setFailed(true)}
        />
      </div>
    );
  }

  return (
    <div
      className={`flex items-center justify-center bg-brand-navy/10 ${shape}`}
      aria-label={name}
    >
      <span
        className={`font-semibold text-brand-navy ${
          variant === "passport" ? "text-4xl" : "text-lg"
        }`}
      >
        {getInitials(name)}
      </span>
    </div>
  );
}

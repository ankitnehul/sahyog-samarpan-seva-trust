import Image from "next/image";
import { siteConfig } from "@/data/site";

interface SealProps {
  /** Box size that matches the seal's real proportions. */
  className: string;
  alt?: string;
  priority?: boolean;
  sizes: string;
}

/** The foundation seal, contained in a sized frame so it is never stretched or cropped. */
export default function Seal({ className, alt = "", priority = false, sizes }: SealProps) {
  return (
    <span className={`relative inline-block shrink-0 bg-paper ${className}`}>
      <Image
        src={siteConfig.logo}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-contain"
      />
    </span>
  );
}

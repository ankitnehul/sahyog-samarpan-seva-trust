import type { ElementType, ReactNode } from "react";

interface RevealProps {
  as?: ElementType;
  /** Arrives a beat after the element before it (English under Marathi). */
  follow?: boolean;
  /** Photograph: fades in and settles from a slight zoom. */
  image?: boolean;
  className?: string;
  children: ReactNode;
}

/**
 * Marks a block to arrive once as it enters the screen.
 * The motion itself lives in globals.css and `MotionRoot`; with JavaScript off,
 * or reduced motion on, the block is simply visible.
 */
export default function Reveal({
  as: Tag = "div",
  follow = false,
  image = false,
  className,
  children,
}: RevealProps) {
  return (
    <Tag data-enter={image ? "image" : follow ? "follow" : ""} className={className}>
      {children}
    </Tag>
  );
}

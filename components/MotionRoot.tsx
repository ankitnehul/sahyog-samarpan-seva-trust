"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { usePathname } from "next/navigation";

/**
 * Marks headings once, after they enter the viewport.
 * Server HTML stays visible: the entrance class is added only in the browser,
 * and never when the reader has asked for reduced motion.
 */
export default function MotionRoot({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let observer: IntersectionObserver | null = null;

    const connect = () => {
      observer?.disconnect();
      observer = null;
      if (media.matches) {
        document.documentElement.classList.remove("motion-ready");
        return;
      }

      document.documentElement.classList.add("motion-ready");
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-entered");
            observer?.unobserve(entry.target);
          });
        },
        { threshold: 0.01 },
      );

      root.querySelectorAll<HTMLElement>("[data-enter]:not(.is-entered)").forEach((node) => {
        if (node.closest("dialog")) return;
        observer?.observe(node);
      });
    };

    connect();
    media.addEventListener("change", connect);
    return () => {
      media.removeEventListener("change", connect);
      observer?.disconnect();
    };
  }, [pathname]);

  return <div ref={rootRef}>{children}</div>;
}

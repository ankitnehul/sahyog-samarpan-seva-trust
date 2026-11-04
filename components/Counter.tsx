"use client";

import { useEffect, useRef } from "react";
import { toDevanagariDigits } from "@/lib/numerals";

interface CounterProps {
  value: number;
  devanagari?: boolean;
}

/**
 * Shows the final number in the server HTML, then counts up once when it scrolls into view.
 * Reduced motion keeps the final number as is.
 */
export default function Counter({ value, devanagari = false }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const show = (n: number) => {
      node.textContent = devanagari ? toDevanagariDigits(n) : String(n);
    };
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const started = performance.now();
        const tick = (now: number) => {
          const progress = Math.min(1, (now - started) / 900);
          show(Math.round(value * (1 - Math.pow(1 - progress, 3))));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      show(value);
    };
  }, [value, devanagari]);

  const label = devanagari ? toDevanagariDigits(value) : String(value);
  return (
    <span
      ref={ref}
      className="inline-block tabular-nums"
      style={{ minWidth: `${label.length}ch` }}
    >
      {label}
    </span>
  );
}

"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import DonateButton from "@/components/DonateButton";
import JoinLink from "@/components/JoinLink";
import Seal from "@/components/Seal";
import { siteConfig } from "@/data/site";

const desktopNavQuery = "(min-width: 1280px)";

export default function Navbar() {
  const [openPath, setOpenPath] = useState<string | null>(null);
  const pathname = usePathname();
  const open = openPath === pathname;
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const applyOffset = () => {
      document.documentElement.style.setProperty(
        "--header-offset",
        `${header.getBoundingClientRect().height}px`,
      );
    };

    applyOffset();
    const observer = new ResizeObserver(applyOffset);
    observer.observe(header);
    window.addEventListener("resize", applyOffset);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", applyOffset);
    };
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenPath(null);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    const media = window.matchMedia(desktopNavQuery);
    const onChange = () => {
      if (media.matches) setOpenPath(null);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b border-rule bg-paper"
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex w-full max-w-7xl items-center gap-3 px-4 py-2 sm:px-6 lg:px-8"
      >
        <Link href="/" className="flex min-w-0 flex-1 items-center gap-3">
          <Seal className="h-12 w-11" sizes="48px" priority />
          <span className="min-w-0 leading-tight">
            <span className="font-display-mr block text-base text-brand-navy sm:text-lg">
              {siteConfig.nameMr}
            </span>
            <span className="block text-sm text-ink-soft">{siteConfig.name}</span>
          </span>
        </Link>

        <ul className="hidden shrink-0 items-center gap-1 xl:flex">
          {siteConfig.nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`inline-flex min-h-11 items-center border-b-2 px-2 text-sm font-medium ${
                  isActive(item.href)
                    ? "border-brand-gold-ink text-brand-navy"
                    : "border-transparent text-ink"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden shrink-0 items-center gap-2 xl:flex">
          <JoinLink />
          <DonateButton />
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpenPath(open ? null : pathname)}
          className="inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center text-brand-navy xl:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div
          id={menuId}
          className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-rule bg-paper xl:hidden"
        >
          <ul className="mx-auto flex w-full max-w-7xl flex-col px-4 py-2 sm:px-6">
            {siteConfig.nav.map((item) => (
              <li key={item.href} className="border-b border-rule">
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`flex min-h-11 items-baseline justify-between gap-4 py-2 ${
                    isActive(item.href)
                      ? "border-b-2 border-brand-gold-ink"
                      : "border-b-2 border-transparent"
                  }`}
                >
                  <span className="font-display-mr text-lg text-brand-navy">
                    {item.labelMr}
                  </span>
                  <span className="shrink-0 text-sm text-ink-soft">{item.label}</span>
                </Link>
              </li>
            ))}
            <li className="flex flex-col gap-3 py-4">
              <JoinLink fullWidth />
              <DonateButton fullWidth />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

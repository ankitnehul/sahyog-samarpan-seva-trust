"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, HeartHandshake } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand: logo + name */}
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src={siteConfig.logo}
            alt={`${siteConfig.name} logo`}
            width={48}
            height={48}
            priority
            className="h-11 w-11 rounded-full object-contain"
          />
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-brand-navy sm:text-base">
              {siteConfig.name}
            </span>
            <span className="font-marathi text-xs text-brand-saffron">
              {siteConfig.taglineMr}
            </span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {siteConfig.nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-brand-saffron"
                    : "text-brand-navy hover:text-brand-saffron"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Donate CTA (Coming Soon) + mobile toggle */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            disabled
            title="Donations coming soon"
            className="hidden cursor-not-allowed items-center gap-2 rounded-full bg-brand-saffron/60 px-4 py-2 text-sm font-semibold text-white sm:inline-flex"
          >
            <HeartHandshake className="h-4 w-4" />
            Donate
            <span className="rounded-full bg-white/25 px-1.5 py-0.5 text-[10px] font-medium">
              Soon
            </span>
          </button>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-md p-2 text-brand-navy hover:bg-brand-cream lg:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-black/5 bg-white lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-4 py-2 sm:px-6">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between rounded-md px-3 py-3 text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? "bg-brand-cream text-brand-saffron"
                      : "text-brand-navy hover:bg-brand-cream"
                  }`}
                >
                  {item.label}
                  <span className="font-marathi text-xs text-gray-400">
                    {item.labelMr}
                  </span>
                </Link>
              </li>
            ))}
            <li className="px-3 py-3">
              <button
                type="button"
                disabled
                className="inline-flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-full bg-brand-saffron/60 px-4 py-2 text-sm font-semibold text-white"
              >
                <HeartHandshake className="h-4 w-4" />
                Donate (Coming Soon)
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

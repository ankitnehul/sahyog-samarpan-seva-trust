import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AboutSections } from "@/components/AboutSections";
import { aboutEn, aboutMr } from "@/data/about";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Sahayog Samarpan Seva Foundation — our mission, objectives, journey and commitment to social welfare in Ahilyanagar, Maharashtra.",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Page header */}
      <section className="bg-brand-navy py-16 text-center text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="font-marathi text-brand-gold">आमच्याबद्दल</p>
          <h1 className="mt-1 text-3xl font-bold tracking-tight sm:text-4xl">
            About Us
          </h1>
          <p className="font-marathi mt-2 text-brand-gold">
            {siteConfig.taglineMr}
          </p>
          <p className="mt-2 text-sm text-white/70">
            Est. {siteConfig.establishedYear} &middot; {siteConfig.contact.city},{" "}
            {siteConfig.contact.state}
          </p>
        </div>
      </section>

      {/* Intro banner */}
      <section className="border-b border-black/5 bg-brand-cream py-10">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 text-center sm:px-6 sm:flex-row sm:text-left">
          <Image
            src={siteConfig.logo}
            alt={`${siteConfig.name} logo`}
            width={96}
            height={96}
            className="h-24 w-24 shrink-0 rounded-full object-contain"
          />
          <div>
            <h2 className="text-xl font-bold text-brand-navy">
              {siteConfig.name}
            </h2>
            <p className="font-marathi text-brand-saffron">{siteConfig.nameMr}</p>
            <p className="mt-2 text-sm text-gray-600">{siteConfig.taglineEn}</p>
          </div>
        </div>
      </section>

      {/* English content */}
      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <AboutSections content={aboutEn} />
      </section>

      {/* Marathi content */}
      <section className="bg-brand-cream py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <AboutSections content={aboutMr} marathi />
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-4 py-12 text-center sm:px-6">
        <p className="text-gray-600">
          Want to see our activities in action?
        </p>
        <Link
          href="/our-work"
          className="mt-4 inline-block rounded-full bg-brand-saffron px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-saffron-dark"
        >
          View Our Work
        </Link>
      </section>
    </div>
  );
}

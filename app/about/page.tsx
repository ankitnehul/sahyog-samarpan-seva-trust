import type { Metadata } from "next";
import Link from "next/link";
import { AboutSections } from "@/components/AboutSections";
import PageHeading from "@/components/PageHeading";
import { aboutEn, aboutMr } from "@/data/about";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Sahayog Samarpan Seva Foundation — our mission, objectives, journey and commitment to social welfare in Ahilyanagar, Maharashtra.",
};

export default function AboutPage() {
  return (
    <div>
      <PageHeading
        surface="paper"
        titleMr="आमच्याबद्दल"
        title="About Us"
        description={`${siteConfig.taglineMr} · ${siteConfig.taglineEn}. Est. ${siteConfig.establishedYear}, ${siteConfig.contact.city}, ${siteConfig.contact.state}.`}
      />

      <div className="mx-auto w-full max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
        <AboutSections content={aboutEn} part="intro" />
      </div>

      <section className="surface-ink mt-10">
        <div className="mx-auto w-full max-w-7xl space-y-12 px-4 py-12 sm:px-6 lg:px-8">
          <AboutSections content={aboutEn} part="objectives" tone="inverse" />
          <AboutSections content={aboutMr} part="objectives" marathi tone="inverse" />
        </div>
      </section>

      <div className="mx-auto w-full max-w-7xl space-y-16 px-4 py-16 sm:px-6 lg:px-8">
        <AboutSections content={aboutEn} part="rest" />
        <AboutSections content={aboutMr} part="intro" marathi />
        <AboutSections content={aboutMr} part="rest" marathi />
        <p>
          <Link href="/our-work" className="link-rule">
            आमचे कार्य · View our work
          </Link>
        </p>
      </div>
    </div>
  );
}

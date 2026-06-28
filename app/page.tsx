import Image from "next/image";
import { siteConfig } from "@/data/site";

export default function Home() {
  return (
    <section className="relative overflow-hidden bg-brand-cream">
      <div className="mx-auto flex max-w-4xl flex-col items-center px-4 py-24 text-center sm:px-6 lg:py-32">
        <Image
          src={siteConfig.logo}
          alt={`${siteConfig.name} logo`}
          width={120}
          height={120}
          priority
          className="h-28 w-28 rounded-full object-contain"
        />

        <p className="font-marathi mt-6 text-lg text-brand-saffron">
          {siteConfig.nameMr}
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl lg:text-5xl">
          {siteConfig.name}
        </h1>
        <p className="font-marathi mt-4 text-xl font-medium text-brand-green-dark">
          {siteConfig.taglineMr}
        </p>
        <p className="mt-2 text-sm uppercase tracking-[0.2em] text-gray-500">
          {siteConfig.taglineEn} &middot; Est. {siteConfig.establishedYear}
        </p>

        <p className="mt-8 max-w-2xl text-base leading-relaxed text-gray-600">
          {siteConfig.description}
        </p>

        <div className="mt-10 rounded-xl border border-dashed border-brand-navy/20 bg-white px-6 py-4 text-sm text-gray-500">
          Layout ready. Full homepage &amp; pages are coming up in the next
          phase.
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { CalendarClock, MapPin } from "lucide-react";
import { siteConfig } from "@/data/site";
import { upcomingEvents } from "@/data/upcoming";

export default function Home() {
  return (
    <>
      {/* Hero */}
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
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="font-marathi text-brand-saffron">आगामी उपक्रम</p>
          <h2 className="mt-1 text-2xl font-bold text-brand-navy sm:text-3xl">
            Upcoming Events
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-brand-saffron" />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {upcomingEvents.map((event) => (
            <article
              key={event.id}
              className="flex flex-col rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex items-center gap-2 text-xs font-medium text-brand-saffron">
                <CalendarClock className="h-4 w-4" />
                {event.dateLabel ?? "Coming soon"}
              </div>

              <h3 className="mt-3 text-lg font-semibold text-brand-navy">
                {event.title}
              </h3>
              {event.titleMr && (
                <p className="font-marathi mt-0.5 text-sm text-brand-green-dark">
                  {event.titleMr}
                </p>
              )}

              {event.location && (
                <p className="mt-2 flex items-center gap-1.5 text-sm text-gray-500">
                  <MapPin className="h-4 w-4 shrink-0 text-brand-green" />
                  {event.location}
                </p>
              )}

              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                {event.description}
              </p>
              {event.descriptionMr && (
                <p className="font-marathi mt-2 text-sm leading-relaxed text-gray-600">
                  {event.descriptionMr}
                </p>
              )}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

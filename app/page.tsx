import Link from "next/link";
import ContentImage from "@/components/ContentImage";
import JoinLink from "@/components/JoinLink";
import Seal from "@/components/Seal";
import { focusAreas } from "@/data/focus-areas";
import { workEvents } from "@/data/events";
import { ongoingEvent } from "@/data/ongoing";
import { siteConfig } from "@/data/site";
import { upcomingEvents } from "@/data/upcoming";
import { toDevanagariDigits } from "@/lib/numerals";

export default function Home() {
  const latest = workEvents[0];
  const recent = workEvents.slice(1, 4);
  const established = toDevanagariDigits(siteConfig.establishedYear);

  return (
    <>
      <section className="bg-brand-navy text-white">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <Seal
            className="h-24 w-[5.5rem]"
            sizes="96px"
            priority
            alt={`${siteConfig.name} seal`}
          />
          <div className="max-w-4xl">
            <h1>
              <span className="font-display-mr block text-[clamp(2.6rem,8vw,4.75rem)] leading-none text-brand-saffron">
                {siteConfig.taglineMr}
              </span>
              <span className="font-display-en mt-3 block text-[clamp(1.5rem,3vw,2.25rem)] font-medium leading-tight">
                {siteConfig.taglineEn}
              </span>
            </h1>
            <p className="mt-4 text-base text-white">
              {established} · {siteConfig.contact.city}
            </p>
          </div>
        </div>
      </section>

      {ongoingEvent && (
        <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-brand-saffron-text">सध्या सुरू · Ongoing</p>
          <h2 className="mt-3 max-w-3xl">
            <span className="font-display-mr block text-3xl leading-tight text-brand-navy">
              {ongoingEvent.titleMr}
            </span>
            <span className="font-display-en mt-2 block text-2xl font-medium text-ink">
              {ongoingEvent.title}
            </span>
          </h2>
          <p className="mt-3 text-ink-soft">
            {ongoingEvent.dateLabel} · {ongoingEvent.timeLabel} · {ongoingEvent.location}
          </p>
          {ongoingEvent.flyer && (
            <div className="mt-6 max-w-xl border border-rule bg-paper-deep">
              <ContentImage
                src={ongoingEvent.flyer}
                alt={ongoingEvent.title}
                sizes="(max-width: 768px) 100vw, 36rem"
              />
            </div>
          )}
          <div className="font-marathi mt-6 max-w-prose space-y-3 text-base leading-8">
            {ongoingEvent.intro.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </section>
      )}

      {latest && (
        <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid items-start gap-6 lg:grid-cols-2 lg:gap-10">
            <div className="min-w-0 border border-rule bg-paper-deep">
              <ContentImage
                src={latest.photo}
                alt={latest.title}
                sizes="(max-width: 1024px) 100vw, 50vw"
                fit={latest.photoFit ?? "contain"}
                position={latest.photoPosition}
                priority
              />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium text-brand-saffron-text">{latest.dateLabel}</p>
              {latest.location && <p className="mt-2 text-ink-soft">{latest.location}</p>}
              <h2 className="mt-4">
                {latest.titleMr && (
                  <span className="font-display-mr block text-[clamp(1.8rem,4vw,2.6rem)] leading-tight text-brand-navy">
                    {latest.titleMr}
                  </span>
                )}
                <span className="font-display-en mt-2 block text-2xl font-medium leading-tight text-ink">
                  {latest.title}
                </span>
              </h2>
              <p className="font-marathi mt-4 text-lg leading-9 sm:text-xl sm:leading-10">
                {latest.description[0]}
              </p>
              <Link
                href={`/our-work#${latest.id}`}
                className="mt-6 inline-flex min-h-11 items-center border-b-2 border-brand-gold-ink text-brand-navy"
              >
                आमचे कार्य · Read this visit
              </Link>
            </div>
          </div>
        </section>
      )}

      <section className="border-t border-rule">
        <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2>
            <span className="font-display-mr block text-3xl text-brand-navy">आमचे कार्यक्षेत्र</span>
            <span className="font-display-en mt-1 block text-2xl font-medium text-ink">
              Areas of work
            </span>
          </h2>
          <ul className="mt-8 grid grid-cols-1 gap-x-8 border-t border-rule sm:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map((area) => (
              <li
                key={area.id}
                className={`min-w-0 border-b border-rule py-5 ${
                  area.growth ? "border-l-4 border-l-brand-green-ink pl-4" : ""
                }`}
              >
                <p className="font-display-mr text-2xl leading-tight text-brand-navy">
                  {area.labelMr}
                </p>
                <p className="mt-1 text-ink-soft">{area.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {recent.length > 0 && (
        <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2>
            <span className="font-display-mr block text-3xl text-brand-navy">अलीकडील सेवा</span>
            <span className="font-display-en mt-1 block text-2xl font-medium text-ink">
              Recent record
            </span>
          </h2>
          <ol className="mt-6 border-t border-rule">
            {recent.map((event) => (
              <li key={event.id} className="border-b border-rule">
                <Link
                  href={`/our-work#${event.id}`}
                  className="flex min-h-11 flex-col gap-1 py-4"
                >
                  <span className="text-sm font-medium text-brand-saffron-text">
                    {event.dateLabel}
                  </span>
                  <span className="font-display-mr text-xl leading-tight text-brand-navy">
                    {event.titleMr ?? event.title}
                  </span>
                  {event.location && <span className="text-ink-soft">{event.location}</span>}
                </Link>
              </li>
            ))}
          </ol>
        </section>
      )}

      {upcomingEvents.length > 0 && (
        <section className="border-t border-rule">
          <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <h2>
              <span className="font-display-mr block text-3xl text-brand-navy">आगामी उपक्रम</span>
              <span className="font-display-en mt-1 block text-2xl font-medium text-ink">
                Upcoming
              </span>
            </h2>
            <div className="mt-8 space-y-8">
              {upcomingEvents.map((event) => (
                <article key={event.id} className="max-w-prose">
                  <p className="text-sm font-medium text-brand-saffron-text">
                    {event.dateLabel ?? "Coming soon"}
                  </p>
                  <h3 className="mt-2">
                    {event.titleMr && (
                      <span className="font-display-mr block text-2xl leading-tight text-brand-navy">
                        {event.titleMr}
                      </span>
                    )}
                    <span className="font-display-en mt-1 block text-xl font-medium text-ink">
                      {event.title}
                    </span>
                  </h3>
                  {event.location && <p className="mt-2 text-ink-soft">{event.location}</p>}
                  <p className="mt-3 text-lg leading-8 sm:text-xl sm:leading-9">{event.description}</p>
                  {event.descriptionMr && (
                    <p className="font-marathi mt-3 text-lg leading-9 sm:text-xl sm:leading-10">{event.descriptionMr}</p>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-paper-deep">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-12 sm:px-6 lg:px-8">
          <h2>
            <span className="font-display-mr block text-3xl text-brand-navy">सदस्य व्हा</span>
            <span className="font-display-en mt-1 block text-2xl font-medium text-ink">
              Join the sanstha
            </span>
          </h2>
          <p className="max-w-prose text-base leading-7">
            Membership is open to any Indian citizen who agrees with the foundation’s objectives.
            Ordinary membership is {siteConfig.fees.ordinary}. Lifetime membership is{" "}
            {siteConfig.fees.lifetime}.
          </p>
          <div>
            <JoinLink />
          </div>
        </div>
      </section>
    </>
  );
}

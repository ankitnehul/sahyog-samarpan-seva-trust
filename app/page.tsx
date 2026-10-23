import Link from "next/link";
import ContentImage from "@/components/ContentImage";
import CoverBand from "@/components/CoverBand";
import JoinLink from "@/components/JoinLink";
import Seal from "@/components/Seal";
import { focusAreas } from "@/data/focus-areas";
import { workEvents } from "@/data/events";
import { ongoingEvent } from "@/data/ongoing";
import { siteConfig } from "@/data/site";
import { upcomingEvents } from "@/data/upcoming";
import { imageFrame } from "@/lib/image-frame";
import { toDevanagariDigits } from "@/lib/numerals";

function visitFrame(src: string) {
  const frame = imageFrame(src);
  if (frame === "portrait") return "max-w-sm border border-rule bg-paper-deep";
  if (frame === "wide") return "border border-rule bg-paper-deep";
  return "max-w-3xl border border-rule bg-paper-deep";
}

export default function Home() {
  const latest = workEvents[0];
  const upcoming = upcomingEvents[0];
  const ourWork = siteConfig.nav.find((item) => item.href === "/our-work");
  const gallery = siteConfig.nav.find((item) => item.href === "/gallery");
  const established = toDevanagariDigits(siteConfig.establishedYear);

  return (
    <>
      <CoverBand
        src={latest?.photo}
        position={latest?.photoPosition}
        priority
        fallback="navy"
        screen
      >
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <Seal
            className="h-24 w-[7.33rem]"
            sizes="117px"
            priority
            alt={`${siteConfig.name} seal`}
          />
          <div className="max-w-4xl">
            <h1>
              <span
                data-enter
                className="band-title font-display-mr block text-[clamp(2.6rem,8vw,4.75rem)] leading-none"
              >
                {siteConfig.taglineMr}
              </span>
              <span
                data-enter="follow"
                className="band-text font-display-en mt-2 block text-[clamp(1.5rem,3vw,2.25rem)] font-medium leading-tight"
              >
                {siteConfig.taglineEn}
              </span>
            </h1>
            <p data-enter="follow" className="band-text mt-3 text-base">
              {established} · {siteConfig.contact.city}
            </p>
            {ourWork && (
              <Link
                href={ourWork.href}
                data-enter="follow"
                className="link-rule link-rule-on-navy mt-2"
              >
                {ourWork.labelMr} · {ourWork.label}
              </Link>
            )}
          </div>
        </div>
      </CoverBand>

      {ongoingEvent ? (
        <section className="surface-paper">
          <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <p data-enter className="text-sm font-medium text-brand-saffron-text">
              {ongoingEvent.dateLabel} · {ongoingEvent.timeLabel} · {ongoingEvent.location}
            </p>
            <h2 className="mt-4 max-w-3xl">
              <span
                data-enter
                className="font-display-mr block text-[clamp(1.8rem,4vw,2.6rem)] leading-tight text-brand-navy"
              >
                {ongoingEvent.titleMr}
              </span>
              <span
                data-enter="follow"
                className="font-display-en mt-2 block text-2xl font-medium leading-tight text-ink"
              >
                {ongoingEvent.title}
              </span>
            </h2>
            <div
              data-enter="follow"
              className="font-marathi mt-6 max-w-3xl space-y-3 text-lg leading-9 sm:text-xl sm:leading-10"
            >
              {ongoingEvent.intro.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            {ongoingEvent.flyer && (
              <div className="mt-6 max-w-xl border border-rule bg-paper-deep">
                <ContentImage
                  src={ongoingEvent.flyer}
                  alt={ongoingEvent.title}
                  sizes="(max-width: 768px) 100vw, 36rem"
                />
              </div>
            )}
            <div
              data-enter="follow"
              className="font-marathi mt-6 max-w-3xl space-y-3 text-lg leading-9 sm:text-xl sm:leading-10"
            >
              {ongoingEvent.appeal.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <p
              data-enter="follow"
              className="font-marathi mt-6 max-w-3xl text-lg leading-9 text-brand-navy sm:text-xl sm:leading-10"
            >
              {ongoingEvent.tagline}
            </p>
          </div>
        </section>
      ) : latest ? (
        <section className="surface-paper">
          <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <p data-enter className="text-sm font-medium text-brand-saffron-text">
              {latest.dateLabel}
            </p>
            {latest.location && (
              <p data-enter="follow" className="mt-2 text-ink-soft">
                {latest.location}
              </p>
            )}
            <h2 className="mt-4 max-w-3xl">
              {latest.titleMr && (
                <span
                  data-enter
                  className="font-display-mr block text-[clamp(1.8rem,4vw,2.6rem)] leading-tight text-brand-navy"
                >
                  {latest.titleMr}
                </span>
              )}
              <span
                data-enter="follow"
                className="font-display-en mt-2 block text-2xl font-medium leading-tight text-ink"
              >
                {latest.title}
              </span>
            </h2>
            {latest.description[0] && (
              <p
                data-enter="follow"
                className="font-marathi mt-4 max-w-3xl text-lg leading-9 sm:text-xl sm:leading-10"
              >
                {latest.description[0]}
              </p>
            )}
            <div className={`mt-6 ${visitFrame(latest.photo)}`}>
              <ContentImage
                src={latest.photo}
                alt={latest.title}
                sizes="(max-width: 1024px) 100vw, 52rem"
                fit={latest.photoFit ?? "contain"}
                position={latest.photoPosition}
              />
            </div>
            <Link href={`/our-work#${latest.id}`} data-enter="follow" className="link-rule mt-4">
              आमचे कार्य · Read this visit
            </Link>
          </div>
        </section>
      ) : null}

      <section className="surface-ink border-t border-white/20">
        <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2>
            <span data-enter className="font-display-mr block text-3xl text-white">
              आमचे कार्यक्षेत्र
            </span>
            <span
              data-enter="follow"
              className="font-display-en mt-1 block text-2xl font-medium text-white"
            >
              Areas of work
            </span>
          </h2>
          <ul data-enter="follow" className="mt-8 border-t border-white/20">
            {focusAreas.map((area) => (
              <li
                key={area.id}
                className="flex min-w-0 gap-3 border-b border-white/20 py-5"
              >
                <span className="w-1 shrink-0 bg-brand-green" aria-hidden="true" />
                <div className="min-w-0">
                  <p className="font-display-mr text-[clamp(1.6rem,3vw,2rem)] leading-tight text-white">
                    {area.labelMr}
                  </p>
                  <p className="mt-1 text-white">{area.label}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="surface-paper-deep">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start gap-1 px-4 py-12 sm:px-6 lg:px-8">
          {ourWork && (
            <Link href={ourWork.href} data-enter className="link-rule">
              {ourWork.labelMr} · {ourWork.label}
            </Link>
          )}
          {gallery && (
            <Link href={gallery.href} data-enter="follow" className="link-rule">
              {gallery.labelMr} · {gallery.label}
            </Link>
          )}
        </div>
      </section>

      {upcoming && (
        <section className="surface-paper">
          <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <article className="max-w-3xl">
              {upcoming.dateLabel && (
                <p data-enter className="text-sm font-medium text-brand-saffron-text">
                  {upcoming.dateLabel}
                </p>
              )}
              <h2 className={upcoming.dateLabel ? "mt-2" : undefined}>
                {upcoming.titleMr && (
                  <span
                    data-enter
                    className="font-display-mr block text-2xl leading-tight text-brand-navy"
                  >
                    {upcoming.titleMr}
                  </span>
                )}
                <span
                  data-enter="follow"
                  className="font-display-en mt-1 block text-xl font-medium text-ink"
                >
                  {upcoming.title}
                </span>
              </h2>
              {upcoming.location && (
                <p data-enter="follow" className="mt-2 text-ink-soft">
                  {upcoming.location}
                </p>
              )}
              <p
                data-enter="follow"
                className="mt-3 text-lg leading-8 sm:text-xl sm:leading-9"
              >
                {upcoming.description}
              </p>
              {upcoming.descriptionMr && (
                <p
                  data-enter="follow"
                  className="font-marathi mt-3 text-lg leading-9 sm:text-xl sm:leading-10"
                >
                  {upcoming.descriptionMr}
                </p>
              )}
            </article>
          </div>
        </section>
      )}

      <section className="surface-ink border-b border-white/20">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-12 sm:px-6 lg:px-8">
          <h2>
            <span data-enter className="font-display-mr block text-3xl text-white">
              सदस्य व्हा
            </span>
            <span
              data-enter="follow"
              className="font-display-en mt-1 block text-2xl font-medium text-white"
            >
              Join the foundation
            </span>
          </h2>
          <p data-enter="follow" className="max-w-3xl text-base leading-7 text-white">
            Membership is open to any Indian citizen who agrees with the foundation’s objectives.
          </p>
          <p data-enter="follow" className="max-w-3xl text-base leading-7 text-white">
            {siteConfig.fees.en}
          </p>
          <p data-enter="follow" className="font-marathi max-w-3xl text-base leading-8 text-white">
            {siteConfig.fees.mr}
          </p>
          <div data-enter="follow">
            <JoinLink />
          </div>
        </div>
      </section>
    </>
  );
}

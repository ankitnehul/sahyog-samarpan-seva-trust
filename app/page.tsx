import Link from "next/link";
import ContentImage from "@/components/ContentImage";
import JoinLink from "@/components/JoinLink";
import Seal from "@/components/Seal";
import { focusAreas } from "@/data/focus-areas";
import { galleryAlbums } from "@/data/gallery";
import { workEvents } from "@/data/events";
import { ongoingEvent } from "@/data/ongoing";
import { siteConfig } from "@/data/site";
import { upcomingEvents } from "@/data/upcoming";
import { imageFrame } from "@/lib/image-frame";
import { toDevanagariDigits } from "@/lib/numerals";

export default function Home() {
  const featured = workEvents.slice(0, 2);
  const recent = workEvents.slice(2, 5);
  const highlights = galleryAlbums
    .map((album) => album.images[0])
    .filter((image) => image !== undefined);
  const established = toDevanagariDigits(siteConfig.establishedYear);
  const firstVisit = featured[0];

  return (
    <>
      <section className="bg-brand-navy text-white">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
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
              <span className="font-display-en mt-2 block text-[clamp(1.5rem,3vw,2.25rem)] font-medium leading-tight">
                {siteConfig.taglineEn}
              </span>
            </h1>
            <p className="mt-3 text-base text-white">
              {established} · {siteConfig.contact.city}
            </p>
            {firstVisit && (
              <a href={`#${firstVisit.id}`} className="link-rule link-rule-on-navy mt-2">
                अलीकडील सेवा · The latest visit
              </a>
            )}
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
          <div className="font-marathi mt-6 max-w-3xl space-y-3 text-lg leading-9 sm:text-xl sm:leading-10">
            {ongoingEvent.intro.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </section>
      )}

      {featured.map((event, index) => (
        <section
          key={event.id}
          id={event.id}
          className={`mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 ${
            index > 0 ? "border-t border-rule" : ""
          }`}
        >
          <div className="grid items-start gap-6 lg:grid-cols-2 lg:gap-10">
            <div
              className={`min-w-0 border border-rule bg-paper-deep ${
                index === 1 ? "lg:order-2" : ""
              }`}
            >
              <ContentImage
                src={event.photo}
                alt={event.title}
                sizes="(max-width: 1024px) 100vw, 50vw"
                fit={event.photoFit ?? "contain"}
                position={event.photoPosition}
                priority={index === 0}
              />
            </div>
            <div className={`min-w-0 ${index === 1 ? "lg:order-1" : ""}`}>
              <p className="text-sm font-medium text-brand-saffron-text">{event.dateLabel}</p>
              {event.location && <p className="mt-2 text-ink-soft">{event.location}</p>}
              <h2 className="mt-4">
                {event.titleMr && (
                  <span className="font-display-mr block text-[clamp(1.8rem,4vw,2.6rem)] leading-tight text-brand-navy">
                    {event.titleMr}
                  </span>
                )}
                <span className="font-display-en mt-2 block text-2xl font-medium leading-tight text-ink">
                  {event.title}
                </span>
              </h2>
              <p className="font-marathi mt-4 text-lg leading-9 sm:text-xl sm:leading-10">
                {event.description[0]}
              </p>
              <Link href={`/our-work#${event.id}`} className="link-rule mt-4">
                आमचे कार्य · Read this visit
              </Link>
            </div>
          </div>
        </section>
      ))}

      <section className="border-t border-rule">
        <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2>
            <span className="font-display-mr block text-3xl text-brand-navy">आमचे कार्यक्षेत्र</span>
            <span className="font-display-en mt-1 block text-2xl font-medium text-ink">
              Areas of work
            </span>
          </h2>
          <ul className="mt-8 grid grid-cols-1 gap-x-12 border-t border-rule sm:grid-cols-2">
            {focusAreas.map((area) => (
              <li
                key={area.id}
                className={`min-w-0 border-b border-rule py-5 ${
                  area.growth ? "border-l-4 border-l-brand-green-ink pl-4" : ""
                }`}
              >
                <p className="font-display-mr text-[clamp(1.6rem,3vw,2rem)] leading-tight text-brand-navy">
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
                  className="grid min-h-11 gap-1 py-4 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-6"
                >
                  <span className="text-sm font-medium text-brand-saffron-text">
                    {event.dateLabel}
                  </span>
                  <span className="min-w-0">
                    <span className="font-display-mr block text-xl leading-tight text-brand-navy">
                      {event.titleMr ?? event.title}
                    </span>
                    {event.location && (
                      <span className="mt-1 block text-ink-soft">{event.location}</span>
                    )}
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </section>
      )}

      {highlights.length > 0 && (
        <section className="border-t border-rule bg-paper-deep">
          <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <h2>
              <span className="font-display-mr block text-3xl text-brand-navy">गॅलरी</span>
              <span className="font-display-en mt-1 block text-2xl font-medium text-ink">
                From the photographs
              </span>
            </h2>
            <ul className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
              {highlights.map((image) => (
                <li key={image.id} className="min-w-0">
                  <figure
                    className={`border border-rule bg-paper ${
                      imageFrame(image.src) === "portrait" ? "max-w-sm" : ""
                    }`}
                  >
                    <ContentImage
                      src={image.src}
                      alt={image.alt}
                      sizes="(max-width: 767px) 100vw, 40rem"
                      fit="contain"
                    />
                    {(image.captionMr || image.caption) && (
                      <figcaption className="border-t border-rule p-4">
                        {image.captionMr && (
                          <p className="font-marathi text-lg leading-8 text-brand-navy">
                            {image.captionMr}
                          </p>
                        )}
                        {image.caption && (
                          <p className="mt-1 text-base leading-7 text-ink-soft">{image.caption}</p>
                        )}
                      </figcaption>
                    )}
                  </figure>
                </li>
              ))}
            </ul>
            <Link href="/gallery" className="link-rule mt-8">
              गॅलरी · Gallery
            </Link>
          </div>
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
                <article key={event.id} className="max-w-3xl">
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
                    <p className="font-marathi mt-3 text-lg leading-9 sm:text-xl sm:leading-10">
                      {event.descriptionMr}
                    </p>
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
          <p className="max-w-3xl text-base leading-7">
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

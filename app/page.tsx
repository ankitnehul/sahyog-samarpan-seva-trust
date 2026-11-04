import Link from "next/link";
import ContentImage from "@/components/ContentImage";
import Counter from "@/components/Counter";
import DonateButton from "@/components/DonateButton";
import FocusAreas from "@/components/FocusAreas";
import Heading from "@/components/Heading";
import JoinLink from "@/components/JoinLink";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import Seal from "@/components/Seal";
import { ongoingEvent, upcomingEvents, workEvents } from "@/data/events";
import { galleryAlbums } from "@/data/gallery";
import { siteConfig } from "@/data/site";
import { imageFrame } from "@/lib/image-frame";
import { toDevanagariDigits } from "@/lib/numerals";

function photoFrame(src: string) {
  if (imageFrame(src) === "portrait") return "mx-auto max-w-sm border border-rule bg-paper-deep";
  return "border border-rule bg-paper-deep";
}

export default function Home() {
  const latest = ongoingEvent ?? workEvents[0];
  const ourWork = siteConfig.nav.find((item) => item.href === "/our-work");
  const established = toDevanagariDigits(siteConfig.establishedYear);

  // Numbers that come from the data itself. Nothing here is typed in by hand.
  const eventsHeld = workEvents.length;
  const yearsActive = new Date().getFullYear() - siteConfig.establishedYear;
  const photographs = new Set(
    [
      ...workEvents.map((event) => event.photo),
      ...galleryAlbums.flatMap((album) => album.images.map((image) => image.src)),
    ].filter(Boolean),
  ).size;

  const counters = [
    { value: eventsHeld, labelMr: "उपक्रम", label: "Events held" },
    { value: yearsActive, labelMr: "वर्षांची सेवा", label: "Years of seva" },
    { value: photographs, labelMr: "छायाचित्रे", label: "Photographs" },
  ];

  return (
    <>
      <Section
        tone="photo"
        screen
        bg={{
          src: "/images/hero/balghar-ganpati-hero.jpg",
          position: "center 95%",
          mobilePosition: "center 72%",
          priority: true,
          zoom: true,
        }}
      >
        <div className="flex flex-col gap-4">
          <Seal
            className="h-24 w-[7.33rem]"
            sizes="117px"
            priority
            alt={`${siteConfig.name} seal`}
          />
          <div className="max-w-4xl">
            <Heading
              as="h1"
              size="display"
              titleMr={siteConfig.taglineMr}
              title={siteConfig.taglineEn}
            />
            <Reveal as="p" follow className="band-text mt-3 text-base">
              {established} · {siteConfig.contact.city}
            </Reveal>
            {ourWork && (
              <Reveal follow>
                <Link href={ourWork.href} className="link-rule link-rule-on-navy mt-2">
                  {ourWork.labelMr} · {ourWork.label}
                </Link>
              </Reveal>
            )}
          </div>
        </div>
      </Section>

      {latest && (
        <Section tone="paper">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
            <div className="min-w-0">
              <Reveal as="p" className="text-sm font-medium text-brand-saffron-text">
                {latest.dateLabel}
              </Reveal>
              {latest.location && (
                <Reveal as="p" follow className="mt-2 text-ink-soft">
                  {latest.location}
                </Reveal>
              )}
              <Heading
                size="section"
                titleMr={latest.titleMr}
                title={latest.title}
                className="mt-4 max-w-3xl"
              />
              {latest.description[0] && (
                <Reveal
                  as="p"
                  follow
                  className="font-marathi mt-4 max-w-3xl text-lg leading-9 sm:text-xl sm:leading-10"
                >
                  {latest.description[0]}
                </Reveal>
              )}
              <Link href={`/our-work/${latest.id}`} className="link-rule mt-4">
                आमचे कार्य · Read this visit
              </Link>
            </div>
            {latest.photo && (
              <Reveal image className={photoFrame(latest.photo)}>
                <ContentImage
                  src={latest.photo}
                  alt={latest.title}
                  sizes="(max-width: 1023px) 100vw, 40rem"
                  position={latest.photoPosition}
                />
              </Reveal>
            )}
          </div>
        </Section>
      )}

      <Section tone="navy">
        <Heading titleMr="आमचे कार्यक्षेत्र" title="Areas of work" />
        <Reveal as="ul" follow className="mt-8 grid grid-cols-3 gap-2 sm:gap-6">
          {counters.map((counter) => (
            <li key={counter.label} className="min-w-0 border-t-2 border-brand-gold pt-3">
              <p className="font-display-en text-[clamp(2rem,7vw,3.5rem)] font-medium leading-none text-white">
                <Counter value={counter.value} devanagari />
              </p>
              <p className="font-display-mr mt-2 text-base leading-tight text-white sm:text-lg">
                {counter.labelMr}
              </p>
              <p className="text-sm leading-snug text-white">{counter.label}</p>
            </li>
          ))}
        </Reveal>
        <Reveal follow className="mt-8">
          <FocusAreas />
        </Reveal>
      </Section>

      {upcomingEvents.length > 0 && (
        <Section tone="paper">
          <Heading titleMr="आगामी उपक्रम" title="Upcoming" />
          <ul className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.map((upcoming) => (
              <Reveal
                as="li"
                key={upcoming.id}
                className="min-w-0 border border-rule bg-paper-deep p-5"
              >
                {upcoming.dateLabel && (
                  <p className="text-sm font-medium text-brand-saffron-text">
                    {upcoming.dateLabel}
                  </p>
                )}
                <Heading
                  size="card"
                  titleMr={upcoming.titleMr}
                  title={upcoming.title}
                  className="mt-2"
                />
                {upcoming.location && <p className="mt-2 text-ink-soft">{upcoming.location}</p>}
                {upcoming.summary && (
                  <p className="mt-3 text-base leading-7">{upcoming.summary}</p>
                )}
                {upcoming.summaryMr && (
                  <p className="font-marathi mt-3 text-lg leading-9">{upcoming.summaryMr}</p>
                )}
              </Reveal>
            ))}
          </ul>
        </Section>
      )}

      <Section tone="paper-deep">
        <Heading titleMr="सदस्य व्हा" title="Join the foundation" />
        <Reveal as="p" follow className="mt-5 max-w-3xl text-base leading-7">
          Membership is open to any Indian citizen who agrees with the foundation’s objectives.
        </Reveal>
        <Reveal follow className="mt-6 flex max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row">
          <JoinLink />
          <DonateButton />
        </Reveal>
      </Section>
    </>
  );
}

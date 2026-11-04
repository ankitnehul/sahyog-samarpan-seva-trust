import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContentImage from "@/components/ContentImage";
import GalleryAlbums from "@/components/GalleryAlbums";
import Heading from "@/components/Heading";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { workEvents } from "@/data/events";
import { imageFrame } from "@/lib/image-frame";

export const dynamicParams = false;

export function generateStaticParams() {
  return workEvents.map((event) => ({ id: event.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const event = workEvents.find((item) => item.id === id);
  if (!event) return {};
  return {
    title: event.title,
    description: `${event.title}. ${event.dateLabel ?? ""}${event.location ? `, ${event.location}` : ""}.`,
  };
}

function frameClass(src: string) {
  const frame = imageFrame(src);
  if (frame === "portrait") return "max-w-sm border border-rule bg-paper-deep";
  if (frame === "wide") return "border border-rule bg-paper-deep";
  return "max-w-3xl border border-rule bg-paper-deep";
}

export default async function EventPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const index = workEvents.findIndex((item) => item.id === id);
  if (index === -1) notFound();

  const event = workEvents[index];
  const newer = workEvents[index - 1];
  const older = workEvents[index + 1];

  // The subject photograph is shown above the story; the gallery holds the rest.
  const morePhotos = (event.photos ?? []).filter((photo) => photo.src !== event.photo);

  return (
    <article>
      <Section
        as="header"
        tone={event.hero ? "photo" : "navy"}
        bg={event.hero && { ...event.hero, parallax: true }}
        size="header"
      >
        <Reveal as="p" className="band-text text-sm font-medium">
          {event.dateLabel}
        </Reveal>
        {event.location && (
          <Reveal as="p" follow className="band-text mt-1">
            {event.location}
          </Reveal>
        )}
        <Heading
          as="h1"
          size="page"
          titleMr={event.titleMr}
          title={event.title}
          className="mt-4 max-w-4xl"
        />
      </Section>

      <Section tone="paper">
        {event.photo && (
          <Reveal image className={frameClass(event.photo)}>
            <ContentImage
              src={event.photo}
              alt={event.title}
              sizes="(max-width: 1024px) 100vw, 52rem"
              position={event.photoPosition}
              priority
            />
          </Reveal>
        )}
        <Reveal
          follow
          className="font-marathi mt-8 max-w-3xl space-y-5 text-lg leading-9 sm:text-xl sm:leading-10"
        >
          {event.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Reveal>
        <Reveal as="p" follow className="font-display-mr mt-8 text-xl text-brand-navy">
          !! सेवा हेच कर्म !!
        </Reveal>
      </Section>

      {morePhotos.length > 0 && (
        <div className="surface-paper-deep">
          <GalleryAlbums
            headings={false}
            albums={[
              {
                id: event.id,
                title: event.title,
                titleMr: event.titleMr ?? "",
                images: morePhotos,
              },
            ]}
          />
        </div>
      )}

      <Section tone="navy">
        <nav aria-label="Other visits" className="grid gap-4 sm:grid-cols-2">
          {newer ? (
            <Link
              href={`/our-work/${newer.id}`}
              className="focus-gold flex min-h-11 flex-col justify-center border border-white/30 p-4 text-white"
            >
              <span className="text-sm">← नंतरचा · Later</span>
              <span className="font-display-mr mt-1 text-lg leading-tight">
                {newer.titleMr ?? newer.title}
              </span>
            </Link>
          ) : (
            <span aria-hidden="true" className="hidden sm:block" />
          )}
          {older && (
            <Link
              href={`/our-work/${older.id}`}
              className="focus-gold flex min-h-11 flex-col justify-center border border-white/30 p-4 text-white sm:text-right"
            >
              <span className="text-sm">आधीचा · Earlier →</span>
              <span className="font-display-mr mt-1 text-lg leading-tight">
                {older.titleMr ?? older.title}
              </span>
            </Link>
          )}
        </nav>
        <Link href="/our-work" className="link-rule link-rule-on-navy mt-6">
          आमचे कार्य · Our Work
        </Link>
      </Section>
    </article>
  );
}

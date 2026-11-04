import Link from "next/link";
import ContentImage from "@/components/ContentImage";
import Heading from "@/components/Heading";
import type { SiteEvent } from "@/types";

/**
 * Event card for the Our Work index. The whole card is one link to the event page,
 * so a thumb has one large target. The thumbnail is a fixed-ratio crop;
 * the full photograph is on the event page.
 */
export default function EventCard({ event }: { event: SiteEvent }) {
  return (
    <Link
      href={`/our-work/${event.id}`}
      className="card-link group flex h-full min-w-0 flex-col border border-rule bg-paper"
    >
      {event.photo && (
        <div className="card-zoom overflow-hidden">
          <ContentImage
            src={event.photo}
            alt=""
            ratio={3 / 2}
            fit="cover"
            position={event.photoPosition}
            sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 24rem"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-4">
        <p className="text-sm font-medium text-brand-saffron-text">{event.dateLabel}</p>
        <Heading as="h2" size="card" titleMr={event.titleMr} title={event.title} className="mt-2" />
        <span className="link-rule mt-auto self-start pt-3 text-sm">
          आमचे कार्य · Read this visit
        </span>
      </div>
    </Link>
  );
}

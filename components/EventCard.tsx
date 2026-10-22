import ContentImage from "@/components/ContentImage";
import { imageFrame } from "@/lib/image-frame";
import type { WorkEvent } from "@/types";

interface EventCardProps {
  event: WorkEvent;
}

function frameClass(src: string) {
  const frame = imageFrame(src);
  if (frame === "wide") return "mt-6 border border-rule bg-paper-deep";
  if (frame === "portrait") return "mt-6 max-w-sm border border-rule bg-paper-deep";
  return "mt-6 max-w-3xl border border-rule bg-paper-deep";
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <article className="min-w-0">
      <p className="text-sm font-medium text-brand-saffron-text">{event.dateLabel}</p>
      {event.location && <p className="mt-2 text-ink-soft">{event.location}</p>}
      <h2 className="mt-4">
        {event.titleMr && (
          <span className="font-display-mr block text-[clamp(1.75rem,4vw,2.5rem)] leading-tight text-brand-navy">
            {event.titleMr}
          </span>
        )}
        <span className="font-display-en mt-2 block text-[clamp(1.35rem,2.5vw,1.85rem)] font-medium leading-tight text-ink">
          {event.title}
        </span>
      </h2>

      <div className={frameClass(event.photo)}>
        <ContentImage
          src={event.photo}
          alt={event.title}
          sizes="(max-width: 1024px) 100vw, 52rem"
          fit={event.photoFit ?? "contain"}
          position={event.photoPosition}
        />
      </div>
      {event.secondaryPhoto && (
        <div className={frameClass(event.secondaryPhoto)}>
          <ContentImage
            src={event.secondaryPhoto}
            alt=""
            sizes="(max-width: 1024px) 100vw, 52rem"
            fit="contain"
          />
        </div>
      )}

      <div className="font-marathi mt-6 max-w-3xl space-y-5 text-lg leading-9 sm:text-xl sm:leading-10">
        {event.description.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <p className="font-display-mr mt-6 text-xl text-brand-navy">!! सेवा हेच कर्म !!</p>
    </article>
  );
}

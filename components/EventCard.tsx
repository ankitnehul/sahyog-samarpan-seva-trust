import Image from "next/image";
import { Calendar, MapPin } from "lucide-react";
import type { WorkEvent } from "@/types";

interface EventCardProps {
  event: WorkEvent;
  /** Alternate image side on desktop for visual rhythm. */
  reverse?: boolean;
}

export default function EventCard({ event, reverse = false }: EventCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-shadow hover:shadow-lg">
      <div
        className={`flex flex-col ${
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        }`}
      >
        {/* Uniform photo frame, with an optional second activity photo. */}
        <div className="flex flex-col gap-2 bg-brand-cream sm:gap-3 lg:w-1/2">
          <div className="relative aspect-[4/3] w-full bg-brand-cream">
            <Image
              src={event.photo}
              alt={event.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className={
                event.photoFit === "contain" ? "object-contain" : "object-cover"
              }
              style={
                event.photoPosition
                  ? { objectPosition: event.photoPosition }
                  : undefined
              }
            />
            {/* Date badge */}
            <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-brand-navy/90 px-3 py-1.5 text-xs font-medium text-white backdrop-blur">
              <Calendar className="h-3.5 w-3.5 text-brand-gold" />
              {event.dateLabel}
            </div>
          </div>

          {event.secondaryPhoto && (
            <div className="flex flex-1 items-center bg-brand-cream">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-cream">
                <Image
                  src={event.secondaryPhoto}
                  alt={`Children participating in ${event.title}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center gap-3 p-6 lg:w-1/2 lg:p-8">
          <div>
            <h3 className="text-xl font-bold text-brand-navy sm:text-2xl">
              {event.title}
            </h3>
            {event.titleMr && (
              <p className="font-marathi mt-1 text-brand-saffron">
                {event.titleMr}
              </p>
            )}
          </div>

          {event.location && (
            <p className="flex items-center gap-1.5 text-sm text-gray-500">
              <MapPin className="h-4 w-4 shrink-0 text-brand-green" />
              {event.location}
            </p>
          )}

          <div className="font-marathi space-y-2 text-sm leading-relaxed text-gray-700">
            {event.description.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          <p className="font-marathi mt-1 text-sm font-semibold text-brand-green-dark">
            !! सेवा हेच कर्म !!
          </p>
        </div>
      </div>
    </article>
  );
}

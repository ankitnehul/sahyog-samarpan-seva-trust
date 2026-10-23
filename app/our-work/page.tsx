import type { Metadata } from "next";
import EventCard from "@/components/EventCard";
import PageHeading from "@/components/PageHeading";
import { workEvents } from "@/data/events";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Social welfare activities and initiatives by Sahayog Samarpan Seva Foundation — Dussehra at Balghar, Ganpati workshop, art workshop, Diwali celebrations and more.",
};

export default function OurWorkPage() {
  return (
    <div>
      <PageHeading
        surface="navy"
        titleMr="आमचे कार्य"
        title="Our Work"
        description="A record of the seva carried out by Sahayog Samarpan Seva Foundation, newest visit first."
      />

      <ol className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        {workEvents.map((event, index) => {
          const year = event.date.slice(0, 4);
          const showYear = index === 0 || workEvents[index - 1].date.slice(0, 4) !== year;

          return (
            <li
              key={event.id}
              id={event.id}
              className="border-t border-rule py-10 lg:grid lg:grid-cols-[6.5rem_minmax(0,1fr)] lg:gap-10"
            >
              <div className={showYear ? undefined : "hidden lg:block"}>
                {showYear && (
                  <p className="font-display-en text-2xl font-medium text-brand-gold-ink lg:sticky lg:top-[calc(var(--header-offset)+1.5rem)]">
                    {year}
                  </p>
                )}
              </div>
              <EventCard event={event} />
            </li>
          );
        })}
      </ol>
    </div>
  );
}

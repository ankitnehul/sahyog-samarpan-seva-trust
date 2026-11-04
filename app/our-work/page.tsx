import type { Metadata } from "next";
import EventCard from "@/components/EventCard";
import HashRedirect from "@/components/HashRedirect";
import PageHeading from "@/components/PageHeading";
import { workEvents } from "@/data/events";
import type { SiteEvent } from "@/types";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Social welfare activities and initiatives by Sahayog Samarpan Seva Foundation — Dussehra at Balghar, Ganpati workshop, art workshop, Diwali celebrations and more.",
};

function groupByYear(events: SiteEvent[]) {
  const groups: { year: string; events: SiteEvent[] }[] = [];
  for (const event of events) {
    const year = (event.date ?? "").slice(0, 4);
    const last = groups[groups.length - 1];
    if (last && last.year === year) last.events.push(event);
    else groups.push({ year, events: [event] });
  }
  return groups;
}

export default function OurWorkPage() {
  const groups = groupByYear(workEvents);

  return (
    <div>
      <HashRedirect ids={workEvents.map((event) => event.id)} />
      <PageHeading
        surface="navy"
        titleMr="आमचे कार्य"
        title="Our Work"
        description="A record of the seva carried out by Sahayog Samarpan Seva Foundation, newest visit first."
      />

      <div className="mx-auto w-full max-w-7xl space-y-12 px-4 py-12 sm:px-6 md:py-20 lg:px-8">
        {groups.map((group) => (
          <section
            key={group.year}
            className="lg:grid lg:grid-cols-[6.5rem_minmax(0,1fr)] lg:gap-10"
          >
            <h2 className="font-display-en text-2xl font-medium text-brand-gold-ink lg:sticky lg:top-[calc(var(--header-offset)+1.5rem)] lg:self-start">
              {group.year}
            </h2>
            <ul className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-0 lg:grid-cols-3">
              {group.events.map((event) => (
                <li key={event.id} id={event.id} className="min-w-0">
                  <EventCard event={event} />
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import EventCard from "@/components/EventCard";
import { workEvents } from "@/data/events";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Social welfare activities and initiatives by Sahayog Samarpan Seva Foundation — Diwali celebrations, Maharashtra Day seva and more.",
};

export default function OurWorkPage() {
  return (
    <div className="bg-white">
      {/* Page header */}
      <section className="bg-brand-navy py-16 text-center text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="font-marathi text-brand-gold">आमचे कार्य</p>
          <h1 className="mt-1 text-3xl font-bold tracking-tight sm:text-4xl">
            Our Work
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            A glimpse of the activities and seva carried out by Sahayog Samarpan
            Seva Foundation — serving the community, one initiative at a time.
          </p>
        </div>
      </section>

      {/* Events timeline (newest first) */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-10">
          {workEvents.map((event, idx) => (
            <EventCard key={event.id} event={event} reverse={idx % 2 === 1} />
          ))}
        </div>
      </section>
    </div>
  );
}

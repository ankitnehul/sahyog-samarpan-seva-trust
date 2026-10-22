import Link from "next/link";
import PageHeading from "@/components/PageHeading";

interface ComingSoonProps {
  title: string;
  titleMr: string;
  description?: string;
}

export default function ComingSoon({
  title,
  titleMr,
  description = "We are working on this section. Please check back soon.",
}: ComingSoonProps) {
  return (
    <div>
      <PageHeading titleMr={titleMr} title={title} description={description} />
      <section className="mx-auto w-full max-w-3xl px-4 pb-20 sm:px-6">
        <h2>
          <span className="font-display-mr block text-3xl text-brand-navy">लवकरच येत आहे</span>
          <span className="font-display-en mt-1 block text-2xl font-medium text-ink">
            Coming soon
          </span>
        </h2>
        <p className="mt-8">
          <Link
            href="/"
            className="inline-flex min-h-11 items-center border-b-2 border-brand-gold-ink text-brand-navy"
          >
            मुख्यपृष्ठ · Back to home
          </Link>
        </p>
      </section>
    </div>
  );
}

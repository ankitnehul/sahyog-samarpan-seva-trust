import Link from "next/link";
import { Clock } from "lucide-react";

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
    <div className="bg-white">
      <section className="bg-brand-navy py-16 text-center text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="font-marathi text-brand-gold">{titleMr}</p>
          <h1 className="mt-1 text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h1>
        </div>
      </section>

      <section className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center sm:px-6">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-cream">
          <Clock className="h-8 w-8 text-brand-saffron" />
        </div>
        <h2 className="mt-6 text-2xl font-semibold text-brand-navy">
          Coming Soon
        </h2>
        <p className="font-marathi mt-2 text-brand-saffron">लवकरच येत आहे</p>
        <p className="mt-4 text-gray-600">{description}</p>
        <Link
          href="/"
          className="mt-8 rounded-full bg-brand-navy px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-navy-dark"
        >
          Back to Home
        </Link>
      </section>
    </div>
  );
}

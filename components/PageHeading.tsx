interface PageHeadingProps {
  titleMr: string;
  title: string;
  description?: string;
}

export default function PageHeading({ titleMr, title, description }: PageHeadingProps) {
  return (
    <header className="mx-auto w-full max-w-7xl px-4 pb-6 pt-8 sm:px-6 sm:pt-10 lg:px-8">
      <h1 className="max-w-4xl text-brand-navy">
        <span className="font-display-mr block text-[clamp(2.25rem,6vw,3.5rem)] leading-[1.15]">
          {titleMr}
        </span>
        <span className="font-display-en mt-3 block text-[clamp(1.5rem,3vw,2.25rem)] font-medium leading-tight text-ink">
          {title}
        </span>
      </h1>
      {description ? (
        <p className="mt-4 max-w-prose text-base leading-7 text-ink-soft">{description}</p>
      ) : null}
      <div className="mt-6 h-0.5 w-16 bg-brand-gold-ink" aria-hidden="true" />
    </header>
  );
}

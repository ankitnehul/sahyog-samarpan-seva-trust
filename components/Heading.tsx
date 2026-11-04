interface HeadingProps {
  titleMr?: string;
  title: string;
  /** Page and hero titles are h1; everything else is h2. */
  as?: "h1" | "h2";
  size?: "display" | "page" | "section" | "card";
  className?: string;
}

const marathi = {
  display: "text-[clamp(2.6rem,8vw,4.75rem)] leading-none",
  page: "text-[clamp(2.25rem,6vw,3.5rem)] leading-[1.15]",
  section: "text-[clamp(1.8rem,4vw,2.6rem)] leading-tight",
  card: "text-[clamp(1.35rem,3vw,1.6rem)] leading-tight",
} as const;

const english = {
  display: "mt-2 text-[clamp(1.5rem,3vw,2.25rem)] font-medium leading-tight",
  page: "mt-3 text-[clamp(1.5rem,3vw,2.25rem)] font-medium leading-tight",
  section: "mt-2 text-[clamp(1.35rem,2.5vw,1.85rem)] font-medium leading-tight",
  card: "mt-1 text-base font-medium leading-snug",
} as const;

/**
 * Marathi first, English under it. Colour follows the surrounding Section
 * (navy on paper, white on navy), so no tone prop is needed.
 */
export default function Heading({
  titleMr,
  title,
  as: Tag = "h2",
  size = "section",
  className = "",
}: HeadingProps) {
  return (
    <Tag className={className}>
      {titleMr && (
        <span data-enter className={`band-title font-display-mr block ${marathi[size]}`}>
          {titleMr}
        </span>
      )}
      <span
        data-enter={titleMr ? "follow" : ""}
        className={`band-text font-display-en block ${titleMr ? english[size] : "text-2xl font-medium leading-tight"}`}
      >
        {title}
      </span>
    </Tag>
  );
}

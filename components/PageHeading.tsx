import CoverBand from "@/components/CoverBand";
import { allowsCoverBand } from "@/lib/cover-band";

interface PageHeadingProps {
  titleMr: string;
  title: string;
  description?: string;
  surface?: "paper" | "navy" | "photo";
  photoSrc?: string;
  photoPosition?: string;
}

export default function PageHeading({
  titleMr,
  title,
  description,
  surface = "paper",
  photoSrc,
  photoPosition,
}: PageHeadingProps) {
  const showPhoto = surface === "photo" && allowsCoverBand(photoSrc);
  const content = (
    <div
      className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${
        showPhoto ? "py-10 sm:py-14" : "pb-6 pt-8 sm:pt-10"
      }`}
    >
      <h1 className="max-w-4xl">
        <span
          data-enter
          className="band-title font-display-mr block text-[clamp(2.25rem,6vw,3.5rem)] leading-[1.15]"
        >
          {titleMr}
        </span>
        <span
          data-enter="follow"
          className="band-text font-display-en mt-3 block text-[clamp(1.5rem,3vw,2.25rem)] font-medium leading-tight"
        >
          {title}
        </span>
      </h1>
      {description ? (
        <p
          data-enter="follow"
          className="band-soft mt-4 max-w-prose text-base leading-7"
        >
          {description}
        </p>
      ) : null}
      <div
        data-enter="follow"
        className="band-rule mt-6 h-0.5 w-16"
        aria-hidden="true"
      />
    </div>
  );

  if (surface === "photo") {
    return (
      <CoverBand
        as="header"
        src={photoSrc}
        position={photoPosition}
        fallback="paper"
      >
        {content}
      </CoverBand>
    );
  }

  return <header className={surface === "navy" ? "surface-ink" : "surface-paper"}>{content}</header>;
}

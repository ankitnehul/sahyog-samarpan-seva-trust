import type { BgImageProps } from "@/components/BgImage";
import Heading from "@/components/Heading";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";

interface PageHeadingProps {
  titleMr: string;
  title: string;
  description?: string;
  surface?: "paper" | "navy" | "photo";
  bg?: BgImageProps;
}

export default function PageHeading({
  titleMr,
  title,
  description,
  surface = "paper",
  bg,
}: PageHeadingProps) {
  return (
    <Section as="header" tone={surface} bg={bg} size="header">
      <Heading as="h1" size="page" titleMr={titleMr} title={title} className="max-w-4xl" />
      {description ? (
        <Reveal as="p" follow className="band-soft mt-4 max-w-prose text-base leading-7">
          {description}
        </Reveal>
      ) : null}
      <Reveal follow className="band-rule mt-6 h-0.5 w-16">
        <span className="sr-only" />
      </Reveal>
    </Section>
  );
}

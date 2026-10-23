import { siteConfig } from "@/data/site";
import type { AboutContent } from "@/types";

interface AboutSectionsProps {
  content: AboutContent;
  /** Apply the Devanagari font to the whole block (for Marathi content). */
  marathi?: boolean;
  /** Preface, the objectives list, or every section after the objectives. */
  part: "intro" | "objectives" | "rest";
  /** White type when the objectives sit on the navy band. */
  tone?: "paper" | "inverse";
}

function isGovernance(title: string) {
  return title === "Governance" || title === "व्यवस्थापन";
}

function isCommitment(title: string) {
  return title === "Our Commitment" || title === "आमची प्रतिबद्धता";
}

function isObjectives(title: string) {
  return title === "Our Objectives" || title === "आमची उद्दिष्टे";
}

export function AboutSections({
  content,
  marathi = false,
  part,
  tone = "paper",
}: AboutSectionsProps) {
  const inverse = tone === "inverse";

  if (part === "intro") {
    return (
      <p
        data-enter
        className={`max-w-3xl text-lg leading-9 sm:text-xl sm:leading-10 ${marathi ? "font-marathi" : ""}`}
      >
        {content.intro}
      </p>
    );
  }

  const sections = content.sections.filter((section) =>
    part === "objectives" ? isObjectives(section.title) : !isObjectives(section.title),
  );

  if (sections.length === 0) return null;

  return (
    <div className={marathi ? "font-marathi" : undefined}>
      <div className="space-y-10">
        {sections.map((section) => {
          const governance = isGovernance(section.title);
          const commitment = isCommitment(section.title);
          return (
            <section
              key={section.title}
              className={
                governance
                  ? "border border-rule bg-paper-deep p-5 sm:p-6"
                  : inverse
                    ? "border-t border-white/20 pt-8 first:border-t-0 first:pt-0"
                    : "border-t border-rule pt-8"
              }
            >
              <h2
                data-enter
                className={
                  marathi
                    ? `font-display-mr text-[clamp(1.6rem,3vw,2rem)] leading-tight ${inverse ? "text-white" : "text-brand-navy"}`
                    : `font-display-en text-[clamp(1.5rem,3vw,1.85rem)] font-medium leading-tight ${inverse ? "text-white" : "text-brand-navy"}`
                }
              >
                {section.title}
              </h2>

              <div data-enter="follow">
                {governance && (
                  <p className="mt-4 max-w-3xl text-lg leading-8 sm:text-xl sm:leading-9">
                    {marathi ? siteConfig.fees.mr : siteConfig.fees.en}
                  </p>
                )}

                {section.paragraphs && commitment && (
                  <blockquote
                    className={`mt-4 max-w-3xl border-l-4 border-brand-gold-ink pl-4 text-[clamp(1.45rem,3vw,1.85rem)] leading-snug text-brand-navy ${
                      marathi ? "font-display-mr" : "font-display-en font-medium"
                    }`}
                  >
                    {section.paragraphs[0]}
                  </blockquote>
                )}

                {section.paragraphs && !commitment && (
                  <div
                    className={`mt-4 max-w-3xl space-y-5 text-lg leading-9 sm:text-xl sm:leading-10 ${inverse ? "text-white" : ""}`}
                  >
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                )}

                {section.bullets && (
                  <ul
                    className={`mt-4 max-w-3xl space-y-4 text-lg leading-9 sm:text-xl sm:leading-10 ${inverse ? "text-white" : ""}`}
                  >
                    {section.bullets.map((item) => (
                      <li
                        key={item}
                        className={`border-t pt-3 ${inverse ? "border-white/20" : "border-rule"}`}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}

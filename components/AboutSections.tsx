import { siteConfig } from "@/data/site";
import type { AboutContent } from "@/types";

interface AboutSectionsProps {
  content: AboutContent;
  /** Apply the Devanagari font to the whole block (for Marathi content). */
  marathi?: boolean;
}

function isGovernance(title: string) {
  return title === "Governance" || title === "व्यवस्थापन";
}

function isCommitment(title: string) {
  return title === "Our Commitment" || title === "आमची प्रतिबद्धता";
}

export function AboutSections({ content, marathi = false }: AboutSectionsProps) {
  return (
    <div className={marathi ? "font-marathi" : undefined}>
      <p className="max-w-3xl text-lg leading-9 sm:text-xl sm:leading-10">{content.intro}</p>

      <div className="mt-10 space-y-10">
        {content.sections.map((section) => {
          const governance = isGovernance(section.title);
          const commitment = isCommitment(section.title);
          return (
            <section
              key={section.title}
              className={
                governance
                  ? "border border-rule bg-paper-deep p-5 sm:p-6"
                  : "border-t border-rule pt-8"
              }
            >
              <h2
                className={
                  marathi
                    ? "font-display-mr text-[clamp(1.6rem,3vw,2rem)] leading-tight text-brand-navy"
                    : "font-display-en text-[clamp(1.5rem,3vw,1.85rem)] font-medium leading-tight text-brand-navy"
                }
              >
                {section.title}
              </h2>

              {governance && (
                <p className="mt-4 max-w-3xl text-lg leading-8 sm:text-xl sm:leading-9">
                  {marathi
                    ? `सामान्य सदस्यत्व ${siteConfig.fees.ordinary} · आजीवन सदस्यत्व ${siteConfig.fees.lifetime}.`
                    : `Ordinary membership ${siteConfig.fees.ordinary}. Lifetime membership ${siteConfig.fees.lifetime}.`}
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
                <div className="mt-4 max-w-3xl space-y-5 text-lg leading-9 sm:text-xl sm:leading-10">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              )}

              {section.bullets && (
                <ul className="mt-4 max-w-3xl space-y-4 text-lg leading-9 sm:text-xl sm:leading-10">
                  {section.bullets.map((item) => (
                    <li key={item} className="border-t border-rule pt-3">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}

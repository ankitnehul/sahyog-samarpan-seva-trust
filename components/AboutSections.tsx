import type { AboutContent } from "@/types";

interface AboutSectionsProps {
  content: AboutContent;
  /** Apply the Devanagari font to the whole block (for Marathi content). */
  marathi?: boolean;
}

export function AboutSections({ content, marathi = false }: AboutSectionsProps) {
  return (
    <div className={`space-y-10 ${marathi ? "font-marathi" : ""}`}>
      <p className="text-base leading-relaxed text-gray-700">{content.intro}</p>

      {content.sections.map((section) => (
        <section key={section.title}>
          <h3 className="text-lg font-semibold text-brand-navy sm:text-xl">
            {section.title}
          </h3>
          <div className="mt-1 h-0.5 w-12 rounded-full bg-brand-saffron" />

          {section.paragraphs && (
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-gray-700 sm:text-base">
              {section.paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          )}

          {section.bullets && (
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-700 sm:text-base">
              {section.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </div>
  );
}

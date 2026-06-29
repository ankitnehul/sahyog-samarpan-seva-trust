import type { AboutContent } from "@/types";

interface AboutSectionsProps {
  content: AboutContent;
}

export function AboutSections({ content }: AboutSectionsProps) {
  return (
    <div className="space-y-12">
      {/* Intro: English then Marathi */}
      <div className="space-y-3">
        <p className="text-base leading-relaxed text-gray-700">
          {content.intro}
        </p>
        <p className="font-marathi text-base leading-relaxed text-gray-700">
          {content.introMr}
        </p>
      </div>

      {content.sections.map((section) => (
        <section key={section.title}>
          {/* Common bilingual heading */}
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h2 className="text-lg font-semibold text-brand-navy sm:text-xl">
              {section.title}
            </h2>
            <span className="font-marathi text-base text-brand-saffron">
              {section.titleMr}
            </span>
          </div>
          <div className="mt-1 h-0.5 w-12 rounded-full bg-brand-saffron" />

          {/* English paragraphs */}
          {section.paragraphs && (
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-gray-700 sm:text-base">
              {section.paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          )}

          {/* English bullets */}
          {section.bullets && (
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-700 sm:text-base">
              {section.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}

          {/* Marathi paragraphs */}
          {section.paragraphsMr && (
            <div className="font-marathi mt-4 space-y-3 text-sm leading-relaxed text-gray-700 sm:text-base">
              {section.paragraphsMr.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          )}

          {/* Marathi bullets */}
          {section.bulletsMr && (
            <ul className="font-marathi mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-700 sm:text-base">
              {section.bulletsMr.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </div>
  );
}

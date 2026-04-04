import { type ServiceSection } from "../types";
import OfferingCard from "./OfferingCard";

interface ServiceSectionBlockProps {
  section: ServiceSection;
  isFirst?: boolean;
}

export default function ServiceSectionBlock({
  section,
  isFirst = false,
}: ServiceSectionBlockProps) {
  return (
    <section
      className={`${isFirst ? "pt-0" : "pt-16 border-t border-white/6"}`}
    >
      {/* Section heading */}
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white leading-snug">
          {section.heading}
        </h2>
        {section.subheading && (
          <p className="mt-2 text-blue-400 font-medium text-base">
            {section.subheading}
          </p>
        )}
      </div>

      {/* Body prose — rendered as paragraphs, split on \n\n */}
      {section.body && (
        <div className="mb-10 space-y-4">
          {section.body.split("\n\n").map((para, i) => (
            <p key={i} className="text-gray-400 leading-relaxed">
              {para}
            </p>
          ))}
        </div>
      )}

      {/* Top-level bullet list (Infrastructure pattern) */}
      {section.bullets && section.bullets.length > 0 && (
        <div className="mb-10 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {section.bullets.map((bullet) => (
            <div
              key={bullet}
              className="flex items-center gap-3 rounded-lg border border-white/8 
                         bg-white/2.5 px-4 py-3"
            >
              <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
              <span className="text-gray-300 text-sm">{bullet}</span>
            </div>
          ))}
        </div>
      )}

      {/* Offerings grid */}
      {section.offerings && section.offerings.length > 0 && (
        <div
          className={`grid gap-4 mb-10 ${
            section.offerings.length === 1
              ? "grid-cols-1"
              : "grid-cols-1 lg:grid-cols-2"
          }`}
        >
          {section.offerings.map((offering, i) => (
            <OfferingCard key={offering.title} offering={offering} index={i} />
          ))}
        </div>
      )}

      {/* Section image */}
      {/* {section.image && (
        <div className="rounded-2xl overflow-hidden border border-white/8">
          <img
            src={section.image}
            alt={section.heading}
            className="w-full h-72 object-cover opacity-80"
            loading="lazy"
          />
        </div>
      )} */}
    </section>
  );
}
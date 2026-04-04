import { type OfferingItem } from "../types";

interface OfferingCardProps {
  offering: OfferingItem;
  index: number;
}

export default function OfferingCard({ offering, index }: OfferingCardProps) {
  return (
    <div
      className="group relative rounded-xl border border-white/8 bg-white/2.5 
                 hover:bg-white/5 hover:border-blue-500/20 p-6
                 transition-all duration-300"
    >
      {/* Index pip */}
      <div className="flex items-start gap-4">
        <span
          className="shrink-0 w-7 h-7 rounded-md bg-blue-600/15 border border-blue-500/20 
                     flex items-center justify-center text-blue-400 text-xs font-bold mt-0.5"
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="flex-1 min-w-0">
          {offering.title && (
            <h4 className="text-white font-semibold text-base mb-2 leading-snug">
              {offering.title}
            </h4>
          )}

          {offering.description && (
            <p className="text-gray-400 text-sm leading-relaxed">
              {offering.description}
            </p>
          )}

          {/* Bullet list (e.g. ERP scope items) */}
          {offering.bullets && offering.bullets.length > 0 && (
            <ul className="mt-4 space-y-2">
              {offering.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-center gap-2.5 text-sm text-gray-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                  {bullet}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Hover accent line */}
      <div
        className="absolute bottom-0 left-6 right-6 h-px bg-linear-to-r 
                   from-transparent via-blue-500/40 to-transparent 
                   opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
    </div>
  );
}
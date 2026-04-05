import { Link } from "react-router-dom";

interface CTABannerProps {
  heading?: string;
  subtext?: string;
  buttonLabel?: string;
  buttonHref?: string;
}

export default function CTABanner({
  heading = "Ready to Get Free Consultations For any kind of IT Solutions?",
  subtext,
  buttonLabel = "Get a Quote",
  buttonHref = "/reach-us",
}: CTABannerProps) {
  return (
    <section className="relative overflow-hidden bg-[#050d1a] border-t border-white/6">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-7"
        style={{
          backgroundImage: `
      repeating-linear-gradient(45deg, rgba(255,255,255,0.8) 0, rgba(255,255,255,0.8) 1px, transparent 0, transparent 40px),
      repeating-linear-gradient(-45deg, rgba(255,255,255,0.8) 0, rgba(255,255,255,0.8) 1px, transparent 0, transparent 40px)
    `,
        }}
      />
      {/* Glow */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[200px] bg-blue-600/10 blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white leading-snug">
            {heading}
          </h2>
          {subtext && <p className="mt-3 text-gray-400 text-base">{subtext}</p>}
        </div>

        <Link
          to={buttonHref}
          className="group shrink-0 inline-flex items-center gap-2.5 bg-blue-600 
                     hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl 
                     transition-all duration-200 shadow-xl shadow-blue-600/25 
                     hover:shadow-blue-500/30 hover:-translate-y-0.5 whitespace-nowrap"
        >
          {buttonLabel}
          <span className="group-hover:translate-x-1 transition-transform duration-200">
            →
          </span>
        </Link>
      </div>
    </section>
  );
}

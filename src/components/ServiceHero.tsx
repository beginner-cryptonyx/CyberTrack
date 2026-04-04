import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { type Service } from "../types";

interface ServiceHeroProps {
  service: Service;
}

export default function ServiceHero({ service }: ServiceHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#050d1a] pt-24 pb-20">
      {/* Ambient grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Blue radial glow, top-left */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-sm text-gray-500 mb-10">
          <Link to="/" className="hover:text-gray-300 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to="/#services" className="hover:text-gray-300 transition-colors">
            Services
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-gray-300">{service.name}</span>
        </nav>

        {/* Eyebrow */}
        <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-4">
          Our Services
        </p>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold text-white leading-[1.08] max-w-3xl">
          {service.name}
        </h1>

        {/* Tagline */}
        <p className="mt-5 text-xl text-blue-300 font-medium max-w-2xl">
          {service.tagline}
        </p>

        {/* Description */}
        <p className="mt-4 text-gray-400 text-lg leading-relaxed max-w-2xl">
          {service.heroDescription}
        </p>

        {/* CTA row */}
        <div className="mt-10 flex items-center gap-4">
          <Link
            to="/reach-us"
            className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 
                       text-white px-7 py-3.5 rounded-lg font-semibold transition-all duration-200
                       shadow-lg shadow-blue-600/25 hover:shadow-blue-500/30 hover:-translate-y-0.5"
          >
            Get a Free Quote
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </Link>
          <a
            href="#content"
            className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-1.5"
          >
            <span>Explore this service</span>
            <ChevronRight className="w-4 h-4 rotate-90" />
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
}
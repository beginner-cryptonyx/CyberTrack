import { useParams, Navigate } from "react-router-dom";
import { getServiceBySlug } from "../data/services";
import ServiceHero from "../components/ServiceHero";
// import ServiceSidebar from "../components/services/ServiceSidebar";
import ServiceSectionBlock from "../components/ServiceSectionBlock";
// import CTABanner from "../components/CTABanner";

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug ?? "");

  // Unknown slug → 404
  if (!service) return <Navigate to="/404" replace />;

  return (
    <div className="min-h-screen bg-[#070f1c] text-white">
      {/* Page hero */}
      <ServiceHero service={service} />

      {/* Main content + sidebar */}
      <div id="content" className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-14">

          {/* Sidebar — stacks below on mobile */}
          {/* <ServiceSidebar /> */}

          {/* Content column */}
          <main className="flex-1 min-w-0 space-y-16">
            {service.sections.map((section, i) => (
              <ServiceSectionBlock
                key={section.heading}
                section={section}
                isFirst={i === 0}
              />
            ))}

            {/* Use cases — only if data is present */}
            {service.useCases && service.useCases.length > 0 && (
              <section className="pt-16 border-t border-white/6">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Who This Is For
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.useCases.map((useCase) => (
                    <div
                      key={useCase}
                      className="flex items-start gap-3 rounded-xl border border-white/8
                                 bg-white/2.5 px-5 py-4"
                    >
                      <span className="mt-1 w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                      <span className="text-gray-300 text-sm leading-snug">
                        {useCase}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </main>
        </div>
      </div>

      {/* CTA banner */}
      {/* <CTABanner /> */}
    </div>
  );
}
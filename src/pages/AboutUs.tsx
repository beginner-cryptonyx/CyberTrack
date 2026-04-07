import { services } from "../data/services";
import * as Icons from "lucide-react";
import {
  Target,
  Lightbulb,
  Users,
  Zap,
  Lock,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import ResponsiveView from "../components/ResponsiveView";

export default function AboutUs() {
  const whyChooseUs = [
    {
      icon: Users,
      title: "Experienced Specialists",
      description:
        "Highly qualified team with deep expertise across multiple verticals",
    },
    {
      icon: Zap,
      title: "Customized Solutions",
      description:
        "Tailored approaches designed specifically for your unique requirements",
    },
    {
      icon: Lock,
      title: "Security & Compliance",
      description:
        "Highest standards of security, compliance, and data protection",
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description:
        "Track record of delivering solutions that exceed expectations",
    },
  ];

  return (
    <div className="pt-24 bg-cyber-navy/30">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-cyber-navy via-cyber-navy/80 to-transparent py-20 px-4">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm text-cyber-teal font-bold tracking-widest mb-4">
            ABOUT CYBERTRACK
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Leverage Expert Solutions Across Multiple Domains
          </h1>
          <p className="text-gray-400 text-lg">
            Your trusted partner in digital transformation and technology
            excellence
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          <div className="flex gap-3 md:flex-col items-center text-4xl md:text-7xl font-black text-white/10 leading-none">
            <span>ABOUT</span>
            <span>US</span>
          </div>
          <div className="space-y-6 col-span-2">
            <p className="text-gray-300 text-lg leading-relaxed">
              Cybertrack is committed to helping companies of all sizes with
              superior technological solutions. We specialize in a broad variety
              of services, including Application Development Management, Data
              Management, Digital Transformation, and Infrastructure Management,
              thanks to our team of highly qualified and experienced
              specialists.
            </p>
            <p className="text-gray-400 text-base leading-relaxed">
              Our mission is to optimize our customers' technological
              investments, enhance their operations, and boost their
              competitiveness. We take great satisfaction in our ability to
              tailor solutions to the specific requirements of each customer.
            </p>
            <div className="grid grid-cols-2 gap-3 pt-4">
              {services.map((service) => {
                const Icon = Icons[
                  service.icon as keyof typeof Icons
                ] as React.ElementType;
                return (
                  <a href={`services/${service.slug}`} key={service.slug} className="group flex items-center gap-3 cursor-pointer  transition-all duration-300 ">
                    <div className=" group-hover:scale-110 w-8 h-8 rounded-lg border border-cyber-blue/40 bg-cyber-blue/10 flex items-center justify-center shrink-0 transition-all duration-300">
                      <Icon
                        className="w-4 h-4 text-cyber-blue group-hover:scale-105 relative transition-all duration-300"
                        strokeWidth={1.75}
                      />
                    </div>
                    <span className="text-sm text-gray-300 group-hover:text-gray-50 transition-all">
                      {service.name}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="py-16 px-4 max-w-6xl mx-auto ">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Vision Card */}
          <div className="group relative hover:-translate-y-2 bg-gradient-to-br from-cyber-navy-2/60 to-cyber-navy/40 border border-cyber-blue/20 rounded-xl p-8 hover:border-cyber-blue/40 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-cyber-teal" />
                <h3 className="text-2xl font-bold text-white">Our Vision</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                We strive to be a trusted IT advisor to meet the ever-changing
                needs of the industry and our clients.
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="group relative hover:-translate-y-2 bg-gradient-to-br from-cyber-navy-2/60 to-cyber-navy/40 border border-cyber-blue/20 rounded-xl p-8 hover:border-cyber-blue/40 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="w-6 h-6 text-cyber-teal" />
                <h3 className="text-2xl font-bold text-white">Our Mission</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Provide exceptional IT services and support to our clients,
                empowering them to achieve their goals through the effective use
                of technology with unwavering commitment to trust, reliability,
                and continuous improvement.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-16 px-4 max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose Cybertrack
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyber-blue to-cyber-teal rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="group bg-gradient-to-br from-cyber-navy-2/40 to-cyber-navy/30 border border-gray-700/50 rounded-lg p-6 hover:border-cyber-blue/40 hover:bg-gradient-to-br hover:from-cyber-navy-2/60 transition-all duration-300"
              >
                <IconComponent className="w-8 h-8 text-cyber-blue mb-4 group-hover:text-cyber-teal transition-colors" />
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Services Overview */}
      <div className="py-16 px-4 max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Services
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyber-blue to-cyber-teal rounded-full"></div>
        </div>
        <p className="text-gray-400 mb-8 max-w-2xl">
          We specialize in comprehensive technology solutions designed to
          transform and optimize your operations across multiple domains.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {services.map((service) => {
            const Icon = Icons[
              service.icon as keyof typeof Icons
            ] as React.ElementType;
            return (
              <a
                href={`services/${service.slug}`}
                key={service.slug}
                className="group flex items-start gap-4 p-6 bg-gradient-to-br from-cyber-navy-2/30 to-cyber-navy/20 border border-gray-700/30 rounded-lg hover:border-cyber-blue/40 hover:bg-gradient-to-br hover:from-cyber-navy-2/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-cyber-blue/20 border border-cyber-blue/40 flex items-center justify-center shrink-0 group-hover:bg-cyber-blue/30 transition-colors">
                  <Icon className="w-6 h-6 text-cyber-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">
                    {service.name}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {service.description ||
                      "Comprehensive solutions tailored to your needs"}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4 max-w-4xl mx-auto ">
        <div className="relative bg-gradient-to-r from-cyber-blue/20 via-cyber-navy/40 to-cyber-teal/20 border border-cyber-blue/40 rounded-xl p-12 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/10 to-transparent"></div>
          <div className="relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Technology?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Whether you need ongoing support or a one-time project, we have
              the expertise and resources to deliver results that exceed
              expectations.
            </p>
            <button
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-cyber-blue to-cyber-blue/80 hover:from-cyber-blue/90 hover:to-cyber-blue/70 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-cyber-blue/30"
            >
              Get a Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import Card from "../components/Card";
import CTABanner from "../components/CTAbanner";
import Hero from "../components/Hero";
import { services } from "../data/services";

export function Home() {
  return (
    <div className="relative overflow-hidden isolate ">
      <Hero></Hero>
        <div className="h-px bg-linear-to-r from-cyber-blue/20 via-cyber-teal/40 to-cyber-blue/20 mb-2"></div>
      <div className="relative px-0 z-50 mt-5 h-80">
        <p className="ml-12 text-cyber-teal relative text-sm  font-semibold">Our Services</p>
        <div className="grid grid-cols-4 px-8 gap-6 border-white/10 items-start ">
          {services.map((service) => (
            <Card
              service={service.name}
              question={service.cardQuestion}
              points={service.cardPoints}
              icon={service.icon}
              key={service.name}
              slug={service.slug}
            ></Card>
          ))}
        </div>
      </div>
      <CTABanner></CTABanner>
      <div className="absolute h-90 w-90 z-0 bg-purple-600/20 -bottom-30 -right-30 rounded-2xl blur-[150px] pointer-events-none"></div>
    </div>
  );
}

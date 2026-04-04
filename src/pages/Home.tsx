import Card from "../components/Card";
import Hero from "../components/Hero";
import { services } from "../data/services";

export function Home() {
  return (
    <div className="relative overflow-hidden isolate ">
      <Hero></Hero>
      <div className="pb-30 px-0 z-50 -mt-28 ">
        {/* <div className="h-px bg-linear-to-r from-cyber-blue/50 via-cyber-teal/90 to-cyber-blue/50 my-2"></div> */}
        <p className="ml-12 text-cyber-teal relative text-2xl mb-3 font-semibold underline">Our Services</p>
        <div className="relative grid grid-cols-4 px-8 gap-6 border-white/10">
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
      <div className="absolute h-90 w-90 z-0 bg-purple-600/20 -bottom-30 -right-30 rounded-2xl blur-[150px] pointer-events-none"></div>
    </div>
  );
}

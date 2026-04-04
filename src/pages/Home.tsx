import Card from "../components/Card";
import Hero from "../components/Hero";
import { services } from "../data/services";

export function Home() {
  return (
    <div>
      <Hero></Hero>
      <div className="grid grid-cols-4 gap-6 border-t border-white/10 pt-10 pb-30 mt-10">
        {services.map((service) => (
          <Card
            service={service.name}
            question={service.cardQuestion}
            points={service.cardPoints}
            icon={service.icon}
            key={service.name}
          ></Card>
        ))}
      </div>

    </div>
  );
}

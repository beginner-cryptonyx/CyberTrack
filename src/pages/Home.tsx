import Card from "../components/Card";
import Hero from "../components/Hero";
import { services } from "../data/services";

export function Home() {
  return (
    <div>
      <Hero></Hero>
      <div className="grid grid-cols-4 gap-6 ">
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
      <div>content</div>
      <div>content</div>
      <div>content</div>
      <div>content</div>
      <div>content</div>
      <div>content</div>
      <div>content</div>
      <div>content</div>
      <div>content</div>
      <div>content</div>
      <div>content</div>
      <div>content</div>
      <div>content</div>
    </div>
  );
}

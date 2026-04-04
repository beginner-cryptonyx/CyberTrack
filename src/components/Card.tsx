import * as Icons from "lucide-react";

interface CardProps {
  question: string;
  service: string;
  points: string[];
  icon: string
}

export default function Card({question, service, points, icon}:CardProps) {
  const Icon = Icons[icon as keyof typeof Icons] as React.ElementType;
  return (
    <div
      className="group relative overflow-hidden rounded-2xl p-5 m-2 bg-white/5 border border-white/10 
            transition-all duration-300 hover:bg-white/10 hover:scale-[1.02] cursor-pointer w-fit "
    >
      <div className="absolute top-4 right-4">
        <div
          className="absolute inset-0 bg-blue-500/90 blur-xl rounded-full opacity-0 
                group-hover:opacity-100 transition duration-300"
        ></div>

        <div className="relative text-blue-400 group-hover:scale-110 transition duration-300">
          {Icon && <Icon className="w-7 h-7 text-cyber-teal" />}
        </div>
      </div>

      <div className="pr-12">
        <p className="text-lg font-semibold leading-[1.2] text-white">
          {question}
        </p>

        <p className="text-sm text-gray-400 mt-2">
          {service}
          <span className="transtion-all duration-300 group-hover:translate-x-10 inline-block group-hover:opacity-0">
            →
          </span>
        </p>
      </div>

      <div
        className="transition-all duration-300 ease-out
            max-h-0 overflow-hidden opacity-0
            group-hover:max-h-40 group-hover:opacity-100 group-hover:mt-4"
      >
        <ul className="text-sm text-gray-300 space-y-1">
            {points.map((point) => (<li>• {point}</li>))}
        </ul>

        <p className="mt-4 text-blue-400 text-sm font-medium">
          Learn how we help →
        </p>
      </div>
    </div>
  );
}

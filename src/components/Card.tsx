import * as Icons from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ResponsiveView from "./ResponsiveView";

interface CardProps {
  question: string;
  service: string;
  points: string[];
  slug: string;
  icon: string;
}

function DesktopCard({ question, service, slug, points, icon }: CardProps) {
  const Icon = Icons[icon as keyof typeof Icons] as React.ElementType;
  const navigate = useNavigate();
  return (
    <div onClick={() => {navigate(`/services/${slug}`)}}
      className="group relative overflow-hidden rounded-2xl rounded-tr-sm pt-5 pr-5 pl-6 pb-5 m-2 bg-gray-900 border border-white/10 
            transition-all duration-400 hover:bg-white/10 hover:scale-[1.02] cursor-pointer w-fit z-10 hover:border-blue-400/30 min-h-40"
    >
      <div className="absolute top-4 right-4 flex items-center justify-center w-15 h-15">
        <div
          className="absolute inset-0 bg-blue-500/40 opacity-0
                group-hover:opacity-100 transition duration-800 text-center rounded-full blur-lg "
        ></div>

        <div className="relative text-blue-400 group-hover:scale-125 transition duration-400 flex items-center">
          {Icon && <Icon className="w-7 h-7 text-cyber-teal" />}
        </div>
      </div>

      <div className="pr-12">
        <p className="text-lg font-semibold leading-[1.2] text-white">
          {question}
        </p>

        <p className="text-sm text-gray-400 mt-2">
          {service}
          <span className="transtion-all duration-400 group-hover:translate-x-4 inline-block group-hover:opacity-50">
            →
          </span>
        </p>
      </div>

      <div
        className="transition-all duration-400 ease-out z-50
            max-h-0 overflow-hidden opacity-0
            group-hover:max-h-[150px] h-[150px] group-hover:opacity-100 group-hover:mt-4"
      >
        <ul className="text-sm text-gray-400 space-y-1">
          {points.map((point) => (
            <li>• {point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function MobileCard({ question, service, slug, points, icon }: CardProps) {
  const Icon = Icons[icon as keyof typeof Icons] as React.ElementType;
  return (
    <div
      className="group relative overflow-hidden rounded-2xl rounded-tr-sm pt-5 pr-5 pl-6 pb-5 m-2 bg-gray-900 border border-white/10 
            transition-all duration-400 hover:bg-white/10 hover:scale-[1.02] cursor-pointer w-fit z-10 hover:border-blue-400/30 min-h-40"
    >
      <div className="absolute top-4 right-3 flex items-center justify-center w-10 h-10">
        <div
          className="absolute inset-0 bg-blue-500/40 
                group-hover:opacity-100 transition duration-800 text-center rounded-full blur-lg "
        ></div>

        <div className="relative text-blue-400 group-hover:scale-125 transition duration-400 flex items-center">
          {Icon && <Icon className="w-6 h-6 text-cyber-teal" />}
        </div>
      </div>

      <div className="pr-12">
        <p className="text-lg font-semibold leading-[1.2] text-white h-10">
          {service}
        </p>

        <p className="text-sm text-gray-400 mt-2">
          {question}
          <span className="transtion-all duration-400 group-hover:translate-x-4 inline-block group-hover:opacity-50">
            →
          </span>
        </p>
      </div>

      <div
        className="transition-all duration-400 ease-out z-50
            overflow-hidden
            group-hover:max-h-40  mt-4"
      >
        <ul className="text-sm text-gray-200/80 space-y-1">
          {points.map((point) => (
            <li>• {point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default function Card({
  question,
  service,
  slug,
  points,
  icon,
}: CardProps) {
  return (
    <ResponsiveView
      desktop={
        <DesktopCard
          icon={icon}
          points={points}
          slug={slug}
          question={question}
          service={service}
        />
      }
      mobile={
        <MobileCard
          icon={icon}
          points={points}
          slug={slug}
          question={question}
          service={service}
        />
      }
    ></ResponsiveView>
  );
}

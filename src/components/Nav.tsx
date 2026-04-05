import { Link, useLocation } from "react-router-dom";
import ResponsiveView from "./ResponsiveView";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { services } from "../data/services";

function DesktopNav() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const isActive = (path: string) => location.pathname.startsWith(path);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const [showService, setShowService] = useState<boolean>(false);
  return (
    <div className={`fixed top-0 z-10 w-full flex flex-row p-4 items-center justify-between ${scrolled ? "bg-cyber-navy/70 backdrop-blur-3xl": ""}`}>
      <img src="CyberTrackLogo.webp" alt="" className="h-10 ml-4" />
      <ul className="flex flex-row gap-6">
        <li
          className="nav-item flex flex-row items-center relative cursor-pointer"
          onMouseEnter={() => setShowService(true)}
          onMouseLeave={() => setShowService(false)}
        >
          <button className="flex flex-row items-center relative cursor-pointer">
            <ChevronDown
              className={`text-sm w-4 mr-1 ${showService ? "rotate-180" : "rotate-0"} transition duration-300 ease-in-out`}
            ></ChevronDown>
            <span>Services</span>
          </button>
          <div
            className={`absolute top-0  z-50 pt-10 transiton duration-300 rounded-md ${showService ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          >
            <ul className="flex flex-col gap-3 bg-cyber-navy">
              {services.map((service) => (
                <li className="hover:bg-cyber-navy-2 p-3 px-10 rounded-lg">
                  {service.name}
                </li>
              ))}
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <Link to={"/about"} className="">
            About us
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/reach-us"} className="">
            Reach Us
          </Link>
        </li>
      </ul>

      <button className="group bg-cyber-blue hover:bg-blue-600 px-3 py-2 rounded-lg font-semibold shadow-xl shadow-blue-500/20 cursor-pointer hover:scale-[101%] transition-all duration-300 hover:-translate-y-0.5">
        Get a Quote{" "}
        <span className="group-hover:translate-x-1 inline-block transition-all duration-300">
          →
        </span>
      </button>
    </div>
  );
}

export default function Nav() {
  return <ResponsiveView mobile={""} desktop={<DesktopNav />} />;
}

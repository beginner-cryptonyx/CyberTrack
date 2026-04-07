import { Link, useLocation, useNavigate } from "react-router-dom";
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
  const activeClass = "text-white";
  const inactiveClass = "text-white/70 hover:text-white";
  

  return (
    <div
      className={`fixed top-0 z-50 w-full flex flex-row p-4 items-center justify-between ${scrolled ? "bg-cyber-navy/70 backdrop-blur-3xl" : ""}`}
    >
      <Link to={"/"} className="h-10">
        <img src="CyberTrackLogo.webp" alt="" className="h-10 ml-4" />
      </Link>
      <ul className="flex flex-row gap-6">
        <li
          className="nav-item flex flex-row items-center relative cursor-pointer hover:text-white text-white/70"
          onMouseEnter={() => setShowService(true)}
          onMouseLeave={() => setShowService(false)}
        >
          <a href="" className="z-50 group flex flex-row items-center relative cursor-pointer">
            <ChevronDown
              className={`text-sm w-4 mr-1 ${showService ? "rotate-180" : "rotate-0"} transition duration-300 ease-in-out`}
            ></ChevronDown>
            <span className="">Services</span>
          </a>
          <div
            className={`absolute top-0 z-10 pt-10 transiton duration-300 rounded-md ${showService ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          >
            <ul className="flex flex-col gap-3 bg-cyber-navy">
              {services.map((service) => (
                <Link
                to={`/services/${service.slug}`}
                  key={service.slug}
                  className="hover:bg-cyber-navy-2 p-3 px-10 rounded-lg"
                >
                  {service.name}
                </Link>
              ))}
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <Link to={"/about"} className={`${isActive("/about") ? activeClass : inactiveClass}`}>
            About us
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/reach-us"} className={` ${isActive("/reach-us") ? activeClass : inactiveClass}`} >
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

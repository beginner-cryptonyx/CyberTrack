import { useEffect, useState } from "react";
import Statistic from "./Statistic";
import { useScramble } from "use-scramble";
import ResponsiveView from "./ResponsiveView";

export default function Hero() {
  const [index, setIndex] = useState(0);

  const phrases = ["Your IT Infrastructure", "Your RCM"];

  const { ref, replay } = useScramble({
    text: phrases[index],
    speed: 0.2,
    tick: 1,
    step: 1,
    scramble: 2,
    seed: 1,
    chance: 0,
  });

  // When index changes, replay fires automatically because text prop changed.
  // This just drives the rotation.
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((i) => (i + 1) % phrases.length);
    }, 4000);

    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <div className="relative flex md:flex-row flex-col overflow-hidden pt-10 ">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-35"
      >
        <source src="video/globe.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/70 to-black/50 "></div>
      <div className="relative z-10 max-w-3xl md:ml-10 mx-2 md:mr-0 px-6 md:py-22 pb-10 pt-8 text-center md:text-left">
        <h1 className="text-3xl md:text-6xl font-bold leading-[1.1]">
          <span ref={ref} className="text-nowrap">
            Your IT Infrastructure
          </span>
          <br />
          Running Like It <span className="text-cyber-blue">Should</span>.
        </h1>

        <p className="mt-6 text-base md:text-lg text-gray-300 max-w-xl">
          150,000+ person-days of expertise helping businesses scale, optimize,
          and secure their IT systems globally.
        </p>

        <div className="flex gap-4 mt-6">
          <button className="group bg-cyber-blue hover:bg-blue-600 md:px-7 md:w-fit w-full md:py-3.5 py-2.5 mx-5 md:mx-0 rounded-lg font-semibold shadow-xl shadow-blue-500/20 cursor-pointer hover:scale-[101%] transition-all duration-300 hover:-translate-y-0.5">
            Get a Quote{" "}
            <span className="group-hover:translate-x-3 inline-block transition-all duration-300">
              →
            </span>
          </button>

          <button className="border hidden md:block border-white/30 backdrop-blur px-6 py-3 rounded-lg hover:scale-[101%] transition-all duration-300 hover:-translate-y-0.5">
            Our Services
          </button>
        </div>

        {/* Stats row */}
      </div>
      <ResponsiveView
        desktop={
          <div className="w-[40%]">
            <div className="mt-10 flex gap-8 text-sm text-gray-400 flex-col w-fit ml-20 ">
              <Statistic
                className="translate-x-9"
                value={"150K+"}
                text="Person-Days"
              ></Statistic>
              <Statistic
                className="-translate-x-15 -translate-y-3"
                value={7}
                text="Countries"
              ></Statistic>
              <Statistic
                className="translate-x-19"
                value={3}
                text="Continents"
              ></Statistic>
            </div>
          </div>
        }
        mobile={
          <div className="pb-8">
            <div className="mt-1 grid gap-2 text-sm text-gray-400 w-fit mx-auto">
              <Statistic
                value={7}
                text="Countries"
              ></Statistic>
              <Statistic
                value={3}
                text="Continents"
              ></Statistic>
              <Statistic
              className="col-span-2 text-center"
                value={"150K+"}
                text="Person-Days"
              ></Statistic>
            </div>
          </div>
        }
      ></ResponsiveView>
    </div>
  );
}

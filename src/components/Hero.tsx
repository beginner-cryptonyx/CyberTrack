import Statistic from "./Statistic";

export default function Hero() {
  return (
    <div className="relative flex flex-row overflow-hidden pt-10 min-h-screen">
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
      <div className="relative z-10 max-w-3xl ml-10 px-6 py-22">
        <h1 className="text-5xl md:text-6xl font-bold leading-[1.1]">
          Your IT Infrastructure,
          <br />
          Running Like It <span className="text-cyber-blue">Should</span>.
        </h1>

        <p className="mt-6 text-lg text-gray-300 max-w-xl">
          150,000+ person-days of expertise helping businesses scale, optimize,
          and secure their IT systems globally.
        </p>

        <div className="flex gap-4 mt-6">
          <button className="group bg-cyber-blue hover:bg-blue-600 px-7 py-3.5 rounded-lg font-semibold shadow-xl shadow-blue-500/20 cursor-pointer hover:scale-[101%] transition-all duration-300 hover:-translate-y-0.5">
            Get a Quote{" "}
            <span className="group-hover:translate-x-3 inline-block transition-all duration-300">
              →
            </span>
          </button>

          <button className="border border-white/30 backdrop-blur px-6 py-3 rounded-lg hover:scale-[101%] transition-all duration-300 hover:-translate-y-0.5">
            Our Services
          </button>
        </div>

        {/* Stats row */}
      </div>
      <div className="w-[40%]">
        <div className="mt-10 flex gap-8 text-sm text-gray-400 flex-col w-fit ml-20 ">
          <Statistic className="translate-x-9" value={"150K+"} text="Person-Days"></Statistic>
          <Statistic className="-translate-x-15 -translate-y-3" value={7} text="Countries"></Statistic>
          <Statistic className="translate-x-19" value={3} text="Continents"></Statistic>
        </div>
      </div>
    </div>
  );
}

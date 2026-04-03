import Statistic from "./Statistic";

export default function Hero() {
  return (
    <div className="relative flex flex-row overflow-hidden h-fit">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      >
        <source src="video/globe.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-transparent"></div>
      <div className="relative z-10 max-w-6xl ml-10 px-6 py-32">
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
          <button className="group bg-blue-600 hover:bg-blue-700 px-7 py-3.5 rounded-lg font-semibold shadow-xl shadow-blue-600/30 cursor-pointer hover:scale-[101%] transition-all duration-300 hover:-translate-y-0.5">
            Get a Quote <span className="group-hover:translate-x-3 inline-block transition-all duration-300">→</span>
          </button>

          <button className="border border-white/30 backdrop-blur px-6 py-3 rounded-lg hover:scale-[101%] transition-all duration-300 hover:-translate-y-0.5">
            Our Services
          </button>
        </div>

        {/* Stats row */}
        <div className="mt-5 flex gap-8 text-sm text-gray-400">
          <Statistic value={"150K+"} text="Man Hours"></Statistic>
          <Statistic value={7} text="Countries"></Statistic>
          <Statistic value={3} text="Continents"></Statistic>
        </div>
      </div>
    </div>
  );
}

import bannerStack from "../assets/banner-stack.png";

function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">

        {/* Hero Text */}
        <div className="w-full md:w-1/2">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            <span className="text-gray-900">
              Build Your Ideal
            </span>

            <br />

            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-gray-600 leading-8">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits
            your next project.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">
            <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 text-white font-semibold">
              Explore Technologies
            </button>

            <button className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-semibold">
              Learn More
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={bannerStack}
            alt="Development stack illustration"
            className="w-full max-w-md"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;
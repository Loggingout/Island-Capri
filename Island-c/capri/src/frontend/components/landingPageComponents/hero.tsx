export default function Hero() {
  return (
    <section className="w-full bg-neutral-50 px-6 md:px-16 py-16 md:py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div className="space-y-6 text-center md:text-left">
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            News brought to you by your local broadcasters
            <span className="block text-neutral-400 mt-2">
              — from YouTube, Patreon & more
            </span>
          </h1>

          <p className="text-neutral-600 text-base md:text-lg max-w-lg mx-auto md:mx-0">
            Stay informed with curated updates, independent journalism,
            and trusted creators delivering stories that matter.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="px-6 py-3 rounded-xl bg-neutral-900 text-white hover:bg-neutral-800 transition">
              Join the Platform
            </button>

            <button className="px-6 py-3 rounded-xl border border-neutral-300 hover:bg-neutral-100 transition">
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row gap-8 pt-6 justify-center md:justify-start">
            <div>
              <h3 className="text-2xl font-semibold">15.2K</h3>
              <p className="text-neutral-500 text-sm">Active Readers</p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold">4.5K</h3>
              <p className="text-neutral-500 text-sm">Broadcasters</p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold">120+</h3>
              <p className="text-neutral-500 text-sm">News Sources</p>
            </div>
          </div>

        </div>

        {/* RIGHT IMAGE COLLAGE */}
        <div className="relative flex justify-center items-center">

          {/* Top Left Image */}
          <div className="absolute top-0 left-6 md:left-12 w-40 md:w-56 h-40 md:h-56 rounded-3xl overflow-hidden shadow-lg">
            <img
              src="/amsterdam-protest.jpg"
              alt="Dummy 1"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Top Right Image */}
          <div className="absolute top-10 right-6 md:right-12 w-44 md:w-60 h-44 md:h-60 rounded-3xl overflow-hidden shadow-lg">
            <img
              src="/civil-rights.jpg"
              alt="Dummy 2"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom Center Image */}
          <div className="relative mt-40 md:mt-56 w-52 md:w-72 h-44 md:h-56 rounded-3xl overflow-hidden shadow-xl">
            <img
              src="/speak-up.jpg"
              alt="Dummy 3"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
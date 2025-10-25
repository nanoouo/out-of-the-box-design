"use client";

import ImageCarousel from "./ImageCarousel";
import Stats from "./Stats";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0f0f0f] text-white flex flex-col lg:flex-row items-center justify-center overflow-hidden">
      
      {/* === Desktop Carrousel (lg+) === */}
<div className="hidden lg:block lg:relative lg:w-3/5 lg:h-screen overflow-hidden">
  {/* Wrapper skew pour parallélogramme */}
  <div className="relative w-full h-full transform -skew-x-12">
    <ImageCarousel />
  </div>
  {/* Overlay gradient */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent pointer-events-none"></div>
</div>


      {/* === Mobile & Medium Carrousel (<lg) === */}
      <div className="block lg:hidden absolute inset-0 w-full h-full overflow-hidden">
        <ImageCarousel />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* === Contenu texte === */}
      <div className="relative z-20 flex flex-col justify-center items-center lg:items-start lg:text-left w-full lg:w-2/5 px-6 sm:px-10 lg:px-12 py-20 space-y-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold leading-snug lg:leading-tight drop-shadow-lg">
          OUT OF THE BOX <br />
          <span className="text-[#e8e56d]">Design Studio</span>
        </h1>

        <p className="text-gray-200 text-base sm:text-lg md:text-xl leading-relaxed max-w-md">
          Where every space is a masterpiece. <br />
          From concept to full realization.
        </p>

        {/* ✅ Stats animées */}
        <Stats />

        {/* Localisation */}
        <p className="mt-2 text-gray-400 text-sm sm:text-base uppercase tracking-widest">
          Based in <span className="text-[#e8e56d]">Washington DC</span> · <span className="text-[#e8e56d]">Miami</span> · <span className="text-[#e8e56d]">New York</span>
        </p>

        <div className="mt-8 sm:mt-10">
          <a
            href="#contact"
            className="inline-block bg-[#e8e56d] text-black font-semibold px-10 sm:px-12 py-4 sm:py-5 rounded-full shadow-lg hover:brightness-105 transition-transform duration-300 hover:scale-105"
          >
            Let’s Talk About Your Project
          </a>
        </div>
      </div>
    </section>
  );
}

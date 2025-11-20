"use client";

export default function ShopOurArt() {
  return (
    <section
      id="shop-art"
      className="bg-gradient-to-b from-[#0e0e0e] to-[#181818] text-white px-6 sm:px-12 lg:px-24 py-24 space-y-12"
    >

      {/* TITLE */}
      <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-[#e8e56d] drop-shadow-[0_0_10px_rgba(232,229,109,0.5)]">
        Discover Our Art Collection
      </h2>

      {/* --------------------- */}
      {/*     VERSION MOBILE    */}
      {/* --------------------- */}
      <div className="flex flex-col items-center mb-12 md:hidden">
        <div
          className="
            w-full
            max-w-md
            rounded-2xl
            overflow-hidden
            shadow-lg
            border border-[#333]
          "
        >
          <video
            src="/pres.mp4"
            controls
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-auto object-contain bg-black"
          />
        </div>
      </div>

      {/* --------------------- */}
      {/*   VERSION DESKTOP     */}
      {/* --------------------- */}
      <div className="hidden md:flex flex-col items-center mb-12">
        <div
          className="
            w-full
            max-w-2xl   /* Medium */
            lg:max-w-xl /* Large */
            rounded-2xl
            overflow-hidden
            shadow-lg
            border border-[#333]
          "
        >
          <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
            <video
              src="/pres.mp4"
              controls
              autoPlay
              muted
              loop
              playsInline
              className="absolute top-0 left-0 w-full h-full object-contain bg-black"
            />
          </div>
        </div>
      </div>

      {/* TEXT */}
      <p className="text-center text-gray-300 max-w-2xl mx-auto text-lg">
        Explore our exclusive selection of luxurious handcrafted artworks.
      </p>

      {/* BUTTON */}
      <div className="flex justify-center mt-6">
        <a
          href="/art-gallery"
          className="
            bg-[#e8e56d] text-black px-10 py-4 text-lg 
            font-bold rounded-xl shadow-lg
            hover:scale-[1.05] hover:bg-[#d6d357]
            transition-all duration-200 ease-out
          "
        >
          View the Whole Selection
        </a>
      </div>

    </section>
  );
}

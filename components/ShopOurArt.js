"use client";
import ArtGallery from "@/components/ArtGallery";

export default function ShopOurArt() {
  return (
    <section
      id="shop-art"
      className="bg-gradient-to-b from-[#0e0e0e] to-[#181818] text-white px-6 sm:px-12 lg:px-24 py-24 space-y-16"
    >
      {/* TITLE */}
      <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-[#e8e56d] drop-shadow-[0_0_10px_rgba(232,229,109,0.5)]">
        Discover Our Art Collection
      </h2>

      {/* --------------------- */}
      {/*     MOBILE VIDEO      */}
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
      {/*     DESKTOP VIDEO     */}
      {/* --------------------- */}
      <div className="hidden md:flex flex-col items-center mb-12">
        <div
          className="
            w-full
            max-w-2xl
            lg:max-w-xl
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

      {/* INTRO TEXT */}
      <p className="text-center text-gray-300 max-w-2xl mx-auto text-lg">
        Explore our exclusive selection of luxurious handcrafted artworks.
      </p>

      {/* GALLERY */}
      <ArtGallery />

 {/* -------------------------------------------------- */}
{/*            CUSTOM FRAMING — PREMIUM DESIGN         */}
{/* -------------------------------------------------- */}
<div className="max-w-5xl mx-auto mt-24">
  
  {/* TITLE */}
  <div className="text-center mb-10">
    <h3 className="text-3xl sm:text-4xl font-extrabold text-[#e8e56d] drop-shadow-[0_0_8px_rgba(232,229,109,0.4)]">
      Custom Framing Available
    </h3>
    <p className="text-gray-300 text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
      Elevate your artwork with handcrafted, made-to-order frames designed to
      protect, enhance, and showcase your piece with a true gallery-grade finish.
    </p>
  </div>

  {/* GRID CARDS */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

    {/* OPTIONS CARD */}
    <div className="bg-[#111] border border-[#333] p-6 rounded-3xl shadow-xl hover:shadow-2xl transition">
      <h4 className="text-xl font-bold text-[#e8e56d] mb-4">
        Framing Options Include
      </h4>
      <ul className="space-y-2 text-gray-300 text-sm leading-relaxed">
        <li>• Solid wood frames (natural, black, white, walnut, gold)</li>
        <li>• Modern or classic profiles</li>
        <li>• Shadow box framing for textured pieces</li>
        <li>• UV-protective glass or acrylic</li>
        <li>• Matting options available</li>
      </ul>
    </div>

    {/* BENEFITS CARD */}
    <div className="bg-[#111] border border-[#333] p-6 rounded-3xl shadow-xl hover:shadow-2xl transition">
      <h4 className="text-xl font-bold text-[#e8e56d] mb-4">
        Why Choose Our Frames
      </h4>
      <ul className="space-y-2 text-gray-300 text-sm leading-relaxed">
        <li>• Tailored to fit each artwork perfectly</li>
        <li>• High-end craftsmanship & materials</li>
        <li>• Clean, gallery-style presentation</li>
        <li>• Designed to suit your interior aesthetic</li>
      </ul>
    </div>

    {/* ORDERING CARD */}
    <div className="bg-[#111] border border-[#333] p-6 rounded-3xl shadow-xl hover:shadow-2xl transition">
      <h4 className="text-xl font-bold text-[#e8e56d] mb-4">
        How to Order
      </h4>
      <p className="text-gray-300 text-sm leading-relaxed">
        After purchasing your artwork, simply contact us and we'll help you
        choose the perfect frame style, finish, and dimensions to match your piece.
      </p>
      <a
        href="https://wa.me/17035086812?text=I'm%20interested%20in%20custom%20framing."
        target="_blank"
        className="inline-block mt-4 px-5 py-2 rounded-xl bg-[#e8e56d] text-black font-semibold shadow hover:bg-white transition"
      >
        Contact Us
      </a>
    </div>

  </div>

</div>

    </section>
  );
}

"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Images pour les carousels
const woodworkImages = ["/woodwork1.jpg", "/woodwork2.jpg", "/woodwork3.jpg"];
const gypsumImages = ["/gypsum1.jpg", "/gypsum2.jpg", "/gypsum3.jpg"];

function Carousel({ images }) {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => setCurrent(current === 0 ? images.length - 1 : current - 1);
  const nextSlide = () => setCurrent(current === images.length - 1 ? 0 : current + 1);

  return (
    <div className="relative w-full overflow-hidden rounded-2xl shadow-lg">
      {/* Image responsive avec aspect ratio */}
      <img
        src={images[current]}
        alt={`Slide ${current + 1}`}
        className="w-full aspect-[4/3] sm:aspect-[16/9] object-cover transition-all duration-500 rounded-2xl"
      />

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 -translate-y-1/2 left-[10px] bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition z-20"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 -translate-y-1/2 right-[10px] bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition z-20"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 w-full flex justify-center gap-2 z-10">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              idx === current ? "bg-[#e8e56d]" : "bg-gray-400/50"
            }`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
}

export default function HouseSignature() {
  return (
    <section
      id="HouseSignature"
      className="py-16 px-6 sm:px-12 lg:px-24 bg-gradient-to-b from-[#0e0e0e] to-[#181818] text-white space-y-20"
    >
      {/* SECTION TITLE */}
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#e8e56d]">
          HOUSE SIGNATURE
        </h1>
        <p className="text-gray-400 mt-3 text-sm sm:text-base">
          Discover our signature Moroccan craftsmanship, where every detail tells a story of tradition and elegance.
        </p>
      </div>

      {/* Moroccan Handmade Woodwork */}
      <div className="flex flex-col lg:flex-row items-center gap-10">
        <div className="lg:w-1/2 w-full">
          <Carousel images={woodworkImages} />
        </div>
        <div className="lg:w-1/2 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#e8e56d]">
            MOROCCAN HANDMADE WOODWORK
          </h2>
          <p className="text-gray-300 text-lg font-semibold">Precision, tradition, and soul.</p>
          <p className="text-gray-400 leading-relaxed">
            We specialize in custom Moroccan hand-crafted woodwork, from carved panels to intricate doors, arches, and ceiling inlays. Each piece is shaped by master artisans using traditional tools and centuries-old carving methods.
          </p>
          <ul className="list-disc list-inside text-gray-400 leading-relaxed space-y-1">
            <li>Authentic Moroccan craftsmanship</li>
            <li>Hand-carved precision</li>
            <li>Natural materials and refined finishing</li>
            <li>A legacy of artistry brought into contemporary design</li>
          </ul>
          <p className="text-gray-400 leading-relaxed">
            Our woodwork becomes a signature element in every space — warm, sculptural, and unmistakably luxurious.
          </p>
        </div>
      </div>

      {/* Moroccan Handmade Gypsum */}
      <div className="flex flex-col lg:flex-row-reverse items-center gap-10">
        <div className="lg:w-1/2 w-full">
          <Carousel images={gypsumImages} />
        </div>
        <div className="lg:w-1/2 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#e8e56d]">
            MOROCCAN HANDMADE GYPSUM
          </h2>
          <p className="text-gray-300 text-lg font-semibold">Where artistry meets architecture.</p>
          <p className="text-gray-400 leading-relaxed">
            Our House Signature includes Moroccan hand-crafted gypsum ceilings and architectural details, shaped with traditional techniques passed down through generations. Each curve, motif, and carved pattern is created entirely by hand — no molds, no shortcuts — ensuring every ceiling becomes a one-of-a-kind statement of luxury.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Custom gypsum craftsmanship blends Moroccan heritage with modern elegance, giving your home depth, identity, and timeless beauty.
          </p>
        </div>
      </div>
    </section>
  );
}

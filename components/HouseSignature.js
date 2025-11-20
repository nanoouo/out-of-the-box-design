"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* ================= CAROUSEL ================= */
function Carousel({
  images = [],
  autoplay = true,
  autoplaySpeed = 3500,
  showArrows = true,
  showDots = true,
  className = "",
}) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const containerRef = useRef(null);
  const pointerData = useRef({ active: false, startX: 0, dx: 0 });

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % images.length);
  }, [images.length]);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  /* autoplay */
  useEffect(() => {
    if (!autoplay || images.length <= 1) return;
    timerRef.current = setInterval(next, autoplaySpeed);
    return () => clearInterval(timerRef.current);
  }, [autoplay, autoplaySpeed, images.length, next]);

  const pause = () => clearInterval(timerRef.current);
  const resume = () => {
    if (!autoplay) return;
    clearInterval(timerRef.current);
    timerRef.current = setInterval(next, autoplaySpeed);
  };

  /* swipe */
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const down = (e) => {
      pointerData.current.active = true;
      pointerData.current.startX = e.clientX ?? e.touches?.[0]?.clientX;
      pause();
    };

    const move = (e) => {
      if (!pointerData.current.active) return;
      const x = e.clientX ?? e.touches?.[0]?.clientX;
      pointerData.current.dx = x - pointerData.current.startX;
    };

    const up = () => {
      if (!pointerData.current.active) return;
      const dx = pointerData.current.dx;
      pointerData.current.active = false;
      pointerData.current.dx = 0;

      if (Math.abs(dx) > 60) {
        dx < 0 ? next() : prev();
      }
      resume();
    };

    el.addEventListener("pointerdown", down);
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);

    return () => {
      el.removeEventListener("pointerdown", down);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
  }, [next, prev]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full select-none ${className}`}
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      {/* SLIDES HORIZONTAUX avec style fixe et centrage */}
      <div className="relative w-80 h-96 sm:w-[500px] sm:h-[500px] rounded-2xl overflow-hidden border-4 border-[#c5a46d] shadow-[0_8px_30px_rgba(0,0,0,0.6)] mx-auto">
        <div
          className="flex transition-transform duration-500 h-full"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              className="flex-shrink-0 w-full h-full object-cover"
            />
          ))}
        </div>

        {/* ARROWS */}
        {showArrows && images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}

        {/* DOTS */}
        {showDots && (
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === index ? "bg-[#e8e56d] scale-110" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ================= FULL PAGE ================= */
export default function HouseSignature() {
  const woodworkImages = [
    "/wood.jpg",
    "/wood1.jpg",
    "/wood2.jpg",
    "/wood3.jpg",
    "/wood4.jpg",
    "/wood5.jpg",
  ];

  const gypsumImages = [
    "/gyp.jpg",
    "/gyp1.jpg",
    "/gyp2.jpg",
    "/gyp3.jpg",
    "/gyp4.jpg",
    "/gyp5.jpg",
    "/gyp6.jpg",
    "/gyp7.jpg",
  ];

  return (
    <section
      id="HouseSignature"
      className="py-16 px-6 sm:px-12 lg:px-24 bg-gradient-to-b from-[#0e0e0e] to-[#181818] text-white"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#e8e56d]">
            HOUSE SIGNATURE
          </h1>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
            Discover our signature Moroccan craftsmanship — carved details and hand-finished work.
          </p>
        </div>

        {/* WOODWORK */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="w-full lg:w-1/2 flex justify-center">
            <Carousel images={woodworkImages} autoplay autoplaySpeed={4000} />
          </div>

          <div className="w-full lg:w-1/2 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#e8e56d]">
              MOROCCAN HANDMADE WOODWORK
            </h2>

            <p className="text-gray-300 font-semibold">Precision, tradition, and soul.</p>
            <p className="text-gray-400 leading-relaxed">
              Custom Moroccan hand-crafted woodwork — carved panels, arches, ceiling inlays.
            </p>

            <ul className="list-disc list-inside text-gray-400 space-y-1">
              <li>Authentic Moroccan craftsmanship</li>
              <li>Hand-carved precision</li>
              <li>Natural materials & refined finishing</li>
            </ul>
          </div>
        </div>

        {/* GYPSUM */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
          <div className="w-full lg:w-1/2 flex justify-center">
            <Carousel images={gypsumImages} autoplay autoplaySpeed={4200} />
          </div>

          <div className="w-full lg:w-1/2 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#e8e56d]">
              MOROCCAN HANDMADE GYPSUM
            </h2>
            <p className="text-gray-300 font-semibold">Where artistry meets architecture.</p>
            <p className="text-gray-400 leading-relaxed">
              Hand-crafted ceilings and architectural gypsum details carved without molds.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  { type: "image", src: "/fff.jpg" },
  { type: "image", src: "/ff.jpg" },
  { type: "image", src: "/f.jpg" },
  { type: "video", src: "/video/bed.mp4" },
  { type: "video", src: "/video/bedroom.mp4" },
  { type: "image", src: "/bathhh.jpg" },
  { type: "image", src: "/bathh.jpg" },
  { type: "image", src: "/bath.jpg" },
];

export default function ImageCarousel() {
  const [current, setCurrent] = useState(0);

  // Safety: if empty
  if (!slides || slides.length === 0) return null;

  const currentSlide = slides[current] || slides[0];

  // ✅ Auto-advance every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1 < slides.length ? prev + 1 : 0));
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1 < slides.length ? prev + 1 : 0));

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 >= 0 ? prev - 1 : slides.length - 1));

  const variants = {
    enter: { opacity: 0, scale: 1.05, x: 100 },
    center: { opacity: 1, scale: 1, x: 0 },
    exit: { opacity: 0, scale: 0.95, x: -100 },
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          {currentSlide.type === "image" ? (
            <Image
              src={currentSlide.src}
              alt={`Slide ${current + 1}`}
              fill
              className="object-cover object-center rounded-none"
              priority
            />
          ) : (
            <video
              key={currentSlide.src}
              src={currentSlide.src}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover rounded-none"
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />

      {/* Navigation arrows (desktop only) */}
      <div className="hidden lg:flex absolute inset-y-0 left-0 right-0 justify-between items-center px-6 z-20">
        <button
          onClick={prevSlide}
          className="bg-black/40 hover:bg-black/70 p-3 rounded-full backdrop-blur-sm transition-all duration-300"
        >
          <ChevronLeft size={26} className="text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="bg-black/40 hover:bg-black/70 p-3 rounded-full backdrop-blur-sm transition-all duration-300"
        >
          <ChevronRight size={26} className="text-white" />
        </button>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-5 w-full flex justify-center gap-2 z-20">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              i === current
                ? "bg-[#e8e56d] scale-125 shadow-md"
                : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

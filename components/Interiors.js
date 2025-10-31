"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useState, useEffect } from "react";

export default function Interiors() {
  const { sectionRef, animate } = useScrollAnimation(0.4);
  const [scrollMarginTop, setScrollMarginTop] = useState("0");

  useEffect(() => {
    const updateMargin = () => {
      setScrollMarginTop(window.innerWidth >= 1024 ? "5rem" : "0");
    };
    updateMargin();
    window.addEventListener("resize", updateMargin);
    return () => window.removeEventListener("resize", updateMargin);
  }, []);

  // === Replace images by videos ===
  const sections = [
    {
      video: "/residential.mp4",
      title: "Residential",
      description: `Your home is your sanctuary — it should not only be peaceful, but also a reflection of your personality, filled with memories and aspirations. We help you turn your house into the paradise you deserve.`,
    },
    {
      video: "/commercial.mp4",
      title: "Commercial",
      description: `Every commercial space should reflect the brand’s identity and purpose. We interpret our clients’ business values to design functional and visually captivating environments that bring their vision to life.`,
    },
    {
      video: "/yacht.mp4",
      title: "Luxury Yacht",
      description: `We create yachts that embody luxury and practicality, seamlessly blending interior and exterior spaces for a refined, distinctive experience that reflects your personal taste and lifestyle.`,
    },
  ];

  return (
    <section
      id="interiors"
      ref={sectionRef}
      style={{ scrollMarginTop }}
      className="relative w-full bg-gradient-to-b from-[#111] via-[#1a1a1a] to-[#222] text-white px-6 py-24 overflow-hidden"
    >
      {/* === Section Title === */}
      <motion.h2
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-8 text-[#f9e65c] drop-shadow-[0_0_15px_rgba(249,230,92,0.9)] uppercase tracking-widest"
        initial={{ opacity: 0, y: 40 }}
        animate={animate ? { opacity: 1, y: 0 } : { opacity: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Interiors
      </motion.h2>

      <motion.hr
        className="mx-auto w-24 border-t-4 border-[#f9e65c] mb-12 shadow-[0_0_20px_rgba(249,230,92,0.8)]"
        initial={{ scaleX: 0 }}
        animate={animate ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      />

      {/* === Content Blocks === */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {sections.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            animate={animate ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 * i }}
            className="group relative flex flex-col bg-[#1a1a1a]/80 backdrop-blur-md rounded-3xl border border-[#f9e65c33] shadow-lg hover:shadow-[0_0_35px_rgba(249,230,92,0.5)] transition-all duration-500 overflow-hidden"
          >
            {/* === Video Background === */}
            <div className="relative w-full h-56 sm:h-64 overflow-hidden">
              <video
                src={s.video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/80 transition-all duration-500"></div>
              <h3 className="absolute bottom-5 left-1/2 -translate-x-1/2 text-center text-2xl sm:text-3xl font-extrabold uppercase text-[#f9e65c] drop-shadow-[0_0_15px_rgba(249,230,92,0.9)]">
                {s.title}
              </h3>
            </div>

            {/* === Description === */}
            <div className="p-6 sm:p-8 text-center">
              <p className="text-gray-200 leading-relaxed text-sm sm:text-base font-medium">
                {s.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* === Background Pattern === */}
      <div className="absolute inset-0 bg-[url('/oo.jpg')] bg-center bg-cover opacity-5 pointer-events-none"></div>
    </section>
  );
}

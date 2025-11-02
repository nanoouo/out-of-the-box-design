"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useState, useEffect } from "react";

export default function Interiors() {
  const { sectionRef, animate } = useScrollAnimation(0.4);
  const [scrollMarginTop, setScrollMarginTop] = useState("80px");

  useEffect(() => {
    const updateMargin = () => {
      const width = window.innerWidth;
      if (width >= 1024) setScrollMarginTop("80px");
      else if (width >= 640) setScrollMarginTop("70px");
      else setScrollMarginTop("100px");
    };
    updateMargin();
    window.addEventListener("resize", updateMargin);
    return () => window.removeEventListener("resize", updateMargin);
  }, []);

  const sections = [
    {
      slug: "residential",
      video: "/residential.mp4",
      title: "Residential Interiors",
      shortDescription: `Your home is your sanctuary — it should not only be peaceful, but also a reflection of your personality, filled with memories and aspirations.`,
    },
    {
      slug: "commercial",
      video: "/commercial.mp4",
      title: "Commercial Interiors",
      shortDescription: `Every commercial space should reflect the brand’s identity and purpose. We interpret our clients’ business values to design functional and visually captivating environments.`,
    },
    {
      slug: "yacht",
      video: "/yacht.mp4",
      title: "Luxury Yacht Design",
      shortDescription: `Luxury Living, Redefined at Sea. Our yacht design combines craftsmanship, innovation, and artistry — tailored to your lifestyle and vessel’s unique character.`,
    },
  ];

  return (
    <section
      id="interiors"
      ref={sectionRef}
      style={{
        scrollMarginTop,
        WebkitScrollMarginTop: scrollMarginTop,
      }}
      className="relative w-full bg-gradient-to-b from-[#111] via-[#1a1a1a] to-[#222] text-white px-6 sm:px-8 md:px-10 py-24 sm:py-28 overflow-hidden scroll-smooth"
    >
      <motion.h2
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-8 text-[#f9e65c] drop-shadow-[0_0_15px_rgba(249,230,92,0.9)] uppercase tracking-widest"
        initial={{ opacity: 0, y: 40 }}
        animate={animate ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        What We Do
      </motion.h2>

      <motion.hr
        className="mx-auto w-24 border-t-4 border-[#f9e65c] mb-12 shadow-[0_0_20px_rgba(249,230,92,0.8)]"
        initial={{ scaleX: 0 }}
        animate={animate ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {sections.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            animate={animate ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.7, delay: 0.2 * i }}
            className="group relative flex flex-col bg-[#1a1a1a]/80 backdrop-blur-md rounded-3xl border border-[#f9e65c33] shadow-lg hover:shadow-[0_0_35px_rgba(249,230,92,0.5)] transition-all duration-500 overflow-hidden"
          >
            <div className="relative w-full h-56 sm:h-64 md:h-72 overflow-hidden">
              <video
                src={s.video}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/80 transition-all duration-500"></div>
              <h3 className="absolute bottom-5 left-1/2 -translate-x-1/2 text-center text-2xl sm:text-3xl font-extrabold uppercase text-[#f9e65c] drop-shadow-[0_0_15px_rgba(249,230,92,0.9)]">
                {s.title}
              </h3>
            </div>

            <div className="p-6 sm:p-8 text-center space-y-4 flex flex-col flex-grow">
              <p className="text-gray-200 leading-relaxed text-sm sm:text-base font-medium line-clamp-5">
                {s.shortDescription}
              </p>

              <div className="mt-auto">
                <Link
                  href={`/${s.slug}`}
                  className="inline-block mt-4 px-5 py-2 text-sm sm:text-base font-semibold text-black bg-[#f9e65c] rounded-full hover:bg-[#fff06d] transition-all duration-300"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="absolute inset-0 bg-[url('/oo.jpg')] bg-center bg-cover opacity-5 pointer-events-none"></div>
    </section>
  );
}

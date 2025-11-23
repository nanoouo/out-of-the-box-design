"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import ImageCarousel from "./ImageCarousel";
import Stats from "./Stats";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  // ✅ Détection de la visibilité de la section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setAnimate(entry.isIntersecting && entry.intersectionRatio >= 0.5);
        });
      },
      { threshold: [0.5] }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // ✅ Réinitialiser animation si section revisitée
  useEffect(() => {
    const handleSectionChange = (e) => {
      if (e.detail === "hero") {
        setAnimate(false);
        requestAnimationFrame(() => setAnimate(true));
      }
    };
    window.addEventListener("sectionChange", handleSectionChange);
    return () => window.removeEventListener("sectionChange", handleSectionChange);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen bg-[#0f0f0f] text-white flex flex-col lg:flex-row items-center justify-center overflow-hidden"
    >
      <AnimatePresence mode="wait">
        {animate && (
          <motion.div
            key="hero-content"
            className="w-full flex flex-col lg:flex-row items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            {/* ✅ UNIFIED CAROUSEL (no duplication) */}
            <div
              className="absolute lg:relative inset-0 lg:inset-auto 
              w-full lg:w-1/2 xl:w-2/5 h-full lg:h-screen 
              flex justify-center items-center will-change-transform"
            >
              <div
                className="relative w-full lg:w-[85%] h-full lg:h-[80%] 
                overflow-hidden rounded-none lg:rounded-3xl 
                border-none lg:border-2 border-[#e8e56d] 
                shadow-none lg:shadow-[0_0_40px_rgba(0,0,0,0.6)]"
              >
                <ImageCarousel />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 lg:from-black/40 to-transparent pointer-events-none" />
              </div>
            </div>

            {/* ✅ RIGHT SIDE CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-20 flex flex-col justify-center items-center text-center 
              w-full lg:w-2/5 px-6 sm:px-10 lg:px-12 py-20 space-y-6"
            >
              {/* === LOGO === */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-6 flex flex-col items-center text-center"
              >
                <Image
                  src="/logooff.png"
                  alt="Out of the Box Design Studio"
                  width={350}
                  height={240}
                  priority
                  className="mx-auto drop-shadow-2xl"
                />

                {/* === Locations === */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="mt-4 text-center"
                >
                  <p className="text-gray-300 text-base sm:text-lg uppercase tracking-wider">
                    Based in
                  </p>
                  <p className="text-[#e8e56d] text-sm sm:text-base mt-1">
                    Washington D.C · Miami · New York
                  </p>
                </motion.div>
              </motion.div>

              {/* === DESCRIPTION === */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="text-gray-200 text-base sm:text-lg md:text-xl leading-relaxed max-w-md"
              >
                Where every space is a masterpiece. <br />
                From concept to full realization.
              </motion.p>

              {/* === STATS === */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                <Stats />
              </motion.div>

              {/* === CTA BUTTON === */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="mt-8 sm:mt-10"
              >
                <a
                  href="#contact"
                  className="inline-block bg-[#e8e56d] text-black font-semibold 
                  px-10 sm:px-12 py-4 sm:py-5 rounded-full shadow-lg 
                  hover:brightness-105 transition-transform duration-300 hover:scale-105"
                >
                  Let’s Talk About Your Project
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

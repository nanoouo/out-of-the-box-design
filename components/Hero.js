"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import ImageCarousel from "./ImageCarousel";
import Stats from "./Stats";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  // 🔹 Fonction pour déclencher l'animation selon l'intersection
  const handleIntersect = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
        setAnimate(true);
      } else {
        setAnimate(false); // animation reset si on scroll up
      }
    });
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(handleIntersect, {
      threshold: [0.5],
    });

    observer.observe(sectionRef.current);

    // cleanup
    return () => observer.disconnect();
  }, []);

  // 🔹 Replay animation depuis le navbar
  useEffect(() => {
    const handleSectionChange = (e) => {
      if (e.detail === "hero") {
        setAnimate(false);
        requestAnimationFrame(() => setAnimate(true)); // plus fiable que setTimeout
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
            {/* Desktop Carousel */}
            <div className="hidden lg:block lg:relative lg:w-3/5 lg:h-screen overflow-hidden">
              <div className="relative w-full h-full transform -skew-x-12">
                <ImageCarousel />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent pointer-events-none"></div>
            </div>

            {/* Mobile Carousel */}
            <div className="block lg:hidden absolute inset-0 w-full h-full overflow-hidden">
              <ImageCarousel />
              <div className="absolute inset-0 bg-black/60"></div>
            </div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-20 flex flex-col justify-center items-center lg:items-start lg:text-left w-full lg:w-2/5 px-6 sm:px-10 lg:px-12 py-20 space-y-6"
            >
              {/* Logo (mobile) */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="block lg:hidden mb-6"
              >
                <Image
                  src="/logo2.png"
                  alt="Out of the Box Design Studio"
                  width={350}
                  height={140}
                  priority
                  className="mx-auto drop-shadow-2xl"
                />
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="hidden lg:block text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold leading-snug lg:leading-tight drop-shadow-lg"
              >
                OUT OF THE BOX <br />
                <span className="text-[#e8e56d]">Design Studio</span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-gray-200 text-base sm:text-lg md:text-xl leading-relaxed max-w-md text-center lg:text-left"
              >
                Where every space is a masterpiece. <br />
                From concept to full realization.
              </motion.p>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <Stats />
              </motion.div>

              {/* Locations */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="mt-2 text-gray-400 text-sm sm:text-base uppercase tracking-widest text-center lg:text-left"
              >
                Based in <span className="text-[#e8e56d]">Washington DC</span> ·{" "}
                <span className="text-[#e8e56d]">Miami</span> ·{" "}
                <span className="text-[#e8e56d]">New York</span>
              </motion.p>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="mt-8 sm:mt-10"
              >
                <a
                  href="#contact"
                  className="inline-block bg-[#e8e56d] text-black font-semibold px-10 sm:px-12 py-4 sm:py-5 rounded-full shadow-lg hover:brightness-105 transition-transform duration-300 hover:scale-105"
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

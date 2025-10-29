"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function About() {
  const { sectionRef, animate } = useScrollAnimation(0.5); // threshold 0.5

  return (
    <section
      ref={sectionRef}
      id="about"
      className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center px-6 py-20 overflow-hidden"
      style={{ scrollMarginTop: "5rem" }} // ← Décalage pour navbar fixe
    >
      {/* Title */}
      <motion.h2
        className="text-4xl sm:text-5xl font-bold text-center mb-4"
        initial={{ opacity: 0, y: 40 }}
        animate={animate ? { opacity: 1, y: 0 } : { opacity: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        About <span className="text-[#e8e56d]">Us</span>
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        className="text-lg sm:text-xl text-gray-600 text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={animate ? { opacity: 1, y: 0 } : { opacity: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Creating Interiors That Inspire
      </motion.p>

      {/* Image */}
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={animate ? { opacity: 1, y: 0 } : { opacity: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <HoverableImage />
        <p className="mt-4 text-gray-500 text-sm italic">
          Interior Designer, Artist, Creative Director
        </p>
      </motion.div>

      {/* Line */}
      <motion.hr
        className="w-24 border-t-2 border-gray-300 my-10 origin-center"
        initial={{ scaleX: 0 }}
        animate={animate ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      />

      {/* Description */}
      <motion.div
        className="max-w-4xl text-center text-gray-700 leading-relaxed space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={animate ? { opacity: 1, y: 0 } : { opacity: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <p>
          We believe that true luxury lies in the details. Our team of designers,
          craftsmen, and installers works closely with each client — whether a
          homeowner, builder, architect, or developer — to bring visions to life
          with precision, elegance, and enduring quality.
        </p>
        <p>
          From custom kitchens and cabinetry to full-home interiors, every project
          is meticulously planned and executed, ensuring a harmonious balance of
          form, function, and sophistication.
        </p>
      </motion.div>
    </section>
  );
}

// ✅ Image hover/touch animation
function HoverableImage() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 ease-in-out group"
      onTouchStart={() => setIsActive(true)}
      onTouchEnd={() => setIsActive(false)}
    >
      <Image
        src="/profile-about.jpg"
        alt="Interior Designer Portrait"
        fill
        className={`object-cover object-center transition-all duration-700 ease-in-out
          ${isActive
            ? "grayscale-0 scale-110 brightness-110"
            : "grayscale group-hover:grayscale-0 group-hover:scale-110 group-hover:brightness-110"
          }`}
      />
      <div
        className={`absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent transition-opacity duration-700
          ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
      ></div>
    </div>
  );
}

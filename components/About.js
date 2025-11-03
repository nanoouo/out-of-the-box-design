"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function About() {
  const { sectionRef, animate } = useScrollAnimation(0.4);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative min-h-screen bg-[#0f0f0f] text-white flex flex-col items-center justify-center px-6 py-24 overflow-hidden"
      style={{ scrollMarginTop: "5rem" }}
    >
      {/* === Background === */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#1a1a1a] to-black opacity-90"></div>

      {/* === Section Title === */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={animate ? { opacity: 1, y: 0 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center mb-16"
      >
        <h2 className="text-4xl sm:text-5xl font-bold">
          About <span className="text-[#e8e56d]">Us</span>
        </h2>
      </motion.div>

      {/* === Content Grid === */}
      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT: Image & Role */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={animate ? { opacity: 1, x: 0 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center space-y-6"
        >
          {/* Moved this line here 👇 */}
          <p className="text-lg sm:text-xl text-gray-400 uppercase tracking-wide">
            THE FOUNDER – CEO PRINCIPLE DESIGNER
          </p>

          <div className="relative w-64 h-80 sm:w-80 sm:h-[440px] rounded-2xl overflow-hidden border-4 border-[#c5a46d] shadow-[0_8px_30px_rgba(0,0,0,0.6)]">
            <Image
              src="/profile-about.jpg"
              alt="Founder Portrait"
              fill
              className="object-cover object-center transition-all duration-700 hover:scale-105"
            />
          </div>

          <h6 className="text-2xl font-serif text-white">Fatima Ezahrae Aouayna</h6>
          <div className="w-16 h-[2px] bg-[#e8e56d] mx-auto"></div>
          <p className="text-gray-300 italic">
            Interior Designer, Artist, Creative Director
          </p>
        </motion.div>

{/* RIGHT: Description */}
<motion.div
  initial={{ opacity: 0, x: 60 }}
  animate={animate ? { opacity: 1, x: 0 } : { opacity: 0 }}
  transition={{ delay: 0.2, duration: 0.8 }}
  className="text-gray-200 text-base leading-relaxed font-light space-y-6"
>
  <p>
    With a Master’s degree in Architecture and Interior Design, I’ve spent over a
    decade transforming spaces with intention, emotion, and artistry — across the
    East Coast, from New York to Miami.
  </p>

  <p>
    Rooted in my Moroccan heritage and shaped by a French sensibility, my work
    blends culture and contemporary design to craft luxury environments that
    transcend aesthetics — they transform the way you feel and live.
  </p>

  <p>
    As an artist and as the founder of <strong>The Good Sinner</strong>, my
    transformational life coaching platform, I extend that same philosophy beyond
    design — guiding others to rebuild from within, to find beauty in imperfection,
    and to live authentically.
  </p>

  <p>
    Whether through space or spirit, my mission is the same: to create extraordinary
    transformations that awaken the senses, elevate the soul, and celebrate the art
    of becoming.
  </p>
</motion.div>

      </div>
    </section>
  );
}

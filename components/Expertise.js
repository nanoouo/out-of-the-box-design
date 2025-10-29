"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Home, Ruler, Lightbulb } from "lucide-react";

export default function Expertise() {
  const { sectionRef, animate } = useScrollAnimation(0.5);

  const sections = [
    {
      icon: <Home size={36} className="text-[#e8e56d]" />,
      title: "Residential Interior Design",
      description: `Your home should be a reflection of you — your lifestyle, your taste, your dreams. We transform houses into soulful living spaces that blend comfort with character.`
    },
    {
      icon: <Ruler size={36} className="text-[#e8e56d]" />,
      title: "Commercial Interior Design",
      description: `A well-designed space can shape experiences, enhance productivity, and bring brands to life. Our commercial interiors are built on strategy and storytelling.`
    },
    {
      icon: <Lightbulb size={36} className="text-[#e8e56d]" />,
      title: "Our Philosophy",
      description: `We think beyond walls and furniture — designing with purpose, personality, and passion. From concept to completion, our mission is to create spaces that feel intuitive, alive, and unmistakably Out of the Box.`
    }
  ];

  return (
    <section
      id="expertise"
      ref={sectionRef}
      className="min-h-screen pt-24 sm:pt-28 bg-white text-gray-900 flex flex-col items-center justify-center px-6 py-20 overflow-hidden"
      style={{ scrollMarginTop: window.innerWidth >= 1024 ? "5rem" : "0" }} // Décalage uniquement sur desktop
    >
      {/* Title */}
      <motion.h2
        className="text-4xl sm:text-5xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: 40 }}
        animate={animate ? { opacity: 1, y: 0 } : { opacity: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Expertise
      </motion.h2>

      {/* General description */}
      <motion.p
        className="text-center text-gray-700 max-w-3xl mb-12 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={animate ? { opacity: 1, y: 0 } : { opacity: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        At Out of the Box Design Studio, we believe every space has a story waiting to be told.
        Our approach goes beyond trends — we craft environments that inspire, comfort, and captivate.
      </motion.p>

      <motion.hr
        className="w-24 border-t-2 border-[#e8e56d] mb-12 mx-auto"
        initial={{ scaleX: 0 }}
        animate={animate ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      />

      {/* Cards grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl w-full">
        {sections.map((s, i) => (
          <motion.div
            key={i}
            className={`flex flex-col p-6 rounded-2xl shadow-lg transition-all duration-500 cursor-pointer
              bg-gradient-to-tr from-[#fefce83d] to-[#e8e56d1a] hover:shadow-[#e8e56d70] hover:-translate-y-2
              ${i === 2 ? "lg:col-span-2 lg:justify-self-center" : ""}`}
            initial={{ opacity: 0, y: 50 }}
            animate={animate ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 * i, ease: "easeOut" }}
          >
            {/* Icon + Title on the same line */}
            <div className="flex items-center mb-4 space-x-3">
              {s.icon}
              <h3 className="font-bold text-2xl">{s.title}</h3>
            </div>
            <p className="text-gray-700 whitespace-pre-line leading-relaxed">{s.description}</p>

            <motion.hr
              className="w-20 border-t-2 border-[#e8e56d] mt-6 mx-auto" // centré
              initial={{ scaleX: 0 }}
              animate={animate ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + i * 0.2 }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

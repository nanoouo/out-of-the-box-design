"use client";

import { motion, useAnimation, useMotionValue, useTransform, animate, useMotionValueEvent } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const statsData = [
  { value: 10, label: "Years Experience" },
  { value: 100, label: "Projects" },
  { value: 1000, label: "Clients" },
];

export default function Stats() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  return (
    <div
      ref={ref}
      className="flex flex-wrap justify-center items-center gap-8 mt-6 sm:mt-8 text-[#e8e56d] font-semibold text-lg sm:text-xl"
    >
      {statsData.map((stat, index) => (
        <motion.div
          key={index}
          className="flex flex-col items-center"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, delay: index * 0.3 },
            },
          }}
        >
          <AnimatedNumber value={stat.value} />
          <span className="text-gray-300 text-sm sm:text-base">{stat.label}</span>
        </motion.div>
      ))}
    </div>
  );
}

/* === Sous-composant pour l’animation du nombre === */
function AnimatedNumber({ value }) {
  const count = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState(0);

  // Met à jour le texte visible à chaque frame
  useMotionValueEvent(count, "change", (latest) => {
    setDisplayValue(Math.floor(latest));
  });

  useEffect(() => {
    const controls = animate(count, value, { duration: 2, ease: "easeOut" });
    return controls.stop;
  }, [count, value]);

  return (
    <motion.span
      className="text-3xl sm:text-4xl font-bold text-white"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {displayValue}
      <span className="text-[#e8e56d]">+</span>
    </motion.span>
  );
}

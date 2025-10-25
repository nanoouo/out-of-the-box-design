"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const images = [
  "/album1.jpg",
  "/album2.jpg",
  "/album3.jpg",
  "/album4.jpg",
  "/album5.jpg",
  "/album6.jpg",
];

export default function ImageCarousel() {
  const [current, setCurrent] = useState(0);

  // Changer d'image toutes les 5 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: { opacity: 0, scale: 1.2, x: 100 },
    center: { opacity: 1, scale: 1, x: 0 },
    exit: { opacity: 0, scale: 0.8, x: -100 },
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0"
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 3, ease: "easeInOut" }}
        >
          <div className="relative w-full h-full overflow-hidden rounded-xl">
            <Image
              src={images[current]}
              alt={`Projet ${current + 1}`}
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

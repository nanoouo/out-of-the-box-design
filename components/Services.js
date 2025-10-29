"use client";

import { motion } from "framer-motion";
import { Home, Ruler, Lightbulb, Wrench } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Services() {
  // 🔹 Threshold plus bas pour mobile, rootMargin gère le navbar fixe
  const { sectionRef, animate } = useScrollAnimation(0.1);

  const services = [
    { icon: <Home size={40} />, title: "Interior Design", desc: "Concept-to-completion design that enhances your project’s value and appeal." },
    { icon: <Ruler size={40} />, title: "Custom Kitchens & Cabinetry", desc: "High-quality, handcrafted pieces that merge style and function." },
    { icon: <Lightbulb size={40} />, title: "Full Interior Fit-Outs", desc: "Flooring, lighting, joinery, and finishes, executed to perfection." },
    { icon: <Wrench size={40} />, title: "Installation & Project Management", desc: "Seamless coordination with your build team for timely, flawless results." },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="min-h-[calc(100vh-5rem)] bg-gradient-to-br from-[#111] via-[#1a1a1a] to-[#0f0f0f] text-[#fefce8] flex flex-col items-center justify-center px-6 py-20 overflow-hidden"
      style={{ scrollMarginTop: "5rem" }} // ← Décalage navbar fixe
    >
      {/* Title */}
      <motion.h2
        className="text-4xl sm:text-5xl font-bold text-center mb-4"
        initial={{ opacity: 0, y: 40 }}
        animate={animate ? { opacity: 1, y: 0 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        Services
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        className="text-lg sm:text-xl text-[#e8e56d] text-center mb-10"
        initial={{ opacity: 0 }}
        animate={animate ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Comprehensive Interior Solutions for Builders
      </motion.p>

      {/* Service cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl w-full">
        {services.map((s, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center text-center p-6 bg-[#ffffff0d] rounded-2xl shadow-lg hover:shadow-[#e8e56d50] hover:bg-[#ffffff1a] transition-all duration-500 hover:-translate-y-2 cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            animate={animate ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 * i, ease: "easeOut" }}
          >
            <div className="text-[#e8e56d] mb-4">{s.icon}</div>
            <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
            <p className="text-sm text-gray-300">{s.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Decorative line */}
      <motion.hr
        className="w-24 border-t-2 border-[#e8e56d] my-12 origin-center"
        initial={{ scaleX: 0 }}
        animate={animate ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />

      {/* Description text */}
      <motion.div
        className="max-w-3xl text-center text-gray-200 leading-relaxed space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={animate ? { opacity: 1, y: 0 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <p>
          We understand the demands of high-end construction and provide a turnkey
          solution, delivering interiors that meet your standards and exceed your
          clients’ expectations.
        </p>
        <p className="italic text-[#e8e56d]">
          Luxury Interiors, Perfectly Executed
        </p>
        <p>
          At <span className="font-semibold">[Your Company Name]</span>, we transform
          spaces into enduring works of art. From bespoke kitchens and cabinetry to full
          interior design and expert installation, we provide a seamless, end-to-end
          service tailored to homeowners, builders, architects, and developers alike.
        </p>
        <p className="font-semibold">
          Our Expertise: <span className="text-[#e8e56d]">Design. Craft. Install. Complete.</span>
        </p>
        <p>
          Partner with us to deliver interiors that impress clients, elevate projects,
          and embody timeless luxury.
        </p>
      </motion.div>
    </section>
  );
}

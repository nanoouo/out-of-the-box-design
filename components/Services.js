"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Ruler, Lightbulb, Wrench } from "lucide-react";

export default function Services() {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  const services = [
    { icon: <Home size={40} />, title: "Interior Design", desc: "Concept-to-completion design that enhances your project’s value and appeal." },
    { icon: <Ruler size={40} />, title: "Custom Kitchens & Cabinetry", desc: "High-quality, handcrafted pieces that merge style and function." },
    { icon: <Lightbulb size={40} />, title: "Full Interior Fit-Outs", desc: "Flooring, lighting, joinery, and finishes, executed to perfection." },
    { icon: <Wrench size={40} />, title: "Installation & Project Management", desc: "Seamless coordination with your build team for timely, flawless results." },
  ];

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setAnimate(false);
            setTimeout(() => setAnimate(true), 50);
          }
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="min-h-[calc(100vh-5rem)] bg-gradient-to-br from-[#111] via-[#1a1a1a] to-[#0f0f0f] text-[#fefce8] flex flex-col items-center justify-center px-6 py-20 overflow-hidden"
    >
      <AnimatePresence mode="wait">
        {animate && (
          <motion.div
            key={Date.now()}
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -80 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full flex flex-col items-center"
          >
            {/* Titre */}
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl sm:text-5xl font-bold text-center mb-4"
            >
              Services
            </motion.h2>

            {/* Sous-titre */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg sm:text-xl text-[#e8e56d] text-center mb-10"
            >
              Comprehensive Interior Solutions for Builders
            </motion.p>

            {/* Services */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl w-full">
              {services.map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.6 + i * 0.2,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  className="flex flex-col items-center text-center p-6 bg-[#ffffff0d] rounded-2xl shadow-lg hover:shadow-[#e8e56d50] hover:bg-[#ffffff1a] transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                >
                  <div className="text-[#e8e56d] mb-4">{service.icon}</div>
                  <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-300">{service.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Ligne */}
            <motion.hr
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="w-24 border-t-2 border-[#e8e56d] my-12 origin-center"
            />

            {/* Texte descriptif */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="max-w-3xl text-center text-gray-200 leading-relaxed space-y-4"
            >
              <p>
                We understand the demands of high-end construction and provide a
                turnkey solution, delivering interiors that meet your standards
                and exceed your clients’ expectations.
              </p>
              <p className="italic text-[#e8e56d]">
                Luxury Interiors, Perfectly Executed
              </p>
              <p>
                At <span className="font-semibold">[Your Company Name]</span>, we
                transform spaces into enduring works of art. From bespoke kitchens
                and cabinetry to full interior design and expert installation, we
                provide a seamless, end-to-end service tailored to homeowners,
                builders, architects, and developers alike.
              </p>
              <p className="font-semibold">
                Our Expertise: <span className="text-[#e8e56d]">Design. Craft. Install. Complete.</span>
              </p>
              <p>
                Partner with us to deliver interiors that impress clients, elevate
                projects, and embody timeless luxury.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

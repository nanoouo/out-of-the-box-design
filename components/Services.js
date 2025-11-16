"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { CookingPot, Bath, Layers, Grid, Sun, Utensils, Warehouse } from "lucide-react";

export default function Services() {
  const { sectionRef, animate } = useScrollAnimation(0.1);

  const services = [
    {
      id: 1,
      icon: <Utensils size={42} />,
      title: "Kitchen Design",
      subtitle: "Functional Elegance at the Heart of Your Home",
      desc: `Our kitchen designs combine luxury and practicality to create inspiring culinary spaces. 
Every element—from custom cabinetry to lighting—is tailored to your lifestyle. 
We balance beauty, efficiency, and timeless materials for a warm, modern feel.`,
      video: "/videos/kitchen.mp4",
      features: [
        "Custom cabinetry & smart layouts",
        "Lighting design & material selection",
      ],
    },
    {
      id: 2,
      icon: <Bath size={42} />,
      title: "Bathroom Design",
      subtitle: "Refined Comfort Meets Timeless Serenity",
      desc: `We transform bathrooms into private sanctuaries of relaxation and beauty. 
Our designs integrate premium finishes, balanced lighting, and modern spa-inspired features. 
The result is a sophisticated retreat that elevates your daily routine.`,
      video: "/videos/bathroom.mp4",
      features: [
        "Premium fixtures & marble finishes",
        "Modern spa-style concepts",
      ],
    },
    {
      id: 3,
      icon: <Warehouse size={42} />,
      title: "Walk-In Closet Design",
      subtitle: "Organization Redefined with Luxury in Mind",
      desc: `Every walk-in closet we design is a masterpiece of organization and sophistication. 
We emphasize space efficiency, custom shelving, and high-end finishes. 
Your wardrobe becomes an elegant daily experience of comfort and style.`,
      video: "/videos/closet.mp4",
      features: [
        "Tailored closet systems",
        "Lighting & material harmony",
      ],
    },
    {
      id: 4,
      icon: <Grid size={42} />,
      title: "Other Areas",
      subtitle: "Luxury That Extends Beyond the Main Spaces",
      desc: `We create exceptional designs for every area of your home—each reflecting character and purpose. 
From lounges to great rooms, each space blends comfort, flow, and refined aesthetics. 
Discover the art of harmonious living across all dimensions of your residence.`,
      video: "/videos/other.mp4",
      features: [
        "Office Design",
        "Ballroom Design",
        "Bar Design",
        "Den Design",
        "Foyer Design",
        "Great Room Design",
        "Lounge Design",
      ],
    },
    {
      id: 5,
      icon: <Sun size={42} />,
      title: "Outdoor Design",
      subtitle: "Extend Your Home into Nature’s Beauty",
      desc: `Our outdoor designs bring luxury beyond walls—balancing architecture and nature. 
We design serene terraces, stylish lounges, and captivating gardens. 
Every detail connects indoor refinement with outdoor tranquility for year-round enjoyment.`,
      video: "/videos/outdoor.mp4",
      features: [
        "Landscape & terrace design",
        "Lighting & seating coordination",
      ],
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="bg-gradient-to-br from-[#0e0e0e] via-[#181818] to-[#0b0b0b] text-[#fefce8] px-6 sm:px-10 lg:px-16 py-24 space-y-24 scroll-smooth"
    >
      <motion.h2
        className="text-4xl sm:text-5xl font-bold text-center mb-3"
        initial={{ opacity: 0, y: 30 }}
        animate={animate ? { opacity: 1, y: 0 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Services
      </motion.h2>

      <motion.p
        className="text-lg sm:text-xl text-[#e8e56d] text-center max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={animate ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Bespoke Design. Architectural Precision. Refined Living.
      </motion.p>

      <div className="space-y-32 max-w-7xl mx-auto">
        {services.map((s, i) => (
          <div id={`service-${s.id}`} key={s.id} className="scroll-mt-32">
            <ServiceCard service={s} reverse={i % 2 !== 0} animate={animate} />
          </div>
        ))}
      </div>
    </section>
  );
}

function ServiceCard({ service, reverse, animate }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <motion.div
      ref={ref}
      className={`flex flex-col lg:flex-row items-center gap-12 ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
      initial={{ opacity: 0, y: 60 }}
      animate={animate ? { opacity: 1, y: 0 } : { opacity: 0 }}
      transition={{ duration: 0.9 }}
    >
      {/* Vidéo du service */}
      <motion.div
        style={{ y }}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 100, damping: 12 }}
        className="service-media w-full lg:w-1/2 rounded-3xl overflow-hidden shadow-[0_0_25px_rgba(232,229,109,0.1)] relative"
      >
        <video
          src={service.video}
          controls
          autoPlay
          loop
          muted
          className="w-full h-[350px] sm:h-[420px] object-cover rounded-3xl"
        />
      </motion.div>

      {/* Contenu du service */}
      <div className="w-full lg:w-1/2 space-y-4 text-center lg:text-left">
        <div className="flex justify-center lg:justify-start items-center gap-4">
          <div className="bg-[#ffffff0d] text-[#e8e56d] rounded-full w-16 h-16 flex items-center justify-center shadow-md shadow-[#e8e56d44]">
            {service.icon}
          </div>
          <h3 className="text-2xl font-semibold text-[#e8e56d]">{service.title}</h3>
        </div>
        <h4 className="text-lg italic text-gray-300">{service.subtitle}</h4>
        <p className="text-gray-300 leading-relaxed">{service.desc}</p>
        <ul className="list-disc list-inside text-gray-400 space-y-1 pl-3 text-left">
          {service.features.map((f, idx) => (
            <li key={idx}>{f}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

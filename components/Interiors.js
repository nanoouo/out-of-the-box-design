"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useState, useEffect } from "react";

export default function Interiors() {
  const { sectionRef, animate } = useScrollAnimation(0.4);
  const [scrollMarginTop, setScrollMarginTop] = useState("80px");

  // ✅ Ajustement dynamique selon la taille d’écran
  useEffect(() => {
    const updateMargin = () => {
      const width = window.innerWidth;
      if (width >= 1280) setScrollMarginTop("90px"); // grand écran
      else if (width >= 1024) setScrollMarginTop("80px");
      else if (width >= 768) setScrollMarginTop("85px");
      else if (width >= 640) setScrollMarginTop("100px");
      else setScrollMarginTop("120px"); // petits téléphones
    };
    updateMargin();
    window.addEventListener("resize", updateMargin);
    return () => window.removeEventListener("resize", updateMargin);
  }, []);

  // ✅ Gestion universelle du retour vers #interiors (corrige Chrome mobile & Vercel)
  useEffect(() => {
    const scrollToInteriors = () => {
      if (window.location.hash === "#interiors") {
        const el = document.getElementById("interiors");
        if (!el) return;

        // 🕐 Attendre que la section soit visible après hydration React
        setTimeout(() => {
          const offset = parseInt(scrollMarginTop.replace("px", ""));
          const y = el.getBoundingClientRect().top + window.scrollY - offset;

          // ✅ Forcer un scroll stable compatible iOS/Android/Chrome
          requestAnimationFrame(() => {
            window.scrollTo({
              top: y,
              behavior: "smooth",
            });
          });

          // ✅ Relancer l’animation
          window.dispatchEvent(
            new CustomEvent("sectionChange", { detail: "interiors" })
          );
        }, 650); // délai optimisé pour Chrome mobile
      }
    };

    // 🔁 Exécuter au montage + quand l’utilisateur change de hash
    scrollToInteriors();
    window.addEventListener("hashchange", scrollToInteriors);

    return () => window.removeEventListener("hashchange", scrollToInteriors);
  }, [scrollMarginTop]);

  const sections = [
    {
      slug: "external/residential",
      video: "/video/residential.mp4",
      title: "Residential Interiors",
      shortDescription:
        "Your home is your sanctuary — it should not only be peaceful, but also a reflection of your personality, filled with memories and aspirations.",
    },
    {
      slug: "external/commercial",
      video: "/video/commercial1.mp4",
      title: "Commercial Interiors",
      shortDescription:
        "Every commercial space should reflect the brand’s identity and purpose. We interpret our clients’ business values to design functional and visually captivating environments.",
    },
    {
      slug: "external/yacht",
      video: "/video/yacht.mp4",
      title: "Luxury Yacht Design",
      shortDescription:
        "Luxury Living, Redefined at Sea. Our yacht design combines craftsmanship, innovation, and artistry — tailored to your lifestyle and vessel’s unique character.",
    },
  ];

  return (
    <section
      id="interiors"
      ref={sectionRef}
      style={{
        scrollMarginTop,
        WebkitScrollMarginTop: scrollMarginTop,
      }}
      className="relative w-full bg-gradient-to-b from-[#111] via-[#1a1a1a] to-[#222] text-white px-4 sm:px-6 md:px-8 lg:px-10 py-20 sm:py-24 md:py-28 overflow-hidden scroll-smooth"
    >
      {/* === Titre de section === */}
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-8 text-[#f9e65c] drop-shadow-[0_0_15px_rgba(249,230,92,0.9)] uppercase tracking-widest"
        initial={{ opacity: 0, y: 40 }}
        animate={animate ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        What We Do
      </motion.h2>

      <motion.hr
        className="mx-auto w-20 sm:w-24 border-t-4 border-[#f9e65c] mb-10 sm:mb-12 shadow-[0_0_20px_rgba(249,230,92,0.8)]"
        initial={{ scaleX: 0 }}
        animate={animate ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />

      {/* === Cartes === */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 max-w-6xl mx-auto">
        {sections.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            animate={animate ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.7, delay: 0.2 * i }}
            className="group relative flex flex-col bg-[#1a1a1a]/80 backdrop-blur-md rounded-2xl border border-[#f9e65c33] shadow-lg hover:shadow-[0_0_35px_rgba(249,230,92,0.5)] transition-all duration-500 overflow-hidden"
          >
            <div className="relative w-full h-52 sm:h-60 md:h-72 overflow-hidden">
              <video
                src={s.video}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/80 transition-all duration-500"></div>
              <h3 className="absolute bottom-5 left-1/2 -translate-x-1/2 text-center text-xl sm:text-2xl md:text-3xl font-extrabold uppercase text-[#f9e65c] drop-shadow-[0_0_15px_rgba(249,230,92,0.9)]">
                {s.title}
              </h3>
            </div>

            <div className="p-5 sm:p-6 md:p-8 text-center space-y-4 flex flex-col flex-grow">
              <p className="text-gray-200 leading-relaxed text-sm sm:text-base font-medium line-clamp-5">
                {s.shortDescription}
              </p>

              <div className="mt-auto">
                <Link
                  href={`/${s.slug}`}
                  className="inline-block mt-4 px-5 py-2 text-sm sm:text-base font-semibold text-black bg-[#f9e65c] rounded-full hover:bg-[#fff06d] transition-all duration-300"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* === Arrière-plan === */}
      <div className="absolute inset-0 bg-[url('/oo.jpg')] bg-center bg-cover opacity-5 pointer-events-none"></div>
    </section>
  );
}

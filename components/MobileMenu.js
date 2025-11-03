"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function MobileMenu({ open, onClose }) {
  const [openDropdown, setOpenDropdown] = useState(false);

  const links = [
    { label: "About", href: "#about" },
    { label: "Areas We Serve ", href: "#serve" },

    { label: "What We Do ", href: "#interiors" },
    {
      label: "Services",
      href: "#services",
      subLinks: [
        { label: "Luxury Custom Home Design", href: "#service-1" },
        { label: "Initial Design Consultation", href: "#service-2" },
        { label: "Interior Virtual Design", href: "#service-3" },
        { label: "Feature Wall Design", href: "#service-4" },
        { label: "Outdoor Design", href: "#service-5" },
      ],
    },
    
    
    { label: "What Clients Say About Us!", href: "#testimonials" },
    { label: "Shop", href: "#shop" },
    { label: "Contact", href: "#contact" },
  ];

  // 🔒 Bloquer le scroll du body quand le menu est ouvert
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  // 🧭 Scroll fluide avec décalage ajusté selon la taille du header
  const handleScroll = (href) => {
    onClose(); // Fermer le menu avant le scroll

    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        const headerHeight = window.innerWidth < 768 ? 60 : 90; // Ajustement mobile vs desktop
        const elementTop =
          element.getBoundingClientRect().top + window.scrollY - headerHeight;

        window.scrollTo({
          top: elementTop,
          behavior: "smooth",
        });
      }
    }, 400);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* 🌑 Arrière-plan flou semi-transparent */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* 📱 Menu latéral mobile */}
          <motion.aside
            className="fixed right-0 top-0 h-full w-[85%] sm:w-[70%] text-white z-50 flex flex-col p-8 shadow-2xl border-l border-[#e8e56d]/40 relative overflow-y-auto"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 90, damping: 18 }}
          >
            {/* En-tête */}
            <div className="relative flex items-center justify-between mb-10 z-10">
              <h2 className="text-2xl font-semibold tracking-wide text-[#e8e56d]">
                Menu
              </h2>
              <button
                onClick={onClose}
                aria-label="Fermer le menu"
                className="text-3xl p-2 text-white hover:text-[#e8e56d] transition-colors duration-300"
              >
                ✕
              </button>
            </div>

            {/* Navigation principale */}
            <nav className="relative z-10 flex flex-col space-y-4 mt-4">
              {links.map((link, i) => (
                <div key={i} className="relative">
                  {/* Lien principal */}
                  <button
                    onClick={() =>
                      link.subLinks
                        ? setOpenDropdown((prev) =>
                            prev === link.label ? false : link.label
                          )
                        : handleScroll(link.href)
                    }
                    className="relative w-full text-left px-4 py-3 text-lg font-medium text-[#e8e56d] hover:text-white transition flex justify-between items-center"
                  >
                    {link.label}
                    {link.subLinks && (
                      <span
                        className={`transition-transform duration-300 ${
                          openDropdown === link.label ? "rotate-180" : ""
                        }`}
                      >
                        ▼
                      </span>
                    )}
                  </button>

                  {/* Sous-liens */}
                  {link.subLinks && (
                    <AnimatePresence>
                      {openDropdown === link.label && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex flex-col ml-6 mt-1 space-y-2"
                        >
                          {link.subLinks.map((sub, j) => (
                            <button
                              key={j}
                              onClick={() => handleScroll(sub.href)}
                              className="text-sm text-[#cfcf9d] hover:text-white text-left px-3 py-1 transition"
                            >
                              {sub.label}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </nav>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

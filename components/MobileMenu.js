"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileMenu({ open, onClose }) {
  const links = [
    { label: "Interiors", href: "#interiors" },
    { label: "Services", href: "#services" },
    { label: "Shop", href: "#shop" },
    { label: "About", href: "#about" },
    { label: "What Clients Say About Us!", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Fond global cliquable */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* Menu principal */}
          <motion.aside
            className="fixed right-0 top-0 h-full w-[85%] sm:w-[70%] 
              text-white z-50 flex flex-col p-8 shadow-2xl border-l border-[#e8e56d]/40
              relative overflow-hidden"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: 'spring', stiffness: 90, damping: 18 }}
          >
            {/* 🌟 Fond décoratif derrière les liens */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#1b1b1b] opacity-95" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(232,229,109,0.1),transparent_60%)]" />

            {/* En-tête du menu */}
            <div className="relative flex items-center justify-between mb-10 z-10">
              <motion.h2
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-2xl font-semibold tracking-wide text-[#e8e56d]"
              >
                Menu
              </motion.h2>
              <button
                onClick={onClose}
                aria-label="Fermer le menu"
                className="text-3xl p-2 text-white hover:text-[#e8e56d] transition-colors duration-300"
              >
                ✕
              </button>
            </div>

            {/* Liens */}
            <nav className="relative z-10 flex flex-col space-y-6 mt-4">
              {links.map((link, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i }}
                >
                  {/* Fond individuel sous chaque lien */}
                  <div className="relative group">
                    <div className="absolute inset-0 bg-white/5 border border-[#e8e56d]/20 rounded-xl backdrop-blur-sm group-hover:bg-[#e8e56d]/10 transition-all duration-300"></div>
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="relative block px-4 py-3 text-lg font-medium tracking-wide text-[#e8e56d] hover:text-white transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </div>
                </motion.div>
              ))}
            </nav>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

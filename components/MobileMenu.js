"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileMenu({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop cliquable */}
          <motion.div
            className="fixed inset-0 bg-black/30 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* Menu */}
          <motion.aside
            className="fixed inset-0 bg-white/95 text-black z-50 flex flex-col p-6 lg:hidden"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
          >
            {/* Header menu */}
            <div className="flex items-center justify-between mb-8">
              <div className="text-lg font-semibold">Menu</div>
              <button onClick={onClose} aria-label="Fermer le menu" className="text-2xl p-2">
                ✕
              </button>
            </div>

            {/* Liens */}
            <nav className="flex flex-col space-y-6 text-xl">
              <Link href="#about" onClick={onClose} className="hover:text-[#e8e56d] transition-colors">About Us</Link>
              <Link href="#services" onClick={onClose} className="hover:text-[#e8e56d] transition-colors">Services</Link>
              <Link href="#expertise" onClick={onClose} className="hover:text-[#e8e56d] transition-colors">Expertise</Link>
              <Link href="#etapes" onClick={onClose} className="hover:text-[#e8e56d] transition-colors">Étapes</Link>
              <Link href="#prix" onClick={onClose} className="hover:text-[#e8e56d] transition-colors">Prix</Link>
              <Link href="#contact" onClick={onClose} className="hover:text-[#e8e56d] transition-colors">Contacts</Link>
            </nav>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

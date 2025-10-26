"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Bloquer le scroll lorsque le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className="w-full bg-[#0f0f0f] fixed top-0 z-50 shadow-md">
      {/* 🌐 NAVBAR DESKTOP */}
      <div className="hidden lg:flex items-center justify-center py-6 px-16 max-w-[1300px] mx-auto">
        {/* Liens à gauche */}
        <nav className="flex-1 flex justify-end space-x-10 text-lg font-medium text-gray-300">
          <Link href="#about" className="hover:text-[#e8e56d] transition">
            About Us
          </Link>
          <Link href="#services" className="hover:text-white transition">Services</Link>
          <Link href="#portfolio" className="hover:text-white transition">Portefeuille</Link>
        </nav>

        {/* Logo centré */}
        <div className="px-12">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Out of the Box"
              width={160}
              height={60}
              className="object-contain brightness-125"
              priority
            />
          </Link>
        </div>

        {/* Liens à droite */}
        <nav className="flex-1 flex justify-start space-x-10 text-lg font-medium text-gray-300">
          <Link href="#etapes" className="hover:text-white transition">Étapes</Link>
          <Link href="#prix" className="hover:text-white transition">Prix</Link>
          <Link href="#contact" className="hover:text-white transition">Contact</Link>
        </nav>
      </div>

      {/* 📱 NAVBAR MOBILE & MEDIUM */}
      <div className="flex lg:hidden items-center justify-between px-5 sm:px-8 md:px-10 py-3 bg-[#0f0f0f]/95 backdrop-blur-md">
        {/* Logo à gauche */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Out of the Box"
            width={120}
            height={45}
            className="object-contain brightness-125"
          />
        </Link>

        {/* Bouton Hamburger à droite */}
        <button
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="p-2 rounded-md bg-white/10 text-white hover:bg-white/25 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        >
          <span className="text-2xl">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {/* Menu mobile animé */}
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}

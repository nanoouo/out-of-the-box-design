"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Bloquer le scroll quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const leftLinks = [
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
  ];

  const rightLinks = [
    { label: "Steps", href: "#steps" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ];

  const linkClasses =
    "relative text-[#e8e56d] hover:text-white transition-colors duration-300 group";

  // Smooth scroll + déclenche animation
  const scrollToSection = (e, href) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const section = document.getElementById(id);
    if (!section) return;

    section.scrollIntoView({ behavior: "smooth", block: "start" });

    // Déclenche l'animation après scroll
    setTimeout(() => {
      window.dispatchEvent(new CustomEvent("sectionChange", { detail: id }));
    }, 500);

    // Ferme le menu mobile si ouvert
    setOpen(false);
  };

  return (
    <header className="w-full bg-[#0f0f0f] fixed top-0 z-50 shadow-md">
      {/* DESKTOP */}
      <div className="hidden lg:flex items-center justify-center py-6 px-16 max-w-[1300px] mx-auto">
        {/* Left links */}
        <nav className="flex-1 flex justify-end space-x-10 text-lg font-medium">
          {leftLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={linkClasses}
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Logo */}
        <div
          className="px-12 cursor-pointer"
          onClick={(e) => scrollToSection(e, "#hero")}
        >
          <Image
            src="/logo2.png"
            alt="Out of the Box"
            width={160}
            height={60}
            className="object-contain brightness-125"
            priority
          />
        </div>

        {/* Right links */}
        <nav className="flex-1 flex justify-start space-x-10 text-lg font-medium">
          {rightLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={linkClasses}
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>
      </div>

      {/* MOBILE */}
      <div className="flex lg:hidden items-center justify-between px-5 sm:px-8 md:px-10 py-3 bg-[#0f0f0f]/95 backdrop-blur-md">
        {/* Logo */}
        <Image
          src="/logo2.png"
          alt="Out of the Box"
          width={120}
          height={45}
          className="object-contain brightness-125 cursor-pointer"
          onClick={(e) => scrollToSection(e, "#hero")}
        />

        {/* Hamburger */}
        <button
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="p-2 rounded-md bg-white/10 text-white hover:bg-white/25 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        >
          <span className="text-2xl">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {/* Menu mobile */}
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}

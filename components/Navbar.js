"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const leftLinks = [
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Expertise", href: "#expertise" },
  ];

  const rightLinks = [
    { label: "Steps", href: "#steps" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ];

  const linkClasses =
    "relative text-[#e8e56d] hover:text-white transition-colors duration-300 group";

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const section = document.getElementById(id);
    if (!section) return;

    section.scrollIntoView({ behavior: "smooth", block: "start" });

    setTimeout(() => {
      window.dispatchEvent(new CustomEvent("sectionChange", { detail: id }));
    }, 500);

    setOpen(false);
  };

  return (
    <header className="w-full bg-[#0f0f0f] fixed top-0 z-50 shadow-md">
      {/* DESKTOP */}
      <div className="hidden lg:flex items-center justify-center py-6 relative max-w-[1300px] mx-auto px-16">
        
        {/* Left links */}
        <nav className="flex space-x-10 absolute left-0">
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

        {/* Logo (centré) */}
        <div
          className="cursor-pointer"
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
        <nav className="flex space-x-10 absolute right-0">
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
        <Image
          src="/logo2.png"
          alt="Out of the Box"
          width={120}
          height={45}
          className="object-contain brightness-125 cursor-pointer"
          onClick={(e) => scrollToSection(e, "#hero")}
        />
        <button
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="p-2 rounded-md bg-white/10 text-white hover:bg-white/25 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        >
          <span className="text-2xl">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}

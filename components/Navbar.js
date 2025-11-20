"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const closeTimeoutRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const links = [
    { label: "About", href: "#about" },
    
    { label: "What We Do ", href: "#interiors" },
  {
  label: "Services",
  dropdown: [
    { label: "Kitchen Design", href: "#service-1" },
    { label: "Bathroom Design", href: "#service-2" },
    { label: "Walk-In Closet Design", href: "#service-3" },
    { label: "Other Areas", href: "#service-4" },
    { label: "Outdoor Design", href: "#service-5" },
  ],
},

    { label: "Areas We Serve ", href: "#service-areas" },
    { label: "Their words-Our reputation", href: "#testimonials" },
    { label: "House Signature", href: "#HouseSignature" },
    { label: "Shop Our Art", href: "#shop-art" },
    { label: "Contact", href: "#contact" },
  ];

  const linkClasses =
    "relative text-[#e8e56d] hover:text-white transition-colors duration-300 group font-medium tracking-wide";

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const section = document.getElementById(id);
    if (!section) return;
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setOpenDropdown(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(false);
    }, 400); // 0.4 second delay before hiding
  };

  return (
    <header className="w-full fixed top-0 z-50 bg-[#0f0f0f]/95 backdrop-blur-md shadow-[0_0_15px_rgba(0,0,0,0.5)]">
      {/* DESKTOP NAV */}
      <div className="hidden md:flex items-center justify-between max-w-[1400px] mx-auto px-6 lg:px-16 py-4">
        {/* Logo */}
        <div
          className="cursor-pointer flex-shrink-0"
          onClick={(e) => scrollToSection(e, "#hero")}
        >
          <Image
            src="/logooff.png"
            alt="Out of the Box Logo"
            width={70}
            height={40}
            className="object-contain brightness-125 hover:scale-105 transition-transform duration-300"
            priority
          />
        </div>

        {/* Centered Links */}
        <nav className="flex flex-wrap justify-center items-center gap-8 xl:gap-10 text-sm lg:text-base">
          {links.map((link, i) =>
            link.dropdown ? (
              <div
                key={i}
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`${linkClasses} focus:outline-none`}
                  onClick={() => setOpenDropdown(!openDropdown)}
                >
                  {link.label}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </button>

                {/* Dropdown */}
                {openDropdown && (
                  <div className="absolute left-0 mt-3 w-64 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl shadow-lg overflow-hidden">
                    {link.dropdown.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.href}
                        onClick={(e) => scrollToSection(e, item.href)}
                        className="block px-4 py-3 text-sm text-[#e8e56d] hover:bg-[#2a2a2a] hover:text-white transition-all"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={i}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={linkClasses}
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            )
          )}
        </nav>
      </div>

      {/* MOBILE NAV */}
      <div className="flex md:hidden items-center justify-between px-5 sm:px-8 py-3">
        <Image
          src="/logooff.png"
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

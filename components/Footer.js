"use client";

import { Instagram, Linkedin, Mail, Phone, MessageSquare, ChevronDown } from "lucide-react";
import { useState } from "react";

const services = [
  { label: "Luxury Custom Home Design", href: "#service-1" },
  { label: "Initial Design Consultation", href: "#service-2" },
  { label: "Interior Virtual Design", href: "#service-3" },
  { label: "Feature Wall Design", href: "#service-4" },
  { label: "Sourcing & Procurement Service", href: "#service-5" },
  { label: "Kitchen Design", href: "#service-6" },
  { label: "Bathroom Design", href: "#service-7" },
  { label: "Walk-In Closet Design", href: "#service-8" },
  { label: "Other Areas", href: "#service-9" },
  { label: "Outdoor Design", href: "#service-10" },
  { label: "House Signature — Moroccan Gypsum", href: "#service-11" },
  { label: "House Signature — Moroccan Woodwork", href: "#service-12" },
];

export default function Footer() {
  const [showServices, setShowServices] = useState(false);

  const handleScroll = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
    setShowServices(false);
  };

  return (
    <footer className="bg-[#111] text-gray-300 px-6 py-12 relative">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* === LOGO & DESCRIPTION === */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-bold text-[#f9e65c]">Out of the Box Design</h2>
          <p className="text-gray-400">
            Creating spaces and experiences that reflect your personality and style.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/outoftheboxdesignstudio"
              target="_blank"
              className="hover:text-[#f9e65c] transition-colors"
            >
              <Instagram size={40} />
            </a>
            <a
              href="https://wa.me/17035086812"
              target="_blank"
              className="hover:text-[#25D366] transition-colors"
            >
              <MessageSquare size={40} />
            </a>
          </div>
        </div>

        {/* === QUICK LINKS === */}
        <div className="flex flex-col space-y-2 relative">
          <h3 className="text-lg font-semibold text-[#f9e65c] mb-2">Quick Links</h3>

          <button
            onClick={() => handleScroll("#hero")}
            className="text-left hover:text-[#f9e65c] transition-colors"
          >
            Home
          </button>

          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowServices(!showServices)}
              className="w-full flex items-center justify-between hover:text-[#f9e65c] transition-colors"
            >
              Services
              <ChevronDown
                size={18}
                className={`ml-1 transition-transform duration-300 ${
                  showServices ? "rotate-180 text-[#f9e65c]" : ""
                }`}
              />
            </button>
            {showServices && (
              <div className="ml-3 mt-2 flex flex-col space-y-1 bg-[#1a1a1a]/90 p-2 rounded-lg border border-[#f9e65c33] shadow-lg">
                {services.map((service) => (
                  <button
                    key={service.href}
                    onClick={() => handleScroll(service.href)}
                    className="text-sm text-gray-300 hover:text-[#f9e65c] text-left transition-colors"
                  >
                    {service.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => handleScroll("#HouseSignature")}
            className="text-left hover:text-[#f9e65c] transition-colors"
          >
            House Signature
          </button>

          <button
            onClick={() => handleScroll("#shop-art")}
            className="text-left hover:text-[#f9e65c] transition-colors"
          >
            Shop Our Art
          </button>

          <button
            onClick={() => handleScroll("#contact")}
            className="text-left hover:text-[#f9e65c] transition-colors"
          >
            Contact
          </button>
        </div>

        {/* === CONTACT INFO === */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-semibold text-[#f9e65c] mb-2">Contact</h3>
          <div className="flex items-center space-x-2">
            <Phone size={30} className="text-[#f9e65c]" />
            <span>+1 (703) 508-6812</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail size={30} className="text-[#f9e65c]" />
            <span>Outoftheboxdesignstudio@gmail.com</span>
          </div>
        </div>
      </div>

      {/* === DIVIDER === */}
      <div className="border-t border-gray-800 mt-8 pt-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Out of the Box Design Studio. All rights reserved.
      </div>
    </footer>
  );
}

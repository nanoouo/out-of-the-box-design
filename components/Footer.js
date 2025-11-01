"use client";

import { Instagram, Linkedin, Mail, Phone, MessageSquare } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#111] text-gray-300 px-6 py-12 relative">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo & Description */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-bold text-[#f9e65c]">Out of the Box Design</h2>
          <p className="text-gray-400">
            Creating spaces and experiences that reflect your personality and style.
          </p>
          <div className="flex space-x-4">
            <a href="https://instagram.com" target="_blank" className="hover:text-[#f9e65c] transition-colors">
              <Instagram size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" className="hover:text-[#f9e65c] transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://wa.me/17035086812" target="_blank" className="hover:text-[#25D366] transition-colors">
              <MessageSquare size={24} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-semibold text-[#f9e65c] mb-2">Quick Links</h3>
          <a href="#" className="hover:text-[#f9e65c] transition-colors">Home</a>
          <a href="#services" className="hover:text-[#f9e65c] transition-colors">Services</a>
          <a href="#interiors" className="hover:text-[#f9e65c] transition-colors">Interiors</a>
          <a href="#contact" className="hover:text-[#f9e65c] transition-colors">Contact</a>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-semibold text-[#f9e65c] mb-2">Contact</h3>
          <div className="flex items-center space-x-2">
            <Phone size={20} className="text-[#f9e65c]" />
            <span>+1 (703) 508-6812</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail size={20} className="text-[#f9e65c]" />
            <span>Outoftheboxdesignstudio@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 mt-8 pt-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Out of the Box Design Studio. All rights reserved.
      </div>
    </footer>
  );
}

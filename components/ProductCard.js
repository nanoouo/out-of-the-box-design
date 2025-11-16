"use client";

import { MessageCircle } from "lucide-react";

export default function ProductCard({ title, price, image, description }) {
  const whatsappMessage = encodeURIComponent(
    `Hello! I’m interested in the artwork: ${title}. Could you tell me more about it?`
  );

  return (
    <div className="bg-[#121212] rounded-2xl p-5 shadow-lg hover:shadow-2xl transition-all border border-[#2a2a2a] hover:border-[#e8e56d55] hover:-translate-y-1">
      
      {/* IMAGE */}
      <div className="overflow-hidden rounded-xl mb-4 bg-black flex items-center justify-center p-3">
        <img
          src={image}
          alt={title}
          className="w-full h-72 object-contain rounded-xl transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* TITLE */}
      <h3 className="text-2xl font-semibold text-white mb-2 tracking-wide">
        {title}
      </h3>

      {/* DESCRIPTION FORMATÉE */}
      <p className="text-gray-400 text-sm whitespace-pre-line leading-relaxed mb-4">
        {description}
      </p>

      {/* PRICE */}
      <p className="text-[#e8e56d] font-bold text-xl mb-5">
        ${price}
      </p>

      {/* WHATSAPP BUTTON */}
      <a
        href={`https://wa.me/17035086812?text=${whatsappMessage}`}
        target="_blank"
        className="w-full flex items-center justify-center gap-2 bg-[#0ae65ba1] text-black font-semibold py-3 rounded-xl hover:bg-[#1ebe57] transition text-sm"
      >
        <MessageCircle size={20} />  
        Discuss on WhatsApp
      </a>
    </div>
  );
}

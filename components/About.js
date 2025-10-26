"use client";

import Image from "next/image";
import { useState } from "react";

export default function About() {
  const [isActive, setIsActive] = useState(false);

  // Fonction pour mobile : active la couleur temporairement
  const handleTouch = () => {
    setIsActive(true);
    setTimeout(() => setIsActive(false), 1500); // retour au gris après 1.5s
  };

  return (
    <section
      id="about"
      className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center px-6 py-20"
    >
      <br />
      {/* === Titre principal === */}
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
        About <span className="text-[#e8e56d]">Us</span>
      </h2>

      {/* === Sous-titre === */}
      <p className="text-lg sm:text-xl text-gray-600 text-center mb-10">
        Creating Interiors That Inspire
      </p>

      {/* === Photo de profil avec effet === */}
      <div className="flex flex-col items-center">
        <div
          className={`relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 ease-in-out ${
            isActive ? "scale-105" : ""
          } group`}
          onTouchStart={handleTouch}
        >
          <Image
            src="/profile-about.jpg"
            alt="Interior Designer Portrait"
            fill
            className={`object-cover object-center transition-all duration-700 ease-in-out ${
              isActive
                ? "grayscale-0 scale-110 brightness-110"
                : "grayscale group-hover:grayscale-0 group-hover:scale-110 group-hover:brightness-110"
            }`}
          />

          {/* Overlay doux pour effet luxe */}
          <div
            className={`absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent transition-opacity duration-700 ${
              isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
            }`}
          ></div>
        </div>

        <p className="mt-4 text-gray-500 text-sm italic">
          Interior Designer, Artist, Creative Director
        </p>
      </div>

      {/* === Ligne de séparation === */}
      <hr className="w-24 border-t-2 border-gray-300 my-10" />

      {/* === Texte descriptif === */}
      <div className="max-w-4xl text-center text-gray-700 leading-relaxed space-y-4">
        <p>
          We believe that true luxury lies in the details. Our team of designers,
          craftsmen, and installers works closely with each client — whether a
          homeowner, builder, architect, or developer — to bring visions to life
          with precision, elegance, and enduring quality.
        </p>
        <p>
          From custom kitchens and cabinetry to full-home interiors, every
          project is meticulously planned and executed, ensuring a harmonious
          balance of form, function, and sophistication.
        </p>
      </div>
    </section>
  );
}

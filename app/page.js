"use client";

import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Expertise from "../components/Expertise";
import Navbar from "../components/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="pt-[4.5rem]"> {/* Décalage pour navbar fixe */}
        <Hero />
        <About />
        <Services />
        <Expertise />
        {/* Ajouter Contact ou Footer si nécessaire */}
      </main>
    </>
  );
}

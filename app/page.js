"use client";

import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Interiors from "../components/Interiors";
import Navbar from "../components/Navbar";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";


export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="pt-[4.5rem]"> {/* Décalage pour navbar fixe */}
        <Hero />
        <About />
        <Services />
        <Interiors/>
        <Testimonials/>
        <Contact/>
        <Footer/>
        {/* Ajouter Contact ou Footer si nécessaire */}
      </main>
    </>
  );
}

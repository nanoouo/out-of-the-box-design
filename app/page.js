"use client";

import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Interiors from "../components/Interiors";
import Navbar from "../components/Navbar";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ServiceAreas from "@/components/ServiceAreas"; 
import HouseSignature from "@/components/HouseSignature";// ✅ import your ServiceAreas component
import ShopOurArt from "@/components/ShopOurArt"; 
import CertificateSection from "@/components/CertificateSection";



export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="pt-[4.5rem]">
        {/* Décalage pour navbar fixe */}
        <Hero />
        <About />
        <Interiors />
        <Services />
        
        <HouseSignature/>
        <ShopOurArt /> 
        <ServiceAreas />
        <Testimonials />
        <Contact />
        <CertificateSection />

        <Footer />
      </main>
    </>
  );
}

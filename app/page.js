import Hero from "@/components/Hero";
import About from "@/components/About";

export default function Home() {
  return (
    <main>
      <Hero />

     <About /> 

      <section id="portfolio" className="max-w-[1200px] mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold mb-6">Portefeuille</h2>
      </section>

      <section id="contact" className="max-w-[1200px] mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold mb-6">Contact</h2>
      </section>
    </main>
  );
}

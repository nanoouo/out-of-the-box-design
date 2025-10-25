import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />

      <section id="services" className="max-w-[1200px] mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold mb-6">Services</h2>
      </section>

      <section id="portfolio" className="max-w-[1200px] mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold mb-6">Portefeuille</h2>
      </section>

      <section id="contact" className="max-w-[1200px] mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold mb-6">Contact</h2>
      </section>
    </main>
  );
}

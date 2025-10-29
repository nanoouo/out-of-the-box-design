import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main>
      <Hero />
     <About /> 
     <Services/>
     

      <section id="contact" className="max-w-[1200px] mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold mb-6">Contact</h2>
      </section>
    </main>
  );
}

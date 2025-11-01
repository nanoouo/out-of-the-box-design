"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Home, PhoneCall, Monitor, Brush, Sun } from "lucide-react";

export default function Services() {
  const { sectionRef, animate } = useScrollAnimation(0.1);

  const services = [
    {
      id: 1,
      icon: <Home size={42} />,
      title: "Luxury Custom Home Design",
      subtitle: "Where Vision Meets Architectural Artistry",
      desc: `Our custom home design service transforms your ideas into timeless living spaces.
      Every project begins with a deep understanding of your lifestyle and aesthetic.
      From concept sketches to final plans, we ensure every proportion, material, and detail harmonizes beautifully.`,
      features: [
        "Personalized concept development",
        "Site analysis & architectural planning",
        "3D renderings & virtual walkthroughs",
        "Collaboration with architects & artisans",
        "Selection of luxury materials & finishes",
        "Smart home & sustainable design integration",
      ],
    },
    {
      id: 2,
      icon: <PhoneCall size={42} />,
      title: "Initial Design Consultation",
      subtitle: "Your First Step Toward a Refined Home",
      desc: `Our consultation introduces you to our design philosophy and process.
      We explore your goals, aesthetic preferences, and the character of your space—whether it’s a new build, renovation, or full-scale interior.`,
      features: [
        "In-depth discussion of your vision",
        "Review of plans or inspiration boards",
        "Preliminary layout, style, and material guidance",
        "Overview of process, timeline, and next steps",
        "Available in-person or virtually",
      ],
    },
    {
      id: 3,
      icon: <Monitor size={42} />,
      title: "Interior Virtual Design",
      subtitle: "Luxury Design, Delivered Remotely",
      desc: `Experience a fully personalized interior design journey from anywhere.
      We provide concept boards, finish palettes, and furniture selections—all tailored to your space and lifestyle.`,
      features: [
        "Custom moodboards & visual concepts",
        "Furniture and material curation",
        "Detailed floor plans and styling guides",
        "Clickable shopping list for easy execution",
        "Tailored to your budget and timeline",
      ],
    },
    {
      id: 4,
      icon: <Brush size={42} />,
      title: "Feature Wall Design",
      subtitle: "Make a Statement Worth Remembering",
      desc: `A signature wall can transform any room into a work of art.
      We design bespoke wall treatments using premium materials and refined textures that enhance architectural beauty.`,
      features: [
        "Custom wall paneling & millwork",
        "Natural stone, wood, or textured finishes",
        "3D composition & lighting integration",
        "Perfectly matched to your interior aesthetic",
      ],
    },
    {
      id: 5,
      icon: <Sun size={42} />,
      title: "Outdoor Design",
      subtitle: "Extend Luxury Beyond the Walls",
      desc: `We create outdoor environments that blend seamlessly with your home’s architecture—
      from tranquil courtyards to elegant terraces, every detail reflects harmony and comfort.`,
      features: [
        "Terrace & landscape coordination",
        "Custom outdoor furniture design",
        "Lighting & material selection",
        "Indoor-outdoor spatial flow",
        "Relaxation-focused layouts",
      ],
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="bg-gradient-to-br from-[#0e0e0e] via-[#1a1a1a] to-[#0b0b0b] text-[#fefce8] px-6 py-20 space-y-24"
    >
      {/* Main title */}
      <motion.h2
        className="text-4xl sm:text-5xl font-bold text-center mb-2"
        initial={{ opacity: 0, y: 30 }}
        animate={animate ? { opacity: 1, y: 0 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Services
      </motion.h2>

      <motion.p
        className="text-lg sm:text-xl text-[#e8e56d] text-center"
        initial={{ opacity: 0 }}
        animate={animate ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Bespoke Design. Architectural Precision. Refined Living.
      </motion.p>

      {/* Individual service sections */}
      <div className="space-y-32 max-w-6xl mx-auto">
        {services.map((s, i) => (
          <motion.div
            key={s.id}
            id={`service-${s.id}`} // ✅ Target for navbar links
            className={`flex flex-col lg:flex-row gap-10 items-center scroll-mt-40 ${
              i % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`} // ✅ scroll margin to prevent text hiding under navbar
            initial={{ opacity: 0, y: 40 }}
            animate={animate ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 * i }}
          >
            {/* Icon */}
            <div className="flex-shrink-0 flex items-center justify-center bg-[#ffffff0d] text-[#e8e56d] rounded-full w-28 h-28 shadow-lg shadow-[#e8e56d33]">
              {s.icon}
            </div>

            {/* Text content */}
            <div className="space-y-4 max-w-xl">
              <h3 className="text-2xl font-semibold text-[#e8e56d]">
                {s.title}
              </h3>
              <h4 className="text-lg italic text-gray-300">{s.subtitle}</h4>
              <p className="text-gray-300 leading-relaxed">{s.desc}</p>

              <ul className="list-disc list-inside text-gray-400 space-y-1 pl-2">
                {s.features.map((f, idx) => (
                  <li key={idx}>{f}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer line */}
      <motion.hr
        className="w-32 border-t-2 border-[#e8e56d] mx-auto my-12"
        initial={{ scaleX: 0 }}
        animate={animate ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />

      <motion.p
        className="text-center text-gray-400 max-w-3xl mx-auto leading-relaxed"
        initial={{ opacity: 0 }}
        animate={animate ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Each service is a curated design experience — transforming spaces into
        expressions of refined living. Wherever your project takes place, we
        deliver beauty, precision, and timeless sophistication.
      </motion.p>
    </section>
  );
}

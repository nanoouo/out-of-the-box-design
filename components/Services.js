"use client";

import React, { useRef, useState } from "react";

import { motion, useTransform, useScroll } from "framer-motion";
import {
  CookingPot,
  Bath,
  Layers,
  Grid,
  Sun,
  Utensils,
  Warehouse,
  Package,
  Search,
} from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

/**
 * Services - composant principal
 * - 12 services
 * - chaque service a: id, icon, title, subtitle, desc, video (chemin), features[]
 *
 * NOTE: j'utilise le chemin local de ton image uploadée comme poster pour le 1er service:
 * "/mnt/data/WhatsApp Image 2025-11-20 at 4.27.30 PM.jpeg"
 */

export default function Services() {
  const { sectionRef, animate } = useScrollAnimation(0.1);

const services = [
  {
    id: 1,
    icon: <Layers size={42} />,
    title: "Luxury Custom Home Design",
    subtitle: "High-End Personalized Architectural Experience",
    desc: `
Luxury Custom Home Design — Where Vision Meets Architectural Artistry

Our luxury custom home design service transforms your ideas into timeless living spaces tailored to your lifestyle. Every project begins with a deep understanding of your aesthetic, functional needs, and the way you live.

From concept sketches to final architectural plans, we ensure every element proportions, materials, light, and flow harmonizes beautifully.

Our design process includes:
• Personalized concept development
• Site analysis and architectural planning
• 3D renderings & virtual walkthroughs
• Collaboration with architects, builders, and artisans
• Selection of luxury materials and finishes
• Integration of smart home and sustainable design features

The result: a one-of-a-kind residence that embodies your vision and elevates everyday living into an experience of artful comfort.
`,
    video: "/lchd.mp4",

    features: ["Full custom architecture", "Luxury material selection"],
  },

  {
    id: 2,
    icon: <Search size={42} />,
    title: "Initial Design Consultation",
    subtitle: "A Strategic First Step Toward Your Dream Space",
    desc: `
Initial Design Consultation — Your First Step Toward a Refined Home

Our initial design consultation is a comprehensive introduction to your project and our design philosophy. During this session, we explore your goals, preferences, and the unique character of your space whether it’s a new build, renovation, or full-scale interior design.

What’s included:
• In-depth conversation about your design vision
• Review of architectural plans or inspiration imagery
• Preliminary recommendations on layout, style, and materials
• Overview of our design process, timeline, and next steps

Following the consultation, you’ll receive a tailored proposal outlining how we can bring your dream home to life with our bespoke design approach. (Consultations are available in-person or virtually.)
`,
    video: "/idc.mp4",
    features: ["Vision analysis", "Design roadmapping"],
  },

  {
    id: 3,
    icon: <Grid size={42} />,
    title: "Interior Virtual Design",
    subtitle: "Luxury Design Delivered Remotely",
    desc: `
Interior Virtual Design — Luxury Design, Delivered Remotely

Our virtual design service offers a fully personalized interior experience from anywhere in the world. We provide concept boards, furniture selections, finish palettes, and styling recommendations all tailored to your space and budget.

You’ll receive a complete design package including:
• Concept boards
• Furniture recommendations
• Finish and color palettes
• Styling guidelines
• Clickable shopping list
• Layout plan

This allows you to execute the design at your own pace with confidence and clarity.
`,
    video: "/ivd.mp4",
    features: ["3D visualizations", "Concept + moodboard"],
  },

  {
    id: 4,
    icon: <Grid size={42} />,
    title: "Feature Wall Design",
    subtitle: "Make a Statement Worth Remembering",
    desc: `
Feature Wall Design — A Signature Statement for Any Room

A feature wall transforms any room into a work of art. We create custom-designed wall treatments using luxury materials from bespoke millwork and natural stone to textured finishes and custom panels.

Each design is composed to:
• Enhance architectural features
• Complement the room’s style
• Add visual depth and identity
• Create a memorable focal point

Your wall becomes an artistic centerpiece that elevates the entire space.
`,
    video: "/fwd.mp4",
    features: ["Custom patterns", "Lighting integration"],
  },

  {
    id: 5,
    icon: <Package size={42} />,
    title: "Sourcing & Procurement Service",
    subtitle: "Premium Materials and Luxury Furnishings",
    desc: `
We source the highest-quality materials, furniture, lighting, and décor from trusted global suppliers to bring your project to life. Every item is selected with precision to match your design vision.
`,
    video: "/videos/sourcing.mp4",
    features: ["Vendor coordination", "Material acquisition"],
  },

  {
    id: 6,
    icon: <Utensils size={42} />,
    title: "Kitchen Design",
    subtitle: "Functional Elegance at the Heart of Your Home",
    desc: `
Our kitchen designs combine beauty and practicality, blending luxurious materials with smart layouts tailored to your lifestyle.
`,
    video: "/kd.mp4",
    features: ["Custom cabinetry", "Lighting & material selection"],
  },

  {
    id: 7,
    icon: <Bath size={42} />,
    title: "Bathroom Design",
    subtitle: "A Sanctuary of Comfort and Elegance",
    desc: `
We transform bathrooms into refined spaces of relaxation, featuring premium fixtures, balanced lighting, and spa-inspired concepts.
`,
    video: "/bd.mp4",
    features: ["Marble finishes", "Modern spa concepts"],
  },

  {
    id: 8,
    icon: <Warehouse size={42} />,
    title: "Walk-In Closet Design",
    subtitle: "Luxury Organization Tailored to You",
    desc: `
We create sophisticated closets with custom shelving, elegant lighting, and premium finishes for an elevated daily experience.
`,
    video: "/wcd.mp4",
    features: ["Custom systems", "Material harmony"],
  },

  {
    id: 9,
    icon: <Grid size={42} />,
    title: "Other Areas",
    subtitle: "Luxury Across Every Corner of Your Home",
    desc: `
We design every corner of your home lounges, foyers, great rooms, bars, offices with harmony, flow, and refined aesthetics.
`,
    video: "/oa.mp4",
    features: [
      "Office design",
      "Ballroom design",
      "Bar design",
      "Den design",
      "Foyer design",
    ],
  },

  {
    id: 10,
    icon: <Sun size={42} />,
    title: "Outdoor Design",
    subtitle: "Beautiful Living Beyond Your Walls",
    desc: `
We create serene, elegant outdoor environments that connect architecture with nature gardens, terraces, outdoor lounges, and more.
    `,
    video: "/od.mp4",
    features: ["Landscape design", "Lighting & seating"],
  },

  {
    id: 11,
    icon: <Layers size={42} />,
    title: "House Signature — Moroccan Gypsum",
    subtitle: "Authentic Moroccan Handmade Gypsum",
    desc: `
We offer bespoke Moroccan carved gypsum, adding character, tradition, and artistry to your interiors.
`,
    video: "/videos/gypsum.mp4",
    features: ["Traditional carving", "Custom patterns"],
  },

  {
    id: 12,
    icon: <Layers size={42} />,
    title: "House Signature — Moroccan Woodwork",
    subtitle: "Handmade Woodwork with Timeless Detail",
    desc: `
Hand-crafted Moroccan woodwork with rich textures, intricate carving, and timeless authenticity.
`,
    video: "/videos/woodwork.mp4",
    features: ["Hand-carved details", "Premium woods"],
  },
];


  return (
    <section
      id="services"
      ref={sectionRef}
      className="bg-gradient-to-br from-[#0e0e0e] via-[#181818] to-[#0b0b0b] text-[#fefce8] px-6 sm:px-10 lg:px-16 py-24 space-y-24 scroll-smooth"
    >
      <motion.h2
        className="text-4xl sm:text-5xl font-bold text-center mb-3"
        initial={{ opacity: 0, y: 30 }}
        animate={animate ? { opacity: 1, y: 0 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Services
      </motion.h2>

      <motion.p
        className="text-lg sm:text-xl text-[#e8e56d] text-center max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={animate ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Bespoke Design. Architectural Precision. Refined Living.
      </motion.p>

      <div className="space-y-32 max-w-7xl mx-auto">
        {services.map((s, i) => (
          <div id={`service-${s.id}`} key={s.id} className="scroll-mt-32">
            <ServiceCard service={s} reverse={i % 2 !== 0} animate={animate} />
          </div>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* ------------------------------ ServiceCard --------------------------------*/
/* -------------------------------------------------------------------------- */

function ServiceCard({ service, reverse, animate }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const [expanded, setExpanded] = useState(false);

  // Format multi-line description
  function formatDesc(text) {
    return text
      .trim()
      .split("\n")
      .filter((line) => line.trim() !== "")
      .map((line, i) => (
        <p key={i} className="mb-3 text-gray-300 leading-relaxed">
          {line.trim()}
        </p>
      ));
  }

  return (
    <motion.div
      ref={ref}
      className={`flex flex-col lg:flex-row items-center gap-12 ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
      initial={{ opacity: 0, y: 60 }}
      animate={animate ? { opacity: 1, y: 0 } : { opacity: 0 }}
      transition={{ duration: 0.9 }}
    >
      {/* VIDEO */}
      <motion.div
        style={{ y }}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 100, damping: 12 }}
        className="service-media h-full rounded-3xl overflow-hidden shadow-[0_0_25px_rgba(232,229,109,0.1)] relative"
      >
        <video
          src={service.video}
          controls
          autoPlay
          loop
          muted
          poster={service.poster}
          className="h-full w-auto object-cover rounded-3xl"
          style={{ maxHeight: "550px" }}
        />
      </motion.div>

      {/* TEXT */}
      <div className="w-full lg:w-1/2 space-y-4 text-center lg:text-left">
        <div className="flex justify-center lg:justify-start items-center gap-4">
          <div className="bg-[#ffffff0d] text-[#e8e56d] rounded-full w-16 h-16 flex items-center justify-center shadow-md shadow-[#e8e56d44]">
            {service.icon}
          </div>
          <h3 className="text-2xl font-semibold text-[#e8e56d]">{service.title}</h3>
        </div>

        <h4 className="text-lg italic text-gray-300">{service.subtitle}</h4>

        {/* Description formatted */}
        <div className={`${expanded ? "" : "line-clamp-3"}`}>
          {formatDesc(service.desc)}
        </div>

        {/* Learn more */}
        {service.desc.length > 120 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-[#e8e56d] font-semibold hover:underline mt-1"
          >
            {expanded ? "Show Less" : "Learn More"}
          </button>
        )}

        <ul className="list-disc list-inside text-gray-400 space-y-1 pl-3 text-left">
          {service.features.map((f, idx) => (
            <li key={idx}>{f}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

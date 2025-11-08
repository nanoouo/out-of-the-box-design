"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import Slider from "react-slick";
import { useRef, useState, useEffect } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Home, PhoneCall, Monitor, Brush, Sun } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Services() {
  const { sectionRef, animate } = useScrollAnimation(0.1);

  const services = [
    {
      id: 1,
      icon: <Home size={42} />,
      title: "Luxury Custom Home Design",
      subtitle: "Where Vision Meets Architectural Artistry",
      desc: `Our custom home design service transforms your ideas into timeless living spaces.`,
      images: ["/images/home1.jpg", "/images/home2.jpg", "/images/home3.jpg"],
      features: [
        "Personalized concept development",
        "Architectural planning & 3D renderings",
      ],
    },
    {
      id: 2,
      icon: <PhoneCall size={42} />,
      title: "Initial Design Consultation",
      subtitle: "Your First Step Toward a Refined Home",
      desc: `Our consultation introduces you to our design philosophy and process.`,
      images: ["/images/consult1.jpg", "/images/consult2.jpg", "/images/consult3.jpg"],
      features: [
        "In-depth vision discussion",
        "Material & layout guidance",
      ],
    },
    {
      id: 3,
      icon: <Monitor size={42} />,
      title: "Interior Virtual Design",
      subtitle: "Luxury Design, Delivered Remotely",
      desc: `Experience a fully personalized interior design journey from anywhere.`,
      images: ["/images/virtual1.jpg", "/images/virtual2.jpg", "/images/virtual3.jpg"],
      features: [
        "Custom moodboards & renderings",
        "Furniture & material curation",
      ],
    },
    {
      id: 4,
      icon: <Brush size={42} />,
      title: "Feature Wall Design",
      subtitle: "Make a Statement Worth Remembering",
      desc: `A signature wall can transform any room into a work of art.`,
      images: ["/images/wall1.jpg", "/images/wall2.jpg", "/images/wall3.jpg"],
      features: [
        "Custom wall paneling & lighting",
        "Premium wood or texture finishes",
      ],
    },
    {
      id: 5,
      icon: <Sun size={42} />,
      title: "Outdoor Design",
      subtitle: "Extend Luxury Beyond the Walls",
      desc: `We create outdoor environments that blend seamlessly with your home’s architecture.`,
      images: ["/images/outdoor1.jpg", "/images/outdoor2.jpg", "/images/outdoor3.jpg"],
      features: [
        "Terrace & landscape design",
        "Lighting & layout harmony",
      ],
    },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false,
    cssEase: "ease-in-out",
  };

  useEffect(() => {
    // 👇 Scroll adaptatif selon mobile / desktop
    const handleLinkClick = (event) => {
      const href = event.target.getAttribute("href");
      if (!href || !href.startsWith("#service-")) return;

      event.preventDefault();
      const serviceId = href.replace("#", "");
      const element = document.getElementById(serviceId);

      if (element) {
        const isMobile = window.innerWidth < 1024;
        let target = element;

        // 👇 si mobile, scroll vers l’image
        if (isMobile) {
          const imgContainer = element.querySelector(".service-image");
          if (imgContainer) target = imgContainer;
        }

        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    // 🔗 Intercepter tous les clics de lien Services
    document.querySelectorAll('a[href^="#service-"]').forEach((link) => {
      link.addEventListener("click", handleLinkClick);
    });

    return () => {
      document.querySelectorAll('a[href^="#service-"]').forEach((link) => {
        link.removeEventListener("click", handleLinkClick);
      });
    };
  }, []);

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

      {/* SERVICES */}
      <div className="space-y-32 max-w-7xl mx-auto">
        {services.map((s, i) => (
          <div id={`service-${s.id}`} key={s.id} className="scroll-mt-32">
            <ServiceCard
              service={s}
              reverse={i % 2 !== 0}
              animate={animate}
              sliderSettings={sliderSettings}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

/* === ServiceCard === */
function ServiceCard({ service, reverse, animate, sliderSettings }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const [activeIndex, setActiveIndex] = useState(0);

  const customSettings = {
    ...sliderSettings,
    beforeChange: (_, next) => setActiveIndex(next),
  };

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
      {/* IMAGE + CAROUSEL */}
      <motion.div
        style={{ y }}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 100, damping: 12 }}
        className="service-image w-full lg:w-1/2 rounded-3xl overflow-hidden shadow-[0_0_25px_rgba(232,229,109,0.1)] relative"
      >
        <Slider {...customSettings}>
          {service.images.map((img, idx) => (
            <div key={idx}>
              <img
                src={img}
                alt={`${service.title} ${idx}`}
                className="w-full h-[350px] sm:h-[420px] object-cover rounded-3xl"
              />
            </div>
          ))}
        </Slider>

        {/* DOTS */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {service.images.map((_, i) => (
            <motion.div
              key={i}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                i === activeIndex
                  ? "bg-[#e8e56d] scale-125 shadow-[0_0_10px_#e8e56d]"
                  : "bg-[#e8e56d55] scale-90"
              }`}
            />
          ))}
        </div>
      </motion.div>

      {/* TEXTE */}
      <div className="w-full lg:w-1/2 space-y-4 text-center lg:text-left">
        <div className="flex justify-center lg:justify-start items-center gap-4">
          <div className="bg-[#ffffff0d] text-[#e8e56d] rounded-full w-16 h-16 flex items-center justify-center shadow-md shadow-[#e8e56d44]">
            {service.icon}
          </div>
          <h3 className="text-2xl font-semibold text-[#e8e56d]">{service.title}</h3>
        </div>
        <h4 className="text-lg italic text-gray-300">{service.subtitle}</h4>
        <p className="text-gray-300 leading-relaxed">{service.desc}</p>
        <ul className="list-disc list-inside text-gray-400 space-y-1 pl-3 text-left">
          {service.features.map((f, idx) => (
            <li key={idx}>{f}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

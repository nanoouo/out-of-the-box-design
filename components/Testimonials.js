"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useState, useEffect, useRef } from "react";
import { Star } from "lucide-react";

export default function Testimonials() {
  const { sectionRef, animate } = useScrollAnimation(0.3);

  const [formData, setFormData] = useState({
    name: "",
    rating: 5,
    message: "",
    role: "",
  });

  const [submittedTestimonials, setSubmittedTestimonials] = useState([]);
  const [activeVideo, setActiveVideo] = useState(0);

  const videoRefs = useRef([]);

  useEffect(() => {
    async function fetchTestimonials() {
      const res = await fetch("/api/testimonials");
      const data = await res.json();
      setSubmittedTestimonials(data);
    }
    fetchTestimonials();
  }, []);

  const testimonials = [
    {
      name: "Emily Johnson",
      role: "Homeowner",
      rating: 5,
      message:
        "Out of the Box Design transformed my living space into a stunning sanctuary. Every detail was perfect!",
    },
    {
      name: "Michael Smith",
      role: "CEO, TechCorp",
      rating: 4,
      message:
        "Our office now inspires creativity and productivity. The team understood our vision perfectly.",
    },
    {
      name: "Sophia Lee",
      role: "Yacht Owner",
      rating: 5,
      message:
        "The luxury yacht interior exceeded my expectations. Elegant, functional, and breathtaking!",
    },
  ];

  const allTestimonials = [...testimonials, ...submittedTestimonials];

  const reviewVideos = [
    "/rv1.mp4",
    "/ps.mp4",
    "/videos/review3.mp4",
  ];

  const handleVideoEnd = () => {
    setActiveVideo((prev) => (prev + 1) % reviewVideos.length);
  };

  useEffect(() => {
    videoRefs.current.forEach((vid, idx) => {
      if (!vid) return;
      if (idx === activeVideo) {
        vid.play().catch(() => {});
      } else {
        vid.pause();
        vid.currentTime = 0;
      }
    });
  }, [activeVideo]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message || !formData.role) return;

    try {
      await fetch("/api/testimonials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (formData.rating >= 4) {
        setSubmittedTestimonials((prev) => [...prev, { ...formData }]);
      }
      setFormData({ name: "", rating: 5, message: "", role: "" });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative w-full bg-gradient-to-b from-[#111] via-[#1a1a1a] to-[#222] 
      text-white px-6 py-32 sm:py-36 overflow-hidden"
      style={{ scrollMarginTop: "6rem" }}
    >
      <motion.h2
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-12 
        text-[#f9e65c] drop-shadow-[0_0_15px_rgba(249,230,92,0.9)]
        uppercase tracking-widest"
        initial={{ opacity: 0, y: 40 }}
        animate={animate ? { opacity: 1, y: 0 } : { opacity: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        What Clients Say About Us!
      </motion.h2>

      <motion.hr
        className="mx-auto w-24 border-t-4 border-[#f9e65c] mb-16 
        shadow-[0_0_20px_rgba(249,230,92,0.8)]"
        initial={{ scaleX: 0 }}
        animate={animate ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      />

      {/* === VIDEO PLAYER + THUMBNAILS === */}
      <div className="flex flex-col items-center mb-16">

        {/* Main Video */}
        <video
          key={activeVideo}
          ref={(el) => (videoRefs.current[activeVideo] = el)}
          src={reviewVideos[activeVideo]}
          controls
          muted
          onEnded={handleVideoEnd}
          className="rounded-2xl shadow-lg border border-[#f9e65c33] 
                     w-full max-w-[600px] h-[340px] sm:h-[400px] md:h-[450px]"
        />

        {/* Thumbnail Selector */}
        <div className="flex justify-center gap-4 mt-6">
          {reviewVideos.map((vid, idx) => (
            <button
              key={idx}
              onClick={() => setActiveVideo(idx)}
              className={`w-20 h-12 rounded-lg overflow-hidden border transition-all 
              ${idx === activeVideo ? "border-[#f9e65c] scale-110" : "border-gray-600 opacity-60 hover:opacity-100"}`}
            >
              <video
                src={vid}
                muted
                className="w-full h-full object-cover pointer-events-none"
              />
            </button>
          ))}
        </div>

      </div>

      {/* === Testimonial Cards === */}
      <div className="overflow-hidden relative mb-16">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            x: { repeat: Infinity, repeatType: "loop", duration: 30, ease: "linear" },
          }}
        >
          {[...allTestimonials, ...allTestimonials].map((t, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[80%] sm:w-[45%] md:w-[30%] 
              bg-[#1a1a1a]/80 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-lg flex flex-col
              justify-between border border-[#f9e65c33] transition-transform duration-300 
              hover:scale-105"
            >
              <p className="text-gray-200 leading-relaxed mb-4">"{t.message}"</p>

              <div className="flex justify-center mb-3">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={i < t.rating ? "text-[#f9e65c]" : "text-gray-600"}
                  />
                ))}
              </div>

              <h3 className="text-[#f9e65c] font-semibold text-lg text-center">
                {t.name}
              </h3>
              <p className="text-gray-400 text-sm text-center">{t.role}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* === Form === */}
      <motion.div
        className="max-w-3xl mx-auto bg-[#1a1a1a]/70 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={animate ? { opacity: 1, y: 0 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <h3 className="text-2xl font-semibold text-center text-[#f9e65c] mb-6">
          Share Your Experience
        </h3>

        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="px-4 py-3 rounded-lg bg-[#222] border border-gray-600 text-white 
            focus:border-[#f9e65c] focus:outline-none"
            required
          />

          <textarea
            placeholder="Your Testimonial"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="px-4 py-3 rounded-lg bg-[#222] border border-gray-600 text-white 
            focus:border-[#f9e65c] focus:outline-none resize-none h-32"
            required
          />

          <input
            type="text"
            placeholder="Votre rôle (ex: Homeowner, Yacht Owner)"
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            className="px-4 py-3 rounded-lg bg-[#222] border border-gray-600 text-white 
            focus:border-[#f9e65c] focus:outline-none"
            required
          />

          {/* Rating */}
          <div className="flex items-center space-x-3">
            <span className="text-gray-300">Rating:</span>
            {Array.from({ length: 5 }, (_, i) => (
              <button
                type="button"
                key={i}
                onClick={() => setFormData({ ...formData, rating: i + 1 })}
                className={i < formData.rating ? "text-[#f9e65c]" : "text-gray-600"}
              >
                <Star size={24} />
              </button>
            ))}
          </div>

          <button
            type="submit"
            className="mt-4 bg-[#f9e65c] text-black font-semibold py-3 rounded-lg 
            shadow-lg hover:brightness-105 transition-transform duration-300"
          >
            Submit Testimonial
          </button>
        </form>
      </motion.div>

      <div className="absolute inset-0 bg-[url('/o.jpg')] bg-center bg-cover opacity-5 pointer-events-none"></div>
    </section>
  );
}

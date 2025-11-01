"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactSection() {
  const [contactMethod, setContactMethod] = useState("email");
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    file: null,
    message: "",
  });

  const handleSubmitEmail = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.subject) return;

    const data = new FormData();
    data.append("email", formData.email);
    data.append("subject", formData.subject);
    if (formData.file) data.append("file", formData.file);

    console.log("Email submitted", formData);
    alert("Email envoyé (simulation)");
    setFormData({ email: "", subject: "", file: null, message: "" });
  };

  const handleSubmitWhatsApp = (e) => {
    e.preventDefault();
    if (!formData.message) return;

    const phone = "+17035086812";
    const text = encodeURIComponent(formData.message);
    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
    setFormData({ ...formData, message: "" });
  };

  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-gradient-to-b from-[#111] via-[#1a1a1a] to-[#222] text-white px-6 py-32 sm:py-36 overflow-hidden"
      style={{ scrollMarginTop: "6rem" }}
    >
      <motion.h2
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-12 text-[#f9e65c] drop-shadow-[0_0_15px_rgba(249,230,92,0.9)] uppercase tracking-widest"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Us
      </motion.h2>

      <div className="max-w-3xl mx-auto bg-[#1a1a1a]/70 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-lg">
        {/* === Choix de contact === */}
        <div className="flex justify-center mb-6 space-x-6">
          {["email", "whatsapp"].map((method) => (
            <label
              key={method}
              className={`flex items-center space-x-2 cursor-pointer px-4 py-2 rounded-lg transition-all ${
                contactMethod === method
                  ? "bg-[#f9e65c]/30 border border-[#f9e65c]"
                  : "bg-[#222] border border-gray-600"
              }`}
            >
              <input
                type="radio"
                name="contactMethod"
                value={method}
                checked={contactMethod === method}
                onChange={() => setContactMethod(method)}
                className="accent-[#f9e65c]"
              />
              <span className="capitalize">{method}</span>
            </label>
          ))}
        </div>

        {/* === Animated Forms === */}
        <AnimatePresence mode="wait">
          {contactMethod === "email" ? (
            <motion.form
              key="email"
              className="flex flex-col space-y-4"
              onSubmit={handleSubmitEmail}
              variants={formVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5 }}
            >
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="px-4 py-3 rounded-lg bg-[#222] border border-gray-600 text-white focus:border-[#f9e65c] focus:outline-none"
                required
              />
              <input
                type="text"
                placeholder="Subject"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                className="px-4 py-3 rounded-lg bg-[#222] border border-gray-600 text-white focus:border-[#f9e65c] focus:outline-none"
                required
              />
              <input
                type="file"
                onChange={(e) =>
                  setFormData({ ...formData, file: e.target.files[0] })
                }
                className="text-white"
              />
              <button
                type="submit"
                className="mt-4 bg-[#f9e65c] text-black font-semibold py-3 rounded-lg shadow-lg hover:brightness-105 transition-transform duration-300"
              >
                Send Email
              </button>
            </motion.form>
          ) : (
            <motion.form
              key="whatsapp"
              className="flex flex-col space-y-4"
              onSubmit={handleSubmitWhatsApp}
              variants={formVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5 }}
            >
              <textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="px-4 py-3 rounded-lg bg-[#222] border border-gray-600 text-white focus:border-[#f9e65c] focus:outline-none resize-none h-32"
                required
              />
              <button
                type="submit"
                className="mt-4 bg-[#25D366] text-black font-semibold py-3 rounded-lg shadow-lg hover:brightness-105 transition-transform duration-300"
              >
                Send via WhatsApp
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>

      {/* === Contact Info === */}
      <div className="mt-8 text-center text-gray-400 space-y-1">
        <p>📞 +1 (703) 508-6812</p>
        <p>✉️ Outoftheboxdesignstudio@gmail.com</p>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactSection() {
  const [contactMethod, setContactMethod] = useState("email");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // === Envoi email avec mailto ===
  const handleSubmitEmail = (e) => {
    e.preventDefault();

    const body = encodeURIComponent(`
First Name: ${formData.firstName}
Last Name: ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}

Project Description:
${formData.message}
    `);

    window.location.href = `mailto:outoftheboxdesignstudio@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${body}`;

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  // === Envoi WhatsApp ===
  const handleSubmitWhatsApp = (e) => {
    e.preventDefault();
    if (!formData.message) return;

    window.open(
      `https://wa.me/17035086812?text=${encodeURIComponent(formData.message)}`,
      "_blank"
    );
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
    >
      <motion.h2
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-12 text-[#f9e65c] uppercase tracking-widest"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Contact Us
      </motion.h2>

      <div className="max-w-3xl mx-auto bg-[#1a1a1a]/70 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-lg">
        {/* METHOD */}
        <div className="flex justify-center mb-6 gap-6">
          {["email", "whatsapp"].map((method) => (
            <label
              key={method}
              className={`flex items-center gap-2 cursor-pointer px-4 py-2 rounded-lg border transition ${
                contactMethod === method
                  ? "border-[#f9e65c] bg-[#f9e65c]/20"
                  : "border-gray-600"
              }`}
            >
              <input
                type="radio"
                checked={contactMethod === method}
                onChange={() => setContactMethod(method)}
                className="accent-[#f9e65c]"
              />
              <span className="capitalize">{method}</span>
            </label>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {contactMethod === "email" && (
            <motion.form
              key="email"
              onSubmit={handleSubmitEmail}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              className="flex flex-col space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  name="firstName"
                  placeholder="First Name"
                  onChange={handleChange}
                  value={formData.firstName}
                  className="input"
                  required
                />
                <input
                  name="lastName"
                  placeholder="Last Name"
                  onChange={handleChange}
                  value={formData.lastName}
                  className="input"
                  required
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  onChange={handleChange}
                  value={formData.email}
                  className="input"
                  required
                />
                <input
                  name="phone"
                  placeholder="Phone Number"
                  onChange={handleChange}
                  value={formData.phone}
                  className="input"
                  required
                />
              </div>

              <input
                name="subject"
                placeholder="Subject"
                onChange={handleChange}
                value={formData.subject}
                className="input"
                required
              />

              <textarea
                name="message"
                placeholder="Tell us about your project"
                rows={4}
                onChange={handleChange}
                value={formData.message}
                className="input resize-none"
                required
              />

              <button className="mt-4 bg-[#f9e65c] text-black font-semibold py-3 rounded-lg shadow-lg hover:brightness-105 transition">
                Send Email
              </button>
            </motion.form>
          )}

          {contactMethod === "whatsapp" && (
            <motion.form
              key="whatsapp"
              onSubmit={handleSubmitWhatsApp}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              className="flex flex-col space-y-4"
            >
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                onChange={handleChange}
                value={formData.message}
                className="input resize-none"
                required
              />

              <button className="mt-4 bg-[#25D366] text-black font-semibold py-3 rounded-lg shadow-lg hover:brightness-105 transition">
                Send via WhatsApp
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-8 text-center text-gray-400 space-y-1">
        <p>📞 +1 (703) 508-6812</p>
        <p>✉️ outoftheboxdesignstudio@gmail.com</p>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CommercialPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#111] via-[#1a1a1a] to-[#222] text-white px-6 sm:px-10 py-24">
      <div className="max-w-5xl mx-auto pt-12">
        <motion.video
          src="/commercial1.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-2xl mb-10 shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="bg-[#1a1a1a]/70 backdrop-blur-md border border-[#f9e65c44] rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-[0_0_25px_rgba(249,230,92,0.3)] transition-all duration-500"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-[#f9e65c] mb-6 text-center">
            Commercial Interiors
          </h1>

          <p className="text-gray-300 leading-relaxed text-base sm:text-lg mb-6 text-justify">
            Every commercial space should reflect the brand’s identity and
            purpose. We design environments that connect functionality and beauty,
            making your business stand out.
          </p>

          <div className="space-y-4 text-gray-200 text-sm sm:text-base leading-relaxed">
            <p>
              We create custom spaces for offices, boutiques, and hospitality
              areas that elevate productivity and brand identity.
            </p>
            <p>
              Our services include space planning, lighting design, materials
              curation, and ergonomic furniture layouts for seamless workflow and
              visual harmony.
            </p>
            <p>
              Each project is a collaboration aligning your brand story with an
              inspiring and functional interior experience.
            </p>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/#interiors"
              className="inline-block px-6 py-3 bg-[#f9e65c] text-black font-semibold rounded-full hover:bg-[#fff06d] transition-all duration-300"
            >
              ← Back to Waht We Do
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

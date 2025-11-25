"use client";

export default function CertificateSection() {
  return (
    <section className="py-24 px-6 sm:px-12 lg:px-24 text-white bg-[#0e0e0e]">
      <div className="max-w-4xl mx-auto text-center">

        {/* IMAGE */}
        <div className="flex justify-center mb-10">
          <img
            src="/certif.jpeg" // <-- Remplacer par ton image
            alt="Certificate of Originality"
            className="w-full sm:w-2/3 md:w-1/2 rounded-2xl shadow-xl border border-[#333] object-cover"
          />
        </div>

        {/* TITLE */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#e8e56d] drop-shadow-[0_0_10px_rgba(232,229,109,0.5)] mb-6">
          Certificate of Originality
        </h2>

        {/* TEXT */}
        <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
          “Your artwork arrives with a hand-signed Certificate of Originality,
          meticulously authenticated by the artist, an assurance of its rarity,
          provenance, and true collector’s quality handcrafted to verify the
          piece’s authenticity and guarantee its status as an exclusive,
          one-of-a-kind creation.”
        </p>

       
      </div>
    </section>
  );
}

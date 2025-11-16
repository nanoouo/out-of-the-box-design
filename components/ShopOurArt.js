"use client";

import ProductCard from "./ProductCard";

export default function ShopOurArt() {
  const products = [
    {
      title: "Nest of Shadows",
      price: 350,
      image: "/Nestofshadows.jpeg",
      description:
        "Medium: Charcoal on canvas\nSize: 24” × 36”\n“Serpents coil around a hollow center, circling the presence of something unseen.” — Fatima Ezahrae Aouayna"
    },
    {
      title: "Echo of a God",
      price: 420,
      image: "/Echoofagod.jpeg",
      description:
        "Medium: Charcoal on canvas\nSize: 24” × 36”\n“A solemn figure dissolves downward, its features fading like stone worn by time.” — Fatima Ezahrae Aouayna"
    },
    {
      title: "Luxury Black & Gold",
      price: 500,
      image: "/art3.jpg",
      description:
        "Large luxury artwork designed to elevate modern interior spaces with elegance."
    }
  ];

  return (
    <section
      id="#shop-art"
      className="bg-gradient-to-b from-[#0e0e0e] to-[#181818] text-white px-6 sm:px-12 lg:px-24 py-24 space-y-12"
    >

      {/* VIDEO HEADER */}
      <div className="flex flex-col items-center mb-16">
        <div className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-lg border border-[#333]">

          {/* WRAPPER HORIZONTAL RESPONSIVE */}
          <div className="video-wrapper">

            {/* VIDÉO VERTICALE AFFICHÉE EN ENTIER */}
            <video
              src="/pres.mp4"
              controls
              autoPlay
              muted
              loop
              playsInline
              className="video-full-vertical"
            />
          </div>
        </div>
      </div>

      <h2 className="text-4xl sm:text-5xl font-bold text-center text-[#e8e56d]">
        Shop Our Art
      </h2>

      <p className="text-center text-gray-400 max-w-2xl mx-auto">
        Explore our luxury wall art collection crafted for modern & elegant homes.
      </p>

      {/* PRODUCT GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {products.map((p, i) => (
          <ProductCard
            key={i}
            title={p.title}
            price={p.price}
            image={p.image}
            description={p.description}
          />
        ))}
      </div>
    </section>
  );
}

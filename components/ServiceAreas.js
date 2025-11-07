"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const ServiceAreasMap = dynamic(() => import("./ServiceAreasMap"), {
  ssr: false, // 🚫 Empêche le rendu côté serveur
});

export default function ServiceAreas() {
  const regions = [
    {
      name: "Northern Virginia",
      center: [38.8048, -77.0469],
      description:
        "Serving Alexandria, Arlington, Fairfax, and the greater Northern Virginia area — within a 40-mile radius of Washington, D.C.",
      cities: [
        "Alexandria",
        "Arlington",
        "Fairfax",
        "Falls Church",
        "Fredericksburg",
        "Loudoun",
        "Manassas",
        "Prince William",
        "Stafford",
        "Winchester",
      ],
    },
    {
      name: "Washington, D.C.",
      center: [38.9072, -77.0369],
      description:
        "Our design expertise extends across Washington, D.C. — offering modern and luxury interiors in the capital’s most iconic neighborhoods.",
      cities: ["Georgetown", "Capitol Hill", "Dupont Circle", "Adams Morgan"],
    },
    {
      name: "Maryland",
      center: [39.0458, -76.6413],
      description:
        "We serve select Maryland communities including Bethesda, Chevy Chase, and Rockville — where timeless design meets comfort.",
      cities: ["Bethesda", "Chevy Chase", "Rockville", "Potomac"],
    },
    {
      name: "Miami, Florida",
      center: [25.7617, -80.1918],
      description:
        "In South Florida, we specialize in coastal luxury — elegant, open, and filled with natural light.",
      cities: ["Miami", "Coral Gables", "Fort Lauderdale", "Palm Beach"],
    },
    {
      name: "New York",
      center: [40.7128, -74.006],
      description:
        "From Manhattan to Long Island, we serve the greater New York metropolitan area with bespoke interior design services.",
      cities: ["Manhattan", "Brooklyn", "Queens", "Bronx", "Long Island"],
    },
    {
      name: "New Jersey",
      center: [40.0583, -74.4057],
      description:
        "Our New Jersey projects blend craftsmanship and luxury across cities like Jersey City, Hoboken, and Princeton.",
      cities: ["Jersey City", "Hoboken", "Newark", "Princeton", "Paramus"],
    },
  ];

  const [selectedRegion, setSelectedRegion] = useState(regions[0]);

  return (
    <section
      id="service-areas"
      className="min-h-screen bg-gradient-to-b from-[#111] via-[#1a1a1a] to-[#222] text-white px-6 py-24 md:px-12 lg:px-24 flex flex-col items-center"
    >
      <header className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#f9e65c] mb-3 uppercase tracking-widest">
          Service Areas
        </h1>
        <p className="text-gray-400 text-lg">
          Explore our main regions of operation — fully interactive.
        </p>
      </header>

      <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-16 w-full max-w-7xl items-center justify-center">
        {/* Liste régions */}
        <aside className="w-full md:w-1/3 space-y-8">
          {regions.map((region, i) => (
            <div key={i}>
              <button
                onClick={() => setSelectedRegion(region)}
                className={`w-full text-left text-lg font-semibold py-2 px-3 rounded-lg transition-all ${
                  selectedRegion.name === region.name
                    ? "bg-[#f9e65c] text-black shadow-md"
                    : "hover:bg-[#f9e65c22] text-gray-200"
                }`}
              >
                {region.name}
              </button>

              <ul className="ml-4 mt-2 grid grid-cols-2 gap-x-2 text-sm text-gray-400">
                {region.cities.map((city, j) => (
                  <li
                    key={j}
                    className="hover:text-[#f9e65c] cursor-pointer"
                    onClick={() => setSelectedRegion(region)}
                  >
                    {city}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </aside>

        {/* Carte chargée dynamiquement */}
        <section className="w-full md:w-2/3 space-y-6">
          <ServiceAreasMap
            center={selectedRegion.center}
            name={selectedRegion.name}
          />

          <div>
            <h2 className="text-2xl font-bold text-[#f9e65c]">
              {selectedRegion.name}
            </h2>
            <p className="text-gray-300 mt-3 leading-relaxed">
              {selectedRegion.description}
            </p>
          </div>
        </section>
      </div>
    </section>
  );
}

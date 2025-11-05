"use client";

import { useState, useCallback } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

export default function ServiceAreas() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  const regions = [
    {
      name: "Northern Virginia",
      center: { lat: 38.8048, lng: -77.0469 },
      zoom: 8,
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
      name: "New York",
      center: { lat: 40.7128, lng: -74.006 },
      zoom: 9,
      description:
        "From Manhattan to Long Island, we serve the greater New York metropolitan area with bespoke interior design services.",
      cities: ["Manhattan", "Brooklyn", "Queens", "Bronx", "Long Island"],
    },
    {
      name: "New Jersey",
      center: { lat: 40.0583, lng: -74.4057 },
      zoom: 8,
      description:
        "Our New Jersey projects blend craftsmanship and luxury across cities like Jersey City, Hoboken, and Princeton.",
      cities: ["Jersey City", "Hoboken", "Newark", "Princeton", "Paramus"],
    },
    {
      name: "Miami, Florida",
      center: { lat: 25.7617, lng: -80.1918 },
      zoom: 9,
      description:
        "In South Florida, we specialize in coastal luxury — elegant, open, and filled with natural light.",
      cities: ["Miami", "Coral Gables", "Fort Lauderdale", "Palm Beach"],
    },
    {
      name: "Maryland & Washington, D.C.",
      center: { lat: 38.9072, lng: -77.0369 },
      zoom: 9,
      description:
        "Serving the heart of Washington, D.C. and select Maryland communities including Bethesda and Chevy Chase.",
      cities: ["Bethesda", "Chevy Chase", "Rockville", "Washington D.C."],
    },
  ];

  const [selectedRegion, setSelectedRegion] = useState(regions[0]);

  const containerStyle = {
    width: "100%",
    height: "450px",
    borderRadius: "20px",
  };

  const onLoad = useCallback(
    (map) => {
      const bounds = new window.google.maps.LatLngBounds();
      bounds.extend(selectedRegion.center);
      map.fitBounds(bounds);
    },
    [selectedRegion]
  );

  return (
    <section
      id="service-areas"
      className="min-h-screen bg-gradient-to-b from-[#111] via-[#1a1a1a] to-[#222] text-white px-6 py-24 md:px-12 lg:px-24 flex flex-col items-center"
    >
      {/* Titre */}
      <header className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#f9e65c] mb-3 uppercase tracking-widest">
          Service Areas
        </h1>
        <p className="text-gray-400 text-lg">
          Explore our main regions of operation — fully interactive.
        </p>
      </header>

      {/* Layout responsive */}
      <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-16 w-full max-w-7xl items-center justify-center">
        {/* Sidebar (régions) */}
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

        {/* Carte Google */}
        <section className="w-full md:w-2/3 space-y-6">
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={selectedRegion.center}
              zoom={selectedRegion.zoom}
              onLoad={onLoad}
              options={{
                disableDefaultUI: false,
                gestureHandling: "greedy",
                styles: [
                  {
                    elementType: "geometry",
                    stylers: [{ color: "#1d2c4d" }],
                  },
                  {
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#8ec3b9" }],
                  },
                  {
                    elementType: "labels.text.stroke",
                    stylers: [{ color: "#1a3646" }],
                  },
                ],
              }}
            />
          ) : (
            <div className="h-[450px] flex items-center justify-center text-gray-400">
              Loading Map...
            </div>
          )}

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

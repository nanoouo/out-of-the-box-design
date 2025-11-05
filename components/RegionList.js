"use client";

export default function RegionList({ regions, activeRegion, onSelect }) {
  return (
    <div className="w-full lg:w-1/3 bg-[#1a1a1a]/70 backdrop-blur-md border border-[#f9e65c33] rounded-2xl p-6 space-y-6 overflow-y-auto max-h-[650px] shadow-lg">
      {regions.map((r, i) => (
        <div
          key={i}
          onClick={() => onSelect(r)}
          className={`cursor-pointer p-4 rounded-xl transition-all duration-300 ${
            r.name === activeRegion.name
              ? "bg-[#f9e65c33] border border-[#f9e65c99]"
              : "hover:bg-[#f9e65c1a] border border-transparent"
          }`}
        >
          <h3 className="text-xl font-bold text-[#f9e65c]">{r.name}</h3>
          <p className="text-gray-300 text-sm mt-1">{r.description}</p>
          <ul className="flex flex-wrap gap-2 mt-3">
            {r.cities.slice(0, 6).map((city, j) => (
              <li
                key={j}
                className="px-3 py-1 bg-[#f9e65c1a] rounded-full text-xs text-gray-100 border border-[#f9e65c22]"
              >
                {city}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

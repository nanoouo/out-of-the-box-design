"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";

const artworks = [
  {
    title: "Echoes Of Power",
    price: 420,
    size: "24” × 36”",
    medium: "Charcoal with Acrylic on canvas",
    frontImage: "/EchoesOfPower1.jpeg",
    wallImage: "/EchoesOfPower2.jpeg",
    description:
      "A portrait forged in shadow and strength... the artwork radiates authority, history, and divine resilience.",
    sizeCategory: "medium",
  },
  {
    title: "Weight Of Thoughts",
    price: 420,
    size: "24” × 36”",
    medium: "Charcoal with Acrylic on canvas",
    frontImage: "/WeightOfThoughts1.jpeg",
    wallImage: "/WeightOfThoughts2.jpeg",
    description:
      "A vessel of unspoken emotions... a powerful image of heavy stillness and meaning.",
    sizeCategory: "medium",
  },
  {
    title: "Muted Fire",
    price: 420,
    size: "24” × 36”",
    medium: "Charcoal with Acrylic on canvas",
    frontImage: "/MutedFire1.jpeg",
    wallImage: "/MutedFire2.jpeg",
    description:
      "A portrait of restrained intensity… deep charcoal shadows veil her expression while red strokes cut through like truth demanding release.",
    sizeCategory: "medium",
  },
  {
    title: "Nest of Shadows",
    price: 350,
    size: "24” × 36”",
    medium: "Charcoal on canvas",
    frontImage: "/Nestofshadows1.jpeg",
    wallImage: "/Nestofshadows2.jpeg",
    description:
      "Serpents coil around a hollow center, circling the presence of something unseen.",
    sizeCategory: "medium",
  },
  {
    title: "Echo of a God",
    price: 420,
    size: "24” × 36”",
    medium: "Charcoal on canvas",
    frontImage: "/Echoofagod1.jpeg",
    wallImage: "/Echoofagod2.jpeg",
    description:
      "A solemn figure dissolves downward, its features fading like stone worn by time.",
    sizeCategory: "medium",
  },
  {
  title: "Raised In Rebellion",
  price: 0, // ajoute ton prix
  size: "16” × 20”",
  medium: "Charcoal on canvas",
  frontImage: "/RaisedInRebellion1.jpeg", // change le nom si différent
  wallImage: "/RaisedInRebellion2.jpeg", // idem
  description:
    "“Raised in Rebellion” is a visceral declaration of defiance. The central figure — a hand emerging from dense, shadowed strokes — rises like a monument to refusal. Its form is rough, almost carved from smoke, with exaggerated fingers stretching upward into a stark, unmistakable gesture of resistance. — Fatima Ezahrae Aouayna",
  sizeCategory: "small",
},
 {
  title: "Ruptured Gaze",
  price: 0, // ajoute ton prix
  size: "16” × 20”",
  medium: "Charcoal on canvas",
  frontImage: "/RupturedGaze1.jpeg",        // change si ton fichier a un autre nom
  wallImage: "/RupturedGaze2.jpeg",    // idem
  description:
    "“Ruptured Gaze” captures a moment where emotion fractures the act of seeing. The single eye, drawn with rough, urgent charcoal strokes, feels both exposed and volatile. Heavy, distorted lines compress the eyelid and brow, creating a palpable sense of internal pressure — an emotion too large for the boundaries of the face. — Fatima Ezahrae Aouayna",
  sizeCategory: "small",
},

];


/* WhatsApp link utilitaire */
const whatsappLink = (title) => {
  const number = "17035086812";
  const text = encodeURIComponent(
    `Hello! I'm interested in the artwork "${title}". Could you tell me more about it?`
  );
  return `https://wa.me/${number}?text=${text}`;
};

/* Card réutilisable */
function ArtCard({ art }) {
  const [showWall, setShowWall] = useState(false);

  const handleTap = (e) => {
    e.preventDefault();
    setShowWall((v) => !v);
  };

  return (
    <article className="bg-[#0f0f0f] rounded-2xl overflow-hidden shadow-lg border border-[#232323] flex flex-col cursor-pointer group">
      {/* IMAGE CONTAINER */}
      <div
        className="relative w-full h-90 bg-black overflow-hidden"
        onClick={handleTap}
        aria-label={`View ${art.title}`}
      >
        {/* FRONT IMAGE */}
        <img
          src={art.frontImage}
          alt={`${art.title} — front view`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
            showWall ? "opacity-0" : "opacity-100"
          } group-hover:opacity-0`}
          draggable={false}
          loading="lazy"
        />

        {/* WALL IMAGE */}
        <img
          src={art.wallImage}
          alt={`${art.title} — wall view`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out pointer-events-none ${
            showWall ? "opacity-100" : "opacity-0"
          } group-hover:opacity-100`}
          draggable={false}
          loading="lazy"
        />

        {/* Badge */}
        <div className="absolute top-3 right-3 bg-black/50 text-xs text-gray-200 px-2 py-1 rounded backdrop-blur-sm">
          {showWall ? "Wall view" : "Front view"}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <h3 className="text-xl font-semibold text-white">{art.title}</h3>
        <p className="text-sm text-gray-400">{art.medium} • {art.size}</p>
        <p className="text-gray-300 text-sm leading-relaxed line-clamp-3" title={art.description}>
          {art.description}
        </p>

        <div className="mt-4 flex items-center justify-between gap-3">
          <div>
            <div className="text-[#e8e56d] font-bold text-lg">${art.price}</div>
            <div className="text-xs text-gray-400">Original | Ready to ship</div>
          </div>

          <a
            href={`https://wa.me/17035086812?text=Hello! I'm interested in the artwork "${art.title}". Could you tell me more?`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-black font-semibold px-4 py-2 rounded-lg shadow hover:shadow-md transition"
          >
            <MessageCircle size={18} />
            Discuss
          </a>
        </div>
      </div>
    </article>
  );
}


/* MAIN GALLERY */
export default function ArtGallery() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [sizeFilter, setSizeFilter] = useState("");

  let filteredArt = artworks.filter((art) =>
    art.title.toLowerCase().includes(search.toLowerCase())
  );

  if (sizeFilter) filteredArt = filteredArt.filter((art) => art.sizeCategory === sizeFilter);

  const sortFunctions = {
    "price-asc": (a, b) => a.price - b.price,
    "price-desc": (a, b) => b.price - a.price,
    "alpha-asc": (a, b) => a.title.localeCompare(b.title),
    "alpha-desc": (a, b) => b.title.localeCompare(a.title),
  };
  if (sort) filteredArt.sort(sortFunctions[sort]);

  return (
    <section className="py-16 px-6 sm:px-12 lg:px-24 bg-gradient-to-b from-[#0e0e0e] to-[#181818] text-white">
    {/* HEADER */}
<div className="relative flex items-center max-w-5xl mx-auto mb-10 px-4">

  {/* Bouton Retour */}
  <button
    onClick={() => window.history.back()}
    className="absolute left-4 text-[#e8e56d] text-3xl font-bold hover:text-white transition"
    aria-label="Go back"
  >
    &lt;
  </button>

  {/* Titre (centré grâce à w-full + text-center) */}
  <div className="w-full text-center">
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#e8e56d]">
      Full Art Selection
    </h2>

    <p className="text-gray-400 mt-2 text-sm sm:text-base px-6">
      Search, filter, and explore artworks. Click / tap the artwork for more details.
    </p>
  </div>
</div>




      {/* FILTERS */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
        <input
          type="text"
          placeholder="Search artworks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-sm px-4 py-2 bg-[#1f1f1f] border border-[#333] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#e8e56d]"
        />

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="w-full max-w-sm px-4 py-2 bg-[#1f1f1f] border border-[#333] rounded-xl text-white focus:border-[#e8e56d]"
        >
          <option value="">Sort by...</option>
          <option value="price-asc">Price: Low → High</option>
          <option value="price-desc">Price: High → Low</option>
          <option value="alpha-asc">A → Z</option>
          <option value="alpha-desc">Z → A</option>
        </select>

        <select
          value={sizeFilter}
          onChange={(e) => setSizeFilter(e.target.value)}
          className="w-full max-w-sm px-4 py-2 bg-[#1f1f1f] border border-[#333] rounded-xl text-white focus:border-[#e8e56d]"
        >
          <option value="">Filter by size...</option>
          <option value="small">Small artworks</option>
          <option value="medium">Medium artworks</option>
          <option value="large">Large artworks</option>
        </select>
      </div>

      {/* ART GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredArt.map((art, idx) => (
          <ArtCard key={idx} art={art} />
        ))}
      </div>
    </section>
  );
}

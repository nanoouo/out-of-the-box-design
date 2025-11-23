import Link from "next/link";

export const metadata = {
  title: "Out of the Box Design Studio",
};

export default function ExternalLayout({ children }) {
  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* NAVBAR FIXE */}
      <header className="fixed top-0 left-0 w-full py-6 bg-black border-b border-white/10 flex justify-center items-center z-50">
        <Link
          href="/"
          className="flex items-center gap-4"
        >
          {/* LOGO AGRANDI */}
          <img
            src="/logooff.png" // remplace par ton chemin de logo
            alt="Logo"
            className="h-12 w-12 sm:h-16 sm:w-16 object-contain" // plus grand, responsive
          />

          {/* NOM DE LA NAVBAR AVEC POLICE PERSONNALISÉE */}
          <span className="text-2xl sm:text-3xl font-bold tracking-wide font-sans">
            Out of the Box Design Studio
          </span>
        </Link>
      </header>

      {/* PAGE CONTENT */}
      <main className="   mx-auto px-4">
        {children}
      </main>

      {/* FOOTER FIXE */}
      <footer className="fixed bottom-0 left-0 w-full py-4 bg-black border-t border-white/10 text-center text-sm opacity-70 z-50">
        © 2025 Out of the Box Design Studio. All rights reserved.
      </footer>
    </div>
  );
}

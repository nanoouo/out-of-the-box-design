import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "YAROVA Design",
  description: "Design d’intérieur ergonomique et moderne",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-[#0f0f0f] text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}

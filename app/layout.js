import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "OUT OF THE BOX Design Studio",
  description: "Where every space is a masterpiece.From concept to full realization.",
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

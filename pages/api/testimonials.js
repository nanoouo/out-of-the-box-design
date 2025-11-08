import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "avis.json");

export default function handler(req, res) {
  if (req.method === "POST") {
    const { name, message, rating } = req.body;

    if (!name || !message || !rating) {
      return res.status(400).json({ error: "Données invalides" });
    }

    // On stocke seulement les avis 4 et 5 étoiles
    if (rating < 4) {
      return res.status(200).json({ message: "Avis ignoré, rating < 4" });
    }

    let testimonials = [];
    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, "utf8");
      testimonials = JSON.parse(fileData);
    }

    testimonials.push({ name, message, rating, date: new Date().toISOString() });

    fs.writeFileSync(filePath, JSON.stringify(testimonials, null, 2));

    return res.status(200).json({ message: "Avis enregistré avec succès" });
  } else if (req.method === "GET") {
    // Retourne tous les avis
    if (!fs.existsSync(filePath)) return res.status(200).json([]);
    const fileData = fs.readFileSync(filePath, "utf8");
    return res.status(200).json(JSON.parse(fileData));
  } else {
    res.status(405).json({ error: "Méthode non autorisée" });
  }
}

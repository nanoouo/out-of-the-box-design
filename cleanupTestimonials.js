const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "avis.json");

// Fonction de nettoyage
function cleanupTestimonials() {
  if (!fs.existsSync(filePath)) {
    console.log("Fichier avis.json introuvable.");
    return;
  }

  const testimonials = JSON.parse(fs.readFileSync(filePath, "utf8"));
  if (testimonials.length <= 3) {
    console.log("Moins de 3 avis, aucun nettoyage nécessaire.");
    return;
  }

  // Supprimer les 3 premiers avis
  const updatedTestimonials = testimonials.slice(3);

  fs.writeFileSync(filePath, JSON.stringify(updatedTestimonials, null, 2));
  console.log("Nettoyage des 3 premiers avis effectué !");
}

// Exécuter la fonction
cleanupTestimonials();

"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// 🟡 Création d'une icône personnalisée dorée
const goldIcon = new L.Icon({
  iconUrl:
    "data:image/svg+xml;base64," +
    btoa(`
      <svg xmlns="http://www.w3.org/2000/svg" width="35" height="55" viewBox="0 0 35 55">
        <path d="M17.5,0C7.8,0,0,8.3,0,18.5C0,31,17.5,55,17.5,55S35,31,35,18.5C35,8.3,27.2,0,17.5,0z" 
          fill="#f9e65c" stroke="#111" stroke-width="2"/>
        <circle cx="17.5" cy="18.5" r="6" fill="#111"/>
      </svg>
    `),
  iconSize: [35, 55],
  iconAnchor: [17, 55],
  popupAnchor: [0, -50],
});

// --- Animation du déplacement de la carte ---
function MapUpdater({ center }) {
  const map = useMap();

  useEffect(() => {
    map.flyTo(center, 9, {
      duration: 1.5,
      easeLinearity: 0.25,
    });
  }, [center, map]);

  return null;
}

// --- Composant principal ---
export default function ServiceAreasMap({ center, name }) {
  return (
    <MapContainer
      center={center}
      zoom={9}
      className="h-[450px] w-full rounded-2xl z-0"
      scrollWheelZoom={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      <MapUpdater center={center} />
      <Marker position={center} icon={goldIcon}>
        <Popup>{name}</Popup>
      </Marker>
    </MapContainer>
  );
}

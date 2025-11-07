"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Composant pour animation du zoom
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
      <Marker position={center}>
        <Popup>{name}</Popup>
      </Marker>
    </MapContainer>
  );
}

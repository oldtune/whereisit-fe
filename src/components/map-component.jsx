import L from "leaflet";
import "leaflet/dist/leaflet.css";
import React from "react";
import "./map-component.css";

export const MapComponent = () => {
  React.useEffect(() => {
    L.map("map", {
      center: [20.0, 5.0],
      zoom: 6,
      layers: [
        L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        }),
      ],
    });
  }, []);
  const height = window.innerHeight;

  return <div id="map" style={{ height: height }}></div>;
};

import L from "leaflet";
import "leaflet/dist/leaflet.css";
import React from "react";
import "./map.css";

export const MapComponent = () => {
  React.useEffect(() => {
    L.map("map", {
      center: [20.0, 5.0],
      zoom: 6,
      layers: [
        // L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        //   attribution:
        //     '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        // }),
        L.tileLayer("http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}", {
          maxZoom: 20,
          subdomains: ["mt0", "mt1", "mt2", "mt3"],
        }),
      ],
    });
  }, []);
  const height = window.innerHeight;

  return <div id="map" style={{ height: height }}></div>;
};

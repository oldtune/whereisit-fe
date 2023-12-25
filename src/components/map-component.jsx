import L from "leaflet";
import "leaflet/dist/leaflet.css";
import React from "react";

export const MapComponent = () => {
  React.useEffect(() => {
    L.map("map", {
      center: [49.8419, 24.0315],
      zoom: 16,
      layers: [
        L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        }),
      ],
    });
  }, []);

  return <div id="map"></div>;
};

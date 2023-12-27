import { Loader } from "@googlemaps/js-api-loader";
import { useEffect } from "react";

export const InteractiveMap = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  useEffect(() => {
    const loader = new Loader({
      apiKey: "AIzaSyBkNHWgmgWW8RCU0lNw4hOSI2M48_EVBh0",
      version: "weekly",
      //   ...additionalOptions,
    });

    loader.load().then(async () => {
      const { Map } = await google.maps.importLibrary("maps");

      map = new Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
    });
  }, []);

  return <div id="map" style={{ height: height, width: width }}></div>;
};

"use client";
import React, { useEffect, useState } from "react";

// const UserLocationMap = () => {
//   return <div>User Location</div>;
// };

// export default UserLocationMap;

const UserLocationMap = () => {
  const [userLocation, setUserLocation] = useState<{
    lat: number | null;
    lng: number | null;
  }>({ lat: null, lng: null });
  const [mapSrc, setMapSrc] = useState("");

  const YOUR_GOOGLE_MAPS_API_KEY = "kjjkiuiiudf";
  console.log(userLocation);

  useEffect(() => {
    // Check if the Geolocation API is available
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });

          // Construct the Google Maps URL dynamically
          const googleMapsUrl = `https://www.google.com/maps/embed/v1/view?key=${YOUR_GOOGLE_MAPS_API_KEY}&center=${latitude},${longitude}&zoom=14&maptype=roadmap`;
          setMapSrc(googleMapsUrl);
        },
        (error) => {
          console.error("Error retrieving location", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);
  const handleOpenFullMap = () => {
    if (mapSrc) {
      const fullMapUrl = `https://www.google.com/maps?q=${mapSrc}`;
      window.open(fullMapUrl, "_blank");
    }
  };

  return (
    <div>
      {mapSrc ? (
        <div>
          <iframe
            src={mapSrc}
            width="600"
            height="450"
            className="w-full rounded-lg"
            style={{ border: "0" }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <p
            className="text-right text-sm underline text-textLight mt-3"
            onClick={handleOpenFullMap}
          >
            View map
          </p>
        </div>
      ) : (
        <p>Loading map...</p>
      )}
    </div>
  );
};

export default UserLocationMap;

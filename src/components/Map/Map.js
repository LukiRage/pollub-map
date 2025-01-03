import React, { useState } from "react";
import ImageMapper from "react-image-mapper";
import config from "./config.json";
import Popup from "./Popup";
import "./Map.css";
import mapImage from "../../assets/images/map.jpg";


const Map = () => {
  const [selectedArea, setSelectedArea] = useState(null);

  const handleAreaClick = (area) => {
    setSelectedArea(area);
  };

  return (
    <div className="map-container">
      <ImageMapper
        src={mapImage}
        map={{
          name: config.map.name,
          areas: config.map.areas.map((area) => ({
            ...area,
            preFillColor: "rgba(0, 255, 0, 0.4)",
            strokeColor: "rgba(0, 0, 0, 0.8)",
          })),
        }}
        onClick={(area) => {
          console.log(`Clicked on area: ${area.title}`);
          handleAreaClick(area);
        }}
        onMouseEnter={(area) => console.log(`Hovered over: ${area.title}`)}
        onMouseLeave={() => console.log("Mouse left an area")}
        alt={config.map.alt}
      />


      {selectedArea && (
        <Popup
          title={selectedArea.title}
          description={selectedArea.description}
          address={selectedArea.address}
          onClose={() => setSelectedArea(null)}
        />
      )}
    </div>
  );
};

export default Map;

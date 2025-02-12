import React, { useState } from "react";
import ImageMapper from "react-image-mapper";
import config from "./config.json";
import Popup from "./Popup";
import "./Map.css";
import mapImage from "../../assets/images/map.jpg";


const Map = () => {
  const [selectedArea, setSelectedArea] = useState(null);
  const [hoveredArea, setHoveredArea] = useState(null);


  const getAreaStyles = (area) => {
    const isSelected = selectedArea?.id === area.id;
    const isHovered = hoveredArea?.id === area.id;

    return {
      preFillColor: isSelected 
        ? "rgba(0, 255, 0, 0.6)"
        : isHovered 
          ? "rgba(0, 255, 0, 0.5)"
          : "rgba(0, 255, 0, 0.3)",
      strokeColor: isSelected || isHovered 
        ? "rgba(0, 0, 0, 1)"
        : "rgba(0, 0, 0, 0.8)",
      lineWidth: isSelected ? 3 : 2,
      fillColor: isSelected 
        ? "rgba(0, 255, 0, 0.6)"
        : "rgba(0, 255, 0, 0.4)",
    };
  };

  const mapConfig = {
    name: config.map.name,
    areas: config.map.areas.map((area) => ({
      ...area,
      ...getAreaStyles(area),
    })),
  };

  return (
    <div className="map-container">
      <ImageMapper
        src={mapImage}
        map={mapConfig}
        onClick={(area) => {
          console.log(`Clicked on area: ${area.title}`);
          setSelectedArea(area);
        }}
        onMouseEnter={(area) => {
          console.log(`Hovered over: ${area.title}`);
          setHoveredArea(area);
        }}
        onMouseLeave={() => {
          console.log("Mouse left an area");
          setHoveredArea(null);
        }}
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

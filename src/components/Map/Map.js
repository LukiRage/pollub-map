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
        ? "rgba(82, 183, 136, 0.6)"
        : isHovered 
          ? "rgba(64, 145, 108, 0.5)"
          : "rgba(45, 106, 79, 0.3)",
      strokeColor: isSelected || isHovered 
        ? "rgba(0, 0, 0, 1)"
        : "rgba(0, 0, 0, 0.8)",
      lineWidth: isSelected ? 3 : 2,
      fillColor: isSelected 
        ? "rgba(82, 183, 136, 0.6)"
        : "rgba(64, 145, 108, 0.5)",
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

      <div className="map-legend">
        <h3>Legenda</h3>
        <div className="legend-item">
          <div className="legend-color" style={{ backgroundColor: "rgba(0, 255, 0, 0.3)" }}></div>
          <span>Obszar budynku</span>
        </div>
        <div className="legend-item">
          <div className="legend-color" style={{ backgroundColor: "rgba(0, 255, 0, 0.5)" }}></div>
          <span>Obszar wskazany</span>
        </div>
        <div className="legend-item">
          <div className="legend-color" style={{ backgroundColor: "rgba(0, 255, 0, 0.6)" }}></div>
          <span>Obszar wybrany</span>
        </div>
      </div>
    </div>
  );
};

export default Map;
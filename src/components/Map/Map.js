import React, { useState } from "react";
import ImageMapper from "react-image-mapper";
import config from "./config.json";
import Popup from "./Popup";
import "./Map.css";
import mapImage from "../../assets/images/map.jpg";


const Map = () => {
  const [selectedArea, setSelectedArea] = useState(null);
  const [hoveredArea, setHoveredArea] = useState(null);

  const uniqueAreasForLegend = config.map.areas.filter((area, index, self) =>
    index === self.findIndex((a) => a.id === area.id && a.title)
  ).filter(area => area.title); // Only show areas with titles


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
        {uniqueAreasForLegend.map((area) => (
          <div 
            key={area.id} 
            className="legend-item"
          >
            <div 
              className="legend-color" 
              style={{ 
                backgroundColor: hoveredArea?.id === area.id
                  ? "rgba(64, 145, 108, 0.5)"
                  : selectedArea?.id === area.id
                    ? "rgba(82, 183, 136, 0.6)"
                    : "rgba(45, 106, 79, 0.3)"
              }}
            />
            <span>{area.id}. {area.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Map;
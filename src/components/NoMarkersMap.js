import React, { useState } from 'react';
import { MapContainer, TileLayer, Polygon, Marker, Popup, LayersControl, FeatureGroup, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const { BaseLayer, Overlay } = LayersControl;

const campusOutline = [
  [51.23750411041443, 22.5494921207428],
  [51.235206751842, 22.55378365516663],
  [51.232956304007544, 22.549835443496708],
  [51.23382962519178, 22.54868745803833],
  [51.234212537714534, 22.548215389251713],
  [51.23432002135865, 22.546219825744632],
  [51.23500522368733, 22.545157670974735],
  [51.23519331665915, 22.544910907745365],
  [51.23750411041443, 22.5494921207428]
];

const bounds = [
  [51.2315, 22.5440],
  [51.2385, 22.5550]
];

// Współrzędne prostokąta wyznaczającego budynek Wydziału Mechanicznego
const mechBuildingCoords = [
  [51.237074204085104, 22.550210952758793],
  [51.23672490223445, 22.549620866775516],
  [51.236348728044774, 22.550200223922733],
  [51.236698032751484, 22.55075812339783]
];

// Obliczenie środka prostokąta
const getCenter = (coords) => {
  let latSum = 0, lngSum = 0;
  coords.forEach(([lat, lng]) => {
    latSum += lat;
    lngSum += lng;
  });
  return [latSum / coords.length, lngSum / coords.length];
};

const mechBuildingCenter = getCenter(mechBuildingCoords);

const buildings = [
  { id: 1, name: 'Rektorat', lat: 51.2358, lng: 22.5489, category: 'administracja' },
  { id: 2, name: 'Wydział Mechaniczny', lat: mechBuildingCenter[0], lng: mechBuildingCenter[1], category: 'wydziały' },
  { id: 3, name: 'Biblioteka', lat: 51.2345, lng: 22.5468, category: 'biblioteka' },
  { id: 4, name: 'Dom Studenta', lat: 51.2339, lng: 22.5475, category: 'akademiki' },
  { id: 5, name: 'Parking', lat: 51.2360, lng: 22.5480, category: 'parkingi' }
];

const customIcon = new L.Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  shadowSize: [41, 41]
});

const ClickHandler = () => {
  useMapEvents({
    click: (e) => {
      console.log(`Kliknięte współrzędne: [${e.latlng.lat}, ${e.latlng.lng}]`);
    }
  });
  return null;
};

const NoMarkersMap = () => {
  return (
    <MapContainer 
      center={[51.2355, 22.5490]} 
      zoom={17} 
      minZoom={17}
      maxBounds={bounds} 
      maxBoundsViscosity={1.0} 
      style={{ height: '100vh', width: '100%' }}>
      <ClickHandler />
      <LayersControl position="topright">
        <BaseLayer checked name="Mapa podstawowa">
          <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" bounds={bounds} />
        </BaseLayer>
        <Overlay checked name="Obrys kampusu">
          <Polygon positions={campusOutline} pathOptions={{ color: 'blue', fillColor: 'transparent', fillOpacity: 1.0 }} />
        </Overlay>
        <Overlay checked name="Budynki">
          <FeatureGroup>
            {buildings.map((building) => (
              <Marker key={building.id} position={[building.lat, building.lng]} icon={customIcon}>
                <Popup>{building.name}</Popup>
              </Marker>
            ))}
          </FeatureGroup>
        </Overlay>
      </LayersControl>
    </MapContainer>
  );
};

export default NoMarkersMap;
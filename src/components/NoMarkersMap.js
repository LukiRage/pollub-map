import React, { useState } from 'react';
import { MapContainer, TileLayer, Polygon, Marker, Popup, LayersControl, FeatureGroup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const { BaseLayer, Overlay } = LayersControl;

const campusOutline = [
  [51.23750411041443, 22.5494921207428],
  [51.23560308797105, 22.55321502685547],
  [51.23589865845498, 22.554008960723877],
  [51.235529195053395, 22.554523944854736],
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

const buildings = [
  { id: 1, name: 'Rektorat', lat: 51.2358, lng: 22.5489, category: 'administracja' },
  { id: 2, name: 'Wydział Mechaniczny', lat: 51.2364, lng: 22.5492, category: 'wydziały' },
  { id: 3, name: 'Biblioteka', lat: 51.2345, lng: 22.5468, category: 'biblioteka' },
  { id: 4, name: 'Dom Studenta', lat: 51.2339, lng: 22.5475, category: 'akademiki' },
  { id: 5, name: 'Parking', lat: 51.2360, lng: 22.5480, category: 'parkingi' }
];

const CampusMap = () => {
  return (
    <MapContainer 
      center={[51.2355, 22.5490]} 
      zoom={17} 
      minZoom={17}
      maxBounds={bounds} 
      maxBoundsViscosity={1.0} 
      style={{ height: '100vh', width: '100%' }}>
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
              <Marker key={building.id} position={[building.lat, building.lng]}>
                <Popup>{building.name}</Popup>
              </Marker>
            ))}
          </FeatureGroup>
        </Overlay>
      </LayersControl>
    </MapContainer>
  );
};

export default CampusMap;

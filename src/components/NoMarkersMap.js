import React from 'react';
import { MapContainer, TileLayer, Polygon, Marker, Popup, LayersControl, FeatureGroup, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import '../styles/map.css';
import { campusOutline, bounds, buildingCenters } from '../data/mapCoordinates';

// Add Material Symbols font
const fontLink = document.createElement('link');
fontLink.rel = 'stylesheet';
fontLink.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0';
document.head.appendChild(fontLink);

const { BaseLayer, Overlay } = LayersControl;

const createCustomIcon = (iconType) => {
  return L.divIcon({
    html: `<div style="
      background-color: white;
      border: 2px solid #666;
      border-radius: 50%;
      padding: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.3);">
      <span class="material-symbols-outlined" style="font-size: 20px;">${iconType}</span>
    </div>`,
    className: '',
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20],
  });
};

const icons = {
  wydziały: createCustomIcon('school'),
  sale_dydaktyczne: createCustomIcon('group'),
  parkingi: createCustomIcon('local_parking'),
  biblioteka: createCustomIcon('book_2'),
  akademiki: createCustomIcon('home'),
  administracja: createCustomIcon('account_balance'),
  kościół: createCustomIcon('church')
};

const buildings = [
  { id: 1, name: 'Rektorat PL', lat: buildingCenters.rectorate[0], lng: buildingCenters.rectorate[1], category: 'administracja' },
  { id: 2, name: 'Wydział Mechaniczny', lat: buildingCenters.mechBuilding[0], lng: buildingCenters.mechBuilding[1], category: 'wydziały' },
  { id: 3, name: 'Wydział Zarządzania', lat: buildingCenters.managementBuilding[0], lng: buildingCenters.managementBuilding[1], category: 'wydziały' },
  { id: 4, name: 'Wydział Inżynierii Środowiska', lat: buildingCenters.envEngineeringBuilding[0], lng: buildingCenters.envEngineeringBuilding[1], category: 'wydziały' },
  { id: 10, name: 'Centrum Innowacji i Zaawansowanych Technologii', lat: buildingCenters.ciBuilding[0], lng: buildingCenters.ciBuilding[1], category: 'sale_dydaktyczne' },
  { id: 11, name: 'Pentagon', lat: buildingCenters.pentagonBuilding[0], lng: buildingCenters.pentagonBuilding[1], category: 'sale_dydaktyczne' },
  { id: 20, name: 'Biblioteka', lat: buildingCenters.libraryBuilding[0], lng: buildingCenters.libraryBuilding[1], category: 'biblioteka' },
  { id: 21, name: 'Kościół', lat: buildingCenters.churchBuilding[0], lng: buildingCenters.churchBuilding[1], category: 'kościół' },
  { id: 22, name: 'Dom Studenta nr 1', lat: buildingCenters.dorm_1_Building[0], lng: buildingCenters.dorm_1_Building[1], category: 'akademiki' },
  { id: 23, name: 'Dom Studenta nr 2', lat: buildingCenters.dorm_2_Building[0], lng: buildingCenters.dorm_2_Building[1], category: 'akademiki' },
  { id: 24, name: 'Dom Studenta nr 3', lat: buildingCenters.dorm_3_Building[0], lng: buildingCenters.dorm_3_Building[1], category: 'akademiki' },
  { id: 25, name: 'Dom Studenta nr 4', lat: buildingCenters.dorm_4_Building[0], lng: buildingCenters.dorm_4_Building[1], category: 'akademiki' },
  { id: 30, name: 'Parking', lat: buildingCenters.parking_1[0], lng: buildingCenters.parking_1[1], category: 'parkingi' }
];

const categories = {
  wydziały: 'Wydziały',
  sale_dydaktyczne: 'Sale dydaktyczne',
  parkingi: 'Parkingi',
  biblioteka: 'Biblioteka',
  akademiki: 'Akademiki',
  administracja: 'Administracja',
  kościół: 'Kościół'
};

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
        
        {Object.entries(categories).map(([category, label]) => (
          <Overlay checked key={category} name={label}>
            <FeatureGroup>
              {buildings
                .filter(building => building.category === category)
                .map((building) => (
                  <Marker 
                    key={building.id} 
                    position={[building.lat, building.lng]} 
                    icon={icons[building.category]}
                  >
                    <Popup>{building.name}</Popup>
                  </Marker>
                ))}
            </FeatureGroup>
          </Overlay>
        ))}
      </LayersControl>
    </MapContainer>
  );
};

export default NoMarkersMap;
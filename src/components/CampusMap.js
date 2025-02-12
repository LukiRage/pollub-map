import React, { useState } from 'react';
import { MapContainer, TileLayer, Polygon, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

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
  [51.236859249413946, 22.548108100891117],
  [51.23696672687507, 22.54757165908814],
  [51.237369765118046, 22.547829151153568],
  [51.23733617873266, 22.548193931579593],
  [51.23750411041443, 22.54841923713684],
  [51.237551131175465, 22.5485372543335],
  [51.237356330566854, 22.549084424972538],
  [51.23751082766892, 22.54951357841492]
];

const outerBoundary = [
  [51.2400, 22.5400],
  [51.2400, 22.5600],
  [51.2300, 22.5600],
  [51.2300, 22.5400]
];

const mask = [outerBoundary, campusOutline];

const bounds = [
  [51.2315, 22.5440], // Dolny lewy róg kampusu
  [51.2385, 22.5550]  // Górny prawy róg kampusu
];

const ClickHandler = ({ setPoints }) => {
  useMapEvents({
    click: (e) => {
      const newPoint = [e.latlng.lat, e.latlng.lng];
      setPoints((prevPoints) => [...prevPoints, newPoint]);
      console.log(`Kliknięte współrzędne: ${newPoint}`);
    }
  });
  return null;
};

const CampusMap = () => {
  const [points, setPoints] = useState([]);

  return (
    <MapContainer 
      center={[51.2355, 22.5490]} 
      zoom={17} 
      minZoom={17}
      maxBounds={bounds} 
      maxBoundsViscosity={1.0}
      style={{ height: '100vh', width: '100%' }}>
      <TileLayer 
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
        bounds={bounds} 
      />
      <ClickHandler setPoints={setPoints} />
      <Polygon positions={mask} pathOptions={{ color: 'gray', fillColor: 'gray', fillOpacity: 0.7, stroke: false }} />
    </MapContainer>
  );
};

export default CampusMap;

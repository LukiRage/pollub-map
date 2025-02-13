import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Map from './components/Map/Map';
import Navbar from './components/Navbar/Navbar';
import CampusMap from './components/CampusMap';
import NoMarkersMap from './components/NoMarkersMap';
import AccessibilityTools from './components/AccessibilityTools';
import './styles/accessibility.css';
import './styles/colorblind.css';
import './styles/dark-mode.css';
import './styles/contrast-modes.css';

function App() {
  return (
    <Router>
      <div className="App">
        <AccessibilityTools />
        <Navbar />
        <Routes>
          <Route path="/" element={<Map mapType="main" />} />
          <Route path="/map_2" element={<CampusMap />} />
          <Route path="/map_no_markers" element={<NoMarkersMap />} />
          <Route path="/facilities" element={<Map mapType="facilities" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

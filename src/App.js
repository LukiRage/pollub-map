import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Map from './components/Map/Map';
import Navbar from './components/Navbar/Navbar';
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
          <Route path="/buildings" element={<Map mapType="buildings" />} />
          <Route path="/parking" element={<Map mapType="parking" />} />
          <Route path="/facilities" element={<Map mapType="facilities" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

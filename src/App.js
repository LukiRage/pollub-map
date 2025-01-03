import React from 'react';
import './App.css';
import Map from './components/Map/Map';
import AccessibilityTools from './components/AccessibilityTools';
import './styles/accessibility.css';
import './styles/colorblind.css';
import './styles/dark-mode.css';
import './styles/high-contrast.css';

function App() {
  return (
    <div className="App">
      <AccessibilityTools />
      <Map />
    </div>
  );
}

export default App;

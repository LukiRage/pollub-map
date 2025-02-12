import React, { useState } from 'react';
import './AccessibilityTools.css';
import { FaSun, FaMoon, FaEye, FaAdjust, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const AccessibilityTools = () => {
  const [fontSize, setFontSize] = useState('normal');
  const [visualMode, setVisualMode] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);

  const handleFontSizeChange = (size) => {
    const appElement = document.querySelector('.App');
    appElement.classList.remove('font-size-small', 'font-size-large', 'font-size-extra-large');
    if (size !== 'normal') {
      appElement.classList.add(size);
    }
    setFontSize(size);
  };

  const handleVisualModeChange = (newMode) => {
    const body = document.body;
    const appElement = document.querySelector('.App');
    
    // Usuń wszystkie klasy trybów
    body.classList.remove('dark-mode', 'colorblind-mode', 'contrast-yellow-black', 'contrast-black-yellow');
    appElement.classList.remove('dark-mode', 'colorblind-mode', 'contrast-yellow-black', 'contrast-black-yellow');
    
    if (newMode) {
      body.classList.add(newMode);
      appElement.classList.add(newMode);
    }
    setVisualMode(newMode);
  };

  return (
    <div className={`accessibility-tools ${isMinimized ? 'minimized' : ''}`}>
      <div className="accessibility-header">
        <button 
          className="toggle-button"
          onClick={() => setIsMinimized(!isMinimized)}
          aria-label={isMinimized ? "Rozwiń panel" : "Zwiń panel"}
        >
          {isMinimized ? <FaChevronRight /> : <FaChevronLeft />}
        </button>
        {!isMinimized && <h3>Narzędzia dostępności</h3>}
      </div>
      
      {!isMinimized && (
        <>
          <div className="font-size-controls">
            <h4>Rozmiar czcionki:</h4>
            <div className="button-group">
              <button onClick={() => handleFontSizeChange('font-size-small')} aria-label="Mała czcionka">
                <span className="font-icon small">A</span>
              </button>
              <button onClick={() => handleFontSizeChange('normal')} aria-label="Normalna czcionka">
                <span className="font-icon medium">A</span>
              </button>
              <button onClick={() => handleFontSizeChange('font-size-large')} aria-label="Duża czcionka">
                <span className="font-icon large">A</span>
              </button>
            </div>
          </div>
          <div className="visual-mode-controls">
            <h4>Tryb wyświetlania:</h4>
            <div className="button-group">
              <button onClick={() => handleVisualModeChange('')} aria-label="Tryb domyślny">
                <FaSun />
              </button>
              <button onClick={() => handleVisualModeChange('dark-mode')} aria-label="Tryb ciemny">
                <FaMoon />
              </button>
              <button onClick={() => handleVisualModeChange('contrast-yellow-black')} aria-label="Czarny tekst na żółtym tle">
                <FaAdjust />
              </button>
              <button onClick={() => handleVisualModeChange('contrast-black-yellow')} aria-label="Żółty tekst na czarnym tle">
                <FaAdjust style={{ transform: 'rotate(90deg)' }} />
              </button>
              <button onClick={() => handleVisualModeChange('colorblind-mode')} aria-label="Tryb daltonisty">
                <FaEye />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AccessibilityTools;

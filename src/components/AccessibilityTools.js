import React, { useState } from 'react';
import './AccessibilityTools.css';

const AccessibilityTools = () => {
  const [fontSize, setFontSize] = useState('normal');
  const [theme, setTheme] = useState('');

  const handleFontSizeChange = (size) => {
    const appElement = document.querySelector('.App');
    appElement.classList.remove('font-size-small', 'font-size-large', 'font-size-extra-large');
    if (size !== 'normal') {
      appElement.classList.add(size);
    }
    setFontSize(size);
  };

  const handleThemeChange = (newTheme) => {
  const body = document.body;
  const appElement = document.querySelector('.App');
  
  body.classList.remove('dark-mode', 'high-contrast', 'colorblind-mode');
  appElement.classList.remove('dark-mode', 'high-contrast', 'colorblind-mode');
  
  if (newTheme) {
    body.classList.add(newTheme);
    appElement.classList.add(newTheme);
  }
  setTheme(newTheme);
};
;


  return (
    <div className="accessibility-tools">
      <h3>Narzędzia dostępności</h3>
      <div>
        <h4>Rozmiar czcionki:</h4>
        <button onClick={() => handleFontSizeChange('font-size-small')}>Mała</button>
        <button onClick={() => handleFontSizeChange('normal')}>Normalna</button>
        <button onClick={() => handleFontSizeChange('font-size-large')}>Duża</button>
        <button onClick={() => handleFontSizeChange('font-size-extra-large')}>Bardzo duża</button>
      </div>
      <div>
        <h4>Tryb wizualny:</h4>
        <button onClick={() => handleThemeChange('')}>Domyślny</button>
        <button onClick={() => handleThemeChange('dark-mode')}>Ciemny</button>
        <button onClick={() => handleThemeChange('high-contrast')}>Wysoki kontrast</button>
        <button onClick={() => handleThemeChange('colorblind-mode')}>Tryb daltonisty</button>
      </div>
    </div>
  );
};

export default AccessibilityTools;

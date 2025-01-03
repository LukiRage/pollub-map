import React from 'react';

const Popup = ({ title, description, onClose }) => {
  return (
    <div className="popup" role="dialog" aria-labelledby="popup-title">
      <div className="popup-content">
        <button onClick={onClose} className="close-btn" aria-label="Zamknij pop-up">×</button>
        <h2 id="popup-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Popup;

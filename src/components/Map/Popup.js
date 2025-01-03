import React from 'react';

const Popup = ({ title, description, address, onClose }) => {
  return (
    <>
      <div className="popup-overlay" onClick={onClose}></div>
      <div className="popup" role="dialog" aria-labelledby="popup-title">
        <div className="popup-content">
          <button onClick={onClose} className="close-btn" aria-label="Zamknij pop-up">×</button>
          <h2 id="popup-title">{title}</h2>
          <p>{description}</p>
          <p>{address}</p>
        </div>
      </div>
    </>
  );
};

export default Popup;

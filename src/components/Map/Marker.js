import React from 'react';

const Marker = ({ x, y, id, onClick }) => {
  return (
    <button
      className="marker-btn"
      style={{ top: y, left: x }}
      onClick={() => onClick(id)}
      aria-label={`Otwórz informacje o markerze ${id}`}
    >
      {id}
    </button>
  );
};

export default Marker;

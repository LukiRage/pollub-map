import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <button className="hamburger" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
        <ul>
          <li><Link to="/" onClick={toggleMenu}>Mapa Główna</Link></li>
          <li><Link to="/buildings" onClick={toggleMenu}>Budynki</Link></li>
          <li><Link to="/parking" onClick={toggleMenu}>Parkingi</Link></li>
          <li><Link to="/facilities" onClick={toggleMenu}>Obiekty</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

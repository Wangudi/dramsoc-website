import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          DRAMSOC
        </Link>
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/productions" className="nav-links" onClick={() => setIsOpen(false)}>
              Productions
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/departments" className="nav-links" onClick={() => setIsOpen(false)}>
              Departments
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/team" className="nav-links" onClick={() => setIsOpen(false)}>
              Team
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/alumni" className="nav-links" onClick={() => setIsOpen(false)}>
              Alumni
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/articles" className="nav-links" onClick={() => setIsOpen(false)}>
              Articles
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/join" className="nav-links-btn" onClick={() => setIsOpen(false)}>
              Join Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

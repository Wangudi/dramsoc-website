import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo Section with Actual DRAMSOC Logo */}
        <Link 
          to="/" 
          className="navbar-logo" 
          onClick={() => { scrollToTop(); setIsOpen(false); }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <img 
              src={process.env.PUBLIC_URL + '/images/No%20background%20white%20logo.png'}
              alt="DRAMSOC Logo"
              style={{
                height: '50px',
                width: 'auto',
                filter: 'drop-shadow(0 2px 4px rgba(255,215,0,0.3))'
              }}
            />
            <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>DRAMSOC</span>
          </div>
        </Link>
        
        {/* Mobile Menu Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={isOpen ? 'fa fa-times' : 'fa fa-bars'}></i>
        </div>

        {/* Navigation Menu */}
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link 
              to="/" 
              className="nav-links" 
              onClick={() => { scrollToTop(); setIsOpen(false); }}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/about" 
              className="nav-links" 
              onClick={() => { scrollToTop(); setIsOpen(false); }}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <HashLink 
              smooth 
              to="/#upcoming-events" 
              className="nav-links" 
              onClick={() => setIsOpen(false)}
            >
              Upcoming Plays/Events
            </HashLink>
          </li>
          <li className="nav-item">
            <Link 
              to="/productions" 
              className="nav-links" 
              onClick={() => { scrollToTop(); setIsOpen(false); }}
            >
              Productions
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/departments" 
              className="nav-links" 
              onClick={() => { scrollToTop(); setIsOpen(false); }}
            >
              Departments
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/contact" 
              className="nav-links" 
              onClick={() => { scrollToTop(); setIsOpen(false); }}
            >
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/join" 
              className="nav-links-btn" 
              onClick={() => { scrollToTop(); setIsOpen(false); }}
            >
              Join Us
            </Link>
          </li>
        </ul>

        {/* Social Media Icons */}
        <div className="social-icons" style={{
          display: 'flex',
          gap: '15px',
          alignItems: 'center'
        }}>
          <a href="https://instagram.com/dramsoc_su" target="_blank" rel="noopener noreferrer" title="Instagram" style={{ color: '#FFD700', transition: 'color 0.3s' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href="https://youtube.com/@DRAMSOCStraUniv" target="_blank" rel="noopener noreferrer" title="YouTube" style={{ color: '#FFD700', transition: 'color 0.3s' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
            </svg>
          </a>
          <a href="https://tiktok.com/@dramsoc_su" target="_blank" rel="noopener noreferrer" title="TikTok" style={{ color: '#FFD700', transition: 'color 0.3s' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

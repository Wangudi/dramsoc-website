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
        {/* Logo Section - Replace DRAMSOC text with logo placeholder */}
        <Link to="/" className="navbar-logo" onClick={() => { scrollToTop(); setIsOpen(false); }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <div style={{
              width: '50px',
              height: '50px',
              backgroundColor: '#FFD700',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              fontSize: '0.7rem',
              color: '#111'
            }}>
              LOGO
            </div>
            <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>DRAMSOC</span>
          </div>
        </Link>

        {/* Mobile Menu Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>

        {/* Navigation Menu */}
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={() => { scrollToTop(); setIsOpen(false); }}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={() => { scrollToTop(); setIsOpen(false); }}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <HashLink smooth to="/#upcoming-events" className="nav-links" onClick={() => setIsOpen(false)}>
              Upcoming Plays/Events
            </HashLink>
          </li>
          <li className="nav-item">
            <Link to="/productions" className="nav-links" onClick={() => { scrollToTop(); setIsOpen(false); }}>
              Productions
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/departments" className="nav-links" onClick={() => { scrollToTop(); setIsOpen(false); }}>
              Departments
            </Link>
          </li>
          <li className="nav-item">
            <HashLink smooth to="/#partners" className="nav-links" onClick={() => setIsOpen(false)}>
              Partners
            </HashLink>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={() => { scrollToTop(); setIsOpen(false); }}>
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/join" className="nav-links-btn" onClick={() => { scrollToTop(); setIsOpen(false); }}>
              Join Us
            </Link>
          </li>
        </ul>

        {/* Social Media Icons with Official Logo Placeholders */}
        <div className="social-icons" style={{
          display: 'flex',
          gap: '15px',
          alignItems: 'center'
        }}>
          <a href="https://instagram.com/strathmoredramasociety" target="_blank" rel="noopener noreferrer" title="Instagram">
            <div style={{
              width: '30px',
              height: '30px',
              backgroundColor: '#FFD700',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.6rem',
              fontWeight: 'bold',
              color: '#111'
            }}>IG</div>
          </a>
          <a href="https://youtube.com/@strathmoredramasociety" target="_blank" rel="noopener noreferrer" title="YouTube">
            <div style={{
              width: '30px',
              height: '30px',
              backgroundColor: '#FFD700',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.6rem',
              fontWeight: 'bold',
              color: '#111'
            }}>YT</div>
          </a>
          <a href="https://tiktok.com/@strathmoredramasociety" target="_blank" rel="noopener noreferrer" title="TikTok">
            <div style={{
              width: '30px',
              height: '30px',
              backgroundColor: '#FFD700',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.6rem',
              fontWeight: 'bold',
              color: '#111'
            }}>TT</div>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

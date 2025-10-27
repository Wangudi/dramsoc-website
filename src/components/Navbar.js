import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { HamburgerIcon, ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import logo from '../assets/drama-society-logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [quicklinksOpen, setQuicklinksOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleQuicklinks = () => {
    setQuicklinksOpen(!quicklinksOpen);
  };

  const handleHomeClick = () => {
    setIsOpen(false);
    navigate('/');
  };

  const handleAboutClick = () => {
    setIsOpen(false);
    if (location.pathname === '/') {
      // Scroll to about section if already on home page
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home page and then scroll to about section
      navigate('/');
      setTimeout(() => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <nav style={{ backgroundColor: '#800020', padding: '1rem 0', position: 'sticky', top: 0, zIndex: 1000, boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="Drama Society Logo" style={{ height: '40px', marginRight: '12px' }} />
          <span style={{ color: '#fff', fontWeight: 'bold', fontSize: '18px' }}>Drama Society</span>
        </div>

        {/* Desktop Navigation */}
        <div style={{ display: 'none', '@media (min-width: 768px)': { display: 'flex' } }}>
          <Link to="/" style={{ color: '#fff', textDecoration: 'none', margin: '0 1rem', padding: '0.5rem 1rem', borderRadius: '4px', transition: 'background-color 0.2s', ':hover': { backgroundColor: 'rgba(255,255,255,0.1)' } }}>Home</Link>
          <button onClick={handleAboutClick} style={{ background: 'transparent', border: 'none', color: '#fff', textDecoration: 'none', margin: '0 1rem', padding: '0.5rem 1rem', borderRadius: '4px', transition: 'background-color 0.2s', cursor: 'pointer', ':hover': { backgroundColor: 'rgba(255,255,255,0.1)' } }}>About Us</button>
          <div style={{ position: 'relative' }}>
            <button onClick={toggleQuicklinks} style={{ background: 'transparent', border: 'none', color: '#fff', textDecoration: 'none', margin: '0 1rem', padding: '0.5rem 1rem', borderRadius: '4px', transition: 'background-color 0.2s', cursor: 'pointer', display: 'flex', alignItems: 'center', ':hover': { backgroundColor: 'rgba(255,255,255,0.1)' } }}>
              Quicklinks
              {quicklinksOpen ? <ChevronUpIcon style={{ marginLeft: '0.5rem' }} /> : <ChevronDownIcon style={{ marginLeft: '0.5rem' }} />}
            </button>
            {quicklinksOpen && (
              <div style={{ position: 'absolute', top: '100%', left: 0, backgroundColor: '#800020', minWidth: '160px', boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)', zIndex: 1, borderRadius: '4px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <Link to="/team" onClick={() => setQuicklinksOpen(false)} style={{ color: '#fff', padding: '12px 16px', textDecoration: 'none', display: 'block', ':hover': { backgroundColor: 'rgba(255,255,255,0.1)' } }}>Team</Link>
                <Link to="/departments" onClick={() => setQuicklinksOpen(false)} style={{ color: '#fff', padding: '12px 16px', textDecoration: 'none', display: 'block', ':hover': { backgroundColor: 'rgba(255,255,255,0.1)' } }}>Departments</Link>
                <Link to="/alumni" onClick={() => setQuicklinksOpen(false)} style={{ color: '#fff', padding: '12px 16px', textDecoration: 'none', display: 'block', ':hover': { backgroundColor: 'rgba(255,255,255,0.1)' } }}>Alumni</Link>
                <Link to="/articles" onClick={() => setQuicklinksOpen(false)} style={{ color: '#fff', padding: '12px 16px', textDecoration: 'none', display: 'block', ':hover': { backgroundColor: 'rgba(255,255,255,0.1)' } }}>Articles</Link>
                <Link to="/contact" onClick={() => setQuicklinksOpen(false)} style={{ color: '#fff', padding: '12px 16px', textDecoration: 'none', display: 'block', ':hover': { backgroundColor: 'rgba(255,255,255,0.1)' } }}>Contact</Link>
                <Link to="/join" onClick={() => setQuicklinksOpen(false)} style={{ color: '#fff', padding: '12px 16px', textDecoration: 'none', display: 'block', ':hover': { backgroundColor: 'rgba(255,255,255,0.1)' } }}>Join Us</Link>
              </div>
            )}
          </div>
        </div>

        {/* Mobile hamburger button */}
        <button onClick={toggleMenu} style={{ display: 'block', '@media (min-width: 768px)': { display: 'none' }, background: 'transparent', border: 'none', color: '#fff', fontSize: '18px', cursor: 'pointer' }}>
          <HamburgerIcon />
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div style={{ display: 'block', '@media (min-width: 768px)': { display: 'none' }, backgroundColor: '#800020', padding: '1rem', animation: 'slideIn 0.3s ease-in-out' }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '12px' }}>
              <button onClick={handleHomeClick} style={{ background: 'transparent', border: 'none', color: '#fff', textDecoration: 'none', cursor: 'pointer', fontSize: '16px', padding: 0, textAlign: 'left', width: '100%' }}>Home</button>
            </li>
            <li style={{ marginBottom: '12px' }}>
              <Link to="/#about" onClick={() => setIsOpen(false)} style={{ color: '#fff', textDecoration: 'none' }}>About Us</Link>
            </li>
            <li style={{ marginBottom: '12px' }}>
              <Link to="/team" onClick={() => setIsOpen(false)} style={{ color: '#fff', textDecoration: 'none' }}>Team</Link>
            </li>
            <li style={{ marginBottom: '12px' }}>
              <Link to="/departments" onClick={() => setIsOpen(false)} style={{ color: '#fff', textDecoration: 'none' }}>Departments</Link>
            </li>
            <li style={{ marginBottom: '12px' }}>
              <Link to="/alumni" onClick={() => setIsOpen(false)} style={{ color: '#fff', textDecoration: 'none' }}>Alumni</Link>
            </li>
            <li style={{ marginBottom: '12px' }}>
              <Link to="/articles" onClick={() => setIsOpen(false)} style={{ color: '#fff', textDecoration: 'none' }}>Articles</Link>
            </li>
            <li style={{ marginBottom: '12px' }}>
              <Link to="/contact" onClick={() => setIsOpen(false)} style={{ color: '#fff', textDecoration: 'none' }}>Contact</Link>
            </li>
            <li style={{ marginBottom: '12px' }}>
              <Link to="/join" onClick={() => setIsOpen(false)} style={{ color: '#fff', textDecoration: 'none' }}>Join Us</Link>
            </li>
          </ul>
        </div>
      )}
      <style>
        {`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}
      </style>
    </nav>
  );
};

export default Navbar;

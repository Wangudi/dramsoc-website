import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleHomeClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
    }
    setQuicklinksOpen(false);
  };

  const handleAboutClick = () => {
    if (location.pathname === '/') {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
    setQuicklinksOpen(false);
  };

  const handleProductionsClick = () => {
    if (location.pathname === '/') {
      const productionsSection = document.querySelector('.featured-productions');
      if (productionsSection) {
        productionsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const productionsSection = document.querySelector('.featured-productions');
        if (productionsSection) {
          productionsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
    setQuicklinksOpen(false);
  };

  return (
    <nav className="navbar" style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
      <div className="navbar-container">
        {/* Logo and Navigation in one row */}
        <div className="navbar-content">
          {/* Logo Section */}
          <Link
            to="/"
            className="navbar-logo"
            onClick={() => { scrollToTop(); setIsOpen(false); }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img
                src={process.env.PUBLIC_URL + '/images/No%20background%20white%20logo.png'}
                alt="DRAMSOC Logo"
                style={{ height: '50px' }}
              />
            </div>
          </Link>
          
          {/* Existing nav items remain unchanged */}
          {/* Quicklinks Hamburger - extreme right, does not move existing content */}
          <button
            aria-label="Open Quicklinks"
            onClick={toggleQuicklinks}
            style={{
              marginLeft: 'auto',
              background: 'transparent',
              border: 'none',
              color: 'inherit',
              cursor: 'pointer',
              padding: '8px',
            }}
          >
            <span style={{ display: 'flex', flexDirection: 'column', gap: '4px', width: '24px' }}>
              <span style={{ display: 'block', width: '100%', height: '2px', background: 'currentColor', margin: 0 }}></span>
              <span style={{ display: 'block', width: '100%', height: '2px', background: 'currentColor', margin: 0 }}></span>
              <span style={{ display: 'block', width: '100%', height: '2px', background: 'currentColor', margin: 0 }}></span>
            </span>
          </button>
        </div>
      </div>

      {/* Quicklinks Panel (mobile-friendly). Uses footer links only; order/appearance unchanged */}
      {quicklinksOpen && (
        <div
          role="menu"
          aria-label="Quicklinks"
          style={{
            position: 'fixed',
            top: '60px',
            right: 0,
            background: 'rgba(0,0,0,0.95)',
            backdropFilter: 'blur(4px)',
            padding: '16px',
            borderLeft: '1px solid rgba(255,255,255,0.1)',
            maxHeight: '70vh',
            overflowY: 'auto',
            width: '85%',
            maxWidth: '360px',
            animation: 'slideIn 0.3s ease-out',
          }}
        >
          {/* Mirror of Footer quicklinks. Do not change order/colors; just list the same sections */}
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '12px' }}>
              <button onClick={handleHomeClick} style={{ background: 'transparent', border: 'none', color: '#fff', textDecoration: 'none', cursor: 'pointer', fontSize: '16px', padding: 0, textAlign: 'left', width: '100%' }}>Home</button>
            </li>
            <li style={{ marginBottom: '12px' }}>
              <button onClick={handleAboutClick} style={{ background: 'transparent', border: 'none', color: '#fff', textDecoration: 'none', cursor: 'pointer', fontSize: '16px', padding: 0, textAlign: 'left', width: '100%' }}>About Us</button>
            </li>
            <li style={{ marginBottom: '12px' }}>
              <Link to="/team" onClick={() => setQuicklinksOpen(false)} style={{ color: '#fff', textDecoration: 'none' }}>Team</Link>
            </li>
            <li style={{ marginBottom: '12px' }}>
              <Link to="/departments" onClick={() => setQuicklinksOpen(false)} style={{ color: '#fff', textDecoration: 'none' }}>Departments</Link>
            </li>
            <li style={{ marginBottom: '12px' }}>
              <Link to="/alumni" onClick={() => setQuicklinksOpen(false)} style={{ color: '#fff', textDecoration: 'none' }}>Alumni</Link>
            </li>
            <li style={{ marginBottom: '12px' }}>
              <Link to="/articles" onClick={() => setQuicklinksOpen(false)} style={{ color: '#fff', textDecoration: 'none' }}>Articles</Link>
            </li>
            <li style={{ marginBottom: '12px' }}>
              <Link to="/contact" onClick={() => setQuicklinksOpen(false)} style={{ color: '#fff', textDecoration: 'none' }}>Contact</Link>
            </li>
            <li style={{ marginBottom: '12px' }}>
              <Link to="/join" onClick={() => setQuicklinksOpen(false)} style={{ color: '#fff', textDecoration: 'none' }}>Join Us</Link>
            </li>
          </ul>
        </div>
      )}
      <style>{`
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
      `}</style>
    </nav>
  );
}

export default Navbar;

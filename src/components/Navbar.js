import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [quicklinksOpen, setQuicklinksOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleQuicklinks = () => {
    setQuicklinksOpen(!quicklinksOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
            <span style={{ display: 'inline-block', width: 24 }}>
              <span style={{ display: 'block', height: 2, background: 'currentColor', margin: '5px 0' }} />
              <span style={{ display: 'block', height: 2, background: 'currentColor', margin: '5px 0' }} />
              <span style={{ display: 'block', height: 2, background: 'currentColor', margin: '5px 0' }} />
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
          }}
        >
          {/* Mirror of Footer quicklinks. Do not change order/colors; just list the same sections */}
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: 12 }}>
              <Link to="/" onClick={() => setQuicklinksOpen(false)}>Home</Link>
            </li>
            <li style={{ marginBottom: 12 }}>
              <Link to="/about" onClick={() => setQuicklinksOpen(false)}>About</Link>
            </li>
            <li style={{ marginBottom: 12 }}>
              <Link to="/productions" onClick={() => setQuicklinksOpen(false)}>Productions</Link>
            </li>
            <li style={{ marginBottom: 12 }}>
              <Link to="/team" onClick={() => setQuicklinksOpen(false)}>Team</Link>
            </li>
            <li style={{ marginBottom: 12 }}>
              <Link to="/departments" onClick={() => setQuicklinksOpen(false)}>Departments</Link>
            </li>
            <li style={{ marginBottom: 12 }}>
              <Link to="/alumni" onClick={() => setQuicklinksOpen(false)}>Alumni</Link>
            </li>
            <li style={{ marginBottom: 12 }}>
              <Link to="/partners" onClick={() => setQuicklinksOpen(false)}>Partners</Link>
            </li>
            <li style={{ marginBottom: 12 }}>
              <Link to="/articles" onClick={() => setQuicklinksOpen(false)}>Articles</Link>
            </li>
            <li style={{ marginBottom: 12 }}>
              <Link to="/contact" onClick={() => setQuicklinksOpen(false)}>Contact</Link>
            </li>
            <li style={{ marginBottom: 12 }}>
              <Link to="/join" onClick={() => setQuicklinksOpen(false)}>Join Us</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

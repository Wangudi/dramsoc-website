import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>DRAMSOC</h3>
          <p>Strathmore Drama Society</p>
          <p>Where stories come alive at Strathmore University</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/productions">Productions</Link></li>
            <li><Link to="/departments">Departments</Link></li>
            <li><Link to="/join">Join Us</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: strathmoreDramaSociety@strathmore.edu</p>
          <div className="social-icons">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">TikTok</a>
          </div>
        </div>
        <div className="footer-section">
          <h4>Partners</h4>
          <Link to="/partners">View Our Partners</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Strathmore Drama Society. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

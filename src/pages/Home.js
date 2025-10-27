import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      {/* Hero Section with Logo */}
      <section className="hero" style={{ padding: '60px 20px', background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', marginBottom: '30px', flexWrap: 'wrap' }}>
          <img
            src={process.env.PUBLIC_URL + '/images/No%20background%20white%20logo.png'}
            alt="DRAMSOC Logo"
            style={{ width: '120px', height: 'auto', filter: 'drop-shadow(0 4px 8px rgba(255,215,0,0.3))' }}
          />
          <h1
            style={{
              margin: 0,
              fontSize: '3rem',
              textAlign: 'center',
              background: 'linear-gradient(45deg, #FFD700, #FFA500)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Take It to the Next Level!
          </h1>
        </div>
        <p style={{ textAlign: 'center', fontSize: '1.3rem', marginBottom: '30px', color: '#fff' }}>
          Where stories come alive at Strathmore University
        </p>
        <div style={{ textAlign: 'center' }}>
          <Link to="/join" className="cta-button" style={{ display: 'inline-block', padding: '15px 40px', backgroundColor: '#FFD700', color: '#111', textDecoration: 'none', borderRadius: '30px', fontWeight: 'bold', fontSize: '1.1rem', transition: 'all 0.3s', boxShadow: '0 4px 15px rgba(255,215,0,0.3)' }}>
            Join Us Today
          </Link>
        </div>
      </section>

      {/* Dashboard Buttons Section - Horizontal Layout */}
      <section className="dashboard-section" style={{ padding: '40px 20px', backgroundColor: '#111' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '15px', maxWidth: '1200px', margin: '0 auto' }}>
          <Link to="/productions" onClick={() => { setTimeout(() => window.scrollTo(0, 0), 0); }} style={{ textDecoration: 'none', flex: '1 1 auto', minWidth: '200px', maxWidth: '280px' }}>
            <div style={{ backgroundColor: '#2d2d2d', padding: '20px 30px', borderRadius: '50px', textAlign: 'center', transition: 'transform 0.3s, box-shadow 0.3s', border: '2px solid #FFD700', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
              <span style={{ fontSize: '1.5rem' }}>🎭</span>
              <h3 style={{ color: '#FFD700', margin: 0, fontSize: '1.1rem', fontWeight: 'bold' }}>Productions</h3>
            </div>
          </Link>

          <Link to="/team" onClick={() => { setTimeout(() => window.scrollTo(0, 0), 0); }} style={{ textDecoration: 'none', flex: '1 1 auto', minWidth: '200px', maxWidth: '280px' }}>
            <div style={{ backgroundColor: '#2d2d2d', padding: '20px 30px', borderRadius: '50px', textAlign: 'center', transition: 'transform 0.3s, box-shadow 0.3s', border: '2px solid #FFD700', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
              <span style={{ fontSize: '1.5rem' }}>👥</span>
              <h3 style={{ color: '#FFD700', margin: 0, fontSize: '1.1rem', fontWeight: 'bold' }}>Our Team</h3>
            </div>
          </Link>

          <Link to="/contact" onClick={() => { setTimeout(() => window.scrollTo(0, 0), 0); }} style={{ textDecoration: 'none', flex: '1 1 auto', minWidth: '200px', maxWidth: '280px' }}>
            <div style={{ backgroundColor: '#2d2d2d', padding: '20px 30px', borderRadius: '50px', textAlign: 'center', transition: 'transform 0.3s, box-shadow 0.3s', border: '2px solid #FFD700', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
              <span style={{ fontSize: '1.5rem' }}>📧</span>
              <h3 style={{ color: '#FFD700', margin: 0, fontSize: '1.1rem', fontWeight: 'bold' }}>Contact Us</h3>
            </div>
          </Link>
        </div>
      </section>

      {/* Upcoming Plays/Events Section - should appear before About Us */}
      <section
        className="upcoming-section"
        style={{
          padding: '60px 20px',
          backgroundColor: '#0b0b12',
          position: 'relative',
          overflow: 'hidden',
          borderTop: '4px solid #7B68EE',
          borderBottom: '4px solid #1E90FF',
        }}
      >
        {/* Decorative Spotlight SVGs */}
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <svg width="100%" height="100%" viewBox="0 0 800 400" preserveAspectRatio="none" style={{ position: 'absolute', top: 0, left: 0, opacity: 0.25 }}>
            <defs>
              <linearGradient id="gold-sheen" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#FFD700" />
                <stop offset="50%" stopColor="#FFB300" />
                <stop offset="100%" stopColor="#FFA500" />
              </linearGradient>
              <linearGradient id="sapphire" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1E90FF" />
                <stop offset="100%" stopColor="#0b5ed7" />
              </linearGradient>
            </defs>
            {/* Curtains */}
            <rect x="-20" y="-20" width="120" height="460" fill="url(#sapphire)" rx="10" />
            <rect x="700" y="-20" width="120" height="460" fill="url(#sapphire)" rx="10" />
            {/* Crossing spotlights */}
            <g style={{ animation: 'pulseGlow 4s ease-in-out infinite' }}>
              <polygon points="0,0 300,0 0,250" fill="url(#gold-sheen)" />
              <polygon points="800,0 500,0 800,250" fill="url(#gold-sheen)" />
            </g>
            {/* Stage line */}
            <rect x="0" y="360" width="800" height="6" fill="#7B68EE" />
          </svg>
        </div>

        {/* Header with theatrical font feel */}
        <h2
          style={{
            position: 'relative',
            zIndex: 1,
            textAlign: 'center',
            fontSize: '3rem',
            marginBottom: '20px',
            letterSpacing: '2px',
            fontWeight: 900,
            color: '#fff',
            textShadow: '0 2px 0 #7B68EE, 0 4px 20px rgba(30,144,255,0.4)',
            transform: 'translateY(10px)',
            animation: 'titleSlideIn 800ms ease-out forwards',
          }}
        >
          <span style={{
            background: 'linear-gradient(90deg, #FFD700, #FFB300, #FFA500)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline-block',
          }}>
            Upcoming Plays/Events
          </span>
          <span aria-hidden="true" style={{ marginLeft: '10px' }}>🎭🎭</span>
        </h2>

        {/* No updates text with gentle pulse/fade when empty */}
        <p
          style={{
            position: 'relative',
            zIndex: 1,
            textAlign: 'center',
            color: '#E6E6FA',
            maxWidth: 720,
            margin: '0 auto',
            padding: '12px 20px',
            borderRadius: '12px',
            background: 'rgba(123,104,238,0.12)',
            boxShadow: '0 8px 30px rgba(30,144,255,0.25)',
            animation: 'softPulse 2.4s ease-in-out infinite',
          }}
        >
          No updates at the moment. Please check back later.
        </p>

        {/* Inline keyframes for animations (scoped by injection) */}
        <style>
          {`
            @keyframes titleSlideIn {
              0% { opacity: 0; transform: translateY(20px) scale(0.98); }
              60% { opacity: 1; transform: translateY(-4px) scale(1.01); }
              100% { opacity: 1; transform: translateY(0) scale(1); }
            }
            @keyframes softPulse {
              0% { opacity: 0.7; filter: drop-shadow(0 0 0px rgba(255,215,0,0.0)); }
              50% { opacity: 1; filter: drop-shadow(0 0 12px rgba(255,215,0,0.25)); }
              100% { opacity: 0.7; filter: drop-shadow(0 0 0px rgba(255,215,0,0.0)); }
            }
            @keyframes pulseGlow {
              0%, 100% { opacity: 0.18; }
              50% { opacity: 0.32; }
            }
          `}
        </style>
      </section>

      {/* About Us Section */}
      <section className="about-section" id="about" style={{ padding: '60px 20px', backgroundColor: '#111' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', color: '#FFD700', marginBottom: '30px' }}>About Us</h2>
        <div style={{ maxWidth: '900px', margin: '0 auto', color: '#ddd', lineHeight: 1.8 }}>
          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ color: '#FFD700', marginBottom: '10px' }}>Our Mission</h3>
            <p style={{ color: '#ddd', fontSize: '1rem' }}>
              to enhance and encourage teamwork, improve the quality of life by building, developing and nurturing talent through social, theatrical and community life at large.
            </p>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ color: '#FFD700', marginBottom: '10px' }}>Our Vision</h3>
            <p style={{ color: '#ddd', fontSize: '1rem' }}>
              To be a premier arts institution in Kenya and beyond, inspiring creativity, fostering cultural dialogue, and empowering individuals to use the transformative power of theatre and film for personal and societal growth.
            </p>
          </div>
          <div>
            <h3 style={{ color: '#FFD700', marginBottom: '10px' }}>Our Motto</h3>
            <p style={{ color: '#ddd', fontStyle: 'italic' }}>
              "Take it to the next level!"
            </p>
          </div>
        </div>
      </section>

      {/* Featured Productions Section */}
      <section className="featured-productions" style={{ padding: '60px 20px', backgroundColor: '#0f0f0f' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', color: '#FFD700', marginBottom: '30px' }}>Featured Productions</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', maxWidth: '1200px', margin: '0 auto' }}>
          {/* The Homecoming */}
          <div className="card" style={{ backgroundColor: '#1f1f1f', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.3)', transition: 'transform 0.3s' }}>
            <img
              src={process.env.PUBLIC_URL + '/images/The%20Homecoming%20(1).jpg'}
              alt="The Homecoming"
              style={{ width: '100%', height: '250px', objectFit: 'cover' }}
            />
            <div style={{ padding: '15px' }}>
              <h3 style={{ marginBottom: '10px', color: '#FFD700' }}>The Homecoming</h3>
              <p style={{ color: '#ddd', lineHeight: 1.6 }}>
                A powerful tale of family dynamics, secrets, and the complexities of returning home.
              </p>
              <Link to="/productions" onClick={() => { setTimeout(() => window.scrollTo(0, 0), 0); }} style={{ display: 'inline-block', marginTop: '15px', color: '#FFD700', textDecoration: 'none', fontWeight: 'bold' }}>Learn More →</Link>
            </div>
          </div>

          {/* The Samaritan */}
          <div className="card" style={{ backgroundColor: '#1f1f1f', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.3)', transition: 'transform 0.3s' }}>
            <img
              src={process.env.PUBLIC_URL + '/images/The%20Samaritan%20(6).jpg'}
              alt="The Samaritan"
              style={{ width: '100%', height: '250px', objectFit: 'cover' }}
            />
            <div style={{ padding: '15px' }}>
              <h3 style={{ marginBottom: '10px', color: '#FFD700' }}>The Samaritan</h3>
              <p style={{ color: '#ddd', lineHeight: 1.6 }}>
                An inspiring story of kindness, morality, and the fight against corruption in modern society.
              </p>
              <Link to="/productions" onClick={() => { setTimeout(() => window.scrollTo(0, 0), 0); }} style={{ display: 'inline-block', marginTop: '15px', color: '#FFD700', textDecoration: 'none', fontWeight: 'bold' }}>Learn More →</Link>
            </div>
          </div>

          {/* The Waiting Room */}
          <div className="card" style={{ backgroundColor: '#1f1f1f', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.3)', transition: 'transform 0.3s' }}>
            <img
              src={process.env.PUBLIC_URL + '/images/The%20Waiting%20Room.jpg'}
             

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
          <h1 style={{ margin: 0, fontSize: '3rem', textAlign: 'center', background: 'linear-gradient(45deg, #FFD700, #FFA500)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
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
          <Link to="/productions" style={{ textDecoration: 'none', flex: '1 1 auto', minWidth: '200px', maxWidth: '280px' }}>
            <div style={{ backgroundColor: '#2d2d2d', padding: '20px 30px', borderRadius: '50px', textAlign: 'center', transition: 'transform 0.3s, box-shadow 0.3s', border: '2px solid #FFD700', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
              <span style={{ fontSize: '1.5rem' }}>🎭</span>
              <h3 style={{ color: '#FFD700', margin: 0, fontSize: '1.1rem', fontWeight: 'bold' }}>Productions</h3>
            </div>
          </Link>

          <Link to="/team" style={{ textDecoration: 'none', flex: '1 1 auto', minWidth: '200px', maxWidth: '280px' }}>
            <div style={{ backgroundColor: '#2d2d2d', padding: '20px 30px', borderRadius: '50px', textAlign: 'center', transition: 'transform 0.3s, box-shadow 0.3s', border: '2px solid #FFD700', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
              <span style={{ fontSize: '1.5rem' }}>👥</span>
              <h3 style={{ color: '#FFD700', margin: 0, fontSize: '1.1rem', fontWeight: 'bold' }}>Our Team</h3>
            </div>
          </Link>

          <Link to="/join" style={{ textDecoration: 'none', flex: '1 1 auto', minWidth: '200px', maxWidth: '280px' }}>
            <div style={{ backgroundColor: '#2d2d2d', padding: '20px 30px', borderRadius: '50px', textAlign: 'center', transition: 'transform 0.3s, box-shadow 0.3s', border: '2px solid #FFD700', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
              <span style={{ fontSize: '1.5rem' }}>✨</span>
              <h3 style={{ color: '#FFD700', margin: 0, fontSize: '1.1rem', fontWeight: 'bold' }}>Join Us</h3>
            </div>
          </Link>
        </div>
      </section>

      {/* Upcoming Plays/Events Section */}
      <section id="upcoming-events" className="section" style={{ scrollMarginTop: '80px', backgroundColor: '#111', padding: '40px 20px' }}>
        <h2 style={{ textAlign: 'center', color: '#FFD700', fontSize: '2rem', marginBottom: '16px' }}>Upcoming Plays/Events</h2>
        <div style={{ textAlign: 'center', color: '#ccc', fontSize: '1rem', padding: '8px 0' }}>
          No updates at the moment. Please check back soon!
        </div>
      </section>

      {/* About Us (inserted between Upcoming Plays/Events and Our Productions) */}
      <section id="about-preview" className="section" style={{ backgroundColor: '#111', padding: '50px 20px' }}>
        <h2 style={{ textAlign: 'center', color: '#FFD700', fontSize: '2.2rem', marginBottom: '20px' }}>About Us</h2>
        <p style={{ maxWidth: '900px', margin: '0 auto 24px', color: '#ddd', lineHeight: '1.8', textAlign: 'center' }}>
          Strathmore Drama Society (DRAMSOC) is the premier theatrical organization at Strathmore University,
          dedicated to fostering artistic excellence, creative expression, and theatrical innovation. We bring together
          talented students and passionate mentors to create unforgettable performances.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ background: '#1f1f1f', borderRadius: '12px', padding: '16px' }}>
            <h3 style={{ color: '#FFD700', marginTop: 0 }}>Our Mission</h3>
            <p style={{ color: '#ccc', margin: 0 }}>To nurture talent, produce world-class productions, and use drama to educate and inspire.</p>
          </div>
          <div style={{ background: '#1f1f1f', borderRadius: '12px', padding: '16px' }}>
            <h3 style={{ color: '#FFD700', marginTop: 0 }}>Our Vision</h3>
            <p style={{ color: '#ccc', margin: 0 }}>To be East Africa's leading university drama society, known for excellence and innovation.</p>
          </div>
          <div style={{ background: '#1f1f1f', borderRadius: '12px', padding: '16px' }}>
            <h3 style={{ color: '#FFD700', marginTop: 0 }}>Our Motto</h3>
            <p style={{ color: '#ccc', margin: 0 }}>&quot;Where Stories Come Alive&quot;</p>
          </div>
        </div>
      </section>

      {/* Our Productions Section with Polished Cards */}
      <section id="productions" className="section" style={{ scrollMarginTop: '80px', backgroundColor: '#111', padding: '50px 20px' }}>
        <h2 style={{ textAlign: 'center', color: '#FFD700', fontSize: '2.2rem', marginBottom: '24px' }}>Our Productions</h2>
        <div className="card-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', maxWidth: '1200px', margin: '0 auto' }}>
          {/* The Waiting Room */}
          <div className="card" style={{ backgroundColor: '#2d2d2d', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 8px 20px rgba(0,0,0,0.5)', transition: 'transform 0.3s, box-shadow 0.3s' }}>
            <img
              src={process.env.PUBLIC_URL + '/images/The%20Waiting%20Room%20(7).jpg'}
              alt="The Waiting Room"
              style={{ width: '100%', height: '250px', objectFit: 'cover' }}
            />
            <div style={{ padding: '20px' }}>
              <h3 style={{ color: '#FFD700', marginBottom: '10px' }}>The Waiting Room</h3>
              <p style={{ color: '#ccc', lineHeight: '1.6' }}>A gripping exploration of time, patience, and human connection in life's in-between moments.</p>
              <Link to="/productions" style={{ display: 'inline-block', marginTop: '15px', color: '#FFD700', textDecoration: 'none', fontWeight: 'bold' }}>Learn More →</Link>
            </div>
          </div>

          {/* The Homecoming */}
          <div className="card" style={{ backgroundColor: '#2d2d2d', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 8px 20px rgba(0,0,0,0.5)', transition: 'transform 0.3s, box-shadow 0.3s' }}>
            <img
              src={process.env.PUBLIC_URL + '/images/The%20Homecoming%20(1).jpg'}
              alt="The Homecoming"
              style={{ width: '100%', height: '250px', objectFit: 'cover' }}
            />
            <div style={{ padding: '20px' }}>
              <h3 style={{ color: '#FFD700', marginBottom: '10px' }}>The Homecoming</h3>
              <p style={{ color: '#ccc', lineHeight: '1.6' }}>A powerful tale of family dynamics, secrets, and the complexities of returning home.</p>
              <Link to="/productions" style={{ display: 'inline-block', marginTop: '15px', color: '#FFD700', textDecoration: 'none', fontWeight: 'bold' }}>Learn More →</Link>
            </div>
          </div>

          {/* The Samaritan */}
          <div className="card" style={{ backgroundColor: '#2d2d2d', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 8px 20px rgba(0,0,0,0.5)', transition: 'transform 0.3s, box-shadow 0.3s' }}>
            <img
              src={process.env.PUBLIC_URL + '/images/The%20Samaritan%20(6).jpg'}
              alt="The Samaritan"
              style={{ width: '100%', height: '250px', objectFit: 'cover' }}
            />
            <div style={{ padding: '20px' }}>
              <h3 style={{ color: '#FFD700', marginBottom: '10px' }}>The Samaritan</h3>
              <p style={{ color: '#ccc', lineHeight: '1.6' }}>An inspiring story of kindness, morality, and the fight against corruption in modern society.</p>
              <Link to="/productions" style={{ display: 'inline-block', marginTop: '15px', color: '#FFD700', textDecoration: 'none', fontWeight: 'bold' }}>Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Gallery Section */}
      <section className="gallery-section" style={{ padding: '60px 20px', backgroundColor: '#1a1a1a' }}>
        <h2 style={{ textAlign: 'center', color: '#FFD700', fontSize: '2.5rem', marginBottom: '40px' }}>Behind the Scenes</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', maxWidth: '1200px', margin: '0 auto' }}>
          <img src={process.env.PUBLIC_URL + '/images/The%20Homecoming%20(3).jpg'} alt="The Homecoming Scene 3" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px', transition: 'transform 0.3s', boxShadow: '0 4px 15px rgba(0,0,0,0.3)' }} />
          <img src={process.env.PUBLIC_URL + '/images/The%20Homecoming%20(4).jpg'} alt="The Homecoming Scene 4" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px', transition: 'transform 0.3s', boxShadow: '0 4px 15px rgba(0,0,0,0.3)' }} />
          <img src={process.env.PUBLIC_URL + '/images/The%20Homecoming%20(5).jpg'} alt="The Homecoming Scene 5" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px', transition: 'transform 0.3s', boxShadow: '0 4px 15px rgba(0,0,0,0.3)' }} />
          <img src={process.env.PUBLIC_URL + '/images/The%20Homecoming%20(6).jpg'} alt="The Homecoming Scene 6" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px', transition: 'transform 0.3s', boxShadow: '0 4px 15px rgba(0,0,0,0.3)' }} />
        </div>
      </section>
    </div>
  );
}

export default Home;

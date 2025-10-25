import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>Take It to the Next Level!</h1>
        <p>Strathmore Drama Society</p>
        <Link to="/join" className="cta-button">Join Us Today</Link>
      </section>

      <section className="section">
        <h2>Featured Productions</h2>
        <div className="card-grid">
          <div className="card">
            <h3>The Waiting Room</h3>
            <p><strong>September 2025</strong></p>
            <p>A gripping exploration of human patience, hope, and the stories we tell while waiting. Set in a mysterious waiting room where time seems suspended, strangers from different walks of life find themselves brought together by fate. As they wait for an unknown purpose, secrets are revealed, relationships are tested, and each character confronts their past while grappling with an uncertain future.</p>
            <Link to="/productions" className="cta-button">Learn More</Link>
          </div>
          <div className="card">
            <h3>The Homecoming</h3>
            <p><strong>April 2025</strong></p>
            <p>Harold Pinter's masterpiece of menace and psychological tension. When Teddy, a philosophy professor, returns home with his wife Ruth after six years in America, the reunion with his working-class London family becomes a battleground of power, sexuality, and family dynamics. This darkly comic play explores themes of masculinity, possession, and the primal forces that lurk beneath civilized surfaces.</p>
            <Link to="/productions" className="cta-button">Learn More</Link>
          </div>
          <div className="card">
            <h3>The Samaritan</h3>
            <p><strong>2024</strong></p>
            <p>A powerful exploration of corruption, technology, and redemption in modern Kenya. Through the story of a revolutionary app that exposes corruption, this locally-resonant production examined the cost of standing up for what is right in a society where power and money often speak louder than truth. Our production brought this relevant narrative to life with outstanding performances and powerful staging.</p>
            <Link to="/productions" className="cta-button">Learn More</Link>
          </div>
        </div>
      </section>

      <section className="section" style={{backgroundColor: '#1a1a1a', padding: '40px 20px'}}>
        <h2>Quick Links</h2>
        <div style={{display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap'}}>
          <Link to="/productions" className="cta-button">Upcoming Shows</Link>
          <Link to="/join" className="cta-button">Join Us</Link>
          <Link to="/departments" className="cta-button">Our Departments</Link>
        </div>
      </section>

      <section className="section" style={{backgroundColor: '#B80000', padding: '60px 20px', textAlign: 'center'}}>
        <h2 style={{color: '#FFD700', fontSize: '2.5rem'}}>Where Stories Come Alive</h2>
        <p style={{fontSize: '1.5rem', color: 'white', marginTop: '10px'}}>at Strathmore University</p>
      </section>
    </div>
  );
}

export default Home;

import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      {/* Hero Section with reduced spacing */}
      <section className="hero" style={{padding: '60px 20px'}}>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px', marginBottom: '20px'}}>
          <div style={{width: '80px', height: '80px', backgroundColor: '#FFD700', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#111'}}>
            LOGO
          </div>
          <h1 style={{margin: 0}}>Take It to the Next Level!</h1>
        </div>
        <p style={{textAlign: 'center', fontSize: '1.2rem', marginBottom: '25px'}}>Where stories come alive at Strathmore University</p>
        <Link to="/join" className="cta-button">Join Us Today</Link>
      </section>

      {/* Upcoming Plays/Events Section */}
      <section id="upcoming-events" className="section" style={{scrollMarginTop: '80px'}}>
        <h2>Upcoming Plays/Events</h2>
        <div style={{textAlign: 'center', padding: '40px 20px', fontSize: '1.1rem', color: '#FFD700'}}>
          <p>No updates at the moment. Please check back soon!</p>
        </div>
      </section>

      {/* Our Productions Section */}
      <section id="productions" className="section" style={{scrollMarginTop: '80px'}}>
        <h2>Our Productions</h2>
        <div className="card-grid">
          {/* The Waiting Room */}
          <div className="card">
            <div style={{width: '100%', height: '200px', backgroundColor: '#333', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px', borderRadius: '8px'}}>
              <span style={{color: '#FFD700', fontSize: '0.9rem'}}>Image Placeholder</span>
            </div>
            <h3>The Waiting Room</h3>
            <p><strong>September 2025</strong></p>
            <p style={{fontSize: '0.95rem', lineHeight: '1.6'}}>A gripping exploration of human patience, hope, and the stories we tell while waiting. Set in a mysterious waiting room where time seems suspended, strangers from different walks of life find themselves brought together by fate. As they wait for an unknown purpose, secrets are revealed, relationships are tested, and each character confronts their past while grappling with an uncertain future.</p>
            <p style={{fontSize: '0.9rem', fontStyle: 'italic', color: '#FFD700'}}>Director & Script Writer: Nick Muthama</p>
            <Link to="/productions" className="cta-button">Learn More</Link>
          </div>

          {/* The Homecoming */}
          <div className="card">
            <div style={{width: '100%', height: '200px', backgroundColor: '#333', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px', borderRadius: '8px'}}>
              <span style={{color: '#FFD700', fontSize: '0.9rem'}}>Image Placeholder</span>
            </div>
            <h3>The Homecoming</h3>
            <p><strong>April 2025</strong></p>
            <p style={{fontSize: '0.95rem', lineHeight: '1.6'}}>Harold Pinter's masterpiece of menace and psychological tension. When Teddy, a philosophy professor, returns home with his wife Ruth after six years in America, the reunion with his working-class London family becomes a battleground of power, sexuality, and family dynamics. This darkly comic play explores themes of masculinity, possession, and the primal forces that lurk beneath civilized surfaces.</p>
            <p style={{fontSize: '0.9rem', fontStyle: 'italic', color: '#FFD700'}}>Director: Nick Muthama</p>
            <Link to="/productions" className="cta-button">Learn More</Link>
          </div>

          {/* The Samaritan */}
          <div className="card">
            <div style={{width: '100%', height: '200px', backgroundColor: '#333', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px', borderRadius: '8px'}}>
              <span style={{color: '#FFD700', fontSize: '0.9rem'}}>Image Placeholder</span>
            </div>
            <h3>The Samaritan</h3>
            <p><strong>2024</strong></p>
            <p style={{fontSize: '0.95rem', lineHeight: '1.6'}}>A powerful exploration of corruption, technology, and redemption in modern Kenya. Through the story of a revolutionary app that exposes corruption, this locally-resonant production examined the cost of standing up for what is right in a society where power and money often speak louder than truth. Our production brought this relevant narrative to life with outstanding performances and powerful staging.</p>
            <Link to="/productions" className="cta-button">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Past Productions Section */}
      <section id="past-productions" className="section" style={{backgroundColor: '#0d0d0d', scrollMarginTop: '80px'}}>
        <h2>Past Productions</h2>
        <div className="card-grid">
          <div className="card">
            <div style={{width: '100%', height: '200px', backgroundColor: '#333', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px', borderRadius: '8px'}}>
              <span style={{color: '#FFD700', fontSize: '0.9rem'}}>Image Upload Placeholder</span>
            </div>
            <h3>Major Barbara</h3>
            <p><strong>2023</strong></p>
          </div>
          <div className="card">
            <div style={{width: '100%', height: '200px', backgroundColor: '#333', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px', borderRadius: '8px'}}>
              <span style={{color: '#FFD700', fontSize: '0.9rem'}}>Image Upload Placeholder</span>
            </div>
            <h3>The Accidental Death of an Anarchist</h3>
            <p><strong>2022</strong></p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="section" style={{scrollMarginTop: '80px'}}>
        <h2>Our Team</h2>
        <div className="card-grid">
          <div className="card">
            <div style={{width: '150px', height: '150px', backgroundColor: '#333', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 15px'}}>
              <span style={{color: '#FFD700', fontSize: '0.8rem'}}>Upload Photo</span>
            </div>
            <h3>Dan Kakuru</h3>
            <p><strong>President</strong></p>
          </div>
          <div className="card">
            <div style={{width: '150px', height: '150px', backgroundColor: '#333', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 15px'}}>
              <span style={{color: '#FFD700', fontSize: '0.8rem'}}>Upload Photo</span>
            </div>
            <h3>Leila Kaisa</h3>
            <p><strong>Vice President</strong></p>
          </div>
          <div className="card">
            <div style={{width: '150px', height: '150px', backgroundColor: '#333', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 15px'}}>
              <span style={{color: '#FFD700', fontSize: '0.8rem'}}>Upload Photo</span>
            </div>
            <h3>Joe Abala</h3>
            <p><strong>Organizing Secretary General</strong></p>
          </div>
          <div className="card">
            <div style={{width: '150px', height: '150px', backgroundColor: '#333', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 15px'}}>
              <span style={{color: '#FFD700', fontSize: '0.8rem'}}>Upload Photo</span>
            </div>
            <h3>Cherise Chomba</h3>
            <p><strong>Secretary General</strong></p>
          </div>
          <div className="card">
            <div style={{width: '150px', height: '150px', backgroundColor: '#333', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 15px'}}>
              <span style={{color: '#FFD700', fontSize: '0.8rem'}}>Upload Photo</span>
            </div>
            <h3>Paula Nimurungi</h3>
            <p><strong>Financial Manager</strong></p>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="section" style={{backgroundColor: '#0d0d0d', scrollMarginTop: '80px'}}>
        <h2>Our Partners</h2>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '40px', flexWrap: 'wrap', padding: '20px'}}>
          <div style={{width: '150px', height: '150px', backgroundColor: '#333', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <a href="https://strathmore.edu" target="_blank" rel="noopener noreferrer" style={{color: '#FFD700', fontSize: '0.85rem', textAlign: 'center', textDecoration: 'none'}}>Strathmore University Logo</a>
          </div>
          <div style={{width: '150px', height: '150px', backgroundColor: '#333', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <a href="#" target="_blank" rel="noopener noreferrer" style={{color: '#FFD700', fontSize: '0.85rem', textAlign: 'center', textDecoration: 'none'}}>Wangudi Inc. Logo</a>
          </div>
          <div style={{width: '150px', height: '150px', backgroundColor: '#333', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <a href="#" target="_blank" rel="noopener noreferrer" style={{color: '#FFD700', fontSize: '0.85rem', textAlign: 'center', textDecoration: 'none'}}>Production Studios Logo</a>
          </div>
          <div style={{width: '150px', height: '150px', backgroundColor: '#333', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <a href="#" target="_blank" rel="noopener noreferrer" style={{color: '#FFD700', fontSize: '0.85rem', textAlign: 'center', textDecoration: 'none'}}>Igiza Arts Logo</a>
          </div>
        </div>
      </section>

      {/* Quick Links Dashboard */}
      <section className="section" style={{backgroundColor: '#1a1a1a', padding: '40px 20px'}}>
        <h2>Quick Links</h2>
        <div style={{display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap'}}>
          <a href="#upcoming-events" className="cta-button" onClick={(e) => {e.preventDefault(); document.getElementById('upcoming-events').scrollIntoView({behavior: 'smooth'}); window.scrollTo({top: 0, behavior: 'smooth'});}}>Upcoming Shows</a>
          <Link to="/join" className="cta-button">Join Us</Link>
          <Link to="/departments" className="cta-button">Our Departments</Link>
          <a href="#productions" className="cta-button" onClick={(e) => {e.preventDefault(); document.getElementById('productions').scrollIntoView({behavior: 'smooth'});}}>Productions</a>
          <a href="#team" className="cta-button" onClick={(e) => {e.preventDefault(); document.getElementById('team').scrollIntoView({behavior: 'smooth'});}}>Team</a>
          <a href="#partners" className="cta-button" onClick={(e) => {e.preventDefault(); document.getElementById('partners').scrollIntoView({behavior: 'smooth'});}}>Partners</a>
        </div>
      </section>

      {/* Motto Banner */}
      <section className="section" style={{backgroundColor: '#B80000', padding: '30px 20px', textAlign: 'center'}}>
        <h2 style={{color: '#FFD700', fontSize: '1.8rem', margin: 0}}>Where stories come alive at Strathmore University</h2>
      </section>
    </div>
  );
}

export default Home;

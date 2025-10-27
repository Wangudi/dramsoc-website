import React, { useEffect } from 'react';

function Productions() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="productions">
      <section className="hero">
        <h1>Our Productions</h1>
        <p>Bringing Stories to Life on Stage</p>
      </section>

      <section className="section">
        <h2 style={{textAlign: 'center', marginBottom: '40px'}}>Upcoming & Recent Productions</h2>
        
        {/* The Waiting Room */}
        <div className="production-card" id="waiting-room">
          <h3>The Waiting Room</h3>
          
          {/* Image Gallery for The Waiting Room */}
          <div style={{marginBottom: '20px'}}>
            <img 
              src={process.env.PUBLIC_URL + '/images/The Waiting Room (7).jpg'} 
              alt="The Waiting Room"
              style={{width: '100%', maxWidth: '800px', height: 'auto', borderRadius: '8px', marginBottom: '10px'}}
            />
          </div>

          <h4>September 2025</h4>
          <p className="description">
            A powerful drama exploring the complexities of human relationships in extraordinary circumstances.
          </p>
          <p className="details">
            <strong>Director:</strong> Sarah Johnson<br />
            <strong>Venue:</strong> Main Stage, Drama Centre<br />
            <strong>Dates:</strong> September 15-20, 2025
          </p>
        </div>

        {/* The Homecoming */}
        <div className="production-card" id="homecoming">
          <h3>The Homecoming</h3>
          
          {/* Image Gallery for The Homecoming */}
          <div style={{marginBottom: '20px'}}>
            <img 
              src={process.env.PUBLIC_URL + '/images/The Homecoming (1).jpg'} 
              alt="The Homecoming"
              style={{width: '100%', maxWidth: '800px', height: 'auto', borderRadius: '8px', marginBottom: '10px'}}
            />
            <img 
              src={process.env.PUBLIC_URL + '/images/The Homecoming (1).png'} 
              alt="The Homecoming"
              style={{width: '100%', maxWidth: '800px', height: 'auto', borderRadius: '8px', marginBottom: '10px'}}
            />
            <img 
              src={process.env.PUBLIC_URL + '/images/The Homecoming (2).jpg'} 
              alt="The Homecoming"
              style={{width: '100%', maxWidth: '800px', height: 'auto', borderRadius: '8px', marginBottom: '10px'}}
            />
            <img 
              src={process.env.PUBLIC_URL + '/images/The Homecoming (3).jpg'} 
              alt="The Homecoming"
              style={{width: '100%', maxWidth: '800px', height: 'auto', borderRadius: '8px', marginBottom: '10px'}}
            />
            <img 
              src={process.env.PUBLIC_URL + '/images/The Homecoming (4).jpg'} 
              alt="The Homecoming"
              style={{width: '100%', maxWidth: '800px', height: 'auto', borderRadius: '8px', marginBottom: '10px'}}
            />
            <img 
              src={process.env.PUBLIC_URL + '/images/The Homecoming (5).jpg'} 
              alt="The Homecoming"
              style={{width: '100%', maxWidth: '800px', height: 'auto', borderRadius: '8px', marginBottom: '10px'}}
            />
            <img 
              src={process.env.PUBLIC_URL + '/images/The Homecoming (6).jpg'} 
              alt="The Homecoming"
              style={{width: '100%', maxWidth: '800px', height: 'auto', borderRadius: '8px', marginBottom: '10px'}}
            />
          </div>

          <h4>May 2025</h4>
          <p className="description">
            A critically acclaimed production of Harold Pinter's masterpiece.
          </p>
        </div>

        {/* The Samaritan */}
        <div className="production-card" id="samaritan">
          <h3>The Samaritan</h3>
          
          {/* Image Gallery for The Samaritan */}
          <div style={{marginBottom: '20px'}}>
            <img 
              src={process.env.PUBLIC_URL + '/images/The Samaritan (6).jpg'} 
              alt="The Samaritan"
              style={{width: '100%', maxWidth: '800px', height: 'auto', borderRadius: '8px', marginBottom: '10px'}}
            />
          </div>

          <h4>Previous Production</h4>
          <p className="description">
            A compelling exploration of morality and redemption.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Productions;

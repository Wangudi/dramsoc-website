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
              src={process.env.PUBLIC_URL + '/images/(7).jpg'} 
              alt="The Waiting Room"
              style={{width: '100%', maxWidth: '800px', height: 'auto', borderRadius: '8px', marginBottom: '10px'}}
            />
          </div>

          <h4>September 2025</h4>
          <p><strong>Playwright:</strong> Martin Abuya</p>
          <p><strong>Director:</strong> Nick Muthama</p>
          <p><strong>Genre:</strong> Dramatic Comedy (Dramedy)</p>
          <p><strong>Run Time:</strong> 1 Hour 45 Minutes</p>
          <p><strong>Synopsis:</strong> In a chaotic hospital waiting room, tensions mount as anxious relatives await news about a critically injured patriarch. Secrets unravel, misunderstandings abound, and comedic yet dramatic confrontations ensue. Amidst the chaos, unexpected twists reveal hidden lives and shocking truths, weaving a thrilling tale of identity, deception, and the unpredictable nature of family bonds.</p>
          <p><strong>Themes:</strong> Family Dynamics, Identity, Deception, Healthcare System, Social Commentary, Human Nature</p>
          <p><strong>Why Watch:</strong> This original production promises to be a thought-provoking exploration of family, healthcare, and the unexpected revelations that emerge in moments of crisis. With stunning performances, sharp dialogue, and a script that masterfully balances comedy and drama, this is theatrical storytelling at its finest.</p>
        </div>

        {/* The Homecoming */}
        <div className="production-card" id="homecoming">
          <h3>The Homecoming</h3>
          
          {/* Image Gallery for The Homecoming */}
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px', marginBottom: '20px'}}>
            <img 
              src={process.env.PUBLIC_URL + '/images/(1).jpg'} 
              alt="The Homecoming 1"
              style={{width: '100%', height: 'auto', borderRadius: '8px'}}
            />
            <img 
              src={process.env.PUBLIC_URL + '/images/(1).png'} 
              alt="The Homecoming 2"
              style={{width: '100%', height: 'auto', borderRadius: '8px'}}
            />
            <img 
              src={process.env.PUBLIC_URL + '/images/(2).jpg'} 
              alt="The Homecoming 3"
              style={{width: '100%', height: 'auto', borderRadius: '8px'}}
            />
            <img 
              src={process.env.PUBLIC_URL + '/images/(3).jpg'} 
              alt="The Homecoming 4"
              style={{width: '100%', height: 'auto', borderRadius: '8px'}}
            />
            <img 
              src={process.env.PUBLIC_URL + '/images/(4).jpg'} 
              alt="The Homecoming 5"
              style={{width: '100%', height: 'auto', borderRadius: '8px'}}
            />
            <img 
              src={process.env.PUBLIC_URL + '/images/(5).jpg'} 
              alt="The Homecoming 6"
              style={{width: '100%', height: 'auto', borderRadius: '8px'}}
            />
            <img 
              src={process.env.PUBLIC_URL + '/images/(6).jpg'} 
              alt="The Homecoming 7"
              style={{width: '100%', height: 'auto', borderRadius: '8px'}}
            />
          </div>

          <h4>April 2025</h4>
          <p><strong>Playwright:</strong> Martin Abuya</p>
          <p><strong>Director:</strong> Nick Muthama</p>
          <p><strong>Genre:</strong> Tragic Comedy</p>
          <p><strong>Synopsis:</strong> When three adult children return home for what they believe is a family reunion, they discover their father has passed away just days before. Set in Mrs. Talai's house on the outskirts of Nairobi, this powerful drama explores grief, regret, and the complex relationships between parents and children who have drifted apart. As secrets are revealed and old wounds reopened, the family must confront uncomfortable truths about love, duty, and what it means to truly come home.</p>
          <p><strong>Themes:</strong> Family, Grief, Reconciliation, Parent-Child Relationships, Homecoming, Regret, Forgiveness, Identity</p>
          <p><strong>Why Watch:</strong> This original Kenyan production captures the universal experience of family dynamics while being deeply rooted in contemporary African life. With its blend of tragedy and comedy, the play offers both laughter and tears, creating a deeply moving theatrical experience that resonates with anyone who has ever struggled with family expectations and the meaning of home.</p>
        </div>
      </section>

      <section className="section" style={{backgroundColor: '#1a1a1a', padding: '60px 20px'}}>
        <h2>Production Archive</h2>
        <p style={{textAlign: 'center', fontSize: '1.2rem'}}>These are just our most recent productions. DRAMSOC has staged over 50 productions throughout our history, covering everything from Shakespearean classics to contemporary African theatre, from absurdist drama to musical theatre.</p>
        <p style={{textAlign: 'center', marginTop: '20px', color: '#FFD700'}}>Older productions will be archived here with photos, cast information, and production notes.</p>
      </section>

      <section className="section">
        <h2>Get Involved</h2>
        <p style={{textAlign: 'center', fontSize: '1.2rem'}}>Want to be part of our next production? Whether you dream of being on stage, behind the scenes, or anywhere in between, DRAMSOC welcomes all passionate theatre lovers.</p>
        <p style={{textAlign: 'center', marginTop: '20px'}}><a href="/join" className="cta-button">Join DRAMSOC</a></p>
      </section>
    </div>
  );
}

export default Productions;

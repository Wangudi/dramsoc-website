import React from 'react';

function Articles() {
  return (
    <div className="articles">
      <section className="hero">
        <h1>Articles & Updates</h1>
        <p>Stories from Behind the Curtain</p>
      </section>

      <section className="section">
        <p style={{textAlign: 'center', fontSize: '1.2rem', marginBottom: '40px'}}>Dive into the world of DRAMSOC through our articles, interviews, behind-the-scenes stories, and society updates. Discover the creative process, meet our members, and stay connected with everything happening in the Strathmore theatre community.</p>
        
        <h2>Featured Articles</h2>
        <div className="card-grid">
          <div className="card">
            <p style={{color: '#FFD700', marginBottom: '10px'}}><strong>Behind the Scenes</strong></p>
            <h3>Building The Waiting Room: A Technical Journey</h3>
            <p><em>Coming Soon</em></p>
            <p>An in-depth look at the technical challenges and creative solutions that bring our mysterious waiting room to life on stage. From set design to atmospheric lighting, discover how our technical team creates theatrical magic.</p>
          </div>

          <div className="card">
            <p style={{color: '#FFD700', marginBottom: '10px'}}><strong>Actor's Journal</strong></p>
            <h3>Preparing for Pinter: An Actor's Perspective on The Homecoming</h3>
            <p><em>Coming Soon</em></p>
            <p>Cast members share their experiences tackling Harold Pinter's complex characters, mastering the famous Pinter pauses, and navigating the psychological intensity of The Homecoming.</p>
          </div>

          <div className="card">
            <p style={{color: '#FFD700', marginBottom: '10px'}}><strong>Director's Corner</strong></p>
            <h3>Vision and Reality: Directing African Theatre at Strathmore</h3>
            <p><em>Coming Soon</em></p>
            <p>Our directors discuss their artistic vision, the challenges of bringing scripts to life, and how they balance creative innovation with theatrical tradition in their work.</p>
          </div>

          <div className="card">
            <p style={{color: '#FFD700', marginBottom: '10px'}}><strong>Society News</strong></p>
            <h3>DRAMSOC Community Outreach: Impact at Alice Children's Home</h3>
            <p><em>Recent Update</em></p>
            <p>Read about our recent visit to Alice Children's Home, where DRAMSOC members conducted drama therapy workshops and interactive sessions. Discover how theatre brings joy and healing to children in need.</p>
          </div>

          <div className="card">
            <p style={{color: '#FFD700', marginBottom: '10px'}}><strong>Interviews</strong></p>
            <h3>Where Are They Now? Catching Up with DRAMSOC Alumni</h3>
            <p><em>Coming Soon</em></p>
            <p>Exclusive interviews with DRAMSOC alumni who have gone on to successful careers in theatre, film, television, and beyond. Learn how their DRAMSOC experience shaped their professional journey.</p>
          </div>

          <div className="card">
            <p style={{color: '#FFD700', marginBottom: '10px'}}><strong>Creative Features</strong></p>
            <h3>The Art of Stage Combat: Safety Meets Spectacle</h3>
            <p><em>Coming Soon</em></p>
            <p>A deep dive into how DRAMSOC approaches stage combat, choreographs fight scenes, and ensures actor safety while delivering thrilling performances that captivate audiences.</p>
          </div>
        </div>
      </section>

      <section className="section" style={{backgroundColor: '#1a1a1a', padding: '60px 20px'}}>
        <h2>Article Categories</h2>
        <div className="card-grid">
          <div className="card">
            <h3>Behind the Scenes</h3>
            <p>Explore the technical and creative processes that happen before the curtain rises. From set construction to costume design, lighting plots to sound cues, discover the artistry behind theatrical magic.</p>
          </div>

          <div className="card">
            <h3>Actor's Journal</h3>
            <p>Personal reflections from our cast members on their characters, rehearsal experiences, performance anxieties, triumphant moments, and the transformative power of embodying different lives on stage.</p>
          </div>

          <div className="card">
            <h3>Director's Corner</h3>
            <p>Insights from directors on artistic vision, script interpretation, casting decisions, working with actors, coordinating departments, and bringing theatrical visions to life on the Strathmore stage.</p>
          </div>

          <div className="card">
            <h3>Society News</h3>
            <p>Latest updates on DRAMSOC activities, upcoming auditions, production announcements, community outreach initiatives, awards and recognition, member achievements, and society developments.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Stay Updated</h2>
        <p style={{textAlign: 'center', fontSize: '1.2rem', marginBottom: '30px'}}>New articles and updates are published regularly on our social media channels and website. Follow us to stay connected with the latest DRAMSOC stories, news, and creative content.</p>
        
        <div style={{textAlign: 'center', display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '40px'}}>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="cta-button">Instagram</a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="cta-button">YouTube</a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="cta-button">TikTok</a>
        </div>
      </section>

      <section className="section" style={{backgroundColor: '#B80000', padding: '60px 20px'}}>
        <h2 style={{color: '#FFD700'}}>Contribute Your Story</h2>
        <p style={{color: 'white', textAlign: 'center', fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto'}}>Are you a DRAMSOC member with a story to tell? We welcome article contributions from cast members, crew, directors, and anyone involved in our productions. Share your experiences, insights, and creative perspectives with the DRAMSOC community.</p>
        <p style={{textAlign: 'center', marginTop: '30px'}}><a href="/contact" className="cta-button" style={{backgroundColor: '#FFD700', color: '#111111'}}>Contact Us</a></p>
      </section>
    </div>
  );
}

export default Articles;

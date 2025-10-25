import React from 'react';

function Team() {
  return (
    <div className="team">
      <section className="hero">
        <h1>Our Team</h1>
        <p>The Passionate Leaders Behind DRAMSOC</p>
      </section>

      <section className="section">
        <h2>Leadership Team 2024/2025</h2>
        <p style={{textAlign: 'center', fontSize: '1.2rem', marginBottom: '40px'}}>Meet the dedicated leaders who guide DRAMSOC towards excellence in theatrical arts, foster community, and ensure every production reaches its full potential.</p>
        
        <div className="team-grid">
          <div className="team-member">
            <div style={{width: '200px', height: '200px', margin: '0 auto 20px', backgroundColor: '#B80000', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem', color: '#FFD700'}}>DK</div>
            <h3>Dan Kakuru</h3>
            <p>President</p>
            <p style={{color: '#CCCCCC', marginTop: '15px'}}>Dan leads DRAMSOC with vision and dedication, overseeing all society operations, representing DRAMSOC to the university and external partners, and ensuring the society's strategic direction aligns with our mission of theatrical excellence.</p>
          </div>

          <div className="team-member">
            <div style={{width: '200px', height: '200px', margin: '0 auto 20px', backgroundColor: '#B80000', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem', color: '#FFD700'}}>LK</div>
            <h3>Leila Kaisa</h3>
            <p>Vice President</p>
            <p style={{color: '#CCCCCC', marginTop: '15px'}}>Leila supports the President in all activities, steps in during absences, and plays a crucial role in member engagement and community building. She ensures smooth operations and maintains the vibrant DRAMSOC culture.</p>
          </div>

          <div className="team-member">
            <div style={{width: '200px', height: '200px', margin: '0 auto 20px', backgroundColor: '#B80000', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem', color: '#FFD700'}}>JA</div>
            <h3>Joe Abala</h3>
            <p>Organizing Secretary General</p>
            <p style={{color: '#CCCCCC', marginTop: '15px'}}>Joe manages all organizational aspects, coordinates meetings and events, maintains member records, and ensures efficient communication within the society. His organizational skills keep DRAMSOC running smoothly.</p>
          </div>

          <div className="team-member">
            <div style={{width: '200px', height: '200px', margin: '0 auto 20px', backgroundColor: '#B80000', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem', color: '#FFD700'}}>CC</div>
            <h3>Cherise Chomba</h3>
            <p>Secretary General</p>
            <p style={{color: '#CCCCCC', marginTop: '15px'}}>Cherise handles correspondence, documentation, and administrative duties. She maintains society records, prepares meeting minutes, and ensures all documentation supports DRAMSOC's professional operations.</p>
          </div>

          <div className="team-member">
            <div style={{width: '200px', height: '200px', margin: '0 auto 20px', backgroundColor: '#B80000', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem', color: '#FFD700'}}>PN</div>
            <h3>Paula Nimurungi</h3>
            <p>Financial Manager</p>
            <p style={{color: '#CCCCCC', marginTop: '15px'}}>Paula oversees all financial matters, manages budgets, handles fundraising initiatives, and ensures fiscal responsibility. Her financial acumen enables DRAMSOC to bring ambitious productions to life sustainably.</p>
          </div>
        </div>
      </section>

      <section className="section" style={{backgroundColor: '#1a1a1a', padding: '60px 20px'}}>
        <h2>Production Team</h2>
        <p style={{textAlign: 'center', fontSize: '1.2rem', marginBottom: '40px'}}>Every production features a dedicated creative and technical team assembled specifically for that show. Our production teams typically include:</p>
        
        <div className="card-grid">
          <div className="card">
            <h3>Director</h3>
            <p>The artistic visionary who interprets the script, guides actors, coordinates all creative elements, and shapes the overall production. Directors work closely with all departments to realize their creative vision.</p>
          </div>

          <div className="card">
            <h3>Stage Manager</h3>
            <p>The organizational backbone of any production, managing rehearsals, calling cues during performances, coordinating backstage operations, and ensuring everything runs smoothly from tech week through closing night.</p>
          </div>

          <div className="card">
            <h3>Cast</h3>
            <p>Our talented actors who breathe life into characters, undergo rigorous rehearsals, develop chemistry as an ensemble, and deliver powerful performances that captivate audiences night after night.</p>
          </div>

          <div className="card">
            <h3>Technical Crew</h3>
            <p>The skilled technicians managing lighting, sound, set construction, props, and special effects. They create the physical and atmospheric world that supports the storytelling and enhances the audience experience.</p>
          </div>

          <div className="card">
            <h3>Costume & Makeup Team</h3>
            <p>Artists who design and create costumes, apply makeup, manage wardrobe, and handle quick changes. They transform actors into characters through visual storytelling and period-appropriate styling.</p>
          </div>

          <div className="card">
            <h3>PR & Marketing Team</h3>
            <p>The publicity force behind every show, creating promotional materials, managing social media campaigns, engaging audiences, documenting the production process, and ensuring strong ticket sales.</p>
          </div>
        </div>

        <p style={{textAlign: 'center', marginTop: '40px', fontSize: '1.1rem', fontStyle: 'italic', color: '#FFD700'}}>Production teams are announced for each show. Check our social media and articles section for updates on upcoming productions and their creative teams!</p>
      </section>

      <section className="section">
        <h2>Behind the Scenes</h2>
        <p style={{textAlign: 'center', fontSize: '1.2rem', marginBottom: '40px'}}>DRAMSOC wouldn't exist without the countless hours of work from our dedicated members. From late-night rehearsals to early-morning set builds, from costume fittings to lighting plots, every member contributes their unique talents to create theatrical magic.</p>
        
        <div style={{textAlign: 'center', padding: '40px 20px', backgroundColor: '#B80000', borderRadius: '10px', marginTop: '40px'}}>
          <h3 style={{color: '#FFD700', fontSize: '2rem', marginBottom: '20px'}}>Want to Be Part of the Team?</h3>
          <p style={{color: 'white', fontSize: '1.2rem', marginBottom: '30px'}}>Whether you dream of performing on stage, directing productions, managing technical elements, or supporting behind the scenes, DRAMSOC has a place for you. Join us and discover your theatrical passion!</p>
          <a href="/join" className="cta-button" style={{backgroundColor: '#FFD700', color: '#111111'}}>Join DRAMSOC Today</a>
        </div>
      </section>

      <section className="section">
        <h2>Alumni Success Stories</h2>
        <p style={{textAlign: 'center', fontSize: '1.1rem'}}>Many of our former team members and leaders have gone on to successful careers in theatre, film, television, media, and various professional fields. The leadership, communication, and collaboration skills developed in DRAMSOC translate to success in any career.</p>
        <p style={{textAlign: 'center', marginTop: '20px'}}><a href="/alumni" className="cta-button">Meet Our Alumni</a></p>
      </section>
    </div>
  );
}

export default Team;

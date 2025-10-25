import React from 'react';

function Alumni() {
  return (
    <div className="alumni">
      <section className="hero">
        <h1>Our Alumni</h1>
        <p>Where Are They Now?</p>
      </section>

      <section className="section">
        <p style={{textAlign: 'center', fontSize: '1.2rem', marginBottom: '40px'}}>DRAMSOC alumni have gone on to achieve remarkable success in theatre, film, television, media, business, law, education, and countless other fields. The skills developed through drama - confidence, communication, collaboration, creativity, and critical thinking - translate powerfully to any career path.</p>
        
        <h2>Notable Alumni Success Stories</h2>
        <div className="card-grid">
          <div className="card">
            <h3>Film & Television</h3>
            <p>Several of our alumni have pursued successful careers in the film and television industry, working as actors, directors, producers, cinematographers, and screenwriters. They've appeared in local and international productions, bringing the storytelling skills honed at DRAMSOC to screens around the world.</p>
          </div>

          <div className="card">
            <h3>Theatre & Performing Arts</h3>
            <p>Many DRAMSOC members have continued in professional theatre, working with major theatre companies, directing acclaimed productions, teaching drama, and establishing their own theatre groups. They carry forward the spirit of excellence and innovation that defines DRAMSOC.</p>
          </div>

          <div className="card">
            <h3>Media & Communications</h3>
            <p>DRAMSOC's emphasis on communication and public performance has equipped alumni for success in journalism, public relations, broadcasting, content creation, and digital media. They're telling stories across multiple platforms and reaching audiences worldwide.</p>
          </div>

          <div className="card">
            <h3>Business & Leadership</h3>
            <p>The leadership, teamwork, and project management skills developed through theatre productions have proven invaluable in business. Alumni hold leadership positions in corporations, run successful businesses, and excel in diverse professional fields.</p>
          </div>

          <div className="card">
            <h3>Education & Arts Administration</h3>
            <p>Some alumni have become educators, teaching drama and theatre arts, inspiring the next generation of performers and storytellers. Others work in arts administration, managing cultural institutions and supporting the arts sector.</p>
          </div>

          <div className="card">
            <h3>Diverse Professional Fields</h3>
            <p>DRAMSOC alumni succeed in law, medicine, engineering, finance, diplomacy, and more. The confidence, public speaking skills, emotional intelligence, and creative problem-solving developed through drama are assets in any profession.</p>
          </div>
        </div>
      </section>

      <section className="section" style={{backgroundColor: '#B80000', padding: '60px 20px'}}>
        <h2 style={{color: '#FFD700'}}>Alumni Testimonials</h2>
        <p style={{color: 'white', textAlign: 'center', fontSize: '1.1rem', fontStyle: 'italic', maxWidth: '800px', margin: '0 auto'}}>"DRAMSOC wasn't just about acting - it was about discovering who I am, building lifelong friendships, and developing skills that have served me in every aspect of my life. The confidence I gained on stage translated directly to confidence in boardrooms, presentations, and leadership roles."</p>
        <p style={{color: '#FFD700', textAlign: 'center', marginTop: '20px'}}>- A DRAMSOC Alumnus</p>
      </section>

      <section className="section">
        <h2>Alumni Network</h2>
        <p style={{textAlign: 'center', fontSize: '1.2rem'}}>DRAMSOC maintains a vibrant alumni network. Former members stay connected through social media, alumni events, mentorship programs, and by returning to support current productions. Our alumni community spans generations and continents, united by the shared experience of bringing stories to life on the Strathmore stage.</p>
        
        <div style={{marginTop: '40px', textAlign: 'center'}}>
          <h3 style={{color: '#FFD700', marginBottom: '20px'}}>Are You a DRAMSOC Alumnus?</h3>
          <p style={{fontSize: '1.1rem', marginBottom: '30px'}}>We'd love to hear from you! Share your story, stay connected with fellow alumni, and continue to be part of the DRAMSOC family. Your journey inspires current members and shows them the incredible possibilities that lie ahead.</p>
          <a href="https://forms.google.com" target="_blank" rel="noopener noreferrer" className="cta-button">Alumni Sign-Up Form</a>
        </div>
      </section>

      <section className="section" style={{backgroundColor: '#1a1a1a', padding: '60px 20px'}}>
        <h2>Give Back to DRAMSOC</h2>
        <p style={{textAlign: 'center', fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto'}}>Alumni support helps DRAMSOC continue its tradition of excellence. Whether through mentorship, guest workshops, sponsorship, or simply attending shows and cheering on current members, your involvement makes a difference. Consider:</p>
        <ul style={{maxWidth: '600px', margin: '30px auto', lineHeight: '1.8'}}>
          <li>Mentoring current DRAMSOC members</li>
          <li>Leading workshops in your area of expertise</li>
          <li>Sponsoring productions or scholarships</li>
          <li>Attending shows and supporting current work</li>
          <li>Sharing job opportunities and internships</li>
          <li>Guest speaking or directing</li>
        </ul>
        <p style={{textAlign: 'center', marginTop: '30px'}}><a href="/contact" className="cta-button">Contact Us</a></p>
      </section>
    </div>
  );
}

export default Alumni;

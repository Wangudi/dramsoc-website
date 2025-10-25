import React from 'react';

function About() {
  return (
    <div className="about">
      <section className="hero">
        <h1>About Strathmore Drama Society</h1>
        <p>Where Stories Come Alive at Strathmore University</p>
      </section>

      <section className="section">
        <h2>Who We Are</h2>
        <p>Strathmore Drama Society (DRAMSOC) is the premier theatrical organization at Strathmore University, dedicated to fostering artistic excellence, creative expression, and theatrical innovation. Since our inception, we have been the beating heart of dramatic arts at Strathmore, bringing together talented students, passionate mentors, and theatre enthusiasts to create unforgettable performances.</p>
        
        <div className="card-grid" style={{marginTop: '40px'}}>
          <div className="card">
            <h3 style={{color: '#FFD700'}}>Our Mission</h3>
            <p>To nurture theatrical talent, produce world-class productions, and use drama as a tool for education, entertainment, and social transformation within the Strathmore community and beyond.</p>
          </div>
          <div className="card">
            <h3 style={{color: '#FFD700'}}>Our Vision</h3>
            <p>To be East Africa's leading university drama society, recognized for excellence in theatrical productions, innovative storytelling, and developing the next generation of theatre practitioners and artists.</p>
          </div>
          <div className="card">
            <h3 style={{color: '#FFD700'}}>Our Motto</h3>
            <p style={{fontSize: '1.3rem', fontStyle: 'italic', color: '#B80000'}}>"Where Stories Come Alive"</p>
          </div>
        </div>
      </section>

      <section className="section" style={{backgroundColor: '#1a1a1a', padding: '60px 20px'}}>
        <h2>Our Core Values</h2>
        <div className="card-grid">
          <div className="card">
            <h3>Excellence</h3>
            <p>We strive for the highest standards in every production, from script selection to final performance.</p>
          </div>
          <div className="card">
            <h3>Creativity</h3>
            <p>We embrace innovation and encourage original thinking in all aspects of theatrical expression.</p>
          </div>
          <div className="card">
            <h3>Collaboration</h3>
            <p>We believe in the power of teamwork, bringing together diverse talents to create magical performances.</p>
          </div>
          <div className="card">
            <h3>Integrity</h3>
            <p>We maintain honesty, professionalism, and ethical standards in all our activities.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>What DRAMSOC Does</h2>
        <div className="card-grid">
          <div className="production-card">
            <h3>Productions</h3>
            <p>We stage multiple high-quality theatrical productions each academic year, ranging from classic plays to contemporary works, African theatre to experimental performances. Our productions showcase student talent in acting, directing, technical theatre, and design.</p>
          </div>
          <div className="production-card">
            <h3>Training & Development</h3>
            <p>We offer comprehensive training in acting techniques, stage management, technical theatre, scriptwriting, and directing. Regular workshops, masterclasses, and mentorship programs help members develop their theatrical skills and artistic vision.</p>
          </div>
          <div className="production-card">
            <h3>Community Outreach</h3>
            <p>We use theatre as a tool for social change, conducting outreach programs in schools, communities, and charitable institutions. Our initiatives include educational theatre, drama therapy sessions, and performances for underprivileged communities.</p>
          </div>
          <div className="production-card">
            <h3>Events & Showcases</h3>
            <p>Beyond major productions, we organize theatre festivals, script reading sessions, open mic nights, and collaborative events with other university societies and external theatre groups.</p>
          </div>
        </div>
      </section>

      <section className="section" style={{backgroundColor: '#B80000', padding: '60px 20px'}}>
        <h2 style={{color: '#FFD700'}}>Our Impact</h2>
        <p style={{color: 'white', fontSize: '1.2rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto'}}>DRAMSOC has produced numerous successful alumni who have gone on to pursue careers in theatre, film, television, and media. We have staged over 50 productions, trained hundreds of students in theatrical arts, and touched thousands of lives through our community outreach programs.</p>
        
        <div className="card" style={{marginTop: '40px', backgroundColor: '#FFD700', color: '#111111'}}>
          <h3 style={{color: '#B80000'}}>Community Service: Alice Children's Home</h3>
          <p>One of our proudest initiatives is our ongoing partnership with Alice Children's Home. Through regular visits, interactive drama sessions, and special performances, we bring joy, education, and creative expression to children in need. Our drama therapy workshops help children develop confidence, communication skills, and emotional expression through the power of theatrical play.</p>
        </div>
      </section>

      <section className="section">
        <h2>Join Our Story</h2>
        <p style={{textAlign: 'center', fontSize: '1.2rem'}}>Whether you're an aspiring actor, a technical wizard, a creative writer, or simply passionate about theatre, DRAMSOC welcomes you. Together, we create magic on stage and make stories come alive.</p>
      </section>
    </div>
  );
}

export default About;

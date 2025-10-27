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

  // Helper function to render images for a production
  const renderProductionImages = (productionName, knownImages = []) => {
    // If specific images are known to exist, use those
    if (knownImages.length > 0) {
      return knownImages.map((image, index) => (
        <img 
          key={index}
          src={process.env.PUBLIC_URL + `/images/${image}`} 
          alt={`${productionName} ${index + 1}`}
          style={{width: '100%', maxWidth: '800px', height: 'auto', borderRadius: '8px', marginBottom: '10px', display: 'block'}}
        />
      ));
    }

    return null;
  };

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
            {renderProductionImages('The Waiting Room', [
              'The Waiting Room (2).jpg',
              'The Waiting Room (3).jpg',
              'The Waiting Room (4).jpg',
              'The Waiting Room (5).jpg',
              'The Waiting Room (6).jpg',
              'The Waiting Room (7).jpg',
              'The Waiting Room (8).jpg',
              'The Waiting Room (9).jpg',
              'The Waiting Room (10).jpg',
              'The Waiting Room (11).jpg'
            ])}
          </div>
          
          <h4>September 2025</h4>
          <p>"The Waiting Room" is a gripping drama that explores the anxiety and anticipation felt by individuals in life's transitional moments. Set in a hospital waiting room, the play delves into the lives of strangers brought together by circumstance, each carrying their own hopes, fears, and secrets.</p>
          <p>Through powerful dialogue and compelling character development, this production examines themes of mortality, hope, human connection, and the shared experiences that bind us all. The intimate setting allows for raw, emotional performances that will leave audiences reflecting on their own life's waiting rooms.</p>
        </div>
        
        {/* The Samaritan */}
        <div className="production-card" id="samaritan">
          <h3>The Samaritan</h3>
          
          {/* Image Gallery for The Samaritan */}
          <div style={{marginBottom: '20px'}}>
            {renderProductionImages('The Samaritan', [
              'The Samaritan (1).jpg',
              'The Samaritan (2).jpg',
              'The Samaritan (3).jpg',
              'The Samaritan (4).jpg',
              'The Samaritan (5).jpg',
              'The Samaritan (6).jpg',
              'The Samaritan (7).jpg',
              'The Samaritan (8).jpg',
              'The Samaritan (9).jpg'
            ])}
          </div>
          
          <h4>November 2025</h4>
          <p>"The Samaritan" is John Lara's powerful contemporary drama that tackles corruption, moral decay, and the struggle for justice in modern society. This compelling play follows the story of individuals fighting against systemic corruption while grappling with their own moral choices.</p>
          <p>Through its intricate plot and well-developed characters, the play explores themes of integrity, redemption, and the price of standing up for what's right. Our production promises to deliver thought-provoking performances that will challenge audiences to examine their own values and the society we live in.</p>
        </div>
        
        {/* The Homecoming - Multiple Images */}
        <div className="production-card" id="homecoming">
          <h3>The Homecoming</h3>
          
          {/* Image Gallery for The Homecoming */}
          <div style={{marginBottom: '20px'}}>
            {renderProductionImages('The Homecoming', [
              'The Homecoming (1).jpg',
              'The Homecoming (2).jpg', 
              'The Homecoming (3).jpg',
              'The Homecoming (4).jpg',
              'The Homecoming (5).jpg',
              'The Homecoming (6).jpg'
            ])}
          </div>
          
          <h4>March 2024</h4>
          <p>"The Homecoming" is a powerful Kenyan play by acclaimed playwright Martin Abuya. This compelling drama explores the complexities of returning home after years away, examining themes of identity, family dynamics, and the tension between tradition and modernity in contemporary Kenyan society.</p>
          <p>Through authentic storytelling and rich character development, Abuya crafts a narrative that resonates with anyone who has experienced the bittersweet nature of homecoming. The play masterfully portrays the challenges of reconciling one's past with the present, making it a deeply moving theatrical experience that speaks to universal human experiences within a distinctly Kenyan context.</p>
        </div>
        
      </section>
    </div>
  );
}

export default Productions;

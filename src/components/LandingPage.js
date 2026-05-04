import React from 'react';

const LandingPage = ({ onEnter }) => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#2c3e50', textAlign: 'center' }}>
      {/* Hero Section */}
      <section style={{ backgroundColor: '#27ae60', color: 'white', padding: '60px 20px', borderRadius: '0 0 50px 50px' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>KIBO ECOSYSTEM</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto 30px' }}>
          Reclaiming the African Narrative through Technology, Character, and Skill. 
          The only platform where your education grows a digital legacy.
        </p>
        <button 
          onClick={onEnter} 
          style={{ padding: '15px 40px', fontSize: '1.2rem', backgroundColor: '#fff', color: '#27ae60', border: 'none', borderRadius: '30px', cursor: 'pointer', fontWeight: 'bold', boxShadow: '0 4px 15px rgba(0,0,0,0.2)' }}
        >
          ENTER THE ECOSYSTEM
        </button>
      </section>

      {/* Features Section */}
      <section style={{ padding: '50px 20px', display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
        <div style={cardStyle}>
          <h3>📚 Academics</h3>
          <p>Automated CBT, CA1/CA2, and curriculum-synced notes for every grade.</p>
        </div>
        <div style={cardStyle}>
          <h3>🛠️ Tech Skills</h3>
          <p>Master the keyboard, mouse, coding, and hardware repairs with Fundi AI.</p>
        </div>
        <div style={cardStyle}>
          <h3>🌳 The Growth Tree</h3>
          <p>Visualise your potential. Every lesson you finish makes your tree flourish.</p>
        </div>
        <div style={cardStyle}>
          <h3>📜 Character</h3>
          <p>Moral stories and life training designed to build integrity and grit.</p>
        </div>
      </section>

      {/* Proprietor Message */}
      <footer style={{ background: '#ecf0f1', padding: '40px 20px', marginTop: '40px' }}>
        <h4>Are you a School Owner?</h4>
        <p>Digitize your institution today. Contact us for white-labeling and fee-gate setup.</p>
        <p style={{ fontSize: '0.8rem' }}>&copy; 2024 KIBO EdTech Thrive Platform</p>
      </footer>
    </div>
  );
};

const cardStyle = {
  width: '200px',
  padding: '20px',
  borderRadius: '15px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  background: '#fff',
  borderTop: '5px solid #27ae60'
};

export default LandingPage;

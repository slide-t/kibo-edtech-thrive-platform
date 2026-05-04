import React, { useState } from 'react';

const ProprietorRegister = ({ onBack }) => {
  const [formData, setFormData] = useState({
    schoolName: '',
    proprietorName: '',
    email: '',
    phone: '',
    studentCount: '',
    location: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic: In live mode, this saves to Firebase 'prospects' collection
    console.log("New Prospect Registered:", formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h2 style={{ color: '#27ae60' }}>Registration Successful! ✅</h2>
        <p>Thank you, {formData.proprietorName}. The KIBO Vanguard team will contact you within 24 hours to begin your school's digital transformation.</p>
        <button onClick={onBack} style={btnStyle}>Back to Home</button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '500px', margin: '40px auto', padding: '30px', background: '#fff', borderRadius: '15px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}>
      <button onClick={onBack} style={{ float: 'left', border: 'none', background: 'none', cursor: 'pointer', color: '#7f8c8d' }}>← Back</button>
      <h2 style={{ color: '#2c3e50', marginBottom: '20px' }}>Register Your School</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px', textAlign: 'left' }}>
        <label>School Name</label>
        <input type="text" required style={inputStyle} onChange={(e) => setFormData({...formData, schoolName: e.target.value})} />
        
        <label>Proprietor/Director Name</label>
        <input type="text" required style={inputStyle} onChange={(e) => setFormData({...formData, proprietorName: e.target.value})} />
        
        <label>Work Email</label>
        <input type="email" required style={inputStyle} onChange={(e) => setFormData({...formData, email: e.target.value})} />
        
        <label>Phone Number</label>
        <input type="tel" required style={inputStyle} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
        
        <label>Estimated Student Population</label>
        <input type="number" required style={inputStyle} onChange={(e) => setFormData({...formData, studentCount: e.target.value})} />

        <button type="submit" style={submitBtnStyle}>Join the Founding 50</button>
      </form>
    </div>
  );
};

const inputStyle = { padding: '10px', borderRadius: '5px', border: '1px solid #ddd', fontSize: '1rem' };
const btnStyle = { padding: '10px 20px', marginTop: '20px', cursor: 'pointer', backgroundColor: '#27ae60', color: 'white', border: 'none', borderRadius: '5px' };
const submitBtnStyle = { ...btnStyle, padding: '15px', fontSize: '1.1rem', fontWeight: 'bold' };

export default ProprietorRegister;

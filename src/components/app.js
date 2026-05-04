import React, { useState } from 'react';
import LandingPage from './components/LandingPage'; // Import the new Landing Page
import GrowthTree from './components/GrowthTree';
import KeyboardGame from './components/KeyboardGame';
import MousePrecision from './components/MousePrecision';
import CBTPlayer from './components/CBTPlayer';
import FundiChat from './components/FundiChat';

const sampleExam = {
  subject: "Basic Technology", type: "CA 1", class: "JSS 3", timeLimit: 5,
  questions: [
    { q: "What is the primary brain of the computer?", options: ["RAM", "CPU", "Hard Drive", "Monitor"], correct: 1 },
    { q: "Which tool is used for driving nails?", options: ["Saw", "Pliers", "Hammer", "Spanner"], correct: 2 }
  ]
};

function App() {
  const [userXp, setUserXp] = useState(100);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // New state to check if user entered
  const [activeTab, setActiveTab] = useState('tree');

  const addXp = (amount) => {
    setUserXp(prev => prev + amount);
    setActiveTab('tree');
  };

  const handleCBTFinish = (score) => {
    let earnedXp = score >= 70 ? 100 : score >= 40 ? 50 : 0;
    addXp(earnedXp);
    alert(`Exam Finished! You scored ${score}% and earned ${earnedXp} XP.`);
  };

  // IF NOT LOGGED IN, SHOW LANDING PAGE
  if (!isLoggedIn) {
    return <LandingPage onEnter={() => setIsLoggedIn(true)} />;
  }

  // IF LOGGED IN, SHOW THE DASHBOARD
  return (
    <div style={{ padding: '20px', maxWidth: '900px', margin: 'auto', textAlign: 'center', fontFamily: 'Arial' }}>
      <header style={{ marginBottom: '30px', borderBottom: '2px solid #3498db', paddingBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ color: '#2c3e50', margin: 0 }}>KIBO</h1>
        <nav>
          <button onClick={() => setActiveTab('tree')}>🌳 Tree</button>
          <button onClick={() => setActiveTab('keyboard')}>⌨️ Typing</button>
          <button onClick={() => setActiveTab('mouse')}>🖱️ Mouse</button>
          <button onClick={() => setActiveTab('cbt')}>📝 Exam</button>
          <button onClick={() => setActiveTab('fundi')}>🛠️ Fundi AI</button>
          <button onClick={() => setIsLoggedIn(false)} style={{backgroundColor: '#e74c3c', color: 'white', marginLeft: '10px'}}>Logout</button>
        </nav>
      </header>

      {activeTab === 'tree' && (
        <div>
          <h2>Level: {Math.floor(userXp / 500) + 1} | XP: {userXp}</h2>
          <GrowthTree xp={userXp} lastActive={Date.now()} />
        </div>
      )}

      {activeTab === 'keyboard' && <KeyboardGame onGameComplete={addXp} />}
      {activeTab === 'mouse' && <MousePrecision onGameComplete={addXp} />}
      {activeTab === 'cbt' && <CBTPlayer examData={sampleExam} onFinish={handleCBTFinish} />}
      {activeTab === 'fundi' && <FundiChat />}
      
    </div>
  );
}

export default App;

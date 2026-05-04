import React, { useState } from 'react';
// --- ZONE 1: IMPORTS ---
import GrowthTree from './components/GrowthTree';
import KeyboardGame from './components/KeyboardGame';
import MousePrecision from './components/MousePrecision';
import CBTPlayer from './components/CBTPlayer';

// This is a "Fake" exam for your demo
const sampleExam = {
  subject: "Basic Technology",
  type: "CA 1",
  class: "JSS 3",
  timeLimit: 5,
  questions: [
    { q: "What is the primary brain of the computer?", options: ["RAM", "CPU", "Hard Drive", "Monitor"], correct: 1 },
    { q: "Which tool is used for driving nails?", options: ["Saw", "Pliers", "Hammer", "Spanner"], correct: 2 }
  ]
};

function App() {
  // --- ZONE 2: LOGIC ---
  const [userXp, setUserXp] = useState(100);
  const [activeTab, setActiveTab] = useState('tree'); // Controls what is on screen

  const addXp = (amount) => {
    setUserXp(prev => prev + amount);
    setActiveTab('tree'); // Take them back to see the tree grow
  };

  const handleCBTFinish = (score) => {
    let earnedXp = score >= 70 ? 100 : score >= 40 ? 50 : 0;
    addXp(earnedXp);
    alert(`Exam Finished! You scored ${score}% and earned ${earnedXp} XP.`);
  };

  // --- ZONE 3: DISPLAY ---
  return (
    <div style={{ padding: '20px', maxWidth: '900px', margin: 'auto', textAlign: 'center', fontFamily: 'Arial' }}>
      <header style={{ marginBottom: '30px', borderBottom: '2px solid #3498db', paddingBottom: '10px' }}>
        <h1 style={{ color: '#2c3e50' }}>KIBO ECOSYSTEM</h1>
        <nav>
          <button onClick={() => setActiveTab('tree')}>🌳 My Tree</button>
          <button onClick={() => setActiveTab('keyboard')}>⌨️ Typing</button>
          <button onClick={() => setActiveTab('mouse')}>🖱️ Mouse Lab</button>
          <button onClick={() => setActiveTab('cbt')}>📝 Take Exam</button>
        </nav>
      </header>

      {/* Logic to switch between screens */}
      {activeTab === 'tree' && (
        <div>
          <h2>Level: {Math.floor(userXp / 500) + 1} | Total XP: {userXp}</h2>
          <GrowthTree xp={userXp} lastActive={Date.now()} />
        </div>
      )}

      {activeTab === 'keyboard' && <KeyboardGame onGameComplete={addXp} />}

      {activeTab === 'mouse' && <MousePrecision onGameComplete={addXp} />}

      {activeTab === 'cbt' && <CBTPlayer examData={sampleExam} onFinish={handleCBTFinish} />}
      
    </div>
  );
}

export default App;

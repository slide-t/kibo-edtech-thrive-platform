import React, { useState } from 'react';
import GrowthTree from './components/GrowthTree';
import KeyboardGame from './components/KeyboardGame';

function App() {
  const [userXp, setUserXp] = useState(100); // Starting XP

  const handleGameComplete = (earnedXp) => {
    setUserXp(prev => prev + earnedXp); // Add XP to the tree!
    alert(`Brilliant! You earned ${earnedXp} XP and your tree just grew!`);
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h1>KIBO Ecosystem Staging</h1>
      
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
        {/* The Visual Growth */}
        <GrowthTree xp={userXp} lastActive={Date.now()} />

        {/* The Action/Task */}
        <KeyboardGame onGameComplete={handleGameComplete} />
      </div>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import GrowthTree from './components/GrowthTree';
import KeyboardGame from './components/KeyboardGame';
import MousePrecision from './components/MousePrecision';

function App() {
  const [userXp, setUserXp] = useState(100);
  const [activeTab, setActiveTab] = useState('tree');

  const addXp = (amount) => {
    setUserXp(prev => prev + amount);
    setActiveTab('tree'); // Return to tree to see growth
  };

  return (
    <div style={{ padding: '20px', maxWidth: '900px', margin: 'auto', textAlign: 'center' }}>
      <header style={{ marginBottom: '30px', borderBottom: '2px solid #eee', paddingBottom: '10px' }}>
        <h1 style={{ color: '#2c3e50' }}>KIBO ECOSYSTEM <span style={{fontSize: '0.5em'}}>v1.0 Staging</span></h1>
        <nav>
          <button onClick={() => setActiveTab('tree')}>My Growth Tree</button>
          <button onClick={() => setActiveTab('keyboard')}>Keyboard Quest</button>
          <button onClick={() => setActiveTab('mouse')}>Mouse Lab</button>
        </nav>
      </header>

      {activeTab === 'tree' && (
        <div className="fade-in">
          <h2>Total Experience: {userXp} XP</h2>
          <GrowthTree xp={userXp} lastActive={Date.now()} />
        </div>
      )}

      {activeTab === 'keyboard' && (
        <KeyboardGame onGameComplete={addXp} />
      )}

      {activeTab === 'mouse' && (
        <MousePrecision onGameComplete={addXp} />
      )}
    </div>
  );
}

export default App;

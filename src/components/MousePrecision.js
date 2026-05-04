import React, { useState, useEffect } from 'react';

const MousePrecision = ({ onGameComplete }) => {
  const [target, setTarget] = useState({ x: 50, y: 50, name: 'RAM' });
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(20); // 20-second sprint
  const [isActive, setIsActive] = useState(false);

  const hardwareParts = ['RAM', 'CPU', 'SSD', 'GPU', 'Motherboard', 'Power Supply'];

  const spawnTarget = () => {
    const newX = Math.floor(Math.random() * 80) + 10; // Stay within bounds
    const newY = Math.floor(Math.random() * 80) + 10;
    const newName = hardwareParts[Math.floor(Math.random() * hardwareParts.length)];
    setTarget({ x: newX, y: newY, name: newName });
  };

  useEffect(() => {
    let timer;
    if (isActive && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
      onGameComplete(score * 5); // Convert score to XP
    }
    return () => clearInterval(timer);
  }, [isActive, timeLeft]);

  const handleTargetClick = () => {
    setScore(prev => prev + 1);
    spawnTarget();
  };

  return (
    <div className="game-area" style={{ 
      width: '400px', height: '400px', border: '3px solid #3498db', 
      position: 'relative', borderRadius: '20px', backgroundColor: '#ecf0f1', overflow: 'hidden' 
    }}>
      {!isActive ? (
        <div style={{ textAlign: 'center', marginTop: '150px' }}>
          <h3>🎯 Mouse Precision Lab</h3>
          <button onClick={() => {setIsActive(true); setTimeLeft(20); setScore(0);}} style={{
            padding: '10px 20px', backgroundColor: '#3498db', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer'
          }}>Start Harvesting</button>
        </div>
      ) : (
        <>
          <div style={{ position: 'absolute', top: '10px', left: '10px' }}>Time: {timeLeft}s | Score: {score}</div>
          <div 
            onClick={handleTargetClick}
            style={{
              position: 'absolute', top: `${target.y}%`, left: `${target.x}%`,
              width: '60px', height: '60px', backgroundColor: '#e67e22', color: 'white',
              borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', fontSize: '10px', fontWeight: 'bold', boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
            }}>
            {target.name}
          </div>
        </>
      )}
    </div>
  );
};

export default MousePrecision;

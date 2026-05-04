import React, { useState, useEffect } from 'react';

const KeyboardGame = ({ onGameComplete }) => {
  const [textToType] = useState("Integrity is the foundation of lasting wealth.");
  const [userInput, setUserInput] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [wpm, setWpm] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    if (!startTime) setStartTime(Date.now()); // Start timer on first keypress
    
    setUserInput(value);

    // Check if finished
    if (value === textToType) {
      const timeTaken = (Date.now() - startTime) / 1000 / 60; // in minutes
      const calculatedWpm = Math.round(textToType.split(' ').length / timeTaken);
      setWpm(calculatedWpm);
      setIsFinished(true);
      
      // Send XP to the Boss (Main App)
      if (onGameComplete) onGameComplete(calculatedWpm * 10); 
    }
  };

  return (
    <div className="game-card" style={{ padding: '20px', border: '2px solid #ccc', borderRadius: '15px', background: '#f9f9f9' }}>
      <h3>⚔️ Keyboard Quest: Integrity Sprint</h3>
      <p style={{ fontSize: '1.2rem', fontStyle: 'italic', color: '#555' }}>
        " {textToType} "
      </p>
      
      {!isFinished ? (
        <input
          type="text"
          value={userInput}
          onChange={handleChange}
          placeholder="Start typing here..."
          style={{ width: '90%', padding: '10px', fontSize: '1rem', borderRadius: '5px' }}
        />
      ) : (
        <div style={{ textAlign: 'center', color: 'green' }}>
          <h4>🎉 Level Complete!</h4>
          <p>Your Speed: <strong>{wpm} WPM</strong></p>
          <p>XP Earned: {wpm * 10}</p>
          <button onClick={() => window.location.reload()} style={{ padding: '10px 20px', cursor: 'pointer' }}>Play Next Level</button>
        </div>
      )}
    </div>
  );
};

export default KeyboardGame;

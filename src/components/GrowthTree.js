import React from 'react';

const GrowthTree = ({ xp, lastActive }) => {
  // Logic: Calculate growth level (0 to 100) based on XP
  const growthLevel = Math.min(xp / 1000, 1) * 100; 
  
  // Logic: Anti-Laziness (Wilting Effect)
  // If inactive for > 48 hours, the tree turns brown/yellow
  const hoursSinceActive = (Date.now() - lastActive) / (1000 * 60 * 60);
  const isWilting = hoursSinceActive > 48;
  const leafColor = isWilting ? "#A0522D" : "#2ECC71"; // Brown vs Vibrant Green

  return (
    <div className="tree-container" style={{ textAlign: 'center' }}>
      <svg width="200" height="300" viewBox="0 0 200 300">
        {/* Trunk: Gets thicker/taller as XP grows */}
        <rect 
          x="90" 
          y={300 - (growthLevel * 2)} 
          width={10 + (growthLevel / 10)} 
          height={growthLevel * 2} 
          fill="#5D4037" 
        />
        
        {/* Leaves: Appear and multiply based on XP */}
        {xp > 100 && <circle cx="100" cy={300 - (growthLevel * 2)} r="40" fill={leafColor} opacity="0.8" />}
        {xp > 500 && <circle cx="70" cy={280 - (growthLevel * 2)} r="30" fill={leafColor} opacity="0.8" />}
        {xp > 800 && <circle cx="130" cy={280 - (growthLevel * 2)} r="30" fill={leafColor} opacity="0.8" />}
      </svg>
      
      <div className="status-label">
        {isWilting ? 
          <p style={{color: 'red'}}>⚠️ Your Tree is Wilting! Read a story to revive it!</p> : 
          <p>🌳 Your Potential is Flourishing!</p>
        }
      </div>
    </div>
  );
};

export default GrowthTree;

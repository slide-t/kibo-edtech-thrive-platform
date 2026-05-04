import React, { useState } from 'react';

const FundiChat = () => {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Habari! I am Fundi, your Tech Mentor. I can teach you to fix hardware, write code, or use AI. What do you want to build today?' }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput("");

    // Simulate AI Response (In Live mode, this calls Firebase Gemini)
    setTimeout(() => {
      let response = "That is a great question! To help you better, tell me: are you trying to fix a physical device or write a software script?";
      
      if (input.toLowerCase().includes("laptop")) {
        response = "If your laptop is slow, first check your RAM usage. Open Task Manager (Ctrl+Shift+Esc). If it's full, you might need to clean your startup apps or upgrade your physical RAM stick. I can guide you through opening the back panel safely.";
      } else if (input.toLowerCase().includes("code") || input.toLowerCase().includes("programming")) {
        response = "Coding is like building with invisible blocks. Start with HTML to build the structure, then use CSS for the 'paint'. Would you like a 5-minute mission to build your first button?";
      }

      setMessages([...newMessages, { role: 'assistant', content: response }]);
    }, 1000);
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', background: '#f4f7f6', borderRadius: '15px', padding: '20px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
      <h3 style={{ borderBottom: '2px solid #27ae60', paddingBottom: '10px', color: '#27ae60' }}>🛠️ Ask Fundi (Tech Mentor)</h3>
      
      <div style={{ height: '300px', overflowY: 'scroll', marginBottom: '20px', padding: '10px', background: '#fff', borderRadius: '10px', textAlign: 'left' }}>
        {messages.map((msg, i) => (
          <div key={i} style={{ marginBottom: '15px', textAlign: msg.role === 'user' ? 'right' : 'left' }}>
            <span style={{ 
              padding: '10px', 
              borderRadius: '10px', 
              background: msg.role === 'user' ? '#3498db' : '#e0e0e0',
              color: msg.role === 'user' ? '#fff' : '#333',
              display: 'inline-block',
              maxWidth: '80%'
            }}>
              {msg.content}
            </span>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '10px' }}>
        <input 
          style={{ flex: 1, padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about repairs, coding, or AI..."
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend} style={{ background: '#27ae60', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>Send</button>
      </div>
    </div>
  );
};

export default FundiChat;

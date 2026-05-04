import React, { useState, useEffect } from 'react';

const CBTPlayer = ({ examData, onFinish }) => {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(examData.timeLimit * 60);
  const [examStarted, setExamStarted] = useState(false);

  // Timer Logic
  useEffect(() => {
    let timer;
    if (examStarted && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
    } else if (timeLeft === 0) {
      submitExam();
    }
    return () => clearInterval(timer);
  }, [examStarted, timeLeft]);

  const handleOptionSelect = (optionIndex) => {
    setAnswers({ ...answers, [currentQ]: optionIndex });
  };

  const submitExam = () => {
    let score = 0;
    examData.questions.forEach((q, index) => {
      if (answers[index] === q.correct) score++;
    });
    const percentage = (score / examData.questions.length) * 100;
    onFinish(percentage); // Send result back to the App/Firebase
  };

  if (!examStarted) {
    return (
      <div className="setup-screen">
        <h2>{examData.subject} - {examData.type}</h2>
        <p>Class: {examData.class} | Time: {examData.timeLimit} mins</p>
        <button onClick={() => setExamStarted(true)} className="btn-start">START EXAM</button>
      </div>
    );
  }

  const q = examData.questions[currentQ];

  return (
    <div className="cbt-container" style={{ padding: '20px', maxWidth: '600px', margin: 'auto', background: '#fff', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
      <div className="header" style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '2px solid #eee' }}>
        <span>Question {currentQ + 1} of {examData.questions.length}</span>
        <span style={{ color: timeLeft < 60 ? 'red' : 'black', fontWeight: 'bold' }}>
          ⏳ {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
        </span>
      </div>

      <div className="question-body" style={{ margin: '30px 0' }}>
        <h3 style={{ fontSize: '1.4rem' }}>{q.q}</h3>
        {q.options.map((opt, i) => (
          <button 
            key={i} 
            onClick={() => handleOptionSelect(i)}
            style={{
              display: 'block', width: '100%', padding: '15px', margin: '10px 0',
              textAlign: 'left', borderRadius: '8px', cursor: 'pointer',
              border: answers[currentQ] === i ? '2px solid #2ecc71' : '1px solid #ddd',
              backgroundColor: answers[currentQ] === i ? '#eafaf1' : '#fff'
            }}
          >
            {opt}
          </button>
        ))}
      </div>

      <div className="footer" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button disabled={currentQ === 0} onClick={() => setCurrentQ(currentQ - 1)}>Previous</button>
        {currentQ === examData.questions.length - 1 ? (
          <button onClick={submitExam} style={{ backgroundColor: '#2ecc71', color: 'white' }}>SUBMIT EXAM</button>
        ) : (
          <button onClick={() => setCurrentQ(currentQ + 1)}>Next</button>
        )}
      </div>
    </div>
  );
};

export default CBTPlayer;

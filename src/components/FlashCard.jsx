// FlashCard.jsx
import React, { useState } from 'react';
import './FlashCard.css';

const FlashCard = ({ question, answer, status, lastModified }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`flash-card ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
      <div className="front">
        <p>{question}</p>
        <div className="status-info">{status}</div>
        <div className="last-modified-info">{lastModified}</div>
      </div>
      <div className="back">
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default FlashCard;

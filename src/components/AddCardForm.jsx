import React, { useState } from 'react';

const AddCardForm = ({ onAddCard }) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [status, setStatus] = useState('Learned');

  const handleAddCard = () => {
    // Create a new card object
    const newCard = {
      front: question,
      back: answer,
      status: status,
      lastModified: new Date().toISOString(),
    };

    // Pass the new card to the parent component
    onAddCard(newCard);

    // Clear the form fields
    setQuestion('');
    setAnswer('');
    setStatus('Learned');
  };

  return (
    <div>
      <h2>Add New Card</h2>
      <label>
        Question:
        <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} />
      </label>
      <label>
        Answer:
        <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} />
      </label>
      <label>
        Status:
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Learned">Learned</option>
          <option value="Want to Learn">Want to Learn</option>
          <option value="Noted">Noted</option>
        </select>
      </label>
      <button onClick={handleAddCard}>Add Card</button>
    </div>
  );
};

export default AddCardForm;


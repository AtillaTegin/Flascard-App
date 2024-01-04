import React, { useState, useEffect } from 'react';
import AddCardForm from './AddCardForm';

const FlashCards = () => {
  const [flashCards, setFlashCards] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fetchFlashCards = async () => {
      try {
        const res = await fetch('http://localhost:3001/cards');
        if (!res.ok) throw new Error('Data has not been received');
        const flashCardsData = await res.json();
        setFlashCards(flashCardsData);
        setFetchError(null);
      } catch (e) {
        setFetchError(e.message);
      }
    };

    // Fetch data when the component mounts
    fetchFlashCards();
  }, []);

  const handleAddCard = (newCard) => {
    // Update the state with the new card
    setFlashCards([...flashCards, newCard]);

    // Add the new card to the API
    fetch('http://localhost:3001/cards', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCard),
    });
  };

  return (
    <div>
      <h1>Flash Cards</h1>
      {fetchError && <p>Error: {fetchError}</p>}
      <AddCardForm onAddCard={handleAddCard} />
      <ul>
        {flashCards.map((card) => (
          <li key={card.id}>
            <p>Question: {card.front}</p>
            <p>Answer: {card.back}</p>
            <p>Status: {card.status}</p>
            <p>Last Modified: {card.lastModified}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlashCards;

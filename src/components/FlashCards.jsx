import React, { useState, useEffect } from 'react';
import AddCardForm from './AddCardForm';
import './FlashCards.css';
import FlashCard from './FlashCard';

const FlashCards = () => {
  const [flashCards, setFlashCards] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [filterStatus, setFilterStatus] = useState('All'); // Default to show all cards

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

  // Function to handle search
  const handleSearch = () => {
    const filteredCards = flashCards.filter(
      (card) =>
        card.front.toLowerCase().includes(searchText.toLowerCase()) ||
        card.back.toLowerCase().includes(searchText.toLowerCase())
    );
    setFlashCards(filteredCards);
  };

  // Function to handle filtering by status
  const handleFilter = () => {
    const filteredCards =
      filterStatus === 'All'
        ? flashCards
        : flashCards.filter((card) => card.status === filterStatus);
    setFlashCards(filteredCards);
  };

  // Function to handle sorting
  const handleSort = (attribute) => {
    const sortedCards = [...flashCards].sort((a, b) => {
      if (a[attribute] < b[attribute]) return -1;
      if (a[attribute] > b[attribute]) return 1;
      return 0;
    });
    setFlashCards(sortedCards);
  };

  return (
    <div className="flash-cards-container">
      <h1>Flash Cards</h1>
      {fetchError && <p>Error: {fetchError}</p>}
      <AddCardForm onAddCard={handleAddCard} />

      <div className="controls-container">
        {/* ... (your existing code) */}
      </div>

      {/* Flash Cards List */}
      <div className="flash-cards-list">
        {flashCards.map((card) => (
          <FlashCard
            key={card.id}
            question={card.front}
            answer={card.back}
            status={card.status}
            lastModified={card.lastModified}
          />
        ))}
      </div>
    </div>
  );
};

export default FlashCards;

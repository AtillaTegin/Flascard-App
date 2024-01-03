import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  const [flashCards, setFlashCards] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const API_URL = "http://localhost:3001/cards";

  useEffect(() => {
    const fetchFlashCards = async () => {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("Data has not been received");
        const flashCardsData = await res.json();
        setFlashCards(flashCardsData);
        setFetchError(null);
      } catch (e) {
        setFetchError(e.message);
      } finally {
        setIsLoading(false);
      }
    };

    // Fetch data when the component mounts
    fetchFlashCards();
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              flashCards={flashCards}
              fetchError={fetchError}
              isLoading={isLoading}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

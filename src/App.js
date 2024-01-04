import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import ContactMe from "./components/ContactMe";
import FlashCards from "./components/FlashCards";

// Navbar component
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/flashcards">Flash Cards</Link>
        </li>
        <li>
          <Link to="/contactme">Contact Me</Link>
        </li>
      </ul>
    </nav>
  );
};

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
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home/>
          }
        />
        <Route
          path="/flashcards"
          element={<FlashCards 
            flashCards={flashCards}
          fetchError={fetchError}
          isLoading={isLoading} 
          />}
        />
        <Route path="/contactme" element={<ContactMe />} />
      </Routes>
    </Router>
  );
}

export default App;


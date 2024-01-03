import "./styles.css";
import Home from "./components/Home";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
  const [flashCards, setFlashCards] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const API_URL = "http://localhost:5500/db"; // Assuming your json-server is running on this port

  useEffect(() => {
    const fetchFlashCards = async () => {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw Error("Data has not been received");
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
      <Home />
    </Router>
  );
}

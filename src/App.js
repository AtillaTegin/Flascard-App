import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import FlashCardsPage from './components/FlashCardsPage'; // You need to create this component
import ContactMe from './components/ContactMe';
import Navigation from './components/Navigation';

function App() {
  const [flashCards, setFlashCards] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const API_URL = 'http://localhost:3000/my-app/db.json'; // Assuming your json-server is running on this port

  useEffect(() => {
    const fetchFlashCards = async () => {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw Error('Data has not been received');
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
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/flash-cards">
          <FlashCardsPage
            flashCards={flashCards}
            fetchError={fetchError}
            isLoading={isLoading}
          />
        </Route>
        <Route path="/contact-me">
          <ContactMe />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

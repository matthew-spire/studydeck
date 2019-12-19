import React from 'react';
import 'normalize.css';
import './App.css';
import { CardPreview } from './components/CardPreview';

function App() {
  return (
    <div>
      <header>
        <h1>
          Study<span className="titleHighlight">Deck</span>
        </h1>
        <h2>Retention Through Repetition</h2>
      </header>
      <main>
        <h3>Your Cards</h3>
        <div className="gridContainer">
          <CardPreview definition="quack" term="What does the duck say?" />
          <CardPreview definition="woof" term="What does the dog say?" />
          <CardPreview definition="moo" term="What does the cow say?" />
        </div>
      </main>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import GameOfLife from './ConwayFiles/ConwaysVisual';
import Portfolio from './Portfolio/portfolio';

function App() {
  return (
    <div className="App">
        <GameOfLife />
        <Portfolio />
    </div>
  );
}

export default App;

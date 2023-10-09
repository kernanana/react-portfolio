import React, {useEffect} from 'react';
import './App.css';
import GameOfLife from './ConwayFiles/ConwaysVisual';
import Portfolio from './Portfolio/portfolio';

function App() {
  useEffect(() => {
    document.title = "Kernan's Portfolio";
  }, []);

  return (
    <div className="App">
        <GameOfLife />
        <Portfolio />
    </div>
  );
}

export default App;

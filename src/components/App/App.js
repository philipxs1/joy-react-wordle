import { useState } from "react";
import Game from "../Game";
import Guesslist from "../Guesslist/Guesslist";
import Header from "../Header";

function App() {
  return (
    <div className="wrapper">
      <Header />

      <div className="game-wrapper">
        <Game />
      </div>
    </div>
  );
}

export default App;

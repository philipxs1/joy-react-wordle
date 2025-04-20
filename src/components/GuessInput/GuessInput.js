import React, { useState } from "react";

import Happybanner from "../Happybanner/Happybanner";
import Sadbanner from "../Sadbanner/Sadbanner";

function GuessInput({ addNewGuess, answer, guesses }) {
  const [guess, setGuess] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    addNewGuess(guess);

    setGuess("");
  }

  const isCorrect = answer === guesses.at(-1);
  const isGameOver = guesses.length >= 6;

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input"> guess input:</label>
      {!isCorrect && !isGameOver && (
        <input
          value={guess}
          onChange={(e) => setGuess(e.target.value.toUpperCase())}
          id="guess-input"
          type="text"
          pattern="[A-Z]{5}"
        />
      )}
      {isCorrect && <Happybanner guesses={guesses} />}
      {isGameOver && <Sadbanner />}
      {isGameOver && <Sadbanner />}
    </form>
  );
}

export default GuessInput;

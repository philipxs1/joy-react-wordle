import React, { useState } from "react";

import Happybanner from "../Happybanner/Happybanner";
import Sadbanner from "../Sadbanner/Sadbanner";
import Keyboard from "../Keyboard/Keyboard";

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
    <>
      {!isCorrect && !isGameOver && (
        <form onSubmit={handleSubmit} className="guess-input-wrapper">
          <label htmlFor="guess-input"> guess input:</label>
          <input
            required
          
            value={guess}
            onChange={(e) => setGuess(e.target.value.toUpperCase())}
            id="guess-input"
            type="text"
            pattern="[a-zA-Z]{5}"
            title="5 letter word"
          />
        </form>
      )}
      {isCorrect && <Happybanner guesses={guesses} />}
      {isGameOver && !isCorrect && <Sadbanner answer={answer} />}

      <Keyboard />
    </>
  );
}

export default GuessInput;

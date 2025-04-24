import React, { useState } from "react";

function GuessInput({ addNewGuess, gameStatus }) {
  const [guess, setGuess] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    addNewGuess(guess);

    setGuess("");
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="guess-input-wrapper">
        <label htmlFor="guess-input"> Enter guess:</label>
        <input
          required
          disabled={gameStatus !== "running"}
          value={guess}
          onChange={(e) => setGuess(e.target.value.toUpperCase())}
          id="guess-input"
          type="text"
          pattern="[a-zA-Z]{5}"
          title="5 letter word"
        />
      </form>
    </>
  );
}

export default GuessInput;

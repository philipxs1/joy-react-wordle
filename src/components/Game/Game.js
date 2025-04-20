import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { range } from "../../utils";
import GuessInput from "../GuessInput/GuessInput";
import Guesslist from "../Guesslist/Guesslist";
import Guess from "../Guess/Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);

  function addNewGuess(guess) {
    setGuesses((prev) => [...prev, guess]);
    console.log(guesses);
  }

  return (
    <>
      <Guess guesses={guesses} answer={answer} />

      <GuessInput guesses={guesses} addNewGuess={addNewGuess} answer={answer} />
    </>
  );
}

export default Game;

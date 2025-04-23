import React, { use, useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessInput from "../GuessInput/GuessInput";
import Guesslist from "../Guesslist/Guesslist";
import Guess from "../Guess/Guess";

import GuessResults from "../GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [gameStatus, setGameStatus] = useState("running");
  const [guesses, setGuesses] = useState([]);

  function addNewGuess(guess) {
    setGuesses((prev) => [...prev, guess]);
    if (guess === answer) {
      setGameStatus("win");
    } else if (guesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />

      <GuessInput guesses={guesses} addNewGuess={addNewGuess} answer={answer} />
    </>
  );
}

export default Game;

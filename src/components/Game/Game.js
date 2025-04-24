import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessInput from "../GuessInput/GuessInput";

import GuessResults from "../GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

import Happybanner from "../Happybanner/Happybanner";
import Sadbanner from "../Sadbanner/Sadbanner";
import Keyboard from "../Keyboard/Keyboard";
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [gameStatus, setGameStatus] = useState("running");

  const [guesses, setGuesses] = useState([]);

  function addNewGuess(guess) {
    const nextGuess = [...guesses, guess];
    setGuesses(nextGuess);

    if (guess === answer) {
      setGameStatus("win");
    } else if (nextGuess.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }

  const validateGuess = guesses.map((guess) => checkGuess(guess, answer));

  return (
    <>
      <GuessResults validateGuess={validateGuess} />

      <GuessInput gameStatus={gameStatus} addNewGuess={addNewGuess} />

      <Keyboard validateGuess={validateGuess} />

      {gameStatus === "win" && <Happybanner guesses={guesses} />}
      {gameStatus === "lost" && <Sadbanner />}
    </>
  );
}

export default Game;

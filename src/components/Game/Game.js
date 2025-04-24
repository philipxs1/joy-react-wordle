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

// To make debugging easier, we'll log the solution in the console.

function Game() {
  const [answer, setAnswer] = useState(sample(WORDS));
  const [gameStatus, setGameStatus] = useState("running");
  const [guesses, setGuesses] = useState([]);
  console.info({ answer });

  function addNewGuess(guess) {
    const nextGuess = [...guesses, guess];
    setGuesses(nextGuess);

    if (guess === answer) {
      setGameStatus("win");
    } else if (nextGuess.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }
  function resetGame() {
    const newAnswer = sample(WORDS);
    setAnswer(newAnswer);
    setGameStatus("running");
    setGuesses([]);
  }

  const validateGuess = guesses.map((guess) => checkGuess(guess, answer));

  return (
    <>
      <GuessResults validateGuess={validateGuess} />

      <GuessInput gameStatus={gameStatus} addNewGuess={addNewGuess} />

      <Keyboard validateGuess={validateGuess} />

      {gameStatus === "win" && <Happybanner guesses={guesses} resetGame={resetGame} />}
      {gameStatus === "lost" && <Sadbanner resetGame={resetGame} />}
    </>
  );
}

export default Game;

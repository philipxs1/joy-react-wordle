import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import Guess from "../Guess/Guess";

function GuessResults({ validateGuess }) {
  console.log(validateGuess);
  return (
    <div className="GuessResults">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess key={num} value={validateGuess[num]} />
      ))}
    </div>
  );
}

export default GuessResults;

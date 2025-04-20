import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

function Guess({ guesses, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => {
        const word = checkGuess(guesses[index], answer);

        return (
          <p key={index} className="guess">
            {word
              ? word.map(({ letter, status }, i) => (
                  <span key={i} className={`cell ${status}`}>
                    {letter}
                  </span>
                ))
              : range(5).map((i) => <span key={i} className="cell"></span>)}
          </p>
        );
      })}
    </div>
  );
}

export default Guess;

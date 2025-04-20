import React from "react";

function Guesslist({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map((guess, index) => (
        <p className="guess" key={index}>
          {guess}
        </p>
      ))}
    </div>
  );
}

export default Guesslist;

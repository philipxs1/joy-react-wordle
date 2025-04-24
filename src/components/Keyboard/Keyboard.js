import React from "react";
import { QWERTY } from "../../data";

function getStatusByLetter(validateGuess) {
  const statusObj = {};

  const allLetters = validateGuess.flat();

  allLetters.forEach(({ letter, status }) => {
    const currentStatus = statusObj[letter];

    if (currentStatus === undefined) {
      statusObj[letter] = status;
      return;
    }

    const STATUS_RANKS = {
      correct: 1,
      misplaced: 2,
      incorrect: 3,
    };

    const currentStatusRank = STATUS_RANKS[currentStatus];
    const newStatusRank = STATUS_RANKS[status];

    if (newStatusRank < currentStatusRank) {
      statusObj[letter] = status;
    }
  });

  return statusObj;
}

function Keyboard({ validateGuess }) {
  const statusByLetter = getStatusByLetter(validateGuess);

  return (
    <div className="keyboard-wrapper">
      {QWERTY.map((row, id) => (
        <div className="keyboard-row" key={id}>
          {row.map((letter) => (
            <div className={`keyboard-letter ${statusByLetter[letter] || ""}`} key={letter}>
              {letter}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;

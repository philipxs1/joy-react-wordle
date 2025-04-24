import React from "react";

function Happybanner({ guesses, resetGame }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in {""}
        <strong>{guesses.length} guesses</strong>.
      </p>
      <button onClick={resetGame}>Reset Game</button>
    </div>
  );
}

export default Happybanner;

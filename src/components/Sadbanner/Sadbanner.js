import React from "react";

function Sadbanner({ answer, resetGame }) {
  return (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
      <button onClick={resetGame}>Reset Game</button>
    </div>
  );
}

export default Sadbanner;

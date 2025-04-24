import React from "react";
import { QWERTY } from "../../data";

function Keyboard() {
  return (
    <div className="keyboard-wrapper">
      {QWERTY.map((row, id) => (
        <div className="keyboard-row" key={id}>
          {row.map((letter) => (
            <div className="keyboard-letter" key={letter}>
              {letter}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;

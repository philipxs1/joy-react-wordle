import React from "react";
import { KEY1, KEY2, KEY3 } from "../../data";

function Keyboard() {
  return (
    <div className="keyboard-wrapper">
      {KEY1.map((key, id) => (
        <span className="keyboard-span" key={id}>
          {key}
        </span>
      ))}
      {KEY2.map((key, id) => (
        <span className="keyboard-span" key={id}>
          {key}
        </span>
      ))}
      {KEY3.map((key, id) => (
        <span className="keyboard-span" key={id}>
          {key}
        </span>
      ))}
    </div>
  );
}

export default Keyboard;

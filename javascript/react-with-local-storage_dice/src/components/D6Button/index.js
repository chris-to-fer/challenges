//import { useState } from "react";

import D6 from "../D6";
import "./D6Button.css";

export function D6Button({ value, onRoll }) {
  console.log(value);
  //const handleRoll = () => {};

  return (
    <button className="d6-button" type="button" onClick={() => onRoll()}>
      <D6 value={value} />
    </button>
  );
}

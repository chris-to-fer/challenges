import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  //let code = [];
  const [code, setCode] = useState("");
  console.log(code);

  function handleClick({ element }) {
    console.log("Update Code!");
    console.log(code);
    setCode(code + element);
  }

  const validCode = "🐡🐠🐋";

  return (
    <div className="container">
      <div className="button-container">
        <Button element="🐡" ariaLabel="Pufferfish" handleClick={handleClick} />
        <Button element="🐋" ariaLabel="Whale" handleClick={handleClick} />
        <Button element="🐠" ariaLabel="Clownfish" handleClick={handleClick} />
      </div>

      <button
        type="button"
        onClick={() => {
          console.log("Reset Code!");
          setCode("");
        }}
      >
        Reset
      </button>
      <h2>{code}</h2>

      {code === validCode && <p>Valid code!</p>}
    </div>
  );
}

function Button({ element, ariaLabel, handleClick, code }) {
  return (
    <>
      <button type="button" onClick={() => handleClick({ code, element })}>
        <span role="img" aria-label={ariaLabel}>
          {element}
        </span>
      </button>
    </>
  );
}

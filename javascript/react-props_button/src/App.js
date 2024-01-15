//console.clear();
import React from "react";
import "./styles.css";

export default function App() {
  function handleClick() {
    return () => console.log("OK");
  }
  return <Button color=" #FFA500" text="Press me" onClick={handleClick} />;
}

function Button({ color, disabled, text, onClick }) {
  return (
    <div>
      <button
        style={{ backgroundColor: color }}
        disabled={disabled}
        onClick={onClick()}
      >
        {text}
      </button>
    </div>
  );
}

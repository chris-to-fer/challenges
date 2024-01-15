console.clear();
import React from "react";
import "./styles.css";

export default function App() {
  function Click(name) {
    return () => console.log("OK", name);
  }
  return (
    <article>
      <Button
        name="B1"
        size={24}
        color="yellow"
        text="Press me"
        onClick={Click}
        disabled={false}
      />
      <Button
        name="B2"
        size={24}
        color="blue"
        text="Press me"
        onClick={Click}
        disabled={false}
      />
    </article>
  );
}

function Button({ color, disabled, text, onClick, size, name }) {
  return (
    <div>
      <button
        style={{ backgroundColor: color, fontSize: size }}
        disabled={disabled}
        onClick={onClick(name)}
      >
        {text}
      </button>
    </div>
  );
}

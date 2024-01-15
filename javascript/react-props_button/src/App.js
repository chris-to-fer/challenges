console.clear();
import React from "react";
import "./styles.css";

export default function App() {
  function Click() {
    return () => console.log("OK");
  }
  return (
    <Button color="yellow" text="Press me" onClick={Click} disabled={false} />
  );
}

function Button(props) {
  const { color, disabled, text, onClick } = props;
  console.log(props);
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

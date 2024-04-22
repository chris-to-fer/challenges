console.clear();
import Click from "./components/handleClick";
import Button from "./components/Button.js";

import React from "react";
import "./styles.css";

export default function App() {
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

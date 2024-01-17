import "./styles.css";
import { useState } from "react";

export default function App() {
  //let isActive = false;
  console.log("useState init: ", useState());
  const [isActive, setIsActive] = useState(false);
  console.log(useState());
  console.log(isActive);

  function handleClick() {
    setIsActive(!isActive);
    // Check that the value changes correctly.
  }

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>
        {isActive ? "Activate" : "Deactivate"}
      </button>
    </main>
  );
}

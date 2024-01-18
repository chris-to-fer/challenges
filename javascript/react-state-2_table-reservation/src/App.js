import React from "react";
import Counter from "./components/Counter";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [people, setPeople] = useState(0);

  function handlePlus() {
    setPeople(people + 1);
  }

  function handleMinus() {
    setPeople(people - 1);
  }

  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter
        people={people}
        setPeople={setPeople}
        onhandlePlus={handlePlus}
        onhandleMinus={handleMinus}
      />
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}

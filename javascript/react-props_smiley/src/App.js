import React from "react";
import "./styles.css";

export default function App() {
  return <Smiley isHappy="" />;
}

function Smiley({ isHappy }) {
  return <article>{isHappy ? <h1>😀</h1> : <h1>😞</h1>}</article>;
}

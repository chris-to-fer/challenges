import React from "react";
import "./styles.css";

export default function App() {
  return HelloWorldArticle();
}

function HelloWorldArticle() {
  return (
    <article>
      <h1>This is an heading of an article</h1>
      <p>And here goes some text.</p>
    </article>
  );
}

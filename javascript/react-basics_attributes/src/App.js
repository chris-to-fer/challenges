import React from "react";
import "./styles.css";

export default function App() {
  return Article();
}

function Article() {
  return (
    <article className="article">
      <h2 className="article_title">Artikel Headline</h2>
      <p>The articel istelf</p>
      <label htmlFor="id"></label>
      <input id="id"></input>
      <a className="article_link" href="https://react.dev/">
        Link to React
      </a>
    </article>
  );
}

import React from "react";
import "./styles.css";

export default function App() {
  return <Sum valueA="7" valueB="5" />;
}

function Sum({ valueA, valueB }) {
  return (
    <h1>
      {valueA} + {valueB} = {parseInt(valueA) + parseInt(valueB)}{" "}
    </h1>
  );
}

/*
Write the `Sum` component inside of the `src/App.js`.
  - It accepts two props called `valueA` and `valueB` (make sure to destructure them).
  - It returns an HTML element and uses both props to dynamically render something like "1 + 2 = 3" (according to the props).
- Inside of the return statement of your `App` component, replace the heading with your `Sum` component and pass it both props with values of your choice.
*/

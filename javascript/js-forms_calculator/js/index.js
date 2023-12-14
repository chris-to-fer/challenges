console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;

  // --v-- write your code here --v--
  const stuff = new FormData(event.target);
  const data = Object.fromEntries(stuff);
  const a = parseInt(data.numberA);
  const b = parseInt(data.numberB);

  if (data.operator.charAt(0) === "a") {
    result = add(a, b);
  }
  if (data.operator.charAt(0) === "s") {
    result = subtract(a, b);
  }
  if (data.operator.charAt(0) === "m") {
    result = multiply(a, b);
  }
  if (data.operator.charAt(0) === "d") {
    result = divide(a, b);
  }
  console.log(result);
  // --^-- write your code here --^--

  resultOutput.textContent = result;
});

console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');
let pizzaSize1 = 24;
let pizzaSize2 = 24;

pizzaInput1.addEventListener("input", () => {
  // write your code here
  pizzaSize1 = pizzaInput1.value;
  calculatePizzaGain(pizzaSize1, pizzaSize2);
  updatePizzaDisplay(pizza1, pizzaSize1);
  updateOutputColor(pizzaSize1, pizzaSize2);
});

pizzaInput2.addEventListener("input", () => {
  // write your code here
  pizzaSize2 = pizzaInput2.value;
  calculatePizzaGain(pizzaSize1, pizzaSize2);
  updatePizzaDisplay(pizza2, pizzaSize2);
  updateOutputColor(pizzaSize1, pizzaSize2);
});

// Task 1
// define the function calculatePizzaGain here
function calculatePizzaGain(diameter1, diameter2) {
  area1 = diameter1 * Math.PI;
  area2 = diameter2 * Math.PI;
  gain = ((area2 - area1) / area1) * 100;
  output.innerHTML = Math.round(gain);
}

// Task 2
// define the function updatePizzaDisplay here
function updatePizzaDisplay(pizzaElement, newSize) {
  result = (newSize / 24) * 100;
  pizzaElement.style.width = result + "px";
}

// Task 3
// define the function updateOutputColor here
function updateOutputColor(pizzaSize1, pizzaSize2) {
  if (pizzaSize1 > pizzaSize2) {
    outputSection.style.backgroundColor = "var(--red)";
  } else if (pizzaSize1 < pizzaSize2) {
    outputSection.style.backgroundColor = "var(--green)";
  }
}

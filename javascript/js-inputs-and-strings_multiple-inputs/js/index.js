/*

Important: Create a fork for each sub challenge!
Implement the following functionality:

1. On button click: The value of the first input field is copied into the second input field

2. On button click: The value of the first input field is copied in uppercase into the second input field

3. On button click: The values of the two input fields switch.

*/

const firstInput = document.querySelector("[data-js=first-input]");
const secondInput = document.querySelector("[data-js=second-input]");
const button = document.querySelector("[data-js=button]");
let count = 0;

button.addEventListener("click", (e) => {
  e.preventDefault();
  const one = firstInput.value;
  const two = secondInput.value;

  count++;
  console.log(count);

  if (count === 1) {
    secondInput.value = one;
  }
  if (count === 2) {
    secondInput.value = one.toUpperCase();
  }
  if (count === 3) {
    secondInput.value = one;
    firstInput.value = two;
    count = 0;
  }
});

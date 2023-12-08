console.clear();
// link consts with socument query

const bodyElement = document.querySelector('[data-js="body"]');
const darkButton = document.querySelector('[data-js="dark-mode-button"]');
const lightButton = document.querySelector('[data-js="light-mode-button"]');
const toggleButton = document.querySelector('[data-js="toggle-button"]');

// give event listener action
darkButton.addEventListener("click", () => {
  bodyElement.classList.add("dark");
  console.log("Dark mode selected.");
});

lightButton.addEventListener("click", () => {
  bodyElement.classList.remove("dark");
  console.log("Light mode selected.");
});

toggleButton.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
  console.log("Dark mode toggled.");
});

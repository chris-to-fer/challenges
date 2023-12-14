console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

addEventListener("load", (e) => {
  hideTosError();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--

  if (event.target.elements.tos.checked === false) {
    return;
  }

  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  alert("Form submitted");
});

tosCheckbox.addEventListener("input", (e) => {
  console.log(e.target.checked);
  if (e.target.checked === false) {
    showTosError();
  } else if (e.target.checked === true) {
    hideTosError();
  }
});

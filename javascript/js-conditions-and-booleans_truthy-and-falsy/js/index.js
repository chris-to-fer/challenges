const truthyOrFalsy = Boolean(3 >= 2);
console.log("The expression is " + truthyOrFalsy);

const right1 = document.querySelector("#truthy-question1");
const wrong1 = document.querySelector("#falsy-question1");
const fieldset = document.querySelector("fieldset");

right1.addEventListener("click", () => {
  if (2 == "2") {
    fieldset.classList.add("green");
    fieldset.classList.remove("red");
  }
});
wrong1.addEventListener("click", () => {
  if (2 == "2") {
    fieldset.classList.add("red");
    fieldset.classList.remove("green");
  }
});

const right2 = document.querySelector("#truthy-question2");
const wrong2 = document.querySelector("#falsy-question2");

right2.addEventListener("click", () => {
  if (2 === "2") {
    fieldset.classList.add("green");
    fieldset.classList.remove("red");
  }
});
wrong2.addEventListener("click", () => {
  if (2 === "2") {
    fieldset.classList.add("red");
    fieldset.classList.remove("green");
  }
});

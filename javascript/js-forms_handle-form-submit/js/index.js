console.clear();

/*
Use JavaScript to react to the form submission.

Log all form data (in object form) into the console in the submit event handler.

Make sure the form is reset and the First Name input is focused after submission.
*/

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const stuff = new FormData(event.target);
  const data = Object.fromEntries(stuff);

  console.log(
    `The age-badness-sum of ${event.target.elements.firstName.value} is ${
      parseInt(data.age) + parseInt(data.badness)
    }`
  );

  event.target.reset();
  event.target.elements.firstName.focus();
});

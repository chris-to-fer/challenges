console.clear();

function handleUserLogin(onSuccess) {
  // You might wonder why this function is called `onSuccess`. This will become clear by the fourth challenge! 🤞
  onSuccess();
}

function showWelcomeMessage() {
  console.log("Welcome! You are logged in now.");
}

handleUserLogin(showWelcomeMessage);

handleUserLogin(() => {
  showWelcomeMessage();
});

// Call handleUserLogin below!

/*
## Tasks

You should write a callback function in two different ways.
In both cases your callback function should log the following text to the console:
"Welcome! You are logged in now."

1. Write a function with the "function" keyword named "showWelcomeMessage" which logs the desired text. Then
   call the higher order function "handleUserLogin" and pass your callback function "showWelcomeMessage" as the first argument.
2. Call "handleUserLogin" again but this time write an anonymous function **inside** the function call (i.e. between the round brackets). You can write an anonymous function either:

   - as an arrow function: ` () => {...}`
   - as a regular function: ` function() {...}`

3. Implement the logic from the previous from "showWelcomeMessage" inside this anonymous function.
*/

/*1. Create a file named `logType.js`.
2. Declare a variable named `data`.
3. Write a `switch` statement that takes the `typeof data` and logs a different
   string depending on the type/value of `data`.

The string it logs should be one of the following:

- "undefined!"
- "null!"
- "number!"
- "not a number!"
- "string!"
- "boolean!"
- "bigint!"
- "function!"
- "object!"
- "array!"
- "I have no idea!"

> 💡 you will need to google for object and array.
*/
// doesnt work for NaN

let data = 5n;
if (Array.isArray(data)) {
  console.log("array!");
} else if (data === null) {
  console.log("null!");
} else {
  switch (typeof data) {
    case "undefined":
      console.log("undefined!");
      break;
    case "null":
      console.log("null!");
      break;
    case "number":
      console.log("number!");
      break;
    case "string":
      console.log("string!");
      break;
    case "NaN":
      console.log("not a number!");
      break;
    case "boolean":
      console.log("boolean!");
      break;
    case "bigint":
      console.log("bigint!");
      break;
    case "function":
      console.log("function!");
      break;
    case "object":
      console.log("object!");
      break;
    case "array":
      console.log("array!");
      break;
    default:
      console.log("I have no idea!");
  }
}

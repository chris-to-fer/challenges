export function getAnimal(input) {
  return input === "cats"
    ? "I totally love cats!"
    : !input
    ? "I do not like animals at all!"
    : `I like ${input}!`;
}

console.log(getAnimal("penguin"));

const numbers = [1, 2, 3, 4, 5];

function myMap(array, callback) {
  let result = [];
  for (element of array) {
    result.push(callback(element));
  }
  return result;
}

function callback(number) {
  return number * 2;
}

console.log(myMap(numbers, callback));

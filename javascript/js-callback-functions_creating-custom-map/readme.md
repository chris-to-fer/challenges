Creating a Custom Map Function
Create a custom myMap function that takes an array and a callback function as parameters. It should apply the callback function to each element in the array, double each number, and return a new array containing the doubled numbers.

Create a function named myMap that takes two parameters: an array of numbers numbers and a callback function double.
Inside the myMap function, initialize an empty array to store the results.
Use a loop, such as a for loop, to iterate through the elements of the input array.
In each iteration of the loop, call the provided callback function with the current element as an argument to double the number.
Store the doubled result in the new array created in step 2.
After processing all elements, return the new array containing the doubled numbers.
Create a callback function double, that doubles a given number. This function should take an element as input and return the doubled value.
Use the myMap function with the array of numbers and the double callback function to create a new array containing the doubled numbers.
You can use the following array as a test case:

const numbers = [1, 2, 3, 4, 5];

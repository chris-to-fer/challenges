console.clear();

/*
1: Create the data for a book in an online store. Create variables for the following data:
  - the book title
  - the author
  - the rating
  - the number of sales
*/

// --v-- write your code here --v--
const bookTitle = "The Book";
const author = "Jesus";
let rating = 3.2;
let numberOfSales = 50;

// --^-- write your code here --^--

/*
2: Log all variables to the console, for example:
Title: The Lord of the Javascript
Author: Mario
Rating: 4.2
Sales: 120

Increase the number of sales and change the rating of the book afterwards.
Then log all variables to the console again.
*/

// --v-- write your code here --v--
logBookData();
rating = 3.3;
numberOfSales = 53;
logBookData();
rating = 3.4;
numberOfSales = 55;
logBookData();
rating = 3.5;
numberOfSales = 56;
logBookData();
// --^-- write your code here --^--

/*
3: This code is quite repetitive and hard to read.
 - Write a function called logBookData which console logs all
   variables when it is called.
 - Then replace the console logs above with this function.
 - Now increase the number of sales 2 more times and log the data after each increase.
*/

// --v-- write your code here --v--
function logBookData() {
  console.log("The Book's Title is: " + bookTitle);
  console.log("The Book's author is: " + author);
  console.log("The Book's rating is: " + rating);
  console.log("The Book's sales numbers are: " + numberOfSales);
}

// --^-- write your code here --^--

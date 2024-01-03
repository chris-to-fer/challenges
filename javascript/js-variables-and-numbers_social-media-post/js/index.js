console.clear();

/*
1. Create the data for a small social media post. Create a const variable for each data point listed below.:
	- a title
	- a text
	- the number of likes
	- the user who created the post
	- a boolean called isReported
*/

// --v-- write your code here --v--
const title = "News";
const text = "Cold today!";
let likes = 3;
const author = "Fritz";
const isReported = true;

// --^-- write your code here --^--

/*
2. Log all variables to the console. Increase the likes by one and log the amount of likes again. Adapt your code from 1.1 if necessary.
*/

// --v-- write your code here --v--
console.log(
  "Title: ",
  title,
  ", Text: ",
  text,
  ", Likes: ",
  likes,
  ", Author: ",
  author,
  ", Is Reported: ",
  isReported
);

likes += 1;
console.log("Likes: ", likes);
// --^-- write your code here --^--

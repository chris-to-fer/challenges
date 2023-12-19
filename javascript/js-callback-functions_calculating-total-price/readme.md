Calculating the Total Price
You have an array of products with prices, and you want to calculate the total price of all products using a callback function.

Create a function called calculateTotalPrice that takes two parameters products (an array of products) and extractPrice (a callback function).
Inside the calculateTotalPrice function, initialize a variable totalPrice to keep track of the total price and set its initial value to 0.
Use a loop, such as a for...of loop, to iterate through the array of products.
In each iteration of the loop, call the provided callback function with the current product as an argument to extract its price.
Add the extracted price to the totalPrice variable in each iteration of the loop.
After looping through all the products, return the total price as the result of the calculateTotalPrice function.
Create the callback function extractPrice, which should take a product as input and return its price.
Use the calculateTotalPrice function with the array of products and the callback function to calculate the total price.
You can use the following array of spices as a test case:

const products = [
{ name: "Saffron", price: 50 },
{ name: "Cinnamon", price: 6 },
{ name: "Cardamom", price: 12 },
{ name: "Turmeric", price: 9 },
{ name: "Paprika", price: 4 },
{ name: "Garam Masala", price: 10 },
{ name: "Vanilla Bean", price: 15 },
{ name: "Coriander", price: 6 },
];
💡 Hint
function calculateTotalPrice(products, extractPrice) {
// Your logic goes here
}

function extractPrice(product) {
return product.price;
}

const totalPrice = calculateTotalPrice(products, extractPrice);
console.log(totalPrice); // Output should be 112

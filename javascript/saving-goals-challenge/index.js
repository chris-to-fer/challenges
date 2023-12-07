/*
Steps
Create a new JavaScript file in VS Code.

Set up three variables:

startingBalance: Initialize this variable with your initial savings balance. For example, you can set it to 1000.
monthlyContribution: Set this variable to the amount you plan to save each month.
months: Specify the number of months for which you want to track your savings. For instance, you can set it to 12 for a year.
Calculate the total savings after the specified number of months by using the formula startingBalance + (monthlyContribution * months) and store the result in a variable called totalSavings.

Print the result by using console.log to display the total savings you'll have after the specified number of months. For example:

After 12 months of saving, you will have $4000 in your account.
Run your JavaScript program to see how much money you'll have saved after the specified time period.
*/

const startingBalance = 100;
let monthlyContribution = 10;
let months = 12;

let totalSavings = startingBalance + monthlyContribution * months;
console.log(
  "After",
  months,
  "months of saving, you will have",
  totalSavings,
  "€ in your account, without interest."
);

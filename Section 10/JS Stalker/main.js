/*
JS Stalker Exercise:
  * Ask for the user's first name
  * Ask for the user's last name
  * Ask for the user's age
  * Print the user's full name in a sentence
  * Print out the user's age in a sentence
*/

let firstName = prompt("Please provide your first name:");
let lastName = prompt("Please provide your last name:");
let age = prompt("Please provide your age:");
let fullName = `${firstName} ${lastName}`;

console.log(`Your full name is: ${fullName}.\nYour age is: ${age}.`);

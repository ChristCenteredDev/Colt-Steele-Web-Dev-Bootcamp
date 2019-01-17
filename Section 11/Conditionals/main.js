/*
Conditional Exercise:
  *if age is negative
    print an error message
  *if age is 21
    print happy birthday, have a shot
  *If age is odd
    print your age is odd
  *Bonus: if age is a perfect square
    print perfect square
*/

function getAge() {
  let age = prompt("How old are you?");

  if (age < 0) {
    console.log("That is invalid.  Please try again...");
    getAge();
  } else if (age == 21) {
    console.log("Happy 21st Birthday.  Have a shot!");
  } else if (age % 2 != 0) {
    if (Math.sqrt(age) % 1 == 0) {
      console.log(`Your age ${age} is a perfect square and an odd number!`);
      return;
    }
    console.log(`Your age ${age} is an odd number.`);
  } else if (Math.sqrt(age) % 1 == 0) {
    console.log(`Your age ${age} is a perfect square!`);
  }
}

getAge();

// Write a function isEven() which takes a single numeric argument and returns true if the number is even and false otherwise
function isEven(number) {
    if (number % 2 == 0) {
      console.log(true);
      return true;
    } else {
      console.log(false);
      return false;
    }
}

isEven(4);
isEven(21);
isEven(68);
isEven(333);

// Write a function factorial() which takes a single numeric argument and returns the factorial of that Number
function factorial(n) {
  if (n == 0) {
    return 1;
  }

  let sum = n;

  for(let i = n-1; i > 0; i--) {
    sum *= i;
  }

  return sum;
}

factorial(5);
factorial(2);
factorial(10);
factorial(0);

// Write a function kebobToSnake() which takes a single kebab-cased string argument and returns the snake_cased version
function kebobToSnake(str) {
  let words = str.split("-");
  let string = words.join("_");

  return string;
}

console.log(kebobToSnake("hello-world"));
console.log(kebobToSnake("dogs-are-awesome"));
console.log(kebobToSnake("blah"));

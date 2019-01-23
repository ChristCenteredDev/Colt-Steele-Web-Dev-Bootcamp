// Write a function printReverse() that takes an array as an argument and prints out the elements in the array in reverse order
function printReverse(arr) {
  for(let i = arr.length-1; i >= 0; i--) {
    console.log(arr[i]);
  }
}

printReverse([1, 2, 3, 4]);
printReverse(["a", "b", "c"]);

// Write a function isUniform() which takes an array as an argument and returns true if all elements in the array are identical
function isUniform(arr) {
  let char = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != char) {
      return false;
    }
  }

  return true;
}

console.log(isUniform([1,1,1,1]));
console.log(isUniform([2,1,1,1]));
console.log(isUniform(["a", "b", "p"]));
console.log(isUniform(["b","b","b"]));

// Write a function sumArray() that accepts an array of numbers and returns the sum of all the numbers in the sumArray
function sumArray(arr) {
  let sum = 0;

  arr.forEach(function(element) {
    sum += element;
  });

  return sum;
}

console.log(sumArray([1,2,3]));
console.log(sumArray([10,3,10,4]));
console.log(sumArray([-5,100]));

// Write a function max() that accepts an array of number and returns the maximum number in the Array
function max(arr) {
  return Math.max(...arr);
}

console.log(max([1,2,3]));
console.log(max([10,3,10,4]));
console.log(max([-5,100]));

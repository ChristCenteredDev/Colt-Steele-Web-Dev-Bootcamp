// WHILE LOOPS EXERCISES
// Print all numbers between -10 and 19
function log1() {
  console.log("Print from -10 to 19");
  for(let i = -10;i <= 19;i++){
    console.log(i);
  }
}

log1();

// Print all even numbers between 10 & 40
function log2() {
  console.log("Print all even numbers between 10 & 40");
  for(let i = 10;i <= 40;i+=2){
    console.log(i);
  }
}

log2();

// Print all odd numbers between 300 & 333
function log3() {
  console.log("Print all odd numbers between 300 & 333");
  for(let i = 301;i <= 333;i+=2){
    console.log(i);
  }
}

log3();

// Print all numbers divisible by 5 & 3 between 5 & 50
function log4() {
  console.log("Print all numbers divisible by 5 & 3 between 5 & 50");
  for(let i = 5;i <= 50;i++){
    if(i % 3 == 0 && i % 5 == 0){
      console.log(i);
    }
  }
}

log4();

// swap two numbers without using a temporary variable
let num1 = 10;
let num2 = 20;

// before swapping
console.log(`Before swapping num1: ${num1}`); //10
console.log(`Before swapping num2: ${num2}`); //20

num1 = num1 + num2; //30
num2 = num1 - num2; //20
num1 = num1 - num2; //10

// after swapping
console.log(`After swapping num1: ${num1}`); //20
console.log(`After swapping num2: ${num2}`); //10
// 1. Create a program that swaps two numbers without using a third variable. 

let num1 = 10;
let num2 = 20;
console.log(`Before swapping:\nnum1: ${num1}\nnum2: ${num2}`);
num1 = num1 + num2;
num2 = num1 - num2;
num1 = num1 - num2;
console.log(`After swapping:\nnum1: ${num1}\nnum2: ${num2}`);


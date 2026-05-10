// 1. Predict output of variable hoisting examples. 

console.log(a); // output will be undefined
var a = 10;
console.log(a); // output will be 10

console.log(b); // output will be error
let b = 20;
console.log(b); // output will be 20


// 1. Find the largest and smallest number in an array.

let arr = [100, 20, 49, 2, 39, 86];

let ascArray = arr.toSorted((a, b) => { return a - b });
console.log(`smallest number in [${arr}]: ${ascArray[0]} `);

let descArray = arr.toSorted((a, b) => { return b - a });
console.log(`largest number in [${arr}]: ${descArray[0]} `);

let a = "Java";
let b = "Python";
let c = "Java Script";

// '+' concatinates all the strings but using '+' for concatinating large data is not recommendable
let d = "Hello " + a + ", " + b + " and " + c + " !";
console.log(d);
// we use template literals which having back ticks (``) instead of quotes ("") and we mention any variable/expression in ${var}
let e = `Hello ${a}, ${b} and ${c} !`;
console.log(e);
let len = `The length of ${a} is: ${a.length}`;
console.log(len);

//functions:
// generic function
function mul(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} * ${i} = ${num * i}`);
    }
}
mul(10);

// arrow function
let mulArrow = (num) => {
    for (let i = 0; i <= 10; i++) {
        console.log(`${num} * ${i} = ${num * i}`);
    }
}
mulArrow(10);

let tempArray = [1, 2, "ikewqgd", true, 20.5, 38, 397];

// filter()
// -> loops through every element and keeps only the elements that pass the condition.
// -> returns a new array with the filtered elements original array is not changed

// map()
// -> loops through every element and transforms each element
// -> returns a new array with the transformed elements original array is not changed

// forEach()
// -> loops through every element and executes a function for each one returns nothing
// -> it's just for looping used when you just want to do something with each element without creating a new array

tempArray.filter((num) => { return typeof num === "number" }).map((num) => { return num ** 2 }).forEach((num) => {
    console.log(`Element after **2: ${num}`);
})

// Math.random() -> returns a random decimal number between 0 and 1(0 inclusive, 1 exclusive)
console.log(Math.random()); // returns decimal value between 0 and 1
console.log(Math.random() * 10); // returns decimal value between 0 and 10
console.log(Math.floor(Math.random() * 10)); // returns whole number between 0 to 10

// Math.floor() -> rounds down to nearest whole number
// Math.ceil() -> rounds up to nearest whole number
// Math.round() -> rounds to nearest whole number

// if we want random number from 1 to 10
// floor(0.1 - 9.9) as 0 to 10 min=0.1 and max=9.9 so floor returns 0 and 9 and we add 1 to it so it becomes 1 to 10
console.log(Math.floor(Math.random() * 10) + 1); // returns whole number between 1 to 10

console.log(5 == "5"); // returns true as '==' (Loose Equality), compares only value, not datatype, automatically converts types before comparing
console.log(5 === "5"); // returns false as '===' (Strict Equality), compares both value and datatype, no type conversion

// Type conversion
// string to integer
let str = "10"
let str2 = "ahdvb"
let str3 = "0.5"
console.log(Number(str)); // returns 10
console.log(typeof Number(str));
console.log(Number(str2)); // returns NaN

console.log(parseInt(str3)); // returns 0
console.log(typeof parseInt(str3));

console.log(parseFloat(str3)); // returns 0.5
console.log(typeof parseFloat(str3));

// number to string
let num = 10;
console.log(String(num));
console.log(typeof String(num));

// Array and its built-in methods

let arr = [10, 20, 30, 40, 50];

console.log(arr.at(0)); // returns value present at the index 0
arr.push(100); // adds to the end
console.log(`after arr.push(100): ${arr}`);
arr.pop(); //  removes from the end
console.log(`after arr.pop(): ${arr}`);
arr.unshift(100); // adds to the beginning
console.log(`after arr.unshift(100): ${arr}`);
arr.shift(); // removes from the beginning
console.log(`after arr.shift(): ${arr}`);
// splice(start, deleteCount, items) -> adds or removes at any position
arr.splice(1, 0, 200); // inserts 200 at index 1
console.log(`after arr.splice(1, 0, 200): ${arr}`);
arr.splice(1, 1); // removes 1 element at index 1
console.log(`after arr.splice(1, 1): ${arr}`);
console.log(arr.indexOf(50)); // returns index of first match, -1 if not found
console.log(arr.includes(100)); // checks if value exists, returns true or false
console.log(arr.length); // returns length of an array

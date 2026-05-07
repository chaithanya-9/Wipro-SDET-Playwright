//Prototype: it is used to use memory efficiently by sharing one copy of a function for all the objects instead of having its own copy of a function
// without prototype it would be many : many, with prototype it would be many : one

function user(name, age) {
    this.name = name;
    this.age = age;
}

user.prototype.greet = function () {
    console.log(`${this.name} says Hello!`);
}

user.prototype.yearsOld = function () {
    console.log(`${this.name}'s ${this.age} years old!`);
}

const user1 = new user("K", 34);
const user2 = new user("Joi", 30);

user1.greet();
user1.yearsOld();

user2.greet();
user2.yearsOld();

//callback function
function sum(a, b) {
    console.log(`sum: ${a + b}`);
}

function math(callback) {
    callback(10, 20);
}

math(sum); // here sum() is callback function because it passed as a parameter to another function

//higher order function: a function which takes a callback function as a parameter
// here math() is higher order function and sum() is callback function

// stack : it stores data in last in first out order (LIFO)
// premitive types will be stored in stack and it fetches fastly 
// primitive copy
let a = 10;
let b = a;
a = 20;
console.log(a, b); // output will be a=20 and b=10, because b stores a copy of a so when a changes its value b's value doesnt get updated 

// heap: it stores objects like funtions, arrays and in random order and its fetches slowly compared to stack
// refrence copy
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2[0] = 10;
console.log(arr1[0], arr2[0]); // both arrays 0th index value will be 10 because it stores the refernce of the object so if any other variables which stores the same reference then the object's data will be updated 

// to copy array we use spread operator '...'
let arr3 = [1, 2, 3, 4];
let arr4 = [5, 6, 7];

let arr5 = [...arr3, ...arr4];
console.log(arr5);
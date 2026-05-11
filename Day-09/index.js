//Default parameter
function greet(name = "nobody") { //if no argumemt is given, nobody will betaken as default parameter
    console.log(`Hello! ${name}`);
}

greet("elliot"); // output will be elliot
greet(); // output will be nobody

//spread operator
const arr = [1, 2, 3, 4, 5];
const arr2 = [...arr, 6, 7, 8]; // ...arr will expands its values into individual elements 

console.log(arr2); // [1,2,3,4,5] will be individual elements in arr2

const obj = {
    name: "nobody",
    age: 53
}

const obj2 = {
    ...obj,
    mailId: "nobody@gmail.com"
}

console.log(obj2); // output will be { name: 'nobody', age: 53, mailId: 'nobody@gmail.com' }

// rest operator: will take multiple values into a single array 
function add(...arr) {
    console.log(arr); // output will be [1,2,3,4,5]
    console.log(arr.reduce((acc, curr) => { return acc + curr }, 0));
}

add(1, 2, 3, 4, 5); // 1+2+3+4+5

// destructuring

// for arrays
const destructureArray = [10, 20, 30];
const first = arr[0];
const second = arr[1];
const third = arr[2];
console.log(`first:${first}\nsecond: ${second}\nthird:${third}`);

//using position based extraction
// instead of this we can directly assign values 
const [firstIndex, secondIndex, thirdIndex] = [100, 200, 300];
console.log(`first:${firstIndex}\nsecond: ${secondIndex}\nthird:${thirdIndex}`);

// for objects
// key based extracted
const { name, age } = { name: "aryan", age: 25 };
console.log(name, age);
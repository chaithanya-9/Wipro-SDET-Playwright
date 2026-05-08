// Hoisting -> it is a js behaviour of moving variable declaration to the top of its scope before the code runs

//var
console.log(num); // output will be undefined 
var num = 10;
console.log(num); // output will be 10\

// because var will be hoisted and its decalration var num=undefined; is moved to the top and initialisation num=10; will be stayed there as before so whenever we try to access var num even before its written then it will print undefined without throwing error

//let/const
// but for let and const its different like let and const will be hoisted but not initialise as undefined 
// so it stays in temporal dead zone from the top of its scope until the declaration line
console.log(num2); // output will be error
let num2 = 10;
console.log(num2); // output will be 10

//function
// function will be hoisted with its body 

greet();

function greet() { // this greet() will be hoisted with its whole body above to its scope so we can call it before its scope
    console.log("hello");
}

//arrow function
// but arrow function will work different as we store that function in variable so it follows that variable's hoisting rules

// prototype
const animal = { eats: "yes" };
// create one memory for eats:"yes" ex:address=1000
//and animal stores 1000 like animal=1000 so it points to 1000 memory address

const dog = animal;
// here we are giving animals reference to dog 
// so now dog=1000

const dog1 = Object.create(animal); // new object will be created and prototype will be attached to animal object
// here creates a new empty object ex: address=2000 not same memory address as animal, both are different objects
// but dog1 can access eats property by prototyoe but dog which stores same reference as animal can access eats property directly without prototype
// so when we change dog.eats="no" then it will chnage in 1000 memory location caz it directly points to it 
// but dog1.eats="no" then it will not change anything as it is not directly attached

console.log(dog); // shows object eats:"yes"
console.log(dog1); // shows empty object 

console.log(dog.eats); // yes, this gets from the memory location 1000
console.log(dog1.eats); // yes, but this gets from parent object prototype

// prototype is a reference inside dog1 which points to animal


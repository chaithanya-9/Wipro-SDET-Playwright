let a = 10;
let b = 20;
let name = "Java Script";

// Arithmatic Operators
console.log("Addition:", a + b); // '+' will add two numbers and if oneside is string then it concatinates 
console.log("Subtraction:", a - b); // '-' will subtract right variable's value from left variable's value
console.log("Multiplication:", a * b); // '*' will multiply variables values
console.log("Division:", a / b); // '/' will divide left variable's value by right variable's value
console.log("Modulus:", a % b); // '%' will return remainder after divisiion
console.log("Exponential:", a ** b); // '**' will raises left variable's value to the power of right variable's value

// Logical Operators and Conditional Operators
console.log("a > b:", a > b); // returns false as a not greater than b
console.log("a < b:", a < b); // returns true as a less than b
console.log("a == b:", a == b); // returns false as a is not equal to b ('===' is strict equal which checks for value and datatype)
console.log("a != b:", a != b); // returns true as a is not equal to b 
console.log("AND:", a > 20 && b < a); // '&&' will return true if all the conditions are true 
console.log("OR:", a > 20 || b < 30); // '||' will return true if any of the conditions is true
console.log("NOT:", !true); // '!' will flip the boolean value (true to false, false to true)

// String Functions
console.log("Length:", name.length); // returns the number of characters present in the string
console.log("Upper:", name.toUpperCase()); // converts string to upper case
console.log("Lower:", name.toLowerCase()); // converts string to lower case
console.log("Substring:", name.substring(0, 4)); // extracts characters from start index up to end index (but not includes end index character)


// Array in java script is unlike other programing languages it can store different type of data and values can be accesed using index which starts from 0
let arr = [1, "Java Script", true, 49.49];
console.log(`Array:`, arr);
console.log(`value at last index:`, arr[arr.length - 1]);

//Loops
// for loop executes a block of code repeatedly for a specific number of times based on the condition 
// we use for loop if we know the number of iterations
console.log("Using for loop:");
for (let i = 0; i < arr.length; i++) {
    console.log(`arr[${i}]: ${arr[i]}`);
}

// while loop executes a block of code repeatedly as long as the condition is true 
// we use while loop when we dont know the number of iterations
let i = 0;
console.log("Using while loop:");
while (i < arr.length) {
    console.log(`arr[${i}]: ${arr[i]}`);
    i++;
}

// Conditional Statememnts 
// if else 
let num1 = 100;
let num2 = 200;
if (num1 > num2) {
    console.log(`${num1} is greater than ${num2}`);
} else {
    console.log(`${num2} is greater than ${num1}`);
}

// if else-if else
if (num1 > num2) {
    console.log(`${num1} is greater than ${num2}`);

} else if (num1 === num2) {
    console.log(`${num1} is equal to ${num2}`);
} else {
    console.log(`${num2} is greater than ${num1}`);
}

// switch case
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("Monday");
        break;
    case "Tuesday":
        console.log("Tuesday");
        break;
    case "Wednusday":
        console.log("Wednusday");
        break;
    case "Thursday":
        console.log("Thursday");
        break;
    case "Friday":
        console.log("Friday");
        break;
    case "Saturday":
        console.log("Saturday");
        break;
    case "Sunday":
        console.log("Sunday");
        break;
    default:
        console.log("Invalid Day");
        break;
}





let name = "nobody";
console.log(name);

let name1: string = "nobody"; // shoudld only assing strings
console.log(name1);

// this function takes numbers as arguments and returns string
function addition(num1: number, num2: number): string {
    return "sum: " + (num1 + num2);
}

console.log(addition(10, 20));
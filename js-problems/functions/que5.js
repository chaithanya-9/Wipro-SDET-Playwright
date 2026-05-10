// 5. Create a calculator using functions for add, subtract, multiply, and divide. 

const calculatorObject = {
    addition: (...values) => { return values.reduce((acc, curr) => { return acc + curr }, 0) },
    subtraction: (...values) => { return values.slice(1).reduce((acc, curr) => { return acc - curr }, values[0]) },
    // acc will be arrays 0th index value and value.slice(1) returns copy of array from 1st index
    multiplication: (...values) => { return values.slice(1).reduce((acc, curr) => { return acc * curr }, values[0]) },
    division: (...values) => { return values.slice(1).reduce((acc, curr) => { return acc / curr }, values[0]) }
}

console.log(`Addition: ${calculatorObject.addition(10, 20, 30)}`);
console.log(`Subtraction: ${calculatorObject.subtraction(30, 20)}`);
console.log(`Multiplacation: ${calculatorObject.multiplication(10, 20, 30)}`);
console.log(`Division: ${calculatorObject.division(30, 10)}`);
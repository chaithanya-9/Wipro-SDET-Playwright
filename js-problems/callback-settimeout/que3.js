// 3. Create a callback - based calculator.

function addition(num1, num2) {
    return num1 + num2;
}
function subtraction(num1, num2) {
    return num1 - num2;
}
function multiplication(num1, num2) {
    return num1 * num2;
}
function division(num1, num2) {
    return num1 / num2;
}

function calculator(num1, num2, operation) {
    const result = operation(num1, num2);
    console.log(result);
}

calculator(10, 20, addition);
calculator(20, 20, subtraction);
calculator(10, 5, multiplication);
calculator(100, 10, division);
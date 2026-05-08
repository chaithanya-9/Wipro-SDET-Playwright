// 4. Create a simple calculator using variables and arithmetic operators. 

function calculator(num1, num2, op) {
    switch (op) {
        case "+":
            console.log(`${num1} + ${num2} = ${num1 + num2}`);
            break;
        case "-":
            console.log(`${num1} - ${num2} = ${num1 - num2}`);
            break;
        case "*":
            console.log(`${num1} * ${num2} = ${num1 * num2}`);
            break;
        case "/":
            console.log(`${num1} / ${num2} = ${num1 / num2}`);
            break;
        case "%":
            console.log(`${num1} % ${num2} = ${num1 % num2}`);
            break;
        default:
            console.log("invalid operator!");
            break;
    }
}

calculator(10, 30, "+");
calculator(30, 100, "-");
calculator(100, 100, "*");
calculator(20, 0, "/");
calculator(50, 100, "%");

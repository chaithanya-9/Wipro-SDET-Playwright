// 3. Find factorial of a number using loops. 

let num = 6;
let result = 1;
for (let i = num; i > 0; i--) {
    result *= i;
}
console.log(`factorial of ${num} : ${result}`);
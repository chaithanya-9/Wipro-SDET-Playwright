// 4. Find Fibonacci series up to n numbers. 

let num = 10;
let a = 0;
let b = 1;
let result = "";
for (let i = 0; i < num; i++) {
    result += a + " ";
    let temp = a;
    a = b;
    b = temp + b;
}
console.log(`fibonacci seires upto ${num} number: ${result.trim()} `)

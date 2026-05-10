// 3. Write a program demonstrating closure behavior. 
//closure: A closure is when an inner function remembers and accesses variables from its outer function's scope even after the outer function has finished executing.

function outerFunction() {
    let sum = 0; // 0
    return function innerFunction1() {
        sum++; // becomes 1
        console.log(`sum is accessing from innerFunction1: ${sum}`); // output will be 1
        return function innerFunction2() {
            sum++; // becomes 2
            console.log(`sum is accessing from innerFunction2: ${sum}`); // output will be 2
        }
    }
}

const inner1 = outerFunction(); // gets innerFunction1
const inner2 = inner1(); // calls it, logs sum: 1, returns innerFunction2
inner2(); // calls it, logs sum: 2
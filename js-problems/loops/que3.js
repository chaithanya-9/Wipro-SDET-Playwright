// 3. Find sum of all even numbers between 1 and 100.

let sum = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        sum += i;
    }
}
console.log(`sumof all even numbers between 1 and 100: ${sum}`);
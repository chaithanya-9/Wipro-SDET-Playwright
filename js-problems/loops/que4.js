// 4. Print all prime numbers between 1 and 100. 

let str = "";
for (let i = 2; i <= 100; i++) {
    let isPrime = true;
    for (let j = 2; j * j <= i; j++) {
        if (i % j === 0) {
            isPrime = false;
        }
    }
    if (isPrime) {
        str += `${i} `;
    }
}
console.log(`prime numbers between 1 and 100: ${str.trim()}`);
// Calculate the total sum of all prices in the array

const prices = [19.99, 5.50, 3.99, 25.00];

let totalSum = prices.reduce((acc, curr) => { return acc + curr }, 0);

console.log(totalSum);
// Remove the last price as handling fee, convert remaining strings to numbers, and calculate the total price

let prices = ["100", "200", "300", "50"];

prices.pop();

prices = prices.map((d) => { return Number(d) });

let totalPrice = prices.reduce((acc, curr) => { return acc + curr }, 0);

console.log(`Total Price: ${totalPrice}`);
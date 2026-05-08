// Filter even numbers from the array and return their squares

const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter((d) => { return d % 2 === 0 });

const squareNumbers = evenNumbers.map((d) => { return d * d });

console.log(squareNumbers);

// Count the number of times 'apple' appears in the array

const fruits = ['apple', 'banana', 'orange', 'apple', 'grape', 'apple'];

let appleCount = fruits.reduce((acc, curr) => {
    return curr === "apple" ? acc + 1 : acc;
}, 0)

console.log(appleCount);

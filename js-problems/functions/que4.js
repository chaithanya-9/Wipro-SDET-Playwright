// 4. Write a function that accepts an array and returns only even numbers. 

function evenValues(arr) {
    return arr.filter((d) => { return d % 2 === 0 });
}

console.log(evenValues([1, 2, 3, 4, 5, 5, 6]));
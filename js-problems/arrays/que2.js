// 2. Remove duplicate elements from an array. 

let arr = [10, 10, 20, 30, 10, 20];
let unqArray = [...arr];

for (let i = 0; i < unqArray.length; i++) {
    for (let j = i + 1; j < unqArray.length; j++) {
        if (unqArray[i] === unqArray[j]) {
            unqArray.splice(j, 1);
        }
    }
}

console.log(`unique array: [${unqArray}]`);
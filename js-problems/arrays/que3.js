// 3. Sort an array without using built-in sort().
// bubble sort
let arr = [100, 20, 49, 2, 39, 86];
let sortedArray = [...arr];

for (let j = 0; j < sortedArray.length; j++) {
    let i = 0;
    while (i + 1 < sortedArray.length) {
        if (sortedArray[i] > sortedArray[i + 1]) {
            // let temp = arr[i];
            // arr[i] = arr[i + 1];
            // arr[i + 1] = temp;
            [sortedArray[i], sortedArray[i + 1]] = [sortedArray[i + 1], sortedArray[i]];
        }
        i++;
    }
}
console.log(`original array:[${arr}]\nsorted array: [${sortedArray}]`);
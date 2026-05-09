// 4. Find second largest number in an array. 

let arr = [100, 20, 49, 2, 39, 86, 98];

let secondLargest = 0;
let max = 0;

for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
        max = arr[i];
    }
    else if (secondLargest < arr[i]) {
        secondLargest = arr[i];
    }
}
console.log(`second largest number in [${arr}]: ${secondLargest}`);
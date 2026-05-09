// 5. Merge two arrays and remove duplicates. 

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 4, 5, 6, 7];
let newArray = [...arr1];

for (let i = 0; i < arr2.length; i++) {
    if (!newArray.includes(arr2[i])) {
        newArray.push(arr2[i]);
    }
}
console.log(newArray);
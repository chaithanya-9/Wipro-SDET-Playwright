// 4. Convert an object into an array of keys and values. 

const studentObject = {
    name: "nobody",
    age: 16,
    class: 10,
    section: "A"
}
const arr = [];
for (const key in studentObject) {
    arr.push(`${key}: ${studentObject[key]}`);
}
console.log(arr);


// i have doubt in this question that is my approach correct, so i searched in claude and it gaves the below answer.
const arr2 = Object.entries(studentObject);
console.log(arr2);
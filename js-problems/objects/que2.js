// 2. Count number of keys in an object. 

const studentObject = {
    name: "nobody",
    age: 16,
    class: 10,
    section: "A"
}
let count = 0;

for (const key in studentObject) {
    if (Object.hasOwn(studentObject, key)) {
        count++;
    }
}
console.log(`number of keys in studentObject: ${count}`);
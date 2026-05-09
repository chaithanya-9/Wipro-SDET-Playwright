// 1. Create an object for a student and display all properties dynamically. 

const studentObject = {
    name: "nobody",
    age: 16,
    class: 10,
    section: "A"
}

for (const key in studentObject) {
    console.log(`${key}: ${studentObject[key]}`);
}
// 5. Write a program that takes a user’s birth year and calculates age. 

function calculateAge(year) {
    let presentYear = new Date().getFullYear();
    console.log(`Your age: ${presentYear - year}`);
}

calculateAge(2004);

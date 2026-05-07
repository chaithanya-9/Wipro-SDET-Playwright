//Prototype: it is used to use memory efficiently by sharing one copy of a function for all the objects instead of having its own copy of a function
// without prototype it would be many : many, with prototype it would be many : one

function user(name, age) {
    this.name = name;
    this.age = age;
}

user.prototype.greet = function () {
    console.log(`${this.name} says Hello!`);
}

user.prototype.yearsOld = function () {
    console.log(`${this.name}'s ${this.age} years old!`);
}

const user1 = new user("K", 34);
const user2 = new user("Joi", 30);

user1.greet();
user1.yearsOld();

user2.greet();
user2.yearsOld();
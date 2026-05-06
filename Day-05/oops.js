// OOP -> Object Oriented Programming

class Animal {
    static name;
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} says hello`);

    }
}

const dog = new Animal("Jessie");
const cat = new Animal("catsik");

dog.speak();
cat.speak();

// example1: 
class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I am ${this.age} years old and I am in grade ${this.grade}`);
    }
}
const student1 = new Student("K", 18, 12);

student1.introduce();

// example2:
class Calculator {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    addition() {
        console.log(`${this.num1} + ${this.num2} = ${this.num1 + this.num2}`);
    }
    subtraction() {
        console.log(`${this.num1} - ${this.num2} = ${this.num1 - this.num2}`);
    }
    multiplication() {
        console.log(`${this.num1} * ${this.num2} = ${this.num1 * this.num2}`);
    }
    division() {
        console.log(`${this.num1} / ${this.num2} = ${this.num1 / this.num2}`);
    }
}

const obj = new Calculator(10, 20);

obj.addition();
obj.subtraction();
obj.multiplication();
obj.division();
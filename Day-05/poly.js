// Polymorphism: same method but different behaviour for each class

// example 1
class Shape {
    area() {
        console.log("Calculating Area");
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        console.log(`Area of Circle: ${Math.PI * this.radius * this.radius}`);
    }
}

class Rectangle extends Shape {
    constructor(length, height) {
        super();
        this.length = length;
        this.height = height;
    }
    area() {
        console.log(`Area of Rectangle: ${this.length * this.height}`);
    }
}

const circle1 = new Circle(10);
const rectangle1 = new Rectangle(10, 20);

circle1.area();
rectangle1.area();

// example 2
class Animal {
    constructor(name) {
        this.name = name;
    }
    sound() {
        console.log(`some animal making sounud`);
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    sound() {
        console.log(`${this.name} is barking`);
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    sound() {
        console.log(`${this.name} is meowing`);
    }
}

const dog1 = new Dog("Wisky");
const cat1 = new Cat("Jessie");

dog1.sound();
cat1.sound();
// or 
let animal = [dog1, cat1];

animal.forEach((d) => { d.sound() });
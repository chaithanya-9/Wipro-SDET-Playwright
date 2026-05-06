// Inheritence: A class can inherit properties and methods from another class using extends. Avoids repeating the same code.

// example 1:
class Animal {
    constructor(name) {
        this.name = name;
    }

    walk() {
        console.log(`${this.name} is walking`);
    }
    eat() {
        console.log(`${this.name} is eating`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name); // calls parent class constructor
        this.breed = breed;
    }
    bark() {
        console.log(`${this.name} is barking`);
    }
}

const dog1 = new Dog("wisky", "husky");

dog1.bark();
dog1.walk();
dog1.eat();

// example 2:
class Vehicle {
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }
    move() {
        console.log(`${this.brand} is moving at ${this.speed} km/h`);
    }
    stop() {
        console.log(`${this.brand} has stopped`);
    }
}

class Car extends Vehicle {
    constructor(brand, speed, numOfDoors) {
        super(brand, speed);
        this.numOfDoors = numOfDoors;
    }
    honk() {
        console.log(`${this.brand} is honking`);
    }
}

class Bike extends Vehicle {
    constructor(brand, speed, type) {
        super(brand, speed);
        this.type = type;
    }
    wheelie() {
        console.log(`${this.brand} is doing wheelie`);
    }
}

const car1 = new Car("Hyundai", 140, 4);
const bike1 = new Bike("Royal Enfield", 120, "cruiser");

car1.move();
car1.honk();
car1.stop();

bike1.move();
bike1.wheelie();
bike1.stop();
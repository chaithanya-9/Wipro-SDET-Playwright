// Abstraction: Hiding complex implementation and only showing what is necessary

class Car {
    #engineSarted = false;

    #checkFuel() {
        console.log("fuel is checked internally, now engine can start!");
    }

    #startEngine() {
        this.#engineSarted = true;
        console.log("engine started internally, now engine can start!");
    }

    drive() {
        this.#checkFuel();
        this.#startEngine();
        console.log("Car is moving externally");
    }
}

const car1 = new Car();
car1.drive();

// example 2
class CoffeeMachine {
    #heatWater() {
        console.log("Heating water internally");
    }
    #grindBeans() {
        console.log("Grinding Beans internally");
    }
    #brewCoffee() {
        console.log("Brewing coffee internally");
    }
    makeCoffee() {
        this.#heatWater();
        this.#grindBeans();
        this.#brewCoffee();
        console.log("Your coffee is ready! externally");
    }
}

const coffee1 = new CoffeeMachine();
coffee1.makeCoffee(); 
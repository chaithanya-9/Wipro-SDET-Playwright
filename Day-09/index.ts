let name = "nobody";
console.log(name);

let name1: string = "nobody"; // shoudld only assing strings
console.log(name1);

let name2: number | string;
name2 = 100; // can assign number
name2 = "str"; // can assign string

// this function takes numbers as arguments and returns string
function addition(num1: number, num2: number): string {
    return "sum: " + (num1 + num2);
}

console.log(addition(10, 20));

interface Animal {
    id: number;
    type: string;
    name: string;
    friendly?: Friendly; // use enum, options(Yes/No) and ? denotes the property is optional
}
enum Friendly {
    Yes = "yes",
    No = "no"
}
const dog: Animal = {
    id: 1,
    type: "dog",
    name: "Jessie",
    friendly: Friendly.Yes
}
const cat: Animal = {
    id: 1,
    type: "cat",
    name: "catsik"
}
console.log(dog, "\n", cat);

//tuple => is like arrays but fixed size 
const tuple: [number, number] = [10, 20];
console.log("tuple:", tuple);

// arrays
const arr: string[] = ["abc", "def"];
console.log("arr", arr);

//Generics -> its reusable code which will work for any type

//generics in function

function generic<T>(val1: T): T {
    return val1;
}

const numFunction = generic<number>(10);
const stringFunction = generic<string>("str");
const booleanFunction = generic<boolean>(true);

console.log(`numFunction: ${numFunction}\nstringFunction: ${stringFunction}\nbooleanFunction: ${booleanFunction}`);

//generic interface
interface GenericInterface<T> {
    content: T;
}

const fruits: GenericInterface<string> = {
    content: "apples"
}

const numbers: GenericInterface<number> = {
    content: 10
}

console.log(`fruits: ${fruits.content}\nnumbers: ${numbers.content}`);

// generic class
class Storage<T> {
    private items: T[] = [];

    addItems(item: T): void {
        this.items.push(item);
    }

    getItem(index: number): T {
        return this.items.at(index)!;
    }
}

const names = new Storage<string>();

names.addItems("abc");
names.addItems("def");

console.log(`items[0]: ${names.getItem(0)}\nitems[1]: ${names.getItem(1)}\nitems[2]:${names.getItem(2)}`);

//generics with constraints (extends keyword)
interface HasLength {
    length: number
}

function getLength<T extends HasLength>(arg: T): void {
    console.log(arg.length);
}

getLength("abcdefghi"); // output will be 9
getLength([1, 2, 3, 4, 5]); // output will be 5
// getLength(12345); // error because number does not have length
//own practice

//Index Signatures: its used when we dont know which type key:value would be stored so we use [key:string]:string|number|boolean so that any key that stores should be in that format
interface Student {
    [key: string]: string | boolean | number; //here we gave key shoud be in string and value can be in string or boolean or number
}

const stdObj: Student = {
    name: "Student 1", // key is string and value is string
    age: 20, // key is string and value is number
    mail: "student1@getParsedCommandLineOfConfigFile.com",
    isPass: true // key is string and value is boolean
}
console.log(stdObj);


//Mapped Types: loop over every key in type and tranform it, its like .map() for arrays but here for types
//syntax: [K in keyof T]:T[K]
type AllOptional<T> = {
    [K in keyof T]?: T[K];     // adds ? to every key
}

type AllReadonly<T> = {
    readonly [K in keyof T]: T[K]; // adds readonly
}

// Removing modifiers with - prefix:
type AllRequired<T> = {
    [K in keyof T]-?: T[K];   // removes ? from every key
}
// -? means "strip the optional modifier", this is literally how Required is built in typrscript

//Remapping keys with "as" — rename while mapping
type Getters<T> = {
    [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K]
}

interface User { name: string; age: number }

type UserGetters = Getters<User>;

// Result:
// { getName: () => string; getAge: () => number }
// "as" lets you remap the key name itself.
// string & K narrows K to string (keyof can include symbols)


//Conditional Types: make types that "branch" based on what another type is, its like an if/else for types
//syntax: T extends X ? Y : Z
type IsString<T> = T extends string ? "yes" : "no";
type A = IsString<string>;
type B = IsString<100>;
type C = IsString<"hello">;

//Distributive conditional types
type ToArray<T> = T extends any ? T[] : never;
type R = ToArray<string | number>;
// You might expect: (string | number)[]
// You actually get:  string[] | number[]
// When T is a bare type parameter and you pass a union, TS distributes the conditional over each member:
// ToArray | ToArray
// → string[] | number[]
//How to turn it off: Wrap T in a tuple — [T] extends [string] — this prevents distribution.


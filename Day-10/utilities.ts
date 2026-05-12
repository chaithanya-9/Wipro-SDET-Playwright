//partial is a built-in utility type in TypeScript that allows you to create a new type by making all properties of an existing type optional.

type User = {
    name: string,
    mail: string,
    age: number,
    isAdmin: boolean
};

const user1: User = {
    name: "user1",
    mail: "user1@gmail.com",
    age: 40,
    isAdmin: false
};
// user1 should have all the properties of User object 

type PartialUser = Partial<User>; // this will be having all the properties as optional
// PartialUser be having {name?:string, mail?:string, age?:number,isAdmin?:boolean}

const user2: PartialUser = {
    name: "user2",
    mail: "user2@gmail.com"
}
// user2 have only name and mail properties

//omit is also a built-in utility type in TypeScript that removes specific properties from a type
type UserWithoutAge = Omit<User, "age">;
// UserWithoutAge be having {name:string, mail:string, isAdmin:boolean}, age key will be removed

// partial with omit
type PartialUserWithoutAge = Partial<Omit<User, "age">>;
//PartialUserWithoutAge be having {name?:string, mail?:string, isAdmin?:boolean}

// Partial makes only top properties as optional but nested properties will not be optional so we use DeepPartial
//DeepPartial is same like Partial but it makes everything as optional including nested properties

// create custome DeepPartial<> type
type DeepPartial<T> = {
    [P in keyof T]?: // makes every key optional present in object 
    T[P] extends (infer U)[] ? DeepPartial<U>[] : // takes that every key and checks if its an array or not, if its an array then it will tka that array and makes its element as DeepPartial and then again makes that array of that DeepPartial type
    T[P] extends Object ? T[P] : T[P] //if its not an array then it will check if its an object or not, if its an object then it will make that object as DeepPartial and if its not an object then it will return that type as it is because we only want to make objects as DeepPartial and not primitive types  
} // uses ternary operator to check if its an array or object or primitive type

const user = {
    id: 21,
    name: "Aryan",
    age: 25
} as const;
// as const makes entire object as readonly
type User1 = typeof user; // this will be having {readonly id:21, readonly name:"Aryan", readonly age:25} because of as const
type PartialUser1 = DeepPartial<User1>; // this will be having {id?:21, name?:"Aryan", age?:25} because of DeepPartial and as const makes it readonly but we are making it optional so it will remove readonly and make it optional

// or we can use built-in Readonly utility type to make entire object as readonly
type ReadonlyUser1 = Readonly<User1>; // this will be having {readonly id:21, readonly name:"Aryan", readonly age:25} because of Readonly utility type

// we can make arrays as readonly using ReadonlyArray utility type
type ReadonlyUserArray = ReadonlyArray<User1>;


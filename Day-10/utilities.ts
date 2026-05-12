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
    [P in keyof T]?:
    T[P] extends (infer U)[] ? DeepPartial<U>[] :
    T[P] extends Object ? T[P] : T[P]
}
// 9. Index Signatures for Dynamic Metadata
// Scenario: You are receiving a "Metadata" object from a server where the keys are dynamic strings, but the values must be either a string, number, or boolean.
// Task: Create an interface UserMetadata that has a required createdAt: Date but allows any other dynamic string keys as long as their values match the union type mentioned.

interface UserMetadata {
    createdAt: Date,
    [key: string]: string | number | boolean | Date
}

const user1: UserMetadata = {
    createdAt: new Date(),
    age: 22,
    name: "Jessie",
    isActive: true,
    score: 96,
};

console.log(user1);
// convert JSON to String
const obj = {
    id: 1,
    name: "JavaScript",
}
console.log(obj); //output: { id: 1, name: 'JavaScript' }
console.log(`type of obj: ${typeof obj}`);
let str = JSON.stringify(obj);
console.log(str); // output: {"id":1,"name":"JavaScript"}
console.log(`type of str: ${typeof str}`);

// convert String to JSON
let obj2 = JSON.parse(str);
console.log(obj2);
console.log(`type of obj2: ${typeof obj2}`);

// ASYNC / AWAIT
// async -> is a keyword we should put before function to refer that fucntion as asynchronous and that function always returns promise
async function getData() {
    return "this is async function";
}
// here getData() returns string but we used async before it so that getData() returns string as Promise.resolve("this is async function")
// so we use .then() to fetch data
getData().then((data) => { console.log(data) });

// await -> it should only be used in async function. it pauses execution at that line until the Promise to resolve/reject
async function getUser() {
    let res = await fetch("https://jsonplaceholder.typicode.com/users/1"); // waits till fetched
    let data = await res.json(); // wait till fetched 
    console.log(data.name);
}
getUser();

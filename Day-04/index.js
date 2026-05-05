//Synchronous program
// code executes in a sequential order (line by line), next line waits for the current line to finish execution before running
// disadvantage is if one block/line takes more time to finish then all the after blocks/lines will wait so its not efficient
function syn1() {
    console.log("Login Successfull");
}
function syn2() {
    console.log("taking alot of time to execute");
    for (let i = 0; i < 1000000000; i++) {
    }
    console.log("Posts fetching");
}
function syn3() {
    console.log("Comments fetching");
}
syn1();
syn2();
syn3();

// to solve this we have 3 ways
// 1) callbacks -> its a function that runs after something finishes, callbacks can be any type of functions(generic function,arrow function, etc)
// this way will be hectic to debug or to understand if we have multiple callbacks and this is called callback hell
function login(callback) {
    setTimeout(() => {
        let username = "admin";
        let password = "admin123"
        callback(username, password); // will be called after 3 seconds
    }, 3000);
    console.log("inside higher order function");
}
login((un, pass) => {
    console.log("inside callback");
    console.log(`username: ${un} / password: ${pass}`);
})

// setTimeout(callback, time) -> will execute the callback function once after a specific delay
setTimeout(() => {
    console.log("Data received");
}, 3000);

// setInterval(callback, time) -> will execute the callback function repeatedly every specific interval until it stopped
let temp = setInterval(() => {
    console.log("Checking for new data...");
}, 3000);

// clearInterval(setInterval) -> stops a setInterval from running, we should store the interval in a variable first to clear it
let count = 0;
let timer = setInterval(() => {
    count++;
    console.log("count:", count);
    if (count === 5) {
        clearInterval(timer);
        console.log("timer stopped");
    }
}, 1000);

// 2) Promise -> an object in js which introduced to solve callback hell and it represents a value that will be available in future
// there are 3 states in Promise
//  Pending -> initial state
//  Resolve -> operation successfull then promise holds result value
//  Reject -> operation failure then promise holds error message
let username = "admin";
let password = "admin123"
function loginPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === "admin" && password === "admin1234") {
                resolve("login successful");
            } else {
                reject("incorrect password");
            }
        }, 2000)
    })
}
loginPromise()
    .then((msg) => { console.log(msg); })
    .catch((e) => { console.log(e) });

// calling api and modifying its data
fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => { return res.json() })
    .then((data) => { return data.filter((d) => { return (d.id % 100) === 0 }) })
    .then((data) => { return data.map((d) => { d.title = "Ojas " + d.title; return d }) })
    .then((data) => { console.log(data) })
    .catch((e) => { console.log(e) })

function fetchData(link, operation) {
    fetch(link)
        .then(res => res.json())
        .then(data => operation(data))
        .catch(e => console.log(e))
}

fetchData("https://catfact.ninja/fact",
    (data) => {
        console.log(`Cat fact: ${data.fact}`);
    })

fetchData("https://official-joke-api.appspot.com/random_joke",
    (data) => {
        console.log(`${data.setup} -> ${data.punchline}`);
    })

fetchData("https://jsonplaceholder.typicode.com/users",
    (data) => {
        let users = data.map(d => ({ name: d.name, email: d.email }))
        console.log(users)
    })

fetchData("https://pokeapi.co/api/v2/pokemon?limit=10",
    (data) => {
        let pokemons = data.results.map(d => d.name.toUpperCase())
        console.log(pokemons)
    })

fetchData("https://api.jikan.moe/v4/top/anime",
    (data) => {
        let animes = data.data.map(d => ({
            rank: d.rank,
            title: d.title,
            score: d.score
        }))
        console.log(animes)
    })

fetchData("https://restcountries.com/v3.1/region/europe",
    (data) => {
        let countries = data.map(d => ({
            name: d.name.common,
            capital: d.capital?.[0],
            population: d.population
        }))
        console.log(countries)
    })

fetchData("https://jsonplaceholder.typicode.com/photos",
    (data) => {
        let photos = data
            .filter(d => d.albumId === 1)
            .map(d => ({ title: d.title, url: d.url }))
        console.log(photos)
    })

fetchData("https://dog.ceo/api/breeds/list/all",
    (data) => {
        let breeds = Object.keys(data.message).map(d => d.toUpperCase())
        console.log(breeds)
    })

fetchData("http://universities.hipolabs.com/search?country=India",
    (data) => {
        let universities = data.map(d => ({
            name: d.name,
            website: d.web_pages[0]
        }))
        console.log(universities)
    })
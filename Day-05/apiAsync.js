// Use Async and Await to fetch API's data and print 

async function api1() {
    let res = await fetch("https://catfact.ninja/fact");
    let data = await res.json();
    console.log(`Cat fact: ${data.fact}`);

}

async function api2() {
    let res = await fetch("https://official-joke-api.appspot.com/random_joke");
    let data = await res.json();
    console.log(`setup: ${data.setup}\npunchline: ${data.punchline}`);

}

async function api3() {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await res.json();
    data = data.filter((d) => { return d.id % 2 === 0; }).map((d) => { return { username: d.username, company: d.company.name } });
    data.forEach((d) => {
        console.log(`username: ${d.username}, company name: ${d.company}`);
    })
}

async function api4() {
    let res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
    let data = await res.json();
    let pokemon = data.results.map((d) => { return { name: d.name.toUpperCase(), url: d.url } });
    pokemon.forEach((d) => { console.log(`name: ${d.name}, url: ${d.url}`) });
}

async function api5() {
    let res = await fetch("https://api.jikan.moe/v4/top/anime");
    let data = await res.json();
    let animes = data.data.map((d) => {
        return { rank: d.rank, title: d.title, score: d.score };
    })
    animes.forEach((d) => {
        console.log(`rank: ${d.rank}, title: ${d.title}, score: ${d.score}`);
    })
}


async function api6() {
    let res = await fetch("https://restcountries.com/v3.1/region/europe");
    let data = await res.json();
    let countries = data.map((d) => { return { name: d.name.common, population: d.population } });
    countries.forEach((d) => {
        console.log(`name: ${d.name}, population: ${d.population}`);
    })
}

async function api7() {
    let res = await fetch("https://jsonplaceholder.typicode.com/photos");
    let data = await res.json();
    let photos = data.filter((d) => { return d.albumId === 1 }).map((d) => { return { title: d.title, url: d.url } });
    console.log(photos);
}

async function api8() {
    let res = await fetch("https://dog.ceo/api/breeds/list/all");
    let data = await res.json();
    let breeds = Object.keys(data.message).map((d) => { return d.toUpperCase() });
    console.log(breeds);
}

async function api9() {
    let res = await fetch("http://universities.hipolabs.com/search?country=India");
    let data = await res.json();
    let universities = data.map((d) => { return { name: d.name, website: d.web_pages[0] } });
    console.log(universities);
}

api1();
api2();
api3();
api4();
api5();
api6();
api7();
api8();
api9();

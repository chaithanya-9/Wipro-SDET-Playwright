// create a function for fetching API's data and reusing it for different API's 

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
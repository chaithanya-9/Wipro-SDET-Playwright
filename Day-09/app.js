// const { default: axios } = require("axios");

const getJokeBtn = document.getElementById("joke-btn");
const jokeID = document.getElementById("joke-id");
const jokeList = document.getElementById("joke-list");
const url = "https://official-joke-api.appspot.com/random_joke";

async function getAJoke(url) {
    try {
        const response = await axios.get(url);
        const jokeObject = response.data;
        const id = jokeObject.id;
        const setup = jokeObject.setup;
        const punchline = jokeObject.punchline;

        jokeID.textContent = id;
        jokeList.innerHTML = `<li class="setup">setup: ${setup}</li> <li class="punchline">punchline: ${punchline}</li>`;
    } catch (e) {
        console.log(`error: ${e}`);
    }
}

getJokeBtn.addEventListener('click', () => {
    getAJoke(url);
});
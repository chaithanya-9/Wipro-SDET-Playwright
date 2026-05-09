// 3. Merge two objects into one. 

const directorObject = {
    director: "sukumar",
    recentMovie: "pushpa2"
}

const moviesObject = {
    movieName: "rangasthalam",
    musicDirector: "DSP"
}

const mergeObject = { ...directorObject, ...moviesObject };
console.log(mergeObject);

// ### Question 3: The Movie Stream Analytics
// **Problem Statement:**
// You are given an array of raw strings representing movie data from a streaming platform. You need to convert this raw data into a structured format to identify top-performing content.
// **Requirements:**
// 1. Parse strings formatted as: "MOVIE_NAME|GENRE|VIEW_COUNT".
// 2. Convert each string into an object with properties for name, genre, and views.
// 3. Ensure the views property is an actual Number. If the views data is corrupted or not a number, default it to 0.
// 4. Create a new list containing only movies from the "Action" or "Sci-Fi" genres with more than 5,000 views.
// 5. Sort the final list by views in descending order (highest views first).
// 6. Return the final array as a JSON string.
// **Input Data Example:**
// ```javascript
// const rawMovies = [
//  "Inception|Sci-Fi|12000",
//  "The Lion King|Animation|8000",
//  "Mad Max|Action|invalid",
//  "The Matrix|Sci-Fi|15000",
//  "Gladiator|Action|4500"
// ];

const rawMovies = [
    "Inception|Sci-Fi|12000",
    "The Lion King|Animation|8000",
    "Mad Max|Action|invalid",
    "The Matrix|Sci-Fi|15000",
    "Gladiator|Action|4500"
];

// // create movies array and used forEach to traverser rawMovies array and split each index value based on "|" this character and split method returns array and push that array into movies
const movies = [];
rawMovies.forEach((d) => {
    return movies.push(d.split("|"));
})

// moviesObject stores array of objects which return from movies.map() after validating views as number and if not number insert 0
const moviesObject = movies.map((d) => {
    return { name: d[0], genre: d[1], views: Number(d[2]) || 0 }
})

// moviesObject.filter filters based on genre as Action or Sci-Fi and views having more than 5000 
const newList = moviesObject.filter((d) => {
    return (d.genre === "Action" || d.genre === "Sci-Fi") && d.views > 5000;
})

//sorted in descing order based on views 
const sortedNewList = newList.toSorted((a, b) => b.views - a.views);

console.log(JSON.stringify(sortedNewList));

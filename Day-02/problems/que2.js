// Filter numbers from a mixed array and return only those above a random threshold (1–50)

let mixedArr = ["Henry", 90, 50, "Sam", 7];

sortedArray = mixedArr.filter((d) => { return typeof d === "number" });

const threshold = Math.floor(Math.random() * 50) + 1;

sortedArray = sortedArray.filter((d) => { return d > threshold });

console.log(sortedArray);


// 4. Capitalize the first letter of every word in a sentence. 

let str = "this is playwright course";

let newStr = str.split(" ")
    .reduce((acc, curr) => { return acc + curr.charAt(0).toUpperCase().concat(curr.substring(1)) + ' ' }, "")
    .trim();

console.log(newStr);

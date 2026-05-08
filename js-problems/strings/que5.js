// 5. Find the longest word in a sentence. 

let str = "this is playwright course";

let wordsArray = str.split(" ");
let maxLength = 0;
let longestWord;
for (let i = 0; i < wordsArray.length; i++) {
    if (maxLength < wordsArray[i].length) {
        maxLength = wordsArray[i].length;
        longestWord = wordsArray[i];
    }
}
console.log(`Longest word in "${str}" : ${longestWord}`);

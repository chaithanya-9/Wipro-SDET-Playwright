// 5. Create a number guessing game using loops. 

let randomNumber = Math.floor(Math.random() * 100) + 1;

let userInput; //should take user input from here 

while (userInput != randomNumber) {
    console.log("wrong guess!");
    if (userInput > randomNumber) {
        console.log("too high");
    } else {
        console.log("too low");
    }
}
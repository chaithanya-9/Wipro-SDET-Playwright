// 1. Reverse a string without using built-in reverse methods.

let str = "playwright";

let revStr = "";

for (let i = str.length - 1; i >= 0; i--) {
    revStr += str.charAt(i);
}

console.log(revStr);
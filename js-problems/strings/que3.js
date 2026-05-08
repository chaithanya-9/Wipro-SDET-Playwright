// 3. Check whether a string is a palindrome. 

let str = "playwright";

let start = 0;
let end = str.length - 1;
let isPalindrome = true;
while (start <= end) {
    if (str.charAt(start) != str.charAt(end)) {
        isPalindrome = false;
        break;
    }
    start++;
    end--;
}

if (isPalindrome) {
    console.log(`${str} is a palindrome`);
} else {
    console.log(`${str} is not a palindrome`);
}
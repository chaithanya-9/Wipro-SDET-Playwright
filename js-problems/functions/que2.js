// 2. Write a function to check whether a number is palindrome. 

function palindrome(num) {
    let tempNum = num;
    let rev = 0;
    let rem = 0;
    while (tempNum > 0) {
        rem = tempNum % 10;
        rev = rev * 10 + rem;
        tempNum = Math.floor(tempNum / 10);
    }
    return num === rev;
}

if (palindrome(121)) {
    console.log("p");
} else {
    console.log("not p");

}
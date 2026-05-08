// 5. Check whether a number is Armstrong number. 

let num = 153;
let len = String(num).length;
let result = 0;
let tempNum = num;
while (tempNum > 0) {
    result += ((tempNum % 10) ** len);
    tempNum = Math.floor(tempNum / 10);
}
if (num === result) {
    console.log(`${num} is a Armstrong number`);
} else {
    console.log(`${num} is not a Armstrong number`);
}

// 2. Count the number of vowels in a string. 

function countVowels(str) {
    let vowels = "aeiou";
    let tempStr = str.toLowerCase();
    let count = 0;
    for (let i = 0; i < tempStr.length; i++) {
        if (vowels.includes(tempStr.charAt(i))) {
            count++;
        }
    }
    console.log(`total vowels in ${str}: ${count}`);
}

countVowels("plAywrIght");
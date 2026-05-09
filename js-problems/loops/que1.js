// 1. Print star pyramid patterns.

console.log("Right angle pyramid:")
for (let i = 0; i < 5; i++) {
    let str = "";
    for (let j = 0; j < i + 1; j++) {
        str += "* "
    }
    console.log(str);
}

console.log("\nGeneric pyramid:")
for (let i = 0; i < 5; i++) {
    let str = "";
    for (let k = i; k < 5; k++) {
        str += " ";
    }
    for (let j = 0; j < i + 1; j++) {
        str += "* "
    }
    console.log(str);
}

console.log("\nLeft angle pyramid:")
for (let i = 0; i < 5; i++) {
    let str = "";
    for (let k = i; k < 5; k++) {
        str += "  ";
    }
    for (let j = 0; j < i + 1; j++) {
        str += "* "
    }
    console.log(str);
}

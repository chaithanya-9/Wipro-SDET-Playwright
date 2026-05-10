// 2. Create examples showing block scope using let. 

let global = "can be accessed globally";
{
    let block = "just for this block";
    console.log(`global is accessing inside block: ${global}`) // output will be no error
    console.log(`block is accessing inside block: ${block}`) // output will be no error
}

console.log(`global is accessing outside block: ${global}`) // output will be no error
console.log(`block is accessing outside block: ${block}`) // output will be error
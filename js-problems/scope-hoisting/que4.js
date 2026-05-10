// 4. Create nested functions and access outer variables.

function outerFunction() {
    let sum = 0; // 0
    function innerFunction1() {
        sum++; // becomes 1
        console.log(`accessing outerFunction variable in innerFunction1: ${sum}`)
        function innerFunction2() {
            sum++; // becomes 2
            console.log(`accessing innerFunciton1 variable in innerFunction2: ${sum}`)
        }
        innerFunction2(); // goes into innerFunction2
    }
    innerFunction1(); // goes into innerFuntion1
    console.log(`sum: ${sum}`); // output will be 2
}

outerFunction();

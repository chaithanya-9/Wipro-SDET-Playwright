// check and log the data type of a given input

function check(input) {
    switch (typeof input) {
        case "number":
            console.log(`${input} is a number`);
            break;
        case "string":
            console.log(`${input} is a string`);
            break;
        case "boolean":
            console.log(`${input} is a boolean`);
            break;
        case "object":
            console.log(`${input} is a object`);
            break;
        default:
            console.log(`${input} is unknown type`);
            break;
    }
}

check(10); //number
check("abc"); //string
check(true); //boolean
check(null); //object 
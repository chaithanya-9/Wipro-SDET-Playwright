// 2. Write a program to check whether a given value is a number, string, boolean, null, or undefined. 

function valueValidation(val) {
    switch (typeof val) {
        case "number":
            console.log(`${val} is: number`);
            break;
        case "string":
            console.log(`${val} is: string`);
            break;
        case "boolean":
            console.log(`${val} is: boolean`);
            break;
        case "undefined":
            console.log(`${val} is: undefined`);
            break;
        default:
            if (val === null) {
                console.log(`${val} is: null`);
            }
            break;
    }
}

let a;
valueValidation(a);

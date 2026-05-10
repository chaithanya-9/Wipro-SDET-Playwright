// 5. Debug a program with incorrect variable scoping. 

function getUserInfo() {
    //var username=undefined; hoisted here
    if (true) {
        // let password; hoisted here and will be in temporary deadzone
        var username = "John"; // var hoisted and goes top of its scope which is function scope and assigned as undefined and assinged "John"
        let password = "1234"; // let hoisted and goes top of its scope which is block scope and assigned "1234" at this line  
    }
    console.log(username); // output will be John because username can be accessed anywhere inside function as it is declared with var which is funciton scope
    console.log(password); // output will be error becuase password can be only accessed inside if block as it is declared with let which is block scope
}

getUserInfo(); // calls getUserInfo()
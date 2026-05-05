// extract and print initials from a full name

let name = "John Doe";

let firstNameInitial = name.charAt(0);
let lastNameInitial = name.charAt(name.indexOf(" ") + 1);

console.log(firstNameInitial + lastNameInitial);

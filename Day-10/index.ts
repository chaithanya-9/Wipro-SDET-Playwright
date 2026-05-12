// enum defines set of values 
enum Role {
    Admin = "Admin",
    User = "User",
    SuperUser = "SuperUser"
};

enum Previlage {
    Read = "Read",
    Write = "Write",
    Delete = "Delete"

};

// type creates custome type that anything can use to define their type
type Emp = {
    id: string | number,
    name: string,
    role: Role
};

type Admin = {
    previlages: Previlage[]
};

// & means both Emp and Admin properties should be there in SuperAdmin
type SuperAdmin = Emp & Admin;

// this array will be having either of Emp,Admin,SuperAdmin types in its indexes
let list: (Emp | Admin | SuperAdmin)[] = [];

function addEmp(emp: (Emp | Admin | SuperAdmin)): void {
    list.push(emp);
}

// returns Emp or Admin or SuperAdmin or if that index doesnt exist then returns undefined
function getEmp(index: number): (Emp | Admin | SuperAdmin | undefined) {
    return list[index];
}

addEmp({ id: 1, name: "user1", role: Role.User });
addEmp({ id: 2, name: "user2", role: Role.SuperUser, previlages: [Previlage.Read, Previlage.Write] });

// console.log("user 1:", getEmp(0));
// console.log("user 2:", getEmp(1));
// console.log("user 3:", getEmp(2));

//typeof and keyof
//typeof converts objects to types
//keyof converts types to keys and gives as union and should be use only after converting object to types 
const example = { x: 10, y: 20 };
// typeof example becomes {x:number, y:number}
// keyof typeof example becomes "x" | "y"
type ExampleKeys = keyof typeof example;
const exp1: ExampleKeys = "x"; // exp1 can only have "x" or "y" as its type is ExampleKeys 
const exp2: ExampleKeys = "y";
console.log(exp1, exp2);

enum Section {
    A = "A",
    B = "B",
    C = "C"
}
type Student = {
    id: number,
    name: string,
    class: number,
    section: Section
}

const std1: Student = {
    id: 1,
    name: "jack",
    class: 10,
    section: Section.A
}

// here T will be {id:number,name:string,class:number,section:Section}
// K will be keyof T => "id"|"name"|"class"|"section" and it extends T so K must be one of thosse keys
function getStudent<T, K extends keyof T>(std: T, key: K) {
    return (std[key]);
}

console.log(getStudent(std1, "name")); // no error because std1 contains name 
// console.log(getStudent(std1, "mail")); error because mail property is not there in std1 which is type of Student  
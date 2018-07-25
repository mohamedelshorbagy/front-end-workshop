/**
 * 
 * Typescript
 * 
 */

/**
 * 
 * Types
 * 
 */

let nameData: string = "Ahmed";
// nameData = 22;
let data = 12;
let age: any;
age = "Ahmed";
age = 22;


let user: { name: string, age: number } = {
    name: 'Ahmed',
    age: 12
}

// user = {} ==> Error!

let arr: number[] = [1, 12];
arr = [];
arr = [1]


let username: string | number = "Ahmed";
username = 22;

interface IUser {
    name: string,
    age: number
}



let arr2: Array<IUser> = [{
    name: 'Ahmed',
    age: 2
}];

function logged(constructorFn: Function) {
    console.log(constructorFn);
}


@logged
class User {
    name: string;
    age: number;


    constructor() {
        this.name = "mohamed";
        this.age = 22;
    }

    getName() {
        return this.name;
    }
}


function sum(a: number, b: number) {
    console.log(a + b);
}


const newUser = new User();

console.log(newUser);


sum(2, 3)
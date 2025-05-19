//1.  Start with gradual typing
//this is valid TypeScript (and JavaScript)
// function greet(name){
//     return 'Hello, ' + name;
// }


//2. Add basic Type Annotations:
function greet(name:string):string {
    return 'Hello, ' + name;
}

// Variables with types
let age: number = 25;
let isActive: boolean = true;
let items: string[] = ['apple', 'banana'];


//3. Use Type Inference when possible
// Only add types when inference isn't clear
let value:string | number; // union type


//4. Learn Object types Gradually
//simple object type
// let person: {name: string; age: number} = {
//     name:'Alice',
//     age:30
// }


//better use interfaces
interface Person {
    name:string;
    age:number;
}

let person:Person = {
    name:'Alice',
    age:30
}
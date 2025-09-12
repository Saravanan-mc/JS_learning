let name = "Raj";        // String
let age = 25;            // Number
let big = 123456789n;    // BigInt
let isAdmin = true;      // Boolean
let test;                // Undefined
let empty = null;        // Null
let sym = Symbol("id");  // Symbol

console.log(typeof name);     // string
console.log(typeof age);      // number
console.log(typeof big);      // bigint
console.log(typeof isAdmin);  // boolean
console.log(typeof test);     // undefined
console.log(typeof empty);    // object (special case in JS!)
console.log(typeof sym);      // symbol

let person = { name: "Raj", age: 25 };  // Object
let numbers = [1, 2, 3, 4, 5];          // Array
function greet() { return "Hello"; }    // Function
let today = new Date();                 // Date object

console.log(typeof person);   // object
console.log(typeof numbers);  // object
console.log(typeof greet);    // function
console.log(typeof today);    // object

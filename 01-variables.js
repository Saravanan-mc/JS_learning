/******************************************
 01-variables.js
 JavaScript Variables – Beginner to Advanced
******************************************/

// -------------------------------
// 1. VAR – Function Scoped
// -------------------------------
var oldVar = "I am a var variable";
console.log("Var:", oldVar);

// var can be re-declared and updated
var oldVar = "Var can be redeclared";
console.log("Var redeclared:", oldVar);

// -------------------------------
// 2. LET – Block Scoped
// -------------------------------
let blockVar = "I am a let variable";
console.log("Let:", blockVar);

// let can be updated but not redeclared in same scope
blockVar = "Let can be updated";
console.log("Let updated:", blockVar);

// -------------------------------
// 3. CONST – Constant (cannot be updated/redeclared)
// -------------------------------
const constantVar = "I am a constant variable";
console.log("Const:", constantVar);

// Uncommenting below lines will throw errors
// constantVar = "Cannot update"; 
// const constantVar = "Cannot redeclare";

// -------------------------------
// 4. MULTIPLE DECLARATIONS
// -------------------------------
let a = 10, b = 20, c = 30;
console.log("Multiple variables:", a, b, c);

// -------------------------------
// 5. VARIABLE TYPES
// -------------------------------
let numberVar = 42;          // Number
let stringVar = "Hello JS";  // String
let booleanVar = true;       // Boolean
let undefinedVar;            // Undefined
let nullVar = null;          // Null
let objectVar = {name: "Alice"}; // Object
let arrayVar = [1,2,3];      // Array

console.log("Number:", numberVar);
console.log("String:", stringVar);
console.log("Boolean:", booleanVar);
console.log("Undefined:", undefinedVar);
console.log("Null:", nullVar);
console.log("Object:", objectVar);
console.log("Array:", arrayVar);

// -------------------------------
// 6. TYPEOF OPERATOR
// -------------------------------
console.log("Type of numberVar:", typeof numberVar);
console.log("Type of stringVar:", typeof stringVar);
console.log("Type of booleanVar:", typeof booleanVar);
console.log("Type of undefinedVar:", typeof undefinedVar);
console.log("Type of nullVar:", typeof nullVar); // Object (quirk)
console.log("Type of objectVar:", typeof objectVar);
console.log("Type of arrayVar:", Array.isArray(arrayVar)); // true

// -------------------------------
// 7. DYNAMIC TYPING
// -------------------------------
let dynamicVar = 10; // Initially number
console.log("Dynamic var:", dynamicVar, typeof dynamicVar);

dynamicVar = "Now I am a string"; // Reassigned to string
console.log("Dynamic var:", dynamicVar, typeof dynamicVar);

dynamicVar = true; // Reassigned to boolean
console.log("Dynamic var:", dynamicVar, typeof dynamicVar);

// -------------------------------
// 8. VARIABLE HOISTING (var vs let/const)
// -------------------------------
console.log("Hoisting Example:");
// console.log(hoistedVar); // undefined (var is hoisted)
// console.log(hoistedLet); // ReferenceError
// console.log(hoistedConst); // ReferenceError

var hoistedVar = "I am hoisted";
let hoistedLet = "I am not hoisted like var";
const hoistedConst = "I am also not hoisted like var";

console.log("Hoisted Var:", hoistedVar);
console.log("Hoisted Let:", hoistedLet);
console.log("Hoisted Const:", hoistedConst);

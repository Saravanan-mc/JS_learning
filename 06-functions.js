/******************************************
 06-functions.js
 JavaScript Functions – Beginner to Advanced
******************************************/

// -------------------------------
// 1. FUNCTION DECLARATION
// -------------------------------
function add(a, b){
    return a + b;
}
console.log("Function Declaration - add(5, 10):", add(5, 10));

// -------------------------------
// 2. FUNCTION EXPRESSION
// -------------------------------
const multiply = function(a, b){
    return a * b;
}
console.log("Function Expression - multiply(3, 4):", multiply(3, 4));

// -------------------------------
// 3. ARROW FUNCTIONS (ES6)
// -------------------------------
const subtract = (a, b) => a - b;
console.log("Arrow Function - subtract(10, 5):", subtract(10, 5));

// Arrow function with multiple lines
const divide = (a, b) => {
    if(b === 0) return "Cannot divide by zero";
    return a / b;
}
console.log("Arrow Function - divide(10, 2):", divide(10, 2));

// -------------------------------
// 4. FUNCTION WITH DEFAULT PARAMETERS
// -------------------------------
function greet(name = "Guest"){
    return `Hello, ${name}!`;
}
console.log(greet());
console.log(greet("Alice"));

// -------------------------------
// 5. FUNCTION SCOPE
// -------------------------------
let globalVar = "I am global";

function scopeTest(){
    let localVar = "I am local";
    console.log(globalVar); // Accessible
    console.log(localVar);  // Accessible
}
scopeTest();
// console.log(localVar); // Error: localVar not defined

// -------------------------------
// 6. RETURN STATEMENT
// -------------------------------
function square(num){
    return num * num;
}
console.log("Square of 5:", square(5));

// -------------------------------
// 7. REST PARAMETERS (ES6)
// -------------------------------
function sumAll(...numbers){
    return numbers.reduce((acc, val) => acc + val, 0);
}
console.log("Sum All - sumAll(1,2,3,4):", sumAll(1,2,3,4));

// -------------------------------
// 8. HIGHER-ORDER FUNCTIONS
// -------------------------------
function greetUser(name){
    return `Hello, ${name}`;
}

function processUser(name, callback){
    return callback(name).toUpperCase();
}

console.log("Higher-Order Function:", processUser("Alice", greetUser));

// -------------------------------
// 9. IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)
// -------------------------------
(function(){
    console.log("IIFE executed immediately!");
})();

// -------------------------------
// ✅ FUNCTIONS LEARNING COMPLETE
// -------------------------------
console.log("All JavaScript function concepts demonstrated successfully!");

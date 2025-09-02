/******************************************
 08-scope-hoisting.js
 JavaScript Scope & Hoisting – Beginner to Advanced
******************************************/

// -------------------------------
// 1. GLOBAL SCOPE
// -------------------------------
var globalVar = "I'm a global variable";
let globalLet = "I'm also global (in file scope)";

function showGlobal() {
    console.log("Accessing globalVar:", globalVar);
    console.log("Accessing globalLet:", globalLet);
}
showGlobal();

// -------------------------------
// 2. FUNCTION SCOPE
// -------------------------------
function functionScope() {
    var functionVar = "I live inside this function";
    console.log("Inside function:", functionVar);
}
// console.log(functionVar); // ❌ ReferenceError
functionScope();

// -------------------------------
// 3. BLOCK SCOPE (LET & CONST)
// -------------------------------
if (true) {
    let blockLet = "I'm block-scoped";
    const blockConst = "I'm also block-scoped";
    console.log("Inside block:", blockLet, blockConst);
}
// console.log(blockLet); // ❌ ReferenceError
// console.log(blockConst); // ❌ ReferenceError

// -------------------------------
// 4. LEXICAL SCOPE & CLOSURES
// -------------------------------
function outer() {
    let outerVar = "outer variable";
    function inner() {
        console.log("Accessing from inner:", outerVar);
    }
    inner();
}
outer();

// -------------------------------
// 5. HOISTING WITH VAR
// -------------------------------
console.log("var before declaration:", hoistedVar); // undefined
var hoistedVar = "Now I'm defined!";
console.log("var after declaration:", hoistedVar);

// -------------------------------
// 6. HOISTING WITH LET & CONST
// -------------------------------
// console.log(hoistedLet);   // ❌ ReferenceError (Temporal Dead Zone)
// let hoistedLet = "Can't use before declaration";

// -------------------------------
// 7. FUNCTION HOISTING
// -------------------------------
sayHello(); // ✅ Works (function declarations are hoisted)

function sayHello() {
    console.log("Hello from a hoisted function!");
}

// greet(); // ❌ Error: greet is not a function
const greet = function() {
    console.log("Hi from function expression!");
};

// -------------------------------
// ✅ SCOPE & HOISTING COMPLETE
// -------------------------------
console.log("All scope & hoisting concepts demonstrated successfully!");


//Global Scope
let a = "Hello1";
function showGlobal() {
    console.log(a);
} showGlobal();


//Function Scope

function functionScope() {
    var a = "hello2";
    console.log(a);
}
// console.log(functionVar); // ❌ ReferenceError
functionScope();


//BLOCK SCOPE (LET & CONST)

if (true) {
    let b1 = "Hello3";
    const b2 = "Hello4";
    console.log(b1,b2);
}


//LEXICAL SCOPE & CLOSURES
function outer() {
    let outerVar = "outer variable";
    function inner() {
        console.log("Accessing from inner:", outerVar);
    }
    inner();
}
outer();


//HOISTING WITH VAR
console.log("var before declaration:", hoistedVar);
var hoistedVar = "Now I'm defined!";
console.log("var after declaration:", hoistedVar);



//FUNCTION HOISTING
sayHello();
function sayHello() {
    console.log("Hello from a hoisted function!");
}
const greet = function() {
    console.log("Hi from function expression!");
};

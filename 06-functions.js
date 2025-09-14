//Fuction 
function hello(name){
    return `Hello,${name}!`;
}
console.log(hello("world"))

//Add fun
function add(a,b){
    return a+b;
}
console.log(add(5,10))


//function exp
const m = function(a,b){
    return a*b
}
console.log(m(5,10))

// arrow function 
const sub = (a,b) => a-b;
console.log(sub(10,5))

//function with default parameters
function df(h="hello"){
    return `${h},world`
}
console.log(df())

//Fuction scope
let g="global"
function st(){
    let lv = "local"
    console.log(g)
    console.log(lv)
}
st();

//rest parameters
function sum(...n){
    return n.reduce((acc,val)=>acc+val,0)
}
console.log(sum(1,2,3,4))

// high order
function greet(name, formatter){
    return "Hello "+ formatter(name);
}
function Upper(name){
    return name.toUpperCase();
}
console.log(greet("Alice",Upper))

//Imediately Invoked Fuction Ecpression (IIFE)
/* It will work in online complier it's not run in my local 

(function() {
    let message = "Hello World";
    console.log(message);
})();

*/

//Recursion
function fact(n){
    if(n===0) return 1;
    return n*fact(n-1)
}
console.log(fact(5))



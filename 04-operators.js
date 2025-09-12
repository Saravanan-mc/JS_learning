
//Arithmetic Operators

let a = 10, b = 5;
console.log("Arithmetic Operators:");
console.log("a + b =", a + b);//15
console.log("a - b =", a - b);//5
console.log("a * b =", a * b);//50
console.log("a / b =", a / b);//2
console.log("a % b =", a % b);//0
console.log("a ** b =", a ** b);//100000
a++;
console.log("a++ =", a);//11
b--;
console.log("b-- =", b); //4
console.log("\n");


// Assignment Operators
let x = 5;
console.log("Assignment Operators:");
console.log("x =", x);//5

x += 3; 
console.log("x += 3 →", x);//8

x -= 2;
console.log("x -= 2 →", x);//6

x *= 4;
console.log("x *= 4 →", x);//24

x /= 2;
console.log("x /= 2 →", x);//12

x %= 2;
console.log("x %= 2 →", x);//0

console.log("\n");


// Comparison Operators
a = 10; b = 5;
console.log("Comparison Operators:");
console.log("a == '10' →", a == "10");// true
console.log("a === '10' →", a === "10");// false
console.log("a != b →", a != b);// true
console.log("a !== '10' →", a !== "10");// true
console.log("a > b →", a > b);// true
console.log("a < b →", a < b);// false
console.log("a >= 10 →", a >= 10);// true
console.log("b <= 5 →", b <= 5);// true

console.log("\n");


// Logical Operators
console.log("Logical Operators:");
console.log("true && false →", true && false);// false
console.log("true || false →", true || false);// true
console.log("!true →", !true);// false

console.log("\n");


//Bitwise Operators
a = 5; b = 1;
console.log("Bitwise Operators:");
console.log("a & b =", a & b);// 1
console.log("a | b =", a | b);// 5
console.log("a ^ b =", a ^ b);// 4
console.log("~a =", ~a);// -6
console.log("a << 1 =", a << 1);// 10
console.log("a >> 1 =", a >> 1);// 2


console.log(typeof 123);// "number"
console.log(typeof "Hello");// "string"
console.log(typeof true);// "boolean"
console.log(typeof undefined);// "undefined"
console.log(typeof null);// "object"
console.log(typeof {});// "object"
console.log(typeof []);// "object"
console.log(typeof function(){});//"function"


let arr = [1, 2, 3];
console.log(arr instanceof Array);// true
console.log(arr instanceof Object);// true
console.log(arr instanceof String);// false

function Person(name) {
  this.name = name;
}
let p1 = new Person("Arun");
console.log(p1 instanceof Person);// true
console.log(p1 instanceof Object);// true


//String Operators
let message = "Hello";
message += " World!";
console.log(message);
let v = 5 + "5";
console.log(v); // "55" (string)
console.log("The answer is " + 10 + 5); 



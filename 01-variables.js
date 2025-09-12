console.log("Hello world");

//Old Var
var var1 = "Hello"
console.log(var1);

//let is new 
let let1 = "Hii"
console.log(let1);


//Variable
let numberVar = 45;          // Number
let stringVar = "Hello";  // String
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


console.log("Type of numberVar:", typeof numberVar);
console.log("Type of stringVar:", typeof stringVar);
console.log("Type of booleanVar:", typeof booleanVar);
console.log("Type of undefinedVar:", typeof undefinedVar);
console.log("Type of nullVar:", typeof nullVar); // Object (quirk)
console.log("Type of objectVar:", typeof objectVar);
console.log("Type of arrayVar:", Array.isArray(arrayVar)); // true

//Dynamic Type
let dynamicVar = 10; // Initially number
console.log("Dynamic var:", dynamicVar, typeof dynamicVar);

dynamicVar = "Now I am a string"; // Reassigned to string
console.log("Dynamic var:", dynamicVar, typeof dynamicVar);

dynamicVar = true; // Reassigned to boolean
console.log("Dynamic var:", dynamicVar, typeof dynamicVar);


//Type Conversion (Explicit / Manual)

// String to Number
let str = "123";
let num = Number(str);
console.log(num, typeof num); // 123 "number"

// Number to String
let n = 99;
let s = String(n);
console.log(s, typeof s); // "99" "string"

// Boolean to Number
console.log(Number(true));  // 1
console.log(Number(false)); // 0

// Number to Boolean
console.log(Boolean(0));   // false
console.log(Boolean(1));   // true


//Implicit Or Automatic
console.log("5" + 2);  // "52"   string
console.log("5" - 2);  // 3     number
console.log("5" * "2"); // 10    number
console.log(1 + true);  // 2      number
console.log(1 + null);  // 1     0
console.log(1 + undefined); // NaN 

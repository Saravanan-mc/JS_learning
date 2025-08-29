/******************************************
 02-data-types.js
 JavaScript Data Types – Beginner to Advanced
******************************************/

// -------------------------------
// 1. NUMBER
// -------------------------------
let intNum = 42;          // Integer
let floatNum = 3.14;      // Floating point
let negativeNum = -7;     // Negative number

console.log("Integer:", intNum);
console.log("Float:", floatNum);
console.log("Negative:", negativeNum);
console.log("Type of intNum:", typeof intNum);

// -------------------------------
// 2. STRING
// -------------------------------
let singleQuote = 'Hello';
let doubleQuote = "World";
let templateLiteral = `JS Learning ${singleQuote} ${doubleQuote}`;

console.log("Single Quote:", singleQuote);
console.log("Double Quote:", doubleQuote);
console.log("Template Literal:", templateLiteral);
console.log("Type of singleQuote:", typeof singleQuote);

// String operations
let str1 = "Hello";
let str2 = "JS";
console.log("Concatenation:", str1 + " " + str2);
console.log("Length:", str1.length);
console.log("Uppercase:", str1.toUpperCase());
console.log("Lowercase:", str2.toLowerCase());
console.log("Character at index 1:", str1.charAt(1));
console.log("Includes 'ell'? ", str1.includes("ell"));

// -------------------------------
// 3. BOOLEAN
// -------------------------------
let isTrue = true;
let isFalse = false;

console.log("Boolean true:", isTrue);
console.log("Boolean false:", isFalse);
console.log("Type of isTrue:", typeof isTrue);

// -------------------------------
// 4. UNDEFINED
// -------------------------------
let undefinedVar;
console.log("Undefined variable:", undefinedVar);
console.log("Type of undefinedVar:", typeof undefinedVar);

// -------------------------------
// 5. NULL
// -------------------------------
let nullVar = null;
console.log("Null variable:", nullVar);
console.log("Type of nullVar (quirk):", typeof nullVar);

// -------------------------------
// 6. OBJECT
// -------------------------------
let person = {
    name: "Alice",
    age: 25,
    isStudent: true
};

console.log("Object:", person);
console.log("Access property:", person.name);
console.log("Type of person:", typeof person);

// Adding and deleting properties
person.city = "New York";
delete person.isStudent;
console.log("Updated Object:", person);

// -------------------------------
// 7. ARRAY
// -------------------------------
let fruits = ["Apple", "Banana", "Mango"];
console.log("Array:", fruits);
console.log("First Element:", fruits[0]);
console.log("Array Length:", fruits.length);
console.log("Type of fruits:", typeof fruits);
console.log("Is array?", Array.isArray(fruits));

// Array operations
fruits.push("Orange");       // Add to end
fruits.pop();                // Remove from end
fruits.unshift("Grapes");    // Add to start
fruits.shift();              // Remove from start
console.log("Updated Array:", fruits);

// -------------------------------
// 8. SYMBOL (ES6)
// -------------------------------
let sym1 = Symbol("id");
let sym2 = Symbol("id");
console.log("Symbol 1:", sym1);
console.log("Symbol 2:", sym2);
console.log("Are equal?", sym1 === sym2); // false

// -------------------------------
// 9. BIGINT (ES11)
// -------------------------------
let bigIntNum = 123456789012345678901234567890n;
console.log("BigInt:", bigIntNum);
console.log("Type of BigInt:", typeof bigIntNum);

// -------------------------------
// 10. TYPE CONVERSION
// -------------------------------
let num = 42;
let str = "123";

console.log("Number to String:", String(num));
console.log("String to Number:", Number(str));
console.log("String to Number (invalid):", Number("abc")); // NaN
console.log("Boolean Conversion:", Boolean(0), Boolean(1), Boolean(""), Boolean("JS"));

// -------------------------------
// ✅ DATA TYPES LEARNING COMPLETE
// -------------------------------
console.log("All JS data types covered successfully!");

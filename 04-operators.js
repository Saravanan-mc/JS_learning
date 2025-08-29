/******************************************
 03-operators.js
 JavaScript Operators – Beginner to Advanced
******************************************/

// -------------------------------
// 1. ARITHMETIC OPERATORS
// -------------------------------
let a = 10;
let b = 3;

console.log("a + b =", a + b); // Addition
console.log("a - b =", a - b); // Subtraction
console.log("a * b =", a * b); // Multiplication
console.log("a / b =", a / b); // Division
console.log("a % b =", a % b); // Modulus
console.log("a ** b =", a ** b); // Exponentiation
console.log("++a =", ++a); // Pre-increment
console.log("b-- =", b--); // Post-decrement
console.log("b after decrement =", b);

// -------------------------------
// 2. ASSIGNMENT OPERATORS
// -------------------------------
let x = 5;
x += 3; // x = x + 3
console.log("x += 3 ->", x);

x -= 2; // x = x - 2
console.log("x -= 2 ->", x);

x *= 2; // x = x * 2
console.log("x *= 2 ->", x);

x /= 3; // x = x / 3
console.log("x /= 3 ->", x);

x %= 2; // x = x % 2
console.log("x %= 2 ->", x);

// -------------------------------
// 3. COMPARISON OPERATORS
// -------------------------------
let m = 10;
let n = "10";

console.log("m == n ?", m == n);   // true (value only)
console.log("m === n ?", m === n); // false (value + type)
console.log("m != n ?", m != n);   // false
console.log("m !== n ?", m !== n); // true
console.log("m > 5 ?", m > 5);
console.log("m < 15 ?", m < 15);
console.log("m >= 10 ?", m >= 10);
console.log("m <= 9 ?", m <= 9);

// -------------------------------
// 4. LOGICAL OPERATORS
// -------------------------------
let p = true;
let q = false;

console.log("p && q =", p && q); // AND
console.log("p || q =", p || q); // OR
console.log("!p =", !p);         // NOT
console.log("!q =", !q);

// -------------------------------
// 5. TERNARY OPERATOR
// -------------------------------
let age = 18;
let status = age >= 18 ? "Adult" : "Minor";
console.log("Ternary Operator:", status);

// -------------------------------
// 6. BITWISE OPERATORS
// -------------------------------
let bit1 = 5;  // 0101
let bit2 = 3;  // 0011

console.log("bit1 & bit2 =", bit1 & bit2); // AND -> 1
console.log("bit1 | bit2 =", bit1 | bit2); // OR -> 7
console.log("bit1 ^ bit2 =", bit1 ^ bit2); // XOR -> 6
console.log("~bit1 =", ~bit1);             // NOT -> -6
console.log("bit1 << 1 =", bit1 << 1);     // Left shift -> 10
console.log("bit1 >> 1 =", bit1 >> 1);     // Right shift -> 2
console.log("bit1 >>> 1 =", bit1 >>> 1);   // Zero-fill right shift -> 2

// -------------------------------
// 7. STRING OPERATORS
// -------------------------------
let str1 = "Hello";
let str2 = "World";
let str3 = str1 + " " + str2; // Concatenation
console.log("String Concatenation:", str3);

// -------------------------------
// 8. TYPE OPERATORS
// -------------------------------
console.log("typeof str1:", typeof str1);
console.log("typeof a:", typeof a);
console.log("instanceof Array?", [1,2,3] instanceof Array);
console.log("instanceof Object?", {name:"Alice"} instanceof Object);

// -------------------------------
// ✅ ALL OPERATORS COVERED
// -------------------------------
console.log("All JS operators demonstrated successfully!");

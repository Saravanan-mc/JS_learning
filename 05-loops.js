/******************************************
 05-loops.js
 JavaScript Loops – Beginner to Advanced
******************************************/

// -------------------------------
// 1. FOR LOOP
// -------------------------------
console.log("For Loop:");
for(let i = 1; i <= 5; i++){
    console.log("Iteration:", i);
}

// -------------------------------
// 2. WHILE LOOP
// -------------------------------
console.log("While Loop:");
let count = 1;
while(count <= 5){
    console.log("Count:", count);
    count++;
}

// -------------------------------
// 3. DO-WHILE LOOP
// -------------------------------
console.log("Do-While Loop:");
let num = 1;
do{
    console.log("Number:", num);
    num++;
} while(num <= 5);

// -------------------------------
// 4. FOR-OF LOOP (ARRAY ITERATION)
// -------------------------------
console.log("For-Of Loop:");
let fruits = ["Apple", "Banana", "Mango"];
for(let fruit of fruits){
    console.log(fruit);
}

// -------------------------------
// 5. FOR-IN LOOP (OBJECT ITERATION)
// -------------------------------
console.log("For-In Loop:");
let person = {name: "Alice", age: 25, city: "NY"};
for(let key in person){
    console.log(`${key}: ${person[key]}`);
}

// -------------------------------
// 6. NESTED LOOPS
// -------------------------------
console.log("Nested Loops:");
for(let i = 1; i <= 3; i++){
    for(let j = 1; j <= 2; j++){
        console.log(`i=${i}, j=${j}`);
    }
}

// -------------------------------
// 7. LOOP CONTROL STATEMENTS
// -------------------------------
console.log("Loop Control Statements:");

// BREAK
console.log("Break Example:");
for(let i = 1; i <= 5; i++){
    if(i === 3) break; // exit loop when i = 3
    console.log(i);
}

// CONTINUE
console.log("Continue Example:");
for(let i = 1; i <= 5; i++){
    if(i === 3) continue; // skip iteration when i = 3
    console.log(i);
}

// -------------------------------
// 8. ARRAY METHODS AS LOOPS
// -------------------------------
console.log("Array Methods (forEach, map, filter):");
let numbers = [1,2,3,4,5];

numbers.forEach(num => console.log("forEach:", num));

let squared = numbers.map(num => num * num);
console.log("Map (squared):", squared);

let evens = numbers.filter(num => num % 2 === 0);
console.log("Filter (evens):", evens);

// -------------------------------
// ✅ LOOPS LEARNING COMPLETE
// -------------------------------
console.log("All JavaScript loops demonstrated successfully!");

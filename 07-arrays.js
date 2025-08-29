/******************************************
 07-arrays.js
 JavaScript Arrays – Beginner to Advanced
******************************************/

// -------------------------------
// 1. ARRAY CREATION
// -------------------------------
let fruits = ["Apple", "Banana", "Mango"];
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "Hello", true, null];

console.log("Fruits:", fruits);
console.log("Numbers:", numbers);
console.log("Mixed:", mixed);

// -------------------------------
// 2. ACCESS ELEMENTS
// -------------------------------
console.log("First fruit:", fruits[0]);
console.log("Last fruit:", fruits[fruits.length - 1]);

// -------------------------------
// 3. MODIFY ELEMENTS
// -------------------------------
fruits[1] = "Blueberry";
console.log("Modified Fruits:", fruits);

// -------------------------------
// 4. ARRAY METHODS - ADD/REMOVE
// -------------------------------
fruits.push("Orange");      // Add to end
console.log("After push:", fruits);

fruits.pop();               // Remove from end
console.log("After pop:", fruits);

fruits.unshift("Grapes");   // Add to start
console.log("After unshift:", fruits);

fruits.shift();             // Remove from start
console.log("After shift:", fruits);

// -------------------------------
// 5. ARRAY LENGTH
// -------------------------------
console.log("Number of fruits:", fruits.length);

// -------------------------------
// 6. ITERATION
// -------------------------------
console.log("For Loop:");
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

console.log("For-Of Loop:");
for(let fruit of fruits){
    console.log(fruit);
}

console.log("forEach Method:");
fruits.forEach((fruit, index) => {
    console.log(index, fruit);
});

// -------------------------------
// 7. MAP, FILTER, REDUCE
// -------------------------------
let numbersDoubled = numbers.map(num => num * 2);
console.log("Map - Doubled:", numbersDoubled);

let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Filter - Even Numbers:", evenNumbers);

let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log("Reduce - Sum:", sum);

// -------------------------------
// 8. SEARCH & FIND
// -------------------------------
console.log("IndexOf 'Mango':", fruits.indexOf("Mango"));
console.log("Includes 'Banana'?", fruits.includes("Banana"));

let found = numbers.find(num => num > 3);
console.log("Find first number > 3:", found);

let foundIndex = numbers.findIndex(num => num > 3);
console.log("FindIndex first number > 3:", foundIndex);

// -------------------------------
// 9. SORT & REVERSE
// -------------------------------
let sortedNumbers = [...numbers].sort((a,b) => a - b);
console.log("Sorted Numbers:", sortedNumbers);

let reversedNumbers = [...numbers].reverse();
console.log("Reversed Numbers:", reversedNumbers);

// -------------------------------
// 10. CONCAT, JOIN, SLICE, SPLICE
// -------------------------------
let moreFruits = ["Pineapple", "Strawberry"];
let allFruits = fruits.concat(moreFruits);
console.log("Concat Fruits:", allFruits);

console.log("Join Fruits:", allFruits.join(", "));

console.log("Slice Fruits (1,3):", allFruits.slice(1,3));

let spliced = allFruits.splice(2,2, "Kiwi", "Peach"); // remove 2, add 2
console.log("Spliced Fruits:", spliced);
console.log("All Fruits after splice:", allFruits);

// -------------------------------
// ✅ ARRAYS LEARNING COMPLETE
// -------------------------------
console.log("All JavaScript array operations demonstrated successfully!");

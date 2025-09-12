//For Loop
for (let i = 1; i <= 5; i++) {
  console.log("For loop:", i);
}

//While Loop
let i = 1;
while (i <= 5) {
  console.log("While loop:", i);
  i++;
}

//Do While Loop
let j = 1;
do {
  console.log("Do While loop:", j);
  j++;
} while (j <= 5);

//Break
for (let i = 1; i <= 5; i++) {
  if (i === 3) break; 
  console.log("Break:", i);
}

//Continue
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue; 
  console.log("Continue:", i);
}

//for...in Loop
let person = { name: "Arun", age: 25, city: "Chennai" };
for(let key in person){
  console.log(key, ":", person[key]);
}

//for...of Loop
let fruits = ["Apple", "Banana", "Mango"];
for (let f of fruits) {
  console.log(f);
}

//Basic
let fruit = ["Apple", "Banana", "Mango"];
fruit.forEach(function(f) {
  console.log(f);
});

//With Index
let numbers = [10, 20, 30];
numbers.forEach(function(num, index) {
  console.log("Index:", index, "Value:", num);
});

//Arrow Function
let colors = ["Red", "Green", "Blue"];
colors.forEach((color, i) => {
  console.log(`Color at index ${i} = ${color}`);
});

//Sum of Array
let nums = [1, 2, 3, 4, 5];
let sum = 0;
nums.forEach(n => sum += n);
console.log("Total Sum:", sum);

//Create an Array
let numbers = []; // empty array
let fruits = ["Apple", "Banana", "Mango"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

for (let fruit of fruits) {
    console.log(fruit);
}

fruits.forEach(fruit => console.log(fruit));

let mixed = [1, "Hello", true, {name: "Alice"}, [1, 2, 3]];
console.log(mixed[3].name); // Alice
console.log(mixed[4][1]);   // 2


fruits.push("Orange"); // end
fruits.unshift("Pineapple"); // start

fruits.pop();   // last romove
fruits.shift(); // first remove


//if
let n = 20;
if (n >= 10) {
  console.log("You are an adult");
}

//if-else
let  age = 15;
if (age >= 18) {
  console.log("You are Eligible to Vote");
} else {
  console.log("You are Not Eligible to Vote");
}

//ternary Operator
let result = (age>18)?"Adult":"Minor";
console.log(result);

//Nested id-else
let hasID = true;
if (age >= 18) {
  if (hasID) {
    console.log("You can enter the club");
  } else {
    console.log("You need an ID");
  }
} else {
  console.log("You are under 18");
}

let marks = 75;
if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 60) {
  console.log("Grade B");
} else {
  console.log("Grade C");
}

//Swith
let day = 3;
switch (day) {
  case 1: console.log("Monday"); break;
  case 2: console.log("Tuesday"); break;
  case 3: console.log("Wednesday"); break;
  default: console.log("Other day");
}

//Short-circuit
let isLoggedIn = true;
let username = "Hello";
isLoggedIn && console.log("Welcome " + username);


let name = "";
let user = name || "Guest";
console.log(user);

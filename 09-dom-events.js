/******************************************
 09-dom-events.js
 JavaScript DOM & Events – Beginner to Advanced
******************************************/

// -------------------------------
// 1. DOCUMENT OBJECT MODEL (DOM)
// -------------------------------
// The DOM represents the HTML page structure as a tree of nodes.
// With JavaScript, we can SELECT, MODIFY, ADD, or REMOVE elements.

// Example: Basic HTML for demo (assume this exists in index.html)
/*
<body>
  <h1 id="title">Hello World</h1>
  <p class="message">Welcome to DOM Tutorial</p>
  <button id="btn">Click Me</button>
  <input id="nameInput" type="text" placeholder="Enter name">
  <form id="myForm">
    <input type="email" id="email" placeholder="Enter email">
    <button type="submit">Submit</button>
  </form>
  <div id="output"></div>
</body>
*/

// -------------------------------
// 2. SELECTING ELEMENTS
// -------------------------------
// getElementById
let title = document.getElementById("title");
console.log("Title Element:", title);

// querySelector (first match)
let message = document.querySelector(".message");
console.log("Message Element:", message);

// querySelectorAll (all matches)
let allParagraphs = document.querySelectorAll("p");
console.log("All Paragraphs:", allParagraphs);

// -------------------------------
// 3. CHANGING CONTENT & STYLES
// -------------------------------
title.textContent = "DOM Manipulation in JS";
message.innerHTML = "<b>Learning DOM is fun!</b>";

// Change styles
title.style.color = "blue";
message.style.fontSize = "18px";

// -------------------------------
// 4. EVENT LISTENERS
// -------------------------------
let button = document.getElementById("btn");

// Method 1: Inline in HTML (not recommended)
// <button onclick="alert('Clicked!')">Click</button>

// Method 2: assign to property
button.onclick = function () {
    console.log("Button clicked using onclick property!");
};

// Method 3: addEventListener (best way)
button.addEventListener("click", function () {
    console.log("Button clicked using addEventListener!");
    title.style.color = "green";
});

// -------------------------------
// 5. FORM INPUT & VALIDATION
// -------------------------------
let input = document.getElementById("nameInput");
input.addEventListener("keyup", function (event) {
    console.log("Current Input Value:", event.target.value);
});

// Simple form validation
let form = document.getElementById("myForm");
form.addEventListener("submit", function (event) {
    event.preventDefault(); // stop page reload
    let email = document.getElementById("email").value;

    if (email === "" || !email.includes("@")) {
        alert("Please enter a valid email!");
    } else {
        alert("Form submitted successfully: " + email);
    }
});

// -------------------------------
// 6. TIMERS – setTimeout & setInterval
// -------------------------------
// setTimeout – runs once after delay
setTimeout(() => {
    console.log("This message shows after 2 seconds");
}, 2000);

// setInterval – runs repeatedly
let counter = 0;
let intervalId = setInterval(() => {
    counter++;
    console.log("Interval Count:", counter);
    if (counter === 5) {
        clearInterval(intervalId); // stop interval
        console.log("Interval stopped!");
    }
}, 1000);

// -------------------------------
// 7. CREATING & REMOVING ELEMENTS
// -------------------------------
let outputDiv = document.getElementById("output");

// Create new element
let newPara = document.createElement("p");
newPara.textContent = "I was created dynamically!";
outputDiv.appendChild(newPara);

// Remove element
setTimeout(() => {
    newPara.remove();
    console.log("Paragraph removed!");
}, 4000);

// -------------------------------
// ✅ DOM & EVENTS COMPLETE
// -------------------------------
console.log("All DOM & Event concepts demonstrated successfully!");

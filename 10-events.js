<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Events Full Tutorial</title>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; }
    .box { width: 120px; height: 120px; background: lightblue; margin: 10px; display: inline-block; cursor: pointer; }
    .highlight { background: orange; }
  </style>
</head>
<body>
  <h1>JavaScript Events – Complete Guide</h1>

  <button id="btn">Click Me</button>
  <input type="text" id="textInput" placeholder="Type something">
  
  <form id="form">
    <input type="text" id="username" placeholder="Username">
    <button type="submit">Submit</button>
  </form>

  <div id="parent" style="border:2px solid black; padding:20px;">
    Parent Div
    <div id="child" style="border:2px solid red; padding:20px;">Child Div</div>
  </div>

  <div id="container">
    <h3>Event Delegation Example</h3>
    <ul id="list">
      <li>Item 1</li>
      <li>Item 2</li>
    </ul>
    <button id="addItem">Add Item</button>
  </div>

  <div class="box" id="box1"></div>
  <div class="box" id="box2"></div>

  <script>
  /******************************************
   04-events-full.js
   JavaScript Events – Complete Guide
  ******************************************/

  // -------------------------------
  // 1. MOUSE EVENTS
  // -------------------------------
  let btn = document.getElementById("btn");

  btn.addEventListener("click", () => {
    console.log("Button clicked!");
    btn.textContent = "Clicked!";
  });

  let box1 = document.getElementById("box1");
  let box2 = document.getElementById("box2");

  box1.addEventListener("mouseover", () => {
    box1.classList.add("highlight");
    console.log("Mouse over box1");
  });

  box1.addEventListener("mouseout", () => {
    box1.classList.remove("highlight");
    console.log("Mouse out from box1");
  });

  box2.addEventListener("dblclick", () => {
    console.log("Double-clicked box2");
    box2.style.background = "purple";
  });

  // -------------------------------
  // 2. KEYBOARD EVENTS
  // -------------------------------
  let textInput = document.getElementById("textInput");

  textInput.addEventListener("keydown", (e) => {
    console.log("Key down:", e.key);
  });

  textInput.addEventListener("keyup", (e) => {
    console.log("Key up:", e.key);
  });

  textInput.addEventListener("input", (e) => {
    console.log("Current value:", e.target.value);
  });

  // -------------------------------
  // 3. FORM EVENTS
  // -------------------------------
  let form = document.getElementById("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent reload
    let username = document.getElementById("username").value;
    if (username.trim() === "") {
      alert("Username cannot be empty!");
    } else {
      alert("Form submitted: " + username);
    }
  });

  // -------------------------------
  // 4. EVENT BUBBLING & CAPTURING
  // -------------------------------
  let parent = document.getElementById("parent");
  let child = document.getElementById("child");

  parent.addEventListener("click", () => {
    console.log("Parent clicked (bubbling)");
  });

  child.addEventListener("click", () => {
    console.log("Child clicked (bubbling)");
  });

  // Capturing phase (third argument true)
  parent.addEventListener("click", () => {
    console.log("Parent clicked (capturing)");
  }, true);

  child.addEventListener("click", () => {
    console.log("Child clicked (capturing)");
  }, true);

  // -------------------------------
  // 5. EVENT DELEGATION
  // -------------------------------
  let list = document.getElementById("list");
  let addItemBtn = document.getElementById("addItem");
  let itemCount = 2;

  // Delegate click to parent UL
  list.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
      console.log("Clicked on:", e.target.textContent);
      e.target.style.color = "red";
    }
  });

  addItemBtn.addEventListener("click", () => {
    itemCount++;
    let newItem = document.createElement("li");
    newItem.textContent = "Item " + itemCount;
    list.appendChild(newItem);
  });

  // -------------------------------
  // 6. WINDOW & DOCUMENT EVENTS
  // -------------------------------
  window.addEventListener("resize", () => {
    console.log("Window resized! Width:", window.innerWidth);
  });

  window.addEventListener("scroll", () => {
    console.log("Page scrolled! ScrollY:", window.scrollY);
  });

  document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");
  });

  // -------------------------------
  // ✅ EVENTS FULL COMPLETE
  // -------------------------------
  console.log("All Event concepts demonstrated successfully!");
  </script>
</body>
</html>

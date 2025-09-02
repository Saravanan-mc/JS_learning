<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DOM Full Tutorial</title>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; }
    #title { color: darkred; }
    .highlight { background: yellow; }
    .box { width: 100px; height: 100px; background: lightblue; margin: 10px; }
    #output { border: 1px solid #ccc; padding: 10px; margin-top: 10px; }
  </style>
</head>
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
  <div class="box" id="box1"></div>
  <div class="box" id="box2"></div>

  <script>
  /******************************************
   09-dom-full.js
   JavaScript DOM – Complete Guide
  ******************************************/

  // -------------------------------
  // 1. SELECTING ELEMENTS
  // -------------------------------
  let title = document.getElementById("title");
  let message = document.querySelector(".message");
  let allParagraphs = document.querySelectorAll("p");

  console.log("Title:", title);
  console.log("Message:", message);
  console.log("All Paragraphs:", allParagraphs);

  // -------------------------------
  // 2. MODIFYING CONTENT & ATTRIBUTES
  // -------------------------------
  title.textContent = "DOM Manipulation in JavaScript";
  message.innerHTML = "<b>Learning DOM is fun!</b>";

  title.setAttribute("data-info", "Heading Element");
  console.log("Title attribute:", title.getAttribute("data-info"));

  // -------------------------------
  // 3. STYLES & CLASSES
  // -------------------------------
  title.style.color = "blue";
  message.style.fontSize = "20px";

  title.classList.add("highlight");
  console.log("Classes on title:", title.className);

  setTimeout(() => {
    title.classList.remove("highlight");
  }, 2000);

  // -------------------------------
  // 4. EVENTS
  // -------------------------------
  let button = document.getElementById("btn");

  // onclick property
  button.onclick = () => console.log("Button clicked using onclick!");

  // addEventListener
  button.addEventListener("click", () => {
    title.style.color = "green";
    console.log("Button clicked using addEventListener!");
  });

  // -------------------------------
  // 5. FORM HANDLING & VALIDATION
  // -------------------------------
  let input = document.getElementById("nameInput");
  input.addEventListener("keyup", (event) => {
    console.log("Input Value:", event.target.value);
  });

  let form = document.getElementById("myForm");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let email = document.getElementById("email").value;
    
    if (email === "" || !email.includes("@")) {
      alert("Please enter a valid email!");
    } else {
      alert("Form submitted: " + email);
    }
  });

  // -------------------------------
  // 6. CREATE, APPEND, REMOVE ELEMENTS
  // -------------------------------
  let outputDiv = document.getElementById("output");

  let newPara = document.createElement("p");
  newPara.textContent = "This paragraph was created dynamically!";
  outputDiv.appendChild(newPara);

  setTimeout(() => {
    newPara.remove();
    console.log("Dynamic paragraph removed!");
  }, 4000);

  // -------------------------------
  // 7. TIMERS (setTimeout & setInterval)
  // -------------------------------
  setTimeout(() => console.log("Runs after 2 seconds"), 2000);

  let count = 0;
  let intervalId = setInterval(() => {
    count++;
    console.log("Interval count:", count);
    if (count === 3) {
      clearInterval(intervalId);
      console.log("Interval stopped!");
    }
  }, 1000);

  // -------------------------------
  // 8. TRAVERSING THE DOM
  // -------------------------------
  console.log("Parent of message:", message.parentElement);
  console.log("Children of outputDiv:", outputDiv.children);

  // Siblings
  let box1 = document.getElementById("box1");
  let box2 = document.getElementById("box2");
  console.log("Next sibling of box1:", box1.nextElementSibling);
  console.log("Previous sibling of box2:", box2.previousElementSibling);

  // -------------------------------
  // 9. EVENT BUBBLING & DELEGATION
  // -------------------------------
  outputDiv.addEventListener("click", (event) => {
    if (event.target.tagName === "P") {
      console.log("You clicked on:", event.target.textContent);
    }
  });

  // Create new elements dynamically and still capture with delegation
  let dynamicP = document.createElement("p");
  dynamicP.textContent = "Click me - I was added later!";
  outputDiv.appendChild(dynamicP);

  // -------------------------------
  // 10. ADVANCED DOM (insertAdjacent, clone, replace)
  // -------------------------------
  let extraPara = document.createElement("p");
  extraPara.textContent = "Inserted before end!";
  outputDiv.insertAdjacentElement("beforeend", extraPara);

  // Clone node
  let clonedTitle = title.cloneNode(true);
  outputDiv.appendChild(clonedTitle);

  // Replace node
  let replacePara = document.createElement("p");
  replacePara.textContent = "I replaced the previous paragraph!";
  outputDiv.replaceChild(replacePara, extraPara);

  // -------------------------------
  // ✅ DOM FULL COMPLETE
  // -------------------------------
  console.log("All DOM operations demonstrated successfully!");
  </script>
</body>
</html>

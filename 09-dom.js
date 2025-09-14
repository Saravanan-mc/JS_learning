// Get elements
let title = document.getElementById("myTitle"); // by ID
let listItems = document.getElementsByClassName("list-item"); // by class
let firstListItem = document.querySelector(".list-item"); // first match
let allListItems = document.querySelectorAll(".list-item"); // all matches
let btn = document.getElementById("myBtn"); // ✅ define button

console.log("Title:", title);
console.log("All List Items:", allListItems);

// Change text
title.textContent = "Updated Title";
firstListItem.innerHTML = "<del>Item 1</del>";

// Style
title.style.color = "red";
title.style.backgroundColor = "yellow";
title.style.padding = "10px";

// Create new
let newItem = document.createElement("li");
newItem.textContent = "New Item";
newItem.classList.add("list-item");
document.querySelector("ul").appendChild(newItem);

// Insert before second item
let anotherItem = document.createElement("li");
anotherItem.textContent = "Inserted Before Item 2";
let ul = document.querySelector("ul");
ul.insertBefore(anotherItem, ul.children[1]);

// Remove (after 3 sec)
setTimeout(() => {
  let re = document.querySelector(".list-item");
  if (re) re.remove(); // removes first list item
}, 3000);

// Set attributes
btn.setAttribute("title", "This is a button tooltip");

// Get attribute
console.log("Button tooltip:", btn.getAttribute("title"));

// Remove attribute after 5 seconds
setTimeout(() => {
  btn.removeAttribute("title");
}, 5000);

// Event Listeners
btn.addEventListener("click", () => {
  alert("Button was clicked!"); //alert
  title.textContent = "Button Clicked!";
  title.style.color = "purple";
});

btn.addEventListener("mouseover", () => {
  btn.style.backgroundColor = "lightblue";
});

btn.addEventListener("mouseout", () => {
  btn.style.backgroundColor = "";
});

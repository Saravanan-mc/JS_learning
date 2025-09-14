 // Page Load
    document.addEventListener("DOMContentLoaded", () => {
      console.log("DOM fully loaded!");
    });

    // Click Event
    document.getElementById("clickBtn").addEventListener("click", () => {
      alert("Button was clicked!");
    });

    // Double Click Event
    document.getElementById("dblClickBtn").addEventListener("dblclick", () => {
      alert("Button was double-clicked!");
    });

    // Mouse Events
    let hoverBox = document.getElementById("hoverBox");
    hoverBox.addEventListener("mouseover", () => {
      hoverBox.style.background = "lightblue";
      hoverBox.textContent = "Mouse Over";
    });
    hoverBox.addEventListener("mouseout", () => {
      hoverBox.style.background = "lightgray";
      hoverBox.textContent = "Hover Over Me";
    });
    hoverBox.addEventListener("mousemove", () => {
      console.log("Mouse moving inside box...");
    });

    // Keyboard & Input Events
    let textInput = document.getElementById("textInput");
    let keyOutput = document.getElementById("keyOutput");

    textInput.addEventListener("keydown", (e) => {
      keyOutput.textContent = "Key down: " + e.key;
    });
    textInput.addEventListener("keyup", (e) => {
      keyOutput.textContent = "Key up: " + e.key;
    });
    textInput.addEventListener("input", () => {
      keyOutput.textContent = "You typed: " + textInput.value;
    });

    // Change Event
    let select = document.getElementById("mySelect");
    let selectOutput = document.getElementById("selectOutput");
    select.addEventListener("change", () => {
      selectOutput.textContent = "You selected: " + select.value;
    });

    // Form Submit Event
    let form = document.getElementById("myForm");
    let formOutput = document.getElementById("formOutput");
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // prevent page reload
      formOutput.textContent = "Form submitted! Name: " + document.getElementById("formInput").value;
    });

    // Focus & Blur Events
    let formInput = document.getElementById("formInput");
    formInput.addEventListener("focus", () => {
      formInput.style.border = "2px solid green";
    });
    formInput.addEventListener("blur", () => {
      formInput.style.border = "1px solid gray";
    });
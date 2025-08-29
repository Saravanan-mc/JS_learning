/******************************************
 04-conditions.js
 JavaScript Conditional Statements – Beginner to Advanced
******************************************/

// -------------------------------
// 1. IF STATEMENT
// -------------------------------
let score = 85;

if(score >= 90){
    console.log("Grade A");
}

if(score >= 75){
    console.log("Grade B or higher");
}

// -------------------------------
// 2. IF-ELSE STATEMENT
// -------------------------------
if(score >= 90){
    console.log("Excellent, Grade A");
} else {
    console.log("Less than A grade");
}

// -------------------------------
// 3. IF-ELSE IF-ELSE STATEMENT
// -------------------------------
if(score >= 90){
    console.log("Grade A");
} else if(score >= 75){
    console.log("Grade B");
} else if(score >= 50){
    console.log("Grade C");
} else {
    console.log("Fail");
}

// -------------------------------
// 4. NESTED IF
// -------------------------------
let age = 20;
let hasLicense = true;

if(age >= 18){
    if(hasLicense){
        console.log("Can drive");
    } else {
        console.log("Cannot drive without license");
    }
} else {
    console.log("Too young to drive");
}

// -------------------------------
// 5. SWITCH STATEMENT
// -------------------------------
let day = 3;

switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

// -------------------------------
// 6. TERNARY OPERATOR (SHORT CONDITIONAL)
// -------------------------------
let temperature = 30;
let weather = temperature > 25 ? "Hot" : "Cool";
console.log("Weather:", weather);

// -------------------------------
// 7. SHORT-CIRCUIT CONDITIONAL
// -------------------------------
let userName = "";
let displayName = userName || "Guest";
console.log("Display Name:", displayName);

// -------------------------------
// 8. MULTIPLE CONDITIONS WITH LOGICAL OPERATORS
// -------------------------------
let x = 10;
let y = 5;

if(x > 0 && y > 0){
    console.log("Both numbers are positive");
}

if(x > 0 || y < 0){
    console.log("At least one condition is true");
}

// -------------------------------
// 9. NESTED SWITCH (Optional Advanced)
// -------------------------------
let grade = "B";

switch(grade){
    case "A":
        console.log("Excellent");
        break;
    case "B":
        console.log("Good");
        switch(day){
            case 3:
                console.log("Wednesday Bonus!");
                break;
        }
        break;
    case "C":
        console.log("Average");
        break;
    default:
        console.log("Fail");
}

// -------------------------------
// ✅ CONDITIONALS LEARNING COMPLETE
// -------------------------------
console.log("All JavaScript conditional statements demonstrated successfully!");

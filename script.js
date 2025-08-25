// Part 1: Variables & Conditionals
let userName = "Millicent";
let userAge = 20;

if (userAge >= 18) {
  console.log(`${userName} is an adult ✅`);
} else {
  console.log(`${userName} is a minor ❌`);
}

// Part 2: Functions

// Function 1: Greet the user
function greetUser(name) {
  return `Hello, ${name}! Welcome to JavaScript practice 🚀`;
}

// Function 2: Add two numbers
function calculateSum(a, b) {
  return a + b;
}

// Part 3: Loops
let majorCities = ["Lagos", "Abuja", "Kano", "Ibadan", "Port Harcourt"];

// For loop
for (let i = 0; i < majorCities.length; i++) {
  console.log("City:", majorCities[i]);
}

// While loop
let count = 1;
while (count <= 5) {
  console.log("Counting:", count);
  count++;
}

// Part 4: DOM Interactions

// DOM 1: Change text when button is clicked
document.getElementById("greetBtn").addEventListener("click", function() {
  document.getElementById("message").innerText = greetUser(userName);
});

// DOM 2: Calculate and show sum
document.getElementById("calcBtn").addEventListener("click", function() {
  let result = calculateSum(12, 8);
  document.getElementById("message").innerText = `12 + 8 = ${result}`;
});

// DOM 3: Use loop to display cities dynamically
document.getElementById("loopBtn").addEventListener("click", function() {
  let list = document.getElementById("cityList");
  list.innerHTML = ""; // clear previous
  majorCities.forEach(city => {
    let li = document.createElement("li");
    li.textContent = city;
    list.appendChild(li);
  });
});

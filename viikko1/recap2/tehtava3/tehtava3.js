"use strict";

const numbers = [];
let validInput = true;

while (true) {
  const input = prompt("Enter a number (or 'done' to finish):");
  if (input === null || input.trim().toLowerCase() === "done") {
    break;
  }

  const number = Number(input);
  if (input.trim() === "" || !Number.isFinite(number)) {
    validInput = false;
    break;
  }
  numbers.push(number);
}

const target = document.querySelector("#target");
if (!validInput) {
  target.textContent = "Please enter a valid number or 'done'.";
} else {
  const evenNumbers = [];
  for (const number of numbers) {
    if (number % 2 === 0) {
      evenNumbers.push(number);
    }
  }

  target.textContent = `Even Numbers: ${
    evenNumbers.length > 0 ? evenNumbers.join(", ") : "None"
  }\nProgram ended.`;
}

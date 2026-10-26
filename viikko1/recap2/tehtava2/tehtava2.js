"use strict";

const numbers = [];
let validInput = true;

for (let i = 1; i <= 5; i++) {
  const input = prompt(`Enter number ${i}:`);
  const number = Number(input);
  if (input === null || input.trim() === "" || !Number.isFinite(number)) {
    validInput = false;
    break;
  }
  numbers.push(number);
}

const target = document.querySelector("#target");
if (!validInput) {
  target.textContent = "Please enter a valid number each time.";
} else {
  const searchInput = prompt("Enter a number to search:");
  const searchNumber = Number(searchInput);

  if (
    searchInput === null ||
    searchInput.trim() === "" ||
    !Number.isFinite(searchNumber)
  ) {
    target.textContent = "Please enter a valid number to search for.";
  } else {
    const originalNumbers = [...numbers];
    const found = numbers.includes(searchNumber);
    numbers.pop();
    const updatedNumbers = [...numbers];
    numbers.sort((a, b) => a - b);

    const output = [
      `Numbers: ${JSON.stringify(originalNumbers)}`,
      `Number ${searchNumber} is ${found ? "found" : "not found"} in the array.`,
      `Updated Numbers: ${JSON.stringify(updatedNumbers)}`,
      `Sorted Numbers: ${JSON.stringify(numbers)}`,
    ];
    console.log("Numbers:", originalNumbers);
    console.log(
      `Number ${searchNumber} is ${found ? "found" : "not found"} in the array.`,
    );
    console.log("Updated Numbers:", updatedNumbers);
    console.log("Sorted Numbers:", numbers);
    target.textContent = output.join("\n");
  }
}

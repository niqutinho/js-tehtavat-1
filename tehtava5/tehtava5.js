"use strict";

const input = prompt("Enter a positive integer:");
const n = Number(input);
const target = document.querySelector("#target");

if (input === null || !Number.isInteger(n) || n <= 0) {
  target.textContent = "Please enter a positive integer.";
} else {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  target.textContent = `The sum of numbers 1...${n} is ${sum}.`;
}

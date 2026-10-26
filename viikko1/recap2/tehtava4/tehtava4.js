"use strict";

function sortArray(numbers) {
  return [...numbers].sort((a, b) => a - b);
}

const numbers = [5, 2, 8, 1, 9];
const sortedNumbers = sortArray(numbers);

console.log("Original array:", numbers);
console.log("Sorted array:", sortedNumbers);

document.querySelector("#target").textContent = [
  `Original array: ${JSON.stringify(numbers)}`,
  `Sorted array: ${JSON.stringify(sortedNumbers)}`,
].join("\n");

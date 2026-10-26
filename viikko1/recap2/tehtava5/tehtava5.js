"use strict";

function sortArray(numbers, order) {
  if (order !== "asc" && order !== "desc") {
    throw new RangeError('Order must be either "asc" or "desc".');
  }

  const direction = order === "asc" ? 1 : -1;
  return [...numbers].sort((a, b) => direction * (a - b));
}

const numbers = [5, 2, 8, 1, 9];
const ascendingNumbers = sortArray(numbers, "asc");
const descendingNumbers = sortArray(numbers, "desc");

console.log("Original array:", numbers);
console.log('Ascending ("asc"):', ascendingNumbers);
console.log('Descending ("desc"):', descendingNumbers);

document.querySelector("#target").textContent = [
  `Original array: ${JSON.stringify(numbers)}`,
  `Ascending ("asc"): ${JSON.stringify(ascendingNumbers)}`,
  `Descending ("desc"): ${JSON.stringify(descendingNumbers)}`,
].join("\n");

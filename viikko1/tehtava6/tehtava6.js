"use strict";

const input = prompt("Enter a positive integer:");
const n = Number(input);
const target = document.querySelector("#target");

if (input === null || !Number.isInteger(n) || n <= 0) {
  target.textContent = "Please enter a positive integer.";
} else {
  let rows = "";
  for (let i = 1; i <= n; i++) {
    rows += "<tr>";
    for (let j = 1; j <= n; j++) {
      rows += `<td>${i * j}</td>`;
    }
    rows += "</tr>";
  }

  target.innerHTML = rows;
}

"use strict";

const a = Number(prompt("Enter side a:"));
const b = Number(prompt("Enter side b:"));
const c = Number(prompt("Enter side c:"));

let type;
if (
  !Number.isFinite(a) ||
  !Number.isFinite(b) ||
  !Number.isFinite(c) ||
  !(a > 0 && b > 0 && c > 0) ||
  a + b <= c ||
  a + c <= b ||
  b + c <= a
) {
  type = "not a valid triangle";
} else if (a === b && b === c) {
  type = "equilateral";
} else if (a === b || b === c || a === c) {
  type = "isosceles";
} else {
  type = "scalene";
}

document.querySelector("#target").textContent = `The triangle is ${type}.`;

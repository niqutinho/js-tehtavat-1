"use strict";

const input = prompt("Enter your score (0-100):");
const score = Number(input);
const target = document.querySelector("#target");

if (
  input === null ||
  input.trim() === "" ||
  !Number.isFinite(score) ||
  score < 0 ||
  score > 100
) {
  target.textContent = "Please enter a valid score between 0 and 100.";
} else {
  let grade;

  if (score >= 88) {
    grade = 5;
  } else if (score >= 76) {
    grade = 4;
  } else if (score >= 64) {
    grade = 3;
  } else if (score >= 52) {
    grade = 2;
  } else if (score >= 40) {
    grade = 1;
  } else {
    grade = 0;
  }

  target.textContent = `Your grade is ${grade}.`;
}

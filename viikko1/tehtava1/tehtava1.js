"use strict";

const celsius = parseFloat(prompt("Enter temperature in Celsius:"));
const fahrenheit = (celsius * 9) / 5 + 32;
const kelvin = celsius + 273.15;

document.querySelector("#target").innerHTML =
  `${celsius} °C = ${fahrenheit} °F = ${kelvin} K`;

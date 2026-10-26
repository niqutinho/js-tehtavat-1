"use strict";

const countInput = prompt("How many movies would you like to rate?");
const movieCount = Number(countInput);
const highestRatedTarget = document.querySelector("#highest-rated");
const moviesTarget = document.querySelector("#movies");

if (
  countInput === null ||
  countInput.trim() === "" ||
  !Number.isInteger(movieCount) ||
  movieCount <= 0
) {
  highestRatedTarget.textContent = "Please enter a positive whole number.";
} else {
  const movies = [];
  let validInput = true;

  for (let i = 1; i <= movieCount; i++) {
    const titleInput = prompt(`Enter the title of movie ${i}:`);
    if (titleInput === null || titleInput.trim() === "") {
      validInput = false;
      break;
    }

    const ratingInput = prompt(`Enter a rating for "${titleInput.trim()}" (1-5):`);
    const rating = Number(ratingInput);
    if (
      ratingInput === null ||
      ratingInput.trim() === "" ||
      !Number.isInteger(rating) ||
      rating < 1 ||
      rating > 5
    ) {
      validInput = false;
      break;
    }

    movies.push({ title: titleInput.trim(), rating });
  }

  if (!validInput) {
    highestRatedTarget.textContent =
      "Please enter a non-empty title and a whole-number rating from 1 to 5.";
  } else {
    movies.sort((a, b) => b.rating - a.rating);

    const highestRatedMovie = movies[0];
    highestRatedTarget.textContent = `Highest-rated movie: ${highestRatedMovie.title} (${highestRatedMovie.rating}/5)`;

    for (const movie of movies) {
      const item = document.createElement("li");
      item.textContent = `${movie.title} - ${movie.rating}/5`;
      moviesTarget.append(item);
    }
  }
}

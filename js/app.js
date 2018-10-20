document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector("#new-item-form");
  form.addEventListener("submit", handleFormSubmit);

  const deleteAll = document.querySelector("#deleteAll");
  deleteAll.addEventListener("click", handleDeleteAll);

  // const deleteMovie = document.querySelector(".delete-movie-button");
  // deleteMovie.addEventListener("click", handleDeleteMovie);

});


const handleFormSubmit = function (event) {
  event.preventDefault();

  const movieListItem = createMovieListItem(event.target);
  const result = document.querySelector("#movie-list");
  result.appendChild(movieListItem);

  document.getElementById('new-item-form').reset();
};


const createMovieListItem = function (form) {
  const movieListItem = document.createElement("li");
  movieListItem.classList.add("movie-list-item");

  const title = document.createElement("h2");
  title.textContent = form.title.value;
  movieListItem.appendChild(title);

  const genre = document.createElement("p");
  genre.textContent = form.genre.value;
  movieListItem.appendChild(genre);

  const rating = document.createElement("h3");
  rating.textContent = form.rating.value;
  movieListItem.appendChild(rating);

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete Movie";
  deleteButton.classList.add("delete-movie-button");
  movieListItem.appendChild(deleteButton);

  return movieListItem
};


const handleDeleteAll = function () {
  const movies = document.getElementById("movie-list");
  movies.textContent = "";
};

// const handleDeleteMovie = function () {
//   const movieItem = document.getElementsByClassName("movie-list-item");
//   movieItem.innerHTML = "";
// };

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector("#new-item-form");
  form.addEventListener("submit", handleFormSubmit);

  const deleteAll = document.querySelector("#deleteAll");
  deleteAll.addEventListener("click", handleDeleteAll);

});


const handleFormSubmit = function (event) {
  event.preventDefault();

  const movieListItem = createMovieListItem(event.target);
  const result = document.querySelector("#movie-list");
  result.appendChild(movieListItem);

  // const title = document.createElement("h2")
  // title.classList.add("movie-item");
  // const genre = document.createElement("h3")
  // genre.classList.add("movie-item");
  // const rating = document.createElement("p")
  // rating.classList.add("movie-item");

  // title.textContent = `${this.title.value}`
  // genre.textContent = `${this.genre.value}`
  // rating.textContent = `${this.rating.value}`
  //
  // result.appendChild(title);
  // result.appendChild(genre);
  // result.appendChild(rating);

  document.getElementById('new-item-form').reset();
};


const createMovieListItem = function (form) {
  const movieListItem = document.createElement("li");
  movieListItem.classList.add("movie-list-item");

  const title = document.createElement("h2");
  title.textContent = form.title.value;
  movieListItem.appendChild(title);

  const genre = document.createElement("h3");
  genre.textContent = form.genre.value;
  movieListItem.appendChild(genre);

  const rating = document.createElement("p");
  rating.textContent = form.rating.value;
  movieListItem.appendChild(rating);

  return movieListItem
};


const handleDeleteAll = function () {
  document.getElementById("movie-list").textContent = "";
};

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector("#new-item-form");
  form.addEventListener("submit", handleFormSubmit);

  const deleteAll = document.querySelector("#deleteAll");
  deleteAll.addEventListener("click", handleDeleteAll);

});


const handleFormSubmit = function (event) {
  event.preventDefault();

  const title = document.createElement("h2")
  const genre = document.createElement("h3")
  const rating = document.createElement("p")

  title.textContent = `${this.title.value}`
  genre.textContent = `${this.genre.value}`
  rating.textContent = `${this.rating.value}`

  const result = document.querySelector("#movie-list");
  result.appendChild(title);
  result.appendChild(genre);
  result.appendChild(rating);

  document.getElementById('new-item-form').reset();
};

const handleDeleteAll = function () {
  document.getElementById("movie-list").textContent = "";
};

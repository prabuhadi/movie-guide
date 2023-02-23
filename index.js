"use strict";

let movieNameRef = document.getElementById("movie-name");
let searchBtn = document.getElementById("search-btn");
let result = document.getElementById("result");

// function to fetch data from API OMDb

let getMovie = () => {
  let movieName = movieNameRef.value;
  let url = `http://www.omdbapi.com/?t=${movieName}&apikey=${key}`;

  // if input field is empty
  if (movieName.length <= 0) {
    result.innerHTML = `<h3 class="msg">Please enter movie name</h3>`;
  }

  // if input filled
  else {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        //if movie exist in database
        if (data.Response == "True") {
          result.innerHTML = `
          <div class="info">
            <img src=${data.Poster} class="poster" />
            <div>
              <h2>${data.Title}</h2>
              <div class="rating">
                <img src="star-icon.svg" />
                <h4>${data.imdbRating}</h4>
              </div>
              <div class="details">
                <span>${dataRated}</span>
                <span>${dataYear}</span>
                <span>${dataRuntime}</span>
              </div>
              <div class="genre">
                <div>${data.Genre.split(",").join("</div><div>")}</div>
              </div>
            </div>
            <h3>Plot :</h3>
            <p>${data.Plot}</p>
            <h3>Cast :</h3>
            <p>${data.Cast}</p>
          </div>
          `;
        }

        //if movie doesn't exist in database
        else {
          result.innerHTML = `<h3 class="msg">Movie not found</h3>`;
        }
      });

    // if error occurs
    try {
    } catch (error) {
      result.innerHTML = `<h3 class="msg">Error Occured</h3>`;
    }
  }
};

searchBtn.addEventListener("click", getMovie);
window.addEventListener("load", getMovie);

import axios from "axios";
import React, { useEffect, useState } from "react";

const API_URL = "http://www.omdbapi.com/?apikey=cca6a59";

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies(title) {
      const { data } = await axios.get(`${API_URL}&s=${title}`);
      setMovies(data.Search);
    }
    fetchMovies();
  }, []);
  return (
    <div className="movie__row">
      <div className="movie__wrapper">
        <div className="movie">
          <div className="movie__img">
            <img src={`${movie.Poster}`} alt="poster" />
            <div className="movies__content">
              <h1>${movie.Title}</h1>
              <h1>${movie.Year}</h1>
              <p onClick={`${movie.imdbID}`}>SEE MORE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movies;

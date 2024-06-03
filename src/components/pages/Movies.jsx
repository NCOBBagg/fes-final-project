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
            <img src={`${movies.Poster}`} alt="poster" />
            <div className="movies__content">
              <h1>${movies.Title}</h1>
              <h1>${movies.Year}</h1>
              <p onClick={`${movies.imdbID}`}>SEE MORE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movies;

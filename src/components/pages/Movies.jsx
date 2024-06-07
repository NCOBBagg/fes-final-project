import axios from "axios";
import React, { useEffect, useState } from "react";
import Nav from "../ui/Nav";
import { useParams } from "react-router-dom";

const API_URL = "http://www.omdbapi.com/?apikey=cca6a59";

function Movies() {
  const [movies, setMovies] = useState([]);
  const params = useParams()
  const title = params.id
  

  async function fetchMovies(title) {
    const { data } = await axios.get(`${API_URL}&s=${title}`);
    setMovies(data.Search);
  }

  useEffect(() => {
    fetchMovies(title);
  }, [title]);
  return (
    <>
    <Nav />
      <div className="movie__row">
        <div className="movie__wrapper">
          {movies.map((movie) => (
            ? new Array(8).fill(0).map((_, index) => {
              <div className="movie">
                <div className="movie__img--skeleton">

                </div>
              </div>
            })
            <div className="movie">
              <div className="movie__img" key={movie.id}>
                <img src={`${movie.Poster}`} alt="poster" />
                <div className="movies__content">
                  <h1>{movie.Title}</h1>
                  <h1>{movie.Year}</h1>
                  <p onClick={`${movie.imdbID}`}>SEE MORE</p>
                </div>
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </>
  );
}

export default Movies;

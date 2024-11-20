import axios from "axios";
import React, { useEffect, useState } from "react";
import Nav from "../ui/Nav";
import { useNavigate, useParams } from "react-router-dom";

const API_URL = "https://www.omdbapi.com/?apikey=cca6a59";

function Movies() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const { id: title } = useParams();
  const [loading, setLoading] = useState(true);

  async function onSearch(movieID) {
    navigate(`/moviecard/${movieID}`);
  }

  useEffect(() => {
    async function fetchMovies(title) {
      try {
        const { data } = await axios.get(`${API_URL}&s=${title}`);
        setMovies(data.Search);
      } catch (error) {
        // catch and handle/ignore
      } finally {
        setLoading(false);
      }
    }

    fetchMovies(title);
  }, [title]);
  return (
    <>
      <Nav />
      <div className="movie__row">
        <div className="movie__wrapper">
          {loading
            ? new Array(8).fill(0).map((_, index) => (
                <div className="movie" key={index}>
                  <div className="movie__img--skeleton">
                    <div className="movie__title--skeleton">
                      <div className="movie__year--skeleton"></div>
                    </div>
                  </div>
                </div>
              ))
            : movies.slice(0,8).map((movie) => (
                <div className="movie" key={movie.imdbID}>
                  <div className="movie__img">
                    <img src={`${movie.Poster}`} alt="poster" />
                    <div className="movie__content">
                      <h1>{movie.Title}</h1>
                      <h1>{movie.Year}</h1>
                      <p onClick={() => onSearch(movie.imdbID)}>SEE MORE</p>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </>
  );
}

export defau
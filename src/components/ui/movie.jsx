import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function movie() {

    const { id } = useParams
    const [imdbID, setImdbID] = useState(id)
    const [movie, setMovie]= useState([])
    const [loading, setLoading] = useState(true)

    function onSearch() {
        fetchMovies()
    }

    async function fetchMovies(){
        setLoading(true)
        const { data } = await axios.get(
            `https://www.omdbapi.com/?apikey=cca6a59&s=${searchItem}`
        )
        setMovie(data)
        setLoading(false)
    }

  return (
    <div className="movie__row">
      <div className="movie__wrapper">
        <div className="movie">
          <div className="movie__img">
            {/* <img src={${movie.Poster}}> */}
            <div className="movie__content">
              <h1>${movie.Title}</h1>
              <h1>${movie.Year}</h1>
              <p>
                <a onClick="movieInfo(`${movie.imdbID}`)">SEE MORE</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default movie;

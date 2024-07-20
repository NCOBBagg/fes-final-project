import React from "react";
import Nav from "../ui/Nav";
import axios from "axios";

const MovieCard = ({ movie: {Released, Actors, Genre, Director, Writer, Language, Plot } })

const API_URL = "http://www.omdbapi.com/?apikey=cca6a59";

async function moveDesc(imdbID) {
    const { movie } = await axios.get(`${API_URL}&i=${imdbID}`);
}

function Moviecard() {
  return (
    <>
      <Nav />
      <div className="movie__img--wrapper">
        <h1>${movie.Title}</h1>
        <img src={`${movie.Poster}`} alt="" />
      </div>
      <div className="movie__info--wrapper" key={imdbID}>
        <h3>
          <span className="red">Released: </span>${movie.Released}
        </h3>
        <h3>
          <span className="red">Actors: </span>${movie.Actors}
        </h3>
        <h3>
          <span className="red">Genre: </span>${movie.Genre}
        </h3>
        <h3>
          <span className="red">Director: </span>${movie.Director}
        </h3>
        <h3>
          <span className="red">Writer: </span>${movie.Writer}
        </h3>
        <h3>
          <span className="red">Language: </span>${movie.Language}
        </h3>
        <h3>
          <span className="red">Plot: </span>${movie.Plot}
        </h3>
      </div>
    </>
  );
}

export default Moviecard;

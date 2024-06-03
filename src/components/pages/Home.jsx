import React, { useEffect, useState } from "react";
import Nav from "../ui/Nav";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const API_URL = "http://www.omdbapi.com/?apikey=cca6a59";

function Home() {
  const [searchItem, setSearchItem] = useState("");
  const [movies, setMovies] = useState([]);

  function onSearch() {
    fetchMovies(searchItem);
  }
  async function fetchMovies(title) {
    const { data } = await axios.get(`${API_URL}&s=${title}`);
    setMovies(data);
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <Nav />
      <section id="landing">
        <div className="landing__container">
          <div className="landing__row">
            <h1 className="landing__header">
              America's favorite online movie search engine!
            </h1>
            <h3 className="landing__sub-header">
              Find your favorite movie here.
            </h3>
            <div className="search__container">
              <input
                type="text"
                value={searchItem}
                className="search__bar"
                placeholder="Search Movie Title"
                onChange={(event) => {
                  setSearchItem(event.target.value);
                }}
              />
              <button onClick={() => onSearch()} className="input__btn">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;

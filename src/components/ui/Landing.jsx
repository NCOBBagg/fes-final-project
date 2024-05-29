import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Landing() {

    
  return (
    <>
      <section id="landing">
        <div class="landing__container">
          <div class="landing__row">
            <h1 class="landing__header">
              America's favorite online movie search engine!
            </h1>
            <h3 class="landing__sub-header">Find your favorite movie here.</h3>
            <div class="search__container">
              <input
                type="text"
                class="search__bar"
                placeholder="Search Movie Title"
                onchange="onSearchChange(event)"
              />
              <button class="input__btn">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
          </div>
        </div>
        <div class="movie__row">
          <div class="movie__wrapper"></div>
        </div>
      </section>
    </>
  );
}

export default Landing;

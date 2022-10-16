import React, { useEffect, useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

import "./MoviesCardList.css";

function MoviesCardList({ moviesList, movieOptions, onClickMovieBtn }) {
  const [numberMovies, setNumberMovies] = useState(0);
  const [addNumberMovies, setAddNumberMovies] = useState(0);

  useEffect(() => {
    getAmountMovies(window.innerWidth);
    window.addEventListener(
      "resize",
      (window.fn = resizeWindow((evt) =>
        getAmountMovies(evt.currentTarget.innerWidth)
      ))
    );
    return () => window.removeEventListener("resize", window.fn);
  }, []);

  function getAmountMovies(windowWidth) {
    if (windowWidth >= 1280) {
      return (setNumberMovies(12), setAddNumberMovies(3));
    }
    if (windowWidth >= 768) {
      return (setNumberMovies(8), setAddNumberMovies(2));
    }
    if (windowWidth >= 320) {
      return (setNumberMovies(5), setAddNumberMovies(2));
    }
  }

  function moreMovies() {
    setNumberMovies(numberMovies + addNumberMovies);
  }

  function resizeWindow(callback) {
    let blockedCall = false;
    return function () {
      if (blockedCall) return;
      const context = this;
      const args = arguments;
      blockedCall = true;
      setTimeout(() => {
        callback.apply(context, args);
        blockedCall = false;
      }, 600);
    };
  }

  return (
    <>
      <div className="moviescard-list">
        {movieOptions === "all"
          ? moviesList.slice(0, numberMovies).map((moviesCard) => {
              return (
                <MoviesCard
                  key={moviesCard.id}
                  movie={moviesCard}
                  onClickMovieBtn={onClickMovieBtn}
                  movieOptions="all"
                ></MoviesCard>
              );
            })
          : moviesList.map((moviesCard) => {
              return (
                <MoviesCard
                  key={moviesCard._id}
                  movie={moviesCard}
                  onClickMovieBtn={onClickMovieBtn}
                ></MoviesCard>
              );
            })}
      </div>
      {moviesList.length > numberMovies && movieOptions === "all" ? (
        <button id="moviebtnshow" className="moviebtnshow" onClick={moreMovies}>
          Ещё
        </button>
      ) : (
        <React.Fragment />
      )}
    </>
  );
}

export default MoviesCardList;
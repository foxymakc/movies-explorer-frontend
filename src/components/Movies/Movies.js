import React, { useState, useEffect } from "react";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Preloader from "./Preloader/Preloader";
import moviesApi from "../../utils/MoviesApi";
import "./Movies.css";

function Movies({ onClickSaveMovie }) {
  const [isMovies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isRenderMovies, setRenderMovies] = useState(false);
  const [isErrorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (localStorage.getItem("listMovieData")) {
      setRenderMovies(true);
      setLoading(true);
      renderMovies();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function searchMovies() {
    const searchStringText = localStorage
      .getItem("searchStringText")
      .toLowerCase();
    const checkboxSwitchMovie = localStorage.getItem("checkboxSwitchMovie");
    const listMovieData = JSON.parse(localStorage.getItem("listMovieData"));

    const listFoundMovies = listMovieData.filter(
      (movie) => movie.nameRU.toLowerCase().indexOf(searchStringText) >= 0
    );
    if (checkboxSwitchMovie === "true") {
      return listFoundMovies.filter((movie) => movie.duration < 40);
    } else return listFoundMovies;
  }

  function renderMovies() {
    setLoading(false);
    const listFoundMovies = searchMovies();

    if (listFoundMovies.length === 0) {
      setErrorMessage("Ничего не найдено");
      setRenderMovies(false);
    } else {
      setRenderMovies(true);
      setMovies(listFoundMovies);
    }
  }

  function handleSearchMovies(searchStringText, checkboxSwitchMovie) {
    localStorage.setItem("searchStringText", searchStringText);
    localStorage.setItem("checkboxSwitchMovie", checkboxSwitchMovie);

    setLoading(true);
    if (!localStorage.getItem("listMovieData")) {
      moviesApi
        .getAllMovies()
        .then((res) => {
          localStorage.setItem("listMovieData", JSON.stringify(res));
          renderMovies();
        })
        .catch(() => {
          setLoading(false);
          setErrorMessage(
            "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
          );
        });
    } else renderMovies();
  }

  function onClickShortMovie(checkboxSwitchMovie) {
    localStorage.setItem("checkboxSwitchMovie", checkboxSwitchMovie);

    if (localStorage.getItem("listMovieData")) renderMovies();
  }

  return (
    <main>
      <SearchForm
        onSubmit={handleSearchMovies}
        onClick={onClickShortMovie}
        movieOptions={"all"}
      />
      <section className="moviescards">
        {isLoading ? (
          <Preloader />
        ) : isRenderMovies ? (
          <MoviesCardList
            moviesList={isMovies}
            isLoading={isLoading}
            movieOptions={"all"}
            onClickMovieBtn={onClickSaveMovie}
          ></MoviesCardList>
        ) : (
          isErrorMessage && (
            <p className="moviescards__error-message">{isErrorMessage}</p>
          )
        )}
      </section>
    </main>
  );
}

export default Movies;
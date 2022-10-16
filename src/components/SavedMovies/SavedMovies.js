import React, { useState, useEffect, useContext } from "react";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import Preloader from "../Movies/Preloader/Preloader";
import { CurrentSavedMoviesContext } from "../../contexts/CurrentSavedMoviesContext";
import "../Movies/Movies.css";
import "../SavedMovies/SavedMovies.css";

function SavedMovies({ onClickDeleteMovie }) {
  const isSavedMovies = useContext(CurrentSavedMoviesContext);
  const [isMovies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isRenderMovies, setRenderMovies] = useState(true);
  const [isErrorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setLoading(true);
    renderMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSavedMovies]);

  function searchSavedMovies(isSavedMovies) {
    const searchStringText = localStorage
      .getItem("searchSavedStringText")
      .toLowerCase();
    const checkboxSwitchMovie = localStorage.getItem(
      "checkboxSavedSwitchMovie"
    );

    const listFoundMovies = isSavedMovies.filter(
      (movie) => movie.nameRU.toLowerCase().indexOf(searchStringText) >= 0
    );
    if (checkboxSwitchMovie === true || checkboxSwitchMovie === "true") {
      return listFoundMovies.filter((movie) => movie.duration < 40);
    } else return listFoundMovies;
  }

  function renderMovies() {
    setLoading(true);
    const listFoundMovies = searchSavedMovies(isSavedMovies);

    if (listFoundMovies.length === 0) {
      setErrorMessage("Ничего не найдено");
      setLoading(false);
      setRenderMovies(false);
    } else {
      setLoading(false);
      setRenderMovies(true);
      setMovies(listFoundMovies);
    }
  }

  function handleSearchMovies(searchStringText, checkboxSwitchMovie) {
    localStorage.setItem("searchSavedStringText", searchStringText);
    localStorage.setItem("checkboxSavedSwitchMovie", checkboxSwitchMovie);
    renderMovies();
  }

  function onClickShortMovie(checkboxSwitchMovie) {
    localStorage.setItem("checkboxSavedSwitchMovie", checkboxSwitchMovie);
    renderMovies();
  }

  return (
    <div className="savedmovies">
      <SearchForm onSubmit={handleSearchMovies} onClick={onClickShortMovie} />
      <section className="moviescards">
        {isLoading ? (
          <Preloader />
        ) : isRenderMovies ? (
          <MoviesCardList
            moviesList={isMovies}
            isLoading={isLoading}
            displayOption={"save"}
            onClickMovieBtn={onClickDeleteMovie}
          ></MoviesCardList>
        ) : (
          isErrorMessage && (
            <p className="moviescards__error-message">{isErrorMessage}</p>
          )
        )}
      </section>
    </div>
  );
}

export default SavedMovies;
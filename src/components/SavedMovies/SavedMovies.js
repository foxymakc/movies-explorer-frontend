import React from "react";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import { standardSaveMovieList } from "../../utils/standartMovieList";
import "../Movies/Movies.css";
import "../SavedMovies/SavedMovies.css";

function SavedMovies() {
  return (
    <div className="savedmovies">
      <SearchForm isChecked={true} />
      <section className="moviescards">
        <MoviesCardList
          moviesList={standardSaveMovieList}
          isRenderLike
        ></MoviesCardList>
      </section>
    </div>
  );
}

export default SavedMovies;